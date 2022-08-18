/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Ready",
  LoadAccess: function (a) {
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
    } //NewEle(0, "div", "width:221px;height:600px;left: 25%;position:absolute;z-index:1;background:url(images/interface/MarshClue2.webp)", 0, $("tGround"));

    /*NewEle(`jngButton${Math.random()}`, 'a', 'left:780px;top:540px;z-index:258;position:absolute;', {
        className: 'jngButton Continue',
        onclick() {
            SelectModal(NextLevel());
        }            
    }, EDAll);
    NewEle(`jngButton${Math.random()}`, 'a', 'left:1px;top:1px;z-index:258;position:absolute;', {
        className: 'jngButton Homepage',
        onclick() {
            Exitlevel();
        }            
    }, EDAll);*/


    CSpeed(1);
    let video = NewEle("", "video", "z-index:300;position:absolute;top:0;left:0;opacity:0;", {
      src: "images/Props/Marsh17/1.webm",
      loop: false,
      controls: false,
      autoplay: false,
      muted: true
    }, EDAll);

    for (let i = 1; i <= 3; i++) {
      let dom = NewEle("", "video", "position:absolute;top:0;left:0;opacity:0;display:none;", {
        src: "images/Props/Marsh17/" + i + ".webm"
      });
    }

    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:1;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["2388fce252a37872edbee3f5ad291214"]);
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["7f996c312eeeb0579665b33200722add"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["88c7e8107170401d338a7acf9385d3c8"]);
          count++;
          break;

        case 3:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["fcaabca15aac462953381233a26392f3"]);
          count++;
          break;

        case 4:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a9ccdb678b7d71ddcc4cec310593343f"]);
          count++;
          break;

        case 5:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["6aab641d52f71ebbb2d951dd11b32bc2"]);
          count++;
          break;

        case 6:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["d7fa9c00218bdb186ac8332b6bac9349"]);
          count++;
          DivTeach.onclick = null;
          oSym.addTask(360, () => {
            oEffects.Animate(DivTeach, {
              opacity: 0
            }, 0.2);
            oEffects.Animate(dDave, {
              opacity: 0
            }, 0.2);
            oEffects.Animate(video, {
              opacity: 1
            }, 0.2);
          });
          let currentTimes = [0, 0.4, 1.2, 2.5];

          for (let i = 1; i < 5; i++) {
            oSym.addTask(20 * i + 380, () => {
              if (i == 4) {
                fun();
                return;
              }

              video.src = "images/Props/Marsh17/" + i + ".webm";
              video.play();
              video.currentTime = currentTimes[i];
            });
          }

          break;

        case 7:
          oEffects.Animate(video, {
            opacity: 0
          }, 0.2);
          DivTeach.onclick = fun;
          dDave.style.opacity = DivTeach.style.opacity = 1;
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["2e4ac663c7dcb8fe985cc50e9df32472"]);
          count++;
          break;

        case 8:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["669916ad3c560219daeae7ce87e705de"]);
          count++;
          break;

        case 9:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["486c06e70bd3fd632c1d5b100dc1fe11"]);
          count++;
          break;

        case 10:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["26e1001d413b00d928144d211dd3fb40"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["c8a53d5fa763f2ec9115ee0e1cc675ac"]);
          count++;
          break;

        case 12:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["317a91fde83a4dfa6ba98016b33575fd"]);
          count++;
          break;

        case 13:
          DivTeach.onclick = null;
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["9bfe4ab99f0ae2fcc7bc1fc241230ffc"]);
          oEffects.Animate(effect, {
            background: "white"
          }, 'fast', 'linear', () => {
            oSym.addTask(300, fun);
          });
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["f75d1d2e377e7d5e2fdd3326435c451b"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          DivTeach.style.fontSize = "14px";
          innerText(DivTeach, $__language_Array__["390dbb031e4e36dbeac7062af63c5c3b"]);
          count++;
          DivTeach.onclick = null;
          oSym.addTask(100, fun);
          break;

        case 16:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          DivTeach.style.fontSize = "18px";
          innerText(DivTeach, $__language_Array__["4acf82f91b436582c266c5bf970a956a"]);
          count++;
          break;

        case 17:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["388ab638ba03da0b92a7f5293b15f734"], 18, true, "", 0.2)[0] + "</p>";
          count++;
          break;

        case 18:
          PlayAudio('crazydavelong3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["e2a3aeb705e63033ebde3dd45b37d205"], 18, true, "", 0.2)[0] + "</p>";
          count++;
          break;

        case 19:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["b4cb02a411905700f0d0ba8169662279"]);
          count++;
          break;

        case 20:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["6665f94dfa64439a958c9e86a2dadf8e"]);
          count++;
          break;

        case 21:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["b1eb583d1629d814bd18ce8350e19b0a"]);
          count++;
          break;

        case 22:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["a70aca51199595a3b7454cc2245a3946"]);
          count++;
          break;

        case 23:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["2be7aafc5c32e7560dfaaf01f5391feb"]);
          count++;
          break;

        case 24:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["b04d41f05682ae1523f0a47b2f57cae1"]);
          count++;
          break;

        case 25:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["2d21128a90af2b7133f51a4ec5182b86"]);
          count++;
          break;

        case 26:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["2bb773b141317ea582c184bb2f49bd9f"]);
          count++;
          break;

        case 27:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["97c5709fe8589cdfa373d2997fd05d18"]);
          count++;
          break;

        case 28:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["d03090954759bf99c3728e171dde4186"]);
          count++;
          break;

        case 29:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();

    function callback() {
      localStorage.JNG_PVZTR_Marsh17Plot = true;
      SelectModal('Marsh18');
    }
  }
});