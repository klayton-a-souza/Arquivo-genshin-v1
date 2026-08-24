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
  fischl: { name: "Fischl", element: "electro", role: "Sub DPS" },
  beidou: { name: "Beidou", element: "electro", role: "Sub DPS" },
  chevreuse: { name: "Chevreuse", element: "pyro", role: "Support / Healer" },
  neuvillette: { name: "Neuvillette", element: "hydro", role: "Main DPS" },
  furina: { name: "Furina", element: "hydro", role: "Sub DPS / Buffer" },
  kazuha: { name: "Kazuha", element: "anemo", role: "Support / Buffer" },
  tartaglia: { name: "Tartaglia", element: "hydro", role: "Main DPS" },
  xiangling: { name: "Xiangling", element: "pyro", role: "Sub DPS" },
  sucrose: { name: "Sucrose", element: "anemo", role: "Support / Buffer" },
  clorinde: { name: "Clorinde", element: "electro", role: "Main DPS" },
  nahida: { name: "Nahida", element: "dendro", role: "Support / Sub DPS" },
  raiden: { name: "Raiden Shogun", element: "electro", role: "Main DPS / Buffer" },
  ganyu: { name: "Ganyu", element: "cryo", role: "Main DPS" },
  charlotte: { name: "Charlotte", element: "cryo", role: "Healer" },
  travelerCryo: { name: "Viajante Cryo", element: "cryo", role: "Main DPS" },
  diona: { name: "Diona", element: "cryo", role: "Healer / Shielder" },
  alyosha: { name: "Alyosha", element: "cryo", role: "Sub DPS" },
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
  { id: "mavuika-carry", element: "pyro", name: "Mavuika Carry", characters: ["mavuika", "citlali", "xilonen", "bennett"] },
  { id: "arlecchino-overload", element: "pyro", name: "Arlecchino Overload", characters: ["arlecchino", "fischl", "beidou", "chevreuse"] },
  { id: "neuvillette-hypercarry", element: "hydro", name: "Neuvillette Hypercarry", characters: ["neuvillette", "furina", "kazuha", "xilonen"] },
  { id: "international", element: "hydro", name: "International", characters: ["tartaglia", "xiangling", "bennett", "sucrose"] },
  { id: "clorinde-aggravate", element: "electro", name: "Clorinde Aggravate", characters: ["clorinde", "nahida", "fischl", "kazuha"], note: "Sucrose pode substituir Kazuha quando for necess\u00e1rio ativar M\u00e1gico: Ritual Secreto." },
  { id: "raiden-overload", element: "electro", name: "Raiden Overload", characters: ["raiden", "chevreuse", "xiangling", "bennett"] },
  { id: "ganyu-freeze", element: "cryo", name: "Ganyu Freeze", characters: ["ganyu", "furina", "charlotte", "kazuha"] },
  { id: "traveler-cryo", element: "cryo", name: "Viajante Cryo", characters: ["travelerCryo", "beidou", "diona", "alyosha"] },
  { id: "alhaitham-hyperbloom", element: "dendro", name: "Alhaitham Hyperbloom", characters: ["alhaitham", "nahida", "kuki", "xingqiu"] },
  { id: "tighnari-spread", element: "dendro", name: "Tighnari Spread", characters: ["tighnari", "fischl", "lisa", "zhongli"] },
  { id: "venti-hexerei", element: "anemo", name: "Venti", characters: ["venti", "albedo", "fischl", "bennett"] },
  { id: "xiao-hypercarry", element: "anemo", name: "Xiao Hypercarry", characters: ["xiao", "faruzan", "furina", "jean"] },
  { id: "noelle-geo", element: "geo", name: "Noelle Geo", characters: ["noelle", "linnea", "furina", "illuga"], constellations: ["Noelle C6", "Linnea C0", "Furina C0", "Illuga C0"], future: "Futuro \u2192 Zibal" },
  { id: "itto-mono-geo", element: "geo", name: "Itto Mono Geo", characters: ["itto", "gorou", "albedo", "zhongli"] },
];

