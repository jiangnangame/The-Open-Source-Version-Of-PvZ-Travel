/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower],
  ZName: [oZombie],
  PicArr: function () {
    var a = oWallNut.prototype,
        b = a.PicArr;
    return ["images/interface/background1unsodded2.webp", "images/interface/background1unsodded_1.webp", b[a.CardGif], b[a.StaticGif]];
  }(),
  SunNum: 150,
  backgroundImage: "images/interface/background1unsodded_1.webp",
  LF: [0, 0, 1, 1, 1, 0],
  CanSelectCard: 0,
  LevelName: $__language_Array__["afae561dee08ac04b485920f9ba09829"],
  LvlEName: 2,
  InitLawnMover: function () {
    var a = 5;

    while (--a > 1) {
      oSym.addTask(a * 10, CustomSpecial, [oLawnCleaner, a, -1]);
    }
  },
  LoadMusic: "Bgm_Tutorial_Ready",
  StartGameMusic: "Bgm_Tutorial_Fight",
  StartGame: function () {
    NewEle("sod3row", "div", "position:absolute;left:-115px;top:0;height:600px;width:264px;z-index:0;background:url(images/interface/background1unsodded2.webp);over-flow:hidden", 0, EDPZ);
    NewImg("SodRoll_1", "images/interface/SodRoll.png", "left:136px;top:143px;z-index:1", EDPZ);
    NewImg("SodRoll_2", "images/interface/SodRoll.png", "left:136px;top:348px;z-index:1", EDPZ);

    (function callback(e, h, b, d, c, g, a, f) {
      e += 15;
      h += 16;
      d += 16;
      $("sod3row").style.width = e + "px";
      SetStyle($("SodRoll_1"), {
        left: h + "px",
        width: --b + "px",
        height: "141px"
      });
      SetStyle($("SodRoll_2"), {
        left: h + "px",
        width: b + "px",
        height: "141px"
      });
      e < 990 ? oSym.addTask(3, callback, [e, h, b, d, c, g, a, f]) : (ClearChild($("SodRoll_1"), $("SodRoll_2")), function () {
        StopMusic();
        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
        oS.InitLawnMover();
        oS.ControlFlagmeter && oFlagContent.init({
          fullValue: oP.FlagNum - 1,
          curValue: 0
        });
        SetVisible($("dFlagMeter"), $("dTop"));
        PrepareGrowPlants(function () {
          oP.Monitor({
            ar: [0],
            f: function fun(l) {
              var m = oS.C + 1;

              switch (l) {
                case 0:
                  PlaySubtitle($__language_Array__["65950e4a603628f94aadc8380f67f1bd"]);
                  NewImg("PointerUD2", "images/interface/down.gif", "top:120px;left:20px;transform:scaleY(-1);", EDAll);
                  oSym.addTask(10, fun, [++l]);
                  break;

                case 1:
                  var j = oGd.$,
                      i;

                  for (i in j) {
                    if (j[i].EName == "oSunFlower") {
                      oSym.addTask(10, fun, [++l]).addTask(2500, _ => {
                        oP.AddZombiesFlag();
                        oS.ControlFlagmeter && oFlagContent.show();
                      });
                      return;
                    }
                  }

                  oSym.addTask(10, fun, [l]);
                  break;

                case 2:
                  var j = oGd.$,
                      i,
                      k = 0;

                  for (i in j) {
                    j[i].EName == "oSunFlower" && ++k;
                  }

                  k > 1 && (PlaySubtitle($__language_Array__["2b84880b0da17eced6f5a0725c2c5311"]), ++l);
                  oSym.addTask(10, fun, [l]);
                  break;

                default:
                  var j = oGd.$,
                      i,
                      k = 0;

                  for (i in j) {
                    j[i].EName == "oSunFlower" && ++k;
                  }

                  k > 2 ? oSym.addTask(100, _ => {
                    ClearChild($("PointerUD2"));
                    PlaySubtitle();
                  }) : oSym.addTask(10, fun, [3]);
              }

              return l;
            }
          });
          BeginCool();
          AutoProduceSun(50);
        });
      }());
    })(283, 122, 68, 117, 73, 71, 131, 511);
  }
}, {
  AZ: [[oZombie, 8, 1]],
  FlagNum: 7,
  FlagToSumNum: {
    a1: [6],
    a2: [1, 4]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:100px;height:60px;", {}, EDAll);
    let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:30px;top:-50px;", dom);
    GetPlantCardDom(oWallNut, dom, null, {
      onclick: function () {
        ClearChild(dom2);
        GetNewCard(dom, oWallNut, 'Tutorial2');
        this.style.cursor = 'default';
      }
    });
    ShowWinItem(dom);
  }
});