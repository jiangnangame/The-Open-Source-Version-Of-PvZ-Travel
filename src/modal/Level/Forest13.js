/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oBalloonZombie, oNewspaperZombie],
  PicArr: [],
  SunNum: 150,
  LevelName: $__language_Array__["2a497d664caad6e068abc6f3d2b908a8"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight_Challenge",
  LoadAccess: function (a) {
    CustomSpecial(oApple, 1, 1);
    CustomSpecial(oApple, 3, 1);
    CustomSpecial(oApple, 5, 1);
    NewEle(0, "div", "left: 140px;top: 80px;", {
      className: 'sos'
    }, FightingScene);
    NewEle(0, "div", "left: 140px;top: 280px;", {
      className: 'sos'
    }, FightingScene);
    NewEle(0, "div", "left: 140px;top: 480px;", {
      className: 'sos'
    }, FightingScene);
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function fun(d) {
      let c = $("DivTeach");

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
          innerText(c, $__language_Array__["70ca952211e76dcdb0aa74a4642e40b5"]);
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
          innerText(c, $__language_Array__["0ce4c8fe0e6773651d12af0a329f5fa8"]);
          break;

        case 3:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(20, a);
      }
    })(0);
  },
  StartGame: _ => oMiniGames.ProtectPlants({
    'oApple': 3
  })
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 2], [oBucketheadZombie, 2, 12], [oStrollZombie, 1, 10], [oBalloonZombie, 1, 5], [oNewspaperZombie, 1, 10]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [5, 9, 13],
    a2: [1, 6, 8, 15]
  }
});