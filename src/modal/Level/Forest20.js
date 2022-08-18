/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oCherryBomb],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oNewspaperZombie, oFootballZombie, oStrollZombie, oCigarZombie, oBucketheadZombie],
  LevelName: $__language_Array__["9e26025effa2761f9cf6c6a336b49fa9"],
  CanSelectCard: 0,
  StaticCard: 0,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  StartGame: _ => oMiniGames.ConveyorBelt(undefined, 1800, 20),
  FixedProps: 'disabled',
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
              oSym.addTask(10, fun, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["3e048940db0f2f0b85a93e7aa93606d2"]);
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [2]);
            };
          }, []);
          innerText(c, $__language_Array__["b0fb681d8eab178d7d2447fd652a4410"]);
          break;

        case 2:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["9e7453d590a7586377fc8503fcaea58e"]);
          break;

        case 3:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["45c66ffc8edb30e84fc61bfe629cb893"]);
          break;

        case 4:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [5]);
            };
          }, []);
          innerText(c, $__language_Array__["cbe0e09933d6fb3bd9ebb9535f0cd218"]);
          break;

        case 5:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [6]);
            };
          }, []);
          innerText(c, $__language_Array__["cffdb3633279b680e074965c1dff37fa"]);
          break;

        case 6:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 2], [oNewspaperZombie, 2, 2], [oFootballZombie, 1, 2], [oBalloonZombie, 2, 2], [oStrollZombie, 2, 10], [oCigarZombie, 2, 2], [oBucketheadZombie, 2, 2]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [10],
    a2: [10]
  },

  FlagToEnd() {
    localStorage.JNG_TR_PropsUnlock = JSON.stringify(Object.assign(localStorage.JNG_TR_PropsUnlock ? JSON.parse(localStorage.JNG_TR_PropsUnlock) : {}, {
      "cherry_bomb": 1
    }));
    oS.DefaultFlagToEnd();
  }

});