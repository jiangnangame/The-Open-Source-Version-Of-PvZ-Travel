/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine2, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb2, oTallNut, oBambooUncle1, oSporeShroom, oFumeShroom, oScaredyShroom, oPuffShroom, oSunShroom, oLight],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oNewspaperZombie],
  LevelName: $__language_Array__["637aaad9d1d354499fbc60240761c10f"],
  backgroundImage: "images/interface/Fuben_Summer.webp",
  backgroundMask: 'BgMask-Summer',
  LoadMusic: "Fuben_Summer_Ready",
  StartGameMusic: "Fuben_Summer_Fight",
  StartGame: function () {
    for (let C = 7, len = 10; C < len; C++) {
      CustomSpecial(oObstacle, 1, C);
      CustomSpecial(oObstacle, 3, C);
      CustomSpecial(oObstacle, 5, C);
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
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1, [1]], [oCaskZombie, 1, 5, [5]], [oNewspaperZombie, 2, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [1, 5, 8, 13, 15],
    a2: [1, 8, 9, 10, 11]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'Season_S5');
      }
    });
  }
});