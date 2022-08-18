/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oAbutilonHybriden],
  ZName: [oZombie, oBalloonZombie],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["f3d88db1c817063230e2d82456e0e8f9"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",

  LoadAccess(a) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function b() {
      DivTeach.onclick = b;
      0 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["5ea9a3009f909a6377a857201de991a3"]), count++) : 1 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["16cc790f0d252681e8e42dc7caf525c8"]), count++) : 2 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["06b49438c09739496b4f69b0dd2964c4"]), count++) : 3 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["6f935cd8585470bc8841c220fd6ae180"]), count++) : 4 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["683510469afdd8d468965eaa839d998e"]), count++) : 5 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["82d578e497c4090501e3404f3347feaa"]), count++) : 6 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["8e088401c93617517153b96cbf7476c3"]), count++) : 7 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["13e7e61d16f7ea4cb94f4080d218ee9f"]), count++) : 8 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["73e88318eaf54fafe9803a372cc2630e"]), count++) : 9 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["a151718a7cb0ade000db4bb6a65e4434"]), count++) : 10 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["2014b130a954da500866feb04afd4245"]), count++) : 11 == count ? (ClearChild(DivTeach, dDave), oSym.addTask(30, a)) : void 0;
    })();
  },

  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oZombie, 2, 3], [oBalloonZombie, 3, 1, [1, 2]]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [3],
    a2: [2, 5]
  },
  FlagToMonitor: {},

  FlagToEnd() {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick() {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }

    });
  }

});