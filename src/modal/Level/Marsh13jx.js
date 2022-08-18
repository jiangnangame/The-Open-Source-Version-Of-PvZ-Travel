/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oNewspaperZombie, oSadakoZombie, oBalloonZombie, oFootballZombie, oCaskZombie, oImp, oBucketheadZombie],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["add74dd454402e4c621c8840e87386a3"],
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: function () {
    for (let i = 1; i <= 5; i++) {
      CustomSpecial(oZombieComeOnObs, i, 9);

      if (i % 2 == 0) {
        CustomSpecial(oSummonZombieObs, i, 4);
      } else {
        CustomSpecial(oZombieComeOnObs, i, 8);
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
  },
  LoadAccess: function (a) {
    //NewImg("imgKK", "images/interface/沼泽镜像小树丛.webp", "left:1030px;top:446px", EDAll);
    oSym.addTask(90, function () {
      a(0);
    }, []);
  }
}, {
  AZ: [[oZombie, 1, 2], [oConeheadZombie, 2, 2, [2]], [oNewspaperZombie, 1, 6], [oSadakoZombie, 1, 6], [oBalloonZombie, 2, 6], [oImp, 2, 1, [1]], [oCaskZombie, 1, 6], [oBucketheadZombie, 1, 6]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [1, 2, 3, 5, 8, 9],
    a2: [2, 0, 3, 4, 7, 12, 15]
  }
});