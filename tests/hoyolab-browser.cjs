const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const output = path.resolve(__dirname, '../reports/hoyolab');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    const response = await page.goto('http://127.0.0.1:4175/');
    assert.equal(response.status(), 200);
    assert.equal(await page.locator('.team-card').count(), 14);
    for (const count of await page.locator('.element-section').evaluateAll(sections => sections.map(section => section.querySelectorAll('.team-card').length))) assert.equal(count, 2);
    const ids = await page.evaluate(() => Object.keys(window.HOYOLAB_BUILDS));
    for (const id of ids) {
      await page.evaluate(id => {
        let index = teams.findIndex(team => getTeamMembers(team).includes(id));
        if (index < 0) index = ['diona', 'beidou'].includes(id) ? teams.findIndex(team => team.id === 'traveler-cryo') : 0;
        openTeamDetail(index, id);
      }, id);
      const image = page.locator('.current-build-image img');
      await image.evaluate(img => img.decode());
      const dimensions = await image.evaluate(img => ({ w: img.clientWidth, h: img.clientHeight, nw: img.naturalWidth, nh: img.naturalHeight }));
      assert.ok(dimensions.nw > 0, id);
      assert.ok(Math.abs(dimensions.w / dimensions.h - dimensions.nw / dimensions.nh) < .005, id + ' aspect ratio');
      await page.locator('[data-build-view="recommendations"]').click();
      const expected = await page.evaluate(id => {
        const build = getBuild(id);
        return { weapon: build.weapon.name, sets: build.artifactSets.length };
      }, id);
      assert.ok(await page.locator('.recommendation-column').first().locator('.is-current').count() >= 1, id + ' weapon badge');
      assert.equal(await page.locator('.recommendation-column').nth(1).locator('.is-current').count(), expected.sets, id + ' set badges');
      await page.locator('[data-build-view="summary"]').click();
      assert.equal(await page.locator('.current-build-image').count(), 0);
      assert.ok((await page.locator('.build-guide').textContent()).includes('Top 3 atributos recomendados'), id);
    }
    await page.evaluate(() => openTeamDetail(0));
    await page.locator('.current-build-image img').evaluate(img => img.decode());
    await page.screenshot({ path: path.join(output, 'desktop.png') });
    await page.locator('[data-open-lightbox]').first().click();
    await page.locator('[data-zoom-build]').click();
    assert.equal(await page.locator('[data-zoom-build]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#build-lightbox-image').evaluate(img => img.clientWidth === img.naturalWidth), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#build-lightbox').isVisible(), false);
    assert.equal(await page.locator('#team-detail-modal').evaluate(el => el.inert), false);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => openTeamDetail(0));
    await page.screenshot({ path: path.join(output, 'mobile.png') });
    assert.ok(await page.locator('.team-detail-panel').evaluate(el => el.scrollWidth <= el.clientWidth + 1));
    const mobileImage = await page.locator('.current-build-image img').evaluate(img => ({ w: img.clientWidth, h: img.clientHeight, nw: img.naturalWidth, nh: img.naturalHeight }));
    assert.ok(Math.abs(mobileImage.w / mobileImage.h - mobileImage.nw / mobileImage.nh) < .005);
    await page.locator('[data-open-lightbox]').first().click();
    await page.locator('[data-zoom-build]').click();
    await page.screenshot({ path: path.join(output, 'mobile-zoom.png') });
    assert.ok(await page.locator('.build-lightbox-viewport').evaluate(el => el.scrollWidth > el.clientWidth && el.scrollHeight > el.clientHeight));
    await page.locator('[data-zoom-build]').click();
    await page.locator('[data-close-lightbox-button]').click();
    await page.locator('[data-build-view="recommendations"]').click();
    await page.screenshot({ path: path.join(output, 'mobile-recommendations.png') });
    assert.ok(await page.locator('.team-detail-panel').evaluate(el => el.scrollWidth <= el.clientWidth + 1));
    assert.deepEqual(errors, []);
    console.log('OK: 41 cards, equipamentos EM USO, 14 times/2 por elemento, abas, desktop/mobile, zoom e console.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
