/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oScaredyShroom, oDoomShroom, oCherryBomb, oBambooUncle, oTallNut, oWallNut, oStoneFlower, oRadish, oSnowPea, oRepeater, oPuffShroom, oFlowerPot, oFumeShroom, oSporeShroom, oLSP],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oImp, oCaskZombie, oSadakoZombie, oBossA, oFootballZombie],
  CanSelectCard: 0,
  LevelName: $__language_Array__["e93651845eed74a0f6cd6eee764ad90c"],
  StaticCard: 0,
  InitLawnMover: function () {},
  StartGame: function () {
    CustomSpecial(oObstacle3, 1, 7);
    CustomSpecial(oObstacle3, 4, 8);
    CustomSpecial(oObstacle, 3, 6);
    CustomSpecial(oObstacle, 3, 1);
    oMiniGames.ConveyorBelt();
  },
  LoadAccess: function (a) {
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function fun(d) {
      var b = fun,
          c = $("DivTeach");

      switch (d) {
        case 0:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          $("dDave").src = "images/interface/Arbiter.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Arbiter.png";

            c.onclick = function () {
              oSym.addTask(1, b, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["def58aa470829bb5005fe16ce547b2d1"]);
          break;

        case 1:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          c.onclick = null;
          $("dDave").src = "images/interface/Arbiter.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Arbiter.png";

            c.onclick = function () {
              oSym.addTask(1, b, [2]);
            };
          }, []);
          innerText(c, $__language_Array__["6138c2a69defc528842bd281facfb6d5"]);
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          c.onclick = null;
          $("dDave").src = "images/interface/Arbiter.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Arbiter.png";

            c.onclick = function () {
              oSym.addTask(1, b, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["7cd8b6dc198e3526c68c18edd07fa17b"]);
          break;

        case 3:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          c.onclick = null;
          $("dDave").src = "images/interface/Arbiter.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Arbiter.png";

            c.onclick = function () {
              oSym.addTask(1, b, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["faddccfdd5d11cc301c7a991fc9b4d9c"]);
          break;

        case 4:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, b, [5]);
            };
          }, []);
          innerText(c, $__language_Array__["3227b9691b208d48cadea1aa9593c70f"]);
          break;

        case 5:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          c.onclick = null;
          $("dDave").src = "images/interface/Arbiter.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Arbiter.png";

            c.onclick = function () {
              oSym.addTask(1, b, [6]);
            };
          }, []);
          innerText(c, $__language_Array__["750166f68a0230592b83d9e6124aceae"]);
          break;

        case 6:
          PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Zomboss.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Zomboss.png";

            c.onclick = function () {
              oSym.addTask(1, b, [7]);
            };
          }, []);
          innerText(c, "...");
          break;

        case 7:
          PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Zomboss.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Zomboss.png";

            c.onclick = function () {
              oSym.addTask(1, b, [8]);
            };
          }, []);
          innerText(c, $__language_Array__["94076ef7dcc54b5519b5e7eff1eccff7"]);
          break;

        case 8:
          PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Zomboss.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Zomboss.png";

            c.onclick = function () {
              oSym.addTask(1, b, [9]);
            };
          }, []);
          innerText(c, $__language_Array__["ef4387312419eeed5175da847b5f51c3"]);
          break;

        case 9:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          });
      }
    })(0);
  }
}, {
  AZ: [[oZombie, 2, 1], [oBucketheadZombie, 2, 2], [oConeheadZombie, 2, 2], [oImp, 2, 2], [oCaskZombie, 2, 2], [oSadakoZombie, 2, 10], [oBossA, 1, 21, [21]]],
  FlagNum: 21,
  FlagToSumNum: {
    a1: [3, 5, 9, 10, 13, 15, 18, 20],
    a2: [1, 2, 3, 10, 14, 16, 19, 30, 1]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'SelectionMap/Fuben_Autumn_SelectionMap.js');
      }
    });
  }
});