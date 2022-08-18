/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower],
  ZName: [oZombie, oBucketheadZombie, oNewspaperZombie, oConeheadZombie],
  SunNum: 150,
  LevelName: $__language_Array__["615319667a143aecd4d8b2c9eb441f23"],
  LvlEName: 10,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 4, 1], [oNewspaperZombie, 4, 1], [oBucketheadZombie, 3, 1, [1]], [oConeheadZombie, 4, 1]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [3, 5, 8, 9],
    a2: [1, 2, 3, 5, 8]
  }
});