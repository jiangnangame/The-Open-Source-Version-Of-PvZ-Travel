/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oImp, oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oSadakoZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["1701baadb0ad28945dbbde961adc18c1"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let C = 1; C <= 5; C++) {
      if (C % 2 != 0) {
        CustomSpecial(oTallNut, C, 6);
        CustomSpecial(oPumpkinHead, C, 6);
      } else {
        CustomSpecial(oZombieComeOnObs, C, 7);
      }

      CustomSpecial(oZombiePlusBloodObs, C, 9);
    }

    CustomSpecial(oSummonZombieObs, 3, 8);
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
  AZ: [[oZombie, 3, 1, [1, 2]], [oImp, 3, 1, [1, 2]], [oConeheadZombie, 2, 3], [oBucketheadZombie, 1, 3, [3, 7]], [oSadakoZombie, 2, 3], [oStrollZombie, 3, 4, [4, 6, 8, 10, 12]]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [1, 2, 4, 7, 10],
    a2: [1, 2, 3, 6, 12, 15]
  }
});