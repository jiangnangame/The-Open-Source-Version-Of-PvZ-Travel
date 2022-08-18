/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oSadakoZombie, oStrollZombie, oCaskZombie, oCigarZombie, oFootballZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["9c1df08fb83f215cccb78108ba15bdaf"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  },
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C % 2 == 0) {
        CustomSpecial(oZombieComeOnObs, C, 8);
        CustomSpecial(oSummonZombieObs, C, 5);
      } else {
        CustomSpecial(oZombiePlusBloodObs, C, 7);
      }

      CustomSpecial(oTallNut, C, 6);
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
  AZ: [[oZombie, 4, 1, [1]], [oConeheadZombie, 3, 1, [1]], [oBalloonZombie, 1, 5, [16]], [oSadakoZombie, 1, 6, [16]], [oStrollZombie, 1, 7, [16]], [oCaskZombie, 1, 9, [9, 16]], [oCigarZombie, 1, 8, [8, 9, 10, 11, 12, 13, 14, 15, 16]], [oFootballZombie, 1, 14, [14, 15]]],
  FlagNum: 16,
  FlagToSumNum: {
    a1: [1, 9, 12],
    a2: [1, 6, 12, 18]
  },
  FlagToMonitor: {}
});