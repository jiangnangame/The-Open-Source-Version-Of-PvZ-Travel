/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oFootballZombie],
  PicArr: function () {
    var a = oRepeater.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  SunNum: 150,
  LevelName: $__language_Array__["384540292a60509cc3619a8e575bb4b2"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1], [oFootballZombie, 2, 1], [oNewspaperZombie, 2, 1]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [1, 5, 9],
    a2: [1, 2, 8, 13]
  },
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oRepeater, EDAll));
  }
});