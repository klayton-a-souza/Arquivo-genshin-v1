const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

function app() {
  const nodes = new Map();
  const node = (selector) => {
    if (!nodes.has(selector)) nodes.set(selector, {
      innerHTML: '', hidden: true, style: { setProperty() {} },
      classList: { add() {}, remove() {} }, focus() {}, querySelector: node,
      listeners: {}, addEventListener(type, callback) { this.listeners[type] = callback; },
    });
    return nodes.get(selector);
  };
  const context = vm.createContext({ window: {}, document: {
    querySelector: node, body: node('body'), activeElement: node('focus'), addEventListener() {},
  }, requestAnimationFrame: (fn) => fn() });
  const run = (code) => vm.runInContext(code, context);
  const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
  for (const file of ['data/builds.js', 'data/guides.js', 'data/recommendations.js', 'data/recommendation-assets.js', 'data/recommendation-assets-global.js', 'data/team-guidance.js']) run(read(file));
  const original = JSON.stringify(context.window.CHARACTER_GUIDES);
  run(read('data/traveler-team.js'));
  run(read('script.js'));
  return { context, run, node, original };
}

test('all four variants update independently in summary and recommendations', () => {
  const { run, node } = app();
  run('openTeamDetail(teams.findIndex(team => team.id === "traveler-cryo"))');
  for (const view of ['summary', 'recommendations', 'akasha']) {
    run(`activeBuildView = '${view}'`);
    for (const cryo of ['diona', 'qiqi']) {
      for (const electro of ['beidou', 'fischl']) {
        run(`selectTravelerFlex({dataset:{flexSlot:'cryo',flexCharacter:'${cryo}'}}, true)`);
        run(`selectTravelerFlex({dataset:{flexSlot:'electro',flexCharacter:'${electro}'}}, true)`);
        const members = JSON.parse(run('JSON.stringify(getTeamMembers(teams.find(team => team.id === "traveler-cryo")))'));
        assert.deepEqual(members, ['travelerCryo', cryo, electro, 'alyosha']);
        const html = node('#team-detail-content').innerHTML;
        assert.ok(html.includes(run('getTravelerVariant().tag')));
        assert.ok(html.includes(run('getTravelerVariant().rotation[0]')));
        assert.ok(html.includes(run('getTravelerVariant().rotation[1]')));
        assert.equal(run('document.querySelector("#team-detail-modal").hidden'), false);
        assert.equal(run('getBuild("alyosha").character.constellation'), 3);
      }
    }
  }
});

test('overview shows alternating flex portraits and keeps selectors inside details', () => {
  const { run, node } = app();
  const html = node('#teams-root').innerHTML;
  assert.ok(!html.includes('data-flex-slot'));
  assert.equal((html.match(/class="character-card flex-character-card"/g) || []).length, 2);
  assert.match(html, /Qiqi \/ Diona/);
  assert.match(html, /Fischl \/ Beidou/);
  for (const portrait of ['qiqi.webp', 'diona.png', 'fischl.png', 'beidou.png']) assert.ok(html.includes(portrait));
  run('openTeamDetail(teams.findIndex(team => team.id === "traveler-cryo"))');
  assert.match(node('#team-detail-content').innerHTML, /data-flex-slot="cryo"/);
  assert.match(node('#team-detail-content').innerHTML, /data-flex-slot="electro"/);
  run(`selectTravelerFlex({dataset:{flexSlot:'cryo',flexCharacter:'diona'}},true)`);
  assert.equal(run('travelerSelection.electro'), 'fischl');
  assert.ok(!node('#teams-root').innerHTML.includes('data-flex-slot'));
});

test('strategy tab remains selected while switching both flex slots', () => {
  const { run, node } = app();
  run('openTeamDetail(teams.findIndex(team => team.id === "traveler-cryo"))');
  const button = { dataset: { travelerView: 'strategy' } };
  node('#team-detail-content').listeners.click({ target: { closest: (selector) => selector === '[data-traveler-view]' ? button : null } });
  for (const [slot, id] of [['cryo', 'diona'], ['electro', 'beidou'], ['cryo', 'qiqi'], ['electro', 'fischl']]) {
    run(`selectTravelerFlex({dataset:{flexSlot:'${slot}',flexCharacter:'${id}'}},true)`);
    assert.equal(run('activeTravelerView'), 'strategy');
    assert.match(node('#team-detail-content').innerHTML, /id="traveler-panel-builds"[^>]* hidden/);
    assert.match(node('#team-detail-content').innerHTML, /id="traveler-panel-strategy" role="tabpanel" aria-labelledby="traveler-tab-strategy">/);
    assert.ok(node('#team-detail-content').innerHTML.includes(run('getTravelerVariant().rotation[0]')));
  }
});

