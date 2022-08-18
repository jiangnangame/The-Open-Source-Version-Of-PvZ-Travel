/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oRadish, oSnowPea, oRepeater, oStoneFlower, oFumeShroom, oSporeShroom, oCherryBomb, oSpikeweed, oKiwibeast, oPepper, oIceAloe],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oCigarZombie, oCaskZombie, oSadakoZombie, oBossA, oFootballZombie, oMakeRifterZombie, oPushIceImp],
  PicArr: ["images/interface/background1unsodded2.webp"],
  backgroundImage: "images/interface/background1unsodded2.webp",
  CanSelectCard: 0,
  LevelName: `${$__language_Array__["1e30abcf234d31cdd13ec8158bb3f4c6"][0]}${localStorage["JNG_TR_ACT_SPFES_2020"]}`,
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  InitLawnMover: function () {},
  LF: [0, 0, 1, 1, 1, 0],
  StartGame: oMiniGames.ConveyorBelt,
  backgroundMask: 'BgMask-Tutorial'
}, {
  AZ: [[oZombie, 2, 1], [oBucketheadZombie, 2, 1], [oConeheadZombie, 2, 1], [oCigarZombie, 2, 1], [oCaskZombie, 2, 1], [oSadakoZombie, 2, 1], [oMakeRifterZombie, 2, 1], [oPushIceImp, 2, 3], [oBossA, 1, 11, [11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [3, 5, 9],
    a2: [10, 12, 16, 1]
  },
  FlagToMonitor: {
    10: [HelloBOSS, 0]
  },
  FlagToEnd: function () {
    localStorage["JNG_TR_ACT_SPFES_2020"] = Math.min(Number.parseInt(localStorage["JNG_TR_ACT_SPFES_2020"]) + 1, 16);
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:535px;top:200px;", EDAll, {
      onclick: e => {
        GetWin(e.target, "Service/index.js");
      }
    });
  }
});