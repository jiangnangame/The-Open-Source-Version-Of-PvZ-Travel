/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarSelection5.webp", RESPATH + "PolarSelection6.webp"],
  Music: "Bgm_Polar_Ready_2",
  backgroundImage: "images/interface/PolarSelection6.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'PolarSelection6.webp', path + 'Spikeweed.webp', path + 'Zomboni.webp', path + 'Torchwood.webp']
    });
    $c('left:132.7px;top:344px;', {
      onclick: _ => oLvlInfoUI.open('Polar26', 4, [$__language_Array__["a046a8428128d7c55240231a3c59fb4b"], $__language_Array__["0bdf0e489ee19c3eeba8b6f304c99c2f"], $__language_Array__["c0b09f41d7db61166c05a9589eb15b86"], $__language_Array__["5b07d6af92b26676ef699deb8c2e652a"]], ['Imp', 'SadakoZombie', 'ConeheadZombie', 'CaskZombie', 'BucketheadZombie', 'Zomboni', 'FootballZombie', 'MembraneZombie'], 1, "Polar26jx")
    });
    $c('left:291.7px;top:315px;', {
      onclick: _ => oLvlInfoUI.open('Polar27', 4, [$__language_Array__["b4577d405db0484645e3f00cb19d4051"], $__language_Array__["a0242dec17a0a2132621c7e631db8fe5"], $__language_Array__["ce966d4c3115f3cb3b5af47286fec60e"], $__language_Array__["3d50b0ab937a3b5172b103edc9cc796c"]], ['Imp', 'Zombie', 'SadakoZombie', 'ConeheadZombie', 'NewspaperZombie', 'SkatingZombie', 'BucketheadZombie', 'PushIceImp', 'MembraneZombie'], 1, "Polar27jx")
    });
    $c('left:460.7px;top:298px;', {
      onclick: _ => oLvlInfoUI.open('Polar28', 4, [$__language_Array__["9345f574c04faaa2ad2278d11c7ea73b"], $__language_Array__["ce927163bbdbdc7922d0ec104798faa1"], $__language_Array__["ce966d4c3115f3cb3b5af47286fec60e"], $__language_Array__["1a140acdb71edac85caac83e1cacb758"]], ['BalloonZombie', 'Imp', 'ConeheadZombie', 'StrollZombie', 'CaskZombie', 'SadakoZombie', 'MakeRifterZombie', 'SkatingZombie', 'FootballZombie', 'BucketheadZombie', 'CigarZombie'], 1, "Polar28jx")
    });
    $c('left:626.7px;top:265px;', {
      onclick: _ => oLvlInfoUI.open('Polar29', 4, [$__language_Array__["47e29fc35359d38b3fcdbedb01509f88"], $__language_Array__["d0eb798ce5a3581533e086b393638d60"], $__language_Array__["c0b09f41d7db61166c05a9589eb15b86"], $__language_Array__["428ebea489fde4c7f59508f3b557a356"]], ['Zombie', 'Imp', 'ConeheadZombie', 'StrollZombie', 'SadakoZombie', 'SkatingZombie', 'MakeRifterZombie', 'BucketheadZombie', 'FootballZombie', 'CigarZombie', 'PushIceImp', 'MembraneZombie'], 1, "Polar29jx")
    });
    $c('left:766.7px;top:276px;', {
      onclick: _ => oLvlInfoUI.open('Polar30', 4, [$__language_Array__["18b5fba85334ebad5a3c37d275d7eb8b"], $__language_Array__["554c7d0b5974ca39b7b4d462c45bab1c"], $__language_Array__["c0b09f41d7db61166c05a9589eb15b86"], '/'], ['Boss'], 1)
    });
  }

});