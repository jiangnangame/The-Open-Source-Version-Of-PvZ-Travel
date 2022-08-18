/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oNutBowling, oBoomNutBowling],
  ZName: [oSadakoZombie],
  PicArr: [],
  CanSelectCard: 0,
  DKind: 0,
  LevelName: $__language_Array__["232617015ee41bd379d6b9ba9a778e4c"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight_Challenge",
  FixedProps: 'disabled',
  LoadAccess: function (a) {
    NewEle(0, "div", "left:377px;", {
      className: 'FlowerBed'
    }, FightingScene);
    oSym.addTask(90, a);
  },
  StartGame: _ => oMiniGames.ConveyorBelt([oNutBowling, oNutBowling, oNutBowling, oNutBowling, oNutBowling, oBoomNutBowling, oBoomNutBowling])
}, {
  AZ: [[oSadakoZombie, 9, 1]],
  FlagNum: 8,
  FlagToSumNum: {
    a1: [2, 4, 6],
    a2: [2, 3, 12, 60]
  }
}, {
  GrowPlant: function (l, c, b, f, a) {
    ZimuRQ.style.display === 'block' && PlaySubtitle();

    if (c > 347) {
      PlaySubtitle($__language_Array__["54100c56d7913bd94e7d657d7069bcd1"]);
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