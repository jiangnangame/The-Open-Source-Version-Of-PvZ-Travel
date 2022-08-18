/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oNutBowling, oBoomNutBowling],
  ZName: [oZombie, oConeheadZombie, oFootballZombie, oNewspaperZombie, oBucketheadZombie, oBalloonZombie, oImp, oCaskZombie],
  PicArr: ["images/interface/MarshClue2.webp"],
  AudioArr: ["Bgm_Marsh_Plot4"],
  CanSelectCard: 0,
  DKind: 0,
  LevelName: $__language_Array__["2b5cc6a1e433bd51714939f083c56ff5"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  FixedProps: 'disabled',
  StartGame: _ => oMiniGames.ConveyorBelt([oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oBoomNutBowling, oBoomNutBowling]),
  LoadAccess: function (callback) {
    CSpeed(1);
    NewEle(0, "div", "left:377px;", {
      className: 'FlowerBed'
    }, FightingScene);
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:1;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);
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

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["f0c231cea19dd9a5ff385291f3993096"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["05e3ac00d92a76b54e9cb083443e5083"]);
          count++;
          break;

        case 2:
          DivTeach.onclick = null;
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["587dca6d637b4d1d921ccdecb81cff3a"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 3:
          DivTeach.onclick = null;
          PlayAudio('crazydavelong3');
          DivTeach.style.fontSize = "24px";
          innerText(DivTeach, $__language_Array__["1aaf5e22723c8f2f8bad143fda21ab53"]);
          StopMusic();
          PlayAudio("Knock_Glass");
          setTimeout(function () {
            PlayAudio("fall");
          }, 500);
          setTimeout(function () {
            PlayMusic(oS.LoadMusic = "Bgm_Marsh_Plot4");
            fun();
          }, 1000);
          effect.style.opacity = "1";
          effect.style.background = "white";
          oEffects.Animate(effect, 'NPCFade', 'fast', 'linear', null, 0, 4);
          count++;
          break;

        case 4:
          DivTeach.onclick = null;
          PlayAudio('crazydavelong1');
          DivTeach.style.fontSize = "18px";
          innerText(DivTeach, $__language_Array__["7a3913b98d1b2914cf875ab3349d2e9c"]);
          oEffects.fadeOut(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["5ef8294740cce7017a7ed7103a29458a"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["2332dd9e55353237f80a9215e5ce814e"]);
          count++;
          break;

        case 7:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["141a0c65bc271e36276d31c376fef60f"]);
          oEffects.Animate(DivTeach, {
            textShadow: "0px 0px 5px white"
          }, 0.2);
          oEffects.Animate(dDave, {
            opacity: 0.3
          }, 0.2);
          oEffects.Animate(video, {
            opacity: 1
          }, 0.2, "linear", () => {
            effect.style.opacity = "1";
            effect.style.background = "black";
          });
          video.src = "images/Props/Marsh17/1.webm";
          video.play();

          video.onload = function () {
            video.currentTime = 0;
            video.play();
          };

          count++;
          break;

        case 8:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["a200307ffbdf24bc375328891a23c74f"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["70a116edb6f0d35d57b27d79ad72b5eb"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          DivTeach.style.fontSize = "12px";
          innerText(DivTeach, $__language_Array__["eb46ccd1d9e3df67a4e25cdd2c2bac0d"]);
          DivTeach.onclick = null;
          oSym.addTask(50, () => {
            fun();
          });
          count++;
          break;

        case 11:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          DivTeach.onclick = null;
          oSym.addTask(100, () => {
            fun();
          });
          innerText(DivTeach, $__language_Array__["f17410b34f72d6fbab47fd7589a669d4"]);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          DivTeach.style.fontSize = "18px";
          innerText(DivTeach, $__language_Array__["4b6c939099ed134b5a1db6231ba4e461"]);
          count++;
          break;

        case 13:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["b15bff9057b506d833371e1c89f8276e"]);
          DivTeach.onclick = null;
          oEffects.Animate(video, {
            filter: "brightness(500%)"
          }, 0.3, "linear", _ => {
            oEffects.Animate(video, {
              filter: "brightness(100%)"
            }, 0.2, "linear", _ => {
              video.src = "images/Props/Marsh17/2.webm";
              video.play();

              video.onload = function () {
                video.currentTime = 0;
                video.play();
              };

              DivTeach.onclick = fun;
            });
          });
          count++;
          break;

        case 14:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["7fff92f07f5bfb870726158e84df0dff"]);
          DivTeach.onclick = null;
          oEffects.Animate(video, {
            filter: "brightness(500%)"
          }, 0.3, "linear", _ => {
            oEffects.Animate(video, {
              filter: "brightness(100%)"
            }, 0.2, "linear", _ => {
              video.src = "images/Props/Marsh17/3.webm";
              video.play();

              video.onload = function () {
                video.currentTime = 0;
                video.play();
              };

              DivTeach.onclick = fun;
            });
          });
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          effect.style.opacity = 0;
          effect.style.background = "white";
          oEffects.Animate(video, {
            opacity: 0
          }, 0.2);
          oEffects.Animate(DivTeach, {
            textShadow: ""
          }, 0.2);
          oEffects.Animate(dDave, {
            opacity: 1
          }, 0.2);
          innerText(DivTeach, $__language_Array__["80f1e658a22f0727ccb8de4286cc72d4"]);
          count++;
          break;

        case 16:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["56dacf9a967c22e155f6e7f115659444"]);
          count++;
          break;

        case 17:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["b64c6d70c1633fe8b345658435d3c0f3"]);
          count++;
          break;

        case 18:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["b433b21c513306f6a11d392896d808df"]);
          count++;
          break;

        case 19:
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["837748f2a2af18d6f0c6daf2e426a068"]);
          count++;
          break;

        case 20:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["9332ad63d9034187eb96f7009cc8d3f6"]);
          count++;
          break;

        case 21:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["0e409c06da46fb5c747dda392b29d85d"]);
          count++;
          break;

        case 22:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, '……!');
          count++;
          break;

        case 23:
          ClearChild(DivTeach, dDave);
          ClearChild(effect, video);
          oSym.addTask(30, callback);
      }
    })();
  }
}, {
  AZ: [[oZombie, 5, 1], [oConeheadZombie, 3, 1], [oBucketheadZombie, 2, 1], [oNewspaperZombie, 2, 1], [oCaskZombie, 2, 1], [oImp, 2, 10], [oFootballZombie, 1, 10], [oBalloonZombie, 2, 1]],
  FlagNum: 13,
  FlagToSumNum: {
    a1: [3, 5, 9, 10, 13],
    a2: [4, 7, 12, 20, 30]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(NewImg("imgSF", "images/interface/MarshClue2.webp", "left:260px;top:203px;transform-origin:left top;transform: scale(0.18);", EDAll, {
      onclick: function () {
        GetNewProp(this, 'images/interface/MarshClue2.webp', $__language_Array__["42231e13d23cfd78a7051871ca0ac59b"], $__language_Array__["8750ed4f23b1ef5b31a8cd7534132b86"], !localStorage.JNG_PVZTR_Marsh17Plot ? 'Marsh17-1' : NextLevel(), 'top: -50px;left: 330px;transform: scale(0.18);height: 600px;');
      }
    }));
  }
}, {
  GrowPlant: function (l, c, b, f, a) {
    ZimuRQ.style.display === 'block' && PlaySubtitle();

    if (c > 347) {
      PlaySubtitle($__language_Array__["d6d7246bcd42ab9f6da1069d8e2190ac"]);
      CancelPlant();
      return false;
    }

    var j = oS.ChoseCard,
        g = ArCard[j],
        i = g.PName,
        k = i.prototype,
        d = g.DID,
        e,
        h = oGd.$LF[f];
    k.CanGrow(l, f, a) && function () {
      PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
      new i().Birth(c, b, f, a, l);
      oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
        left: c - 30 + "px",
        top: b - 40 + "px",
        zIndex: 3 * f,
        visibility: "visible"
      })]);
      ClearChild($("MovePlant"), $("MovePlantAlpha"));
      $("dCardList").removeChild(e = $(d));
      e = null;
      ArCard.splice(j, 1);
      oS.ChoseCard = "";
      oS.Chose = 0;

      GroundOnmousemove = function () {};

      if (!Mobile) {
        CancelPlant();
      }
    }();

    if (Mobile) {
      CancelPlant();
    }
  }
});