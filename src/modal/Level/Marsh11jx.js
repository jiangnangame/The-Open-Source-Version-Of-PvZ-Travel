/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCigarZombie, oFootballZombie, oImp, oStrollZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["63f65199fab8c9507818689692915ff1"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let i = 1; i <= 5; i++) {
      CustomSpecial(oZombieComeOnObs, i, 9);
      CustomSpecial(oZombiePlusBloodObs, i, 8);
      CustomSpecial(oWallNut, i, 7);
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
  },
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oConeheadZombie, 1, 7], [oZombie, 1, 4], [oImp, 1, 1], [oFootballZombie, 5, 15], [oCigarZombie, 1, 13], [oStrollZombie, 1, 14]],
  FlagNum: 20,
  FlagToSumNum: {
    a1: [1, 2, 5, 6, 10, 13, 15, 17],
    a2: [4, 1, 3, 18, 7, 15, 17, 18, 26]
  }
});