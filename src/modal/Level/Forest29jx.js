/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oCrystal],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  LevelName: $__language_Array__["3ab6463155f875718c7eb315bd7e5c3f"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  SunNum: 200,
  StartGame: function () {
    PlaceZombie(oCrystal, 2, 6);
    oSym.addTask(70, PlaceZombie, [oCrystal, 4, 6]);
    oSym.addTask(120, PlaceZombie, [oCrystal, 1, 5]);
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
  AZ: [[oZombie, 3, 1, [1]], [oBucketheadZombie, 3, 2, [2]], [oConeheadZombie, 3, 3, [3]], [oBalloonZombie, 2, 5, [5]], [oFootballZombie, 2, 8, [8]], [oNewspaperZombie, 2, 6, [6]], [oStrollZombie, 1, 8, [8]], [oCigarZombie, 2, 1]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [1, 3, 5, 6, 7],
    a2: [1, 2, 4, 16, 25, 35]
  },
  FlagToMonitor: {}
});