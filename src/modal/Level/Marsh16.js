/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  function makeUpSplitText(text, font_size = 20, str = true, font_family = "Microsoft YaHei,Arial", time_range = 0.2, width = 470) {
    let json = {
      text,
      font_size,
      str,
      font_family,
      time_range,
      width
    };
    return oEffects.TextEffects.ShakeText(json);
  }

  oS.Init({
    PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oSporeShroom, oFumeShroom, oBambooUncle,
    /*oLight,*/
    oAbutilonHybriden, oPumpkinHead],
    ZName: [oZombie, oBucketheadZombie, oCaskZombie, oSadakoZombie, oImp],
    PicArr: [],
    CanSelectCard: 1,
    LevelName: $__language_Array__["1c83695ed277062102628ed7498e6a4a"],
    SunNum: 150,
    LoadMusic: "Bgm_Marsh_Ready",
    StartGameMusic: "Bgm_Marsh_Fight_Challenge",
    LoadAccess: function (callback) {
      for (let i = 1; i < 6; i += 2) {
        CustomSpecial(oApple, i, 5);
        NewEle(0, "div", `left: 460px;top: ${80 + 100 * (i - 1)}px;`, {
          className: 'sos'
        }, FightingScene);
      }

      loadRes({
        au: ["Bgm_Marsh_Plot3"]
      });
      let count = 0,
          DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
          dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

      (function fun() {
        DivTeach.onclick = fun;

        switch (count) {
          case 0:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong2');
            innerText(DivTeach, $__language_Array__["276e2c13356400cd74dcaabb0d0b8033"]);
            count++;
            break;

          case 1:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["47ddac1a4000bb2920cf3623eb1e176e"]);
            DivTeach.style.fontSize = "12px";
            count++;
            break;

          case 2:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["55b21783e3b912f2f9bcb66bfb0a1f87"]);
            count++;
            break;

          case 3:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["6edebf1ed6a90e05e553b5cc33bde5ee"]);
            count++;
            break;

          case 4:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            DivTeach.innerHTML = "<p style='position:absolute;top:-12px;left:20px;'>" + makeUpSplitText($__language_Array__["f6814739aadd57e8274eb235560af072"], 12, true, "")[0] + "</p>";
            count++;
            break;

          case 5:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            DivTeach.innerHTML = "<p style='position:absolute;top:-12px;left:20px;'>" + makeUpSplitText($__language_Array__["714e2694d5278bc669c4b70b92a7a07c"], 12, true, "")[0] + "</p>";
            count++;
            break;

          case 6:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            DivTeach.style.fontSize = "24px";
            DivTeach.innerHTML = "<p style='position:absolute;top:-24px;left:20px;'>" + makeUpSplitText($__language_Array__["019d952209d439a541dcdb2a122f0c52"], 24, true, "")[0] + "</p>";
            count++;
            break;

          case 7:
            PlayAudio('Zomboss2');
            DivTeach.innerHTML = "<p style='position:absolute;top:-24px;left:20px;'>" + makeUpSplitText($__language_Array__["446562ec49e929bb1434d294e424807f"], 24, true, "")[0] + "</p>";
            count++;
            break;

          case 8:
            PlayAudio('Zomboss3');
            DivTeach.style.fontSize = "12px";
            innerText(DivTeach, $__language_Array__["c7c5d398cb138846a62e6595f872577c"]);
            count++;
            break;

          case 9:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["388aad39db3accd3214c739233b0bce1"]);
            count++;
            break;

          case 10:
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["83f09df74b66c9e71c07725ab3ebae60"]);
            count++;
            break;

          case 11:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            DivTeach.style.fontSize = "24px";
            DivTeach.innerHTML = "<p style='position:absolute;top:-24px;left:20px;'>" + makeUpSplitText($__language_Array__["741b092172e5eb2d9af74d462297512a"], 24, true, "")[0] + "</p>";
            count++;
            break;

          case 12:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong3');
            StopMusic();
            PlayMusic(oS.LoadMusic = "Bgm_Marsh_Plot3");
            DivTeach.style.fontSize = "18px";
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["34cb81303cce9afa4c84809b7ab2ee5c"], 18, true, "")[0] + "</p>";
            count++;
            break;

          case 13:
            PlayAudio('crazydavelong3');
            innerText(DivTeach, $__language_Array__["6c8861417d88781cea8b63d2dfc1caff"]);
            count++;
            break;

          case 14:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss3');
            innerText(DivTeach, $__language_Array__["a76b76e113046c9de8b8f22075f14cd8"]);
            count++;
            break;

          case 15:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["623cc391964955812b62e925c40354a1"]);
            count++;
            break;

          case 16:
            PlayAudio('crazydavelong2');
            innerText(DivTeach, $__language_Array__["cd5419b102197c6b1891a17dd7496dfe"]);
            count++;
            break;

          case 17:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["fc6c8e041d9ebf654b649ab81e9d4c5f"]);
            count++;
            break;

          case 18:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["64fa0a54e1c5072709d4cd67b844b325"], 18, true, "")[0] + "</p>";
            count++;
            break;

          case 19:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["f155f3cdcdb8b2338e882f26ce1d1a31"]);
            count++;
            oSym.addTask(40, () => {
              fun();
            });
            break;

          case 20:
            PlayAudio('Zomboss3');
            innerText(DivTeach, $__language_Array__["ea2d1fb348ae7ffbaf06e1974ee6e08b"]);
            count++;
            break;

          case 21:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["58b6268d9f85a7ae088a4306fdad1d9f"]);
            count++;
            break;

          case 22:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["15f719a336ace13d84c5c1b8e3e3aef1"]);
            count++;
            break;

          case 23:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["a9e9ea586322e3f9ce01dd846413fdb2"]);
            count++;
            break;

          case 24:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["9c9fc1fd9ae93ed73124d39f936ebb0b"], 18, true, "")[0] + "</p>";
            count++;
            break;

          case 25:
            PlayAudio('crazydavelong3');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["54415013ab193728d3206d86aa7e4e7e"], 18, true, "")[0] + "</p>";
            count++;
            break;

          case 26:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["610c7ebd3c4780fb28be7bd2f1834a52"]);
            count++;
            break;

          case 27:
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["21c0bd0bd9ed0d3bbb8fbc8a3631f4f3"]);
            count++;
            break;

          case 28:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            DivTeach.style.fontSize = "24px";
            DivTeach.innerHTML = "<p style='position:absolute;top:-24px;left:20px;'>" + makeUpSplitText($__language_Array__["46807666ce15319c1b1e1b8bce3e49b6"], 24, true, "")[0] + "</p>";
            count++;
            break;

          case 29:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss2');
            DivTeach.style.fontSize = "18px";
            innerText(DivTeach, $__language_Array__["e0c25685935cc8f6b1c05e168178fbd3"]);
            count++;
            break;

          case 30:
            ClearChild(DivTeach, dDave);
            oSym.addTask(30, callback);
        }
      })();
    },
    StartGame: _ => oMiniGames.ProtectPlants({
      'oApple': 3
    })
  }, {
    AZ: [[oZombie, 5, 2, [2]], [oBucketheadZombie, 1, 1, [10, 12]], [oCaskZombie, 2, 1, [10, 12]], [oImp, 3, 1, [1]], [oSadakoZombie, 1, 1]],
    FlagNum: 12,
    FlagToSumNum: {
      a1: [2, 3, 4, 7, 10],
      a2: [1, 2, 6, 8, 10, 13]
    },

    FlagToEnd() {
      let count = 0,
          DivTeach = NewEle("DivTeach", "div", "position:absolute;left:415px;", 0, EDAll),
          dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

      (function fun() {
        DivTeach.onclick = fun;

        switch (count) {
          case 0:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["79700ac65a2d9eb30c5f45c010332f69"], 18, true, "", 0.3)[0] + "</p>";
            count++;
            break;

          case 1:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["d935b6bad03a8b5f21e22499af39dc3e"]);
            count++;
            break;

          case 2:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["78d078c446d7cd974aa026d5a7800553"]);
            count++;
            break;

          case 3:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong2');
            innerText(DivTeach, $__language_Array__["47653a1fff45585072ff251a506f0619"]);
            count++;
            break;

          case 4:
            PlayAudio('crazydavelong3');
            innerText(DivTeach, '……');
            count++;
            break;

          case 5:
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["60541494a8ed950ae24e278f34fa0d6d"]);
            count++;
            break;

          case 6:
            PlayAudio('crazydavelong2');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["f595a4330a505b1211b5399aecc2b440"], 18, true, "", 0.3)[0] + "</p>";
            count++;
            break;

          case 7:
            PlayAudio('crazydavelong3');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["cd638bb665f54007c1085229663ea2ac"], 18, true, "", 0.1)[0] + "</p>";
            count++;
            break;

          case 8:
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["060600cddf63a48b60713bf88a1fcb2a"]);
            count++;
            break;

          case 9:
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["b7f4e1857d0b49681fac87a4d2283afd"]);
            count++;
            break;

          case 10:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["b41ef1fc69eb13697a50ca752a32af1d"]);
            count++;
            break;

          case 11:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["e71a4a71cfcce5856440210fa2700b01"]);
            count++;
            break;

          case 12:
            PlayAudio('crazydavelong1');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["b950406fb7d3d62bc81c0087e6617595"], 18, true, "", 0.1)[0] + "</p>";
            count++;
            break;

          case 13:
            PlayAudio('crazydavelong2');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["860b80e9e8546ce21582b1ec404127cf"], 18, true, "", 0.1)[0] + "</p>";
            count++;
            break;

          case 14:
            PlayAudio('crazydavelong3');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["855e6d723142a5878a6d0862a892d5f6"], 18, true, "", 0.2)[0] + "</p>";
            count++;
            break;

          case 15:
            PlayAudio('crazydavelong1');
            DivTeach.style.fontSize = "24px";
            PlayAudio("Knock_Glass");
            setTimeout(function () {
              PlayAudio("fall");
            }, 500);
            innerText(DivTeach, $__language_Array__["2b2f6c5a7f0a36fe3e7d55e54981de4a"]);
            count++;
            break;

          case 16:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            DivTeach.style.fontSize = "18px";
            innerText(DivTeach, $__language_Array__["d9e843024a5ea1059e8dd7633416564b"]);
            count++;
            break;

          case 17:
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong2');
            innerText(DivTeach, $__language_Array__["9667dca501feefacaed2585192094db5"]);
            count++;
            break;

          case 18:
            ClearChild(DivTeach, dDave);
            setTimeout(() => {
              callback();
            }, 1000);
        }
      })();

      function callback() {
        oS.DefaultFlagToEnd();
      }
    }

  });
}