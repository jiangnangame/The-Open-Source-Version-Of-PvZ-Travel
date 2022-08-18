/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish],
  ZName: [oZombie, oNewspaperZombie, oBalloonZombie, oConeheadZombie, oBucketheadZombie],
  SunNum: 150,
  LevelName: $__language_Array__["ae23d2f0e546d658af812536519ab764"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    }, []);
  }
}, {
  AZ: [[oZombie, 2, 1], [oNewspaperZombie, 1, 1], [oBalloonZombie, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1]],
  FlagNum: 14,
  FlagToSumNum: {
    a1: [3, 5, 8, 11],
    a2: [1, 4, 6, 8, 10]
  }
});