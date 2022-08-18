/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "IndustrySelection4.webp"],
  Music: "Bgm_Industry_Ready",
  backgroundImage: "images/interface/IndustrySelection3.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'Gargantuar.webp', path + 'Xshooter.webp']
    });
    $c('left: 60px;top: 290px;', {
      onclick: _ => oLvlInfoUI.open('Industry11', 5, [$__language_Array__["3c67d306a256a34105a51d78e2119f52"], $__language_Array__["283c92e93f8d625cc698b881cfe81de0"], $__language_Array__["ec903d7fe2e6e368ee1cd5b663843c51"], $__language_Array__["d5ca2dd70f264c9197d31330e759cb31"]], ["BalloonZombie", "NewspaperZombie", "CaskZombie", "SkatingZombie", "MakeRifterZombie", "CigarZombie", "FootballZombie", "MembraneZombie", "Zomboni", "SculptorZombie", "BeetleCarZombie"], ["plant", oKernelPult])
    });
    $c('left: 241px;top: 275px;', {
      onclick: _ => oLvlInfoUI.open('Industry12', 5, [$__language_Array__["2ee364d1f171c974718ec94cf594a690"], $__language_Array__["283c92e93f8d625cc698b881cfe81de0"], $__language_Array__["50d9db096a8a478998c6a8796e8fb92e"], $__language_Array__["334796b48b38fc7793dc1ab1e15fc123"]], ['Zombie', 'Imp', 'ConeheadZombie', 'SkatingZombie', 'StrollZombie', 'MakeRifterZombie', 'BucketheadZombie', 'FootballZombie', 'MembraneZombie', 'Zomboni', 'SculptorZombie', 'BeetleCarZombie'], 1)
    });
    $c('left: 438px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry13', 5, [$__language_Array__["3a26740f68502e6283dadd49398f862e"], $__language_Array__["1ed56c0e6083f299a9e6123aa9769f9c"], $__language_Array__["ea2e3f535ccea065ec5261ac9e16f618"], $__language_Array__["334796b48b38fc7793dc1ab1e15fc123"]], ['Zombie', 'Imp', 'ConeheadZombie', 'StrollZombie', 'SkatingZombie', 'MakeRifterZombie', 'BucketheadZombie', 'FootballZombie', 'MembraneZombie', 'Zomboni', 'SculptorZombie', 'BeetleCarZombie'], 1)
    });
    $c('left: 620px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry14', 5, [$__language_Array__["fb80da2ed4c40378f1caf3390f594ca4"], $__language_Array__["28debec5f912f216af2fb4b786b25d5d"], $__language_Array__["50d9db096a8a478998c6a8796e8fb92e"], '/'], ['unknown'], ["images/interface/Black_Mirror" + (localStorage.JNG_TR_BROKE_MIRROR ? 2 : 1) + ".webp", "left: 150px;top:200px;height:90px;width:78px;"])
    });
    $c('left: 760px;top: 255px;', {
      onclick: _ => oLvlInfoUI.open('Industry15', 5, [$__language_Array__["38b4714e46244e71ac23b84fba7d8373"], $__language_Array__["f336eefbe3d9b948931cd783197fee08"], $__language_Array__["50d9db096a8a478998c6a8796e8fb92e"], $__language_Array__["a4a58db4c4c57edb0c43c899ceb22e3d"]], ['StrollZombie', 'CaskZombie', 'NewspaperZombie', 'Zomboni', 'FootballZombie', 'MembraneZombie', 'CigarZombie', 'PushIceImp', 'SculptorZombie', 'Gargantuar', 'BeetleCarZombie'], 1)
    });
  }

});