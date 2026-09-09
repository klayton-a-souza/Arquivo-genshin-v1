// Contexto do time informado pela conta em 08/09/2026.
// O snapshot Akasha original permanece intacto para consulta histórica.
(() => {
  window.GUIDE_NAME_ALIASES.weapons["Sacrificial Bow"] = "arco-do-sacrificio";
  const profile = (sands, goblet, circlet, substats, talentPriority, energy, notes = []) => ({
    mainStats: { sands, goblet, circlet }, substats, talentPriority, energy, notes,
  });
  const accountEnergy = (target, condition, notes = []) => ({ target, condition, notes, source: "Configuração informada para este time" });
  const roles = {
    travelerCryo: "Main DPS / On-field Stellar-Conduct",
    qiqi: "Support / Healer / Stellar-Conduct Buffer",
    diona: "Cryo Defensive Flex",
    alyosha: "Support / Buffer / Electro",
    fischl: "Electro Sub-DPS / Off-field / Single Target",
    beidou: "Electro Sub-DPS / Off-field / Multi Target",
  };
  const guidance = {
    travelerCryo: profile(["ATQ%"], ["ATQ%"], ["Taxa CRIT", "Dano CRIT"],
      "Dano CRIT > Taxa CRIT > ATQ% > Recarga de Energia > Proficiência Elemental", "E > Q > NA",
      accountEnergy("125–145%", "Meta do Viajante neste time"),
      ["4p Desencantamento na Sombra Profunda. Sabre da Ponta Estelar em uso."]),
    qiqi: profile(["ATQ%"], ["ATQ%"], ["ATQ%"],
      "ATQ% > Recarga de Energia > ATQ Flat > Bônus de Cura > Taxa CRIT > Dano CRIT > Proficiência Elemental", "E > Q > NA",
      { label: "Burst opcional antes do C6", condition: "Espada do Sacrifício R5", source: "Configuração da conta", notes: ["Não perseguir ER excessiva: a arma já fornece recarga."] },
      ["Variante ofensiva: cura, boa aplicação Cryo e buffs Stellar-Conduct distribuídos, inclusive para o dano fora de campo.",
        "4p Millelith Firmes: os acertos da Skill mantêm +20% ATQ enquanto o efeito estiver ativo.",
        "Após a Revelação das Bruxas, o reset da Skill perdeu valor. A Espada do Sacrifício R5 continua equipada nesta conta; as duas Espadas de Favonius estão reservadas para Jean e Xilonen.",
        "Bônus de Cura é uma propriedade de coroa/efeitos, não um subatributo rolável; a coroa escolhida nesta configuração é ATQ%."]),
    alyosha: profile(["ATQ%", "ER"], ["ATQ%"], ["ATQ%", "Taxa CRIT (se Favonius)"],
      "ER até requisito > ATQ% > ATQ Flat > Taxa CRIT se Favonius", "Q > E > NA",
      { target: "115–145%", condition: "C3 com outro Electro", source: "KQM • Alyosha", notes: ["C3 inclui C2: pode usar Q a cada duas rotações. A necessidade efetiva depende da frequência do Burst e de Favonius."] },
      ["4p Coração Forjado. Os buffs coletivos do conjunto são distintos dos buffs próprios do kit, destinados principalmente ao personagem ativo.",
        "Posicione Alyosha imediatamente antes do Viajante sempre que possível.",
        "Arma definitiva a definir. Opções relevantes: Sinfonista de Aromas, Lança de Favonius, Sopro Gélido, Luz do Cortador de Grama e A Fisgada. A lista de opções não redefine o ranking publicado."]),
    fischl: profile(["ATQ%"], ["Bônus de Dano Electro"], ["Taxa CRIT", "Dano CRIT"],
      "Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental > Recarga", "E > Q > NA",
      { label: "Sustentar a alternância E ↔ Q", condition: "Oz ativo • ciclo base de 15s", source: "Configuração da conta", notes: ["Sem meta numérica específica confirmada para esta variante; ajuste a recarga para Q estar disponível a cada duas rotações."] },
      ["Variante Single Target: bosses ou um inimigo. Oz fornece dano Electro off-field concentrado, aplicação constante e ataques coordenados do C6.",
        "4p Trupe Dourada. Prefira coroa de Dano CRIT se a Taxa CRIT final já estiver equilibrada.",
        "Vista da Jade Primordial R1, Nv.90: ATQ Base 510 e Taxa CRIT 27,6%. Arma da versão 7.0; posição no ranking ainda em cálculo.",
        "Alterne E → Q → E → Q para manter Oz em campo."]),
    beidou: profile(["ATQ%", "ER"], ["Bônus de Dano Electro"], ["Taxa CRIT", "Dano CRIT"],
      "ER até requisito > Taxa CRIT / Dano CRIT > ATQ% > Proficiência Elemental", "Q > E > NA",
      accountEnergy("130–140%", "Meta ~135% • Q a cada duas rotações"),
      ["Variante Multi Target: indicada contra 2+ inimigos pelos saltos do Burst e dano em área. O ganho depende dos alvos disponíveis para os saltos.",
        "Também oferece resistência à interrupção, redução de dano e benefícios adicionais do C6.",
        "4p Selo da Insulação. Arma definitiva a definir."]),
  };
  const dionaGuidance = window.TEAM_BUILD_GUIDANCE.teams["traveler-cryo"].diona;
  guidance.diona = { ...dionaGuidance, notes: [
    "Support / Shield / Healer / Defensive Stellar-Conduct Support. Variante defensiva: escudo, cura e buffs concentrados principalmente no personagem ativo.",
    "Use contra muita interrupção, dificuldade para completar o combo ou quando sobrevivência e conforto forem prioridade. Build e equipamentos atuais preservados.",
    "Qiqi = maior dano total; Diona C6 = maior conforto e proteção. Ambas são alternativas situacionais válidas.",
  ] };
  // Substitua as orientações antigas, sem somá-las às prioridades conflitantes.
  window.TEAM_BUILD_GUIDANCE.teams["traveler-cryo"] = guidance;
  for (const [id, role] of Object.entries(roles)) {
    const guide = window.CHARACTER_GUIDES[id] ||= { general: {}, teams: {} };
    guide.teams ||= {};
    guide.teams["traveler-cryo"] = { role, recommendations: guide.teams["traveler-cryo"]?.recommendations };
  }
  const ranked = (entries) => entries.map((options, index) => ({ rank: index + 1, options }));
  const item = (id, name, pieces) => ({ id, name, ...(pieces ? { pieces } : {}) });
  window.CHARACTER_GUIDES.qiqi.general = {
    source: "Genshin Impact Helper Team / Genshin Builds", guideVersion: "6.7 / Luna VIII",
    sourceUrl: "https://genshin-impact-helper-team.github.io/genshin-builds/en/qiqi/?build=heal-support",
    weapons: ranked([
      [item("favonius-sword", "Espada de Favonius")],
      [item("cancao-da-patrulha-do-pico", "Canção da Patrulha do Pico")],
      [item("espada-celestial", "Espada Celestial")],
      [item("sapwood-blade", "Espada de Madeira"), item("cruzamento-de-fleuve-cendre", "Cruzamento de Fleuve Cendre"), item("amenoma-kageuchi", "Amenoma Kageuchi")],
    ]),
    artifactSets: ranked([
      [item("millelith-firmes", "Millelith Firmes", 4)],
      [item("scroll-cinder-city", "Pergaminho do Herói da Cidade Incandescente", 4)],
      [item("concha-tingida-pelo-mar", "Concha Tingida Pelo Mar", 4), item("cancao-do-passado", "Canção do Passado", 4)],
      [item("combinacoes-cura-atq-er", "Combinações de 2p: Cura / ATQ / ER")],
    ]),
  };
  window.TRAVELER_TEAM = {
    updatedAt: "2026-09-08", roles,
    slots: {
      cryo: [{ id: "qiqi", label: "🗡️ Qiqi — Ofensivo" }, { id: "diona", label: "🛡️ Diona C6 — Defensivo" }],
      electro: [{ id: "fischl", label: "🎯 Fischl C6 — Single Target" }, { id: "beidou", label: "⚡ Beidou C6 — Multi Target" }],
    },
    variants: {
      "qiqi-fischl": { tag: "Boss / Single Target", usage: "Priorize o dano total contra bosses ou um único inimigo, com cura e buffs distribuídos pela Qiqi.", rotation: ["Qiqi E → Fischl E → Alyosha E(Q) → Viajante combo", "Qiqi E → Fischl Q → Alyosha E → Viajante combo"] },
      "qiqi-beidou": { tag: "2+ inimigos / Multi Target", usage: "Priorize dano total em encontros com múltiplos alvos, aproveitando os saltos do Burst da Beidou.", rotation: ["Beidou E → Q → Qiqi E → Alyosha E → Q → Viajante combo", "Beidou E → Qiqi E → Alyosha E → Viajante combo"] },
      "diona-fischl": { tag: "Boss / Defensive", usage: "Contra bosses, escolha escudo e cura para completar o combo com conforto, mantendo o dano concentrado de Oz.", rotation: ["Diona E(Q) → Fischl E → Alyosha E(Q) → Viajante combo", "Diona E(Q) → Fischl Q → Alyosha E → Viajante combo"] },
      "diona-beidou": { tag: "Multi Target / Defensive", usage: "Contra 2+ inimigos, combine o escudo e a cura da Diona com os saltos, a redução de dano e a resistência à interrupção da Beidou.", rotation: ["Beidou E(Q) → Diona E(Q) → Alyosha E(Q) → Viajante combo", "Beidou E → Diona E(Q) → Alyosha E → Viajante combo"] },
    },
    combo: "E → N2C → Dash → N1C → Dash → N2C → Q → N2C",
    sources: [
      { name: "Genshin Builds • rankings", url: "https://genshin-impact-helper-team.github.io/genshin-builds/" },
      { name: "KQM • Qiqi", url: "https://keqingmains.com/q/qiqi-quickguide/" },
      { name: "KQM • Alyosha", url: "https://keqingmains.com/q/alyosha-quickguide/" },
    ],
  };
})();
