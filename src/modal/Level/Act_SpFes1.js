/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oScaredyShroom, oDoomShroom, oCherryBomb, oTallNut, oWallNut, oStoneFlower, oRadish, oSnowPea, oRepeater, oPuffShroom, oFumeShroom, oSporeShroom],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oImp, oCaskZombie, oSadakoZombie, oFootballZombie],
  PicArr: ["images/interface/Forest.webp", "images/interface/Dave.png"],
  backgroundImage: "images/interface/Forest.webp",
  CanSelectCard: 0,
  LevelName: $__language_Array__["09ba50d9abac5c961c6bedcc3ae5f8b4"],
  StaticCard: 0,
  LoadMusic: "Bgm_Forest_Ready",
  StartGameMusic: "Bgm_Forest_Fight",
  InitLawnMover: function () {},
  StartGame: function () {
    let arrP = [oScaredyShroom, oDoomShroom, oPuffShroom, oPuffShroom, oCherryBomb, oWallNut, oTallNut, oWallNut, oStoneFlower, oRadish, oSnowPea, oRepeater, oPuffShroom, oFumeShroom, oSporeShroom],
        timeShengcheng = 600,
        timeAn = 2,
        firstP = oWallNut;
    CustomSpecial(oBambooUncle, 1, 5);
    CustomSpecial(oBambooUncle, 3, 5);
    CustomSpecial(oBambooUncle, 5, 5);
    NewEle(0, "div", "left: 575px;top: 80px;", {
      className: 'sos'
    }, $("tGround"));
    NewEle(0, "div", "left: 575px;top: 280px;", {
      className: 'sos'
    }, $("tGround"));
    NewEle(0, "div", "left: 575px;top: 480px;", {
      className: 'sos'
    }, $("tGround"));

    (function ss() {
      let N = 0;

      for (let v in $P) $P[v].EName == 'oBambooUncle' && ++N;

      N > 2 ? oSym.addTask(200, ss, []) : toOver(2);
    })();

    oMiniGames.ConveyorBelt(arrP, timeShengcheng, timeAn, [firstP]);
  },
  LoadAccess: function (a) {
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["92b4986aa353ba69bdd77f035953936a"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["5e6afebb075db13aeab4600eaaee375c"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["fb0f94566a00e286b92dd48e79e1c6bc"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["87960f577228f4f492eaf67de4835a15"]);
          count++;
          break;

        case 5:
          ClearChild(DivTeach, dDave);
          jngAlert.open({
            'text': $__language_Array__["cc9719e4b7eeddd3f15740092c878ec4"],
            'type': 0,
            'shade': 1,
            'nextHandler': _ => oSym.addTask(10, a)
          });
      }
    })();
  }
}, {
  AZ: [[oZombie, 2, 1], [oBucketheadZombie, 2, 2], [oConeheadZombie, 2, 2], [oImp, 2, 2], [oCaskZombie, 2, 1], [oSadakoZombie, 2, 10], [oFootballZombie, 1, 6]],
  FlagNum: 20,
  FlagToSumNum: {
    a1: [1, 2, 3, 5, 9, 10, 13, 15, 18, 20],
    a2: [1, 2, 5, 12, 13, 10, 14, 42, 39, 50, 123]
  },
  FlagToEnd: function () {
    localStorage['JNG_TR_ACT_SPFES'] = 'Act_SpFes2'; //更新缓存

    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, "Act_SpFes2");
      }
    });
  }
});