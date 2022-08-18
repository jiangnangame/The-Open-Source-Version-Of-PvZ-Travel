/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oConeheadZombie, oBucketheadZombie, oStrollZombie, oZombie, oFootballZombie],
  LevelName: $__language_Array__["cfe2ab1c63c67861e7765c07633f4d58"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oConeheadZombie, 3, 3, [3]], [oBucketheadZombie, 3, 5, [5]], [oStrollZombie, 2, 10], [oZombie, 5, 1, [1]], [oFootballZombie, 1, 15]],
  FlagNum: 16,
  FlagToSumNum: {
    a1: [1, 5, 15],
    a2: [3, 1, 7, 16]
  }
});