/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oMonotropa, oAbutilonHybriden, oMiracleImitater, oJalapeno, oCherryBomb, oBambooUncle],
  ZName: [oZombie, oConeheadZombie, oNewspaperZombie, oSadakoZombie, oPushIceImp, oZomboni, oCaskZombie],
  CanSelectCard: 0,
  LevelName: `${$__language_Array__["47b8fbd8631992bb027d4df6763785fc"][0]}${localStorage["JNG_TR_ACT_SPFES_2020"]}`,
  StaticCard: 1,
  DKind: 1,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  backgroundMask: 'BgMask-Forest',
  backgroundImage: "images/interface/Forest.webp",
  LoadAccess: function (a) {
    oSym.addTask(90, function () {
      a(0); //移动场景延迟，以免切换场景太快导致玩家不适应
    });
  }
}, {
  AZ: [[oZombie, 2, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], [oConeheadZombie, 2, 2, [2, 3, 4, 6, 7, 8, 9, 11, 14]], [oNewspaperZombie, 1, 2, [2, 3, 4, 5, 6, 14, 15]], [oSadakoZombie, 2, 4, [4, 5, 6, 8, 10]], [oPushIceImp, 1, 3, [3, 5, 7, 8, 9, 11, 14]], [oZomboni, 2, 4, [4, 6, 7, 8, 10, 11, 13, 14, 15]], [oCaskZombie, 2, 2, [2, 3, 5, 7, 10, 11, 14]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    a2: [4, 7, 11, 20, 15, 21, 18, 19, 20, 25, 30, 25, 30, 35, 25]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:535px;top:200px;", EDAll, {
      onclick: e => {
        localStorage["JNG_TR_ACT_SPFES_2020"] = Math.min(Number.parseInt(localStorage["JNG_TR_ACT_SPFES_2020"]) + 1, 16);
        GetWin(e.target, Exitlevel(oS.Lvl, 1));
      }
    });
  }
});