/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower],
  ZName: [oZombie, oBucketheadZombie, oNewspaperZombie, oConeheadZombie, oCrystal],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  LevelName: $__language_Array__["5b393511c5f5f74b5b98b5e076e96dfe"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  SunNum: 200,
  StartGame: function () {
    PlaceZombie(oCrystal, 5, 8);
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
  AZ: [[oZombie, 4, 1], [oNewspaperZombie, 4, 1], [oBucketheadZombie, 3, 1, [1]], [oConeheadZombie, 4, 1]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [1, 2, 4, 5, 6],
    a2: [3, 4, 3, 9, 15, 23]
  },
  FlagToMonitor: {}
});