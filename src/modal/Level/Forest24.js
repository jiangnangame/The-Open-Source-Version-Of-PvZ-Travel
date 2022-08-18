/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb],
  ZName: [oConeheadZombie, oNewspaperZombie, oFootballZombie, oBucketheadZombie],
  LevelName: $__language_Array__["ece8f2a851fcc395deadd99c26a4cf59"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oConeheadZombie, 3, 1], [oNewspaperZombie, 3, 2], [oFootballZombie, 1, 10], [oBucketheadZombie, 2, 8]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [5, 10],
    a2: [1, 8, 15]
  }
});