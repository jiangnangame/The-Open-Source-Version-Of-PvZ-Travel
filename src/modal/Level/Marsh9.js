/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oWallNut, oPotatoMine, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie],
  PicArr: function () {
    var a = oFumeShroom.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  CanSelectCard: 0,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["95e98b2e2e90a8445f46152225c4eff0"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  FixedProps: 'disabled',
  LoadAccess: function (a) {
    let dom = NewEle("", "script", null, {
      src: "./modal/Level/MarshRandomPlot.js"
    }, document.querySelector("head"));

    dom.onload = function () {
      window["__run__Plot__"](9, a);
      delete window["__run__Plot__"];
      ClearChild(dom);
    };

    dom.onerror = function () {
      ClearChild(dom);
      oSym.addTask(30, a);
    };
  },
  StartGame: function () {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["c883ac81460299bca6fe654dfeb60b99"]));
      BeginCool();
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(500, PlaySubtitle);
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 2], [oBucketheadZombie, 1, 5], [oFootballZombie, 1, 8]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [5, 8, 12],
    a2: [1, 3, 6, 9]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oFumeShroom));
  }
});