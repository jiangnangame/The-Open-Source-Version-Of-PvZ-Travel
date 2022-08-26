/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection3.webp", RESPATH + "ForestSelection4.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection3.webp",

  LoadAccess($c) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'CherryBomb.webp', path + 'StrollZombie.webp', path + 'CigarZombie.webp', path + 'Repeater.webp', path + 'FootballZombie.webp']
    });
    $c('left:88px;top:210px;', {
      onclick: _ => oLvlInfoUI.open('Forest11', 1, [$__language_Array__["2cf0c60474a20517d1232f021451767f"], $__language_Array__["4d87150e1101bdeb3c9c6e1c60076fe0"], $__language_Array__["5bd7d13c2b9bde1e79456bd6d2d04890"], $__language_Array__["48c0f67bde94724056a01540798de038"]], ['Zombie', 'ConeheadZombie', 'StrollZombie'], 1, 'Forest11jx')
    });
    $c('left:248px;top:231px;', {
      onclick: _ => oLvlInfoUI.open('Forest12', 1, [$__language_Array__["ff527c4f54a4156fd2a8abfd5faaea9b"], $__language_Array__["4d87150e1101bdeb3c9c6e1c60076fe0"], $__language_Array__["5bd7d13c2b9bde1e79456bd6d2d04890"], $__language_Array__["48c0f67bde94724056a01540798de038"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'BucketheadZombie'], 1, 'Forest12jx')
    });
    $c('left:394px;top:272px;', {
      onclick: _ => oLvlInfoUI.open('Forest13', 1, [$__language_Array__["7ae50865aea1c6802aed9ca6c7f58ad0"], $__language_Array__["4d1e8bf388535c6c768881eda40103ed"], $__language_Array__["5bd7d13c2b9bde1e79456bd6d2d04890"], $__language_Array__["b2d425f0ff7ec6a869a2e29bcafb6371"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'BucketheadZombie'], 1)
    });
    $c('left:560px;top:307px;', {
      onclick: _ => oLvlInfoUI.open('Forest14', 1, [$__language_Array__["c0ad690ab4a6f038f67a7e84943740ab"], $__language_Array__["4d87150e1101bdeb3c9c6e1c60076fe0"], $__language_Array__["5bd7d13c2b9bde1e79456bd6d2d04890"], $__language_Array__["1a3a815b2759e6228533bdadaa47c484"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'CigarZombie'], 1, 'Forest14jx')
    });
    $c('left:750px;top:307px;', {
      onclick: _ => oLvlInfoUI.open('Forest15', 1, [$__language_Array__["e0136f1b746f710c667ca7743b0391ce"], $__language_Array__["915c08abaa9dbe06d4e150efa38c1ec4"], $__language_Array__["5bd7d13c2b9bde1e79456bd6d2d04890"], $__language_Array__["24fe5e19da8d8cd705b17cf1bf7168b8"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'CigarZombie', 'BucketheadZombie'], 1)
    });
  }

});