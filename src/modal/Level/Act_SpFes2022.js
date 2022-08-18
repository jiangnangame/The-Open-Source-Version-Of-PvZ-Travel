/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  //记录保护植物位置表
  let sheetPos = []; //一些植物僵尸（无尽专属）

  window.oDoomShroom_M = InheritO(oDoomShroom, {
    EName: "oDoomShroom_M",
    PrivateBirth: function (o) {
      oSym.addTask(80, function (id) {
        let obj = $P[id],
            boomImgId = id + "_Boom",
            boomDivId = boomImgId + 'Div';

        if (obj) {
          PlayAudio("doomshroom");
          let R = o.R,
              floorR = R > 3 ? R - 2 : 1,
              //如果毁灭菇所在行在第四五行就从第二三行开始搜索，否则直接从第一行开始搜索
          ceilingR = Math.min(oS.R, R + 2),
              //搜索至第几行
          leftBorder = obj.pixelLeft - 120,
              rightBorder = obj.pixelRight + 120;

          do {
            oZ.getArZ(leftBorder, rightBorder, floorR).forEach(o => o.getExplosion());
          } while (floorR++ < ceilingR);

          oEffects.ScreenShake();
          obj.Die('JNG_TICKET_SuperPower');
          oEffects.ImgSpriter({
            ele: NewEle(boomImgId, "div", `position:absolute;overflow:hidden;z-index:${obj.zIndex + 2};width:283px;height:324px;left:${obj.pixelLeft - 80}px;top:${obj.pixelTop - 220}px;background:url(images/Plants/DoomShroom/Boom.webp) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -283,
            frameNum: 10,
            interval: 10,
            callback: ele => oEffects.fadeOut(ele, undefined, ClearChild)
          });
          oSym.addTask(20, ClearChild, [NewEle(boomDivId, "div", "position:absolute;z-index:257;width:900px;height:600px;left:0;top:0;background:#FFF;opacity:5", 0, EDPZ)]);
        }
      }, [o.id]);
    }
  });
  let oLawnCleaner_2 = InheritO(oLawnCleaner, {
    EName: "oLawnCleaner",
    PrivateDie: function (a) {
      data.LawnCleaner[a.R] = 0;
      data.zombieValue -= 2.5;
      data.deltaDensity = 0;
    }
  });
  let oThiefZombie_NoDanger = InheritO(oThiefZombie, {
    EName: "oThiefZombie_NoDanger",
    StealPlantRequirement: function (p) {
      let flag = true;

      for (let i of sheetPos) {
        if (p.R === i[0] && p.C === i[1]) {
          flag = false;
          break;
        }
      }

      return flag && p.Tools != true && p.canEat == true;
    },

    prepareBirth(delayT, r, c) {
      let self = this;
      self.ChkActs = self.GoRight;
      self.ArHTML = [`<div id="`, //0
      `" data-jng-constructor="`, //1
      `" style="position:absolute;display:`, //2
      `;left:`, //3
      `px;top:`, //4
      `px;z-index:`, //5
      `"><div class='Shadow' style="${self.getShadow(self)}"></div><img style="clip:rect(0,auto,`, //6
      `,0);top:`, //7
      `px" src="`, //8
      `"></div>` //9
      ];
      let id = self.id = "Z_" + Math.random();
      let R, C;

      if (!r || !c) {
        let plant = hasPlants(true, self.StealPlantRequirement);

        if (plant.length > 0 && Math.random() > 0.05) {
          let random = plant.random();
          [R, C] = [random.R, random.C];
        } else {
          R = self.ArR.random();
          let availableC = [];
          let rand = [];

          for (let i = 1; i <= 9; i++) {
            availableC[i] = true;
          }

          for (let i of sheetPos) {
            if (i[0] === R) {
              availableC[i[1]] = false;
              availableC[i[1] - 1] = false;
            }
          }

          for (let i = 1; i <= 9; i++) {
            if (availableC[i]) {
              rand.push(i);
            }
          }

          if (rand.length === 0) {
            rand.push(10);
          }

          C = rand.random();
        }
      } else {
        [R, C] = [r, c];
      }

      self.HP = Infinity;
      self.R = R;
      let top = self.pixelTop = GetY(R) + self.GetDY() - self.height; //计算僵尸顶部坐标

      let zIndex = self.zIndex = 3 * R + 1;
      self.ZX = self.AttackedLX = GetX(C) - 20 - (self.beAttackedPointR - self.beAttackedPointL) * 0.5;
      self.X = self.ZX - self.beAttackedPointL;
      self.AttackedRX = self.X + self.beAttackedPointR;
      (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设置延迟出场时间戳

      return self.getHTML(id, self.X, top, zIndex, "none", "auto", self.GetDTop, self.PicArr[self.NormalGif]);
    }

  });
  let oMembraneZombie_NoDanger = InheritO(oMembraneZombie, {
    EName: "oMembraneZombie_NoDanger",

    getPlants() {
      return hasPlants(true, v => {
        let flag = true;

        for (let i of sheetPos) {
          if (v.R === i[0] && v.C === i[1]) {
            flag = false;
            break;
          }
        }

        return flag && v.PKind === 1;
      });
    }

  });
  let Exitlevel_tmp = Exitlevel;
  RewriteGlobalVariables({
    Exitlevel(...arr) {
      delete window["oDoomShroom_M"];
      Exitlevel_tmp.bind(window)(...arr);
    }

  }); //计算通关时间

  let StartGameTimer = 0; //开始

  let time = new Date().getTime();
  let StorageStr = 'JNG_TR_ACT_SPFES_2022';
  let deltaTime = new Date().getMonth() * 1000 + new Date().getDate() + new Date().getMilliseconds();
  let data = localStorage[StorageStr] ? JSON.parse(localStorage[StorageStr]) : {};
  data = Object.assignWithoutOverwrite(data, {
    day: 1,
    SunNum: 150,
    zombieValue: 0,
    maxzombieValue: 0,
    //计算有没有因为失去小推车等丢失权值
    LawnCleanerGive: 0,
    seed: [Math.floor(time / deltaTime + 1), Math.floor(time + 547 * deltaTime)],
    userPName: ["oPeashooter", "oSunFlower", "oWallNut", "oPotatoMine"],
    LawnCleaner: [0, 1, 1, 1, 1, 1],
    specialEvent: 0,
    deltaDensity: 0
  });
  let userPName = [];

  for (let i of data.userPName) {
    userPName.push(window[i]);
  } //设置随机数种子


  if (typeof data.seed[0] === "string") {
    data.seed = [BigInt(data.seed[0]), BigInt(data.seed[1])];
  }

  Math.seedV2 = data.seed;
  /*关卡波数*/

  let _flag_5 = Math.max(0, 5 - data.day / 2);

  let FlagNum = Math.floor(Math.seededRandomV2(17 - _flag_5, 12 - _flag_5));
  /*判断通关后获取植物*/

  let AllPName = [oPeashooter, oSunFlower, oPotatoMine, oWallNut, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, //oPlantern,
  oBambooUncle, oBegonia, oIceAloe, oPepper, oMonotropa, oSpikeweed, oTorchwood, oKiwibeast, oCabbage, oKernelPult, oBlover, oShiitake, oElecTurnip, oCranberry, oMelonPult, oAbutilonHybriden, oPumpkinHead, oMiracleImitater, oJalapeno, oXshooter, oMacintosh, oFlowerPot, oDoomShroom_M]; //userPName = AllPName.slice(0,35);
  //console.log(AllPName);
  //计算接下来要获得的植物，但是在此之前需要去掉已有植物

  let PlantReverseKeyValue = {}; //反转键值对，用于减少循环次数

  for (let i = 0; i < AllPName.length; i++) {
    PlantReverseKeyValue[AllPName[i].prototype.EName] = i;
  }

  for (let i in userPName) {
    let name = userPName[i].prototype.EName;
    AllPName[PlantReverseKeyValue[name]] = null;
    delete PlantReverseKeyValue[name];
  }

  for (let i = AllPName.length - 1; i >= 0; i--) {
    if (AllPName[i] === null) {
      AllPName.splice(i, 1);
    }
  } //console.log(AllPName);


  let pValueSum = []; //植物的几率前缀和

  for (let i = 0; i < AllPName.length; i++) {
    let value = ValueAPlant(AllPName[i]);
    pValueSum[i] = 10000 / value; //值越大几率越小

    if (i > 0) {
      pValueSum[i] += pValueSum[i - 1];
    }
  } //下一个植物随机数


  let nextPlantRandom = Math.seededRandomV2(pValueSum[pValueSum.length - 1], 0); //console.log(pValueSum,nextPlantRandom);
  //下一个植物变量

  let nextPlant = null;

  for (let i = 0; i < pValueSum.length; i++) {
    if ((i === 0 || pValueSum[i - 1] < nextPlantRandom) && pValueSum[i] >= nextPlantRandom) {
      nextPlant = AllPName[i];
      break;
    }
  } //估算植物价值


  function ValueAPlant(obj) {
    var _proto$Attack;

    let value = 0;
    let proto = obj.prototype;
    let coolTimeValue = 240 / (1 + Math.min(proto.coolTime, 45));
    let sunValue = Math.max(-0.01 * (proto.SunNum - 200) ** 2 + 100 + proto.SunNum, 30);
    let attackValue = Math.sqrt(Math.min((_proto$Attack = proto.Attack) !== null && _proto$Attack !== void 0 ? _proto$Attack : 1, 3000)) * 7;
    let HPValue = Math.pow(Math.min(proto.HP, 12000), 0.9) / 12;

    if (!proto.canEat) {
      HPValue = 90;
    }

    let specialValue = 0;

    if (proto.EName === "oMonotropa") {
      specialValue += 1500;
    }

    if (proto.FlyingPlant) {
      specialValue += 30;
    }

    if (proto.Immediately) {
      specialValue += 100;
    }

    if (proto.CanSpawnSun) {
      specialValue += 30;
    }

    if (proto.EName === "oFumeShroom" || proto.EName === "oRadish") {
      specialValue += 300;
    }

    if (proto.EName === "oElecTurnip") {
      specialValue += 500;
    }

    if (proto.EName === "oDoomShroom_M") {
      specialValue += 9999999;
    }

    if (proto.EName === "oAbutilonHybriden" || proto.EName === "oXshooter" || proto.EName === "oMacintosh" || proto.EName === "oJalapeno") {
      specialValue += 300;
    }

    if (proto.EName === "oPlantern") {
      specialValue += 800;
    }

    if (proto.PKind > 1) {
      specialValue += 20;
    }

    if (proto.EName === "oBambooUncle") {
      specialValue = -100;
    } //console.log(proto.CName,coolTimeValue,sunValue,attackValue,HPValue,specialValue,sunValue+attackValue+HPValue+specialValue+coolTimeValue);


    return sunValue + attackValue + HPValue + specialValue + coolTimeValue;
  }
  /*设置僵尸*/


  let ZName = [oZombie, oConeheadZombie, oBucketheadZombie];
  let AllZName = [oNewspaperZombie, oBalloonZombie, oStrollZombie, oFootballZombie, oCigarZombie, oCaskZombie, oSadakoZombie, oImp, oMembraneZombie_NoDanger, oMakeRifterZombie, oSkatingZombie, oPushIceImp, oZomboni, oSculptorZombie, oBeetleCarZombie, oThiefZombie_NoDanger, oGargantuar];
  let ENameKeyValuePair = {};
  let AllZombiesWithValue = [];

  for (let i of ZName) {
    AllZombiesWithValue.push({
      "EName": i.prototype.EName,
      "zombie": i,
      "value": ValueAZombie(i)
    });
  }

  let ZombiesWithValue = [];

  for (let i of AllZName) {
    ZombiesWithValue.push({
      "EName": i.prototype.EName,
      "zombie": i,
      "value": ValueAZombie(i)
    });
  }

  AllZombiesWithValue = AllZombiesWithValue.concat(ZombiesWithValue);
  AllZombiesWithValue.sort(function (a, b) {
    return a.value - b.value;
  });
  ZombiesWithValue.sort(function (a, b) {
    return a.value - b.value;
  });

  for (let i of AllZombiesWithValue) {
    ENameKeyValuePair[i.EName] = {
      "zombie": i.zombie,
      "value": i.value
    };
  }

  function ZNameValueCalc(i) {
    return i ** 2;
  }

  for (let i in ZombiesWithValue) {
    ZombiesWithValue[i].value = ZNameValueCalc(ZombiesWithValue[i].value);
  }

  let TotalValue = data.zombieValue; //计算出什么僵尸

  while (true) {
    for (let i = ZombiesWithValue.length - 1; i >= -1; i--) {
      if (i == -1) {
        ZombiesWithValue = [];
        break;
      }

      if (TotalValue >= ZombiesWithValue[i].value) {
        ZombiesWithValue = ZombiesWithValue.slice(0, i + 1);
        break;
      }
    }

    if (ZombiesWithValue.length) {
      let rand = random(ZombiesWithValue);
      let index = rand.index;
      let r = rand.value;
      ZName.push(r.zombie);
      ZombiesWithValue.splice(index, 1);
      TotalValue -= r.value; //console.log(ZombiesWithValue);
    } else {
      break;
    }
  } //估算僵尸价值


  function ValueAZombie(obj) {
    let proto = obj.prototype;
    let HPValue = (proto.HP + proto.OrnHP / 1.15) ** 1.005 / 300;
    let AttackValue = 0;

    if (proto.AKind === 1 || proto.AKind === 2) {
      AttackValue = 2000;
    } else {
      AttackValue = Math.min(proto.Attack * 3.5, 2000);
    }

    AttackValue /= 300;
    let SpeedValue = proto.Speed * 1.6;
    let specialValue = 0;

    if (proto.EName === "oZomboni") {
      specialValue += 1;
    } else if (proto.EName === "oSculptorZombie") {
      specialValue += 2;
    } else if (proto.EName === "oMembraneZombie_NoDanger") {
      specialValue += 2;
    } else if (proto.EName === "oSadakoZombie") {
      specialValue += 0.5;
    } else if (proto.EName === "oMakeRifterZombie") {
      specialValue += 1;
    } else if (proto.EName === "oPushIceImp") {
      specialValue += 1;
    } else if (proto.EName === "oGargantuar") {
      specialValue += 1.5;
    }

    return ((AttackValue + HPValue + SpeedValue * 0.5) / 2.5 + proto.Lvl) / 2 + specialValue;
  }
  /*计算AZ*/


  let AZ = [];

  for (let i in ZName) {
    let obj = ENameKeyValuePair[ZName[i].prototype.EName];
    let surplus = Math.max(0, (data.zombieValue - ZNameValueCalc(obj.value)) / 13);
    let arr = [];
    arr[0] = obj.zombie;
    arr[1] = Math.floor(Math.seededRandomV2(Math.max(2, 3.8 + Math.min(-obj.value + 1 + surplus / 3, 0)), 1));

    if (ZName[i].prototype.EName === "oZombie") {
      arr[2] = 1;
    } else {
      arr[2] = Math.seededRandomV2(1, 0) * Math.min(data.day / 4, 3);
      arr[2] -= arr[2] / 2;
      arr[2] += Math.min(1, obj.value / 5) * FlagNum - surplus;
      arr[2] = Math.max(1, Math.floor(arr[2]));
    }

    AZ.push(arr);
  }
  /*计算每波生成僵尸*/


  let FlagToSumNum = {
    a1: [],
    a2: []
  }; //console.log(ZName);

  {
    let deltaZombieValue = data.deltaDensity + Math.min(data.zombieValue - data.maxzombieValue, 0);
    let zombie = deltaZombieValue < -3 ? 1 : Math.floor(Math.seededRandomV2(Math.min(data.day / 3 + 2, 4), 1 + Math.min(1.7, data.day / 10)));
    let K = Math.max(7, 13 + data.day / 2 + deltaZombieValue / 23);
    let r = Math.max(0.1, 0.4 + Math.min(0.5, data.day / 19 * 0.1) + deltaZombieValue / 79);
    let num = Math.min(7, data.day / 17 + 1);

    let calcNum = () => {
      let dn_dt = r * zombie * (K - zombie) / K;
      return dn_dt;
    };

    let reduce = () => {
      return Math.floor(Math.seededRandomV2(1, 0) * (1 + Math.max(4, data.day / 17)) + 5 + Math.max(2, data.day / 77));
    };

    let reduceFlag = reduce();

    for (let i = 1; i <= FlagNum; i++) {
      FlagToSumNum["a1"][i - 1] = i;
      FlagToSumNum["a2"][i - 1] = Math.max(1, Math.round(zombie));

      if (i === reduceFlag) {
        reduceFlag += reduce();
        zombie /= 5 - Math.min(3, data.day / 19);
        K /= 2.4 - Math.min(0.8, data.day / 15 * 0.1);
      } //console.log(fun(i));


      zombie += calcNum() + 0.15 * data.deltaDensity;

      if (i >= 3) {
        zombie += Math.seededRandomV2(2, 0) - 0.8;
      }

      zombie = Math.max(1, zombie);
      K += num;
    } //console.log(FlagToSumNum);

  }
  /*一些函数*/

  function random(arr) {
    let index = Math.floor(Math.seededRandomV2(1, 0) * arr.length);
    return {
      value: arr[index],
      index: index
    };
  }

  let overFunc = toOver;
  RewriteGlobalVariables({
    toOver(type = 1) {
      overFunc.bind(window)(type);

      if (type === 1) {
        delete localStorage[StorageStr];
      }
    }

  });
  oS.Init({
    PName: userPName,
    ZName: ZName,
    CoinRatio: 2,
    LevelName: $__language_Array__["42d07a5bb736daf54cf148d245a12ab4"] + data.day + $__language_Array__["47fb6b941843b25fcb22fb4a6105e47a"],
    CanSelectCard: userPName.length > 10,
    SunNum: 150,
    LoadMusic: "Bgm_Tutorial_Ready",
    StartGameMusic: "Bgm_Tutorial_Fight",
    backgroundImage: "images/interface/background1.webp",
    backgroundMask: 'BgMask-Tutorial',

    //LF:[0,0,1,0,0],
    InitLawnMover() {
      for (let R = 1; R < 6; R++) {
        if (data.LawnCleaner[R]) {
          oSym.addTask(R * 10, CustomSpecial, [oLawnCleaner_2, R, -1]);
        }
      }
    },

    LoadAccess(a) {
      if (data.specialEvent >= 1) {
        let specialEvents = [_ => {
          for (let i = 1; i <= 5; i++) {
            for (let j = 7; j <= 9; j++) {
              PlaceZombie(oSculpture, i, j);
            }
          }
        }, _ => {
          for (let i = 1; i <= 5; i++) {
            for (let j = 3; j <= 8; j++) {
              if ((i + j) % 2 == 0) {
                CustomSpecial(oRifter, i, j);
              }
            }
          }
        }, _ => {
          let type = random([[oRifter, CustomSpecial], [oSculpture, PlaceZombie]]).value;
          let ground = [];

          for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 9; j++) {
              ground.push([i, j]);
            }
          }

          let c = Math.seededRandomV2(Math.min(18, (data.day - 5) / 8 + 2), 1) + 3;

          for (let i = 1; i <= c; i++) {
            let rand = random(ground);
            type[1](type[0], rand.value[0], rand.value[1]);
            ground.splice(rand.index, 1);
          }
        }];

        if (data.day >= 20) {
          specialEvents = specialEvents.concat([_ => {
            sheetPos = [[3, 5], [2, 4], [4, 4], [3, 4]];
            sheetPos.forEach(pos => {
              CustomDangerPlant(oApple, ...pos);
            });
            ProtectPlants();
          }, _ => {
            sheetPos = [[5, 5], [4, 4], [3, 3], [2, 4], [1, 5]];
            sheetPos.forEach(pos => {
              CustomDangerPlant(oPuffShroom, ...pos);
            });
            ProtectPlants();
          }, _ => {
            sheetPos = [[2, 5], [4, 5]];
            sheetPos.forEach(pos => {
              CustomDangerPlant(oSunFlower, ...pos);
            });
            ProtectPlants();
          }]);

          function CustomDangerPlant(plant, r, c) {
            CustomSpecial(plant, r, c);
            NewEle(0, "div", `left: ${55 + 80 * c}px;top: ${r * 100 - 20}px;`, {
              className: 'sos'
            }, FightingScene);
          }

          function ProtectPlants() {
            for (let i = 0; i < oP.FlagToSumNum.a2.length; i++) {
              oP.FlagToSumNum.a2[i] = Math.max(1, Math.round(oP.FlagToSumNum.a2[i] / 1.5));
            }

            addEventListenerRecord('jng-event-startgame', _ => {
              //自定义坐标表的采入
              for (let i in sheetPos) {
                for (let pkind = 0, G = oGd.$; pkind <= PKindUpperLimit; pkind++) {
                  let p;

                  if (p = G[sheetPos[i][0] + "_" + sheetPos[i][1] + "_" + pkind]) {
                    let tmp = p.Die;

                    p.Die = function (...sth) {
                      tmp.bind(p)(...sth);
                      toOver(2);
                    };
                  }
                }
              }
            });
          }
        }

        random(specialEvents).value();
        data.specialEvent -= 1;
      }

      oSym.addTask(30, a);
    },

    StartGame() {
      oS.DefaultStartGame();
      StartGameTimer = oSym.Now;
    }

  }, {
    AZ: AZ,
    FlagNum: FlagNum,
    FlagToSumNum: FlagToSumNum,

    FlagToEnd() {
      let src = "images/interface/Clearance_reward.png";
      let newTime = oSym.Now - StartGameTimer;

      for (let i = 1; i < 6; i++) {
        if (!data.LawnCleaner[i]) {
          data.LawnCleanerGive += 0.15;
        }
      }

      if (data.LawnCleanerGive >= 1) {
        data.LawnCleanerGive--;

        for (let i = 1; i <= 5; i++) {
          if (!data.LawnCleaner[i]) {
            data.LawnCleaner[i] = 1;
            break;
          }
        }

        nextPlant = oLawnCleaner;
      }

      if (nextPlant) {
        let _name = nextPlant.prototype.EName;

        if (_name === "oCherryBomb") {
          data.zombieValue += 6;
          data.deltaDensity += 0.7;
        } else if (_name === "oMonotropa") {
          data.zombieValue += 12;
          data.deltaDensity += 0.2;
        } else if (_name === "oDoomShroom_M") {
          data.zombieValue += 35;
          data.deltaDensity += 1;
        }

        if (_name !== "oLawnCleaner") {
          data.userPName.push(nextPlant.prototype.EName);
          data.zombieValue += Math.max(1, 3 - newTime / 100 / 300 + Math.min(4, data.day / 10));
        } else {
          data.zombieValue += 0.5;
        }
      } else {
        if (data.zombieValue < 200) {
          data.zombieValue += 6.2;
        } else {
          data.zombieValue += 0.8;
        }
      }

      if (data.day >= 12) {
        data.deltaDensity += (0.1 + Math.max(-0.4, Math.min(0.12 - newTime / 100 / 360 * Math.max(0.1 - (data.day - 12) / 300, 0.03), 0.1))) * 1.5;
        data.deltaDensity = Math.max(data.deltaDensity, 0);
        data.deltaDensity = Math.min(data.deltaDensity, 1.2 * Math.sqrt(Math.floor(data.day / 10)));
      }

      data.maxzombieValue = Math.max(data.zombieValue, data.maxzombieValue);
      data.specialEvent += 0.11 + Math.min(0.3, data.day / 70 * 0.3);
      data.SunNum = oS.SunNum;
      data.seed = [Math.seedV2[0].toString(), Math.seedV2[1].toString()];
      data.day++;
      localStorage[StorageStr] = JSON.stringify(data);
      let dom;

      if (nextPlant) {
        dom = GetPlantCardDom(nextPlant, EDAll, null, {
          onclick: function () {
            GetWin(this, oS.Lvl);
          }
        });
      } else {
        dom = NewImg("imgSF", src, "left:535px;top:200px;width:116px;height:119px;", EDAll, {
          onclick: function () {
            GetWin(this, oS.Lvl);
          }
        });
      }

      ShowWinItem(dom);
    }

  });
}