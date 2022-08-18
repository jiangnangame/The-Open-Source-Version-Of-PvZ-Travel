/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oBucketheadZombie, oSadakoZombie, oStrollZombie, oImp, oFootballZombie, oBalloonZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["68b840cb4d4fb3addf4e5764e91413ce"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  StartGame: _ => oMiniGames.ProtectPlants({
    'oObstacle2': 5
  }),
  LoadAccess: function (a) {
    NewEle(0, "div", "left:215px;", {
      className: 'Mould'
    }, FightingScene);
    NewEle(0, "div", "left:455px;", {
      className: 'FlowerBed'
    }, FightingScene);

    for (let C = 1, len = 6; C < len; C++) {
      CustomSpecial(oObstacle, C, 2);
      CustomSpecial(oObstacle2, C, 5);
    }

    ;
    oSym.addTask(90, a);
  }
}, {
  AZ: [[oZombie, 4, 1], [oBucketheadZombie, 2, 1], [oSadakoZombie, 1, 11, [11, 20]], [oStrollZombie, 2, 5], [oImp, 3, 1], [oFootballZombie, 1, 11, [11, 20]], [oBalloonZombie, 1, 11, [11, 20]]],
  FlagNum: 20,
  FlagToSumNum: {
    a1: [1, 3, 6, 9, 10, 13, 15, 19],
    a2: [1, 3, 6, 7, 20, 10, 13, 16, 30]
  }
});