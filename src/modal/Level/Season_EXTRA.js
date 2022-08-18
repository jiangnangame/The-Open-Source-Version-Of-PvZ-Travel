/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let oGoRight2 = InheritO(oGoRight, {
    EName: "oGoRight2",
    PKind: 0,
    ArZx: {},
    NormalAttack: function (b, a) {
      var c = $Z[b];

      if (c.FangXiang !== 'GoRight' && !this.ArZx[b] && c.EName != "oZomboni") {
        c.ChkActs = c.GoRight;
        c.YiZengjia = 0;
        c.FangXiang = 'GoRight'; //完成标记

        c.EleBody['style']['transform'] = 'rotateY(180deg)'; //切换方向

        this.ArZx[b] = true;
      }
    }
  });

  function plantsDie(arr) {
    for (let i in $P) {
      let plant = $P[i];

      for (let a in arr) {
        if (plant.R == arr[a][0] && plant.C == arr[a][1] && plant.EName != "oGoRight2") {
          plant.Die = CPlants.prototype.Die;
          plant.Die();
        }
      }
    }
  }

  function change(img, filter) {
    $("dFightingScene").className = "23333333";
    PlayAudio("frostbite");
    oEffects.Animate($("tGround"), {
      transform: "scale(0) rotate(180deg)"
    }, 1.2 / oSym.NowSpeed, false, _ => {
      var groundStyle = {
        background: "url(images/interface/" + img + ") no-repeat",
        transform: "scale(13) rotate(0deg)"
      };
      SetStyle($("tGround"), groundStyle);
      oEffects.Animate($("tGround"), {
        transform: "scale(1)"
      }, 1.2 / oSym.NowSpeed, false, _ => {
        if (filter) {
          $("dFightingScene").className = "BgMask-" + filter;
        }

        $("tGround").style.cssText = "background: url(images/interface/" + img + ") no-repeat;visibility: visible;animation:bgx 150s infinite;position:absolute;";
      });
    });
  }

  function PLAYMUSIC(start, loop) {
    StopAudio(oS.StartGameMusic);
    oS.StartGameMusic = "SeasonEXTRA/" + loop;
    oS.LoadMusic2 = "SeasonEXTRA/" + start;
    PlayAudio(oS.LoadMusic2);
    PlayAudio(oS.StartGameMusic, 1);
    PauseAudio(oS.StartGameMusic);
    oAudio[oS.LoadMusic2].addEventListener("ended", _ => {
      oAudio[oS.StartGameMusic].currentTime = 0.1;
      PlayAudio(oS.StartGameMusic, 1);
    }, true);
  }

  oS.Init({
    PName: [oSunFlower, oSunShroom, oSporeShroom, oStoneFlower, oPuffShroom, oFumeShroom, oPepper, oCherryBomb, oSpikeweed, oIceAloe],
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oZomboni, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oIceBlock, oPushIceImp, oMembraneZombie],
    LevelName: $__language_Array__["6b47b68363c7ce55edf03a0ab43730a4"],
    LoadMusic: "Bgm_Polar_Noise",
    LoadMusic2: "SeasonEXTRA/Bgm_Extra_Fight1_Start",
    AudioArr: ["SeasonEXTRA/Bgm_Extra_Fight1_Start", "SeasonEXTRA/Bgm_Extra_Fight1", "SeasonEXTRA/Bgm_Extra_Fight2_Start", "SeasonEXTRA/Bgm_Extra_Fight2", "SeasonEXTRA/Bgm_Extra_Fight3_Start", "SeasonEXTRA/Bgm_Extra_Fight_Win"],
    PicArr: ["images/interface/Fuben_Summer.webp", "images/interface/ForestJx.webp"],
    StartGameMusic: `SeasonEXTRA/Bgm_Extra_Fight1`,
    DKind: 1,
    CanSelectCard: 0,
    SunNum: 400,
    backgroundImage: "images/interface/MarshJx.webp",
    LoadAccess: function (a) {
      oSym.addTask(136, _ => {
        $("dFightingScene").className = "BgMask-Marsh";
      });
      let imgTXMixd = NewImg(`MXD_TX`, "images/interface/Mixed.webp", null, $("dFightingScene"), {
        className: "RotateTexture"
      }),
          wumaotexiao = NewEle(`wumaoTexiao${Math.random()}`, "div", "pointer-events:none;position:absolute;z-index:21;left:0px;width:1600px;height:600px;background:#000;opacity:0.5;", 0, $("dAll"));
      oSym.addTask(200, function changeColor() {
        oEffects.Animate(wumaotexiao, {
          opacity: "0.2",
          background: "#FFF"
        }, 0.15 / oSym.NowSpeed, false, ele => {
          oSym.addTask(1, _ => {
            oEffects.Animate(ele, {
              opacity: "0.5",
              background: "#000"
            }, 0.3 / oSym.NowSpeed);
          });
        });
        oSym.addTask(Math.random() * 1000, changeColor);
      });
      oSym.addTask(30, a);
      $("tGround").style.cssText = "background: url(images/interface/MarshJx.webp) no-repeat;visibility: visible;animation:bgx 150s infinite;position:absolute;";
      loadRes({
        img: ["images/interface/Fuben_Autumn.webp", "images/interface/Fuben_Winter.webp"],
        au: ["SeasonEXTRA/Bgm_Extra_Fight3"]
      });
    },
    StartGame: function () {
      PlayAudio(oS.LoadMusic2);
      PlayAudio(oS.StartGameMusic, 1);
      PauseAudio(oS.StartGameMusic);
      oAudio[oS.LoadMusic2].addEventListener("ended", _ => {
        oAudio[oS.StartGameMusic].currentTime = 0.1;
        PlayAudio(oS.StartGameMusic, 1);
      }, true);
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      oS.InitLawnMover();
      oS.ControlFlagmeter && oFlagContent.init({
        fullValue: oP.FlagNum - 1,
        curValue: 0
      }); //剪草机

      PrepareGrowPlants(function () {
        oP.Monitor(oS.Monitor);
        BeginCool();
        oS.DKind && AutoProduceSun(50);
        oSym.addTask(0, function () {
          oP.AddZombiesFlag();
          oS.ControlFlagmeter && oFlagContent.show();
        }, []);
      });

      for (let i = 1; i < 6; i++) {
        CustomSpecial(oGoRight2, i, 4);
        CustomSpecial(oGoLeft, i, 10);
      }

      oSym.addTask(1000, _ => {
        for (let i = 2; i <= 5; i += 2) {
          PlaceZombie(oZombie, i, 11, 0);
        }
      });
      oSym.addTask(1800, _ => {
        for (let i in $Z) {
          let zom = $Z[i];

          if (GetC(zom.X) >= 7 && (zom.R == 2 || zom.R == 4)) {
            zom.Bounce({
              distance: -3,
              h: 30
            });
          }
        }

        for (let i = 1; i <= 5; i += 2) {
          PlaceZombie(oImp, i, 11, 0);
        }
      });
      oSym.addTask(2500, _ => {
        for (let i in $Z) {
          let zom = $Z[i];

          if (GetC(zom.ZX) >= 7 && zom.R % 2) {
            zom.Bounce({
              distance: 7,
              h: 30
            });
          }
        }

        for (let i = 1; i <= 5; i += 2) {
          PlaceZombie(oImp, i, 11, 0);
        }
      });
      oSym.addTask(3570, _ => {
        for (let i = 2; i <= 5; i += 2) {
          PlaceZombie(oConeheadZombie, i, 11, 0);
        }

        oSym.addTask(100, _ => {
          for (let i in $Z) {
            let zom = $Z[i];

            if (GetC(zom.ZX) >= 8 && !zom.R % 2) {
              zom.Bounce({
                distance: -3,
                h: 30
              });
            }
          }
        });
      });
      oSym.addTask(5600, _ => {
        for (let i = 1; i <= 5; ++i) {
          PlaceZombie(oImp, i, 5);
        }
      });
      oSym.addTask(5800, _ => {
        for (let i = 1; i <= 5; ++i) PlaceZombie(oZombie, i, 11, 0);

        oSym.addTask(100, _ => {
          for (let zom of $Z) {
            GetC(zom.ZX) >= 10 && zom.Bounce({
              distance: -3,
              h: 30
            });
          }
        });
      });
      oSym.addTask(6280, _ => PlaceZombie(oConeheadZombie, 1, 7));
      oSym.addTask(6360, _ => {
        PlaceZombie(oConeheadZombie, 3, 7);
      });
      oSym.addTask(6400, _ => {
        PlaceZombie(oConeheadZombie, 5, 7);
      });
      oSym.addTask(6480, _ => {
        for (let i = 2; i <= 5; i += 2) {
          PlaceZombie(oImp, i, 7);
        }
      });
    }
  }, {
    AZ: [[oImp, 1, 1], [oZombie, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oBalloonZombie, 1, 1], [oStrollZombie, 1, 1], [oCigarZombie, 1, 1], [oSkatingZombie, 1, 19], [oZomboni, 1, 19], [oMakeRifterZombie, 1, 19], [oFootballZombie, 1, 9, [11, 14, 15, 17, 18]], [oSadakoZombie, 1, 1], [oPushIceImp, 1, 19], [oMembraneZombie, 1, 19]],
    FlagNum: 22,
    FlagToMonitor: {
      4: [_ => {
        change("ForestJx.webp", "Forest");
      }],
      8: [_ => {
        oS.DKind = 0;
        PLAYMUSIC("Bgm_Extra_Fight2_Start", "Bgm_Extra_Fight2");
        change("Fuben_Summer.webp", "Summer");
        plantsDie([[1, 7], [1, 8], [1, 9], [3, 7], [3, 8], [3, 9], [5, 7], [5, 8], [5, 9]]);

        for (let C = 7, len = 10; C < len; C++) {
          CustomSpecial(oObstacle, 1, C);
          CustomSpecial(oObstacle, 3, C);
          CustomSpecial(oObstacle, 5, C);
        }
      }],
      13: [_ => {
        oS.DKind = 1;
        change("Fuben_Autumn.webp", "Forest");
        oS.LF = [0, 1, 1, 3, 1, 1];
        plantsDie([[3, 7], [3, 8], [3, 9], [1, 7], [1, 8], [1, 9], [5, 7], [5, 8], [5, 9], [4, 8]]);
        CustomSpecial(oObstacle3, 1, 7);
        CustomSpecial(oObstacle3, 4, 8);
        CustomSpecial(oObstacle, 3, 6);
        CustomSpecial(oObstacle, 3, 1);
      }],
      18: [_ => {
        PLAYMUSIC("Bgm_Extra_Fight3_Start", "Bgm_Extra_Fight3");
        oS.DKind = 0;
        oSym.addTask(240, _ => {
          const i = NewImg("imgKK", "images/interface/Winter_filter.webp", "z-index:21;left:-115px;pointer-events: none;opacity:0;", FightingScene);
          oEffects.Animate(i, {
            opacity: "1"
          }, 1.2 / oSym.NowSpeed);
        });
        change("Fuben_Winter.webp");
        oS.LF = [0, 1, 1, 1, 1, 1];
        oMiniGames.IceStorm(1, 5, 0);
        plantsDie([[1, 7], [4, 8], [3, 6], [3, 1]]);
        CustomSpecial(oRifter, 1, 7);
        CustomSpecial(oRifter, 2, 8);
        CustomSpecial(oRifter, 4, 8);
        CustomSpecial(oRifter, 5, 7);

        for (let i = 1; i <= 5; i++) {
          CustomSpecial(oRifter, i, 5);
        }

        oEffects.BgParticle({
          img: "images/Props/Effect/snow_pieces.png"
        });
        oSym.addTask(4000, function as(time = 0) {
          oMiniGames.IceStorm(1, 5, Math.max(1, Math.min(Math.floor(time / 2), 5)));
          oSym.addTask(1200 * Math.random() + 2000, as, [time + 1]);
        });
      }]
    },
    FlagToSumNum: {
      a1: [4, 7, 11, 12, 13, 14, 15, 16, 17, 18, 22],
      a2: [0, 31, 40, 10, 42, 48, 50, 15, 51, 52, 73]
    },
    FlagToEnd: function () {
      PlayAudio("SeasonEXTRA/Bgm_Extra_Fight_Win");
      oAudio["SeasonEXTRA/Bgm_Extra_Fight_Win"].addEventListener("ended", function fun() {
        SelectModal("Service/Season_EXTRA_TrueEnd.js");
      });
    }
  });
}