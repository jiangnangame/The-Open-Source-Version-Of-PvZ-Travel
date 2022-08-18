/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  ZName: [oStrollZombie, oZombie, oCigarZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oImp, oSadakoZombie],
  PName: [oWallNut, oPotatoMine, oWallNut, oCherryBomb, oFumeShroom, oSporeShroom,
  /*oLight,*/
  oSunShroom],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 0,
  LevelName: $__language_Array__["5d9866150e22a8560748df880ba9aef3"],
  SunNum: 150,
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
  //  ZName: [oStrollZombie,oZombie,oCigarZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oImp, oSadakoZombie],
  AZ: [[oStrollZombie, 2, 1, [1, 2, 3, 4, 5]], [oCaskZombie, 3, 6, [6, 7]], [oCigarZombie, 2, 1], [oImp, 5, 1], [oConeheadZombie, 3, 6], [oBucketheadZombie, 1, 13]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [1, 2, 4, 7, 10],
    a2: [2, 6, 10, 16, 24, 40]
  },
  FlagToMonitor: {}
});