/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oBegonia, oPepper, oIceAloe, oImitater, oMonotropa, oSpikeweed, oMiracleImitater, oJalapeno, oLSP],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oZomboni, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oIceBlock, oPushIceImp, oMembraneZombie],
  LevelName: $__language_Array__["a4d5f76e84475bc0b62cefcfbdd24dc4"],
  DKind: 0,
  LoadAccess: function (a) {
    NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
    PlayAudio('Bgm_Polar_Noise', 1);
    jngAlert.open({
      'text': $__language_Array__["c170ab89768dde70404eb7983160e5af"],
      'type': 0,
      'shade': 1,
      'nextHandler': _ => oSym.addTask(10, a)
    });
    SetStyle($("dZombie"), {
      visibility: "hidden"
    });

    for (let i = 1; i <= 5; ++i) {
      for (let j = 5; j < 10; ++j) {
        CustomSpecial(oRifter, i, j);
      }

      i % 2 == 0 && CustomSpecial(oRifter, i, 1);
    }
  },
  StartGame: function () {
    oEffects.BgParticle({
      url: "images/Props/Effect/snow_pieces.png",
      style: 'left:115px;'
    });
    SetStyle($("dZombie"), {
      visibility: "visible"
    });
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    }); //剪草机

    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor);
      BeginCool();
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(800, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
    oSym.addTask(4200, function k() {
      if (Math.random() * 2 < 1) {
        const ran = Math.floor(Math.random() * 5) + 1;
        oMiniGames.IceStorm(ran, ran, Math.floor(Math.random() * 3) + 2);
      } else {
        const def = [[1, 4], [3, 4], [4, 5], [1, 3], [3, 5], [2, 4], [1, 2], [2, 3]],
              Select = def[Math.floor(Math.random() * def.length)];
        oMiniGames.IceStorm(Select[0], Select[1], Math.floor(Math.random() * 4) + 5);
      }

      oSym.addTask(Math.random() * 1000 + 2500, k);
    });
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) if ($Z[mutation.addedNodes[i].id]) {
          if ($Z[mutation.addedNodes[i].id].isCounted) {
            SetStyle(mutation.addedNodes[i], {
              visibility: "hidden"
            });
          }
        }
      });
    });
    observer.observe(EDPZ, {
      childList: true
    });
    oSym.addTask(800, _ => {
      for (let i = 2; i <= 5; i += 2) {
        PlaceZombie(oImp, i, 11, 0);
      }
    });
    oSym.addTask(2250, _ => {
      for (let i = 1; i <= 5; i += 2) {
        PlaceZombie(oZombie, i, 11, 0);
      }
    });
    oSym.addTask(2900, _ => {
      for (let i = 2; i <= 5; i += 2) {
        PlaceZombie(oConeheadZombie, i, 11, 0);
      }
    });
    oSym.addTask(4130, _ => {
      for (let i = 1; i <= 5; i += 2) {
        PlaceZombie(oZombie, i, 11, 0);
      }
    });
    oSym.addTask(5500, _ => {
      let arr = [oZombie, oConeheadZombie, oBucketheadZombie, oImp];

      for (let i = 1; i <= 5; i++) {
        PlaceZombie(arr[Math.floor(Math.random() * arr.length)], i, 11, 0);
      }
    });
    oSym.addTask(6200, _ => {
      let arr = [oZombie, oConeheadZombie, oBucketheadZombie, oImp, oBalloonZombie];

      for (let i = 1; i <= 5; i++) {
        PlaceZombie(arr[Math.floor(Math.random() * arr.length)], i, 11, 0);
      }
    });
    oSym.addTask(7200, _ => {
      let arr = [oZombie, oConeheadZombie, oBucketheadZombie, oImp, oBalloonZombie];

      for (let i = 1; i <= 5; i++) {
        PlaceZombie(arr[Math.floor(Math.random() * arr.length)], i, 11, 0);
      }
    });
    oSym.addTask(8230, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(i % 2 ? oMakeRifterZombie : oPushIceImp, i, 11, 0);
      }
    });
    oSym.addTask(8830, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(i % 2 ? oConeheadZombie : oBucketheadZombie, i, 11, 0);
      }
    });
    oSym.addTask(10800, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oStrollZombie, i, 11, 0);
      }
    });
    oSym.addTask(11200, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oMembraneZombie, i, 11, 0);
      }
    });
    oSym.addTask(11700, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oPushIceImp, i, 11, 0);
      }
    });
    oSym.addTask(12500, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oBucketheadZombie, i, 11, 0);
      }
    });
    oSym.addTask(13200, _ => {
      for (let i = 2; i <= 5; i += 2) {
        PlaceZombie(oZomboni, i, 11, 0);
      }
    });
    oSym.addTask(13400, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oBucketheadZombie, i, 11, 0);
      }
    });
    oSym.addTask(14200, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oConeheadZombie, i, 11, 0);
      }
    });
    oSym.addTask(23600, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oMembraneZombie, i, 11, 0);
      }
    });
    oSym.addTask(15800, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oMembraneZombie, i, 11, 0);
      }
    });
    oSym.addTask(23600, _ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oZomboni, i, 11, 0);
      }
    });
  }
}, {
  AZ: [[oZomboni, 1, 10], [oMakeRifterZombie, 1, 7], [oMembraneZombie, 1, 8], [oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oBalloonZombie, 1, 4], [oNewspaperZombie, 1, 2], [oStrollZombie, 1, 3], [oFootballZombie, 1, 5], [oImp, 3, 1], [oCaskZombie, 1, 2], [oSadakoZombie, 1, 2], [oPushIceImp, 1, 6], [oCigarZombie, 1, 2]],
  FlagNum: 15,
  FlagToMonitor: {
    3: [_ => {
      oMiniGames.IceStorm(1, 5, 3);

      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oImp, i, 7, 0);
      }
    }],
    7: [_ => {
      oMiniGames.IceStorm(1, 5, 13);
    }],
    10: [_ => {
      oMiniGames.IceStorm(1, 5, 13);
    }],
    14: [_ => {
      oMiniGames.IceStorm(1, 5, 15);

      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oConeheadZombie, i, 11, 0);
        PlaceZombie(oBucketheadZombie, i, 11, 0);
        PlaceZombie(oFootballZombie, i, 11, 0);
        PlaceZombie(oStrollZombie, i, 11, 0);
        PlaceZombie(oMakeRifterZombie, i, 11, 0);
        PlaceZombie(oMakeRifterZombie, i, 11, 0);
        PlaceZombie(oMakeRifterZombie, i, 11, 0);
        PlaceZombie(oMembraneZombie, i, 11, 0);
        PlaceZombie(oMembraneZombie, i, 11, 0);
        PlaceZombie(oMembraneZombie, i, 11, 0);
      }
    }]
  },
  FlagToSumNum: {
    a1: [1, 3, 5, 8, 11, 13, 14, 15],
    a2: [1, 2, 4, 8, 10, 12, 13, 14]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, 1 + Math.round(Math.random() * 2) !== 2 ? 'Season_W5' : 'Season_EXTRA');
      }

    });
  }
});