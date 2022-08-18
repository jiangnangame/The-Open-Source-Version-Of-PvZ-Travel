/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oBalloonZombie, oNewspaperZombie],
  SunNum: 150,
  LevelName: $__language_Array__["1858798030fcaab0c86da3531ec4a4a7"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 5, 1, [1]], [oConeheadZombie, 3, 2], [oBucketheadZombie, 3, 1, [1]], [oStrollZombie, 1, 5], [oBalloonZombie, 2, 5], [oNewspaperZombie, 2, 1]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [1, 5],
    a2: [2, 4, 12]
  }
});