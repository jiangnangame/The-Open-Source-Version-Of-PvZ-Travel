/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower],
  ZName: [oZombie, oNewspaperZombie, oBalloonZombie, oConeheadZombie],
  PicArr: function () {
    var a = oRadish.prototype,
        b = a.PicArr;
    return ["images/interface/Forest.webp", b[a.CardGif], b[a.StaticGif]];
  }(),
  SunNum: 150,
  LevelName: $__language_Array__["898791412585f5f2fed1fe9a4ae5e2d3"],
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
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
          innerText(c, $__language_Array__["222e1a9359175da1322d2641fecfb6d0"]);
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
          innerText(c, $__language_Array__["02a84f374f86c1cd791c053210131fb3"]);
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
          innerText(c, $__language_Array__["3a6da6f25199bb429317b086bc935728"]);
          break;

        case 3:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["a2add8b54936b5cbf3650f0f090822b0"]);
          break;

        case 4:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  }
}, {
  AZ: [[oZombie, 3, 1], [oNewspaperZombie, 2, 1], [oBalloonZombie, 1, 8, [8]], [oConeheadZombie, 2, 1]],
  FlagNum: 13,
  FlagToSumNum: {
    a1: [4, 7, 9, 11],
    a2: [1, 3, 6, 10, 12]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oRadish, EDAll));
  }
});