/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oIceAloe, oRadish, oSnowPea, oRepeater, oJalapeno, oCherryBomb],
  ZName: [oBucketheadZombie, oZombie, oImp, oMakeRifterZombie, oMembraneZombie, oSadakoZombie, oCaskZombie, oZomboni, oPushIceImp, oSkatingZombie],
  CanSelectCard: 0,
  LevelName: `${$__language_Array__["f2a0358f52387aa3bb25e136eac54322"][0]}${localStorage["JNG_TR_ACT_SPFES_2020"]}`,
  StaticCard: 0,
  DKind: 0,
  SunNum: 150,
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  backgroundImage: "images/interface/MarshJx.webp",
  backgroundMask: 'BgMask-Marsh',
  LoadAccess: a => {
    for (let i = 1; i < 6; i++) {
      if (i % 2) {
        CustomSpecial(oZombiePlusBloodObs, i, 6);
      } else {
        CustomSpecial(oZombieComeOnObs, i, 8);
      }
    }

    oSym.addTask(90, a, [0]);
  },
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oBucketheadZombie, 1, 2], [oZombie, 1, 2], [oImp, 1, 1], [oMakeRifterZombie, 4, 3], [oMembraneZombie, 2, 4], [oSadakoZombie, 1, 1], [oCaskZombie, 2, 4], [oZomboni, 1, 8], [oPushIceImp, 3, 3], [oSkatingZombie, 1, 4]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [1, 2, 3, 4, 5, 6, 7],
    a2: [5, 8, 10, 14, 16, 23, 32]
  },
  FlagToMonitor: {
    6: [_ => {
      PlaceZombie(oZomboni, [1, 2, 3, 4, 5].random(), 11, 0);
    }]
  },
  FlagToEnd: function () {
    localStorage["JNG_TR_ACT_SPFES_2020"] = Math.min(Number.parseInt(localStorage["JNG_TR_ACT_SPFES_2020"]) + 1, 16);
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:535px;top:200px;", EDAll, {
      onclick: e => {
        GetWin(e.target, Exitlevel(oS.Lvl, 1));
      }
    });
  }
});