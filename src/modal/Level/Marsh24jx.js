/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  LevelName: $__language_Array__["27430d50100368a58b7fb3d8ec166a1d"],
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
  StartGame: function () {
    CustomSpecial(oZombieComeOnObs, 2, 5);
    CustomSpecial(oSummonZombieObs, 5, 3);
    CustomSpecial(oSummonZombieObs, 1, 4);
    CustomSpecial(oZombieComeOnObs, 3, 7);
    CustomSpecial(oZombieComeOnObs, 5, 8);
    CustomSpecial(oZombieComeOnObs, 3, 9);
    CustomSpecial(oZombiePlusBloodObs, 2, 7);
    CustomSpecial(oZombiePlusBloodObs, 4, 5);
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
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1], [oBalloonZombie, 2, 1], [oCigarZombie, 1, 1], [oFootballZombie, 1, 1], [oNewspaperZombie, 3, 1], [oStrollZombie, 2, 1], [oImp, 2, 1], [oCaskZombie, 1, 1], [oSadakoZombie, 1, 1]],
  FlagNum: 18,
  FlagToSumNum: {
    a1: [5, 8, 10, 13, 15, 17],
    a2: [1, 4, 12, 16, 25, 18, 50]
  },
  FlagToMonitor: {}
});