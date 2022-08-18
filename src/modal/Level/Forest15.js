/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oCigarZombie, oNewspaperZombie],
  SunNum: 150,
  LevelName: $__language_Array__["828098c5467c296337216fc4ec228296"],
  CanSelectCard: 0,
  StaticCard: 0,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  StartGame: oMiniGames.ConveyorBelt,
  FixedProps: 'disabled'
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 2], [oBucketheadZombie, 1, 7], [oStrollZombie, 1, 5], [oCigarZombie, 2, 3], [oNewspaperZombie, 1, 1]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [1, 5, 8],
    a2: [2, 5, 7, 9]
  }
});