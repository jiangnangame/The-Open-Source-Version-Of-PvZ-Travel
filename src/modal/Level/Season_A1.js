/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine],
  ZName: [oZombie],
  PicArr: [...oFlowerPot.prototype.PicArr],
  CanSelectCard: 0,
  SunNum: 0,
  LevelName: $__language_Array__["8c14afb4c0023efd737c48da98fba016"],
  LoadAccess: function (a) {
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function b(d) {
      var c = $("DivTeach");

      switch (d) {
        case 0:
          PlayAudio("crazydaveshort1");
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, b, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["b78aa81388227311ff3c4d802ef8a908"]);
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, b, [2]);
            };
          }, []);
          innerText(c, "......");
          break;

        case 2:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, b, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["f1ac625727876b272fd21f18ae783551"]);
          break;

        case 3:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, b, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["6a9e842ad5b216b2995850eaeb50e0e9"]);
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
          innerText(c, $__language_Array__["b6349150c9bf7a6990d2020a05731999"]);
          break;

        case 5:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  },
  StartGame: function () {
    CustomSpecial(oObstacle3, 1, 7);
    CustomSpecial(oObstacle3, 4, 8);
    CustomSpecial(oObstacle, 3, 6);
    CustomSpecial(oObstacle, 3, 1);

    for (var i = 1; i < 6; i += 4) {
      CustomSpecial(oSunFlower, i, 1);
    }

    for (var i = 2; i < 6; i++) {
      CustomSpecial(oFlowerPot, 3, i);
    }

    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
      BeginCool();
      oS.DKind && AutoProduceSun(45);
      oSym.addTask(1200, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 6, 1]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [5, 6],
    a2: [1, 4, 10]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oFlowerPot, EDAll, null, {
      onclick: function () {
        GetNewCard(this, oFlowerPot, "Season_A2");
      }
    }));
  }
});