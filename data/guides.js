window.GUIDE_NAME_ALIASES = {
  weapons: {
    "Serpent Spine": "serpent-spine",
    "Espinha Dorsal da Serpente": "serpent-spine",
    "Sapwood Blade": "sapwood-blade",
    "Espada de Madeira": "sapwood-blade",
    "Favonius Sword": "favonius-sword",
    "Espada de Favonius": "favonius-sword",
    "Hibernação Matinal do Ano Novo": "hibernacao-matinal-do-ano-novo",
    "Relicário da Verdade": "relicario-da-verdade",
    "Observatório do Chamador de Estrelas": "observatorio-do-chamador-de-estrelas",
    "Cortinas Noturnas": "cortinas-noturnas",
    "Estrela Gelada": "estrela-gelada",
    "Coração Resplandecente": "coracao-resplandecente",
  },
  artifactSets: {
    "Obsidian Codex": "obsidian-codex",
    "Códice de Obsidiana": "obsidian-codex",
    "Noblesse Oblige": "noblesse-oblige",
    "Antigo Ritual Real": "noblesse-oblige",
    "Scroll of the Hero of Cinder City": "scroll-cinder-city",
    "Pergaminho do Herói da Cidade Incandescente": "scroll-cinder-city",
    "Instructor": "instructor",
    "Instrutor": "instructor",
    "Archaic Petra": "archaic-petra",
    "Pedra Arcaica": "archaic-petra",
    "Golden Troupe": "golden-troupe",
    "Trupe Dourada": "golden-troupe",
    "Juramento da Noite Eterna": "juramento-da-noite-eterna",
    "Prova Escarlate": "prova-escarlate",
  },
};

