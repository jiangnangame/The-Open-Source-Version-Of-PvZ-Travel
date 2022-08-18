/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
  PicArr: ["images/interface/MarshJx.webp"],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  Dkind: 0,
  LevelName: $__language_Array__["d8c0f110a841a4a5d048e8ee6d08faca"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C % 2 == 0) {
        CustomSpecial(oZombieComeOnObs, C, 5);
      }
    }

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
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["272cbdceb034a4f87716112d9c47a970"]));
      BeginCool();
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(300, PlaySubtitle);
      });
    });
  }
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 5], [oBucketheadZombie, 1, 10, [10, 11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 4, 5, 7, 9],
    a2: [1, Number.parseInt(Math.random() * 4) + 2, 7, 10, 15, 18]
  },
  FlagToMonitor: {}
});