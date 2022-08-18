/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb],
  ZName: [oConeheadZombie, oNewspaperZombie, oBalloonZombie, oBucketheadZombie, oCigarZombie],
  PicArr: function () {
    var a = oTallNut.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  LevelName: $__language_Array__["18a80270c8e804da38567a5eeb30f16d"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oConeheadZombie, 3, 1], [oNewspaperZombie, 2, 2], [oBalloonZombie, 3, 1, [1]], [oBucketheadZombie, 2, 8], [oCigarZombie, 2, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [5, 10],
    a2: [2, 18, 23]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oTallNut, EDAll));
  }
});