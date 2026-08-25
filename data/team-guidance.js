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
      fischl: profile(["ATQ%"], ["Bônus de Dano Electro"], ["CRIT"], "ER até a meta > CRIT > ATQ%", "E > Q"),
      beidou: profile(["ATQ%", "ER"], ["Bônus de Dano Electro"], ["CRIT"], "ER > CRIT > ATQ%", "Q > E"),
      chevreuse: profile(["HP%", "ER"], ["HP%"], ["HP%", "Bônus de Cura"], "ER > HP% até 40k > HP Flat > Taxa CRIT¹", "E > Q", ["¹ Taxa CRIT ganha importância com Favonius."]),
      neuvillette: profile(["HP%"], ["Bônus de Dano Hydro", "HP%"], ["CRIT", "HP%"], "ER até a meta > CRIT ≈ HP%", "NA ≫ E ≈ Q"),
      furina: profile(["HP%", "ER"], ["HP%"], ["CRIT"], "ER > CRIT > HP%", "Q ≥ E"),
      kazuha: profile(["Proficiência Elemental", "ER"], ["Proficiência Elemental"], ["Proficiência Elemental"], "ER > Proficiência Elemental > Taxa CRIT¹", "Nv.90 > Q > E ≈ NA", ["¹ Taxa CRIT ganha importância com Favonius."]),
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
    },

    teams: {
      "mavuika-carry": {
        mavuika: { energy: energyLabel("Não utiliza Recarga de Energia", "Fighting Spirit", ["Em Melt, Proficiência Elemental tem mais valor."]) },
        citlali: { energy: energy("145–150%", "Citlali C0", ["Referência com Xilonen, outro personagem de Natlan, Pergaminho ×4 e aproximadamente um proc de Favonius."]) },
        xilonen: { energy: energyLabel("Supremo opcional", "Bennett já fornece cura", ["Para usar Q toda rotação: ~170–190% com 1 E ou ~115–125% com 2 E em Solo Geo."]) },
        bennett: { energy: energy("175–220%", "Double Pyro") },
      },
      "arlecchino-overload": {
        arlecchino: { energy: energy("100%", "Q para cura ou emergência", ["Não vale sacrificar dano buscando ER para o Supremo."]) },
        fischl: { energy: energy("~100–125%") },
        beidou: { energy: energy("140–185%", "Fischl C6 e contra-ataque consistente reduzem a necessidade", ["Com duas ativações completas de Oz, pode cair ainda mais."]) },
        chevreuse: { energy: energy("100%") },
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
        kazuha: { energy: energy("190–200%", "Padrão", ["~160–170% com 1 Favonius; ~140–150% com dois procs."]) },
      },
      "raiden-overload": {
        raiden: { energy: energy("200–220%") },
        chevreuse: { energy: energy("105–135%", "Q toda rotação", ["Se usar Q apenas quando disponível, 100% basta."]) },
        xiangling: {
          mainStats: { sands: ["ER", "ATQ%"], goblet: ["Bônus de Dano Pyro"], circlet: ["CRIT"] },
          substats: "ER > CRIT > ATQ%",
          energy: energy("195–205%", "Padrão", ["~175–185% com Favonius; ~145–155% com Kitain R5."]),
        },
        bennett: { energy: energy("145–210%", "Raiden reduz a necessidade de ER") },
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
        tighnari: { energy: energy("150–160%", "Uma E por Q; sem outro Dendro", ["Com duas E por Q, cai para ~100–110%."]) },
        fischl: {
          mainStats: { sands: ["ATQ%", "Proficiência Elemental"], goblet: ["Bônus de Dano Electro"], circlet: ["CRIT"] },
          substats: "ER > CRIT > ATQ% ≈ Proficiência Elemental",
          energy: energy("~100–125%"),
        },
        lisa: { energy: energy("130–160%", "1 Hold E por rotação", ["Sem Hold E, pode subir para ~180–210%."]) },
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
    },
  };
})();
