/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "IndustrySelection3.webp"],
  Music: "Bgm_Industry_Ready",
  backgroundImage: "images/interface/IndustrySelection2.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'BeetleCarZombie.webp', path + 'Shiitake.webp']
    });
    $c('left: 105px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry6', 5, [$__language_Array__["202d35236cdcf79516be4c29cf8337ff"], $__language_Array__["9b269a4c4920a7336214e92a9dc46e6f"], $__language_Array__["59ecb40a4d78b18bd98406bc3c59cd22"], $__language_Array__["4cbc3b03b3faa899e94a3bc07a463995"]], ["Imp", "Zombie", "NewspaperZombie", "CaskZombie", "StrollZombie", "FootballZombie", "MembraneZombie", "BucketheadZombie", "Zomboni", "BeetleCarZombie"], 1)
    });
    $c('left: 241px;top: 275px;', {
      onclick: _ => oLvlInfoUI.open('Industry7', 5, [$__language_Array__["43da888d7e03355e2cade4b1058ebf94"], $__language_Array__["b35fb821b5b06e1591665f4ebac0be25"], $__language_Array__["0dbc424aee342e8b964a03e27af64351"], $__language_Array__["c78b5c57bf12744ebc2f3ed166c51a32"]], ["SadakoZombie", "StrollZombie", "CaskZombie", "ConeheadZombie", "NewspaperZombie", "Zomboni", "SculptorZombie", "BeetleCarZombie"], 1)
    });
    $c('left: 378px;top: 260px;', {
      onclick: _ => oLvlInfoUI.open('Industry8', 5, [$__language_Array__["77d9cb26009ceace492b0742b6a31e16"], $__language_Array__["807661d738caa28f56597dc593e4b668"], $__language_Array__["d73fdbea6573433299d0b92fe9a9b0a0"], '/'], ["Zombie", "Imp", "ConeheadZombie", "SkatingZombie", "NewspaperZombie", "StrollZombie", "CaskZombie", "BucketheadZombie", "CigarZombie", "FootballZombie", "Zomboni", "SculptorZombie", "BeetleCarZombie"], ["plant", oBlover])
    });
    $c('left: 550px;top: 270px;', {
      onclick: _ => oLvlInfoUI.open('Industry9', 5, [$__language_Array__["a129871dee2d07c8a12ad17d40b4fd13"], $__language_Array__["9b269a4c4920a7336214e92a9dc46e6f"], $__language_Array__["e7b0f145e00dc7a2e7a4cd91c9ac8e39"], $__language_Array__["ef84a13d9d4debe3f68b1e52595a02de"]], ["BalloonZombie", "Zombie", "Imp", "ConeheadZombie", "StrollZombie", "NewspaperZombie", "CaskZombie", "CigarZombie", "BucketheadZombie", "Zomboni", "FootballZombie", "MembraneZombie", "SculptorZombie"], 1)
    });
    $c('left: 700px;top: 295px;', {
      onclick: _ => oLvlInfoUI.open('Industry10', 5, [$__language_Array__["57c7ef32d501d76f4aa7a32e11817a9c"], $__language_Array__["9c7786b50e57de17793a32f1a3e87f95"], $__language_Array__["59ecb40a4d78b18bd98406bc3c59cd22"], $__language_Array__["5c679b63939439b5e3a77e76d8f653c3"]], ["SadakoZombie", "CaskZombie", "ConeheadZombie", "StrollZombie", "NewspaperZombie", "FootballZombie", "BucketheadZombie", "CigarZombie", "SculptorZombie", "BeetleCarZombie"], ["plant", oShiitake])
    });
  }

});