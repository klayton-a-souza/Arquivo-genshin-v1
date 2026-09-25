(() => {
  const profile = (sands, goblet, circlet, substats, talentPriority, notes = []) => ({
    mainStats: { sands, goblet, circlet },
    substats,
    talentPriority,
    notes,
  });

  const energy = (target, condition = "", notes = []) => ({ target, condition, notes, source: "KQM" });
  const energyLabel = (label, condition = "", notes = []) => ({ label, condition, notes, source: "KQM" });

  window.TEAM_BUILD_GUIDANCE = {
    profiles: {
      mavuika: profile(["Proficiência Elemental", "ATQ%"], ["Bônus de Dano Pyro"], ["Taxa CRIT", "Dano CRIT"], "CRIT > Proficiência Elemental > ATQ%", "Q > E"),
      citlali: profile(["Proficiência Elemental", "ER"], ["Proficiência Elemental"], ["Proficiência Elemental", "Taxa CRIT¹"], "ER > Proficiência Elemental > CRIT", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      xilonen: profile(["DEF%", "ER"], ["DEF%"], ["Bônus de Cura", "DEF%", "Taxa CRIT¹"], "ER > Taxa CRIT¹ > DEF% > DEF Flat", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      bennett: profile(["ER", "HP%"], ["HP%"], ["Bônus de Cura", "HP%"], "ER > HP% > HP Flat", "Q > E"),
      arlecchino: profile(["ATQ%"], ["Bônus de Dano Pyro"], ["CRIT"], "CRIT > ATQ% > ATQ Flat", "NA ≫ Q > E"),
      thoma: profile(["ER", "HP%"], ["HP%"], ["HP%", "Taxa CRIT¹"], "ER até a meta > HP% > Taxa CRIT¹ > HP Flat", "E = Q", ["¹ Taxa CRIT ganha importância com a Lança de Favonius. O Supremo precisa voltar a cada rotação para manter o escudo."]),
      fischl: profile(["ATQ%"], ["Bônus de Dano Electro"], ["CRIT"], "ER até a meta > CRIT > ATQ%", "E > Q"),
      beidou: profile(["ATQ%", "ER"], ["Bônus de Dano Electro"], ["CRIT"], "ER > CRIT > ATQ%", "Q > E"),
      chevreuse: profile(["HP%", "ER"], ["HP%"], ["HP%", "Bônus de Cura"], "ER > HP% até 40k > HP Flat > Taxa CRIT¹", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      neuvillette: profile(["HP%"], ["Bônus de Dano Hydro", "HP%"], ["CRIT", "HP%"], "ER até a meta > CRIT ≈ HP%", "NA ≫ E ≈ Q"),
      furina: profile(["HP%", "ER"], ["HP%"], ["CRIT"], "ER > CRIT > HP%", "Q ≥ E"),
      kazuha: profile(["Proficiência Elemental", "ER"], ["Proficiência Elemental"], ["Proficiência Elemental"], "ER > Proficiência Elemental > Taxa CRIT¹", "Nv.90 > Q > E ≈ NA", ["¹ Taxa CRIT ganha importância com Favonius."]),
      lanYan: profile(["ATQ%", "ER"], ["Bônus de Dano Anemo", "ATQ%"], ["ATQ%", "Taxa CRIT¹"], "ER até a meta > ATQ% > Taxa CRIT¹ > Proficiência Elemental", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius. ATQ% fortalece o escudo."]),
      tartaglia: profile(["ATQ%"], ["Bônus de Dano Hydro"], ["CRIT"], "ER até a meta > CRIT > ATQ% > Proficiência Elemental", "E > Q > NA"),
      xiangling: profile(["ER", "Proficiência Elemental", "ATQ%"], ["Bônus de Dano Pyro"], ["CRIT"], "ER > CRIT > ATQ% ≈ Proficiência Elemental", "Q > E"),
      sucrose: profile(["Proficiência Elemental"], ["Proficiência Elemental"], ["Proficiência Elemental"], "Proficiência Elemental > ER > Taxa CRIT¹", "Nv.90 ≫ E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      clorinde: profile(["ATQ%"], ["Bônus de Dano Electro"], ["CRIT"], "ER até a meta > CRIT ≫ ATQ% > Proficiência Elemental", "Nv.90 ≥ E > Q"),
      nahida: profile(["Proficiência Elemental"], ["Proficiência Elemental", "Bônus de Dano Dendro"], ["Proficiência Elemental", "CRIT"], "ER > Proficiência Elemental ≥ Bônus de Dano Dendro ≥ CRIT", "E > Q > NA"),
      raiden: profile(["ER", "ATQ%"], ["Bônus de Dano Electro", "ATQ%"], ["CRIT"], "ER até a meta > CRIT > ATQ%", "Q > E"),
      ganyu: profile(["ATQ%"], ["Bônus de Dano Cryo"], ["CRIT", "ATQ%"], "ER > Dano CRIT ≥ ATQ% > Taxa CRIT", "NA ≥ Q > E"),
      charlotte: profile(["ER", "ATQ%"], ["ATQ%"], ["Bônus de Cura", "Taxa CRIT¹"], "ER ≥ ATQ% > Taxa CRIT¹", "Q > E", ["¹ Taxa CRIT ganha importância com Favonius."]),
      travelerCryo: profile(["ATQ%"], ["ATQ%"], ["CRIT"], "Taxa CRIT > Dano CRIT > ATQ% > Proficiência Elemental > ER", "Q > NA > E", ["ATQ% / ATQ% / CRIT é a referência para Stellar-Conduct.", "Use a Skill e acumule 8 cargas antes do Supremo; o Ataque Carregado especial concede 2 cargas."]),
      diona: profile(["HP%", "ER"], ["HP%"], ["HP%", "Bônus de Cura", "Taxa CRIT¹"], "ER > HP% > Taxa CRIT¹ > HP Flat", "E ≥ Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      alyosha: profile(["ER", "ATQ%"], ["ATQ%"], ["Bônus de Cura", "ATQ%", "Taxa CRIT¹"], "ER > Taxa CRIT¹ > ATQ%", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      alhaitham: profile(["Proficiência Elemental", "ATQ%"], ["Bônus de Dano Dendro"], ["CRIT"], "ER > ~200–300 Proficiência Elemental > CRIT > Proficiência Elemental > ATQ%", "Nv.90 > E > NA ≥ Q"),
      kuki: profile(["Proficiência Elemental"], ["Proficiência Elemental"], ["Proficiência Elemental"], "Proficiência Elemental > ER > HP%", "Nv.90 ≫ E > Q"),
      xingqiu: profile(["ER", "ATQ%"], ["Bônus de Dano Hydro"], ["CRIT"], "ER > CRIT > ATQ%", "Q > E"),
      tighnari: profile(["ATQ%", "Proficiência Elemental"], ["Bônus de Dano Dendro"], ["CRIT"], "ER > CRIT > Proficiência Elemental ≈ ATQ%", "NA > Q ≫ E"),
      collei: profile(["ER", "ATQ%", "Proficiência Elemental"], ["Bônus de Dano Dendro"], ["CRIT"], "ER até a meta > CRIT > Proficiência Elemental ≈ ATQ%", "Q > E", ["Priorize Recarga para manter a aplicação Dendro do Supremo; em duplo Dendro a exigência diminui."]),
      lisa: profile(["ER", "ATQ%", "Proficiência Elemental"], ["Bônus de Dano Electro"], ["CRIT"], "ER > CRIT > ATQ% / Proficiência Elemental", "Q ≥ E"),
      zhongli: profile(["HP%"], ["HP%"], ["HP%", "Taxa CRIT¹"], "HP% > Taxa CRIT¹ > HP Flat", "E", ["¹ Taxa CRIT ganha importância com Favonius."]),
      venti: profile(["ATQ%"], ["Bônus de Dano Anemo"], ["CRIT"], "ER > CRIT > ATQ%", "NA > Q > E"),
      albedo: profile(["DEF%"], ["DEF%", "Bônus de Dano Geo"], ["CRIT"], "CRIT > DEF%", "E"),
      xiao: profile(["ATQ%"], ["Bônus de Dano Anemo", "ATQ%"], ["CRIT"], "ER > CRIT > ATQ%", "NA > Q > E"),
      faruzan: profile(["ER"], ["Flexível"], ["Taxa CRIT¹", "C6: CRIT"], "ER ≫ Taxa CRIT¹ > Dano CRIT = ATQ%", "Q > E", ["¹ Taxa CRIT ganha importância com Favonius."]),
      jean: profile(["ER", "ATQ%"], ["ATQ%"], ["Bônus de Cura"], "ER > Taxa CRIT¹ > ATQ%", "Q > E", ["¹ Taxa CRIT ganha importância com Favonius."]),
      noelle: profile(["DEF%"], ["Bônus de Dano Geo", "DEF%"], ["CRIT", "DEF%"], "ER > CRIT > DEF% > ATQ%", "NA > Q ≫ E"),
      linnea: profile(["DEF%"], ["DEF%"], ["CRIT", "DEF%"], "ER até a meta > CRIT > DEF% > Proficiência Elemental", "E > Nv.90 > Q"),
      illuga: profile(["Proficiência Elemental", "ER"], ["Proficiência Elemental"], ["Proficiência Elemental", "Taxa CRIT¹"], "ER > Proficiência Elemental > CRIT > DEF%", "Q > Nv.90", ["¹ Taxa CRIT ganha importância com Favonius."]),
      itto: profile(["DEF%"], ["Bônus de Dano Geo"], ["CRIT"], "ER > CRIT > DEF%", "NA > Q > E"),
      gorou: profile(["ER"], ["Qualquer"], ["Taxa CRIT¹"], "ER > Taxa CRIT¹ ≫ DEF%", "E ≫ Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      mizuki: profile(["Proficiência Elemental"], ["Proficiência Elemental"], ["Taxa CRIT", "Dano CRIT"], "CRIT ≥ Proficiência Elemental >> Recarga de Energia", "E > Q", ["Stellar Swirl DPS em campo: não persiga Recarga excessiva apenas para forçar o Supremo toda rotação."]),
      varesa: profile(["ATQ%"], ["Bônus de Dano Electro", "ATQ%"], ["CRIT"], "ER até a meta > CRIT > ATQ%", "NA > Q > E", ["DPS de Ataques Imersivos: Juramento da Noite Eterna e Códice de Obsidiana variam conforme os buffs e a eficiência de resina."]),
      ororon: profile(["ATQ%", "ER"], ["Bônus de Dano Electro"], ["CRIT"], "ER até a meta > CRIT > ATQ% > Proficiência Elemental", "E > Q", ["Suporte Electro fora de campo; Pergaminho é o conjunto padrão deste time."]),
    },

    teams: {
      "mavuika-carry": {
        mavuika: { energy: energyLabel("Não utiliza Recarga de Energia", "Fighting Spirit", ["Em Melt, Proficiência Elemental tem mais valor."]) },
        citlali: { energy: energy("145–150%", "Citlali C0", ["Referência com Xilonen, outro personagem de Natlan, Pergaminho ×4 e aproximadamente um proc de Favonius."]) },
        xilonen: { energy: energyLabel("Supremo opcional", "Bennett já fornece cura", ["Para usar Q toda rotação: ~170–190% com 1 E ou ~115–125% com 2 E em Solo Geo."]) },
        bennett: { energy: energy("175–220%", "Double Pyro") },
      },
      "arlecchino-vaporize": {
        arlecchino: { energy: energy("100%", "Q para cura ou emergência", ["Não vale sacrificar dano buscando ER para o Supremo."]) },
        xingqiu: { notes: ["Aplicador Hydro da composição de Vaporize."] },
        sucrose: { notes: ["Suporte Anemo da composição principal com Arlecchino, Xingqiu e Thoma."] },
        thoma: { energy: energy("~170–220%", "Double Pyro; Supremo a cada rotação", ["A faixa depende da constelação, da Lança de Favonius/Kitain e da quantidade de partículas capturadas. Use E e Q para manter o escudo acumulado."]) },
      },
      "neuvillette-hypercarry": {
        neuvillette: { energy: energy("100–130%") },
        furina: { energy: energy("130–150%", "Furina C0") },
        kazuha: { energy: energy("190–200%", "Padrão", ["~160–170% com 1 Favonius; ~140–150% com dois procs."]) },
        xilonen: { energy: energy("170–190%", "1 E e Q toda rotação", ["Com 2 E: ~115–125%. Favonius reduz bastante a pressão de ER; Q ajuda a gerar Fanfare."]) },
      },
      international: {
        tartaglia: { energy: energy("100–130%", "Ranged Burst", ["Sem Charged Shots no downtime, pode subir para 125–145%."]) },
        xiangling: { energy: energy("190–200%", "Padrão", ["~180–190% com Favonius; ~125–135% com Kitain R5."]) },
        bennett: { energy: energy("175–220%") },
        sucrose: { energy: energy("100%", "Q não obrigatória", ["Para usar Q toda rotação, a referência off-field é ~160–180%."]) },
      },
      "clorinde-aggravate": {
        clorinde: { energy: energy("120–140%", "Q a cada combo de Skill", ["~100% quando Q é usada a cada duas rotações/combos."]) },
        nahida: { energy: energy("100–120%") },
        fischl: {
          mainStats: { sands: ["ATQ%", "Proficiência Elemental"], goblet: ["Bônus de Dano Electro"], circlet: ["CRIT"] },
          substats: "ER > CRIT > ATQ% ≈ Proficiência Elemental",
          energy: energy("~100–125%"),
        },
        lanYan: { energy: energy("160–200%", "Solo Anemo; Q quando disponível", ["Com Hakushin Ring, priorize a rotação que permita capturar as partículas da Habilidade. Se o Supremo não for usado toda rotação, a necessidade cai."]) },
      },
      "raiden-rational": {
        raiden: {
          role: "On-Field DPS / Battery / Burst Buffer",
          mainStats: { sands: ["ER%", "ATQ%"], goblet: ["Bônus de Dano Electro", "ATQ%"], circlet: ["Taxa CRIT", "Dano CRIT"] },
          substats: "ER até a necessidade > CRIT > ATQ%",
          talentPriority: "Q > E",
          energy: energy("200–220%", "Solo Electro · Raiden C0", ["Com Engulfing Lightning R1, ER adicional também pode contribuir para o dano; 220% é uma referência, não um teto.", "A Build Atual tem 269,9% ER, ER Sands, Cálice Electro e Tiara CRIT; não troque essas peças automaticamente."]),
          notes: ["A Raiden entra depois dos Supremos aliados, causa a janela principal de dano e devolve Energia ao grupo.", "Engulfing Lightning converte ER em ATQ e a Ascensão da Raiden transforma ER adicional em Bônus Electro."]
        },
        xingqiu: {
          role: "Off-Field Hydro DPS / Hydro Enabler",
          mainStats: { sands: ["ATQ%", "ER%"], goblet: ["Bônus de Dano Hydro"], circlet: ["CRIT"] },
          substats: "ER até a necessidade > CRIT > ATQ%",
          talentPriority: "Q > E",
          energy: energyLabel("Ajustar pela rotação", "Xingqiu C6 · Sacrificial R5 · Raiden", ["A faixa geral da KQM para C6 + Sacrificial R3+ é 130–150% ER; Raiden reduz ainda mais a necessidade.", "A Build Atual tem 197,4% ER. Só converta parte da ER em dano se o Supremo continuar disponível em toda rotação."]),
          notes: ["Xingqiu fornece Hydro fora de campo para a Xiangling Vaporizar.", "A Espada do Sacrifício R5 é totalmente funcional; o segundo uso da Skill não precisa ser forçado se alongar a rotação."]
        },
        xiangling: {
          role: "Off-Field Pyro DPS / Vaporize DPS",
          mainStats: { sands: ["Proficiência Elemental", "ATQ%", "ER%"], goblet: ["Bônus de Dano Pyro"], circlet: ["CRIT"] },
          substats: "ER até a meta > CRIT > ATQ% ≈ Proficiência Elemental",
          talentPriority: "Q > E",
          energy: energy("195–205%", "Rational · Raiden + dois funnels de Bennett", ["Referência da KQM para rotação de 20–21s com 1 Skill da Xiangling e 2 Skills do Bennett.", "A Build Atual tem 245,6% ER com A Fisgada R5; é segura e confortável, mas está acima da referência. Só converta ER em CRIT, EM ou ATQ% se a rotação continuar estável."]),
          notes: ["A Xiangling faz Vaporize e algumas Overloads; por isso Proficiência Elemental tem valor real.", "Uma Areia de Proficiência Elemental é especialmente relevante quando a meta de ER já estiver satisfeita."]
        },
        bennett: {
          role: "ATQ Buffer / Healer / Pyro Battery",
          mainStats: { sands: ["ER%", "HP%"], goblet: ["HP%"], circlet: ["Bônus de Cura", "HP%"] },
          substats: "ER até a necessidade > HP%",
          talentPriority: "Q > E",
          energy: energy("145–210%", "Bennett C6 · Raiden reduz a necessidade", ["A Build Atual tem 206,3% ER e já está dentro da faixa geral com Raiden.", "Aquila Favonia R1 é utilizável pelo Base ATQ alto; Favonius é apenas uma alternativa se a Energia do time virar um problema."]),
          notes: ["Bennett C6 não sobrescreve a conversão Electro da Raiden durante Musou Isshin.", "Use o Supremo para buffar e curar; a Skill gera partículas Pyro para a Xiangling."]
        },
      },
      "ganyu-freeze": {
        ganyu: { energy: energy("115–130%", "Dois procs de Favonius", ["Acrescente aproximadamente 10–15% por proc ausente."]) },
        furina: { energy: energy("200%+", "Furina C0") },
        charlotte: { energy: energy("160–200%", "Double Cryo", ["~160% com Prototype Amber; ~200% com outras armas. Favonius e C4 reduzem a necessidade."]) },
        kazuha: { energy: energy("190–200%", "Padrão", ["~160–170% com 1 Favonius; ~140–150% com dois procs."]) },
      },
      "traveler-cryo": {
        travelerCryo: { energy: { target: "120–140%", condition: "Segundo Cryo: Diona", source: "Guias 7.0", notes: ["A arma atual e C1 reduzem a necessidade; confirme o Supremo a cada rotação antes de diminuir ER.", "Beidou C6 e Diona C6 podem alternar os Supremos em rotações de 15s."] } },
        beidou: { energy: energyLabel("Sem linha específica com Alyosha", "Alyosha gera partículas Electro", ["A necessidade de ER ainda não deve receber um valor inventado."]) },
        diona: { energy: energyLabel("Depende de constelação e arma", "Diona", ["C0: Sacrificial 145–165%, Favonius 160–180%, outras 180–220%.", "C1+: Sacrificial 120–135%, Favonius 130–150%, outras 145–175%."]) },
        alyosha: { energy: energy("115–145%", "C1+ com 1 Electro; conta atual C2", ["C0: 145–180%. Com Favonius: C0 130–155%, C1+ 105–125%."]) },
      },
      "alhaitham-hyperbloom": {
        alhaitham: { energy: energy("120–130%") },
        nahida: { energy: energy("120–140%") },
        kuki: { energy: energyLabel("Sem meta obrigatória", "Não sacrifique EM pelo Q", ["Para Q a cada ~2 E: C0 ~135–175%, C2 ~125–160%, C4 ~115–140%."]) },
        xingqiu: { energy: energyLabel("Depende de constelação e arma", "Solo Hydro", ["C0–C5: Sacrificial R3+ 150–180%, Favonius 190–220%, outras 220–260%.", "C6: Sacrificial R3+ 130–150%, Favonius 150–180%, outras 180–220%."]) },
      },
      "tighnari-spread": {
        tighnari: { energy: { label: "Ajustar com Collei", condition: "Dois personagens Dendro", source: "Revisão da conta", notes: ["A antiga referência sem outro Dendro não se aplica à composição principal. Ajuste a recarga conforme a rotação e a geração de partículas com Collei."] } },
        fischl: {
          mainStats: { sands: ["ATQ%", "Proficiência Elemental"], goblet: ["Bônus de Dano Electro"], circlet: ["CRIT"] },
          substats: "ER > CRIT > ATQ% ≈ Proficiência Elemental",
          energy: energy("~100–125%"),
        },
        collei: { energy: energy("~160–180%", "Double Dendro + Fischl", ["Com Arco de Favonius, a geração de partículas reduz a meta. Segundo personagem Dendro da composição principal. Lisa permanece como alternativa por estar pouco investida na conta."]) },
        zhongli: { energy: energyLabel("100% / sem ER", "Shield Support") },
      },
      "venti-hexerei": {
        venti: { energy: energy("135–165%", "On-Field Anemo DPS / Hexerei", ["Aqui, ATQ% / Anemo / CRIT e NA são as prioridades corretas."]) },
        albedo: {
          substats: "ER se usar Q > CRIT > DEF%",
          talentPriority: "E > Q",
          energy: energy("130–150%", "Albedo C0", ["Sem usar Q: 100%. C1+ usando Q: ~100–110%."]),
        },
        fischl: { energy: energy("120–170%", "Solo Electro", ["~120–140% em rotação longa; C0 ~130–170%, C6 ~120–155% em rotações de ~25s."]) },
        bennett: { energy: energy("195–255%", "Base Solo Pyro", ["A geração do time e refund Pyro do Venti podem reduzir o valor real."]) },
      },
      "xiao-hypercarry": {
        xiao: { energy: energyLabel("Depende de Faruzan", "Com Jean Favonius", ["Faruzan C6: 110–120%. C0–C5 com 1 funnel: 150–160%; com 2 funnels: 115–125%."]) },
        faruzan: { energy: energy("190–225%", "Pré-C6 em Triple Anemo", ["C6: 160–185%. Com partículas bem aproveitadas, pré-C6 pode ficar em 190–205%."]) },
        furina: { energy: energy("200%+", "Furina C0") },
        jean: { energy: energy("140–160%", "Triple Anemo", ["Favonius Sword torna ER adicional quase irrelevante. ATQ% e Cura ajudam a gerar Fanfare."]) },
      },
      "noelle-geo": {
        noelle: { energy: energy("120–130%", "Lunar-Crystallize DPS", ["A faixa assume Linnea, Illuga e mais um Geo na composição total."]) },
        linnea: { energy: energy("170–185%", "Q toda rotação", ["Cada Favonius adicional reduz aproximadamente 15–20%."]) },
        furina: { energy: energy("200%+", "Furina C0") },
        illuga: { energy: energy("145–180%", "C0 em Triple Geo", ["Favonius Lance reduz aproximadamente 15–30%."]) },
      },
      "itto-mono-geo": {
        itto: { energy: energy("115–125%", "Mono Geo + Albedo", ["A faixa já assume um proc de Favonius; cada adicional reduz ~5–15%."]) },
        gorou: { energy: energy("~220%", "Q toda rotação com Favonius", ["Sem Favonius, a referência chega a ~250%."]) },
        albedo: { energy: energyLabel("100% / sem ER", "Q não necessária") },
        zhongli: { energy: energyLabel("100% / sem ER", "Q não necessária") },
      },
      "mizuki-stellar-swirl": {
        mizuki: {
          role: "On-Field Stellar Swirl DPS",
          energy: energy("100–120%", "Supremo a cada duas rotações com Sucrose", ["Use o Supremo quando disponível ou necessário; ER adicional é bônus, não prioridade ofensiva."]),
          notes: ["Mizuki permanece em campo durante a Skill e causa Stellar Swirl automaticamente; Skill > Burst."]
        },
        travelerCryo: {
          role: "Stellar Swirl Enabler / Off-Field Cryo / Quickswap",
          energy: energy("Ajustar à rotação", "Viajante Cryo C0", ["C2 e C6 são upgrades futuros e não estão possuídos nesta composição."]),
          notes: ["Coração Forjado ×4 é a recomendação específica deste time sem Odette; isso não altera a Build Atual."]
        },
        diona: {
          role: "Shield / Heal / Stellar Swirl Support C6",
          energy: energy("A cada duas rotações", "Diona C6", ["Use Q quando a rotação curta permitir; ER/HP priorizam proteção, cura e o buff do C6."]),
          notes: ["Não usa Coração Forjado como padrão porque o Viajante Cryo já segura o conjunto."]
        },
        sucrose: {
          role: "EM / Anemo Support C6",
          energy: energy("Quando disponível", "Sucrose C6", ["EM/EM/EM; Sombra Verde ×4 é o padrão e Instrutor ×4 é alternativa."]),
          notes: ["Sacrifício de Jade é uma boa opção de Proficiência Elemental; TTDS pode ser usado para buff quando fizer sentido."]
        },
      },
      "varesa-overload": {
        varesa: {
          role: "Main DPS / Plunge DPS",
          energy: energy("120–145%", "Double Electro com Ororon; 2 sQ por rotação", ["Aproximadamente 100% é suficiente quando o objetivo é apenas 1 short Burst; Favonius reduz a pressão."])
        },
        mavuika: {
          role: "Off-Field DPS / Pyro Enabler / Buffer",
          energy: energyLabel("Não utiliza Recarga de Energia", "Fighting Spirit", ["Códice de Obsidiana ×4 continua excelente; Ororon é o portador do Pergaminho neste time."]),
          notes: ["Este override é exclusivo de Varesa Overload e não altera Mavuika Melt."]
        },
        chevreuse: {
          role: "Buff Support / Healer C3",
          energy: energy("Até a necessidade do Q", "Chevreuse C3", ["Antigo Ritual Real ×4; mire até aproximadamente 40.000 HP para o teto do buff A4, sem falsificar a Build Atual."])
        },
        ororon: {
          role: "Off-Field Electro DPS / Support C1",
          energy: energy("100–120%", "Double Electro", ["~100% quando o padrão permite 2 Skills por Supremo. C6 é apenas upgrade futuro."]),
          notes: ["Ororon segura o Pergaminho. Não precisa de Hydro: Varesa e Mavuika ativam sua passiva por dano alinhado a Nightsoul; build full EM é condicional, não padrão."]
        },
      },
    },
  };
})();
