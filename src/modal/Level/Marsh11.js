/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oFootballZombie, oImp],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["dab820a930d28ee8dd5e4ec985ef6875"],
  LoadMusic: "Bgm_Marsh_Ready",
  LoadAccess: function (callback) {
    let dom = NewEle("", "script", null, {
      src: "./modal/Level/MarshRandomPlot.js"
    }, document.querySelector("head"));

    dom.onload = function () {
      window["__run__Plot__"](11, callback);
      delete window["__run__Plot__"];
      ClearChild(dom);
    };

    dom.onerror = function () {
      ClearChild(dom);
      oSym.addTask(30, callback);
    };
  },
  StartGameMusic: "Bgm_Marsh_Fight"
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 3], [oBucketheadZombie, 2, 7], [oCaskZombie, 1, 3], [oFootballZombie, 1, 10]],
  FlagNum: 17,
  FlagToSumNum: {
    a1: [1, 5, 6, 10, 15, 17],
    a2: [4, 2, 1, 7, 11, 19, 26]
  }
});