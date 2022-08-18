/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oBegonia, oPepper, oIceAloe, oImitater, oMonotropa, oSpikeweed, oMiracleImitater, oJalapeno, oLSP],
  ZName: [oZombie, oMakeRifterZombie, oSkatingZombie, oFootballZombie, oConeheadZombie, oZomboni, oBucketheadZombie, oStrollZombie, oSadakoZombie, oIceBlock, oCigarZombie],
  LevelName: $__language_Array__["7cc7b3ffbf42c0ba5483fb25362d5b99"],
  LoadAccess: function (a) {
    NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
    PlayAudio('Bgm_Polar_Noise', 1);
    oSym.addTask(30, a, [0]);
  },
  StartGame: function () {
    oEffects.BgParticle({
      url: "images/Props/Effect/snow_pieces.png",
      style: 'left:115px;'
    });
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    oSym.addTask(3200, function k() {
      if (Math.random() * 3 < 2) {
        const ran = Math.floor(Math.random() * 5) + 1;
        oMiniGames.IceStorm(ran, ran, Math.floor(Math.random() * 3) + 1);
      } else {
        const def = [[1, 4], [3, 4], [4, 5], [1, 3], [3, 5], [2, 4], [1, 2], [2, 3]],
              Select = def[Math.floor(Math.random() * def.length)];
        oMiniGames.IceStorm(Select[0], Select[1], Math.floor(Math.random() * 4) + 2);
      }

      oSym.addTask(Math.random() * 3000 + 1700, k);
    });
    /* 低温损害end */

    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
      BeginCool();
      PlaySubtitle($__language_Array__["8e38fa499c068e3267c7f155e200cd9e"]);
      oSym.addTask(1000, function () {
        PlaySubtitle();
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      });
    });
  }
}, {
  AZ: [[oZombie, 2, 1], [oCigarZombie, 1, 3], [oFootballZombie, 1, 13], [oMakeRifterZombie, 1, 7], [oSkatingZombie, 2, 9], [oConeheadZombie, 2, 1], [oBucketheadZombie, 1, 1], [oStrollZombie, 1, 1], [oSadakoZombie, 1, 1]],
  FlagNum: 15,
  FlagToMonitor: {
    3: [function () {
      oMiniGames.IceStorm(1, 5, 5);
    }, 0],
    5: [function () {
      oMiniGames.IceStorm(1, 5, 7);
    }, 0],
    7: [function () {
      for (let i = 1; i <= 5; ++i) {
        oMiniGames.IceStorm(1, 5, 11);
        PlaceZombie(oBucketheadZombie, i, 11, 0);
      }
    }, 0],
    8: [function () {
      for (let i = 1; i <= 45; ++i) {
        oSym.addTask(i * (150 * Math.random() + 150), PlaceZombie, [oMakeRifterZombie, i % 5 + 1, 11, 0]);
      }
    }, 0],
    9: [function () {
      for (let i = 1; i <= 50; ++i) {
        oSym.addTask(i * 100, PlaceZombie, [oSkatingZombie, i % 5 + 1, 11, 0]);
      }
    }, 0],
    10: [function () {
      oMiniGames.IceStorm(1, 5, 9);
    }, 0]
  },
  FlagToSumNum: {
    a1: [1, 3, 4, 7, 8, 9, 10, 12, 14],
    a2: [1, 3, 10, 19, 8, 13, 25, 28, 30, 32]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, 'Season_W2');
      }

    });
  }
});