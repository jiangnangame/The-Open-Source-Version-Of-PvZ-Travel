/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie],
  PicArr: ["images/interface/MarshClue1.webp"],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["df1aa2f177b4d101cff136e1d8d9a2cd"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  LoadAccess: function (callback) {
    daveRemainTalk();
    let whiteShade = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:258;width:900px;height:600px;background:white;opacity:1;", 0, EDAll);

    function daveRemainTalk() {
      let bg = NewEle("talk" + Math.random(), "div", "z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:600px;border:5px 0 0 0;background:rgba(30,30,30,0.5);", 0, EDAll);
      let talkBox = NewEle("talk" + Math.random(), "div", "cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;", 0, bg);
      let arr = [$__language_Array__["4862c37a14f1f5f86e30fec8ed4c7a80"], $__language_Array__["3dd30631a80f42ad22f527bcf2ada501"], $__language_Array__["688f5ff5002c696483dea471129215d4"], $__language_Array__["241536c5486c82689edb02d0bdbf861f"], $__language_Array__["4879172bf7b863183e5654e3401d2003"], $__language_Array__["e36130f255c606a4dbf0b2f9179ba5cf"]];
      let index = -1;
      let interval = 50;
      let special = {
        "，": 200,
        "…": 300
      };
      let nowCompleted = false;

      talkBox.onclick = function () {
        if (index >= 0 && talkBox.innerText.length < arr[index].length) {
          let str = arr[index].split($__language_Array__["8f53512e9afaae938bf4432b640acfb9"]);
          talkBox.innerText = str[str.length - 1] + " ";
          nowCompleted = true;
          return;
        }

        nowCompleted = false;
        index++;

        if (index >= arr.length) {
          ClearChild(bg);
          next();
          return;
        }

        talkBox.innerText = "";
        let str = arr[index];
        let splitedChar = str instanceof Array ? str : str.split("");
        let charIndex = 0;
        let concatStr = "";
        let compareIndex = index;
        setTimeout(function f() {
          if (index != compareIndex || charIndex >= splitedChar.length || nowCompleted) {
            if (charIndex >= splitedChar.length && !nowCompleted) {
              setTimeout(_ => {
                if (index == compareIndex && !nowCompleted) {
                  nowCompleted = true;
                  talkBox.innerText = concatStr += " ";
                }
              }, 200);
            }

            return;
          }

          talkBox.innerText = concatStr += splitedChar[charIndex++];
          setTimeout(f, special[splitedChar[charIndex - 1]] ? special[splitedChar[charIndex - 1]] : interval);
        }, interval);
      };

      talkBox.click();
    }

    function next() {
      let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:259;width:900px;height:600px;background:#000;opacity:0;", 0, EDAll);
      let count = 0,
          DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
          dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

      (function fun() {
        DivTeach.onclick = fun;

        switch (count) {
          case 0:
            DivTeach.onclick = null;
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            innerText(DivTeach, $__language_Array__["a815fccd18a27cf53b8beb8dae34db43"]);
            oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
            count++;
            break;

          case 1:
            PlayAudio('crazydavelong2');
            innerText(DivTeach, $__language_Array__["27f47cb5fb4ad3ef7a5c9f4599242ea5"]);
            count++;
            break;

          case 2:
            ClearChild(DivTeach, dDave, whiteShade);
            oEffects.fadeOut(effect, 'slow', ele => {
              ClearChild(ele);
              callback();
            });
        }
      })();
    }
  }
}, {
  AZ: [[oZombie, 4, 1], [oConeheadZombie, 2, 1], [oBucketheadZombie, 2, 1], [oBalloonZombie, 2, 1], [oCigarZombie, 1, 1], [oFootballZombie, 1, 1], [oNewspaperZombie, 3, 1], [oStrollZombie, 2, 1], [oImp, 2, 1], [oCaskZombie, 1, 1], [oSadakoZombie, 1, 1]],
  FlagNum: 18,
  FlagToSumNum: {
    a1: [1, 2, 5, 8, 10, 13, 15, 17],
    a2: [3, 4, 6, 9, 12, 16, 25, 18, 50]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    ShowWinItem(NewImg("imgSF", "images/interface/MarshClue1.webp", "transform-origin:left top;transform: scale(0.12);", EDAll, {
      onclick: function () {
        GetNewProp(this, 'images/interface/MarshClue1.webp', $__language_Array__["5cf482faab174790db1ffb4d7c3083dd"], $__language_Array__["1ee2086ca20b42a55094118b09aaaff6"], 'Marsh24-1', 'top: -10%;transform: scale(0.15);width: 900px;height: 597px;');
      }
    }));
  }
});