/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oSadakoZombie, oStrollZombie],
  PicArr: function () {
    var a = oScaredyShroom.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["cd5c98beaf2b38bb1441679fde8ca191"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    NewEle(0, "div", "left:455px;", {
      className: 'FlowerBed'
    }, FightingScene);
    let flower2 = NewEle(0, "div", "left:535px;top:380px;clip:rect(auto,auto,100px,auto)", {
      className: 'FlowerBed'
    }, FightingScene);

    for (let C = 1, len = 6; C < len; C++) {
      CustomSpecial(oObstacle2, C, 5);
    }

    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["2c149e9bada779f4515aec928f8c658e"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["481c198357eb8f512cd29a72fc8b8c62"]);
          count++;
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["3971a37a8c7baa6c0a1432f1c21580ad"]);
          count++;
          break;

        case 3:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["671e0b9ba2d2627867c7eae943620f31"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["843dd768198c93b035bee92b8147e5dc"]);
          count++;
          break;

        case 5:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["8d9c5b585596eaca6904732c492cd980"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["f2b6aeba73fe50a3501189380aab6d28"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["604a7aac6c01eb15a1aa2465eab90607"]);
          count++;
          break;

        case 8:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["0b9b0ae078658f31f69b23bc48c2ad2d"]);
          count++;
          break;

        case 9:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["b844aafcbdce2322c158ad8d4f47f759"]);
          count++;
          break;

        case 10:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["dd0c8e66d764601d6ecffc41aefd38b2"]);
          count++;
          break;

        case 11:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["f7c65a8abd281775918ca3325c4af32c"]);
          count++;
          break;

        case 12:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["344ac9e7b06c03151b6e70192549e1ad"]);
          count++;
          break;

        case 13:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0a239b998cccde333ab2a687b4d0fd13"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["6f4af49d330d68b867c416eaecebcfd0"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["37917d9a2a3c399ce574fc33b3a2cb84"]);
          count++;
          break;

        case 16:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["80efb5dbd20b33a1c5d50f6836a94b2f"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 17:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["9953184e9420849ea39ece3d533460c7"]);
          ClearChild(flower2);
          count++;
          break;

        case 18:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["cc2ad9fc32d9909b57fb5ee6fa24f4be"]);
          count++;
          break;

        case 19:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["f6ea2f707e145b3754d9d83014ab5a41"]);
          count++;
          break;

        case 20:
          ClearChild(DivTeach, dDave);
          ClearChild(effect);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: _ => {
    PlaySubtitle($__language_Array__["06eb602b20a4783bbbf384b97348b480"], 400);
    oMiniGames.ProtectPlants({
      'oObstacle2': 5
    });
  }
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 1, 5], [oSadakoZombie, 1, 6], [oBucketheadZombie, 1, 8], [oStrollZombie, 1, 9, [9, 11]]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [6, 8, 11],
    a2: [1, 4, 8, 14]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oScaredyShroom, EDAll));
  }
});