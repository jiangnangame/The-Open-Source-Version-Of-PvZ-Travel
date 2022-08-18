/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom],
  ZName: [oZombie, oConeheadZombie, oBalloonZombie, oSadakoZombie, oStrollZombie, oCaskZombie, oCigarZombie, oFootballZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["bfde423214b81bd4feef8d4a9c9bb0ec"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    CustomSpecial(oScaredyShroom, 3, 1);
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
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["a4c8014634803c5798ff7946d6648d6f"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["3d223f48ae010379dc979024214ccb49"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["7d8037d494b2805c331029b31dc7c1a0"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0c1c25442c8a510792e2fb6bcacdfccd"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["15583fc1cea392d1a79dfb5c87308162"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["49221dd7dab1cb5b9760afa15de0f900"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["a052db53024fb0c9256c3e957963f125"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["c92106c493b5e02c14724c825995c615"]);
          count++;
          break;

        case 8:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["07ba01cd9c4d6e612a69b0b45f42d124"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["aaa2964825a7bdf3da764f3691a1c827"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["99e2221fb901e3a7ce1c2ce1115323fc"]);
          count++;
          break;

        case 11:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["ab884d571dab59043c31c0ad14a6ee5e"]);
          count++;
          break;

        case 12:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["7ebd291f5c9762c280e409384e1b4b89"]);
          count++;
          break;

        case 13:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["febce3faab86850df05977dfcdcd2a23"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["0af89ae23a5debb842ec826ce70db4c1"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["fb8036f7f6d79b58b89d6676f3aa050f"]);
          count++;
          break;

        case 16:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["030ce62d036f80502a57516878d2122e"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 17:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["578cc1cedd47c8aa4fa6b48a3f5c63e0"]);
          count++;
          break;

        case 18:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["74e77feffa2c834e1177da88a7d0c596"]);
          count++;
          break;

        case 19:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["b74bcebc640fc887a521209b03d8ef7b"]);
          count++;
          break;

        case 20:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, '……');
          count++;
          break;

        case 21:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["b5d9ae2ea7828f12d645d961f7f90570"]);
          count++;
          break;

        case 22:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["54db661e03ffa3200131d385773fa30a"]);
          count++;
          break;

        case 23:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["b1efd970e250af6d6e3a5dbde948412e"]);
          count++;
          break;

        case 24:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["314c388741af4bacc98397f5b1dd678a"]);
          count++;
          break;

        case 25:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["fe889f877ff71d9d274bb10e97c33c6c"]);
          count++;
          break;

        case 26:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["6d4b3583d9141b200807aab706bacc14"]);
          count++;
          break;

        case 27:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["26469b5fd905d5521069368e0db9fcf3"]);
          count++;
          break;

        case 28:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 29:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["ecc2328c15a53611381838c2274a9990"]);
          count++;
          break;

        case 30:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["12b40fe9894015280649edee96ef281c"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 31:
          ClearChild(DivTeach, dDave);
          oEffects.fadeOut(effect, 'slow', ele => {
            ClearChild(ele);
            callback();
          });
      }
    })();
  }
}, {
  AZ: [[oZombie, 4, 1, [1]], [oConeheadZombie, 3, 1, [1]], [oBalloonZombie, 1, 5, [16]], [oSadakoZombie, 1, 6, [16]], [oStrollZombie, 1, 7, [16]], [oCaskZombie, 1, 9, [9, 16]], [oCigarZombie, 1, 8, [8, 9, 10, 11, 12, 13, 14, 15, 16]], [oFootballZombie, 1, 14, [14, 15]]],
  FlagNum: 16,
  FlagToSumNum: {
    a1: [1, 9, 12],
    a2: [1, 6, 15, 23]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", "position:absolute;left:415px;", 0, EDAll),
        dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, '……');
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["01b56ee6eff215dad0891ac34206e1d2"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["3b39bea6f2ef81db287670615d447b63"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["74739d29b86cd176ef28328702fd6e0c"]);
          count++;
          break;

        case 4:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, '……');
          count++;
          break;

        case 5:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["e5858b412a6efab73275ad449b3500ee"]);
          count++;
          break;

        case 6:
          ClearChild(DivTeach, dDave);
          setTimeout(_ => {
            /*NewImg("PointerUD2", "images/interface/down.gif", "left:734px;top:383px;", EDAll);
            NewImg("imgSF", "images/interface/Conical_flask.png", "left:667px;top:300px", EDAll, {
                onclick: function() {
                    GetNewProp(this, 'Conical_flask', '锥形瓶', '实验室功能现已解锁！', NextLevel(), '60px', '360px');
                }
            });*/
            let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:167px;height:108px;", {}, EDAll);
            let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:67px;top:-50px;", dom);
            NewImg("imgSF", "images/interface/Conical_flask.png", "left:0px;top:-124px", dom, {
              onclick: function () {
                ClearChild(dom2);
                GetNewProp(this, 'Conical_flask', $__language_Array__["613f3bf13e6170d5ab3e262c712b7ca0"], $__language_Array__["286389e16c85d601fff9e446056968ee"], NextLevel(), '60px', '360px');
              }
            });
            ShowWinItem(dom);
          }, 1000);
      }
    })();
  }
});