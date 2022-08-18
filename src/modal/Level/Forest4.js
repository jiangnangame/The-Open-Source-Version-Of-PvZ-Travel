/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower],
  ZName: [oZombie, oBucketheadZombie, oNewspaperZombie],
  SunNum: 150,
  LevelName: $__language_Array__["09033ddefd8ba011bc1e3ed2c03ff4ed"],
  LvlEName: 8,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 4, 1], [oNewspaperZombie, 4, 1], [oBucketheadZombie, 1, 7, [7]]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 5],
    a2: [1, 3, 5]
  }
});