const elements = [
  { id: "pyro", label: "Pyro", color: "#e2735d" },
  { id: "hydro", label: "Hydro", color: "#6aaed6" },
  { id: "electro", label: "Electro", color: "#b58ad3" },
  { id: "cryo", label: "Cryo", color: "#86d3d8" },
  { id: "dendro", label: "Dendro", color: "#9abb69" },
  { id: "anemo", label: "Anemo", color: "#7bc9b1" },
  { id: "geo", label: "Geo", color: "#d2af68" },
];

const characters = {
  mavuika: { name: "Mavuika", element: "pyro", role: "Main DPS" },
  citlali: { name: "Citlali", element: "cryo", role: "Support / Shielder" },
  xilonen: { name: "Xilonen", element: "geo", role: "Support / Healer" },
  bennett: { name: "Bennett", element: "pyro", role: "Healer / Buffer" },
  arlecchino: { name: "Arlecchino", element: "pyro", role: "Main DPS" },
  thoma: { name: "Thoma", element: "pyro", role: "Support / Shielder", image: "assets/images/characters/thoma.png" },
  fischl: { name: "Fischl", element: "electro", role: "Sub DPS" },
  beidou: { name: "Beidou", element: "electro", role: "Sub DPS" },
  chevreuse: { name: "Chevreuse", element: "pyro", role: "Support / Healer" },
  neuvillette: { name: "Neuvillette", element: "hydro", role: "Main DPS" },
  furina: { name: "Furina", element: "hydro", role: "Sub DPS / Buffer" },
  kazuha: { name: "Kazuha", element: "anemo", role: "Support / Buffer" },
  tartaglia: { name: "Tartaglia", element: "hydro", role: "Main DPS" },
  xiangling: { name: "Xiangling", element: "pyro", role: "Sub DPS" },
  sucrose: { name: "Sucrose", element: "anemo", role: "Support / Buffer" },
  lanYan: { name: "Lan Yan", element: "anemo", role: "Support / Shielder", image: "assets/images/characters/lanYan.png" },
  mona: { name: "Mona", element: "hydro", role: "Support / Buffer", image: "assets/images/characters/mona.png" },
  collei: { name: "Collei", element: "dendro", role: "Support / Sub DPS", image: "assets/images/characters/collei.png" },
  clorinde: { name: "Clorinde", element: "electro", role: "Main DPS" },
  nahida: { name: "Nahida", element: "dendro", role: "Support / Sub DPS" },
  raiden: { name: "Raiden Shogun", element: "electro", role: "Main DPS / Buffer" },
  ganyu: { name: "Ganyu", element: "cryo", role: "Main DPS" },
  charlotte: { name: "Charlotte", element: "cryo", role: "Healer" },
  travelerCryo: { name: "Viajante Cryo", element: "cryo", role: "Main DPS" },
  diona: { name: "Diona", element: "cryo", role: "Healer / Shielder" },
  alyosha: { name: "Alyosha", element: "electro", role: "Support / Buffer" },
  qiqi: { name: "Qiqi", element: "cryo", role: "Healer / Buffer", image: "assets/images/characters/qiqi.webp" },
  alhaitham: { name: "Alhaitham", element: "dendro", role: "Main DPS" },
  kuki: { name: "Kuki Shinobu", element: "electro", role: "Healer / Trigger" },
  xingqiu: { name: "Xingqiu", element: "hydro", role: "Sub DPS" },
  tighnari: { name: "Tighnari", element: "dendro", role: "Main DPS" },
  lisa: { name: "Lisa", element: "electro", role: "Sub DPS" },
  zhongli: { name: "Zhongli", element: "geo", role: "Shielder" },
  venti: { name: "Venti", element: "anemo", role: "Support / Buffer" },
  albedo: { name: "Albedo", element: "geo", role: "Sub DPS" },
  xiao: { name: "Xiao", element: "anemo", role: "Main DPS" },
  faruzan: { name: "Faruzan", element: "anemo", role: "Support / Buffer" },
  mizuki: { name: "Yumemizuki Mizuki", element: "anemo", role: "Main DPS / Stellar Swirl", image: "assets/images/characters/mizuki.png" },
  varesa: { name: "Varesa", element: "electro", role: "Main DPS / Plunge", image: "assets/images/characters/varesa.png" },
  ororon: { name: "Ororon", element: "electro", role: "Sub DPS / Support", image: "assets/images/characters/ororon.png" },
  jean: { name: "Jean", element: "anemo", role: "Healer / Buffer" },
  noelle: { name: "Noelle", element: "geo", role: "Main DPS / Healer" },
  linnea: { name: "Linnea", element: "geo", role: "Support" },
  illuga: { name: "Illuga", element: "geo", role: "Sub DPS" },
  itto: { name: "Arataki Itto", element: "geo", role: "Main DPS" },
  gorou: { name: "Gorou", element: "geo", role: "Support / Buffer" },
};

const portraitCharacterIds = [
  "mavuika", "citlali", "xilonen", "bennett", "arlecchino", "fischl",
  "beidou", "chevreuse", "neuvillette", "furina", "tartaglia", "xiangling",
  "sucrose", "clorinde", "nahida", "raiden", "ganyu", "charlotte", "travelerCryo",
  "diona", "alyosha", "alhaitham", "kuki", "xingqiu", "tighnari", "lisa", "zhongli", "venti",
  "albedo", "xiao", "faruzan", "jean", "noelle", "linnea", "illuga", "itto", "gorou", "kazuha",
];

portraitCharacterIds.forEach((characterId) => {
  characters[characterId].image = `assets/images/characters/${characterId}.png`;
});

