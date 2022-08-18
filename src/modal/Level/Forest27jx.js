/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oConeheadZombie, oBucketheadZombie, oStrollZombie, oZombie, oFootballZombie, oCrystal],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  LevelName: $__language_Array__["f43613ed1f91838acad3a311a69c48e5"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  SunNum: 200,
  StartGame: function () {
    PlaceZombie(oCrystal, 1, 6);
    oSym.addTask(70, PlaceZombie, [oCrystal, 3, 6]);
    oSym.addTask(120, PlaceZombie, [oCrystal, 5, 6]);
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
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
      BeginCool();
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  },
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    });
  }
}, {
  AZ: [[oConeheadZombie, 3, 2, [2]], [oBucketheadZombie, 3, 2, [2]], [oStrollZombie, 2, 5], [oZombie, 5, 1, [1]], [oFootballZombie, 1, 7]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [1, 3, 7],
    a2: [3, 1, 7, 16]
  },
  FlagToMonitor: {}
});