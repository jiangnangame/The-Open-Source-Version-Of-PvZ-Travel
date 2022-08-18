/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oNewspaperZombie, oFootballZombie, oStrollZombie, oCigarZombie],
  PicArr: function () {
    var a = oCherryBomb.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  SunNum: 150,
  LevelName: $__language_Array__["b8796658ff672cf8ca064e8af7447a55"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oZombie, 2, 1, [1]], [oConeheadZombie, 2, 2], [oNewspaperZombie, 2, 2], [oFootballZombie, 1, 2], [oBalloonZombie, 2, 2], [oStrollZombie, 2, 2], [oCigarZombie, 2, 2]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [5, 7],
    a2: [1, 10, 30]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oCherryBomb, EDAll));
  }
});