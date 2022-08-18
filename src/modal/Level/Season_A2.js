/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oFlowerPot, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oLight],
  ZName: [oZombie, oNewspaperZombie, oBalloonZombie, oConeheadZombie, oBucketheadZombie],
  PicArr: [...oLSP.prototype.PicArr],
  CanSelectCard: 1,
  SunNum: 50,
  LevelName: $__language_Array__["6e5069987164ff3f9435454fedb93338"],
  LoadAccess: function (a) {
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function b(d) {
      let c = $("DivTeach");

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
          innerText(c, $__language_Array__["349331d8b462cf8df41d9a23b23207ab"]);
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
          innerText(c, $__language_Array__["f33fd34ae5259d4e75bc5c28aa7dc7cd"]);
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
          innerText(c, $__language_Array__["9693aa2b7d2fc86e8b06a25de07e357c"]);
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
          innerText(c, $__language_Array__["ba59d051ed2538a47324d18e52821d1a"]);
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
          innerText(c, $__language_Array__["3e705368270e01403957aa387264ebd5"]);
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
      oS.DKind && AutoProduceSun(40);
      oSym.addTask(1200, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 2, 3], [oNewspaperZombie, 2, 3], [oBalloonZombie, 3, 1, [1, 2]], [oConeheadZombie, 2, 3], [oBucketheadZombie, 2, 3]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 3, 6, 9],
    a2: [1, 2, 10, 16, 22]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("PointerUD2", "images/interface/down.gif", "left:700px;top:280px;", EDAll);
    NewImg("imgSF", "images/Card/LSP.webp", "left:667px;top:330px;clip:rect(auto,auto,60px,auto)", EDAll, {
      onclick: function () {
        GetNewProp(this, 'images/Props/LSP/LSP.gif', $__language_Array__["a0e1c3e6e3eebdbf8377045c9ff83c7b"], $__language_Array__["2d2e9e6db59b878f44d95cb7b8e05e3b"], 'Season_A3', '150px', '350px');
      }
    });
  }
});