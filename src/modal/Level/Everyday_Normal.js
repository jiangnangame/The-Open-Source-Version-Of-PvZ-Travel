/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';

{
  function unique(arr) {
    var x = new Set(arr);
    return [...x];
  }

  let Ground = [];
  let leftGe = 45;

  for (let i = 1; i <= 5; i++) {
    Ground[i] = [];
  }

  function summonRifter() {
    let num = Math.floor(Math.seededRandomV2(5, 11));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandomV2(1, 6)),
          C = Math.floor(Math.seededRandomV2(5, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        CustomSpecial(oRifter, R, C);
        --num;
        --leftGe;
      }
    }
  }

  function summonCrystal() {
    let num = Math.floor(Math.seededRandomV2(1, 3));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandomV2(1, 6)),
          C = Math.floor(Math.seededRandomV2(6, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        PlaceZombie(oCrystal, R, C);
        --num;
        --leftGe;
      }
    }
  }

  function summonSculpture() {
    let num = Math.floor(Math.seededRandomV2(4, 8));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandomV2(1, 6)),
          C = Math.floor(Math.seededRandomV2(6, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        PlaceZombie(oSculpture, R, C);
        --num;
        --leftGe;
      }
    }
  }

  function summonObs() {
    let Ground = [];
    let add = [oZombiePlusBloodObs, oZombiePlusBloodObs, oZombiePlusBloodObs, oZombiePlusBloodObs, oSummonZombieObs, oSummonZombieObs, oZombieComeOnObs, oZombieComeOnObs, oZombieComeOnObs, oZombieComeOnObs, oZombieComeOnObs];

    for (let i = 1; i <= 5; i++) {
      Ground[i] = [];
    }

    let num = Math.floor(Math.seededRandomV2(4, 7));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandomV2(1, 6)),
          C = Math.floor(Math.seededRandomV2(6, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        let tmp = Math.floor(Math.seededRandomV2(0, add.length));
        CustomSpecial(add[tmp], R, C);
        --num;
        --leftGe;
      }
    }
  }

  let sunPlant = [oSunShroom, oSunFlower];
  let boomPlant = [oCherryBomb, oBambooUncle];
  let fogPlant = [oPlantern, oBlover];
  let sets = []; //sets[x] = [image,filter,DKind,LoadMusic,StartGameMusic,loadAccess]

  sets[0] = ["images/interface/Forest.webp", "BgMask-Forest", 1, "Bgm_Forest_Ready", "Bgm_Forest_Fight", false];
  sets[1] = ["images/interface/Marsh.webp", "BgMask-Marsh", 0, "Bgm_Marsh_Ready", "Bgm_Marsh_Fight", false];
  sets[2] = ["images/interface/Polar.webp", "BgMask-Polar", 1, "Bgm_Polar_Ready_1", "Bgm_Polar_Fight_1", function () {
    summonRifter();
    PlayAudio('Bgm_Polar_Noise', 1);
    NewImg("imgKK", `images/interface/Polar_Mask2.webp`, `left:1131px;`, EDAll);
    NewImg("imgKK", `images/interface/Polar_Mask1.webp`, "left:167px;top:546px;", EDAll);
  }];
  sets[3] = ["images/interface/Polar2.webp", false, 0, "Bgm_Polar_Ready_2", `Bgm_Polar_Fight_${2 + Math.round(Math.random() * 2)}`, function () {
    summonRifter();
    PlayAudio('Bgm_Polar_Noise', 1);
    NewImg("imgKK", `images/interface/Polar_Mask4.webp`, `left:1100px;`, EDAll);
    NewImg("imgKK", `images/interface/Polar_Mask3.webp`, "left:167px;top:546px;", EDAll);
    NewEle('PolarFire2', "div", null, 0, $('tGround')), NewEle('PolarFire', "div", null, 0, $('tGround'));
  }];
  sets[4] = ['images/interface/MarshJx.webp', "BgMask-Marsh", 1, "Bgm_Marsh_Ready_JX", "Bgm_Marsh_Fight_JX", _ => {
    summonObs();
  }];
  sets[5] = ["images/interface/ForestJx.webp", "BgMask-Forest", 0, "Bgm_Forest_Ready_JX", "Bgm_Forest_Fight_JX"];
  sets[6] = ["images/interface/Industry.webp", false, 1, "Bgm_Industry_Ready", "Bgm_Industry_Fight", function () {
    NewImg(`BgMask${Math.random()}`, `images/interface/Industry_Mask.png`, `left:0;top:469px;position:absolute;z-index:23;`, EDAll);
    summonSculpture();
  }];
  let DateInt = new Date(),
      DateInt3 = DateInt.getDate() + (DateInt.getMonth() + 1) * 100 + DateInt.getFullYear() * 10000,
      DateInt2 = Math.floor((Math.abs(DateInt.getDate() * (DateInt.getMonth() + 1) - DateInt.getFullYear()) / DateInt3 + DateInt.getDay()) * Math.sqrt(DateInt3));
  Math.seedV2 = [DateInt3, DateInt2];
  DateInt = DateInt3; //CLEAN SEED

  let theLevelType = Math.floor(Math.seededRandomV2(7, 0)),
      theSettingNowDay = Math.floor(Math.seededRandomV2(0, sets.length));
  let AllPlants = [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oTallNut, oPuffShroom, oFumeShroom, oSporeShroom, oAbutilonHybriden, oPumpkinHead, oPepper, oIceAloe, oMonotropa, oSpikeweed, oTorchwood, oKiwibeast, oMiracleImitater, oJalapeno, oCabbage, oShiitake, oKernelPult, oXshooter, oMacintosh];
  let WillselectP = [],
      WillselectZ = [oZombie],
      WillAZ = [[oZombie, 2, 1]];

  if (theLevelType < 2) {
    let canGivePlants = AllPlants.slice(0);

    for (let i = 1; i <= 8; i++) {
      let selected = Math.floor(Math.seededRandomV2(0, canGivePlants.length));
      WillselectP[i] = canGivePlants[selected];
      canGivePlants.splice(selected, 1);
    }

    WillselectP[0] = sunPlant[sets[theSettingNowDay][2]];
    WillselectP[9] = boomPlant[Math.floor(Math.seededRandomV2(0, 2))];

    if (theSettingNowDay == 6) {
      WillselectP[8] = fogPlant[Math.floor(Math.seededRandomV2(0, 2))];
    }
  } else if (theLevelType < 5) {
    WillselectP = AllPlants;
    WillselectP.splice(1, 0, oSunFlower, oSunShroom);

    if (theSettingNowDay == 6) {
      WillselectP.push(fogPlant[Math.floor(Math.seededRandomV2(0, 2))]);
    }
  } else {
    const len = AllPlants.length;

    for (let i = 0; i <= len; i++) {
      let selected = Math.floor(Math.seededRandomV2(0, len));
      WillselectP[i] = AllPlants[selected];
    }

    if (theSettingNowDay == 6) {
      WillselectP.push(fogPlant[Math.floor(Math.seededRandomV2(0, 2))]);
    }
  }

  let allTimes = Math.seededRandomV2(6, 12);
  let canSelectZ = [oConeheadZombie, oBucketheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oSkatingZombie, oMakeRifterZombie, oPushIceImp, oMembraneZombie, oSculptorZombie, oBeetleCarZombie, oGargantuar, oThiefZombie];
  let FlagN = Math.floor(Math.seededRandomV2(8, 14));
  let CustomLevels = {
    "oMembraneZombie": 3,
    "oZomboni": 4,
    "oZombie": 0,
    "oGargantuar": 9.6,
    "oFootballZombie": 4,
    "oSculptorZombie": 3,
    "oPushIceImp": 2,
    "oMakeRifterZombie": 2,
    "oBalloonZombie": 1,
    "oStrollZombie": 0,
    "oBeetleCarZombie": 4
  };

  for (let i = 1; i <= allTimes; i++) {
    let selected = Math.floor(Math.seededRandomV2(0, canSelectZ.length));
    WillselectZ[i] = canSelectZ[selected];
    let tmp = WillselectZ[i].prototype;
    WillAZ[i] = [WillselectZ[i], Math.floor(Math.seededRandomV2(1, 4 / tmp.Lvl + 1)), Math.min(FlagN, Math.round((CustomLevels[tmp.EName] ? CustomLevels[tmp.EName] : tmp.Lvl) * Math.seededRandomV2(1.4, 2.6)) + 1)];
    canSelectZ.splice(selected, 1);
  }

  let BeginNum = Math.floor(Math.seededRandomV2(0, 3)),
      DI = 1;
  let a1 = [],
      a2 = [];

  for (let i = 1; i <= FlagN; i++) {
    a1[i - 1] = i;

    if (i < 4) {
      BeginNum += i;
    } else {
      BeginNum += Math.floor(Math.seededRandomV2(4, 7 + 6 * (i - DI)));
    }

    BeginNum = Math.abs(BeginNum);
    BeginNum == 0 && (BeginNum = Math.floor(Math.seededRandomV2(1, 5)));
    a2[i - 1] = BeginNum;
    i % 6 == 3 && (DI += 6);
  }

  if (theSettingNowDay == 5) {
    WillselectZ.push(oCrystal);
  }

  if (theLevelType >= 5) {
    for (let i = 0; i < FlagN; i++) {
      a2[i] = Math.round(a2[i] * Math.max(6 / (i + 1), 1.5));
    }
  }

  if (theSettingNowDay == 6) {
    WillselectZ.push(oSculpture);
  }

  if (WillselectZ.find(function (i) {
    return i == oGargantuar;
  })) {
    WillselectZ.push(oImp);
  }

  oS.Init({
    PName: unique(WillselectP),
    ZName: unique(WillselectZ),
    PicArr: ["images/interface/MarshClue1.webp"],
    CanSelectCard: theLevelType >= 2 && theLevelType < 5 ? 1 : 0,
    StaticCard: theLevelType >= 5 && theLevelType < 7 ? 0 : 1,
    DKind: sets[theSettingNowDay][2],
    SunNum: (1 ^ sets[theSettingNowDay][2]) * 125 + 150,
    backgroundImage: sets[theSettingNowDay][0],
    LevelName: $__language_Array__["d1aedb481cf4bd6e610132b88fabd0e3"],
    LoadMusic: sets[theSettingNowDay][3],
    StartGameMusic: sets[theSettingNowDay][4],
    HaveFog: function () {
      const a = Math.floor(Math.seededRandomV2(6, 3)),
            b = Math.seededRandomV2(10, 0);
      return theSettingNowDay == 6 ? {
        'leftBorder': a,
        'type': b > 4 ? 'Fog' : 'strongFog'
      } : null;
    }(),
    LoadAccess: function (a) {
      sets[theSettingNowDay][1] && ($("dFightingScene").className = sets[theSettingNowDay][1]);
      sets[theSettingNowDay][5] && sets[theSettingNowDay][5]();
      oSym.addTask(90, function () {
        a(0);
      }, []);
    },
    StartGame: function () {
      if (theSettingNowDay == 5) {
        summonCrystal();
      }

      if (theLevelType < 5) {
        StopMusic();
        PlayMusic(oS.StartGameMusic);
        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
        oS.InitLawnMover();
        oS.ControlFlagmeter && oFlagContent.init({
          fullValue: oP.FlagNum - 1,
          curValue: 0
        }); //剪草机

        PrepareGrowPlants(_ => {
          oP.Monitor(); //开启全局僵尸调度

          BeginCool(); //冷却

          oS.DKind && AutoProduceSun(50); //掉落阳光

          oSym.addTask(1500, _ => {
            oP.AddZombiesFlag(); //启动僵尸出场

            oS.ControlFlagmeter && oFlagContent.show();
          });
        });
      } else {
        oMiniGames.ConveyorBelt(WillselectP, Math.floor(Math.seededRandomV2(350, 450)), 2);
      }
    }
  }, {
    AZ: WillAZ,
    FlagNum: FlagN,
    FlagToSumNum: {
      a1: a1,
      a2: a2
    },
    FlagToEnd: function () {
      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:400px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, 'Service/index.js');
        }
      });
    }
  });
}