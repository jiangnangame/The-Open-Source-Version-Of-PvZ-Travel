/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb2, oBambooUncle1, oFumeShroom, oScaredyShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie, oCaskZombie],
  CanSelectCard: 0,
  StaticCard: 0,
  LevelName: $__language_Array__["4f6a4bc613325abf437deccd9560a344"],
  backgroundImage: "images/interface/Fuben_Summer.webp",
  backgroundMask: 'BgMask-Summer',
  //LevelName: "浮沙迷城 第一天",
  LoadMusic: "Fuben_Summer_Ready",
  StartGameMusic: "Fuben_Summer_Fight",
  InitLawnMover: function () {},
  StartGame: function () {
    for (let C = 7, len = 10; C < len; C++) {
      CustomSpecial(oObstacle, 1, C);
      CustomSpecial(oObstacle, 3, C);
      CustomSpecial(oObstacle, 5, C);
    }

    ;
    oMiniGames.ConveyorBelt();
  },
  LoadAccess: function (a) {
    let d = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "images/interface/Dave.png", "left:0;top:81px", EDAll);

    (function fun() {
      switch (d) {
        case 0:
          DivTeach.onclick = fun;
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          innerText(DivTeach, $__language_Array__["ccf0bb1586d815ec9177ea2f0b24f1a7"]);
          d++;
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          innerText(DivTeach, $__language_Array__["715d6693883c5ad81b3444c20f78aed2"]);
          d++;
          break;

        case 2:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, a, [0]);
      }
    })();
  }
}, {
  AZ: [[oZombie, 1, 1], [oBucketheadZombie, 1, 1], [oConeheadZombie, 1, 1], [oFootballZombie, 1, 10], [oCaskZombie, 1, 1]],
  FlagNum: 13,
  FlagToSumNum: {
    a1: [3, 8, 10],
    a2: [1, 9, 11, 13]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'SelectionMap/Fuben_Autumn_SelectionMap.js');
      }
    });
  }
});