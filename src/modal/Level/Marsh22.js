/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oConeheadZombie, oBalloonZombie, oFootballZombie, oStrollZombie, oCigarZombie, oSadakoZombie],
  PicArr: [],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["0e525acd9dc9286c559e19d692da2d61"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  LoadAccess: function (callback) {
    for (let i = 1; i < 6; i += 2) {
      CustomSpecial(oBambooUncle, i, 5);
      NewEle(0, "div", `left: 460px;top: ${70 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

    for (let i = 1; i < 6; i++) {
      CustomSpecial(oWallNut, i, 6);
    }
    /*NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll); 
    (function fun(d) {
        var b = fun,
        c = $("DivTeach");
        switch (d) {
        case 0:
            PlayAudio("crazydaveshort1");
            $("dDave").src = "images/interface/Dave.png";
            oSym.addTask(1,
            function() {
                $("dDave").src = "images/interface/Dave.png";
                c.onclick = function() {
                    oSym.addTask(1, b, [1])
                }
            },
            []);
            innerText(c, "哦……一片翠竹林……看起来可以吃……");
            break;
        case 1:
            ClearChild($("DivTeach"), $("dDave"));
            oSym.addTask(30,
            function() {
                a(0);
            })
        }
    })(0)*/


    oSym.addTask(90, callback);
  },
  StartGame: _ => oMiniGames.ProtectPlants({
    'oBambooUncle': 3
  })
}, {
  AZ: [[oConeheadZombie, 1, 1], [oBalloonZombie, 2, 5, [6, 7, 8, 9, 10, 11, 12, 13]], [oFootballZombie, 1, 1], [oStrollZombie, 2, 4, [7, 8, 9]], [oCigarZombie, 1, 1], [oSadakoZombie, 3, 1, [1, 2]]],
  FlagNum: 13,
  FlagToSumNum: {
    a1: [1, 4, 6, 8, 10, 12],
    a2: [2, 6, 8, 12, 15, 19, 26]
  },
  FlagToMonitor: {}
});