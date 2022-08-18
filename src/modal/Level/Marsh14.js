/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oCigarZombie, oFootballZombie],
  PicArr: function () {
    var a = oLight.prototype,
        b = a.PicArr;
    return [b[a.CardGif], b[a.StaticGif]];
  }(),
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["72c80f0a239a0dc4cb8eeab1fe2890b4"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["134c197b0229a159d949706b911472b8"]);
          oEffects.ScreenShake();
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0e67603c4834f623dbbf977178970a22"]);
          count++;
          break;

        case 2:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["03313c39ca86ac01f1e82de20cf4b959"]);
          count++;
          break;

        case 3:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["487a937bdb8d5529bcc6f5ba2de1b68c"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["a4f3f9052df6bd3bd4c42be20a80505d"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["c715b85c821d20bcf1444f2580912ec1"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["318a5fa0459cd346d6c6838362749a6f"]);
          count++;
          break;

        case 7:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["e389d2e0d3428f18f2d7315213f46fb8"]);
          count++;
          break;

        case 8:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["81bf8c7733441140c4416be1001edafe"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["2a57dcf313dea9a81ecb3ca2291d803c"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["c7fcef665fa12130ba5fdf5bee536788"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e18d8df6e6ccd03f8ddcbe0ec45c8235"]);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["ebbf6c33e5d9fb85d4e4edd95f87ba37"]);
          count++;
          break;

        case 13:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["9186542d1c6ea22dbbcdac9890543fef"]);
          oEffects.ScreenShake();
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["f3afd1e82b01c43548c62993d0bcc8c5"]);
          count++;
          break;

        case 15:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  },
  StartGame: function () {
    for (C = 2, len = 5; C < len; C++) {
      CustomSpecial(oSunShroom, C, 2);
    }

    ;
    loadRes({
      au: ["Bgm_Marsh_Plot3"]
    });
    StopMusic();
    PlayMusic(oS.LoadMusic = oS.StartGameMusic);
    NewMusic(oS.LoadMusic = oS.StartGameMusic);
    SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
    oS.InitLawnMover();
    oS.ControlFlagmeter && oFlagContent.init({
      fullValue: oP.FlagNum - 1,
      curValue: 0
    });
    PrepareGrowPlants(function () {
      oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
      BeginCool();
      oS.DKind && AutoProduceSun(50);
      oSym.addTask(1500, function () {
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      }, []);
    });
  }
}, {
  AZ: [[oZombie, 5, 1, [1]], [oConeheadZombie, 3, 2, [2]], [oBucketheadZombie, 1, 1], [oFootballZombie, 1, 3], [oStrollZombie, 2, 1, [1]], [oCigarZombie, 1, 1]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [1, 2, 5, 8],
    a2: [2, 4, 10, 15, 35]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
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

    let effect = NewEle("effect" + Math.random(), "div", "left:115px;position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", "left:415px;", 0, EDAll),
        dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          DivTeach.onclick = null;
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["e6ff09a95b48bb72c6d3a15164b9db52"]);
          oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
          count++;
          break;

        case 1:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["bd9794b7a96908f101f4c9bcf42a1a82"]);
          count++;
          break;

        case 2:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["17c1173ded622c9b2d883918de3dc4b8"]);
          count++;
          break;

        case 3:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["90f1347da04ab282035758ea5d0c5d29"]);
          count++;
          break;

        case 4:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["37fb6a6762a18b0bef4cd0e04bf04c42"]);
          count++;
          break;

        case 5:
          PlayAudio("Bgm_Marsh_Plot3", 1);
          PlayAudio('Zomboss2');
          innerText(DivTeach, '…');
          count++;
          break;

        case 6:
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["391105a3e5b6e1ec01cf7db51d83762f"]);
          count++;
          break;

        case 7:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["0714eea4f16d9535dd71a03b3b590df8"]);
          count++;
          break;

        case 8:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["a4e997d20b3b70e945ede45d807643c7"]);
          count++;
          break;

        case 9:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["bf482874e1e3f72dd00108f534e0b041"]);
          count++;
          break;

        case 10:
          PlayAudio('Zomboss2');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["5553fa87dcd19153d6d854111caecdb4"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 11:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["c8d2802272631370504855e489887482"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 12:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["27f5523fe366c12f843209377d53edff"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 13:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["12f8b40a3a62eac739f84d6de88653a2"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 14:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["6a2ae3c5f3737e076f19a52d330d26b3"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 15:
          PlayAudio('Zomboss1');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["caca4f69afc4f89d1aba0d180bedebf6"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 16:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["1cc127459201ba285a609f3b5a01f141"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 17:
          PlayAudio('Zomboss3');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["b72b6358a91bbc3fd295f9ab0396c39a"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 18:
          PlayAudio('Zomboss2');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["374b508d92af7a85c7e012261a734065"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 19:
          PlayAudio('Zomboss1');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["30034f6659f3c171f75ccc80e01a2a86"], 18, true, "")[0] + "</p>";
          count++;
          break;

        case 20:
          PlayAudio('Zomboss2');
          innerText(DivTeach, '…');
          count++;
          break;

        case 21:
          PlayAudio('Zomboss1');
          innerText(DivTeach, $__language_Array__["b8b990a15c795ca9f87c1a11b1d24a9a"]);
          count++;
          break;

        case 22:
          PlayAudio('Zomboss2');
          innerText(DivTeach, '…');
          count++;
          break;

        case 23:
          DivTeach.onclick = null;
          PlayAudio('Zomboss1');
          DivTeach.innerHTML = "<p style='position:absolute;top:-20px;left:20px;'>" + makeUpSplitText($__language_Array__["ff4d694fc4b6a60f9eb024770788e382"], 18, true, "")[0] + "</p>";
          oEffects.Animate(effect, {
            background: "black"
          }, 'slow', 'linear', () => DivTeach.onclick = fun);
          count++;
          break;

        case 24:
          StopAudio("Bgm_Marsh_Plot3");
          ClearChild(DivTeach, dDave);
          oEffects.fadeOut(effect, 'slow', ele => {
            ClearChild(ele);
            win();
          });
      }
    })();

    function win() {
      localStorage.JNG_TR_PropsUnlock = JSON.stringify(Object.assign(localStorage.JNG_TR_PropsUnlock ? JSON.parse(localStorage.JNG_TR_PropsUnlock) : {}, {
        "light": 1
      }));
      NewImg("PointerUD2", "images/interface/down.gif", "left:13px;top:-43px;", EDAll);
      let dom = NewEle("", "div", "position:absolute;left:300px;top:300px;overflow:visible;width:60px;height:60px;", {}, EDAll);
      let dom2 = NewImg("PointerUD2", "images/interface/down.gif", "left:10px;top:-50px;", dom);
      NewImg("imgSF", "images/Props/PropsIcon/light.webp", "left:0px;top:0px;", dom, {
        onclick: function () {
          ClearChild(dom2);
          GetNewProp(this, 'images/Props/Light/p.gif', $__language_Array__["889a67d40fa470815613396f142e1b28"], $__language_Array__["d62249ef79ab266c5387d93a5cbd1c57"], NextLevel(), '200px', '410px');
        }
      });
      ShowWinItem(dom);
    }
  }
});