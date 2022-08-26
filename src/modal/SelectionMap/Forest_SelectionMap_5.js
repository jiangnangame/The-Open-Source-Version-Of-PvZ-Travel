/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection5.webp", RESPATH + "ForestSelection6.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection5.webp",

  LoadAccess($c) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'TallNut.webp', path + 'SunShroom.webp']
    });
    $c('left:114px;top:297px;', {
      onclick: _ => oLvlInfoUI.open('Forest21', 1, [$__language_Array__["19bad304d620a3fdb6653243a6b21731"], $__language_Array__["b404741deb6c7917a2cb61ae3a3bd56e"], $__language_Array__["c1fe8da0fb36c0ceafe6f096812b2401"], $__language_Array__["4304f70357732c64178e1737b741f55f"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'FootballZombie'], 1, 'Forest21jx')
    });
    $c('left:292px;top:211px;', {
      onclick: _ => oLvlInfoUI.open('Forest22', 1, [$__language_Array__["682b2bd1016ab3ad090ef1cb84b32ccd"], $__language_Array__["6f61574af91afc8ff502c755b010a6ae"], $__language_Array__["c1fe8da0fb36c0ceafe6f096812b2401"], $__language_Array__["3314d7dbb038b41eae89e5d5eb21694e"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'FootballZombie'], 1)
    });
    $c('left:458px;top:205px;', {
      onclick: _ => oLvlInfoUI.open('Forest23', 1, [$__language_Array__["3fefb1682dc84ebf14ddeb9eeeb5f49e"], $__language_Array__["c08a0f4eb66efaf79d07f0e78a39078b"], $__language_Array__["c1fe8da0fb36c0ceafe6f096812b2401"], $__language_Array__["fa5ca974e88142f1866946e5282f951e"]], ['StrollZombie', 'CigarZombie'], 1)
    });
    $c('left:622px;top:242px;', {
      onclick: _ => oLvlInfoUI.open('Forest24', 1, [$__language_Array__["e131cb30a42b51f9a7fefaf8e92fd6b4"], $__language_Array__["b404741deb6c7917a2cb61ae3a3bd56e"], $__language_Array__["c1fe8da0fb36c0ceafe6f096812b2401"], $__language_Array__["fa5ca974e88142f1866946e5282f951e"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'FootballZombie'], 1, 'Forest24jx')
    });
    $c('left:774px;top:305px;', {
      onclick: _ => oLvlInfoUI.open('Forest25', 1, [$__language_Array__["d332d61765416061091dd33418244f2b"], $__language_Array__["b404741deb6c7917a2cb61ae3a3bd56e"], $__language_Array__["c1fe8da0fb36c0ceafe6f096812b2401"], $__language_Array__["fa5ca974e88142f1866946e5282f951e"]], ['BalloonZombie', 'ConeheadZombie', 'NewspaperZombie', 'BucketheadZombie', 'CigarZombie'], ["plant", oTallNut], 'Forest25jx')
    });
  }

});