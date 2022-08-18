/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oJalapeno, oBegonia],
  ZName: [oStrollZombie, oSkatingZombie],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["3ee294e4ddf5b4bee12d1bda5cefa7b3"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  LoadAccess: function (a) {
    for (let x = 1; x < 10; x++) {
      for (let y = 1; y < 6; y++) {
        CustomSpecial(oRifter, y, x);
      }
    }

    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function b() {
      DivTeach.onclick = b;
      0 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["38da8256f81e0dcd5885ad036bc39c76"]), count++) : 1 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["68704556c20188d014bd79e0b48ba0fb"]), count++) : 2 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["f488b529b505aa788f63b0912039c952"]), count++) : 3 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["c3010f89f96188adcc96bad291e8ba38"]), count++) : 4 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["e8c5a293d3fdc2b2e61aac739ad64dbf"]), count++) : 5 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["0e8beb9f6950bab77d9bdd63415a2c48"]), count++) : 6 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["c14b3b678447f196c09897bec3ea9443"]), count++) : 7 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["c7235d6dc141d924fda4eaba28452529"]), count++) : 8 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["a445bf531eba693c64c67168729c9b61"]), count++) : 9 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["a2c04ff45d2fec9aad7e4c84c23d88b8"]), count++) : 10 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["68b77047b5dc29cd717890a3b13a6d17"]), count++) : 11 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["f8b0c17c270fb9a97ffa3d060d585f3b"]), count++) : 12 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["f52788b2afe91e6a909e4f73e0a4a01d"]), count++) : 13 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["a2bc5d7f6e23ea828f788fd18c50ea9a"]), count++) : 14 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["c7dc3d573ae882b666b640ebdec9a99c"]), count++) : 15 == count ? (ClearChild(DivTeach, dDave), oSym.addTask(30, a)) : void 0;
    })();
  },
  StartGame: function () {
    oMiniGames.ConveyorBelt([oJalapeno, oJalapeno, oJalapeno, oBegonia, oBegonia], 400, 2, [oJalapeno, oBegonia, oJalapeno, oJalapeno, oBegonia, oJalapeno, oBegonia, oBegonia, oJalapeno, oJalapeno, oBegonia]);
  }
}, {
  AZ: [[oStrollZombie, 3, 1], [oSkatingZombie, 2, 4, [4]]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [4, 5, 6, 7],
    a2: [1, 6, 16, 20, 40]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});