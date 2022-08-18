/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oFlowerPot, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oLight, oLSP],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oNewspaperZombie],
  CanSelectCard: 1,
  SunNum: 50,
  LevelName: $__language_Array__["7b552d902372752be94d35cdf2a11692"],
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
          innerText(c, $__language_Array__["41760b33fa3961eb0da82c77bb66ba89"]);
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
          innerText(c, $__language_Array__["5118c1cb42fa5c680770bccc9b3b4153"]);
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
          innerText(c, $__language_Array__["1dc9fba94dfe0dd0585f4436bd348460"]);
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
          innerText(c, $__language_Array__["94a445619cd45f5cf258e4545a3ebd17"]);
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
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 2], [oBucketheadZombie, 1, 7], [oStrollZombie, 1, 5], [oNewspaperZombie, 1, 1]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [1, 5, 8],
    a2: [2, 5, 7, 9]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'Season_A4');
      }
    });
  }
});