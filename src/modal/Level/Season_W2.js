/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oBegonia, oPepper, oIceAloe, oImitater, oMonotropa, oSpikeweed, oMiracleImitater, oJalapeno, oLSP],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oZomboni, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oIceBlock, oPushIceImp, oMembraneZombie],
  LevelName: $__language_Array__["680e5ceb64b376bf5d9911d7b3175d57"],
  LoadAccess: function (a) {
    NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
    PlayAudio('Bgm_Polar_Noise', 1);

    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 8; j++) {
        if (j < 4) {
          CustomSpecial(oBegonia, i, j);
        } else if (j < 6) {
          let zombie = new oIceBlock();
          oP.AppearUP([zombie.CustomBirth(i, j, 0, 0, 0)], [zombie], 1, 0);
        } else {
          CustomSpecial(oRifter, i, j);
        }
      }

      CustomSpecial(oZombiePlusBloodObs, i, 9);
    }

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
        oMiniGames.IceStorm(ran, ran, Math.floor(Math.random() * 2) + 1);
      } else {
        const def = [[1, 4], [3, 4], [4, 5], [1, 3], [3, 5], [2, 4], [1, 2], [2, 3]],
              Select = def[Math.floor(Math.random() * def.length)];
        oMiniGames.IceStorm(Select[0], Select[1], Math.floor(Math.random() * 3) + 2);
      }

      oSym.addTask(Math.random() * 1000 + 3000, k);
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
      BeginCool();
      oSym.addTask(600, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      });
    });
  }
}, {
  AZ: [[oZomboni, 1, 5, [5]], [oMakeRifterZombie, 1, 7], [oMembraneZombie, 1, 8], [oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oBalloonZombie, 1, 2], [oNewspaperZombie, 1, 2], [oStrollZombie, 1, 3], [oFootballZombie, 1, 5], [oImp, 3, 1], [oCaskZombie, 1, 2], [oSadakoZombie, 1, 2], [oPushIceImp, 1, 6], [oCigarZombie, 1, 2]],
  FlagNum: 10,
  FlagToMonitor: {
    4: [() => {
      for (let i = 1; i < 6; i++) {
        PlaceZombie(oBalloonZombie, i, 11, 0);
      }
    }, 0],
    6: [() => {
      oMiniGames.IceStorm(1, 5, 8);
    }, 0],
    7: [() => {
      oMiniGames.IceStorm(1, 5, 10);

      for (let i = 1; i < 6; i++) {
        PlaceZombie(oBalloonZombie, i, 11, 0);
      }
    }, 0],
    8: [() => {
      for (let i = 1; i < 6; i++) {
        PlaceZombie(oMembraneZombie, i, 11, 0);
        oSym.addTask(1000, PlaceZombie, [oMakeRifterZombie, i, 11, 0]);
        oSym.addTask(1700, PlaceZombie, [oStrollZombie, i, 11, 0]);
      }
    }, 0],
    9: [() => {
      oMiniGames.IceStorm(1, 5, 6);

      for (let i = 1; i < 6; i++) {
        PlaceZombie(oSkatingZombie, i, 11);
        oSym.addTask(500, PlaceZombie, [oZomboni, i, 11, 0]);
      }
    }, 0]
  },
  FlagToSumNum: {
    a1: [1, 3, 4, 7, 8, 9, 10],
    a2: [1, 3, 10, 19, 30, 33, 40]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, 'Season_W3');
      }

    });
  }
});