const filterList = document.querySelector("#filter-list");
const teamsRoot = document.querySelector("#teams-root");
const filterCount = document.querySelector("#filter-count");
const detailModal = document.querySelector("#team-detail-modal");
const detailContent = document.querySelector("#team-detail-content");
const detailPanel = detailModal.querySelector(".team-detail-panel");
const akashaLightbox = document.querySelector("#akasha-lightbox");
const akashaLightboxImage = document.querySelector("#akasha-lightbox-image");
const buildSnapshot = window.BUILD_SNAPSHOT || { builds: {}, snapshotDate: "2026-08-22" };
const buildImageExtracts = window.BUILD_IMAGE_EXTRACTS || {};
const characterGuides = window.CHARACTER_GUIDES || {};
const guideNameAliases = window.GUIDE_NAME_ALIASES || { weapons: {}, artifactSets: {} };
const teamBuildGuidance = window.TEAM_BUILD_GUIDANCE || { profiles: {}, teams: {} };
const akashaCaptureIds = new Set(portraitCharacterIds);
let activeFilter = "all";
let openTeamIndex = null;
let detailCharacterId = null;
let lastFocusedElement = null;
let activeBuildView = "summary";
let activeArtifactIndex = 0;

const getElement = (id) => elements.find((element) => element.id === id);
const initials = (name) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character]));
const percentStat = (name) => /percent|rate|dmg|recharge|healing|physical|taxa|cr[ií]tica|dano|recarga|b[oô]nus|cura/i.test(name);

function getBuild(characterId) {
  const base = buildSnapshot.builds?.[characterId] || {};
  const extracted = buildImageExtracts[characterId] || {};
  return {
    ...base,
    ...extracted,
    character: { ...base.character, ...extracted.character },
    weapon: { ...base.weapon, ...extracted.weapon },
    talents: { ...base.talents, ...extracted.talents },
    stats: { ...base.stats, ...extracted.stats },
    artifactSets: extracted.artifactSets || base.artifactSets || [],
    artifacts: base.artifacts || [],
  };
}

function formatStatValue(name, value) {
  if (typeof value !== "number") return escapeHtml(value);
  if (name === "CV") return value.toFixed(1);
  if (percentStat(name)) return `${value.toFixed(1)}%`;
  if (Math.abs(value) >= 100) return Math.round(value).toLocaleString("pt-BR");
  return Number(value.toFixed(1)).toLocaleString("pt-BR", { maximumFractionDigits: 1 });
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
    notes: [...(profile.notes || []), ...(contextual.notes || [])],
  };
}

