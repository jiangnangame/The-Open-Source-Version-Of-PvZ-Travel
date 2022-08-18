/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oNewspaperZombie, oSadakoZombie, oBalloonZombie, oFootballZombie, oCaskZombie, oImp, oBucketheadZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["e2c14b0b3ac6fc7bec3fd8c4143dcdf2"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight"
}, {
  AZ: [[oZombie, 1, 2], [oConeheadZombie, 2, 2, [2]], [oNewspaperZombie, 1, 6], [oSadakoZombie, 1, 6], [oBalloonZombie, 2, 6], [oFootballZombie, 2, 1, [1]], [oCaskZombie, 1, 6], [oImp, 2, 2, [3]], [oBucketheadZombie, 1, 6]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [1, 2, 3, 5, 8, 9],
    a2: [1, 3, 2, 1, 10, 15, 30]
  }
});