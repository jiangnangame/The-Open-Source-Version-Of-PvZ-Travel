/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oZombie, oNewspaperZombie, oStrollZombie, oCigarZombie],
  PicArr: [],
  SunNum: 150,
  LevelName: $__language_Array__["293bc5f8ce807009a06e8ee21c5c80b9"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  LoadAccess: function (a) {
    for (let i = 1; i < 6; i++) {
      CustomSpecial(oApple, i, 1);
      NewEle(0, "div", `left: 140px;top: ${80 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

    for (let i = 1; i < 6; i++) {
      CustomSpecial(oApple, i, 2);
      NewEle(0, "div", `left: 220px;top: ${80 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

    oSym.addTask(90, a);
  },
  StartGame: _ => oMiniGames.ProtectPlants({
    'oApple': 10
  })
}, {
  AZ: [[oZombie, 3, 1, [1]], [oNewspaperZombie, 3, 1], [oStrollZombie, 3, 5], [oCigarZombie, 3, 1]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [3, 6, 10],
    a2: [1, 3, 8, 50]
  }
});