function getContextRole(characterId, teamId) {
  const context = getGuideContext(characterId, teamId);
  return context.team.role || context.general.role || characters[characterId].role;
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

function createBuildSection(title, content) {
  return `<section class="build-section"><h5>${title}</h5>${content}</section>`;
}

function createFilters() {
  const filters = [{ id: "all", label: "Todos", color: "#e6c77d" }, ...elements];
  filterList.innerHTML = filters.map((filter) => `
    <button class="filter-button${filter.id === activeFilter ? " is-active" : ""}" type="button" data-filter="${filter.id}" style="--filter-color: ${filter.color}" aria-pressed="${filter.id === activeFilter}">
      ${filter.label}
    </button>
  `).join("");
}

function createCharacterCard(characterId) {
  const character = characters[characterId];
  const portraitImage = character.image
    ? `<img class="portrait-image" src="${character.image}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
    : "";

  return `
    <button class="character-card" type="button" data-character="${characterId}" aria-label="Destacar times com ${character.name}" style="--character-color: ${getElement(character.element).color}">
      <span class="portrait${character.image ? " has-image" : ""}">${portraitImage}<span class="portrait-initials">${initials(character.name)}</span></span>
      <span class="character-name">${character.name}</span>
      <span class="role-badge">${character.role}</span>
    </button>
  `;
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
              <div class="team-members">${team.characters.map((characterId) => createCharacterCard(characterId)).join("")}</div>
              ${team.note ? `<p class="team-note">${team.note}</p>` : ""}
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
  if (activeFilter === "all") {
  filterCount.textContent = "Todos os elementos \u00b7 14 times";
    return;
  }
  filterCount.textContent = `${getElement(activeFilter).label} \u00b7 2 times`;
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
  return `
    <button class="detail-member${characterId === detailCharacterId ? " is-active" : ""}" type="button" role="tab" data-detail-character="${characterId}" aria-selected="${characterId === detailCharacterId}">
      <img src="${character.image}" alt="" loading="lazy" decoding="async" />
      <span><strong>${escapeHtml(character.name)}</strong><small>${escapeHtml(role)}</small></span>
    </button>
  `;
}

function createWeaponDisplay(build) {
  if (!build.weapon?.name) return "<p class=\"subtle-empty\">Arma n&atilde;o identificada.</p>";
  const weapon = build.weapon;
  return `
    <div class="weapon-display">
      <div><strong>${escapeHtml(weapon.name)}</strong><span>Nv. ${weapon.level ?? "n&atilde;o registrado"} &middot; R${weapon.refinement ?? "-"} &middot; ${weapon.rarity ?? "-"} estrelas</span></div>
    </div>
  `;
}

function createDataList(values) {
  return `<dl class="build-data-list">${values.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${value === null || value === undefined ? "N&atilde;o registrado" : escapeHtml(value)}</dd></div>`).join("")}</dl>`;
}

function createArtifactCard(artifact, index) {
  const mainStat = `${artifact.mainStat.name}: ${formatStatValue(artifact.mainStat.name, artifact.mainStat.value)}`;
  return `
    <button class="artifact-card" type="button" data-artifact-index="${index}" aria-pressed="${index === activeArtifactIndex}">
      <span class="artifact-slot">${escapeHtml(artifact.slot)}</span>
      <strong>${escapeHtml(artifact.setName)}</strong>
      <span class="artifact-level">+${artifact.level}</span>
      <span class="artifact-main">${escapeHtml(mainStat)}</span>
    </button>
  `;
}

function createBuildIdentity(characterId, build) {
  const character = characters[characterId];
  const constellation = build?.character?.constellation === null || build?.character?.constellation === undefined
    ? "Constela&ccedil;&atilde;o na captura"
    : `C${build.character.constellation}`;
  const level = build?.character?.level === null || build?.character?.level === undefined
    ? "N&iacute;vel na captura"
    : `N&iacute;vel ${build.character.level}`;

  return `
    <div class="build-identity">
      <img class="build-character-image" src="${character.image}" alt="" />
      <div><h4>${escapeHtml(character.name)}</h4><p>${constellation} &middot; ${level} &middot; ${escapeHtml(getElement(character.element).label)}</p></div>
    </div>
  `;
}

function createAkashaCard(characterId) {
  if (!akashaCaptureIds.has(characterId)) return "<p class=\"subtle-empty\">Card n&atilde;o dispon&iacute;vel.</p>";
  const character = characters[characterId];
  const source = `assets/images/akasha/${characterId}.png`;
  return `<div class="akasha-card"><button type="button" data-open-lightbox aria-label="Ampliar card de ${escapeHtml(character.name)}"><img src="${source}" alt="Build de ${escapeHtml(character.name)} no Terminal Akasha" decoding="async" /></button><button class="akasha-open" type="button" data-open-lightbox>Abrir imagem</button></div>`;
}

function createSetSummary(build) {
  const sets = build.artifactSets || [];
  const active = sets.filter((set) => set.count >= 2).map((set) => `${escapeHtml(set.name)} &times;${set.count}`);
  const offPieces = sets.filter((set) => set.count === 1).length;
  return [...active, ...(offPieces ? [`${offPieces} Off-piece`] : [])].join(" &middot; ") || "Set n&atilde;o identificado";
}

function createArtifactDetail(artifact) {
  if (!artifact) return "<p class=\"subtle-empty\">Detalhes individuais dispon&iacute;veis no Card Akasha.</p>";
  return `<article class="artifact-detail"><p>${escapeHtml(artifact.slot)} &middot; +${artifact.level}</p><h5>${escapeHtml(artifact.setName)}</h5><div class="artifact-detail-main"><span>${escapeHtml(artifact.mainStat.name)}</span><strong>${formatStatValue(artifact.mainStat.name, artifact.mainStat.value)}</strong></div><ul>${artifact.substats.map((substat) => `<li><span>${escapeHtml(substat.name)}</span><strong>${formatStatValue(substat.name, substat.value)}</strong></li>`).join("")}</ul></article>`;
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

function createBuildGuideSummary(characterId, teamId) {
  const { general, team } = getGuideContext(characterId, teamId);
  const summaryGuidance = getSummaryGuidance(characterId, teamId);
  const hasGuide = Object.keys(general).length || Object.keys(team).length || Object.keys(summaryGuidance).length;
  if (!hasGuide) {
    return `<section class="build-guide"><div class="build-guide-heading"><div><p>Guia de build</p><h5>Orienta&ccedil;&otilde;es</h5></div></div><p class="guide-empty guide-empty-panel">Informa&ccedil;&atilde;o ainda n&atilde;o cadastrada.</p></section>`;
  }

  const role = team.role || general.role;
  const notes = [...(general.notes || []), ...(team.notes || []), ...(summaryGuidance.notes || [])];
  return `
    <section class="build-guide">
      <div class="build-guide-heading">
        <div><p>Guia de build</p><h5>Orienta&ccedil;&otilde;es para ${escapeHtml(teams.find((entry) => entry.id === teamId)?.name || "este time")}</h5></div>
        ${role ? `<span class="guide-role">${escapeHtml(role)}</span>` : ""}
      </div>
      <div class="guide-detail-grid">
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
  const currentSet = currentIds.artifactSets;
  return `
    <article class="ranking-group">
      <span class="ranking-position">#${group.rank}</span>
      <div class="ranking-options">
        ${group.options.map((option, optionIndex) => {
          const isCurrent = type === "weapons" ? option.id === currentIds.weapon : currentSet.has(option.id);
          const currentData = type === "weapons" ? build.weapon : null;
          return `
            <div class="ranking-option${isCurrent ? " is-current" : ""}">
              ${createRankingVisual(characterId, type, option)}
              <div class="ranking-copy">
                <strong>${optionIndex ? "<span class=\"ranking-equivalent\">&asymp;</span> " : ""}${escapeHtml(option.name)}</strong>
                ${createItemMeta(option, currentData, isCurrent)}
              </div>
              ${isCurrent ? `<span class="current-badge">${type === "weapons" ? "EM USO" : "SET ATUAL"}</span>` : ""}
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
  return `
    <section class="recommendation-column">
      <div class="recommendation-column-heading"><span aria-hidden="true">${type === "weapons" ? "A" : "S"}</span><div><p>${label}</p><h4>${title}</h4></div></div>
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
      ${recommendation.source ? `<footer class="recommendations-source">Fonte: ${escapeHtml(recommendation.source)}${recommendation.guideVersion ? ` &middot; Guia ${escapeHtml(recommendation.guideVersion)}` : ""}</footer>` : ""}
    </section>
  `;
}

function createAvailableBuild(characterId, build, teamId) {
  const character = characters[characterId];
  const talentValues = [["Ataque Normal", build.talents.normal], ["Skill", build.talents.skill], ["Burst", build.talents.burst]];
  const stats = Object.entries(build.stats || {});
  const constellation = build.character?.constellation ?? "?";
  const level = build.character?.level ?? "?";
  const highlights = [["Taxa Crítica", build.stats?.["Taxa Crítica"]], ["Dano Crítico", build.stats?.["Dano Crítico"]], ["ATQ", build.stats?.ATQ]].filter(([, value]) => value !== undefined);
  const remainingStats = stats.filter(([name]) => !["Taxa Crítica", "Dano Crítico", "ATQ"].includes(name));

  return `
    <section class="build-dashboard">
      <div class="dashboard-character"><img src="${character.image}" alt="" /><div><h4>${escapeHtml(character.name)}</h4><p>C${constellation} &middot; Nv.${level} &middot; ${escapeHtml(getElement(character.element).label)}</p><p class="set-summary">${createSetSummary(build)}</p></div></div>
      <div class="dashboard-weapon"><h5>Arma</h5>${createWeaponDisplay(build)}<h5>Talentos</h5><div class="talent-summary">${talentValues.map(([label, value]) => `<span><small>${label}</small><strong>${value ?? "-"}</strong></span>`).join("")}</div></div>
      <div class="dashboard-stats"><h5>Atributos</h5><div class="stat-highlights">${highlights.map(([name, value]) => `<div><strong>${formatStatValue(name, value)}</strong><span>${escapeHtml(name)}</span></div>`).join("")}</div>${remainingStats.length ? createDataList(remainingStats.map(([name, value]) => [name, formatStatValue(name, value)])) : ""}</div>
    </section>
    ${createBuildGuideSummary(characterId, teamId)}
  `;
}

function createCapturedBuild(characterId) {
  return createAvailableBuild(characterId, getBuild(characterId), teams[openTeamIndex]?.id);
}

function renderTeamDetail() {
  const team = teams[openTeamIndex];
  const element = getElement(team.element);
  const build = getBuild(detailCharacterId);
  const hasCapture = akashaCaptureIds.has(detailCharacterId);
  const body = activeBuildView === "akasha"
    ? createAkashaCard(detailCharacterId)
    : activeBuildView === "recommendations"
      ? createRecommendationsPanel(detailCharacterId, team.id, build)
      : createAvailableBuild(detailCharacterId, build, team.id);
  detailContent.className = "detail-content";
  detailContent.style.setProperty("--detail-color", element.color);
  detailContent.innerHTML = `
    <p class="detail-kicker">${escapeHtml(element.label)} &middot; Detalhe do time</p>
    <h2 id="detail-title" class="detail-team-heading">${escapeHtml(team.name)}</h2>
    <div class="detail-team-picker" role="tablist" aria-label="Personagens do time">${team.characters.map(createDetailMember).join("")}</div>
    <div class="build-view-tabs" role="tablist" aria-label="Visualiza&ccedil;&atilde;o da build"><button type="button" role="tab" data-build-view="summary" aria-selected="${activeBuildView === "summary"}">Resumo</button><button type="button" role="tab" data-build-view="recommendations" aria-selected="${activeBuildView === "recommendations"}">Recomenda&ccedil;&otilde;es</button><button type="button" role="tab" data-build-view="akasha" aria-selected="${activeBuildView === "akasha"}">Card Akasha</button></div>
    ${body}
    <p class="build-snapshot">Snapshot Akasha &middot; ${escapeHtml(buildSnapshot.snapshotDate)} &middot; <a href="https://akasha.cv/profile/602235955" target="_blank" rel="noopener noreferrer">Visitar Akasha</a></p>
  `;
}

function openTeamDetail(teamIndex, characterId = teams[teamIndex].characters[0]) {
  openTeamIndex = teamIndex;
  detailCharacterId = characterId;
  activeBuildView = "summary";
  activeArtifactIndex = 0;
  lastFocusedElement = document.activeElement;
  renderTeamDetail();
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
  const button = event.target.closest("[data-detail-character]");
  if (button) {
    detailCharacterId = button.dataset.detailCharacter;
    activeArtifactIndex = 0;
    renderTeamDetail();
    return;
  }
  const viewTab = event.target.closest("[data-build-view]");
  if (viewTab) {
    activeBuildView = viewTab.dataset.buildView;
    renderTeamDetail();
    return;
  }
  const artifact = event.target.closest("[data-artifact-index]");
  if (artifact) {
    activeArtifactIndex = Number(artifact.dataset.artifactIndex);
    renderTeamDetail();
    return;
  }
  if (event.target.closest("[data-open-lightbox]")) {
    akashaLightboxImage.src = `assets/images/akasha/${detailCharacterId}.png`;
    akashaLightboxImage.alt = `Build de ${characters[detailCharacterId].name} no Terminal Akasha`;
    akashaLightbox.hidden = false;
  }
});

detailModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-detail]")) closeTeamDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!akashaLightbox.hidden) {
    akashaLightbox.hidden = true;
    return;
  }
  if (!detailModal.hidden) closeTeamDetail();
});

akashaLightbox.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-lightbox]")) akashaLightbox.hidden = true;
});

createFilters();
updateCount();
renderTeams();
