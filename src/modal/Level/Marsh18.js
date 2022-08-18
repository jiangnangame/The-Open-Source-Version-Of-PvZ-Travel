/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 {
  let rand = Math.random();
  oS.Init({
    PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle,
    /*oLight,*/
    oAbutilonHybriden, oPumpkinHead],
    ZName: [oImp, oConeheadZombie, oBucketheadZombie, oFootballZombie, oSadakoZombie, oCigarZombie],
    PicArr: ["images/interface/Black_Dave.png"],
    AudioArr: [`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`],
    CanSelectCard: 1,
    LevelName: $__language_Array__["3e49ef433fb3d726c90af185d41074de"],
    SunNum: 150,
    DKind: 0,
    LoadMusic: "Bgm_Marsh_Ready",
    StartGameMusic: "Bgm_Marsh_Fight",
    LoadAccess: function (callback) {
      if (rand < 0.5) {
        let count = 0,
            DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
            dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

        (function fun() {
          DivTeach.onclick = fun;

          switch (count) {
            case 0:
              dDave.src = 'images/interface/Zomboss.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 1:
              dDave.src = 'images/interface/Black_Dave.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 2:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["f1061016b2ea6468db42b1ba3152459d"]);
              count++;
              break;

            case 3:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["ac8dd09a8bf06b8ceb35f81be250aa95"]);
              count++;
              break;

            case 4:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["65b629e86fad5d8a42be2f8bb1ed9359"]);
              count++;
              break;

            case 5:
              dDave.src = 'images/interface/Black_Dave.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 6:
              innerText(DivTeach, '…………');
              count++;
              break;

            case 7:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["9d1166601fd30353e056f0d71db0926b"]);
              count++;
              break;

            case 8:
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["97fa354b241bc0f8a597791149dabf87"]);
              count++;
              break;

            case 9:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["973262d0245791d2defdd0eb617dd5bf"]);
              count++;
              break;

            case 10:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["c43100389dc6ac1ed8e10cde5486c6c9"]);
              count++;
              break;

            case 11:
              dDave.src = 'images/interface/Zomboss.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 12:
              dDave.src = 'images/interface/Black_Dave.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 13:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["6f3381aa1f63036d3cf6fbadb7f60fb7"]);
              count++;
              break;

            case 14:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["652c71a5fa5582efd4565e91da348d8c"]);
              count++;
              break;

            case 15:
              dDave.src = 'images/interface/Zomboss.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 16:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["6c4420395ce56c2aafda9863cca82754"]);
              count++;
              break;

            case 17:
              dDave.src = 'images/interface/Zomboss.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 18:
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["953a1effbcd71fc00959f831ee74b228"]);
              count++;
              break;

            case 19:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["17472b504586cad3c8ea3c4b06916ac8"]);
              count++;
              break;

            case 20:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["07f772e4a2d5bea87154328ce289e00e"]);
              count++;
              break;

            case 21:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["5912b1169a02f4bd34ab70053e9127b8"]);
              count++;
              break;

            case 22:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["13388454bad502ef52771d7da2f0f334"]);
              count++;
              break;

            case 23:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["9b30a57af1715462a106e9df72058b75"]);
              count++;
              break;

            case 24:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["1f8cbec3cd1dd372cc74df6fadcc55c2"]);
              count++;
              break;

            case 25:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["b04e126cf7e09c459b2ae10ef959352a"]);
              count++;
              break;

            case 26:
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["79a55eb1481a2953970afaa13af8fafa"]);
              count++;
              break;

            case 27:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["2142692b5da19e302c97bda737be9d64"]);
              count++;
              break;

            case 28:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["0cefa04b7e30ffb33b4e30bc04294ab3"]);
              count++;
              break;

            case 29:
              dDave.src = 'images/interface/Dave.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 30:
              PlayAudio('crazydavelong1');
              innerText(DivTeach, $__language_Array__["2f7bc97261de30e72d6486a44a514922"]);
              count++;
              break;

            case 31:
              PlayAudio('crazydavelong1');
              innerText(DivTeach, $__language_Array__["b18259e5c4fdbfe249b2a5ea3cef3545"]);
              count++;
              break;

            case 32:
              PlayAudio('crazydavelong3');
              innerText(DivTeach, $__language_Array__["ca743232f4ff7b1c1a750d6e270c9c2e"]);
              count++;
              break;

            case 33:
              innerText(DivTeach, '……');
              count++;
              break;

            case 34:
              PlayAudio('crazydavelong1');
              innerText(DivTeach, $__language_Array__["8648d6565d4ecea5506a9aee671c37d4"]);
              count++;
              break;

            case 35:
              ClearChild(DivTeach, dDave);
              oSym.addTask(30, callback);
          }
        })();
      } else {
        oSym.addTask(30, callback);
      }
    }
  }, {
    AZ: [[oImp, 3, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1], [oFootballZombie, 3, 1], [oSadakoZombie, 1, 1], [oCigarZombie, 1, 1]],
    FlagNum: 18,
    FlagToSumNum: {
      a1: [1, 2, 4, 8, 12, 15],
      a2: [2, 4, 7, 10, 16, 25, 34]
    },

    FlagToEnd() {
      if (rand < 0.5) {
        let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;left:115px;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
        let count = 0,
            DivTeach = NewEle("DivTeach", "div", "position:absolute;left:415px;", 0, EDAll),
            dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

        (function fun() {
          DivTeach.onclick = fun;

          switch (count) {
            case 0:
              DivTeach.onclick = null;
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["d17adbbaf82ee0dc8e0d71c40506df9c"]);
              oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
              count++;
              break;

            case 1:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["c9bc5f57cc69c70ff1f5da4ec1048d21"]);
              count++;
              break;

            case 2:
              dDave.src = 'images/interface/Black_Dave.png';
              innerText(DivTeach, '……');
              count++;
              break;

            case 3:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["aa4467293b058ba1de26642ff500a39d"]);
              count++;
              break;

            case 4:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["1f82869a6456849400bf0127567758fc"]);
              count++;
              break;

            case 5:
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["80e0b13478b25016ee6fd3aa6543b16d"]);
              count++;
              break;

            case 6:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["8d1d7a8bea38859f03dd159cd755bdad"]);
              count++;
              break;

            case 7:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["8b926c199ea4dec8e7dc65429910164a"]);
              count++;
              break;

            case 8:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["090909d168dd94a8427be2f903fd50dd"]);
              count++;
              break;

            case 9:
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["f68777e7888dc87bd5f6e60f5e5907e6"]);
              count++;
              break;

            case 10:
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["1d2281f3f90d3fffa1915997d034cbaa"]);
              count++;
              break;

            case 11:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["11da1e4a7562a341cb06afda2829c8ed"]);
              count++;
              break;

            case 12:
              dDave.src = 'images/interface/Zomboss.png';
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["cab83a83de57065bc2c39e280c4b120e"]);
              count++;
              break;

            case 13:
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["007c239313916681651be89e62731cb5"]);
              count++;
              break;

            case 14:
              PlayAudio('Zomboss1');
              innerText(DivTeach, '5……2……8……4……9……1……');
              count++;
              break;

            case 15:
              PlayAudio('Zomboss2');
              innerText(DivTeach, $__language_Array__["624b38b01c54cdb71c489180d99b06c0"]);
              count++;
              break;

            case 16:
              PlayAudio('Zomboss1');
              innerText(DivTeach, $__language_Array__["28e3db47d7a9dc054cc7b0c190984ceb"]);
              count++;
              break;

            case 17:
              PlayAudio('Zomboss3');
              innerText(DivTeach, $__language_Array__["085be5a852226b26c166a7fe3943dd68"]);
              count++;
              break;

            case 18:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
              innerText(DivTeach, $__language_Array__["c6ef21b73f1c851560e409ab7144da33"]);
              count++;
              break;

            case 19:
              ClearChild(DivTeach, dDave);
              oEffects.fadeOut(effect, 'slow', ClearChild);
              setTimeout(() => {
                oS.DefaultFlagToEnd();
              }, 900);
          }
        })();
      } else {
        oS.DefaultFlagToEnd();
      }
    }

  });
}