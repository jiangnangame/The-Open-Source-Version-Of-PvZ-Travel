/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine],
  ZName: [oZombie],
  PicArr: function () {
    var a = oStoneFlower.prototype,
        b = a.PicArr;
    return ["images/interface/Forest.webp", b[a.CardGif], b[a.StaticGif]];
  }(),
  SunNum: 150,
  LevelName: $__language_Array__["b66e38f87670e3de0d0c2e1908b16f5e"],
  LvlEName: 6,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  LoadAccess: function (a) {
    for (let i = 1; i < 6; i += 2) {
      //i初始时必须为1，不然植物会跑到-1行
      CustomSpecial(oSunFlower, i, 1);
    }

    NewImg("dDave", "", "", EDAll);
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
              oSym.addTask(1, fun, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["db9557bbfd195af55a23b468a808d5de"]);
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
          innerText(c, $__language_Array__["1ce47058788c71681443e2d073fe92a1"]);
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
          innerText(c, $__language_Array__["083d229c8ef873a27f157621e5a8a320"]);
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
          innerText(c, $__language_Array__["39770706343af310814726f3107944bd"]);
          break;

        case 4:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(1, fun, [5]);
            };
          }, []);
          innerText(c, $__language_Array__["563db1e5547d613305ead0569bd9a445"]);
          break;

        case 5:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          });
      }
    })(0);
  },

  StartGame() {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(_ => {
      oP.Monitor();
      PlaySubtitle($__language_Array__["dac07b16e04a525f91d3be50361d4fab"]);
      NewImg("PointerUD2", "images/interface/left.gif", "top: 5px;left: 720px;transform: scaleX(-1);", FightingScene);
      BeginCool();
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(1500, _ => {
        $('PointerUD2') && (PlaySubtitle(), ClearChild($('PointerUD2')));
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      });
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
    let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:100px;height:60px;", {}, EDAll);
    let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:30px;top:-50px;", dom);
    GetPlantCardDom(oStoneFlower, dom, null, {
      onclick: function () {
        ClearChild(dom2);
        GetNewCard(dom, oStoneFlower, NextLevel());
      }
    });
    ShowWinItem(dom);
  }
});