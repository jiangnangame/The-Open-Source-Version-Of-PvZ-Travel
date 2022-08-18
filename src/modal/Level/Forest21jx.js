/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oNewspaperZombie, oFootballZombie, oStrollZombie, oCigarZombie, oBucketheadZombie, oCrystal],
  PicArr: ["images/interface/ForestJx.webp"],
  backgroundImage: "images/interface/ForestJx.webp",
  LevelName: $__language_Array__["440d50dbee0e10e64b0cc8f12d930426"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready_JX",
  StartGameMusic: "Bgm_Forest_Fight_JX",
  DKind: 0,
  SunNum: 200,
  StartGame: function () {
    PlaceZombie(oCrystal, 2, 7);
    oSym.addTask(70, PlaceZombie, [oCrystal, 4, 7]);
    oSym.addTask(120, PlaceZombie, [oCrystal, 1, 6]);
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
  }
}, {
  AZ: [[oZombie, 2, 1, [1]], [oConeheadZombie, 2, 1], [oNewspaperZombie, 2, 4], [oFootballZombie, 2, 5], [oBalloonZombie, 2, 5], [oStrollZombie, 2, 4, [4]], [oCigarZombie, 2, 6, [6]]],
  FlagNum: 6,
  FlagToSumNum: {
    a1: [1, 3, 5],
    a2: [1, 3, 10, 20]
  },
  FlagToMonitor: {}
});