const teams = [
  { id: "mavuika-carry", element: "pyro", name: "Mavuika Melt", characters: ["mavuika", "citlali", "xilonen", "bennett"], note: "Bennett é prioritário para Mavuika Melt nesta conta." },
  { id: "arlecchino-vaporize", element: "pyro", name: "Arlecchino Vaporize", characters: ["arlecchino", "xingqiu", "sucrose", "thoma"], note: "Versão principal com o escudo de Thoma, preservando Bennett para Mavuika Melt. Thoma pode roubar algumas Vaporizações da Arlecchino.", alternatives: ["Maior dano: Arlecchino + Xingqiu + Bennett + Sucrose/Lan Yan ainda pode ser a versão de maior dano, quando Bennett estiver disponível."] },
  { id: "neuvillette-hypercarry", element: "hydro", name: "Neuvillette Hypercarry", characters: ["neuvillette", "furina", "kazuha", "xilonen"] },
  { id: "international", element: "hydro", name: "Tartaglia International", characters: ["tartaglia", "xiangling", "bennett", "sucrose"] },
  { id: "clorinde-aggravate", element: "electro", name: "Clorinde Aggravate", characters: ["clorinde", "nahida", "fischl", "lanYan"], note: "Lan Yan fornece o escudo para ativar a Calamidade de Eshu e usa Sombra Verde para reduzir a RES Electro.", alternatives: ["Kazuha continua uma alternativa ofensiva quando o escudo da Calamidade de Eshu não for necessário."] },
  { id: "raiden-rational", element: "electro", name: "Raiden Rational", characters: ["raiden", "xingqiu", "xiangling", "bennett"] },
  { id: "varesa-overload", element: "electro", name: "Varesa Overload", characters: ["varesa", "mavuika", "chevreuse", "ororon"] },
  { id: "traveler-cryo", element: "cryo", name: "Viajante Cryo Stellar-Conduct", characters: ["travelerCryo", "qiqi", "fischl", "alyosha"] },
  { id: "ganyu-freeze", element: "cryo", name: "Ganyu Freeze", characters: ["ganyu", "furina", "charlotte", "kazuha"] },
  { id: "alhaitham-hyperbloom", element: "dendro", name: "Alhaitham Hyperbloom", characters: ["alhaitham", "nahida", "kuki", "xingqiu"] },
  { id: "tighnari-spread", element: "dendro", name: "Tighnari Spread", characters: ["tighnari", "fischl", "collei", "zhongli"], note: "Collei ocupa o segundo slot Dendro na versão principal.", alternatives: ["Lisa pode substituir Collei: Tighnari + Fischl + Lisa + Zhongli. Permanece alternativa porque está pouco investida na conta."] },
  { id: "xiao-hypercarry", element: "anemo", name: "Xiao Hypercarry", characters: ["xiao", "faruzan", "furina", "jean"] },
  { id: "venti-hexerei", element: "anemo", name: "Venti Hexerei", characters: ["venti", "albedo", "fischl", "bennett"], note: "Time especial da conta, mantido como Anemo 2. Venti + Albedo + Fischl é a ativação mais clara de Hexerei na lista principal. Os Hexerei/Mágicos relevantes nos times principais são Fischl, Sucrose, Venti e Albedo.", alternatives: ["Sucrose + Fischl pode formar Sucrose Taser como alternativa forte, sem substituir Venti Hexerei na lista principal."] },
  { id: "mizuki-stellar-swirl", element: "anemo", name: "Mizuki Stellar Swirl", characters: ["mizuki", "travelerCryo", "diona", "sucrose"] },
  { id: "noelle-geo", element: "geo", name: "Noelle Lunar-Crystallize", characters: ["noelle", "linnea", "furina", "illuga"], constellations: ["Noelle C6", "Linnea C0", "Furina C0", "Illuga C0"], future: "Futuro \u2192 Zibal" },
  { id: "itto-mono-geo", element: "geo", name: "Itto Mono Geo", characters: ["itto", "gorou", "albedo", "zhongli"] },
];

const filterList = document.querySelector("#filter-list");
const teamsRoot = document.querySelector("#teams-root");
const filterCount = document.querySelector("#filter-count");
const detailModal = document.querySelector("#team-detail-modal");
const detailContent = document.querySelector("#team-detail-content");
const detailPanel = detailModal.querySelector(".team-detail-panel");
const buildLightbox = document.querySelector("#build-lightbox");
const buildLightboxImage = document.querySelector("#build-lightbox-image");
const buildLightboxZoom = document.querySelector("[data-zoom-build]");
const hoyolabBuilds = window.HOYOLAB_BUILDS || {};
Object.entries(hoyolabBuilds).forEach(([id, build]) => {
  if (characters[id]) characters[id].hoyolabImage = build.hoyolabImage;
});
let lightboxTrigger = null;
const characterGuides = window.CHARACTER_GUIDES || {};
const guideNameAliases = window.GUIDE_NAME_ALIASES || { weapons: {}, artifactSets: {} };
guideNameAliases.weapons["Plumagem Escarlate do Abutre Astral"] = "plumagem-escarlate";
const teamBuildGuidance = window.TEAM_BUILD_GUIDANCE || { profiles: {}, teams: {} };
let activeFilter = "all";
let openTeamIndex = null;
let detailCharacterId = null;
let lastFocusedElement = null;
let activeBuildView = "summary";
const travelerConfig = window.TRAVELER_TEAM;
const travelerSelection = { cryo: "qiqi", electro: "fischl" };
let activeTravelerView = "builds";
let activeTeamStrategyView = "builds";

function getTeamMembers(team) {
  return team.id === "traveler-cryo"
    ? ["travelerCryo", travelerSelection.cryo, travelerSelection.electro, "alyosha"]
    : team.characters;
}

function getTravelerVariant() {
  return travelerConfig.variants[`${travelerSelection.cryo}-${travelerSelection.electro}`];
}

function createTravelerSelector() {
  const variant = getTravelerVariant();
  return `<section class="traveler-selector traveler-toolbar" aria-label="Variantes do Viajante Cryo">
    <p class="flex-core">Núcleo fixo: <strong>Viajante Cryo + Alyosha C3</strong></p>
    <div class="flex-slots">${Object.entries(travelerConfig.slots).map(([slot, options]) => `
      <fieldset><legend>${slot === "cryo" ? "Cryo Support" : "Electro Sub-DPS"}</legend>
      <div class="flex-options">${options.map((option) => `<button type="button" data-flex-slot="${slot}" data-flex-character="${option.id}" aria-pressed="${travelerSelection[slot] === option.id}">${option.label}</button>`).join("")}</div></fieldset>`).join("")}</div>
    <div class="traveler-toolbar-footer"><div class="traveler-view-tabs" role="tablist" aria-label="Conteúdo do time">${[["builds", "Builds"], ["strategy", "Como jogar"]].map(([id, label]) => `<button type="button" role="tab" id="traveler-tab-${id}" data-traveler-view="${id}" aria-controls="traveler-panel-${id}" aria-selected="${activeTravelerView === id}">${label}</button>`).join("")}</div><span class="toolbar-variant" role="status">${escapeHtml(variant.tag)}</span></div>
  </section>`;
}

