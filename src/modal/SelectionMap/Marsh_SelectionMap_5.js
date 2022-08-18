/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "MarshSelection5.webp", RESPATH + "MarshSelection6.webp"],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection5.webp",

  LoadAccess($c) {
    loadRes({
      img: ["images/interface/MarshClue1.webp"]
    });
    $c('left:208px;top:246px;', {
      onclick: _ => oLvlInfoUI.open('Marsh21', 2, [$__language_Array__["02ec6b3196712f907f35f8030dacd034"], $__language_Array__["1ef31c2a36673f784757442ca79d10bc"], $__language_Array__["b5e3ad1f34408a200674c3c6d74f9521"], $__language_Array__["887a498e680bc51140bdb64aa6809ee3"]], ['Imp', 'BalloonZombie', 'Zombie', 'ConeheadZombie', 'NewspaperZombie', 'CaskZombie', 'StrollZombie', 'SadakoZombie', 'BucketheadZombie', 'FootballZombie', 'CigarZombie'], 1, "Marsh21jx")
    });
    $c('left:385px;top:376px;', {
      onclick: _ => oLvlInfoUI.open('Marsh22', 2, [$__language_Array__["171fe0b5cd62b6476c26fa41d23f53a1"], $__language_Array__["cec509a904e34287e5404f87aaeafa41"], $__language_Array__["b5e3ad1f34408a200674c3c6d74f9521"], $__language_Array__["47891a4f3fc4aa9432c580b2de9a2ac1"]], ['BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'SadakoZombie', 'StrollZombie', 'FootballZombie', 'CigarZombie'], 1)
    });
    $c('left:583px;top:303px;', {
      onclick: _ => oLvlInfoUI.open('Marsh23', 2, [$__language_Array__["3d6a0e7d11f8225f76dfb926b29d507c"], $__language_Array__["c78b1b4f0eeeb7e2b02f8820f4e9f211"], $__language_Array__["b5e3ad1f34408a200674c3c6d74f9521"], $__language_Array__["fbdac43c9a14c782f30a64cdb85c8615"]], ['SadakoZombie'], 1)
    });
    $c('left:777px;top:200px;', {
      onclick: _ => oLvlInfoUI.open('Marsh24', 2, [$__language_Array__["dd179b508585fb276b3fc7cb1aa56fbc"], $__language_Array__["1ef31c2a36673f784757442ca79d10bc"], $__language_Array__["b5e3ad1f34408a200674c3c6d74f9521"], $__language_Array__["2eeed48d412dc1bedfee00797012ff7b"]], ['Imp', 'BalloonZombie', 'Zombie', 'ConeheadZombie', 'NewspaperZombie', 'CaskZombie', 'StrollZombie', 'SadakoZombie', 'BucketheadZombie', 'FootballZombie', 'CigarZombie'], ["images/interface/MarshClue1.webp", "left: -150px;top: -65px;transform: scale(0.12);"], "Marsh24jx")
    });
  }

});