test('Diona build and other team guidance remain intact', () => {
  const { run, context, original } = app();
  const before = JSON.parse(original);
  for (const id of ['fischl', 'beidou', 'diona', 'travelerCryo', 'alyosha']) {
    assert.equal(JSON.stringify(context.window.CHARACTER_GUIDES[id].general), JSON.stringify(before[id].general));
  }
  for (const field of ['weapon', 'artifactSets', 'stats', 'talents']) {
    assert.equal(run(`JSON.stringify(getBuild('diona','traveler-cryo').${field})`), run(`JSON.stringify(getBuild('diona','ganyu-freeze').${field})`));
  }
  assert.equal(run(`getSummaryGuidance('fischl','clorinde-aggravate').substats`), 'ER > CRIT > ATQ% ≈ Proficiência Elemental');
  assert.equal(run(`getSummaryGuidance('travelerCryo','traveler-cryo').talentPriority`), 'E > Q > NA');
  assert.ok(!run(`JSON.stringify(getSummaryGuidance('travelerCryo','traveler-cryo'))`).includes('8 cargas'));
});

test('equipped items retain published ranks and WIP weapon remains unranked', () => {
  const { run } = app();
  const panel = (id) => run(`createRecommendationsPanel('${id}','traveler-cryo',getBuild('${id}','traveler-cryo'))`);
  const fischl = panel('fischl');
  assert.match(fischl, /Vista da Jade Primordial/);
  assert.match(fischl, /7.0 • WIP/);
  assert.ok(fischl.indexOf('Vista da Jade Primordial') < fischl.indexOf('#1'));
  assert.match(fischl, /EM USO/);
  assert.match(fischl, /SET ATUAL/);
  assert.match(panel('qiqi'), /Espada do Sacrifício/);
  assert.match(panel('qiqi'), /R5/);
  assert.match(panel('qiqi'), /SET ATUAL/);
  const diona = panel('diona');
  assert.match(diona, /#2[\s\S]*?Arco do Sacrifício[\s\S]*?EM USO/);
  for (const id of ['alyosha', 'beidou']) {
    if (id === 'beidou') assert.match(panel(id), /EM USO/);
    assert.match(panel(id), /SET ATUAL/);
  }
  assert.match(panel('travelerCryo'), /EM USO/);
  assert.match(panel('travelerCryo'), /SET ATUAL/);
});

test('two pieces do not receive a four-piece badge', () => {
  const { run } = app();
  assert.equal(run(`isEquippedOption({id:'millelith-firmes',pieces:4}, 'artifactSets', {artifactSets:[{name:'Millelith Firmes',count:2}]}, {})`), false);
});

test('Qiqi without Akasha and every existing team render without errors', () => {
  const { run, node } = app();
  for (let i = 0; i < 14; i++) {
    run(`openTeamDetail(${i})`);
    for (const view of ['summary', 'recommendations', 'akasha']) {
      run(`activeBuildView='${view}'; renderTeamDetail()`);
      assert.ok(node('#team-detail-content').innerHTML.includes('detail-title'));
    }
  }
  run(`openTeamDetail(teams.findIndex(team => team.id === "traveler-cryo")); activeBuildView='akasha'; selectTravelerFlex({dataset:{flexSlot:'cryo',flexCharacter:'diona'}},true); selectTravelerFlex({dataset:{flexSlot:'cryo',flexCharacter:'qiqi'}},true)`);
  assert.equal(run('activeBuildView'), 'akasha');
  assert.ok(!node('#team-detail-content').innerHTML.includes('src="undefined"'));
  assert.match(node('#team-detail-content').innerHTML, /assets\/images\/akasha\/qiqi\.png/);
});

test('new Akasha captures match the five supplied build images', () => {
  const { run } = app();
  for (const id of ['fischl', 'beidou', 'travelerCryo', 'diona', 'qiqi']) {
    assert.equal(run(`akashaImageSources['${id}']`), `assets/images/akasha/${id}.png`);
  }
  assert.equal(run(`getBuild('fischl','traveler-cryo').weapon.name`), 'Vista da Jade Primordial');
  assert.equal(run(`getBuild('fischl','traveler-cryo').stats['Taxa Crítica']`), 62.9);
  assert.equal(run(`getBuild('beidou','traveler-cryo').weapon.level`), 70);
  assert.equal(run(`getBuild('travelerCryo','traveler-cryo').talents.normal`), 9);
  assert.equal(run(`getBuild('travelerCryo','traveler-cryo').talents.skill`), 6);
  assert.equal(run(`getBuild('travelerCryo','traveler-cryo').talents.burst`), 10);
  assert.equal(run(`getBuild('diona','traveler-cryo').weapon.name`), 'Arco do Sacrifício');
  assert.equal(run(`getBuild('qiqi','traveler-cryo').character.level`), 80);
  assert.equal(run(`getBuild('qiqi','traveler-cryo').character.constellation`), undefined);
  assert.equal(run(`getBuild('qiqi','traveler-cryo').talents.burst`), 6);
  assert.equal(run(`getBuild('qiqi','traveler-cryo').artifactSets[0].name`), 'Millelith Firmes');
});
