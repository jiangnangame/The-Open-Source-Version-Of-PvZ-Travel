/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oImp, oConeheadZombie, oBucketheadZombie, oFootballZombie, oSadakoZombie, oCigarZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  LevelName: $__language_Array__["607ee35883333cc1d64d5aa86da71337"],
  SunNum: 150,
  DKind: 0,
  FixedProps: {
    "light": {
      "num": 3,
      "time": 1
    }
  },
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  },
  StartGame: function () {
    for (let i = 1; i <= 5; i++) {
      CustomSpecial(oZombieComeOnObs, i, 9);

      if (i % 2 == 0) {
        CustomSpecial(oSummonZombieObs, i, 8);
      } else {
        CustomSpecial(oZombiePlusBloodObs, i, 8);
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
  AZ: [[oImp, 3, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 1, 1], [oFootballZombie, 1, 1], [oSadakoZombie, 1, 1], [oCigarZombie, 1, 1]],
  FlagNum: 18,
  FlagToSumNum: {
    a1: [4, 8, 12, 15],
    a2: [1, 10, 16, 25, 34]
  }
});