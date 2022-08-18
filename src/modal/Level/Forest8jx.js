/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish],
  ZName: [oZombie, oNewspaperZombie, oBalloonZombie, oConeheadZombie, oBucketheadZombie, oCrystal],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  LevelName: $__language_Array__["a029189a12e3b14427b7988a36cb577b"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  SunNum: 200,
  StartGame: function () {
    PlaceZombie(oCrystal, 3, 8);
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
  AZ: [[oZombie, 2, 1], [oNewspaperZombie, 1, 1], [oBalloonZombie, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [1, 3, 4, 5, 7],
    a2: [1, 2, 6, 8, 14, 19]
  },
  FlagToMonitor: {}
});