/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oCaskZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["69428c00d663034f1ecea3d0586a525e"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C % 2 == 0) {
        CustomSpecial(oZombiePlusBloodObs, C, 5);
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
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["d543ec17fc6a7ca7b7ebcdb41d182a8b"]));
      BeginCool();
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(300, PlaySubtitle);
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 4], [oCaskZombie, 1, 3, [3, 9, 10]]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 6, 9],
    a2: [1, 4, 10, 20]
  }
});