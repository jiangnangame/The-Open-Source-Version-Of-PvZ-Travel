/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  oS.Init({
    PName: [oPeashooter, oRepeater, oSnowPea, oPuffShroom, oFumeShroom, oPlantern, oPotatoMine, oWallNut, oCherryBomb],
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oCigarZombie, oFootballZombie],
    //ZName: [oSculptorZombie],
    LevelName: $__language_Array__["65b4dabee420a6a399e84411b7a92f42"] + (localStorage['JNG_TR_ACT_SPFES_2021'] ? localStorage['JNG_TR_ACT_SPFES_2021'] : "1"),
    CanSelectCard: 0,
    SunNum: 3500,
    DKind: 0,
    isScroll: false,
    LoadMusic: "Bgm_Industry_Ready",
    StartGameMusic: "Bgm_Industry_Fight",
    backgroundImage: "images/interface/Industry.webp",

    //LF:[0,0,1,0,0],
    LoadAccess(callback) {
      NewImg(`BgMask${Math.random()}`, `images/interface/Industry_Mask.png`, `left:0;top:469px;position:absolute;z-index:23;`, EDAll);
      oSym.addTask(0, callback);
      !localStorage["JNG_TR_ACT_SPFES_2021"] && (localStorage["JNG_TR_ACT_SPFES_2021"] = "1");
      let ground = [];
      let line = 6;

      if (localStorage["JNG_TR_ACT_SPFES_2021"] == "1") {
        line = 6;
      } else if (localStorage["JNG_TR_ACT_SPFES_2021"] == "2") {
        line = 4;
      } else {
        line = 3;
      }

      for (let i = 1; i < 6; i++) {
        for (let j = line; j < 10; j++) {
          ground.push([i, j]);
        }
      }

      function getPos(R, C) {
        let index = Math.floor(Math.random() * ground.length);
        let pos = ground[index];
        ground.splice(index, 1);
        return pos;
      }

      let vaseArr = [];

      if (localStorage["JNG_TR_ACT_SPFES_2021"] == "1") {
        for (let i = 0; i < 3; i++) {
          let get = getPos();
          vaseArr.push([oVaseP, [{
            type: 0,
            obj: oPeashooter
          }, {
            type: 0,
            obj: oSnowPea
          }, {
            type: 0,
            obj: oRepeater
          }][i], get[0], get[1]]);
        }

        for (let i = 0; i < 5; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 4; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oConeheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 1; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oBucketheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 7; i++) {
          let get = getPos();
          vaseArr.push([oVase, [{
            type: 0,
            obj: oPeashooter
          }, {
            type: 0,
            obj: oSnowPea
          }, {
            type: 0,
            obj: oRepeater
          }].random(), get[0], get[1]]);
        }
      } else if (localStorage["JNG_TR_ACT_SPFES_2021"] == "2") {
        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVaseP, [{
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oWallNut
          }][i], get[0], get[1]]);
        }

        for (let i = 0; i < 4; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 7; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oConeheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oBucketheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 3; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oStrollZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 10; i++) {
          let get = getPos();
          vaseArr.push([oVase, [{
            type: 0,
            obj: oPeashooter
          }, {
            type: 0,
            obj: oSnowPea
          }, {
            type: 0,
            obj: oPuffShroom
          }, {
            type: 0,
            obj: oRepeater
          }, {
            type: 0,
            obj: oPotatoMine
          }].random(), get[0], get[1]]);
        }

        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVase, [{
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oWallNut
          }, {
            type: 0,
            obj: oPotatoMine
          }].random(), get[0], get[1]]);
        }
      } else if (localStorage["JNG_TR_ACT_SPFES_2021"] == "3") {
        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVase, [{
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oWallNut
          }][i], get[0], get[1]]);
        }

        for (let i = 0; i < 5; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 5; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oConeheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 4; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oBucketheadZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oStrollZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVase, {
            type: 1,
            obj: oCigarZombie
          }, get[0], get[1]]);
        }

        for (let i = 0; i < 9; i++) {
          let get = getPos();
          vaseArr.push([oVase, [{
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oPeashooter
          }, {
            type: 0,
            obj: oSnowPea
          }, {
            type: 0,
            obj: oRepeater
          }, {
            type: 0,
            obj: oPotatoMine
          }, {
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oFumeShroom
          }, {
            type: 0,
            obj: oPeashooter
          }, {
            type: 0,
            obj: oSnowPea
          }, {
            type: 0,
            obj: oPuffShroom
          }, {
            type: 0,
            obj: oRepeater
          }, {
            type: 0,
            obj: oPotatoMine
          }].random(), get[0], get[1]]);
        }

        for (let i = 0; i < 2; i++) {
          let get = getPos();
          vaseArr.push([oVaseP, [{
            type: 0,
            obj: oCherryBomb
          }, {
            type: 0,
            obj: oFumeShroom
          }][i], get[0], get[1]]);
        }

        let get = getPos();
        vaseArr.push([oVase, {
          type: 1,
          obj: oFootballZombie
        }, get[0], get[1]]);
        get = getPos();
        vaseArr.push([oVase, {
          type: 0,
          obj: oPlantern
        }, get[0], get[1]]);
        get = getPos();
        vaseArr.push([oVase, {
          type: 0,
          obj: oPlantern
        }, get[0], get[1]]);
        get = getPos();
        vaseArr.push([oVase, {
          type: 0,
          obj: oCherryBomb
        }, get[0], get[1]]);
      }

      for (let i = 0; i < vaseArr.length; i++) {
        oSym.addTask(Math.random() * 150, function () {
          let p = CustomSpecial(vaseArr[i][0], vaseArr[i][2], vaseArr[i][3]);
          p.SetCard(vaseArr[i][1]);
        });
      }
    },

    InitLawnMover() {},

    StartGame: function () {
      StopMusic();
      PlayMusic(oS.StartGameMusic);
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      SetHidden($("dCardList"), $("dTop"));
      oS.InitLawnMover();
      PrepareGrowPlants(_ => {
        oP.Monitor(); //开启全局僵尸调度

        BeginCool(); //冷却

        oS.DKind && AutoProduceSun(50); //掉落阳光

        oSym.addTask(300, _ => {
          oSym.addTask(200, function chkWin() {
            let flag = true;

            for (let i of $P) {
              if (/oVase|oVaseP|oVaseZ/.test(i.EName)) {
                flag = false;
                break;
              }
            }

            if (flag && oP.NumZombies == 0) {
              toWin();
            } else {
              oSym.addTask(200, chkWin);
            }
          });
        });
      });
    }
  }, {
    AZ: [],
    FlagNum: 666,
    FlagToSumNum: {
      a1: [666],
      a2: [0]
    },

    FlagToEnd() {
      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:400px;top:233px", EDAll, {
        onclick: function () {
          localStorage["JNG_TR_ACT_SPFES_2021"] = Number.parseInt(localStorage["JNG_TR_ACT_SPFES_2021"]) % 3 + 1;

          if (localStorage["JNG_TR_ACT_SPFES_2021"] == "1") {
            GetWin(this, Exitlevel(oS.Lvl, true));
          } else {
            GetWin(this, oS.Lvl);
          }
        }
      });
    }

  });
}