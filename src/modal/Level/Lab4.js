/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oMiracleImitater],
  ZName: [oZombie, oStrollZombie, oMakeRifterZombie, oSkatingZombie],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["fac581c2a231f51e4c27823b6f8dad30"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  LoadAccess: function (a) {
    for (let a = 1; a < 10; a++) {
      for (let b = a % 2 ? 1 : 2; b < 6; b += 2) {
        CustomSpecial(oRifter, b, a);
      }
    }

    CustomSpecial(oApple, 2, 1);
    CustomSpecial(oApple, 4, 1);
    CustomSpecial(oApple, 3, 2);
    NewEle(0, "div", "left: 135px;top: 180px;", {
      className: 'sos'
    }, FightingScene);
    NewEle(0, "div", "left: 135px;top: 380px;", {
      className: 'sos'
    }, FightingScene);
    NewEle(0, "div", "left: 215px;top: 278px;", {
      className: 'sos'
    }, FightingScene);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function b() {
      DivTeach.onclick = b;
      0 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["c5eb5ffee327f1b0f57cc637def2ca86"]), count++) : 1 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["f33d258858c4853d832440eb8dfe4a6c"]), count++) : 2 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["5807b33fd7202a1e8e323d03f7b311de"]), count++) : 3 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["33ec43d6603974196442b9b8f4dd9f89"]), count++) : 4 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["f3331df2c1fc30334c991259296f6e0d"]), count++) : 5 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["c1218d6bb7d2e705d40df7b2413b8f2c"]), count++) : 6 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["559aabe10140173b5dc0d4282ceca151"]), count++) : 7 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["675c7b31b125f129ec0da25a7bd15af2"]), count++) : 8 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["ebb9bb2e18e55afd9fe4ed08dcce7857"]), count++) : 9 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["444fe46d3ab7a8ac4df2d6e02227116a"]), count++) : 10 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["39b10ac0561dd3379d5956d751382cc9"]), count++) : 11 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["345f91e206bf73d951e41da28601cf38"]), count++) : 12 == count ? (ClearChild(DivTeach, dDave), oSym.addTask(30, a)) : void 0;
    })();
  },
  StartGame: function () {
    oMiniGames.ConveyorBelt();

    (function fun233() {
      var N = 0;

      for (let v in $P) {
        $P[v].EName == 'oApple' && ++N;
      }

      ;
      N > 2 ? oSym.addTask(200, fun233) : toOver(2);
    })();
  }
}, {
  AZ: [[oZombie, 1, 1], [oStrollZombie, 1, 5], [oMakeRifterZombie, 1, 8, [8, 9]], [oSkatingZombie, 1, 9, [9]]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [2, 3, 5, 6, 8],
    a2: [1, 2, 3, 6, 9, 18]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});