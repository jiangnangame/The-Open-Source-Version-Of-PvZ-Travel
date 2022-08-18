/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPumpkinHead, oPeashooter],
  ZName: [oZombie],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["c6e8d0928eee950c3e64fe00e0c97767"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  LoadAccess: function (a) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function b() {
      DivTeach.onclick = b;
      0 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["262c946d3907a7275ed4bb93735caf4c"]), count++) : 1 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["d89d26a8cbec0f731b4fcf6c0a672886"]), count++) : 2 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["f6bb0d7e11518dddbb8a15fd831c2a88"]), count++) : 3 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss2"), innerText(DivTeach, $__language_Array__["07e1209c26cb672bc399c90bdfac8b24"]), count++) : 4 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["f5816bf1786b31a1057dc92a830066b2"]), count++) : 5 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["51e86335316911d861a534c3260063d6"]), count++) : 6 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss1"), innerText(DivTeach, $__language_Array__["4b693071f35f2538892ceb1069ec5f9d"]), count++) : 7 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["cae635cbcfd3c08ca1d7907463cae64f"]), count++) : 8 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["21d990cb76c95ae51b867990710fa4b0"]), count++) : 9 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["3ebd5bef0e37bc376853acfc52b9bd1d"]), count++) : 10 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["192d7ccf7f657f917eaac2759a244700"]), count++) : 11 == count ? (dDave.src = "images/interface/Black_Dave.png", PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`), innerText(DivTeach, $__language_Array__["e6f0319bd409112d3b395f7c9f92e950"]), count++) : 12 == count ? (dDave.src = "images/interface/Zomboss.png", PlayAudio("Zomboss3"), innerText(DivTeach, $__language_Array__["bb7f09fc7055dc99cd3bda8304fcb0b7"]), count++) : 13 == count ? (ClearChild(DivTeach, dDave), oSym.addTask(30, a)) : void 0;
    })();
  },
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oZombie, 6, 1]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [3, 6],
    a2: [1, 6, 10]
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