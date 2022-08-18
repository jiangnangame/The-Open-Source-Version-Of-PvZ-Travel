/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oConeheadZombie, oStrollZombie, oBalloonZombie, oZombie, oFootballZombie],
  LevelName: $__language_Array__["41193b3e97c87fdf433635c5acc100f7"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oConeheadZombie, 2, 1], [oStrollZombie, 2, 5], [oBalloonZombie, 1, 1, [1]], [oZombie, 3, 1], [oFootballZombie, 2, 5]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [5],
    a2: [1, 9]
  }
});