/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "IndustrySelection1.webp", RESPATH + "IndustrySelection2.webp"],
  Music: "Bgm_Industry_Ready",
  backgroundImage: "images/interface/IndustrySelection1.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'Industry.webp', RESPATH + 'Industry_Mask.png', path + 'Plantern.webp', path + 'Cabbage.webp', RESPATH + 'IndustryClue1_1.webp', RESPATH + 'IndustryClue1_2.webp', RESPATH + 'IndustryClue1_3.webp', path + 'SculptorZombie.webp', ...oSculpture.prototype.PicArr]
    });
    $c('left: 95px;top: 263px;', {
      onclick: _ => oLvlInfoUI.open('Industry1', 5, [$__language_Array__["8fd733c686a16880b42ededfc64a98a2"], $__language_Array__["8c5fe5cf9f399b1c214f90266ca02417"], $__language_Array__["8acbfb06de94f50dafe9528cb2f853f4"], $__language_Array__["0f9128b65739f55d36660124ee9949a1"]], ["Zombie", "Imp", "ConeheadZombie", "MakeRifterZombie", "SkatingZombie", "StrollZombie", "BucketheadZombie", "MembraneZombie", "CigarZombie", "FootballZombie", "Zomboni"], 1, "Industry1jx")
    });
    $c('left: 255px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry2', 5, [$__language_Array__["6b9d8dd940ebb089834d09560368b527"], $__language_Array__["ab02938fe0f2987d6717a7138bf87145"], $__language_Array__["396f2b6ce976500f533a849402926251"], $__language_Array__["253f7b9e4f72d313d0aeb49d3e74f319"]], ["Imp", "MakeRifterZombie", "SkatingZombie", "StrollZombie", "FootballZombie", "BucketheadZombie"], ["plant", oPlantern])
    });
    $c('left: 416px;top: 300px;', {
      onclick: _ => oLvlInfoUI.open('Industry3', 5, [$__language_Array__["10a55e0f51713443b094495e5f047879"], $__language_Array__["9bbe4074840183c2b2eb440bf24779ae"], $__language_Array__["396f2b6ce976500f533a849402926251"], $__language_Array__["d64c526ee71319ac60a014051e94eb21"]], ["StrollZombie", "SadakoZombie", "SkatingZombie", "FootballZombie", "Zomboni"], 1)
    });
    $c('left: 580px;top: 300px;', {
      onclick: _ => oLvlInfoUI.open('Industry4', 5, [$__language_Array__["653482b4c81335ef9fd6b08b33780be4"], $__language_Array__["8c5fe5cf9f399b1c214f90266ca02417"], $__language_Array__["7b895d3d368e79d62b003e890cf3e466"], $__language_Array__["f3adbd7cf120f9cc121a0886b6eec77a"]], ["NewspaperZombie", "CaskZombie", "StrollZombie", "ConeheadZombie", "BucketheadZombie", "FootballZombie", "Zomboni", "CigarZombie"], ["plant", oCabbage])
    });
    $c('left: 750px;top: 300px;', {
      onclick: _ => oLvlInfoUI.open('Industry5', 5, [$__language_Array__["95a18ad944aa681e0f8fd9950233a848"], $__language_Array__["73c2679007bd04b04b9de6015c11f626"], $__language_Array__["7b895d3d368e79d62b003e890cf3e466"], $__language_Array__["573fb3dc899f65716745b85d9d03ea1a"]], ["Imp", "NewspaperZombie", "CaskZombie", "StrollZombie", "SkatingZombie", "BucketheadZombie", "SculptorZombie"], ["images/interface/IndustryClue1_1.webp", "left: -90px;top: 0;transform: scale(0.12);"])
    });
  }

});