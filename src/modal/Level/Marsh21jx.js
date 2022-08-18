/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oImp, oCaskZombie, oSadakoZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  LevelName: $__language_Array__["ded8c0fe6751841d20c7f7adc30e95fc"],
  SunNum: 150,
  DKind: 0,
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  FixedProps: {
    "light": {
      "num": 3,
      "time": 1
    }
  },
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  },
  StartGame: function () {
    CustomSpecial(oZombieComeOnObs, 3, 1);
    CustomSpecial(oSummonZombieObs, 5, 3);
    CustomSpecial(oSummonZombieObs, 3, 6);
    CustomSpecial(oZombieComeOnObs, 4, 7);
    CustomSpecial(oZombieComeOnObs, 2, 8);
    CustomSpecial(oZombieComeOnObs, 1, 1);
    CustomSpecial(oZombiePlusBloodObs, 3, 7);
    CustomSpecial(oZombiePlusBloodObs, 2, 5);
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
  AZ: [[oZombie, 1, 3, [3]], [oBucketheadZombie, 1, 3, [3]], [oConeheadZombie, 1, 3, [3]], [oBalloonZombie, 1, 5, [9]], [oFootballZombie, 1, 5, [9]], [oNewspaperZombie, 1, 5, [9]], [oStrollZombie, 1, 5, [9]], [oCigarZombie, 1, 5, [9]], [oImp, 1, 1], [oCaskZombie, 1, 5, [7, 8, 9]], [oSadakoZombie, 1, 4, [4, 5, 6, 7, 8, 9]]],
  FlagNum: 24,
  FlagToSumNum: {
    a1: [2, 3, 5, 8, 9, 10, 16, 20, 24],
    a2: [2, 3, 7, 10, 30, 16, 20, 25, 50]
  }
});