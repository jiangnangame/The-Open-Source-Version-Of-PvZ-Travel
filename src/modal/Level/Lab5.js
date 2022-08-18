/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oXshooter, oKernelPult],
  ZName: [oZombie, oBucketheadZombie, oSculpture, oSculptorZombie, oConeheadZombie, oFootballZombie],
  PicArr: ["images/interface/background1.webp"],
  backgroundImage: "images/interface/background1.webp",
  backgroundMask: 'BgMask-Tutorial',
  CanSelectCard: 0,
  LevelName: $__language_Array__["85a3956b0ec9cf02de01a56b1c0f4588"],
  StaticCard: 0,
  LoadMusic: "Bgm_Tutorial_Ready",
  ZF: [0, 0, 1, 1, 1, 0],
  StartGameMusic: "Bgm_Tutorial_Fight",
  LoadAccess: function (callback) {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b <= 5; b++) {
        (b != 3 || a != 4) && (b != 3 || a != 6) && (b != 4 || a != 5) && (b != 2 || a != 5) && (b != 3 || a != 5) && oSym.addTask(Math.random() * 90, _ => {
          let z = PlaceZombie(oSculpture, b, a);

          if (z.R == 1 || z.R == 5) {
            z.HP = 99999;
          }

          if (z.C == 2) {
            z.HP -= 300;
          }

          if (z.C == 1) {
            z.HP -= 170;
          }
        });
      }
    }

    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["f0363b7679b78643c68330727c512b64"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["1367f4b16a4e210d95b89893ffc01fcc"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["2d020064f10333aea8ec70a1390ea809"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["e7ea11d2d25b9bc0f72f079795f67c27"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["f367d90cdd5f418ad2848849a63db661"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["08e91f0c8f3c0ff9a1ba1f07053c386a"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["9161d13122ecdbee382237b90c05a674"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["ba0212ca75e7ac64239db4bd91758ef1"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a712813722de8a3a75aaa753b4893e6f"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e27027b4851cfd729a5de08d95252932"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["82609afd40acfde32d5f8155fe991abc"]);
          count++;
          break;

        case 11:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    oMiniGames.ConveyorBelt([oXshooter, oXshooter], 1200);
    PlaceZombie(oBucketheadZombie, 3, 12, 0);
  }
}, {
  AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 5], [oBucketheadZombie, 1, 6], [oFootballZombie, 1, 10, [8, 9]]],
  FlagNum: 9,
  FlagToSumNum: {
    a1: [1, 2, 4, 5, 6, 8],
    a2: [0, 0, 15, 3, 7, 10, 5]
  },
  FlagToMonitor: {
    1: [() => {
      let rand = [2, 4].random();
      PlaceZombie(oZombie, rand, 11, 0);
      PlaceZombie(oZombie, rand, 12, 0);
    }],
    2: [() => {
      PlaceZombie(oZombie, 2, 11, 0);
      PlaceZombie(oBucketheadZombie, 3, 12, 0);
      PlaceZombie(oZombie, 4, 11, 0);
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