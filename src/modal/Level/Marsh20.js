/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oDoomShroom],
  ZName: [oConeheadZombie, oBalloonZombie, oNewspaperZombie, oFootballZombie, oStrollZombie, oBucketheadZombie, oImp, oCaskZombie, oSadakoZombie],
  PicArr: function () {
    var a = oDoomShroom.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  CanSelectCard: 0,
  LevelName: $__language_Array__["c110fb0c8ec56fbbe489bed0e63ff63f"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  FixedProps: 'disabled',
  StartGame: oMiniGames.ConveyorBelt,
  LoadAccess: function (callback) {
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["49a44ac96e9b1518d37d740c6675f29b"]);
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["6c5826900dab709f31b8da2dc75e5fee"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["2300298e945f76df34e0fd92d7b4f4a9"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["ae9b28d61224a785592a1a3699c98bfd"]);
          count++;
          break;

        case 4:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["8e4f9b1528d2c381c74b46417562003d"]);
          count++;
          break;

        case 5:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["30c0053da764f6546f1032077eaab135"]);
          count++;
          break;

        case 6:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["6739a74a04de700675cfe7c33deb375f"]);
          count++;
          break;

        case 7:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["af4fd27b5332ddfcf5118ae3fa6aa307"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 8:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["06588cb09604e993d4f95b7526c07d65"]);
          count++;
          break;

        case 9:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["612acc311e391c700d0747ec3d0286a0"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["67e86f7edb48ec87d8180fa12a2e0bc1"]);
          count++;
          break;

        case 11:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["250fac827623c53b275a99e706dd0a0a"]);
          count++;
          break;

        case 12:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["8aad0eddd9ec84ec9eb4654f724dd398"]);
          count++;
          break;

        case 13:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["5e04533844fbca8189b17a9f277e9b35"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["39adf2e766be6c9307ce6f4c170ec76c"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["4d3ae07060620125e29552c8ac04b4c3"]);
          count++;
          break;

        case 16:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["70c433791757993913482716772a4870"]);
          count++;
          break;

        case 17:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["8b209970596e1e7e7a0af7cb80d007b3"]);
          count++;
          break;

        case 18:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["f06eac86f94c9cc3fdb25aaf74b1dd05"]);
          count++;
          break;

        case 19:
          ClearChild(DivTeach, dDave);
          oEffects.fadeOut(effect, 'slow', ele => {
            ClearChild(ele);
            callback();
          });
      }
    })();
  }
}, {
  AZ: [[oBalloonZombie, 2, 2], [oConeheadZombie, 2, 2], [oNewspaperZombie, 2, 2], [oFootballZombie, 2, 1], [oImp, 2, 1, [1]], [oStrollZombie, 2, 2], [oCaskZombie, 2, 2], [oBucketheadZombie, 2, 1], [oSadakoZombie, 2, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [10],
    a2: [225, 400]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oDoomShroom, EDAll));
  }
});