/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb],
  ZName: [oStrollZombie, oCigarZombie],
  LevelName: $__language_Array__["7fc362c08f40e1bef671a7cda7eb95fd"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  LoadAccess: function (a) {
    for (let i = 1; i < 6; i++) {
      CustomSpecial(oApple, i, 1);
      NewEle(0, "div", `left: 140px;top: ${80 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

    for (let i = 1; i < 6; i += 2) {
      CustomSpecial(oApple, i, 2);
      NewEle(0, "div", `left: 220px;top: ${80 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

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
          innerText(c, $__language_Array__["261d07dac58af2c9bdea90e818ce54a6"]);
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
          innerText(c, $__language_Array__["ae917bc0745bf7fc694ff6d46e629a44"]);
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
          innerText(c, $__language_Array__["835f7eaab937329db97a5d1711174ce9"]);
          break;

        case 3:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  },
  StartGame: _ => oMiniGames.ProtectPlants({
    'oApple': 8
  })
}, {
  AZ: [[oStrollZombie, 3, 5, [5]], [oCigarZombie, 3, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [5, 7, 9, 13],
    a2: [1, 2, 6, 8, 15]
  }
});