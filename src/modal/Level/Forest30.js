/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie],
  PicArr: function () {
    var a = oSunShroom.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  LevelName: $__language_Array__["ea6e3175bf5cd9893e090971c0b0cf6c"],
  CanSelectCard: 0,
  StaticCard: 0,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  FixedProps: 'disabled',
  InitLawnMover: function () {},
  StartGame: oMiniGames.ConveyorBelt,
  LoadAccess: function (a) {
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function fun(d) {
      var c = $("DivTeach");

      switch (d) {
        case 0:
          PlayAudio("crazydaveshort1");
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["fabd62306d1ef0810ca32658f2c48081"]);
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [2]);
            };
          }, []);
          innerText(c, $__language_Array__["cc35914dfb775cff068ab0af38b1bfb7"]);
          break;

        case 2:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["37a1b316088f1eb6e2099f5e4a6683f0"]);
          break;

        case 3:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  }
}, {
  AZ: [[oZombie, 2, 1, [1]], [oBucketheadZombie, 2, 3, [3]], [oConeheadZombie, 2, 6, [6]], [oBalloonZombie, 1, 10, [10]], [oFootballZombie, 1, 11, [11]], [oNewspaperZombie, 1, 12, [12]], [oStrollZombie, 1, 7, [7]], [oCigarZombie, 1, 3, [3]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [2, 6, 8, 10, 11, 12, 13, 14],
    a2: [1, 2, 4, 8, 16, 25, 35, 45, 50]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oSunShroom, EDAll));
  }
});