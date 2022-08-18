/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oRadish, oPeashooter, oSnowPea, oCherryBomb, oRepeater, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oBegonia, oPepper, oIceAloe, oSpikeweed],
  ZName: [oWinterBoss, oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oZomboni, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oIceBlock, oPushIceImp, oMembraneZombie],
  LevelName: $__language_Array__["575e9e1581c0c21312dd91eb91721e4b"],
  StaticCard: 0,
  CanSelectCard: 0,
  ControlFlagmeter: 0,
  LoadMusic: 'Fuben_Winter_Ready',
  StartGameMusic: 'Fuben_Winter_Fight2',
  LoadAccess: function (a) {
    NewImg("imgKK", "images/interface/Winter_filter.webp", "left:-115px;pointer-events: none;", FightingScene);
    PlayAudio('Bgm_Polar_Noise', 1);
    oSym.addTask(30, a);
    SetStyle($("dZombie"), {
      visibility: "hidden"
    });
  },
  StartGame: function () {
    oEffects.BgParticle({
      url: "images/Props/Effect/snow_pieces.png",
      style: 'left:115px;'
    });
    var observer = new MutationObserver(function (mutations) {
      oP.NumZombies < 0 && (oP.NumZombies = 1);
    });
    observer.observe(EDPZ, {
      childList: true
    });
    let boss = PlaceZombie(oBossB, 4, 8, 0);
    oFlagContent.init({
      MeterType: 'LeftBar RedBar',
      HeadType: 'BOSSHead',
      fullValue: boss.HP,
      curValue: 0
    }).show().update({
      curValue: boss.HP,
      animConfig: {
        duration: 1 / oSym.NowSpeed,
        ease: "ease-out"
      }
    });
    oS.InitLawnMover();
    SetStyle($("dZombie"), {
      visibility: "visible"
    });
    oMiniGames.IceStorm(1, 5, 0);

    for (let i = 1; i <= 5; ++i) {
      for (let j = 8; j < 10; ++j) {
        CustomSpecial(oRifter, i, j);
        CustomSpecial(oBegonia, i, j);
        oSym.addTask(1, _ => {
          CustomSpecial(oRifter, i, j);
        });
      }
    }

    oSym.addTask(3200, function k() {
      if (Math.random() * 3 < 2) {
        const ran = Math.floor(Math.random() * 5) + 1;
        oMiniGames.IceStorm(ran, ran, Math.floor(Math.random() * 3) + 1);
      } else {
        const def = [[1, 4], [3, 4], [4, 5], [1, 3], [3, 5], [2, 4], [1, 2], [2, 3]],
              Select = def[Math.floor(Math.random() * def.length)];
        oMiniGames.IceStorm(Select[0], Select[1], Math.floor(Math.random() * 2) + 1);
      }

      oSym.addTask(Math.random() * 3000 + 6000, k);
    });
    oMiniGames.ConveyorBelt(oS.PName, 325, 1, [oSporeShroom, oSporeShroom, oSporeShroom, oCherryBomb, oCherryBomb, "random", oDoomShroom, oJalapeno, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oCherryBomb, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oSporeShroom, oSporeShroom, oSporeShroom, "random", "random", "random", oRadish, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oDoomShroom, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oDoomShroom, oDoomShroom, "random", "random", oRadish, oRadish, oRadish, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oDoomShroom, "random", oDoomShroom, "random", "random", "random", "random", "random", "random", "random", "random", "random", "random", oCherryBomb, "random", "random", "random", "random", "random", "random", oJalapeno]);
  }
}, {
  AZ: [[oImp, 1, 1]],
  FlagNum: 1,
  FlagToMonitor: {},
  FlagToSumNum: {
    a1: [1],
    a2: [0]
  },
  FlagToEnd: function () {
    NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
      onclick: function () {
        GetWin(this, 'SelectionMap/Fuben_Winter_SelectionMap.js');
      }
    });
  }
});