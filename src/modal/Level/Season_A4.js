/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oFlowerPot, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oLight, oLSP],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oNewspaperZombie, oFootballZombie, oStrollZombie, oCigarZombie, oBucketheadZombie],
  CanSelectCard: 1,
  LevelName: $__language_Array__["ff6fc759e6669a67ba0bfee483281ba5"],
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
          innerText(c, $__language_Array__["036a7bc766294a29d9021ae6d5a0c118"]);
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
          innerText(c, $__language_Array__["a1a63b12b71eecd61c7de44b1bdb8c2e"]);
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
          innerText(c, $__language_Array__["dc498768272387bf22e71deced3ab88f"]);
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
          innerText(c, $__language_Array__["5c61ac5b4824863777807ed63238edbe"]);
          break;

        case 4:
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
      oS.DKind && AutoProduceSun(35);
      oSym.addTask(1200, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 2], [oNewspaperZombie, 2, 2], [oFootballZombie, 1, 2], [oBalloonZombie, 2, 2], [oStrollZombie, 2, 10], [oCigarZombie, 2, 2], [oBucketheadZombie, 2, 2]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [10],
    a2: [10]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'Season_A5');
      }
    });
  }
});