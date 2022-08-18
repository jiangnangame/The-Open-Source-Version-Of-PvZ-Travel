/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
  backgroundImage: 'images/interface/Marsh.webp',
  PicArr: function () {
    var a = oPuffShroom.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  CanSelectCard: 1,
  SunNum: 150,
  Dkind: 0,
  LevelName: $__language_Array__["bfeb63c85cd8a4b0b108029e772945e6"],
  LoadAccess: function (callback) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["80b9edc51bfe2bb1df62949bd6ece646"]);
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["3d6e40391ed82945c5bb5533029526ea"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["c1e590ad684877c459cf48b3d9b0f078"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 4:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["616149f33a528b8226f1c307b21df273"]);
          count++;
          break;

        case 5:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["72363a56194fdf0b2f2324f5bb117e18"]);
          count++;
          break;

        case 6:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle($__language_Array__["f6e39ca184c982d81aff46b64dab5a57"]));
      BeginCool();
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
        oSym.addTask(800, PlaySubtitle);
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 2, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 1, 10, [10, 11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 4, 5, 7, 9],
    a2: [1, 2, 5, 8, 10, 13]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oPuffShroom, EDAll));
  }
});