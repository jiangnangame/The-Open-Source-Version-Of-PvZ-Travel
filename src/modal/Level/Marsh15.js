/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCaskZombie, oImp, oSadakoZombie],
  PName: [oWallNut, oPotatoMine, oCherryBomb, oFumeShroom, oSporeShroom
  /*, oLightCS*/
  ],
  PicArr: function () {
    var a = oBambooUncle.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  FixedProps: {
    'light': {
      num: Infinity
    }
  },
  CanSelectCard: 0,
  LevelName: $__language_Array__["b836b74c5132649d36f61ce55af90eb2"],
  SunNum: 150,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  isStartGame: 1,
  //本关需要手动激活！！！
  LoadAccess: function (callback) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, 'O——O——C——');
          count++;
          break;

        case 1:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["7b34095fe94c3296c9d17214c889bfeb"]);
          count++;
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["9a07a25fd284b151da18771f89362837"]);
          count++;
          break;

        case 3:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["267d26ef5f5a0899bbb0a12a18b08178"]);
          count++;
          break;

        case 4:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a7a5f89cc4f716b26e974b27a4daaf80"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["e99cff0acd527054868dc7009f70076e"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["42fc75ad8f2baf85d31af9fcefa6a6c6"]);
          count++;
          break;

        case 7:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["d409144b1bbed172f6b3a0f8419d0a51"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["d9b869eae978cfe10f96a3fb98608941"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["b822783d3d7effb0f4840918f6bfeb23"]);
          count++;
          break;

        case 10:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["8a21c282657780ed648cda320a5201e5"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          DivTeach.style.fontSize = "12px";
          innerText(DivTeach, $__language_Array__["dcd6085e55b643f1873d477014cab182"]);
          count++;
          break;

        case 12:
          PlayAudio('Zomboss2');
          DivTeach.style.fontSize = "";
          innerText(DivTeach, $__language_Array__["4e5ae85f78ba5a60573684cd1b26d14e"]);
          count++;
          break;

        case 13:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["52d0e3c44b41c6e1aad0fb23e946049b"]);
          count++;
          break;

        case 14:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["0586908574a5b7eb3a9a058fbfcfeb00"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, '……');
          count++;
          break;

        case 16:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["03e9071a45c6a3a557efed54c211f673"]);
          count++;
          break;

        case 17:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a35c543e3693d3bd680fec7df1d5e0db"]);
          count++;
          break;

        case 18:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["e090bd300910f4f71e0ff0fe8761ecd7"]);
          count++;
          break;

        case 19:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          DivTeach.style.fontSize = "24px";
          innerText(DivTeach, $__language_Array__["6a2a07d3d974bf28a141e5db0cd3802d"]);
          count++;
          break;

        case 20:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          DivTeach.style.fontSize = "";
          innerText(DivTeach, $__language_Array__["7b0f38ecf6bb9ad33d3edf2a6e0737c1"]);
          count++;
          break;

        case 21:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["cdf777312a668fb31dd341b85d9fc75a"]);
          count++;
          break;

        case 22:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    CustomSpecial(oPeashooter, 2, 2);
    CustomSpecial(oPeashooter, 4, 2);
    NewImg("imgSpareKK", BlankPNG, "left:0px;top:-15px", EDAll);
    oP.Monitor({
      ar: [0],
      f: function fun(k) {
        var l = oS.C + 1,
            i = oS.Chose;

        switch (k) {
          case 0:
            NewImg("PointerUD2", "images/interface/down.gif", "top:490px;left:705px;", EDAll);
            PlaySubtitle($__language_Array__["80e26af52cc5cd19c05e41d55587f8a4"]);
            oSym.addTask(10, fun, [++k]);
            break;

          case 1:
            i > 0 && (PlaySubtitle($__language_Array__["17b5d9d9a8a45e9caedee35173081145"]), ++k);
            oSym.addTask(10, fun, [k]);
            break;

          case 2:
            var h = oGd.$;

            while (--l) {
              for (let a = 1; a <= oS.R; a++) {
                let str = a + "_" + l + "_1";

                if (str == "4_2_1" || str == "2_2_1") {
                  continue;
                }

                if (h[str]) {
                  PlaySubtitle();
                  oSym.addTask(10, fun, [++k]);
                  return;
                }
              }
            }

            !i && (PlaySubtitle(), k = 0);
            oSym.addTask(10, fun, [k]);
            break;

          case 3:
            oS.SunNum > 99 && (SetNone($("imgSpareKK")), ClearChild($("PointerUD2")), PlaySubtitle($__language_Array__["2937f9f040f983f86c306638c3adc973"]), ++k);
            oSym.addTask(10, fun, [k]);
            break;

          default:
            oP.AddZombiesFlag(), oFlagContent.show(), oSym.addTask(800, PlaySubtitle);
        }
      }
    });
    BeginCool();
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
  }
}, {
  AZ: [[oZombie, 1, 1, [3]], [oConeheadZombie, 2, 1, [1]], [oBucketheadZombie, 3, 4, [1, 10, 11, 12, 13, 14, 15]], [oCaskZombie, 1, 1], [oImp, 3, 2, [2]], [oSadakoZombie, 1, 1]],
  FlagNum: 15,
  FlagToSumNum: {
    a1: [2, 3, 4, 7, 10],
    a2: [3, 12, 17, 30, 33, 48]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(GetPlantCardDom(oBambooUncle, EDAll));
  }
});