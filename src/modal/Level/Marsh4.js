/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPuffShroom, oRepeater, oWallNut],
  ZName: [oZombie, oNewspaperZombie, oBalloonZombie, oConeheadZombie, oCaskZombie, oSadakoZombie],
  CanSelectCard: 0,
  SunNum: 150,
  LevelName: $__language_Array__["4d5077b9cd8a1b1ae7f01c9f8c00585f"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  FixedProps: 'disabled',
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
          innerText(DivTeach, $__language_Array__["32c51c296833b0963761575e92935350"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["d7355c29eafe62f2e61b86ae39b70d42"]);
          count++;
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e6bde5a90db7f2821c66b00ce53c8e46"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["d868fc3a86b6313983e9daa5bcdc51c3"]);
          count++;
          break;

        case 4:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["66da87f146d5d061a81adf0b2c1b9527"]);
          count++;
          break;

        case 5:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["16147d2ccfc28a120162d62e9e2cc91a"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["fea3c4383278dc3d97d0544b3070d46b"]);
          count++;
          break;

        case 7:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["c89f725cf1e69ea373bcda2919fd53e4"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 8:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, '……');
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["eaead0b3cba8a9a6299a624fd0e46099"]);
          count++;
          break;

        case 11:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["ad8839a4b4c37cc67649c96e27f767a4"]);
          count++;
          break;

        case 12:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["85b1afffd31b1c2e00d0f1922edb09aa"]);
          count++;
          break;

        case 13:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["1a90fa9966bbce6c5785fcc2e954bfd6"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["ad498e0a60fe2c55fc09dd4c59fb7b93"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["08cb611f4981864da33c216fa1452489"]);
          count++;
          break;

        case 16:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["525557c37ddc5f0b32660af6f46c344e"]);
          count++;
          break;

        case 17:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["9727664fa128a57877d25ab6da1e0238"]);
          count++;
          break;

        case 18:
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

            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss2');
            DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["7a17f10f58a6fd880e4e3c6ec162ef6e"], 18, true, "")[0] + "</p>";
            count++;
          }
          break;

        case 19:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["9610802cfb2a917a8b0f761277311e3a"]);
          count++;
          break;

        case 20:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["24774d96cce3f9dc18c67211e5a6bec2"]);
          count++;
          break;

        case 21:
          ClearChild(DivTeach, dDave);
          ClearChild(effect);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oZombie, 2, 2], [oNewspaperZombie, 2, 2], [oBalloonZombie, 1, 5], [oCaskZombie, 1, 7], [oSadakoZombie, 3, 1, [1, 10, 11]]],
  FlagNum: 11,
  FlagToSumNum: {
    a1: [2, 9, 10],
    a2: [1, 10, 25, 100]
  }
});