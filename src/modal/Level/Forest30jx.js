/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oTallNut],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  CanSelectCard: 0,
  StaticCard: 0,
  LevelName: $__language_Array__["a4d64b1a1b95cd74830fefb1b7831ae1"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  InitLawnMover: function () {},
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oZombie, 2, 1, [1]], [oBucketheadZombie, 2, 2, [2]], [oConeheadZombie, 2, 3, [3]], [oBalloonZombie, 1, 5, [5]], [oFootballZombie, 1, 6, [6]], [oNewspaperZombie, 1, 6, [6]], [oStrollZombie, 1, 4, [4]], [oCigarZombie, 1, 2, [2]]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [1, 3, 4, 5, 6, 7],
    a2: [2, 4, 8, 16, 25, 35, 45]
  },
  FlagToMonitor: {}
});