window.CHARACTER_GUIDES = {
  lanYan: {
    general: { role: "Support / Shielder" },
  },
  mona: {
    general: { role: "Support / Buffer" },
  },
  thoma: {
    general: { role: "Support / Shielder" },
    teams: {
      "arlecchino-vaporize": { notes: ["Fornece o escudo da composição com Arlecchino, Xingqiu e Sucrose. Pode roubar algumas Vaporizações da Arlecchino."] },
    },
  },
  collei: {
    general: { role: "Support / Sub DPS" },
    teams: {
      "tighnari-spread": { notes: ["Segundo Dendro da versão principal; Lisa fica como alternativa por estar pouco investida."] },
    },
  },
  mavuika: {
    general: {
      role: "On-Field DPS / Melt",
      source: "Genshin Builds",
      mainStats: {
        sands: ["Proficiência Elemental", "ATQ%"],
        goblet: ["Bônus de Dano Pyro"],
        circlet: ["Taxa CRIT", "Dano CRIT"],
      },
      substats: [
        { label: "CRIT" },
        { label: "ATQ%" },
        { label: "Proficiência Elemental", emphasis: true, note: "Mais relevante em Melt" },
      ],
      weapons: [
        { rank: 1, options: [{ id: "a-thousand-blazing-suns", name: "Mil Sóis Ardentes" }] },
        { rank: 2, options: [{ id: "wolfs-gravestone-ballad", name: "Balada do Poderoso Lobo" }] },
        { rank: 3, options: [{ id: "redhorn-stonethresher", name: "Chifres Vermelhos Destruidores de Pedras" }, { id: "verdict", name: "Veredito" }] },
        { rank: 4, options: [{ id: "beacon-reed-sea", name: "Sinal dos Mares" }] },
        { rank: 5, options: [{ id: "mailed-flower", name: "Flor de Aço", refinement: 5 }, { id: "wolfs-gravestone", name: "Túmulo do Lobo" }, { id: "the-unforged", name: "A Inforjada" }] },
        { rank: 6, options: [{ id: "serpent-spine", name: "Espinha Dorsal da Serpente" }] },
        { rank: 7, options: [{ id: "tidal-shadow", name: "Sombra das Ondas", refinement: 5 }] },
      ],
      artifactSets: [
        { rank: 1, options: [{ id: "obsidian-codex", name: "Códice de Obsidiana", pieces: 4 }] },
        { rank: 2, options: [{ id: "scroll-cinder-city", name: "Pergaminho do Herói da Cidade Incandescente", pieces: 4 }] },
      ],
    },
    teams: {
      "mavuika-carry": {
        role: "On-Field DPS / Melt",
        energy: {
          target: null,
          label: "Não utiliza Recarga de Energia",
          source: "KQM",
          notes: ["O Supremo utiliza Fighting Spirit."],
        },
      },
    },
  },

  bennett: {
    general: {
      role: "Healer / Buffer",
      source: "Genshin Builds",
      mainStats: {
        sands: ["ER%", "HP%"],
        goblet: ["HP%"],
        circlet: ["Bônus de Cura", "HP%"],
      },
      substats: [
        { label: "Recarga de Energia" },
        { label: "HP%" },
        { label: "HP Flat" },
        { label: "Taxa CRIT", note: "Se usar Favonius" },
      ],
      notes: [
        "O buff do Supremo depende do ATQ Base.",
        "ATQ% dos artefatos não aumenta o buff.",
        "Supremo é a prioridade de talento.",
      ],
      weapons: [
        { rank: 1, options: [{ id: "mistsplitter-reforged", name: "Cortadora da Neblina Reforjada" }, { id: "absolution", name: "Absolvição" }, { id: "azurelight", name: "Azul Brilhante" }, { id: "aquila-favonia", name: "Falcão" }] },
        { rank: 2, options: [{ id: "the-alley-flash", name: "Brilho do Beco" }] },
        { rank: 3, options: [{ id: "freedom-sworn", name: "Juramento pela Liberdade" }, { id: "peak-patrol-song", name: "Canção da Patrulha do Pico" }, { id: "skyward-blade", name: "Espada Celestial" }] },
        { rank: 4, options: [{ id: "sapwood-blade", name: "Espada de Madeira" }] },
        { rank: 5, options: [{ id: "prototype-rancour", name: "Protótipo Rancor" }, { id: "calamity-of-eshu", name: "Calamidade de Eshu" }] },
        { rank: 6, options: [{ id: "favonius-sword", name: "Espada de Favonius" }] },
      ],
      artifactSets: [
        { rank: 1, options: [{ id: "noblesse-oblige", name: "Antigo Ritual Real", pieces: 4 }] },
        { rank: 2, options: [{ id: "instructor", name: "Instrutor", pieces: 4 }] },
        { rank: 3, options: [{ id: "scroll-cinder-city", name: "Pergaminho do Herói da Cidade Incandescente", pieces: 4 }] },
        { rank: 4, options: [{ id: "deepwood-memories", name: "Memórias da Floresta", pieces: 4 }] },
      ],
    },
    teams: {
      "mavuika-carry": {
        energy: {
          target: "175–220%",
          condition: "Double Pyro",
          source: "KQM",
          notes: [],
        },
      },
    },
  },

  xilonen: {
    general: {
      role: "Support / Healer",
      source: "Genshin Builds",
      mainStats: {
        sands: ["DEF%", "ER"],
        goblet: ["DEF%"],
        circlet: ["DEF%", "Bônus de Cura", "Taxa CRIT"],
      },
      substats: [
        { label: "ER" },
        { label: "DEF%" },
        { label: "DEF Flat" },
        { label: "Taxa CRIT", note: "Mais relevante com Favonius" },
      ],
      weapons: [
        { rank: 1, options: [{ id: "peak-patrol-song", name: "Canção da Patrulha do Pico" }] },
        { rank: 2, options: [{ id: "freedom-sworn", name: "Juramento pela Liberdade" }] },
        { rank: 3, options: [{ id: "favonius-sword", name: "Espada de Favonius" }] },
        { rank: 4, options: [{ id: "flute-of-ezpitzal", name: "Flauta de Ezpitzal" }] },
        { rank: 5, options: [{ id: "skyrider-sword", name: "Espada do Cavaleiro do Céu" }] },
      ],
      artifactSets: [
        { rank: 1, options: [{ id: "scroll-cinder-city", name: "Pergaminho do Herói da Cidade Incandescente", pieces: 4 }] },
        { rank: 2, options: [{ id: "archaic-petra", name: "Pedra Arcaica", pieces: 4 }] },
        { rank: 3, options: [{ id: "noblesse-oblige", name: "Antigo Ritual Real", pieces: 4 }, { id: "instructor", name: "Instrutor", pieces: 4 }] },
      ],
    },
    teams: {
      "mavuika-carry": {
        energy: {
          target: null,
          label: "Supremo opcional",
          source: "KQM",
          notes: [
            "Com Favonius, ER adicional normalmente não é necessária.",
            "Para usar o Supremo toda rotação em Solo Geo: ~170–190% antes de considerar Favonius.",
          ],
        },
      },
    },
  },

  citlali: {
    general: {
      source: "Genshin Builds",
      artifactSets: [
        { rank: 1, options: [{ id: "scroll-cinder-city", name: "Pergaminho do Herói da Cidade Incandescente", pieces: 4 }] },
      ],
    },
    teams: {
      "mavuika-carry": {
        energy: {
          target: "~145–150%",
          condition: "C0–C3",
          source: "KQM",
          notes: [
            "Referência com Xilonen, outro personagem de Natlan, Pergaminho ×4 e aproximadamente um proc de Favonius.",
            "Em C4+, a referência passa para ~120–125%.",
          ],
        },
        artifactOverride: {
          title: "Ajuste para este time",
          description: "Xilonen já utiliza Pergaminho ×4; os bônus de dois portadores não devem ser tratados como acumuláveis.",
          options: ["Instrutor", "Millelith", "Pedra Arcaica"],
        },
      },
    },
  },

  furina: {
    general: {
      source: "Genshin Builds",
      artifactSets: [
        { rank: 1, options: [{ id: "golden-troupe", name: "Trupe Dourada", pieces: 4 }] },
      ],
    },
    teams: {
      "neuvillette-hypercarry": { energy: { target: null, label: "Perfil de energia específico do time", source: "KQM", notes: ["Faixa numérica ainda não cadastrada."] } },
      "ganyu-freeze": { energy: { target: null, label: "Perfil de energia específico do time", source: "KQM", notes: ["Faixa numérica ainda não cadastrada."] } },
      "xiao-hypercarry": { energy: { target: null, label: "Perfil de energia específico do time", source: "KQM", notes: ["Faixa numérica ainda não cadastrada."] } },
      "noelle-geo": { energy: { target: null, label: "Perfil de energia específico do time", source: "KQM", notes: ["Faixa numérica ainda não cadastrada."] } },
    },
  },

  clorinde: {
    teams: {
      "clorinde-aggravate": {
        energy: { target: "~120–140%", condition: "Supremo a cada rotação com Fischl", source: "KQM", notes: ["Use como referência, não como obrigação absoluta."] },
      },
    },
  },

  fischl: {
    teams: {
      "clorinde-aggravate": {
        role: "Off-Field / Aggravate",
        energy: { target: "~120–140%", condition: "Supremo a cada rotação com Clorinde", source: "KQM", notes: ["Use como referência, não como obrigação absoluta."] },
      },
      "tighnari-spread": { role: "Off-Field / Aggravate" },
      "venti-hexerei": {
        role: "Off-Field normal",
        energy: { target: "~120–140%", condition: "Supremo a cada rotação", source: "KQM", notes: ["~100% quando o Supremo é usado a cada duas rotações.", "Use como referência, não como obrigação absoluta."] },
      },
    },
  },

  neuvillette: {
    teams: {
      "neuvillette-hypercarry": {
        energy: { target: "~100–130%", condition: "Com Furina", source: "KQM", notes: ["Varia conforme arma, Favonius e duração da rotação."] },
      },
    },
  },

  tighnari: {
    teams: {
      "tighnari-spread": {
        energy: { label: "Ajustar com Collei", condition: "Dois personagens Dendro", source: "Revisão da conta", notes: ["Reavalie a recarga na rotação com Collei; a antiga referência sem outro Dendro não se aplica à versão principal."] },
      },
    },
  },

  noelle: {
    teams: {
      "noelle-geo": {
        role: "Lunar-Crystallize DPS",
        energy: { target: "~120–130%", condition: "Referência para esta composição", source: "KQM", notes: [] },
        notes: ["Futuro → Zibal"],
      },
    },
  },

  linnea: {
    teams: {
      "noelle-geo": {
        energy: { target: "~170–185%", condition: "Se usar o Supremo a cada rotação", source: "KQM", notes: [] },
      },
    },
  },

  itto: {
    teams: {
      "itto-mono-geo": {
        energy: { target: "~115–125%", condition: "Referência para Mono Geo", source: "KQM", notes: ["Não é um número absoluto."] },
      },
    },
  },

  zhongli: {
    teams: {
      "tighnari-spread": {
        energy: { target: null, label: "ER não necessária", condition: "Shield Support", source: "KQM", notes: ["Não é obrigatório usar o Supremo a cada rotação."] },
      },
      "itto-mono-geo": {
        energy: { target: null, label: "ER não necessária", condition: "Shield Support", source: "KQM", notes: ["Não é obrigatório usar o Supremo a cada rotação."] },
      },
    },
  },

  travelerCryo: {
    teams: {
      "traveler-cryo": {
        role: "Stellar-Conduct Main DPS",
        energy: {
          target: "120–140%",
          condition: "Segundo Cryo: Diona",
          source: "Guias 7.0",
          notes: ["A arma atual e C1 reduzem a necessidade; confirme o Supremo a cada rotação antes de diminuir ER.", "Beidou C6 e Diona C6 podem alternar os Supremos em rotações de 15s."],
        },
      },
    },
  },

  alyosha: {
    teams: {
      "traveler-cryo": {
        energy: {
          target: "~115–145%",
          condition: "C1+ com um companheiro Electro",
          source: "KQM",
          notes: ["A conta atual utiliza C2.", "Em C0, a referência é ~145–180%.", "Favonius reduz a necessidade de ER."],
        },
      },
    },
  },

  venti: {
    teams: {
      "venti-hexerei": { role: "On-Field DPS / Hexerei" },
    },
  },
};
