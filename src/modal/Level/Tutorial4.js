/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
  PicArr: function () {
    return ["images/interface/background1unsodded2.webp", "images/interface/background1.webp", "images/interface/CarKey.png"];
  }(),
  backgroundImage: "images/interface/background1unsodded2.webp",
  CanSelectCard: 0,
  LevelName: $__language_Array__["4a79340a9b123e2e4aeb1e49992affb6"],
  LvlEName: 4,
  SunNum: 150,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
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
          innerText(c, $__language_Array__["b6d61bf49eed9c3521d74f7bd20b422f"]);
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
          innerText(c, $__language_Array__["046b46bc2c40a90350426e9f66b9c4e5"]);
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
          innerText(c, $__language_Array__["7472593633cb2da00509fb26d407eed0"]);
          break;

        case 3:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          }, []);
      }
    })(0);
  },
  StartGame: function () {
    NewEle("sod3row", "div", "position:absolute;left:-115px;top:0;height:600px;width:264px;z-index:0;background:url(images/interface/background1.webp);over-flow:hidden", 0, EDPZ);
    NewImg("SodRoll_1", "images/interface/SodRoll.png", "left:122px;top:48px;z-index:1", EDPZ);
    NewImg("SodRoll_2", "images/interface/SodRoll.png", "left:122px;top:440px;z-index:1", EDPZ);

    (function fun(e, h, b, d, c, g, a, f) {
      e += 15;
      h += 16;
      d += 16;
      $("sod3row").style.width = e + "px";
      SetStyle($("SodRoll_1"), {
        left: h + "px",
        width: --b + "px",
        height: "141px"
      });
      SetStyle($("SodRoll_2"), {
        left: h + "px",
        width: b + "px",
        height: "141px"
      });
      e < 990 ? oSym.addTask(3, fun, [e, h, b, d, c, g, a, f]) : (ClearChild($("SodRoll_1"), $("SodRoll_2")), function () {
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        oS.InitLawnMover();
        oS.ControlFlagmeter && oFlagContent.init({
          fullValue: oP.FlagNum - 1,
          curValue: 0
        });
        PrepareGrowPlants(function () {
          oP.Monitor();
          BeginCool();
          SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
          AutoProduceSun(50);
          oSym.addTask(1500, function () {
            oP.AddZombiesFlag();
            oS.ControlFlagmeter && oFlagContent.show();
          }, []);
        });
      }());
    })(283, 122, 68, 117, 73, 71, 131, 511);
  }
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 3, 7], [oBucketheadZombie, 1, 9, [9]]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [5, 7, 8],
    a2: [1, 4, 8, 1]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:100px;height:80px;", {}, EDAll);
    let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:53px;top:-50px;", dom);
    NewImg("imgSF", "images/interface/CarKey.png", "left:0px;top:0px;clip:rect(auto,auto,80px,auto)", dom, {
      onclick: function () {
        ClearChild(dom2);
        GetNewProp(this, 'CarKey', $__language_Array__["38e3f30133993accab2cb06d6e952845"], $__language_Array__["dd8062125104febc79bb947d2eaa690f"], 'Forest1', '200px', '400px');
      }
    });
    ShowWinItem(dom);
  }
});