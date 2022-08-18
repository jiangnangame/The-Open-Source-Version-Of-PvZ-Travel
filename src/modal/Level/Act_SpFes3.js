/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oNutBowling, oBoomNutBowling, oSnowPea, oRepeater, oPeashooter, oDoomShroom],
  ZName: [oZombie, oConeheadZombie, oStrollZombie, oNewspaperZombie, oBucketheadZombie, oCigarZombie, oImp, oFootballZombie],
  PicArr: ["images/interface/Polar.webp", 'images/interface/Encirclement_and_annihilation1.webp'],
  backgroundImage: "images/interface/Polar.webp",
  CanSelectCard: 0,
  DKind: 0,
  LevelName: $__language_Array__["011cf12e1715c9f023627279f702e3dc"],
  StaticCard: 0,
  LoadMusic: "Bgm_Polar_Ready_1",
  StartGameMusic: "Bgm_Polar_Fight_Challenge",
  LF: [0, 3, 3, 3, 3, 3],
  InitLawnMover: () => {},
  StartGame: function () {
    NewEle(0, "div", "left:900px;", {
      className: 'FlowerBed'
    }, $("tGround"));
    NewImg("imgKK", "images/interface/Polar_Mask1.webp", "left:52px;top:546px;", EDAll); //划分允许种植的区域

    for (let x = 0; x < 3; x++) {
      for (let y = 2; y < 6; y++) {
        CustomSpecial(oInvisibleFlowerPot, y, x);
      }
    }

    for (let y = 2; y < 6; y++) {
      CustomSpecial(oInvisibleFlowerPot, y, 9);
    } //就不能写一个arr来批量读取和调用？！
    // *不*


    CustomSpecial(oInvisibleFlowerPot, 1, 4);
    CustomSpecial(oInvisibleFlowerPot, 1, 5);
    CustomSpecial(oInvisibleFlowerPot, 4, 6);
    CustomSpecial(oInvisibleFlowerPot, 4, 7);
    CustomSpecial(oInvisibleFlowerPot, 5, 4);
    CustomSpecial(oInvisibleFlowerPot, 5, 3); //划定换向器

    CustomSpecial(oGoDown, 1, 6);
    CustomSpecial(oGoLeft, 2, 6);
    CustomSpecial(oGoDown, 2, 4);
    CustomSpecial(oGoRight, 3, 4);
    CustomSpecial(oGoUp, 3, 7);
    CustomSpecial(oGoRight, 2, 7);
    CustomSpecial(oGoDown, 2, 8);
    CustomSpecial(oGoLeft, 5, 8);
    CustomSpecial(oGoUp, 5, 5);
    CustomSpecial(oGoLeft, 4, 5);
    CustomSpecial(oGoUp, 4, 3);
    CustomSpecial(oGoLeft, 1, 3);
    oMiniGames.ConveyorBelt([oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oBoomNutBowling, oBoomNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oBoomNutBowling, oBoomNutBowling, oPeashooter, oDoomShroom, oPeashooter, oSnowPea, oRepeater], 400, 2, [oNutBowling]);
  },
  LoadAccess: function (a) {
    NewEle(0, "div", "width:680px;height:535px;position:absolute;z-index:1;background:url(images/interface/Encirclement_and_annihilation1.webp);left:225px;top:65px;", 0, $("tGround"));
    NewImg("imgKK", "images/interface/Polar_Mask2.webp", "left:1131px;", EDAll);
    PlayAudio('Bgm_Polar_Noise', 1);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["a5bcf9c2a7909c5a2dc72414f953c56b"]);
          count++;
          break;

        case 1:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["1c566ec340d5c3ac2e2cb17ad65a1ebe"]);
          count++;
          break;

        case 2:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["dac34a2f13dc64e6f83e67f36b73b78b"]);
          count++;
          break;

        case 3:
          {
            dDave.src = 'images/interface/Dave.png';
            AllAudioPaused();
            let str = $__language_Array__["a749d97baae38a737980afb3a391a93d"];

            for (let i = 1; i <= str.length; i++) {
              oSym.addTask(30 * (i - 1), _ => {
                innerText(DivTeach, str.substr(0, i));
              });
            }

            oSym.addTask(30 * str.length, fun);
            DivTeach.onclick = null;
            count++;
          }
          break;

        case 4:
          DivTeach.onclick = fun;
          AllAudioPauseCanceled();
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["83485be04ba3f2456005ce9d2a7d73c9"]);
          count++;
          break;

        case 5:
          {
            dDave.src = 'images/interface/Dave.png';
            PlayAudio('crazydavelong1');
            let str = $__language_Array__["b6b06dd9f098981c02c060ee7918ebea"];

            for (let i = 1; i <= str.length; i++) {
              oSym.addTask(15 * (i - 1), _ => {
                innerText(DivTeach, str.substr(0, i));
              });
            }

            oSym.addTask(15 * str.length, fun);
            DivTeach.onclick = null;
            count++;
          }
          break;

        case 6:
          DivTeach.onclick = fun;
          ClearChild(DivTeach, dDave);
          jngAlert.open({
            'text': $__language_Array__["b7498869d5c1e11a79bbb8e35440c415"],
            'type': 0,
            'shade': 1,
            'nextHandler': _ => oSym.addTask(10, a)
          });
      }
    })();
  }
}, {
  //oZombie,oConeheadZombie,oStrollZombie,oNewspaperZombie,oBucketheadZombie,oCigarZombie,oImp,oFootballZombie
  AZ: [[oZombie, 5, 1], [oConeheadZombie, 3, 1], [oStrollZombie, 1, 15], [oNewspaperZombie, 1, 15], [oBucketheadZombie, 2, 1], [oCigarZombie, 2, 1], [oImp, 2, 10], [oFootballZombie, 1, 10]],
  FlagNum: 22,
  FlagToSumNum: {
    a1: [3, 5, 9, 15, 22],
    a2: [10, 22, 45, 60, 130]
  },
  FlagToMonitor: {},
  FlagToEnd: function () {
    localStorage.removeItem('JNG_TR_ACT_SPFES'); //更新缓存

    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function (e) {
        GetWin(e.target, Exitlevel(oS.Lvl, 1));
      }
    });
  }
}, {
  GrowPlant: function (l, c, b, f, a) {
    ZimuRQ.style.display === 'block' && PlaySubtitle();

    if (c > 820) {
      PlaySubtitle($__language_Array__["0b6b6890d27d87b1fab0ae31f02802fe"]);
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