function createTravelerStrategy() {
  const variant = getTravelerVariant();
  const offensive = travelerSelection.cryo === "qiqi";
  const electro = characters[travelerSelection.electro].name;
  const list = (items) => `<ul class="guide-notes">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  return `<section class="traveler-strategy" aria-label="Buffs e rotação da variante">
    <h3 class="strategy-heading">Como jogar esta variante</h3>
    <div id="traveler-strategy-content">
    <p class="strategy-variant">${escapeHtml(variant.usage)}</p>
    <p class="buff-summary">${offensive ? "Qiqi → buff mais distribuído • maior dano total" : "Diona → buff mais concentrado + proteção • maior conforto"}</p>
    <div class="buff-grid">
      <section><h4>Viajante • em campo</h4>${list(offensive ? [
        "Buff Stellar-Conduct da Qiqi e +20% ATQ do Millelith enquanto ativo.",
        "Buff coletivo do Coração Forjado e buffs exclusivos do personagem ativo fornecidos por Alyosha.",
        "Benefícios do próprio Desencantamento na Sombra Profunda.",
      ] : ["Recebe maior concentração dos buffs da Diona, escudo e cura para completar o combo.", "Recebe o buff coletivo do Coração Forjado, os buffs próprios de Alyosha destinados ao ativo e os benefícios do Desencantamento."])}</section>
      <section><h4>${escapeHtml(electro)} • fora de campo</h4>${list(offensive ? [
        "Recebe o buff coletivo da Qiqi, +20% ATQ do Millelith enquanto ativo e o buff coletivo do Coração Forjado.",
        "Enquanto off-field, não recebe os buffs do kit de Alyosha destinados exclusivamente ao personagem ativo.",
      ] : ["Recebe o buff coletivo do Coração Forjado. O time ganha proteção e maior resistência prática.", "Os buffs da Diona e de Alyosha focados exclusivamente no personagem ativo não beneficiam o Sub-DPS fora de campo da mesma forma."])}</section>
    </div>
    <section class="rotation-panel"><h4>Rotação • base de 15 segundos</h4>
      <ol class="rotation-steps">${variant.rotation.map((rotation, index) => `<li><strong>${index ? "B" : "A"}</strong><span>${escapeHtml(rotation)}</span></li>`).join("")}</ol>
      <p class="rotation-cycle">A → B → A → B</p>
      ${list(["Alyosha Q a cada duas rotações; mantenha Alyosha imediatamente antes do Viajante.",
        travelerSelection.electro === "beidou" ? "Beidou Q aproximadamente a cada duas rotações. Na volta B, repita sem os Bursts indisponíveis." : "Fischl E → Q → E → Q: alterne as invocações para manter Oz ativo.",
        offensive ? "Qiqi Q é opcional antes do C6." : "Ative o escudo da Diona antes do Viajante. Use Q conforme disponibilidade e necessidade de cura/buffs."])}
      <h4>Combo do Viajante</h4><p class="traveler-combo">${escapeHtml(travelerConfig.combo)}</p>
      <p class="rotation-legend">E = Habilidade Elemental · Q = Explosão Elemental · N = Ataque Normal · C = Ataque Carregado · Dash = esquiva/cancelamento · (Q) = Burst quando previsto/disponível</p>
    </section>
    <p class="strategy-sources">Configuração e prioridades deste time: dados fornecidos pela conta. Rankings preservados por fonte; orientações contextualizadas para esta composição.<br>${travelerConfig.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`).join(" · ")}</p>
    </div>
  </section>`;
}

function createMavuikaStrategySelector() {
  return `<section class="traveler-selector traveler-toolbar" aria-label="Conteúdo do time Mavuika Melt">
    <div class="traveler-toolbar-footer"><div class="traveler-view-tabs" role="tablist" aria-label="Conteúdo do time">${[["builds", "Builds"], ["strategy", "Como jogar"]].map(([id, label]) => `<button type="button" role="tab" id="mavuika-tab-${id}" data-team-strategy-view="${id}" aria-controls="mavuika-panel-${id}" aria-selected="${activeTeamStrategyView === id}">${label}</button>`).join("")}</div><span class="toolbar-variant" role="status">Melt · rotação recomendada</span></div>
  </section>`;
}

function createMavuikaStrategy() {
  const guide = window.MAVUIKA_TEAM_GUIDE || { summary: "Rotação de Mavuika Melt.", rotation: [], cycle: "", notes: [], sources: [] };
  const list = (items) => `<ul class="guide-notes">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  return `<section class="traveler-strategy" aria-label="Como jogar Mavuika Melt">
    <h3 class="strategy-heading">Como jogar este time</h3>
    <div id="mavuika-strategy-content">
      <p class="strategy-variant">${escapeHtml(guide.summary)}</p>
      <div class="buff-grid"><section><h4>Ordem dos suportes</h4>${list(["Xilonen reduz a resistência elemental e fornece o bônus da equipe.", "Bennett mantém o buff de ATQ e a cura no campo.", "Citlali aplica Cryo e prepara o Melt do Supremo da Mavuika."])}</section><section><h4>Mavuika • em campo</h4>${list(["Acumule Fighting Spirit com as ações do time.", "Use Q apenas depois da aplicação Cryo de Citlali.", "Complete o combo de Ataques Carregados dentro do campo de Bennett."])}</section></div>
      <section class="rotation-panel"><h4>Rotação • Melt</h4><ol class="rotation-steps">${guide.rotation.map((step, index) => `<li><strong>${index + 1}</strong><span>${escapeHtml(step)}</span></li>`).join("")}</ol><p class="rotation-cycle">${escapeHtml(guide.cycle)}</p>${list(guide.notes)}<p class="rotation-legend">E = Habilidade Elemental · Q = Explosão Elemental · N = Ataque Normal · C = Ataque Carregado</p></section>
      <section class="rotation-panel"><h4>Notas do time</h4>${list(["Bennett é prioritário para Mavuika Melt nesta conta."])}</section>
      <p class="strategy-sources">Rotação baseada nos guias consultados:<br>${guide.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`).join(" · ")}</p>
    </div>
  </section>`;
}

function createArlecchinoStrategySelector() {
  return `<section class="traveler-selector traveler-toolbar" aria-label="Conteúdo do time Arlecchino Vaporize">
    <div class="traveler-toolbar-footer"><div class="traveler-view-tabs" role="tablist" aria-label="Conteúdo do time">${[["builds", "Builds"], ["strategy", "Como jogar"]].map(([id, label]) => `<button type="button" role="tab" id="arlecchino-tab-${id}" data-team-strategy-view="${id}" aria-controls="arlecchino-panel-${id}" aria-selected="${activeTeamStrategyView === id}">${label}</button>`).join("")}</div><span class="toolbar-variant" role="status">Vaporize · com escudo</span></div>
  </section>`;
}

function createArlecchinoStrategy() {
  const guide = window.ARLECCHINO_TEAM_GUIDE || { summary: "Rotação de Arlecchino Vaporize.", rotation: [], cycle: "", notes: [], sources: [] };
  const list = (items) => `<ul class="guide-notes">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  return `<section class="traveler-strategy" aria-label="Como jogar Arlecchino Vaporize">
    <h3 class="strategy-heading">Como jogar este time</h3>
    <div id="arlecchino-strategy-content">
      <p class="strategy-variant">${escapeHtml(guide.summary)}</p>
      <div class="buff-grid"><section><h4>Preparação</h4>${list(["Xingqiu mantém Hydro para habilitar Vaporizações.", "Thoma fornece escudo, resistência à interrupção e Pyro adicional.", "Sucrose espalha Pyro e compartilha Proficiência Elemental."])}</section><section><h4>Arlecchino • em campo</h4>${list(["Marque primeiro com E e consuma a Dívida de Sangue apenas depois da preparação.", "Use C para absorver a marca evoluída.", "Continue com Ataques Normais e esquivas para aproveitar a Infusão Pyro."])}</section></div>
      <section class="rotation-panel"><h4>Rotação • Vaporize</h4><ol class="rotation-steps">${guide.rotation.map((step, index) => `<li><strong>${index + 1}</strong><span>${escapeHtml(step)}</span></li>`).join("")}</ol><p class="rotation-cycle">${escapeHtml(guide.cycle)}</p>${list(guide.notes)}<p class="rotation-legend">E = Habilidade Elemental · Q = Explosão Elemental · N = Ataque Normal · C = Ataque Carregado · D = esquiva</p></section>
      <section class="rotation-panel"><h4>Notas do time</h4>${list(["A versão principal usa Thoma para oferecer escudo e conforto.", "A versão com Bennett + Sucrose/Lan Yan ainda pode causar mais dano, mas Bennett é prioritário para Mavuika Melt."])}</section>
      <p class="strategy-sources">Rotação baseada nos guias consultados:<br>${guide.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`).join(" · ")}</p>
    </div>
  </section>`;
}

function createHydroStrategySelector(teamId) {
  const guide = window.HYDRO_TEAM_GUIDES?.[teamId];
  const prefix = teamId === "international" ? "tartaglia" : "neuvillette";
  return `<section class="traveler-selector traveler-toolbar" aria-label="Conteúdo do time ${escapeHtml(guide?.label || "Hydro")}">
    <div class="traveler-toolbar-footer"><div class="traveler-view-tabs" role="tablist" aria-label="Conteúdo do time">${[["builds", "Builds"], ["strategy", "Como jogar"]].map(([id, label]) => `<button type="button" role="tab" id="${prefix}-tab-${id}" data-team-strategy-view="${id}" aria-controls="${prefix}-panel-${id}" aria-selected="${activeTeamStrategyView === id}">${label}</button>`).join("")}</div><span class="toolbar-variant" role="status">${escapeHtml(guide?.status || "Hydro · rotação")}</span></div>
  </section>`;
}

function createHydroStrategy(teamId) {
  const guide = window.HYDRO_TEAM_GUIDES?.[teamId] || { summary: "Rotação Hydro.", rotation: [], cycle: "", notes: [], sources: [] };
  const prefix = teamId === "international" ? "tartaglia" : "neuvillette";
  const list = (items) => `<ul class="guide-notes">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  const fieldTitle = teamId === "international" ? "Preparação e aplicação" : "Preparação dos buffs";
  const fieldItems = teamId === "international"
    ? ["Bennett cria o campo de buff para Xiangling e Tartaglia.", "Sucrose precisa redemoinhar Pyro para ativar Sombra Verde.", "Xiangling lança o Pyronado antes do retorno de Tartaglia."]
    : ["Furina inicia Fanfare com sua Habilidade e Supremo.", "Xilonen reduz RES, cura e ativa o bônus do Pergaminho.", "Kazuha agrupa e redemoinha Hydro antes do campo de Neuvillette."];
  const carryItems = teamId === "international"
    ? ["Use o Supremo à distância antes de entrar na postura corpo a corpo.", "Mantenha Tartaglia em campo pelo tempo necessário para a janela do Pyronado.", "Saia antes de estender demais o cooldown da postura melee."]
    : ["Use os três Canhões dentro dos buffs de Furina, Xilonen e Kazuha.", "Posicione o feixe para atingir todos os inimigos agrupados.", "Colete as partículas e deixe a equipe preparar a próxima janela."];
  return `<section class="traveler-strategy" aria-label="Como jogar ${escapeHtml(guide.label)}">
    <h3 class="strategy-heading">Como jogar este time</h3>
    <div id="${prefix}-strategy-content">
      <p class="strategy-variant">${escapeHtml(guide.summary)}</p>
      <div class="buff-grid"><section><h4>${fieldTitle}</h4>${list(fieldItems)}</section><section><h4>${teamId === "international" ? "Tartaglia • em campo" : "Neuvillette • em campo"}</h4>${list(carryItems)}</section></div>
      <section class="rotation-panel"><h4>Rotação</h4><ol class="rotation-steps">${guide.rotation.map((step, index) => `<li><strong>${index + 1}</strong><span>${escapeHtml(step)}</span></li>`).join("")}</ol><p class="rotation-cycle">${escapeHtml(guide.cycle)}</p>${list(guide.notes)}<p class="rotation-legend">E = Habilidade Elemental · Q = Explosão Elemental · N = Ataque Normal · C = Ataque Carregado · D = esquiva</p></section>
      <p class="strategy-sources">Rotação baseada nos guias consultados:<br>${guide.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`).join(" · ")}</p>
    </div>
  </section>`;
}

function createRemainingStrategySelector(teamId) {
  const guide = window.REMAINING_TEAM_GUIDES?.[teamId];
  const prefix = teamId.split("-")[0];
  return `<section class="traveler-selector traveler-toolbar" aria-label="Conteúdo do time ${escapeHtml(guide?.label || "Time")}">
    <div class="traveler-toolbar-footer"><div class="traveler-view-tabs" role="tablist" aria-label="Conteúdo do time">${[["builds", "Builds"], ["strategy", "Como jogar"]].map(([id, label]) => `<button type="button" role="tab" id="${prefix}-tab-${id}" data-team-strategy-view="${id}" aria-controls="${prefix}-panel-${id}" aria-selected="${activeTeamStrategyView === id}">${label}</button>`).join("")}</div><span class="toolbar-variant" role="status">${escapeHtml(guide?.status || "Rotação recomendada")}</span></div>
  </section>`;
}

function createRemainingStrategy(teamId) {
  const guide = window.REMAINING_TEAM_GUIDES?.[teamId] || { label: "Time", summary: "Rotação.", preparation: [], carry: [], rotation: [], cycle: "", notes: [], sources: [] };
  const prefix = teamId.split("-")[0];
  const list = (items) => `<ul class="guide-notes">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  return `<section class="traveler-strategy" aria-label="Como jogar ${escapeHtml(guide.label)}">
    <h3 class="strategy-heading">Como jogar este time</h3>
    <div id="${prefix}-strategy-content">
      <p class="strategy-variant">${escapeHtml(guide.summary)}</p>
      <div class="buff-grid"><section><h4>Preparação</h4>${list(guide.preparation)}</section><section><h4>Personagem em campo</h4>${list(guide.carry)}</section></div>
      <section class="rotation-panel"><h4>Rotação</h4><ol class="rotation-steps">${guide.rotation.map((step, index) => `<li><strong>${index + 1}</strong><span>${escapeHtml(step)}</span></li>`).join("")}</ol><p class="rotation-cycle">${escapeHtml(guide.cycle)}</p>${list(guide.notes)}<p class="rotation-legend">E = Habilidade Elemental · Q = Explosão Elemental · N = Ataque Normal · C = Ataque Carregado · D = esquiva · P = Ataque Imersivo</p></section>
      <p class="strategy-sources">Rotação baseada nos guias consultados:<br>${guide.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`).join(" · ")}</p>
    </div>
  </section>`;
}

function selectTravelerFlex(button, inDetail) {
  const { flexSlot: slot, flexCharacter: characterId } = button.dataset;
  if (!travelerConfig.slots[slot]?.some((option) => option.id === characterId)) return;
  if (travelerSelection[slot] === characterId) return;
  travelerSelection[slot] = characterId;
  renderTeams();
  if (inDetail) {
    detailCharacterId = characterId;
    renderTeamDetail();
  }
  const root = inDetail ? detailContent : teamsRoot;
  root.querySelector(`[data-flex-slot="${slot}"][data-flex-character="${characterId}"]`)?.focus({ preventScroll: true });
}

const getElement = (id) => elements.find((element) => element.id === id);
const initials = (name) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character]));

function getBuild(characterId) {
  return hoyolabBuilds[characterId] || { weapon: {}, artifactSets: [] };
}

function getGuideContext(characterId, teamId) {
  const guide = characterGuides[characterId] || {};
  return {
    general: guide.general || {},
    team: guide.teams?.[teamId] || {},
  };
}

function getSummaryGuidance(characterId, teamId) {
  const profile = teamBuildGuidance.profiles?.[characterId] || {};
  const contextual = teamBuildGuidance.teams?.[teamId]?.[characterId] || {};
  return {
    ...profile,
    ...contextual,
    mainStats: { ...(profile.mainStats || {}), ...(contextual.mainStats || {}) },
    notes: teamId === "traveler-cryo" && characterId !== "diona"
      ? contextual.notes || [] : [...(profile.notes || []), ...(contextual.notes || [])],
  };
}

function getContextRole(characterId, teamId) {
  const context = getGuideContext(characterId, teamId);
  const guidanceRole = teamBuildGuidance.teams?.[teamId]?.[characterId]?.role;
  return guidanceRole || context.team.role || context.general.role || characters[characterId].role;
}

function resolveGuideItemId(type, name) {
  if (!name) return "";
  return guideNameAliases[type]?.[name] || String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createFilters() {
  const filters = [{ id: "all", label: "Todos", color: "#e6c77d" }, ...elements];
  filterList.innerHTML = filters.map((filter) => `
    <button class="filter-button${filter.id === activeFilter ? " is-active" : ""}" type="button" data-filter="${filter.id}" style="--filter-color: ${filter.color}" aria-pressed="${filter.id === activeFilter}">
      ${filter.label}
    </button>
  `).join("");
}

function createCharacterCard(characterId, teamId) {
  const flexSlot = teamId === "traveler-cryo" && Object.keys(travelerConfig.slots).find((slot) =>
    travelerConfig.slots[slot].some((option) => option.id === characterId));
  if (flexSlot) return createFlexCharacterCard(flexSlot, characterId);
  const character = characters[characterId];
  const portraitImage = character.image
    ? `<img class="portrait-image" src="${character.image}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
    : "";

  return `
    <button class="character-card" type="button" data-character="${characterId}" aria-label="Destacar times com ${character.name}" style="--character-color: ${getElement(character.element).color}">
      <span class="portrait${character.image ? " has-image" : ""}">${portraitImage}</span>
      <span class="character-name">${character.name}</span>
      <span class="role-badge">${escapeHtml(teamId === "traveler-cryo" ? getContextRole(characterId, teamId) : character.role)}</span>
    </button>
  `;
}

function createFlexCharacterCard(slot, selectedCharacterId) {
  const members = travelerConfig.slots[slot].map((option) => characters[option.id]);
  const label = members.map((character) => character.name).join(" / ");
  const role = slot === "cryo" ? "Cryo Flex" : "Electro Flex";
  return `<button class="character-card flex-character-card" type="button" data-character="${selectedCharacterId}" aria-label="Abrir ${role}: ${escapeHtml(label)}" style="--character-color: ${getElement(members[0].element).color}">
    <span class="portrait has-image flex-portrait">${members.map((character, index) => `<img class="portrait-image flex-portrait-image flex-portrait-image-${index}" src="${character.image}" alt="" loading="lazy" decoding="async" />`).join("")}</span>
    <span class="character-name">${escapeHtml(label)}</span>
    <span class="role-badge">${role}</span>
  </button>`;
}

function renderTeams() {
  const visibleElements = activeFilter === "all" ? elements : [getElement(activeFilter)];
  teamsRoot.innerHTML = visibleElements.map((element) => {
    const elementTeams = teams.filter((team) => team.element === element.id);
    return `
      <section class="element-section" style="--element-color: ${element.color}" aria-labelledby="${element.id}-heading">
        <div class="element-heading">
          <span class="element-orb" aria-hidden="true"></span>
          <div>
            <p class="element-kicker">Elemento</p>
            <h2 id="${element.id}-heading">${element.label}</h2>
          </div>
          <p>${elementTeams.length} times</p>
        </div>
        <div class="team-grid">
          ${elementTeams.map((team, index) => `
            <article class="team-card" data-team-index="${teams.indexOf(team)}" data-team="${team.name}" tabindex="0" aria-label="Abrir detalhes de ${team.name}">
              <header class="team-header">
                <div>
                  <p class="team-index">Time ${index + 1}</p>
                  <h3 class="team-title">${team.name}</h3>
                </div>
              </header>
              <div class="team-members">${getTeamMembers(team).map((characterId) => createCharacterCard(characterId, team.id)).join("")}</div>
              ${team.constellations ? `<p class="team-note">Constelacoes: ${team.constellations.join(" | ")}</p>` : ""}
              ${team.future ? `<span class="future-badge">${team.future}</span>` : ""}
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

}

function updateCount() {
  const teamTotal = document.querySelector("#team-total");
  const elementTotal = document.querySelector("#element-total");
  if (teamTotal) teamTotal.textContent = teams.length;
  if (elementTotal) elementTotal.textContent = new Set(teams.map((team) => team.element)).size;
  const count = activeFilter === "all" ? teams.length : teams.filter((team) => team.element === activeFilter).length;
  const label = activeFilter === "all" ? "Todos os elementos" : getElement(activeFilter).label;
  filterCount.textContent = `${label} \u00b7 ${count} ${count === 1 ? "time" : "times"}`;
}

filterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button || button.dataset.filter === activeFilter) return;
  activeFilter = button.dataset.filter;
  createFilters();
  updateCount();
  renderTeams();
});

teamsRoot.addEventListener("click", (event) => {
  const teamCard = event.target.closest(".team-card");
  if (!teamCard) return;
  const characterButton = event.target.closest("[data-character]");
  openTeamDetail(Number(teamCard.dataset.teamIndex), characterButton?.dataset.character);
});

teamsRoot.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const teamCard = event.target.closest(".team-card");
  if (!teamCard || event.target !== teamCard) return;
  event.preventDefault();
  openTeamDetail(Number(teamCard.dataset.teamIndex));
});

function createDetailMember(characterId) {
  const character = characters[characterId];
  const role = getContextRole(characterId, teams[openTeamIndex]?.id);
  const portrait = character.image
    ? `<img src="${character.image}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
    : `<span class="detail-member-placeholder" aria-hidden="true"></span>`;
  return `
    <button class="detail-member${characterId === detailCharacterId ? " is-active" : ""}" type="button" role="tab" data-detail-character="${characterId}" aria-selected="${characterId === detailCharacterId}" style="--character-color: ${getElement(character.element).color}">
      ${portrait}
      <span><strong>${escapeHtml(character.name)}</strong><small>${escapeHtml(role)}</small></span>
    </button>
  `;
}

function createCurrentBuild(characterId) {
  const character = characters[characterId];
  if (!character.hoyolabImage) return '<p class="subtle-empty">Card HoYoLAB ainda não adicionado para este personagem.</p>';
  return `<figure class="current-build current-build-${characterId}">
    <figcaption><strong>Build Atual · ${escapeHtml(character.name)}</strong><span>Equipamentos e atributos da conta na captura do HoYoLAB. Toque ou clique no card para ampliar.</span></figcaption>
    <button class="current-build-image" type="button" data-open-lightbox aria-label="Ampliar build de ${escapeHtml(character.name)}"><img src="${character.hoyolabImage}" alt="Build atual de ${escapeHtml(character.name)} — card HoYoLAB em português" decoding="async" /></button>
    <button class="build-image-open" type="button" data-open-lightbox>Ampliar imagem</button>
  </figure>`;
}

function createGuideField(title, content, className = "") {
  return `<section class="guide-field ${className}"><h6>${title}</h6>${content || "<p class=\"guide-empty\">Informa&ccedil;&atilde;o ainda n&atilde;o cadastrada.</p>"}</section>`;
}

function createMainStats(mainStats) {
  if (!mainStats || !Object.keys(mainStats).length) return "";
  const slots = [["sands", "Areia"], ["goblet", "C&aacute;lice"], ["circlet", "Coroa"]];
  return `<dl class="guide-main-stats">${slots.map(([key, label]) => `
    <div><dt>${label}</dt><dd>${mainStats[key]?.length ? mainStats[key].map(escapeHtml).join(" / ") : "N&atilde;o cadastrado"}</dd></div>
  `).join("")}</dl>`;
}

function createSubstats(substats) {
  if (!substats?.length) return "";
  const entries = typeof substats === "string" ? substats.split(" > ") : substats;
  return `<ol class="guide-substats">${entries.map((entry, index) => {
    const substat = typeof entry === "string" ? { label: entry } : entry;
    return `<li class="${substat.emphasis ? "is-emphasis" : ""}"><span>${index + 1}</span><div><strong>${escapeHtml(substat.label)}</strong>${substat.note ? `<small>${escapeHtml(substat.note)}</small>` : ""}</div></li>`;
  }).join("")}</ol>`;
}

function createTalentPriority(talentPriority) {
  if (!talentPriority) return "";
  return `<p class="guide-talent-priority">${escapeHtml(talentPriority)}</p>`;
}

function createEnergyGuidance(energy) {
  if (!energy) return "";
  const headline = energy.target ? `ER alvo: ${escapeHtml(energy.target)}` : escapeHtml(energy.label);
  return `
    <div class="guide-energy-head"><strong>${headline}</strong>${energy.condition ? `<span>${escapeHtml(energy.condition)}</span>` : ""}</div>
    ${energy.notes?.length ? `<ul class="guide-notes">${energy.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>` : ""}
    ${energy.source ? `<p class="guide-source">Requisito de Energia: refer&ecirc;ncia ${escapeHtml(energy.source)}</p>` : ""}
  `;
}

function createBuildDashboard(characterId) {
  const character = characters[characterId];
  const build = getBuild(characterId);
  const capture = window.HOYOLAB_STATS?.[characterId];
  if (!character || !capture) return "";
  const weapon = build.weapon || {};
  const talents = capture.talents || [];
  const artifactSets = (build.artifactSets || []).filter((set) => set.count >= 2);
  const setSummary = artifactSets.length
    ? artifactSets.map((set) => `${set.name} ×${set.count}`).join(" · ")
    : "Conjuntos não registrados";
  return `
    <section class="build-dashboard" aria-label="Resumo da build atual de ${escapeHtml(character.name)}">
      <div class="dashboard-character">
        ${character.image ? `<img src="${character.image}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />` : `<span class="dashboard-character-placeholder" aria-hidden="true"></span>`}
        <div><h4>${escapeHtml(character.name)}</h4><p>${escapeHtml(getElement(character.element).label)} · Build atual</p><p class="set-summary">${escapeHtml(setSummary)}</p></div>
      </div>
      <div class="dashboard-weapon"><h5>Arma</h5><strong>${escapeHtml(weapon.name || "Não informada")}</strong><p>${weapon.refinement ? `R${weapon.refinement} · ` : ""}${weapon.rarity ? `${weapon.rarity} estrelas` : "Dados da captura HoYoLAB"}</p><h5>Talentos</h5><div class="talent-summary">${[["Ataque Normal", talents[0]], ["Skill", talents[1]], ["Burst", talents[2]]].map(([label, value]) => `<span><small>${label}</small><strong>${value ?? "—"}</strong></span>`).join("")}</div></div>
      <div class="dashboard-stats"><h5>Atributos principais</h5><div class="stat-highlights">${capture.attributes.map(([label, value]) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}</div></div>
    </section>
  `;
}

function createBuildGuideSummary(characterId, teamId) {
  const { general, team } = getGuideContext(characterId, teamId);
  const summaryGuidance = getSummaryGuidance(characterId, teamId);
  const hasGuide = Object.keys(general).length || Object.keys(team).length || Object.keys(summaryGuidance).length;
  if (!hasGuide) {
    return `${createBuildDashboard(characterId)}<section class="build-guide"><div class="build-guide-heading"><div><p>Guia de build</p><h5>Orienta&ccedil;&otilde;es</h5></div></div><p class="guide-empty guide-empty-panel">Informa&ccedil;&atilde;o ainda n&atilde;o cadastrada.</p></section>`;
  }

  const role = summaryGuidance.role || team.role || general.role || characters[characterId].role;
  const substats = summaryGuidance.substats || general.substats;
  const topStats = typeof substats === "string" ? substats.split(/\s*[>≫≥≈]\s*/).filter(Boolean).slice(0, 3) : substats?.slice(0, 3);
  const notes = [...(general.notes || []), ...(team.notes || []), ...(summaryGuidance.notes || [])];
  return `
    ${createBuildDashboard(characterId)}
    <section class="build-guide">
      <div class="build-guide-heading">
        <div><p>Guia de build</p><h5>Orienta&ccedil;&otilde;es para ${escapeHtml(teams.find((entry) => entry.id === teamId)?.name || "este time")}</h5></div>
        ${role ? `<span class="guide-role">${escapeHtml(role)}</span>` : ""}
      </div>
      <div class="guide-detail-grid">
        ${createGuideField("Top 3 atributos recomendados", createSubstats(topStats), "guide-notes-field")}
        ${createGuideField("Atributos principais", createMainStats(summaryGuidance.mainStats || general.mainStats))}
        ${createGuideField("Subatributos", createSubstats(summaryGuidance.substats || general.substats))}
        ${createGuideField("Prioridade de talentos", createTalentPriority(summaryGuidance.talentPriority))}
        ${createGuideField("Energia", createEnergyGuidance(summaryGuidance.energy || team.energy))}
        ${createGuideField("Notas", notes.length ? `<ul class="guide-notes">${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>` : "", "guide-notes-field")}
      </div>
    </section>
  `;
}

function getCurrentRecommendationIds(build) {
  return {
    weapon: resolveGuideItemId("weapons", build.weapon?.name),
    artifactSets: new Set((build.artifactSets || []).filter((set) => set.count >= 2).map((set) => resolveGuideItemId("artifactSets", set.name))),
  };
}

function isEquippedOption(option, type, build, currentIds) {
  if (type === "weapons") return !build.weaponPending && option.id === currentIds.weapon;
  return (build.artifactSets || []).some((set) =>
    set.count >= 2 && resolveGuideItemId("artifactSets", set.name) === option.id && (!option.pieces || set.count >= option.pieces));
}

function createItemMeta(option, currentData, isCurrent) {
  const rarity = option.rarity ?? (isCurrent ? currentData?.rarity : null);
  const refinement = option.refinement ?? (isCurrent ? currentData?.refinement : null);
  const pieces = option.pieces;
  const parts = [];
  if (rarity) parts.push(`<span class="ranking-stars" aria-label="${rarity} estrelas">${"&#9733;".repeat(rarity)}</span>`);
  if (refinement) parts.push(`R${refinement}`);
  if (pieces) parts.push(`&times;${pieces}`);
  return parts.length ? `<small>${parts.join(" &middot; ")}</small>` : "";
}

function getRecommendationAsset(characterId, type, itemId) {
  return window.RECOMMENDATION_ASSETS?.[characterId]?.[type]?.[itemId]
    || window.RECOMMENDATION_ASSETS?.[type]?.[itemId]
    || "";
}

function createRankingVisual(characterId, type, option) {
  const source = getRecommendationAsset(characterId, type, option.id);
  return source
    ? `<img class="ranking-icon" src="${source}" alt="" aria-hidden="true" loading="lazy" decoding="async">`
    : `<span class="ranking-placeholder" aria-hidden="true">${type === "weapons" ? "A" : "S"}</span>`;
}

function createRankingGroup(group, type, build, currentIds, characterId) {
  return `
    <article class="ranking-group">
      <span class="ranking-position">#${group.rank}</span>
      <div class="ranking-options">
        ${group.options.map((option, optionIndex) => {
          const isCurrent = isEquippedOption(option, type, build, currentIds);
          const currentData = type === "weapons" ? build.weapon : null;
          return `
            <div class="ranking-option${isCurrent ? " is-current" : ""}">
              ${createRankingVisual(characterId, type, option)}
              <div class="ranking-copy">
                <strong>${optionIndex ? "<span class=\"ranking-equivalent\">&asymp;</span> " : ""}${escapeHtml(option.name)}</strong>
                ${createItemMeta(option, currentData, isCurrent)}
              </div>
              ${isCurrent ? `<span class="current-badge">EM USO</span>` : ""}
              ${isCurrent && type === "weapons" && option.refinement && build.weapon?.refinement && option.refinement !== build.weapon.refinement ? `<small class="equipment-refinement">Conta: R${build.weapon.refinement}; ranking: R${option.refinement}</small>` : ""}
              ${option.f2p ? "<span class=\"f2p-badge\">F2P</span>" : ""}
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `;
}

function getRecommendationItemId(text) {
  return text.replace(/\s(?:R\d+|&times;\d+|×\d+)$/, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createConditionalArtifactSets(items, characterId) {
  if (!items?.length) return "";
  return `<section class="conditional-artifact-sets"><p>Op&ccedil;&otilde;es condicionais</p><ul>${items.map((text) => {
    const source = getRecommendationAsset(characterId, "artifactSets", getRecommendationItemId(text));
    return `<li${source ? " class=\"has-icon\"" : ""}>${source ? `<img class="conditional-recommendation-icon" src="${source}" alt="" aria-hidden="true" loading="lazy" decoding="async">` : ""}<span>${escapeHtml(text)}</span></li>`;
  }).join("")}</ul></section>`;
}

function createRecommendationColumn(title, label, groups, type, build, currentIds, characterId, conditionalArtifactSets = []) {
  const equipped = type === "weapons"
    ? (build.weapon?.name && !build.weaponPending ? [{ id: currentIds.weapon, ...build.weapon }] : [])
    : (build.artifactSets || []).filter((set) => set.count >= 2).map((set) => ({ id: resolveGuideItemId("artifactSets", set.name), name: set.name, pieces: set.count }));
  const unranked = equipped.filter((item) => !(groups || []).some((group) => group.options.some((option) =>
    option.id === item.id && (type === "weapons" || !option.pieces || item.pieces >= option.pieces))));
  return `
    <section class="recommendation-column">
      <div class="recommendation-column-heading"><span aria-hidden="true">${type === "weapons" ? "A" : "S"}</span><div><p>${label}</p><h4>${title}</h4></div></div>
      ${unranked.map((item) => `<div class="unranked-equipment"><div class="ranking-option is-current">${createRankingVisual(characterId, type, item)}<div class="ranking-copy"><strong>${escapeHtml(item.name)}</strong>${createItemMeta(item, item, true)}<small>${escapeHtml(item.rankingStatus || "Sem posição na lista publicada")}</small></div><span class="current-badge">EM USO</span></div></div>`).join("")}
      <div class="ranking-list">${groups?.length ? groups.map((group) => createRankingGroup(group, type, build, currentIds, characterId)).join("") : "<p class=\"guide-empty\">Informa&ccedil;&atilde;o ainda n&atilde;o cadastrada.</p>"}</div>
      ${type === "artifactSets" ? createConditionalArtifactSets(conditionalArtifactSets, characterId) : ""}
    </section>
  `;
}

function createTeamSpecificAdvice(advice) {
  if (!advice) return "";
  return `
    <aside class="team-specific-advice">
      <span>Ajuste para este time</span>
      <div><h4>${escapeHtml(advice.title)}</h4><p>${escapeHtml(advice.description)}</p></div>
      ${advice.options?.length ? `<ul>${advice.options.map((option) => `<li>${escapeHtml(option)}</li>`).join("")}</ul>` : ""}
    </aside>
  `;
}

function createConditionalRecommendations(recommendation, characterId) {
  const items = (recommendation.conditionalWeaponNotes || []).map((text) => ({ text, type: "weapons" }));
  if (!items.length) return "";
  return `<aside class="conditional-recommendations"><span>Op&ccedil;&otilde;es condicionais</span><ul>${items.map((item) => {
    const source = getRecommendationAsset(characterId, item.type, getRecommendationItemId(item.text));
    return `<li${source ? " class=\"has-icon\"" : ""}>${source ? `<img class="conditional-recommendation-icon" src="${source}" alt="" aria-hidden="true" loading="lazy" decoding="async">` : ""}<span>${escapeHtml(item.text)}</span></li>`;
  }).join("")}</ul></aside>`;
}

function createRecommendationNotes(notes) {
  if (!notes?.sections?.length) return "";
  return `<section class="recommendation-notes"><h4>Notas</h4>${notes.sections.map((section) => `
    <div class="recommendation-note-section">
      <h5>${escapeHtml(section.title)}</h5>
      ${section.paragraphs?.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("") || ""}
      ${section.items?.length ? `<ul>${section.items.map((item) => `<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.description)}</li>`).join("")}</ul>` : ""}
    </div>
  `).join("")}</section>`;
}

function createRecommendationsPanel(characterId, teamId, build) {
  const { general, team } = getGuideContext(characterId, teamId);
  const teamRecommendation = team.recommendations || {};
  const recommendation = {
    ...general,
    ...teamRecommendation,
    weapons: teamRecommendation.weapons || general.weapons,
    artifactSets: teamRecommendation.artifactSets || general.artifactSets,
  };
  const currentIds = getCurrentRecommendationIds(build);
  const hasRecommendations = recommendation.weapons?.length || recommendation.artifactSets?.length;
  return `
    <section class="recommendations-panel">
      <header class="recommendations-heading">
        <div><p>${team.recommendations ? "Recomenda&ccedil;&atilde;o para este time" : "Recomenda&ccedil;&atilde;o geral"}</p><h3>Guia de recomenda&ccedil;&otilde;es</h3></div>
        ${team.role || recommendation.role ? `<span>${escapeHtml(team.role || recommendation.role)}</span>` : ""}
      </header>
      ${hasRecommendations ? "" : "<p class=\"guide-empty recommendations-empty\">Rankings completos ainda n&atilde;o cadastrados para este personagem.</p>"}
      <div class="recommendation-columns">
        ${createRecommendationColumn("Melhores armas", "Ranking", recommendation.weapons, "weapons", build, currentIds, characterId)}
        ${createRecommendationColumn("Conjuntos recomendados", "Ranking", recommendation.artifactSets, "artifactSets", build, currentIds, characterId, recommendation.conditionalArtifactSets)}
      </div>
      ${createTeamSpecificAdvice(team.artifactOverride)}
      ${createConditionalRecommendations(recommendation, characterId)}
      ${createRecommendationNotes(recommendation.recommendationNotes)}
      ${recommendation.source ? `<footer class="recommendations-source">Fonte: ${recommendation.sourceUrl ? `<a href="${escapeHtml(recommendation.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(recommendation.source)}</a>` : escapeHtml(recommendation.source)}${recommendation.guideVersion ? ` &middot; Guia ${escapeHtml(recommendation.guideVersion)}` : ""}</footer>` : ""}
    </section>
  `;
}

function renderTeamDetail() {
  const previousScroll = detailPanel.scrollTop;
  const team = teams[openTeamIndex];
  const element = getElement(team.element);
  const characterElement = getElement(characters[detailCharacterId]?.element || team.element);
  const build = getBuild(detailCharacterId);
  const isStrategyTeam = ["traveler-cryo", "mavuika-carry", "arlecchino-vaporize", "neuvillette-hypercarry", "international", ...Object.keys(window.REMAINING_TEAM_GUIDES || {})].includes(team.id);
  const strategyActive = team.id === "traveler-cryo" ? activeTravelerView === "strategy" : activeTeamStrategyView === "strategy";
  const body = activeBuildView === "current"
    ? createCurrentBuild(detailCharacterId)
    : activeBuildView === "recommendations"
      ? createRecommendationsPanel(detailCharacterId, team.id, build)
      : createBuildGuideSummary(detailCharacterId, team.id);
  detailContent.className = "detail-content";
  detailContent.style.setProperty("--detail-color", characterElement.color);
  detailContent.style.setProperty("--team-color", element.color);
  detailContent.innerHTML = `
    <p class="detail-kicker">${escapeHtml(element.label)} &middot; Detalhe do time</p>
    <h2 id="detail-title" class="detail-team-heading">${escapeHtml(team.name)}</h2>
    ${!isStrategyTeam && team.note ? `<p class="team-note">${escapeHtml(team.note)}</p>` : ""}
    ${!isStrategyTeam ? team.alternatives?.map((alternative) => `<p class="team-note"><strong>Alternativa:</strong> ${escapeHtml(alternative)}</p>`).join("") || "" : ""}
    ${team.id === "traveler-cryo" ? createTravelerSelector() : team.id === "mavuika-carry" ? createMavuikaStrategySelector() : team.id === "arlecchino-vaporize" ? createArlecchinoStrategySelector() : ["neuvillette-hypercarry", "international"].includes(team.id) ? createHydroStrategySelector(team.id) : window.REMAINING_TEAM_GUIDES?.[team.id] ? createRemainingStrategySelector(team.id) : ""}
    <div${isStrategyTeam ? ` id="${team.id === "traveler-cryo" ? "traveler" : team.id === "mavuika-carry" ? "mavuika" : team.id === "arlecchino-vaporize" ? "arlecchino" : team.id === "international" ? "tartaglia" : team.id === "neuvillette" ? "neuvillette" : team.id.split("-")[0]}-panel-builds" role="tabpanel" aria-labelledby="${team.id === "traveler-cryo" ? "traveler" : team.id === "mavuika-carry" ? "mavuika" : team.id === "arlecchino-vaporize" ? "arlecchino" : team.id === "international" ? "tartaglia" : team.id === "neuvillette" ? "neuvillette" : team.id.split("-")[0]}-tab-builds"${strategyActive ? " hidden" : ""}` : ""}>
    <div class="detail-team-picker" role="tablist" aria-label="Personagens do time">${getTeamMembers(team).map(createDetailMember).join("")}</div>
    <div class="build-view-tabs" role="tablist" aria-label="Visualização da build"><button type="button" role="tab" data-build-view="summary" aria-selected="${activeBuildView === "summary"}">Resumo</button><button type="button" role="tab" data-build-view="recommendations" aria-selected="${activeBuildView === "recommendations"}">Recomendações</button><button type="button" role="tab" data-build-view="current" aria-selected="${activeBuildView === "current"}">Build Atual</button></div>
    ${body}
    </div>
    ${team.id === "traveler-cryo" ? `<div id="traveler-panel-strategy" role="tabpanel" aria-labelledby="traveler-tab-strategy"${activeTravelerView !== "strategy" ? " hidden" : ""}>${createTravelerStrategy()}</div>` : team.id === "mavuika-carry" ? `<div id="mavuika-panel-strategy" role="tabpanel" aria-labelledby="mavuika-tab-strategy"${activeTeamStrategyView !== "strategy" ? " hidden" : ""}>${createMavuikaStrategy()}</div>` : team.id === "arlecchino-vaporize" ? `<div id="arlecchino-panel-strategy" role="tabpanel" aria-labelledby="arlecchino-tab-strategy"${activeTeamStrategyView !== "strategy" ? " hidden" : ""}>${createArlecchinoStrategy()}</div>` : ["neuvillette-hypercarry", "international"].includes(team.id) ? `<div id="${team.id === "international" ? "tartaglia" : "neuvillette"}-panel-strategy" role="tabpanel" aria-labelledby="${team.id === "international" ? "tartaglia" : "neuvillette"}-tab-strategy"${activeTeamStrategyView !== "strategy" ? " hidden" : ""}>${createHydroStrategy(team.id)}</div>` : window.REMAINING_TEAM_GUIDES?.[team.id] ? `<div id="${team.id.split("-")[0]}-panel-strategy" role="tabpanel" aria-labelledby="${team.id.split("-")[0]}-tab-strategy"${activeTeamStrategyView !== "strategy" ? " hidden" : ""}>${createRemainingStrategy(team.id)}</div>` : ""}
  `;
  detailPanel.scrollTop = previousScroll;
}

function openTeamDetail(teamIndex, characterId = getTeamMembers(teams[teamIndex])[0]) {
  openTeamIndex = teamIndex;
  detailCharacterId = characterId;
  activeBuildView = "summary";
  activeTravelerView = "builds";
  activeTeamStrategyView = "builds";
  lastFocusedElement = document.activeElement;
  renderTeamDetail();
  detailPanel.scrollTop = 0;
  detailModal.hidden = false;
  document.body.classList.add("detail-open");
  requestAnimationFrame(() => detailPanel.focus());
}

function closeTeamDetail() {
  detailModal.hidden = true;
  document.body.classList.remove("detail-open");
  lastFocusedElement?.focus();
}

detailContent.addEventListener("click", (event) => {
  const travelerTab = event.target.closest("[data-traveler-view]");
  if (travelerTab) {
    activeTravelerView = travelerTab.dataset.travelerView;
    renderTeamDetail();
    detailPanel.scrollTop = 0;
    detailContent.querySelector(`[data-traveler-view="${activeTravelerView}"]`)?.focus({ preventScroll: true });
    return;
  }
  const teamStrategyTab = event.target.closest("[data-team-strategy-view]");
  if (teamStrategyTab) {
    activeTeamStrategyView = teamStrategyTab.dataset.teamStrategyView;
    renderTeamDetail();
    detailPanel.scrollTop = 0;
    detailContent.querySelector(`[data-team-strategy-view="${activeTeamStrategyView}"]`)?.focus({ preventScroll: true });
    return;
  }
  const flex = event.target.closest("[data-flex-slot]");
  if (flex) { selectTravelerFlex(flex, true); return; }
  const button = event.target.closest("[data-detail-character]");
  if (button) {
    detailCharacterId = button.dataset.detailCharacter;
    renderTeamDetail();
    return;
  }
  const viewTab = event.target.closest("[data-build-view]");
  if (viewTab) {
    activeBuildView = viewTab.dataset.buildView;
    renderTeamDetail();
    return;
  }
  if (event.target.closest("[data-open-lightbox]")) {
    if (!characters[detailCharacterId].hoyolabImage) return;
    lightboxTrigger = event.target.closest("[data-open-lightbox]");
    buildLightboxImage.src = characters[detailCharacterId].hoyolabImage;
    buildLightboxImage.alt = `Build atual de ${characters[detailCharacterId].name} — HoYoLAB`;
    buildLightbox.classList.remove("is-zoomed");
    buildLightboxZoom.setAttribute("aria-pressed", "false");
    buildLightboxZoom.textContent = "Zoom 100%";
    buildLightbox.hidden = false;
    detailModal.inert = true;
    buildLightbox.querySelector("[data-close-lightbox-button]").focus();
  }
});

detailModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-detail]")) closeTeamDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!buildLightbox.hidden) {
    closeBuildLightbox();
    return;
  }
  if (!detailModal.hidden) closeTeamDetail();
});

function closeBuildLightbox() {
  buildLightbox.hidden = true;
  detailModal.inert = false;
  lightboxTrigger?.focus({ preventScroll: true });
}

buildLightbox.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-lightbox]")) closeBuildLightbox();
  if (event.target.closest("[data-zoom-build]")) {
    const zoomed = buildLightbox.classList.toggle("is-zoomed");
    buildLightboxZoom.setAttribute("aria-pressed", String(zoomed));
    buildLightboxZoom.textContent = zoomed ? "Ajustar à tela" : "Zoom 100%";
  }
});
buildLightbox.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const close = buildLightbox.querySelector("[data-close-lightbox-button]");
  if (event.shiftKey && document.activeElement === buildLightboxZoom) {
    event.preventDefault(); close.focus();
  } else if (!event.shiftKey && document.activeElement === close) {
    event.preventDefault(); buildLightboxZoom.focus();
  }
});

createFilters();
updateCount();
renderTeams();
