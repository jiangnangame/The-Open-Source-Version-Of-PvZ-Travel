/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oWallNut, oPotatoMine2, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb2, oTallNut, oBambooUncle, oSporeShroom, oFumeShroom, oScaredyShroom, oPuffShroom, oSunShroom, oDoomShroom, oLight],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oNewspaperZombie],
  backgroundImage: "images/interface/Fuben_Summer.webp",
  backgroundMask: 'BgMask-Summer',
  LevelName: $__language_Array__["11332c42091adad9378c9f05725199bf"],
  LoadMusic: "Fuben_Summer_Ready",
  StartGameMusic: "Fuben_Summer_Fight",
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
          innerText(c, $__language_Array__["eadfd981ace94976e4260efae21201ce"]);
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
          innerText(c, $__language_Array__["c476510878cb714928815fd9158c8380"]);
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
          innerText(c, $__language_Array__["3caeda17b76a389a6f1c1aee328cd96f"]);
          break;

        case 3:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a(0);
          });
      }
    })(0);
  },
  StartGame: function () {
    for (let C = 7, len = 10; C < len; C++) {
      CustomSpecial(oObstacle, 1, C);
      CustomSpecial(oObstacle, 3, C);
      CustomSpecial(oObstacle, 5, C);
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
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 5, 1], [oConeheadZombie, 3, 1], [oBucketheadZombie, 1, 2, [2]], [oCaskZombie, 3, 5, [5]], [oNewspaperZombie, 1, 5]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [1, 5, 8, 13, 15],
    a2: [1, 3, 5, 7, 9]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'Season_S4');
      }
    });
  }
});