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
    let num = Math.floor(Math.seededRandom(7, 14));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandom(1, 6)),
          C = Math.floor(Math.seededRandom(3, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        CustomSpecial(oRifter, R, C);
        --num;
        --leftGe;
      }
    }
  }

  function Protect(type) {
    let num = Math.floor(Math.seededRandom(1, 3));
    let tmp = num;

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandom(1, 6)),
          C = Math.floor(Math.seededRandom(3, 5));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        CustomSpecial(type, R, C);
        NewEle(0, "div", `left: ${140 + (C - 1) * 79}px;top:${80 + 100 * (R - 1)}px;`, {
          className: 'sos'
        }, FightingScene);
        --num;
        --leftGe;
      }
    }

    let callback = _ => {
      const name = type.prototype.EName;
      oMiniGames.ProtectPlants({
        name: tmp
      }), removeEventListenerRecord('jng-event-startgame', callback);
    };

    oS.isStartGame ? callback() : addEventListenerRecord('jng-event-startgame', callback);
  }

  function summonCrystal() {
    let num = Math.floor(Math.seededRandom(1, 3));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandom(1, 6)),
          C = Math.floor(Math.seededRandom(6, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        PlaceZombie(oCrystal, R, C);
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

    let num = Math.floor(Math.seededRandom(4, 7));

    while (num && leftGe) {
      let R = Math.floor(Math.seededRandom(1, 6)),
          C = Math.floor(Math.seededRandom(6, 10));

      if (!Ground[R][C]) {
        Ground[R][C] = true;
        let tmp = Math.floor(Math.seededRandom(0, add.length));
        CustomSpecial(add[tmp], R, C);
        --num;
        --leftGe;
      }
    }
  }

  let sunPlant = [oSunShroom, oSunFlower];
  let boomPlant = [oCherryBomb, oBambooUncle];
  let sets = []; //sets[x] = [image,filter,DKind,LoadMusic,StartGameMusic,loadAccess]

  sets[0] = ["images/interface/Forest.webp", "BgMask-Forest", 1, "Bgm_Forest_Ready", "Bgm_Forest_Fight", false];
  sets[1] = ["images/interface/Marsh.webp", "BgMask-Marsh", 0, "Bgm_Marsh_Ready", "Bgm_Marsh_Fight", false];
  sets[2] = ["images/interface/Polar.webp", "BgMask-Polar", 1, "Bgm_Polar_Ready_1", "Bgm_Polar_Fight_1", function () {
    summonRifter();
    PlayAudio('Bgm_Polar_Noise', 1);
    NewImg("imgKK", `images/interface/Polar_Mask2.webp`, `left:1131px;`, EDAll);
    NewImg("imgKK", `images/interface/Polar_Mask1.webp`, "left:167px;top:546px;", EDAll);
  }];
  sets[3] = ["images/interface/Polar2.webp", false, 0, "Bgm_Polar_Ready_2", `Bgm_Polar_Fight_1${2 + Math.round(Math.random() * 2)}`, function () {
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
  let DateInt = [1587559, 1276576, 765997, 265782, 12645612, 1756579, 1456932, 1238699, 12444531, 2457879, 8920134, 2387462, 1276352, 1723527, 127635][Math.min(localStorage['JNG_TR_ACT_SPFES_2020'], 15) - 1];
  Math.seed = DateInt; //CLEAN SEED

  let theLevelType = DateInt % 6,
      theSettingNowDay = Math.floor(Math.seededRandom(0, sets.length));
  let AllPlants = [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oTallNut, oPuffShroom, oFumeShroom, oSporeShroom, oAbutilonHybriden, oPumpkinHead, oPepper, oIceAloe, oMonotropa, oSpikeweed, oTorchwood, oKiwibeast, oMiracleImitater, oJalapeno];
  let WillselectP = [],
      WillselectZ = [oZombie],
      WillAZ = [[oZombie, 2, 1]];

  if (theLevelType < 2) {
    let canGivePlants = AllPlants.slice(0);

    for (let i = 1; i <= 8; i++) {
      let selected = Math.floor(Math.seededRandom(0, canGivePlants.length));
      WillselectP[i] = canGivePlants[selected];
      canGivePlants.splice(selected, 1);
    }

    WillselectP[0] = sunPlant[sets[theSettingNowDay][2]];
    WillselectP[9] = boomPlant[Math.floor(Math.seededRandom(0, 2))];
  } else if (theLevelType < 5) {
    WillselectP = AllPlants;
    WillselectP.splice(1, 0, oSunFlower, oSunShroom);
  } else {
    const len = AllPlants.length;

    for (let i = 0; i <= len; i++) {
      let selected = Math.floor(Math.seededRandom(0, len));
      WillselectP[i] = AllPlants[selected];
    }
  }

  let FlagN = Math.floor(Math.seededRandom(5, 9));
  let allTimes = Math.seededRandom(5, 10);
  let canSelectZ = [oConeheadZombie, oBucketheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oSkatingZombie, oMakeRifterZombie, oPushIceImp, oMembraneZombie];

  for (let i = 1; i <= allTimes; i++) {
    let selected = Math.floor(Math.seededRandom(0, canSelectZ.length));
    WillselectZ[i] = canSelectZ[selected];
    let tmp = WillselectZ[i].prototype;
    WillAZ[i] = [WillselectZ[i], Math.floor(Math.seededRandom(1, 4 / tmp.Lvl + 1)), Math.floor(tmp.Lvl * Math.seededRandom(1.4, 3.3) / 10 * FlagN)];
    canSelectZ.splice(selected, 1);
  }

  let BeginNum = Math.floor(Math.seededRandom(0, 2)),
      DI = 1;
  let a1 = [],
      a2 = [];

  for (let i = 1; i <= FlagN; i++) {
    a1[i - 1] = i;

    if (i < 4) {
      BeginNum += Math.floor(Math.seededRandom(0, i * 2));
    } else {
      BeginNum += Math.floor(Math.seededRandom(2, 4 + 5 * (i - DI)));
      BeginNum += Math.floor(Math.seededRandom(0, localStorage["JNG_TR_ACT_SPFES_2020"] / 4));
    }

    a2[i - 1] = BeginNum;
    i % 6 == 3 && (DI += 6);
  }

  if (theSettingNowDay == 5) {
    WillselectZ.push(oCrystal);
  }

  oS.Init({
    PName: unique(WillselectP),
    ZName: WillselectZ,
    CanSelectCard: theLevelType >= 2 && theLevelType < 5 ? 1 : 0,
    StaticCard: theLevelType >= 5 && theLevelType < 6 ? 0 : 1,
    DKind: sets[theSettingNowDay][2],
    SunNum: 450 - sets[theSettingNowDay][2] * 300,
    backgroundImage: sets[theSettingNowDay][0],
    LevelName: `${$__language_Array__["864111d92028265478f755b078fe1bf1"][0]}${localStorage["JNG_TR_ACT_SPFES_2020"]}`,
    LoadMusic: sets[theSettingNowDay][3],
    StartGameMusic: sets[theSettingNowDay][4],
    LoadAccess: function (a) {
      if (Math.seededRandom(0, 3) < 1) {
        Protect(AllPlants[Math.floor(Math.seededRandom(0, AllPlants.length))]);
      }

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

          oSym.addTask(2000 + Math.floor(Math.seededRandom(0, localStorage["JNG_TR_ACT_SPFES_2020"] - 1) * 50), _ => {
            oP.AddZombiesFlag(); //启动僵尸出场

            oS.ControlFlagmeter && oFlagContent.show();
          });
        });
      } else {
        oMiniGames.ConveyorBelt(WillselectP, Math.floor(Math.seededRandom(350, 450)), 2);
      }
    }
  }, {
    AZ: WillAZ,
    FlagNum: FlagN,
    FlagToSumNum: {
      a1,
      a2
    },
    FlagToEnd: function () {
      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:400px;top:233px", EDAll, {
        onclick: function (e) {
          localStorage["JNG_TR_ACT_SPFES_2020"] = Math.min(Number.parseInt(localStorage["JNG_TR_ACT_SPFES_2020"]) + 1, 16);
          GetWin(e.target, Exitlevel(oS.Lvl, 1));
        }
      });
    }
  });
}