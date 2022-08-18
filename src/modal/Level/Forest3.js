/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
  SunNum: 150,
  LevelName: $__language_Array__["222ae9b39264edd9468ff723a9c8887a"],
  LvlEName: 8,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight"
}, {
  AZ: [[oZombie, 4, 2], [oConeheadZombie, 4, 1], [oBucketheadZombie, 1, 7]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [3, 5, 8],
    a2: [1, 2, 3, 5]
  }
});