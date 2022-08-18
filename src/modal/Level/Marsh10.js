/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oScaredyShroom, oPuffShroom, oFumeShroom, oPotatoMine, oStoneFlower],
  ZName: [oImp, oZombie, oCaskZombie, oConeheadZombie, oSadakoZombie, oBucketheadZombie],
  CanSelectCard: 0,
  SunNum: 150,
  LevelName: $__language_Array__["06ebb878248d979d04168f1447fc08e6"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  FixedProps: 'disabled',
  LoadAccess: function (callback) {
    let dom = NewEle("", "script", null, {
      src: "./modal/Level/MarshRandomPlot.js"
    }, document.querySelector("head"));

    dom.onload = function () {
      window["__run__Plot__"](10, callback);
      delete window["__run__Plot__"];
      ClearChild(dom);
    };

    dom.onerror = function () {
      ClearChild(dom);
      oSym.addTask(30, callback);
    };
  },
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oImp, 2, 1, [14]], [oZombie, 4, 1, [14]], [oCaskZombie, 1, 1, [14]], [oConeheadZombie, 2, 1, [14]], [oSadakoZombie, 1, 1, [14]], [oBucketheadZombie, 2, 1]],
  FlagNum: 14,
  FlagToSumNum: {
    a1: [3, 6, 9, 11],
    a2: [4, 7, 10, 13, 15]
  }
});