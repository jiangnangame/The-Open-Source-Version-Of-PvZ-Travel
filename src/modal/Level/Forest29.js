/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie],
  SunNum: 150,
  LevelName: $__language_Array__["5d7b720eebe16846e611de3a0048d85d"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight"
}, {
  AZ: [[oZombie, 3, 1, [1]], [oBucketheadZombie, 3, 3, [3]], [oConeheadZombie, 3, 6, [6]], [oBalloonZombie, 2, 10, [10]], [oFootballZombie, 2, 15, [15]], [oNewspaperZombie, 2, 12, [12]], [oStrollZombie, 1, 15, [15]], [oCigarZombie, 2, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [2, 6, 10, 11, 12],
    a2: [1, 2, 4, 16, 25, 35]
  }
});