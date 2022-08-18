/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oAbutilonHybriden, oPumpkinHead],
  ZName: [oImp, oZombie, oStrollZombie, oCigarZombie],
  CanSelectCard: 0,
  SunNum: 150,
  LevelName: $__language_Array__["580b87569bdf3fcd626bcb5d40305839"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  FixedProps: 'disabled',
  LoadAccess: function (callback) {
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);
    let nullDom = NewEle("", "div", "display:none;", {}, EDAll);

    function colorSVG(randomPX, time = 1) {
      let svgId = "color" + Math.random();

      function rand() {
        return Math.random() * randomPX - randomPX / 2;
      }

      let rands = [];

      for (let i = 0; i < 6; i++) {
        rands.push(rand());
      }

      return [svgId, `
            <svg>
                <filter id="${svgId}">
                
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0" result="red"/>
                    <feOffset in="red" dx="${rands[0]}" dy="${rands[1]}" result="red_offset">
                        <animate attributeName="dx" from="${rands[0]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[1]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                0 1 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0" result="green"/>
                    <feOffset in="green" dx="${rands[2]}" dy="${rands[3]}" result="green_offset">
                        <animate attributeName="dx" from="${rands[2]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[3]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 1 0 0
                                0 0 0 1 0" result="blue"/>
                    <feOffset in="blue" dx="${rands[4]}" dy="${rands[5]}" result="blue_offset">
                        <animate attributeName="dx" from="${rands[4]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[5]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feBlend mode="lighten" in="red_offset" in2="green_offset" result ="blend1"/>
                    <feBlend mode="lighten" in="blend1" in2="blue_offset" result ="blend1"/>
                </filter>
            </svg>
            `];
    }

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["b1db6c73f81c650a5d568eacadad478f"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["3dc569c236811e7faa4ddc34b4c4dcd4"]);
          count++;
          break;

        case 2:
          PlayAudio('Zomboss1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 3:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["337f50ddc066fb360306d7215725696e"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["d244107d0529ef5a7c91c3fd7df69772"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["31a2ef7581d47452cf4a2f3a9bdc5844"]);
          count++;
          break;

        case 6:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["c7247f7a1a8c169caf138395755550aa"]);
          count++;
          break;

        case 7:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["3d081e97ab57d5a2de7d6384985c8463"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["e71807d7e81df4e9baf979b6576fe36e"]);
          count++;
          break;

        case 9:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["24cc7a5fc689d1dfc0464e2b3e6ae6f5"]);
          count++;
          break;

        case 10:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["b112d98af6f3990148853a27e459bb50"]);
          count++;
          break;

        case 11:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["97ed193df5b5ade7668645def99fa973"]);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, '……');
          count++;
          break;

        case 13:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["0b7a11fee54eddad645c81a74aa57c55"]);
          count++;
          break;

        case 14:
          DivTeach.onclick = null;
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["04b72a899f33abc05e5a190feaacbc23"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["ba214db0c09a9b62c28dd401e2cc9f4d"]);
          count++;
          break;

        case 16:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["bdc5aafcfa30b57f5fdf5466333c1049"]);
          count++;
          break;

        case 17:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["a8224bbafbe254191740ae4f1495cacc"]);
          count++;
          break;

        case 18:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["67e96317f288da702e95a5974c123f7f"]);
          count++;
          break;

        case 19:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["1c60688d6a44ef787c34a01eaee0161b"]);
          count++;
          break;

        case 20:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["0120316bcbbb7e0a2232b489efdcaada"]);
          count++;
          break;

        case 21:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, '……');
          count++;
          break;

        case 22:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["f5e55cac79fc0630f9d1ea4916f606fb"]);
          count++;
          let tmpCnt9 = count;

          (function loop() {
            if (tmpCnt9 !== count) {
              return;
            }

            let svg = colorSVG(5 * Math.random() + 1, 3000);
            nullDom.innerHTML = svg[1];
            dDave.style.filter = "url(#" + svg[0] + ")";
            oSym.addTask(Math.random() * 3 + 1, loop);
          })();

          break;

        case 23:
          DivTeach.onclick = null;
          dDave.style.filter = "";
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["580f4a4d1ecf588c4491ad6ecd57206b"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 24:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 25:
          ClearChild(DivTeach, dDave);
          ClearChild(effect);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: oMiniGames.ConveyorBelt
}, {
  AZ: [[oImp, 5, 1, [1, 3, 5, 7]], [oZombie, 1, 1], [oStrollZombie, 1, 1], [oCigarZombie, 1, 1]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [3, 5, 7],
    a2: [2, 5, 8, 14]
  },

  FlagToEnd() {
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

    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;left:115px;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", "position:absolute;left:415px;", 0, EDAll),
        dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["6138086dd9123ce43535b658cf2ce63b"]);
          count++;
          break;

        case 1:
          PlayAudio('Zomboss1');
          innerText(DivTeach, '……');
          count++;
          break;

        case 2:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["1779998acd7c8d88575f29f21d309842"]);
          count++;
          break;

        case 3:
          DivTeach.onclick = null;
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["86319de82c9eb4bcc949b1c64e9c678c"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 4:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["8ad072c27a5a5248591a9e6bf497c3fa"]);
          count++;
          break;

        case 5:
          PlayAudio('Zomboss2');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["62c9f1908440e1ab0c51d2546af4af56"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 6:
          PlayAudio('Zomboss1');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["bd1958b9520a90a43ef77c7e5dbf4482"], 18, true, "", 0.1)[0] + "</p>";
          count++;
          break;

        case 7:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["0dc0ebe77532777020de809707b1bba4"]);
          count++;
          break;

        case 8:
          PlayAudio('Zomboss3');
          innerText(DivTeach, '……');
          count++;
          break;

        case 9:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["dc27f900460137654813bd8f73531f67"]);
          count++;
          break;

        case 10:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["bdc0308e4862e6ee2461eac98f7f096d"]);
          count++;
          break;

        case 11:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["f0f321b8ee48f356c4f09d640e959f24"]);
          count++;
          break;

        case 12:
          ClearChild(DivTeach, dDave);
          oEffects.fadeOut(effect, 'slow', ele => {
            ClearChild(ele);
            callback();
          });
      }
    })();

    function callback() {
      oS.DefaultFlagToEnd();
    }
  }

});