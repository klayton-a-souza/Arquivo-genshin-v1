(() => {
  const guides = window.CHARACTER_GUIDES || {};
  const aliases = window.GUIDE_NAME_ALIASES || { weapons: {}, artifactSets: {} };
  const ids = {
    "Espinha Dorsal da Serpente": "serpent-spine",
    "Espada de Madeira": "sapwood-blade",
    "Espada de Favonius": "favonius-sword",
    "Códice de Obsidiana": "obsidian-codex",
    "Antigo Ritual Real": "noblesse-oblige",
    "Pergaminho do Herói da Cidade Incandescente": "scroll-cinder-city",
    "Pergaminho": "scroll-cinder-city",
    "Instrutor": "instructor",
    "Pedra Arcaica": "archaic-petra",
    "Trupe Dourada": "golden-troupe",
    "Cortadora da Neblina": "cortadora-da-neblina-reforjada",
    "Cortador de Jade": "cortador-de-jade-primordial",
    "Lança de Jade": "lanca-de-jade-primitiva",
    "Sonhos Flutuantes": "sonhos-flutuantes-das-mil-noites",
    "Hibernação Matinal": "hibernacao-matinal-do-ano-novo",
    "Oração Perdida": "oracao-perdida",
    "Plumagem Escarlate": "plumagem-escarlate",
    "Fleuve Cendre": "cruzamento-de-fleuve-cendre",
    "Chifres Vermelhos": "chifres-vermelhos-destruidores-de-pedras",
    "Bruxa das Chamas": "bruxa-das-chamas",
  };

  const makeId = (name) => ids[name] || name.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const option = (raw, type) => {
    const refinement = raw.match(/\sR(\d+)$/);
    const pieces = type === "sets" ? raw.match(/\s×(\d+)$/) : null;
    const name = raw.replace(/\sR\d+$/, "").replace(/\s×\d+$/, "");
    return { id: makeId(name), name, ...(refinement ? { refinement: Number(refinement[1]) } : {}), ...(pieces ? { pieces: Number(pieces[1]) } : {}) };
  };

  const ranks = (type, entries) => entries.map((entry, index) => ({
    rank: index + 1,
    options: entry.split(" ≈ ").map((name) => option(name, type)),
  }));

  const recommendation = (weapons, artifactSets, extra = {}) => ({
    source: "Genshin Builds",
    ...(weapons ? { weapons: ranks("weapons", weapons) } : {}),
    ...(artifactSets ? { artifactSets: ranks("sets", artifactSets) } : {}),
    ...extra,
  });

  const apply = (characterId, data) => {
    const guide = guides[characterId] || { general: {}, teams: {} };
    guide.general = { ...guide.general, ...data };
    guides[characterId] = guide;
  };

  const applyTeam = (characterId, teamId, data) => {
    const guide = guides[characterId] || { general: {}, teams: {} };
    guide.teams = guide.teams || {};
    guide.teams[teamId] = { ...guide.teams[teamId], recommendations: data };
    guides[characterId] = guide;
  };

  Object.assign(aliases.weapons, {
    "Favonius Codex": "codex-de-favonius",
    "Serpent Spine": "serpent-spine",
    "Sapwood Blade": "sapwood-blade",
    "Favonius Sword": "favonius-sword",
  });

  apply("mavuika", {
    role: "On-Field DPS",
    ...recommendation(
      ["Mil Sóis Ardentes", "Balada do Poderoso Lobo", "Chifres Vermelhos Destruidores de Pedras ≈ Veredito", "Sinal dos Mares", "Flor de Aço R5 ≈ Túmulo do Lobo ≈ Espada Áspera", "Espinha Dorsal da Serpente ≈ Presa do Rei da Montanha", "Lâmina das Ondas R5", "Segadeira da Chuva R5"],
      ["Códice de Obsidiana ×4", "Pergaminho do Herói da Cidade Incandescente ×4"],
      {
        conditionalArtifactSets: ["Caçador das Sombras ×4", "Memórias da Floresta ×4"],
        recommendationNotes: {
          sections: [
            {
              title: "Em relação às escolhas de artefatos",
              paragraphs: [
                "Em quase todas as situações, Mavuika prefere Areia de Maestria Elemental em vez de Areia de ATQ%, a menos que ela não esteja em uma equipe focada em Amplificação de Reação (Vaporizar ou Derreter).",
                "Com muitos buffs externos de Maestria Elemental, como Instrutor (4) ou Sacarose, Maestria Elemental perde ligeiramente valor.",
              ],
            },
            {
              title: "Conjuntos",
              items: [
                { label: "Pergaminho do Herói da Cidade Incandescente (4)", description: "Se nenhum outro membro da equipe puder segurá-lo, este se torna o melhor conjunto de artefatos de Mavuika para Fora de Campo." },
                { label: "Caçador das Sombras (4)", description: "Só deve ser usado em conjunto com Furina e tem um desempenho ligeiramente inferior a Códice de Obsidiana (4)." },
                { label: "Memórias da Floresta (4)", description: "É uma opção de suporte em equipes com uma quantidade relevante de dano de Dendro, como equipes com Kinich." },
              ],
            },
          ],
        },
      },
    ),
  });
  apply("citlali", {
    role: "Buff Support",
    ...recommendation(
      ["Observatório do Chamador de Estrelas", "Os Sete Éditos da Poeira e Luz", "Histórias Extraordinárias de Caçadores de Dragões R5 ≈ Estrela Itinerante ≈ Codex de Favonius", "Lira do Tecedor da Luz R5 ≈ Memórias de Sacrifício", "Lanterna do Tutano Preto ≈ Fruto da Abundância"],
      ["Pergaminho ×4", "Millelith Firmes ×4", "Instrutor ×4"],
    ),
  });
  apply("xilonen", {
    role: "Buff/Reaction Support",
    ...recommendation(
      ["Canção da Patrulha do Pico", "Juramento pela Liberdade", "Espada de Favonius", "Flauta de Ezpitzal", "Espada do Cavaleiro do Céu"],
      ["Pergaminho ×4", "Pedra Arcaica ×4", "Antigo Ritual Real ×4 ≈ Instrutor ×4"],
    ),
  });
  apply("bennett", {
    role: "Support",
    ...recommendation(
      ["Cortadora da Neblina Reforjada ≈ Absolvição ≈ Azul Brilhante ≈ Falcão", "Brilho do Beco", "Juramento pela Liberdade ≈ Canção da Patrulha do Pico ≈ Espada Celestial", "Espada de Madeira", "Protótipo Rancor ≈ Calamidade de Eshu", "Espada de Favonius"],
      ["Antigo Ritual Real ×4", "Instrutor ×4", "Pergaminho ×4", "Memórias da Floresta ×4"],
    ),
  });

  apply("arlecchino", {
    role: "On-Field DPS",
    ...recommendation(
      ["Semblante da Lua Carmesim", "Báculo das Areias Escarlates", "Lança de Jade Primitiva ≈ Elegia Lumidouce ≈ Resplendor Fragmentado", "Báculo de Homa", "Sinfonista de Aromas ≈ Perfuradora Prismática", "Lança do Duelo ≈ Canção do Fiorde", "Subjugadora de Calamidades ≈ Desastre e Remorso ≈ Ruínas Ensanguentadas", "Lâmina do Vento Mensageiro R5 ≈ Borla Branca R5"],
      ["Fragmento da Harmonia Fantástica ×4", "Último Juramento do Gladiador ×4", "Crônicas do Pavilhão do Deserto ×4", "Combinações 2p ATQ / Bruxa / Caçador ≈ Eco do Sacrifício ×4"],
    ),
  });
  apply("fischl", {
    role: "Off-Field DPS normal",
    ...recommendation(
      ["As Crônicas do Amanhecer", "Estrela Invernal", "Aqua Simulacra ≈ Agitação Trovejante ≈ Caminho do Caçador", "Arcana Original ≈ Harpa Celestial", "Plumagem Escarlate ≈ Canção do Silêncio R5 ≈ Quebrador de Correntes R5 ≈ Arco de Amos", "Caçador do Beco", "Arco Esmeralda ≈ Último Acorde ≈ Crepúsculo Desvanecido R5"],
      ["Trupe Dourada ×4", "Ascensão Zéfira ×4", "Trupe Dourada 2p + Trovão Furioso 2p ≈ Lançador de Trovões ×4", "Combinações ATQ / Trovão / Trupe 2p", "Millelith Firmes ×4"],
    ),
  });
  apply("beidou", {
    role: "Low Energy",
    ...recommendation(
      ["Mil Sóis Ardentes", "Chave da Transcendência ≈ Sinal dos Mares ≈ Balada do Poderoso Lobo", "Veredito", "Presa do Rei da Montanha ≈ Túmulo do Lobo ≈ Espada Áspera ≈ Chifres Vermelhos", "Espinha Dorsal da Serpente ≈ Lâmina das Ondas R5", "Canção dos Pinhos", "Akuoumaru ≈ Diálogo ≈ Orgulho Celestial ≈ Mega Ultra Espada Mágica R5", "Forjada pela Lei Dourada", "Foice do Penhasco Obscuro ≈ Espada Antiga de Millelith ≈ Lâmina da Redenção"],
      ["Selo da Insulação ×4", "Combinações 2p ER / Ritual / Trovão / ATQ ≈ Ascensão Zéfira ×4", "Antigo Ritual Real ×4 ≈ Pergaminho ×4"],
    ),
  });
  apply("chevreuse", {
    role: "Buff Support",
    ...recommendation(
      ["Sinfonista de Aromas", "Lança de Favonius", "Conversas dos Sábios do Deserto", "Borla Preta ≈ Justa Recompensa", "Protótipo Estelar"],
      ["Antigo Ritual Real ×4", "Pergaminho ×4 ≈ Concha Tingida Pelo Mar ×4 ≈ Canção do Passado ×4 ≈ Combinações 2p HP / Cura / ER", "Donzela Amada ×4"],
    ),
  });

  apply("neuvillette", {
    role: "On-Field DPS",
    ...recommendation(
      ["Rito do Fluxo Eterno", "Sacrifício de Jade ≈ Hora do Surfe ≈ Relicário da Verdade", "Esplendor Índigo ≈ Protótipo Âmbar ≈ Supervisão de Caixa ≈ Sinfonia dos Indolentes ≈ Prova de Kagura ≈ Oração Perdida", "Cálice de Chifre Cinza Escarlate"],
      ["Caçador das Sombras ×4", "Profundezas do Coração ×4", "2p Hydro + 2p HP / Caçador ≈ Meteoro Invertido ×4 ≈ Trupe Itinerante ×4 ≈ Sonho da Ninfa ×4"],
    ),
  });
  apply("furina", {
    role: "Low Energy Requirement",
    ...recommendation(
      ["Esplendor das Águas Silenciosas", "Cortador de Jade Primordial ≈ Urakugo Rensai", "Espada Pútrida R5 ≈ Luz das Folhas Cortadas", "Fragmento Lunar da Luz", "Chave de Hierofania", "Maremoto da Lua de Futsu ≈ Cruzamento de Fleuve Cendre R5", "Farpa ≈ Chamado da Serenidade R5", "Corrupção Sombria ≈ Sabre da Ponta Estelar ≈ Cortadora ≈ Absolvição", "Espada Celestial ≈ Favonius", "Prenúncio do Alvorecer R5 ≈ A Doca"],
      ["Trupe Dourada ×4", "Millelith Firmes ×4", "2p + 2p Hydro / Trupe / HP / ER"],
    ),
  });
  apply("kazuha", {
    role: "Support",
    ...recommendation(
      ["Juramento pela Liberdade", "Espada de Favonius", "Luz Lunar de Xiphos", "Espada do Sacrifício ≈ Fleuve Cendre ≈ Espada Celestial", "Espinho de Ferro ≈ Chuva Floral ≈ Espada do Cavaleiro do Céu"],
      ["Sombra Verde ×4", "Trovão Furioso ×4"],
      { conditionalArtifactSets: ["Trovão Furioso ×4: apenas para casos específicos"] },
    ),
  });
  apply("tartaglia", {
    role: "On-Field DPS",
    ...recommendation(
      ["Estrela Invernal", "Caminho do Caçador ≈ Aqua Simulacra ≈ Harpa Celestial ≈ Agitação Trovejante ≈ Plumagem Escarlate", "Arcana Original", "Arco Esmeralda", "Vassalo do Rei R5 ≈ Arco de Amos ≈ Último Acorde R5", "Herdeiro do Sol ≈ Arco do Penhasco ≈ Quebrador de Correntes R5", "Ode à Brisa Florescente R5 ≈ Arco Quebra-Demônios R5 ≈ Lua de Mouun ≈ Arco Enferrujado R5"],
      ["Sonho da Ninfa ×4", "Profundezas do Coração ×4", "Hydro 2p + ATQ 2p", "2p Ritual / Hydro / ATQ", "Reminiscência Nostálgica ×4"],
    ),
  });
  apply("xiangling", {
    role: "Vaporize DPS",
    ...recommendation(
      ["Báculo das Areias Escarlates", "Elegia Lumidouce ≈ Resplendor Fragmentado ≈ Báculo de Homa ≈ Luz do Cortador de Grama", "Lança de Jade ≈ Sinfonista de Aromas ≈ A Fisgada R5 ≈ Lança do Duelo ≈ Canção do Fiorde", "Perfuradora Prismática ≈ Subjugadora de Calamidades ≈ Semblante da Lua Carmesim ≈ Ruínas Ensanguentadas ≈ Barbatana do Quebra Ondas ≈ Perdição do Dragão"],
      ["Selo da Insulação ×4", "Bruxa das Chamas ×4", "Sonhos Dourados ×4 ≈ Combinações Ritual / Bruxa / ATQ / EM / ER 2p", "Antigo Ritual Real ×4"],
    ),
  });
  apply("sucrose", {
    role: "Support",
    ...recommendation(
      ["Sonhos Flutuantes das Mil Noites ≈ Hibernação Matinal do Ano Novo", "Estrela Itinerante", "Memórias de Sacrifício ≈ Histórias Extraordinárias de Caçadores de Dragões", "Anel de Hakushin", "Guia de Magia", "Codex de Favonius"],
      ["Sombra Verde ×4", "Instrutor ×4", "EM 2p + EM 2p"],
    ),
  });

  apply("clorinde", {
    role: "On-Field DPS",
    ...recommendation(
      ["Absolvição", "Luz das Folhas Cortadas ≈ Maremoto da Lua de Futsu", "Cortadora da Neblina ≈ Cortador de Jade ≈ Urakugo Rensai ≈ Juramento pela Liberdade", "Calamidade de Eshu R5", "Epílogo das Profundezas R5 ≈ Espada Negra"],
      ["Fragmento da Harmonia Fantástica ×4", "Último Juramento do Gladiador ×4", "Trovão Furioso ×4"],
      { conditionalArtifactSets: ["Trovão Furioso ×4: competitivo com #1 em Aggravate"] },
    ),
  });
  apply("nahida", {
    role: "Off-Field DPS / Support",
    ...recommendation(
      ["Sonhos Flutuantes das Mil Noites ≈ Hibernação Matinal do Ano Novo", "Prova de Kagura", "Memórias de Sacrifício", "Estrela Itinerante", "Sinfonia dos Indolentes ≈ Sacrifício de Jade", "Atlas Celestial ≈ Oração Perdida ≈ Memória da Poeira ≈ Pérola Solar"],
      ["Memórias da Floresta ×4", "Sonhos Dourados ×4 ≈ Trupe Dourada ×4", "Combinações EM / Deepwood 2p", "Millelith Firmes ×4", "Flor do Paraíso Perdido ×4"],
    ),
  });
  apply("raiden", {
    role: "On-Field DPS",
    ...recommendation(
      ["Luz do Cortador de Grama", "Báculo de Homa ≈ Báculo das Areias Escarlates ≈ Sinfonista de Aromas ≈ Elegia Lumidouce ≈ Lança de Jade", "Subjugadora de Calamidades ≈ Lança do Duelo", "Perfuradora Prismática", "A Fisgada R5 ≈ Espinha Celestial", "Barbatana do Quebra Ondas ≈ Lança de Millelith", "Lança de Favonius"],
      ["Selo da Insulação ×4", "Combinações Ritual / Trovão / ATQ / ER 2p", "Millelith Firmes ×4"],
    ),
  });
  apply("ganyu", {
    role: "Freeze DPS",
    ...recommendation(
      ["Estrela Invernal", "Arcana Original ≈ Plumagem Escarlate ≈ Aqua Simulacra", "Agitação Trovejante ≈ Harpa Celestial", "Arco de Amos ≈ Canção do Silêncio R5", "Protótipo da Luz Lunar Pálida ≈ Lua de Mouun"],
      ["Herói Invernal ×4", "Combinações Herói Invernal / ATQ / Ritual 2p", "Caçador das Sombras ×4"],
      { conditionalArtifactSets: ["Caçador das Sombras ×4: opção com Furina, ligeiramente abaixo de Herói Invernal"] },
    ),
  });
  apply("charlotte", {
    role: "Heal Support",
    ...recommendation(
      ["Protótipo Âmbar ≈ Codex de Favonius", "Histórias Extraordinárias de Caçadores de Dragões", "Olho do Juramento R5 ≈ Vinho e Música"],
      ["Antigo Ritual Real ×4 ≈ Millelith Firmes ×4", "Concha Tingida Pelo Mar ×4 ≈ Pergaminho ×4 ≈ Canção do Passado ×4", "2p ER / ATQ / Cura", "Donzela Amada ×4", "Herói Invernal ×4"],
    ),
  });

  apply("travelerCryo", {
    role: "Stellar Glimmer DPS",
    ...recommendation(
      ["Sabre da Ponta Estelar", "Asa Gelada de Lago Branco", "Azul Brilhante ≈ Absolvição", "Cortadora da Neblina ≈ Luz das Folhas Cortadas", "Corrupção Sombria", "Urakugo Rensai ≈ Cortador de Jade ≈ Maremoto da Lua de Futsu ≈ Esplendor das Águas Silenciosas ≈ Fragmento Lunar", "Cortador de Montanhas", "Falcão ≈ Juramento pela Liberdade", "Lâmina Derretida do Herege R5", "Fonte da Ignição R5 ≈ Epílogo das Profundezas R5"],
      ["Desencantamento na Sombra Profunda ×4", "Ascensão Zéfira ×4 ≈ Sonhos Dourados ×4", "ATQ 2p + EM 2p"],
    ),
  });
  apply("diona", {
    role: "Shield / Heal Support",
    ...recommendation(
      ["Arco de Favonius", "Arco do Sacrifício", "Elegia do Suspiro Final", "Cordas da Chuva Branca", "Arco Recurvado ≈ Ritmo da Solidão R5"],
      ["Antigo Ritual Real ×4 ≈ Pergaminho ×4", "Combinações HP / ER / Cura 2p", "Donzela Amada ×4 ≈ Concha Tingida Pelo Mar ×4", "Instrutor ×4", "Millelith Firmes ×4"],
    ),
  });
  apply("alyosha", {
    role: "Support",
    ...recommendation(
      ["Sinfonista de Aromas", "Sopro Gélido", "Favonius", "Luz do Cortador de Grama", "Fofocas Breves do Pavilhão R5", "Espinha Celestial", "Canção da Vigília R5"],
      ["Coração Forjado ×4", "Antigo Ritual Real ×4", "ER 2p + ATQ 2p"],
    ),
  });
  apply("alhaitham", {
    role: "On-Field DPS",
    ...recommendation(
      ["Luz das Folhas Cortadas", "Urakugo Rensai ≈ Cortador de Jade", "Cortadora da Neblina ≈ Maremoto da Lua de Futsu", "Juramento pela Liberdade", "Farpa", "Chuva Floral", "Espada Negra", "Cortador de Montanhas ≈ Espinho de Ferro ≈ Penhasco Obscuro ≈ Prenúncio do Alvorecer", "Luz Lunar de Xiphos ≈ Espada Pútrida", "Espada Celestial"],
      ["Sonhos Dourados ×4", "Combinações Deepwood / ER / EM 2p", "Memórias da Floresta ×4"],
      { conditionalArtifactSets: ["Caçador das Sombras ×4", "Nahida já utiliza Memórias da Floresta; Sonhos Dourados é a opção natural neste time."] },
    ),
  });
  apply("kuki", {
    role: "Hyperbloom Trigger",
    ...recommendation(
      ["Juramento pela Liberdade", "Luz Lunar de Xiphos", "Espinho de Ferro ≈ Chave de Hierofania ≈ Chuva Floral R5", "Espada de Ferro Negro ≈ Espada de Madeira"],
      ["Flor do Paraíso Perdido ×4", "Sonhos Dourados ×4", "EM 2p + EM 2p", "Trovão Furioso ×4"],
    ),
  });
  apply("xingqiu", {
    role: "High Energy",
    ...recommendation(
      ["Espada de Favonius", "Espada Celestial", "Amenoma R5 ≈ Fleuve Cendre R5", "Espada do Sacrifício R4+"],
      ["Selo da Insulação ×4", "Antigo Ritual Real ×4 ≈ Pergaminho ×4", "Sonho da Ninfa ×4 ≈ Ascensão Zéfira ×4 ≈ Combinações 2p"],
      { conditionalWeaponNotes: ["Corrupção Sombria, Cortador de Jade e Juramento pela Liberdade são condicionais quando a ER estiver resolvida."] },
    ),
  });

  apply("tighnari", {
    role: "On-Field DPS",
    ...recommendation(
      ["Caminho do Caçador", "Plumagem Escarlate ≈ Aqua Simulacra ≈ Estrela Invernal ≈ Arcana Original", "As Crônicas do Amanhecer", "Agitação Trovejante ≈ Harpa Celestial ≈ Ramo Dourado", "Elegia do Suspiro Final ≈ Arco de Amos ≈ Crepúsculo R5", "Arco Esmeralda ≈ Herdeiro do Sol", "Estilingue R5 ≈ Medidor de Alcance ≈ Ode à Brisa Florescente R5 ≈ Canção do Silêncio", "Protótipo da Luz Lunar"],
      ["Trupe Itinerante ×4 ≈ Sonhos Dourados ×4", "Selo da Insulação ×4", "2p Deepwood / EM / ATQ", "Memórias da Floresta ×4"],
    ),
  });
  apply("lisa", {
    role: "Off-Field DPS & Support",
    ...recommendation(
      ["Relicário da Verdade", "Coração Resplandecente", "Prova de Kagura ≈ Sonhos Flutuantes ≈ Oração Perdida", "Rito do Fluxo Eterno ≈ Hora do Surfe", "Sinfonia dos Indolentes", "Sacrifício de Jade ≈ Pérola Solar", "Fluxo da Pureza ≈ Olho do Juramento", "Anel de Hakushin", "Mappa Mare", "Codex de Favonius ≈ Histórias Extraordinárias de Caçadores de Dragões"],
      ["Selo da Insulação ×4", "Pergaminho ×4", "Antigo Ritual Real ×4", "Sonhos Dourados ×4", "Lançador de Trovões ×4", "Combinações 2p Trovão / ER / ATQ / Ritual"],
    ),
  });
  apply("zhongli", {
    role: "Shield Support",
    ...recommendation(
      ["Borla Preta ≈ Favonius"],
      ["Pedra Arcaica ×4 ≈ Pergaminho ×4", "Memórias da Floresta ×4 ≈ Instrutor ×4", "Millelith Firmes ×4", "HP 2p + HP 2p"],
    ),
  });
  apply("venti", {
    role: "On-Field DPS / Hexerei",
    ...recommendation(
      ["As Crônicas do Amanhecer", "Estrela Invernal", "Caminho do Caçador ≈ Agitação Trovejante ≈ Harpa Celestial ≈ Aqua Simulacra", "Plumagem Escarlate ≈ Arcana Original", "Ramo Dourado", "Canção do Silêncio R5 ≈ Arco de Amos ≈ Estilingue R5 ≈ Arco Esmeralda", "Arco Enferrujado ≈ Lua de Mouun", "Arco Quebra-Demônios R5"],
      ["Ascensão Zéfira ×4", "Crônicas do Pavilhão do Deserto ×4", "Eco do Sacrifício ×4", "Sombra Verde ×4"],
    ),
  });
  apply("albedo", {
    role: "Off-Field DPS",
    ...recommendation(
      ["Canção da Patrulha do Pico", "Urakugo Rensai", "Fragmento Lunar", "Flauta de Ezpitzal R5 ≈ Prenúncio do Alvorecer R5 ≈ Luz das Folhas Cortadas ≈ Haste de Cinábrio R5 ≈ Cortador de Jade"],
      ["Casca de Sonhos Opulentos ×4 ≈ Trupe Dourada ×4", "Casca / Pedra / Trupe 2p + 2p", "Pedra Arcaica ×4", "Millelith Firmes ×4"],
    ),
  });

  apply("xiao", {
    role: "On-Field DPS",
    ...recommendation(
      ["Resplendor Fragmentado ≈ Báculo de Homa ≈ Lança de Jade Primitiva ≈ Elegia Lumidouce ≈ Sinfonista de Aromas", "Báculo das Areias Escarlates", "Subjugadora de Calamidades ≈ Lança do Duelo ≈ Semblante da Lua Carmesim ≈ Desastre e Remorso ≈ Ruínas Ensanguentadas ≈ Perfuradora Prismática ≈ Espinha Celestial", "Penhasco Obscuro ≈ Fofocas Breves R5", "Lança de Millelith", "Lâmina do Vento R5 ≈ Broca do Prospector ≈ Barbatana", "Favonius", "Borla Branca"],
      ["Caçador das Sombras ×4 ≈ Além-vida Cinábrio ×4 ≈ Juramento da Noite Eterna ×4", "Crônicas do Pavilhão do Deserto ×4", "Juramento 2p + Anemo / ATQ / ER 2p"],
    ),
  });
  apply("faruzan", {
    role: "Support",
    ...recommendation(
      ["Arco de Favonius", "Elegia do Suspiro Final", "Gancho da Armadilha", "Águas Secas", "Crepúsculo Desvanecido ≈ Arco do Sacrifício"],
      ["Antigo Ritual Real ×4 ≈ Pergaminho ×4", "Sombra Verde ×4", "Selo da Insulação ×4", "ER 2p + ER 2p"],
      { conditionalArtifactSets: ["Trupe Dourada ×4", "Millelith Firmes ×4"] },
    ),
  });
  apply("jean", {
    role: "Heal Support & Damage",
    ...recommendation(
      ["Cortador de Jade", "Juramento pela Liberdade", "Cortadora da Neblina ≈ Maremoto da Lua de Futsu", "Espada Celestial ≈ Espada Pútrida R5 ≈ Espada de Favonius ≈ Amenoma", "Cortador de Montanhas", "Falcão", "A Flauta ≈ Espada de Madeira ≈ Rugido do Leão"],
      ["Sombra Verde ×4", "Antigo Ritual Real ×4", "Concha Tingida Pelo Mar ×4", "2p + 2p ER / Ritual / Anemo / ATQ ≈ Selo da Insulação ×4"],
      { conditionalArtifactSets: ["Com Furina, ATQ% no Cálice e Bônus de Cura na Coroa ganham valor."] },
    ),
  });
  apply("noelle", {
    role: "Lunar-Crystallize DPS",
    ...recommendation(
      ["Chifres Vermelhos", "Balada do Poderoso Lobo", "Espinha Dorsal da Serpente", "Sinal dos Mares ≈ Mil Sóis Ardentes", "Chave da Transcendência ≈ Veredito ≈ Forjada pela Lei Dourada ≈ Sombra Branca R5", "Orgulho Celestial", "Forja da Sabedoria ≈ Foice do Penhasco", "Chave Mestra", "Favonius"],
      ["Casca de Sonhos Opulentos ×4", "Ecos da Floresta Noturna ×4 ≈ Meteoro Invertido ×4 ≈ Último Juramento do Gladiador ×4"],
      { conditionalArtifactSets: ["Noite da Revelação do Céu ×4", "Caçador das Sombras ×4"] },
    ),
  });
  apply("linnea", {
    role: "Support",
    ...recommendation(
      ["Ramo Dourado do Juramento Gelado", "Elegia do Suspiro Final ≈ Aqua Simulacra ≈ Caminho do Caçador", "Estilingue ≈ Plumagem Escarlate ≈ Arcana Original ≈ Agitação Trovejante ≈ Harpa Celestial ≈ Estrela Invernal"],
      ["Serenata das Estrelas e da Lua ×4 ≈ Casca de Sonhos Opulentos ×4", "Casca 2p + EM 2p"],
    ),
  });
  apply("illuga", {
    role: "Support",
    ...recommendation(
      ["Favonius", "Perdição do Dragão", "Kitain R5", "Luz do Cortador de Grama"],
      ["Serenata da Lua de Seda ×4", "EM 2p + EM 2p"],
    ),
  });
  apply("itto", {
    role: "On-Field DPS",
    ...recommendation(
      ["Chifres Vermelhos", "Espinha Dorsal da Serpente ≈ Sinal dos Mares ≈ Veredito ≈ Mil Sóis Ardentes", "Sombra Branca R5 ≈ Orgulho Celestial"],
      ["Casca de Sonhos Opulentos ×4", "Crônicas do Pavilhão do Deserto ×4", "Meteoro Invertido ×4", "Casca / Pedra / ER 2p + 2p"],
    ),
  });
  apply("gorou", {
    role: "Support",
    ...recommendation(
      ["Arco de Favonius", "Gancho da Armadilha", "Arco do Sacrifício", "Elegia do Suspiro Final"],
      ["O Exilado ×4", "Antigo Ritual Real ×4 ≈ Pergaminho ×4", "ER 2p + ER 2p"],
      { conditionalArtifactSets: ["Instrutor ×4", "Serenata da Lua de Seda ×4"] },
    ),
  });

  applyTeam("fischl", "clorinde-aggravate", recommendation(
    ["As Crônicas do Amanhecer", "Estrela Invernal", "Caminho do Caçador ≈ Aqua Simulacra", "Arcana Original", "Harpa Celestial ≈ Agitação Trovejante", "Plumagem Escarlate", "Último Acorde", "Canção do Silêncio R5 ≈ Arco Esmeralda ≈ Quebrador de Correntes R5 ≈ Ode à Brisa Florescente R5", "Caçador do Beco ≈ Crepúsculo R5"],
    ["Trupe Dourada ×4", "Ascensão Zéfira ×4", "Combinações ATQ / EM / Trovão / Trupe 2p ≈ Sonhos Dourados ×4 ≈ Trovão Furioso ×4", "Lançador de Trovões ×4"],
  ));
  applyTeam("fischl", "tighnari-spread", recommendation(
    ["As Crônicas do Amanhecer", "Estrela Invernal", "Caminho do Caçador ≈ Aqua Simulacra", "Arcana Original", "Harpa Celestial ≈ Agitação Trovejante", "Plumagem Escarlate", "Último Acorde", "Canção do Silêncio R5 ≈ Arco Esmeralda ≈ Quebrador de Correntes R5 ≈ Ode à Brisa Florescente R5", "Caçador do Beco ≈ Crepúsculo R5"],
    ["Trupe Dourada ×4", "Ascensão Zéfira ×4", "Combinações ATQ / EM / Trovão / Trupe 2p ≈ Sonhos Dourados ×4 ≈ Trovão Furioso ×4", "Lançador de Trovões ×4"],
  ));
  applyTeam("beidou", "traveler-cryo", recommendation(
    ["Mil Sóis Ardentes", "Chave da Transcendência ≈ Sinal dos Mares", "Veredito ≈ Balada do Poderoso Lobo ≈ Túmulo do Lobo ≈ Mega Ultra Espada Mágica R5", "Espada Áspera ≈ Lâmina das Ondas R5", "Orgulho Celestial", "Katsuragi R5 ≈ Chifres Vermelhos ≈ Presa do Rei da Montanha ≈ Espinha Dorsal da Serpente", "Favonius ≈ Lâmina da Redenção R5", "Akuoumaru"],
    ["Selo da Insulação ×4", "2p + 2p ER / Ritual / Trovão / ATQ ≈ Ascensão Zéfira ×4", "Antigo Ritual Real ×4 ≈ Pergaminho ×4"],
  ));
  applyTeam("xiangling", "raiden-overload", recommendation(
    ["Luz do Cortador de Grama", "A Fisgada R5", "Báculo das Areias Escarlates ≈ Resplendor Fragmentado ≈ Báculo de Homa ≈ Espinha Celestial ≈ Elegia Lumidouce ≈ Sinfonista de Aromas"],
    ["Selo da Insulação ×4", "Bruxa das Chamas ×4", "Sonhos Dourados ×4 ≈ Combinações 2p Ritual / Bruxa / ATQ / EM / ER", "Antigo Ritual Real ×4"],
  ));
  const highEnergyFurina = recommendation(
    ["Esplendor das Águas Silenciosas", "Espada de Favonius", "Cortador de Jade Primordial ≈ Chamado da Serenidade R5 ≈ Urakugo Rensai", "Espada Pútrida R5 ≈ Chave de Hierofania", "Luz das Folhas Cortadas", "Fleuve Cendre R5", "Fragmento Lunar", "Maremoto da Lua de Futsu ≈ Farpa", "Espada Celestial", "Prenúncio do Alvorecer R5"],
    ["Trupe Dourada ×4", "Millelith Firmes ×4", "2p + 2p Hydro / Trupe / HP / ER"],
  );
  applyTeam("furina", "ganyu-freeze", highEnergyFurina);
  applyTeam("furina", "xiao-hypercarry", highEnergyFurina);
  applyTeam("furina", "noelle-geo", { ...highEnergyFurina, conditionalWeaponNotes: ["Urakugo Rensai ganha valor com um personagem Geo e pode ficar acima de Cortador de Jade nas condições do guia."] });
})();
