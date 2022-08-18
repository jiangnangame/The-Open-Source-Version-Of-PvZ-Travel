/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oCaskZombie, oBucketheadZombie, oFootballZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["d6698e26ed62b7324ee0c383807404e7"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e577e4ddb1e5a933d1f157c434e939f2"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["b1a6b589d61f69cd87d0bfad789361df"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["ec372a5d0baa25664e518d0b60771bc1"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a3263a9c76dbaa2bbca499b7d19832df"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a039d207767ec8d4ce0ecdd537e31ea9"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["c83fab03d3d87628f8753e636632e012"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["0be37aa174a56e14b34230d390b2a44c"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["86b2799c8297a20443e4b3f19281c341"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["dee7cec3df9a84b62f8bee5837134c02"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e82f33f85ced2213d2c589a7302890fb"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0967a0ef21fcb7492eefb7f7946d8330"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["b46ae52663eea956f05be012d962cc49"]);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["0f55c35db3356f8635edef260bc6c3f9"]);
          count++;
          break;

        case 13:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["08b0c4ab5f5706f24dd0ea3b42e423ab"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["5f423cec102314a617f2a381324357a2"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["a08afd5c1bd2e606feb93136bf60af1f"]);
          count++;
          break;

        case 16:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["b9cad2c6520e330da2dac6ff92d05a87"]);
          count++;
          break;

        case 17:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, '……');
          count++;
          break;

        case 18:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["da2291b3f6d8909661bea644689abe4b"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 19:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["29d5ad336e029252197c238bc2abfc41"]);
          count++;
          break;

        case 20:
          ClearChild(DivTeach, dDave);
          ClearChild(effect);
          oSym.addTask(30, callback);
      }
    })();
  }
}, {
  AZ: [[oZombie, 2, 3], [oConeheadZombie, 3, 5], [oCaskZombie, 1, 1, [1]], [oBucketheadZombie, 1, 10], [oFootballZombie, 1, 15, [15]]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [3, 6, 8, 11],
    a2: [1, 3, 5, 7, 13]
  }
});