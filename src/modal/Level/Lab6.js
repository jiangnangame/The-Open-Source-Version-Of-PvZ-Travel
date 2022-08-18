/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oMacintosh, oCherryBomb, oRepeater, oTorchwood],
  ZName: [oImp, oGargantuar],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["b7eb7ce711e03eca9507409c30ef4aa6"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  LoadAccess: function (callback) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["59e11637c9a3fb52b03a1dbbd9b7a949"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0000bc8546468bf97f679cb81562c5ce"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["0c878400f170bc3af1d1d557d904afd5"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["73c323c4fdd653345d6061ecbbe5d944"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["778da9633fcdd59a9a313f894565108e"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["6d426f4ddfde26ed322cd3398aa98ba4"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["77ee9d491aa5aa70d3e2b6f77cddda9c"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["c09b155fc1a8918ce6cf066889c289ac"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["0748ba8247f7a7467a9e6b551bbac3ba"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["a90e2d646ec0af9b0f7dce311d02abea"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["19ceb27cff5617e110380d25727a8e57"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["68e830081075a5f87d8b169af2ea1a94"]);
          count++;
          break;

        case 12:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    let arr = [];

    for (let i = 1; i < 6; i++) {
      arr.push(oRepeater);
    }

    for (let i = 1; i < 6; i++) {
      arr.push(oTorchwood);
    }

    for (let i = 1; i < Math.random() * 5 + 3; i++) {
      arr.push(oMacintosh);
    }

    arr = arr.shuffle();
    arr.push(oCherryBomb);

    for (let i = 1; i < Math.random() * 20 + 5; i++) {
      arr.push(oMacintosh);
    }

    for (let i = 1; i < 6; i++) {
      arr.push(oTorchwood);
    }

    arr.push(oCherryBomb);

    for (let i = 1; i < Math.random() * 20 + 40; i++) {
      arr.push(oMacintosh);
    }

    arr.push(oCherryBomb);
    oMiniGames.ConveyorBelt([oMacintosh, oRepeater], 400, 3, arr);
  }
}, {
  AZ: [[oImp, 1, 100, [1]], [oGargantuar, 2, 1]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [1, 2, 5, 9, 11],
    a2: [1, 0, 3, 6, 9, 12]
  },
  FlagToMonitor: {
    1: [_ => {
      for (let i = 1; i < 10; i++) {
        oSym.addTask(Math.random() * 600, function () {
          PlaceZombie(oImp, [1, 2, 3, 4, 5].random(), 11, 0);
        });
      }
    }]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, Exitlevel(oS.Lvl, true));
      }
    });
  }
});