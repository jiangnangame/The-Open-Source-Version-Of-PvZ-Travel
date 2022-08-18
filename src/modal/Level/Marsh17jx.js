/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oNutBowling, oBoomNutBowling],
  ZName: [oZombie, oConeheadZombie, oFootballZombie, oNewspaperZombie, oBucketheadZombie, oBalloonZombie, oImp, oCaskZombie],
  PicArr: ["images/interface/MarshClue2.webp"],
  backgroundImage: "images/interface/MarshJx.webp",
  CanSelectCard: 0,
  DKind: 0,
  LevelName: $__language_Array__["5c3bcece7c7b040618cdd2dbdfce2ab9"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready_JX",
  StartGameMusic: "Bgm_Marsh_Fight_JX",
  StartGame: _ => oMiniGames.ConveyorBelt([oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oBoomNutBowling, oBoomNutBowling], 300, 1),
  LoadAccess: function (a) {
    NewEle(0, "div", "left:377px;", {
      className: 'FlowerBed'
    }, FightingScene);
    oSym.addTask(90, a);
  }
}, {
  AZ: [[oZombie, 5, 1], [oConeheadZombie, 3, 1], [oBucketheadZombie, 2, 1], [oNewspaperZombie, 2, 1], [oCaskZombie, 2, 1], [oImp, 2, 10], [oFootballZombie, 1, 10], [oBalloonZombie, 2, 1]],
  FlagNum: 10,
  FlagToSumNum: {
    a1: [3, 5, 9],
    a2: [30, 60, 40, 80]
  },
  FlagToMonitor: {}
}, {
  GrowPlant: function (l, c, b, f, a) {
    ZimuRQ.style.display === 'block' && PlaySubtitle();

    if (c > 347) {
      PlaySubtitle($__language_Array__["14d5f7e231543299edc152680136c4a6"]);
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