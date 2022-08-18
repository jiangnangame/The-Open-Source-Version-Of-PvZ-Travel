/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oBambooUncle, oSporeShroom, oFumeShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie],
  CanSelectCard: 1,
  LevelName: $__language_Array__["cfadd272b89897b858fa024b2183eda3"],
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
      });
    });
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1], [oNewspaperZombie, 2, 1]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [1, 5, 9],
    a2: [1, 2, 8, 13]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/Card/Light.webp", "left:667px;top:330px;clip:rect(auto,auto,60px,auto)", EDAll, {
      onclick: function () {
        GetWin(this, 'Season_S3');
      }
    });
  }
});