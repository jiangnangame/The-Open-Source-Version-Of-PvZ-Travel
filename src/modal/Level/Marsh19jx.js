/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oBucketheadZombie, oSadakoZombie, oStrollZombie, oImp, oFootballZombie, oBalloonZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  LevelName: $__language_Array__["e0d5d31bf44fd35aebfd4a0871c5344c"],
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
    CustomSpecial(oZombieComeOnObs, 1, 9);
    CustomSpecial(oSummonZombieObs, 2, 8);
    CustomSpecial(oSummonZombieObs, 4, 8);
    CustomSpecial(oZombieComeOnObs, 1, 9);
    CustomSpecial(oZombieComeOnObs, 5, 2);
    CustomSpecial(oZombieComeOnObs, 3, 4);
    CustomSpecial(oZombiePlusBloodObs, 2, 5);
    CustomSpecial(oZombiePlusBloodObs, 3, 7);
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
  AZ: [[oZombie, 4, 1], [oBucketheadZombie, 2, 1], [oSadakoZombie, 1, 11, [11, 20]], [oStrollZombie, 2, 5], [oImp, 3, 1], [oFootballZombie, 1, 11, [11, 20]], [oBalloonZombie, 1, 11, [11, 20]]],
  FlagNum: 20,
  FlagToSumNum: {
    a1: [3, 6, 9, 10, 13, 15, 19],
    a2: [1, 3, 8, 10, 15, 17, 19, 30]
  }
});