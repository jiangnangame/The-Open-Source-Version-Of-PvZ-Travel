/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter],
  ZName: [oZombie],
  PicArr: function () {
    let a = oSunFlower.prototype,
        b = a.PicArr;
    return [RESPATH + "SodRoll.png", RESPATH + "background1unsodded_1.webp", RESPATH + "background1unsodded.webp", b[a.CardGif], b[a.StaticGif]];
  }(),
  backgroundImage: "images/interface/background1unsodded.webp",
  CanSelectCard: 0,
  LevelName: $__language_Array__["924c85642af0ee581b8925c24ad4a6bd"],
  LvlEName: 1,
  SunNum: 150,
  LF: [0, 0, 0, 1, 0, 0],
  InitLawnMover: function () {
    CustomSpecial(oLawnCleaner, 3, -1);
  },
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  isStartGame: 1,
  //本关需要手动激活！！！
  LoadAccess: function (a) {
    loadRes({
      img: ['images/interface/background1unsodded2.webp', 'images/interface/background1.webp']
    });
    NewImg("dDave", "", "left:0;top:81px", EDAll);
    NewEle("DivTeach", "div", 0, 0, EDAll);

    (function fun(d) {
      let c = $("DivTeach");

      switch (d) {
        case 0:
          PlayAudio("crazydaveshort1");
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [1]);
            };
          }, []);
          innerText(c, $__language_Array__["e74492f5c6793a04598f7b3f5983b128"]);
          break;

        case 1:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [2]);
            };
          }, []);
          innerText(c, $__language_Array__["153d9d4b0dc955c39804bf049865ecd7"]);
          break;

        case 2:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [3]);
            };
          }, []);
          innerText(c, $__language_Array__["dce0274b1af8608812d06ea5e3122d15"]);
          break;

        case 3:
          PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
          c.onclick = null;
          $("dDave").src = "images/interface/Dave.png";
          oSym.addTask(1, function () {
            $("dDave").src = "images/interface/Dave.png";

            c.onclick = function () {
              oSym.addTask(10, fun, [4]);
            };
          }, []);
          innerText(c, $__language_Array__["fcf1b34a3cb02c153ddac765a64dcc3d"]);
          break;

        case 4:
          ClearChild($("DivTeach"), $("dDave"));
          oSym.addTask(30, function () {
            a();
          }, []);
      }
    })(0);
  },
  StartGame: function () {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewEle("sod3row", "div", "position:absolute;left:-115px;top:0;height:600px;width:264px;z-index:0;background:url(images/interface/background1unsodded_1.webp);over-flow:hidden", 0, EDPZ);
    NewImg("SodRoll_1", "images/interface/SodRoll.png", "left:112px;top:244px;z-index:1", EDPZ);

    (function fun(e, h, b, d, c, g, a, f) {
      e += 15;
      h += 16;
      d += 16;
      $("sod3row").style.width = e + "px";
      SetStyle($("SodRoll_1"), {
        left: h + "px",
        width: --b + "px",
        height: "141px"
      });
      e < 990 ? oSym.addTask(3, fun, [e, h, b, d, c, g, a, f]) : (ClearChild($("SodRoll_1")), function () {
        oS.InitLawnMover();
        oP.Monitor({
          ar: [0],
          f: function fun(k) {
            var l = oS.C + 1,
                i = oS.Chose;

            switch (k) {
              case 0:
                if ($("PointerUD2")) {
                  EditImg($("PointerUD2"), "", "images/interface/down.gif", {
                    left: "20px",
                    top: "60px",
                    transform: "scaleY(-1)"
                  });
                }

                ;
                PlaySubtitle($__language_Array__["5a3482fc2e771776704e108ec256f346"]);
                !$("PointerUD2") && NewImg("PointerUD2", "images/interface/down.gif", "top:60px;left:20px;-moz-transform:scaleY(-1);-webkit-transform:scaleY(-1);-o-transform:scaleY(-1);transform:scaleY(-1);filter:FlipV;", FightingScene);
                oSym.addTask(10, fun, [++k]);
                break;

              case 1:
                i > 0 && (PlaySubtitle($__language_Array__["3dfa94dd23c35e89a6db3d0679ac6308"]), EditImg($("PointerUD2"), "", "images/interface/down.gif", {
                  left: "165px",
                  top: "250px",
                  transform: "scaleY(1)"
                }), ++k);
                oSym.addTask(10, fun, [k]);
                break;

              case 2:
                var h = oGd.$;

                while (--l) {
                  if (h["3_" + l + "_1"]) {
                    PlaySubtitle();
                    EditImg($("PointerUD2"), "", "images/interface/down.gif", {
                      left: "710px",
                      top: "250px"
                    });
                    AppearSun(Math.floor(GetX(7) + Math.random() * 41), GetY(3), 50, 0);
                    oSym.addTask(10, fun, [++k]);
                    return;
                  }
                }

                !i && (k = 0);
                oSym.addTask(10, fun, [k]);
                break;

              case 3:
                oS.SunNum > 99 && (AutoProduceSun(50), ClearChild($("PointerUD2")), PlaySubtitle($__language_Array__["9633a9250ddc826bc76b6f16ec78151c"]), ++k);
                oSym.addTask(10, fun, [k]);
                break;

              default:
                var j = 0,
                    h = oGd.$;

                while (--l) {
                  h["3_" + l + "_1"] && ++j;
                }

                j > 0 ? (oP.AddZombiesFlag(), oFlagContent.show(), oSym.addTask(800, PlaySubtitle)) : oSym.addTask(10, fun, [4]);
            }
          }
        });
        BeginCool();
        SetVisible($("dTop"), $('dFlagMeter'));
        oS.ControlFlagmeter && oFlagContent.init({
          fullValue: oP.FlagNum - 1,
          curValue: 0
        });
      }());
    })(283, 122, 68, 117, 73, 71, 131, 511);
  }
}, {
  AZ: [[oZombie, 5, 1]],
  FlagNum: 5,
  FlagToSumNum: {
    a1: [4],
    a2: [1, 5]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:100px;height:60px;", {}, EDAll);
    let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:30px;top:-50px;", dom);
    GetPlantCardDom(oSunFlower, dom, null, {
      onclick: function () {
        ClearChild(dom2);
        GetNewCard(dom, oSunFlower, 'Tutorial2');
        this.style.cursor = 'default';
      }
    });
    ShowWinItem(dom);
  }
});