/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oNewspaperZombie, oSadakoZombie, oCigarZombie, oStrollZombie, oBucketheadZombie, oCaskZombie],
  PicArr: function () {
    var a = oSporeShroom.prototype,
        b = a.PicArr;
    return ["images/interface/Zomboss.png", b[a.CardGif], b[a.StaticGif]];
  }(),
  AudioArr: ["Zomboss1", "Zomboss2", "Zomboss3"],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["4752d4915e280792bfc9e817810c9968"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    for (let i = 2; i < 5; i++) {
      CustomSpecial(oSporeShroom, i, 7);
      NewEle(0, "div", `left: 620px;top: ${80 + 100 * (i - 1)}px;`, {
        className: 'sos'
      }, FightingScene);
    }

    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["67b33c067c5c621e80958b113cf5de2e"]);
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["8552a89aac43f5e3ff79c8d1cddefb2f"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["71dad104f0a25bb5ca340d0a04587de7"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["7b1e24e4235fdf656213f6197067ae83"]);
          count++;
          break;

        case 4:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["56d83d4869602a8c47b6edb1d4cee560"]);
          count++;
          break;

        case 5:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["e0fe9306dc64f205d5901d17f653664d"]);
          count++;
          break;

        case 6:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["f9f30be579407496e7f93188eb5807a9"]);
          count++;
          break;

        case 7:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["3e1118d96cd1eca34281c8e164705fbf"]);
          count++;
          break;

        case 8:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["04c24ceebd11b647851f5b728e1a3b89"]);
          count++;
          break;

        case 9:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["d42e37868983b0732d1ac45fb7b8ff37"]);
          count++;
          break;

        case 10:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["fada19956f55b1a1714efe84da17adcb"]);
          count++;
          break;

        case 11:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["5bb02c11e520f8aaa2d8552fc1c0b76f"]);
          count++;
          break;

        case 12:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["3b974bd9c512bf53f72b4e227c68dbad"]);
          count++;
          break;

        case 13:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["f201a8e5589894df180bb016b5c35e24"]);
          count++;
          break;

        case 14:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["e7c7ff3bed0726c59d735c51b0e070c8"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["00e4ebd90d21306a49ff20a7bfde8ff9"]);
          count++;
          break;

        case 16:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["cc5cd4049571e2b65f836834790bb57d"]);
          count++;
          break;

        case 17:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["183356d92e53e81e8d051ffe832c20d4"]);
          count++;
          break;

        case 18:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: _ => oMiniGames.ProtectPlants({
    'oSporeShroom': 3
  })
}, {
  AZ: function () {
    if (localStorage.JNG_PVZTR_HARD_MARSH12) {
      return [[oZombie, 1, 1], [oBucketheadZombie, 3, 3, [1]], [oConeheadZombie, 2, 1, [1]], [oCaskZombie, 3, 4, [2]], [oSadakoZombie, 1, 7, [7]], [oCigarZombie, 3, 5, [1, 2, 3, 4, 5, 8, 10]], [oStrollZombie, 1, 7, [3]]];
    } else {
      return [[oZombie, 4, 1, [1]], [oConeheadZombie, 2, 4, [5]], [oNewspaperZombie, 1, 1], [oSadakoZombie, 1, 7, [7]], [oCigarZombie, 2, 5, [8, 10]], [oStrollZombie, 1, 1, [3]]];
    }
  }(),
  FlagNum: 15,
  FlagToSumNum: function () {
    if (localStorage.JNG_PVZTR_HARD_MARSH12) {
      return {
        a1: [1, 2, 3, 5, 10, 14],
        a2: [10, 5, 8, 10, 9, 30, 59]
      };
    } else {
      return {
        a1: [2, 5, 10, 14],
        a2: [2, 5, 9, 13, 26]
      };
    }
  }(),
  FlagToMonitor: {},
  FlagToEnd: function () {
    delete localStorage.JNG_PVZTR_HARD_MARSH12;
    ShowWinItem(GetPlantCardDom(oSporeShroom, EDAll, '', {
      onclick: function () {
        GetNewCard(this, oSporeShroom, "Marsh12-1");
      }
    }));
  }
});