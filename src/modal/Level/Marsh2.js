/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom],
  ZName: [oZombie, oConeheadZombie, oCaskZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["8252e853c4a5bbba9aca4bc08aa6ddb1"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
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
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["86b7245e8540eac2d66f8c40d5432de4"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["1690a5deff0eeba6067d12fbe3328a67"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["699432ca608dd8d061ec76307992a5b0"]);
          count++;
          break;

        case 3:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["b71f7f31c782b593d4d7056701d14217"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["8cde6604a6abf550afa61e72c52b6190"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["4c361b73dd47c7115b055d93ac17bace"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["452d9e28576bf2755b26940113415d42"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["7f90cb2d387f57064b17afd6bb123e18"]);
          count++;
          break;

        case 8:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["bd0f1753beb3666b68376dd41352b03d"]);
          effect.style.background = "red";
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          let tmpCnt = count;

          (function loop() {
            if (tmpCnt !== count) {
              return;
            }

            let svg = colorSVG(20 * Math.random() + 5, 3000);
            nullDom.innerHTML = svg[1];
            dDave.style.filter = "url(#" + svg[0] + ")";
            oSym.addTask(Math.random() * 30 + 9, loop);
          })();

          break;

        case 9:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["6c453a2b63a8a97e443787587b00517e"]);
          count++;
          let tmpCnt9 = count;

          (function loop() {
            if (tmpCnt9 !== count) {
              return;
            }

            oEffects.Animate(effect, {
              opacity: 0.3
            }, 0.2, "linear", () => {
              oSym.addTask(1, _ => {
                oEffects.Animate(effect, {
                  opacity: 1
                }, 0.2, "linear", () => {
                  oSym.addTask(1, loop);
                });
              });
            });
          })();

          (function loop() {
            if (tmpCnt9 !== count) {
              return;
            }

            let svg = colorSVG(30 * Math.random() + 10, 3000);
            nullDom.innerHTML = svg[1];
            dDave.style.filter = "url(#" + svg[0] + ")";
            oSym.addTask(Math.random() * 3 + 1, loop);
          })();

          break;

        case 10:
          DivTeach.onclick = fun;
          dDave.style.filter = "";
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0a1b2a2dba8b444c378a8548facdc8d3"]);
          effect.style.transition = ""; //oEffects.fadeOut(effect, 0.05, ()=>(DivTeach.onclick = fun));

          effect.style.opacity = "0";
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["3cfcda2ad382823156fc58c86f8f1212"]);
          count++;
          break;

        case 12:
          ClearChild(DivTeach, dDave);
          ClearChild(effect);
          oSym.addTask(30, callback);
      }
    })();
  }
}, {
  AZ: [[oZombie, 3, 1], [oConeheadZombie, 2, 1], [oCaskZombie, 1, 3, [3, 9, 10]]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 6, 9],
    a2: [1, 3, 8, 10]
  }
});