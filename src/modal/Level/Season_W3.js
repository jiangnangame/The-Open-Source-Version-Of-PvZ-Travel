/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSnowPea, oRepeater, oTallNut, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBegonia, oPepper, oIceAloe, oSpikeweed, oCherryBomb],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oZomboni, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oIceBlock, oPushIceImp, oMembraneZombie],
  LevelName: $__language_Array__["5353e1a6d520ed53e06d46b0b961a8ea"],
  StaticCard: 0,
  CanSelectCard: 0,
  LoadAccess: function (a) {
    NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
    PlayAudio('Bgm_Polar_Noise', 1);

    for (let i = 1; i <= 5; i++) {
      for (let j = 4; j <= 9; j++) {
        CustomSpecial(oRifter, i, j);
      }
    }

    oSym.addTask(30, a, [0]);
  },
  StartGame: function () {
    oEffects.BgParticle({
      url: "images/Props/Effect/snow_pieces.png",
      style: 'left:115px;'
    });
    oSym.addTask(6800, function k() {
      if (Math.random() * 3 < 2) {
        const ran = Math.floor(Math.random() * 5) + 1;
        oMiniGames.IceStorm(ran, ran, Math.floor(Math.random() * 2));
      } else {
        const def = [[1, 4], [3, 4], [4, 5], [1, 3], [3, 5], [2, 4], [1, 2], [2, 3]],
              Select = def[Math.floor(Math.random() * def.length)];
        oMiniGames.IceStorm(Select[0], Select[1], Math.floor(Math.random() * 3));
      }

      oSym.addTask(Math.random() * 1000 + 4000, k);
    });
    oSym.addTask(500, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oPushIceImp, o, 11, 0);
    }), oSym.addTask(1900, _ => {
      for (let o = 1; o <= 5; o++) o % 2 ? PlaceZombie(oImp, o, 11, 0) : PlaceZombie(oPushIceImp, o, 11, 0);
    }), oSym.addTask(2800, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oConeheadZombie, o, 11, 0);
    }), oSym.addTask(3500, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oZombie, o, 11, 0);
    }), oSym.addTask(4750, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oSkatingZombie, o, 11, 0);
    }), oSym.addTask(5250, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oPushIceImp, o, 11, 0);
    }), oSym.addTask(6200, _ => {
      for (let o = 2; o <= 5; o += 2) PlaceZombie(oCigarZombie, o, 11, 0);
    }), oSym.addTask(6700, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oStrollZombie, o, 11, 0);
    }), oSym.addTask(7500, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oBalloonZombie, o, 11, 0);
    }), oSym.addTask(8500, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oConeheadZombie, o, 11, 0);
    }), oSym.addTask(9200, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oMakeRifterZombie, o, 11, 0);
    }), oSym.addTask(10300, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oSkatingZombie, o, 11, 0);
    }), oSym.addTask(10800, _ => {
      for (let o = 1; o <= 5; o += 2) PlaceZombie(oSadakoZombie, o, 11, 0);
    }), oSym.addTask(11300, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oCaskZombie, o, 11, 0);
    }), oSym.addTask(12800, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oBucketheadZombie, o, 11, 0);
    }), oSym.addTask(13500, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oStrollZombie, o, 11, 0), PlaceZombie(oStrollZombie, o, 11, 0);
    }), oSym.addTask(13900, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oMembraneZombie, o, 11, 0);
    }), oSym.addTask(14300, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oPushIceImp, o, 11, 0);
    }), oSym.addTask(14500, _ => {
      oMiniGames.IceStorm(1, 5);

      for (let o = 1; o <= 5; o++) for (let a = 8; a <= 9; a++) CustomSpecial(oRifter, o, a);
    }), oSym.addTask(15400, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oSkatingZombie, o, 11, 0);
    }), oSym.addTask(17200, _ => {
      for (let o = 1; o <= 5; o++) PlaceZombie(oConeheadZombie, o, 11, 0);
    });
    let arr = oS.PName.slice(0, -2);
    oMiniGames.ConveyorBelt(arr, 500, 2, [oFumeShroom, oIceAloe, oRepeater, oSpikeweed, oRepeater, oCherryBomb, "random", "random", "random", "random", "random", oCherryBomb, "random", "random", "random", "random", "random", oIceAloe, "random", "random", "random", "random", "random", "random", "random", "random", oCherryBomb]);
  }
}, {
  AZ: [[oZomboni, 1, 10, [10, 11]], [oMakeRifterZombie, 1, 7], [oMembraneZombie, 1, 8], [oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oBalloonZombie, 1, 2], [oNewspaperZombie, 1, 2], [oStrollZombie, 1, 3], [oFootballZombie, 1, 5], [oImp, 3, 1], [oCaskZombie, 1, 2], [oSadakoZombie, 1, 2], [oPushIceImp, 1, 6], [oCigarZombie, 1, 2]],
  FlagNum: 12,
  FlagToMonitor: {
    11: [_ => {
      for (let i = 1; i <= 5; i++) {
        PlaceZombie(oZomboni, i, 11, 0);
      }
    }]
  },
  FlagToSumNum: {
    a1: [8, 12],
    a2: [0, 32]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, 'Season_W4');
      }

    });
  }
});