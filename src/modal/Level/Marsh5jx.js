/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oSadakoZombie, oStrollZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["375f9f14d486de095859d947acb49a57"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  },
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C == 1) {
        CustomSpecial(oSummonZombieObs, C, 3);
      } else if (C == 3 || C == 4) {
        CustomSpecial(oZombiePlusBloodObs, C, 5);
      }

      CustomSpecial(oZombieComeOnObs, C, 8);
      CustomSpecial(oZombieComeOnObs, C, 7);
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
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 1, 5], [oSadakoZombie, 1, 6], [oBucketheadZombie, 1, 8], [oStrollZombie, 1, 9, [9, 11]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [6, 8, 11, 13, 14],
    a2: [1, 4, 8, 14, 19, 28]
  },
  FlagToMonitor: {}
});