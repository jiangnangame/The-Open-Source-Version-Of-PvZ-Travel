/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oCaskZombie, oBucketheadZombie, oFootballZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["2c967d0d53f16dafd5cb54ff7d31e8c5"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C % 2 == 1) {
        CustomSpecial(oSummonZombieObs, C, 5);
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
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["d78757fc664a6ca75444b89547567a37"]));
      BeginCool();
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(300, PlaySubtitle);
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 2, 3], [oConeheadZombie, 3, 5], [oCaskZombie, 1, 1, [1]], [oBucketheadZombie, 1, 10], [oFootballZombie, 1, 15, [15]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [3, 6, 8, 11],
    a2: [1, 4, 6, Number.parseInt(Math.random() * 10) + 7, 23]
  }
});