/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let goLine = function (zom, type) {
    switch (type) {
      case 1:
        zom.ChkActs = zom.GoRight;
        zom.YiZengjia = 0;
        zom.FangXiang = 'GoRight'; //完成标记

        zom.EleBody['style']['transform'] = 'rotateY(180deg)'; //切换方向

        break;

      case 2:
        EDPZ.append($(zom.id));
        zom.ChkActs = zom.GoUp;
        zom.FangXiang = 'GoUp'; //完成标记

        break;

      case 3:
        zom.ChkActs = zom.GoDown;
        zom.FangXiang = 'GoDown'; //完成标记

        break;

      case 4:
        zom.ChkActs = zom.GoLeft;
        zom.YiZengjia = 0;
        zom.FangXiang = 'GoLeft'; //完成标记

        zom.EleBody['style']['transform'] = 'rotateY(0deg)';
    }
  };

  oS.Init({
    PName: [oPeashooter, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom, oBegonia, oPepper, oIceAloe, oImitater, oMonotropa, oSpikeweed, oTorchwood, oMiracleImitater, oJalapeno, oLSP],
    ZName: [oImp, oZombie, oSadakoZombie, oSkatingZombie, oMakeRifterZombie, oStrollZombie, oFootballZombie, oConeheadZombie, oBucketheadZombie, oCigarZombie, oZomboni],
    LevelName: $__language_Array__["126c59407289906c9e7a223f52692517"],
    LoadMusic: "Bgm_Polar_Noise",
    StartGameMusic: `Bgm_Polar_Fight_JX_Bonus`,
    backgroundImage: "images/interface/Polar.webp",
    CanSelectCard: 0,
    StaticCard: 0,

    /*InitLawnMover:function(){
        for(let i = 1;i<6;i++)
        CustomSpecial(oGoUp,i,0);
    },*/
    InitLawnMover: function () {},

    LoadAccess(callback) {
      oSym.addTask(90, callback);
      NewImg("imgKK", "images/interface/Polar_Mask2.webp", "left:1131px;", EDAll);
      NewImg("imgKK", "images/interface/Polar_Mask1.webp", "left:167px;top:546px;", EDAll);
    },

    StartGame: function () {
      let [arrP, createTime, moveTime, priorityP] = [oS.PName, 400, 2, [oBambooUncle, oFumeShroom, oSporeShroom, oFumeShroom, oBambooUncle, oPuffShroom, oPuffShroom, oSpikeweed, oSpikeweed, oSpikeweed, oCherryBomb, oBegonia, oBegonia, oSporeShroom, oJalapeno, oCherryBomb, oFumeShroom, oSporeShroom, oFumeShroom, oFumeShroom, oLSP, oDoomShroom, oPotatoMine, oTallNut, oRadish, oRadish, oCherryBomb, oRadish, oRadish, oSporeShroom, oRadish, oBambooUncle, oBegonia, oBegonia, oTallNut, oTallNut, oPuffShroom, oPuffShroom, oPuffShroom, oPuffShroom, oPuffShroom, oPuffShroom, oPuffShroom]];
      /* 一些初始化 */

      NewImg("imgKK", "images/interface/ConveyorBelt.webp", "left:0px;top:0px;z-index:0; ", $('dCardList'));
      StopMusic();
      PlayMusic(oS.LoadMusic = oS.StartGameMusic);
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      SetHidden($("dSunNum"));
      oS.InitLawnMover();
      oS.ControlFlagmeter && oFlagContent.init({
        fullValue: oP.FlagNum - 1,
        curValue: 0
      });
      /* 重写全局函数 */

      let objFun = {
        GetChoseCard(b) {
          if (oS.Chose) {
            return;
          }

          var a = ArCard.length;

          while (a--) {
            ArCard[a].DID == b && (oS.ChoseCard = a, a = 0);
          }

          return oS.ChoseCard;
        },

        ChosePlant(evt, index) {
          if (oS.Chose === -1) {
            CancelShovel();
          }

          if (oS.Chose === 1 || $("MovePlant")) {
            CancelPlant();
            return;
          }

          $("MovePlant") && ClearChild($("MovePlant"));
          PlayAudio("seedlift");
          let AC = ArCard[oS.ChoseCard],
              evtX = evt.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft,
              evtY = evt.clientY + EBody.scrollTop || EElement.scrollTop,
              pro = AC.PName.prototype;
          oS.Chose = 1;
          NewImg("MovePlant", pro.PicArr[pro.StaticGif], `left:${evtX - 0.5 * (pro.beAttackedPointL + pro.beAttackedPointR)}px;top:${evtY + 20 - pro.height}px;z-index:258;`, FightingScene);
          EditImg(MovePlant.cloneNode(false), "MovePlantAlpha", "", {
            //克隆一份作为半透图
            visibility: "hidden",
            opacity: 0.4,
            zIndex: 30
          }, FightingScene);
          EditCompositeStyle({
            ele: MovePlant,
            addFuncs: [["translateX", "-50%"]],
            option: 2
          });
          SetAlpha($(AC.DID), 0.5); //标记卡牌被选择

          SetHidden($("dTitle"));
          GroundOnmousemove = GroundOnmousemove1;
        },

        CancelPlant() {
          ClearChild($("MovePlant"), $("MovePlantAlpha"));
          oS.Chose = 0;
          ArCard[oS.ChoseCard] && SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
          oS.ChoseCard = "";

          GroundOnmousemove = function () {};
        },

        GrowPlant(l, c, b, f, a) {
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
        },

        ViewPlantTitle() {}

      };
      RewriteGlobalVariables(objFun);
      /* 传送带逻辑 */

      PrepareGrowPlants(function () {
        oP.Monitor({
          f: function () {
            //处理优先植物队列
            let index = 0;

            const _priorityP = priorityP.map(o => o === 'random' ? arrP.random() : o); //生成植物卡牌


            (function createNewCard() {
              const len = ArCard.length;

              if (len < 10) {
                //一次性最多可以生成十张卡牌
                //首先检查优先植物数组中有没有对应项，如果没有就用random随机生成
                const obj = _priorityP[index] ? _priorityP[index] : arrP.random(),
                      proto = obj.prototype,
                      id = "dCard" + Math.random();
                ArCard[len] = {
                  DID: id,
                  PName: obj,
                  PixelTop: 600
                };
                NewImg(id, proto.PicArr[proto.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
                  onmousedown: event => {
                    ChosePlant(event, GetChoseCard(id));
                    event.stopPropagation();
                    event.preventDefault();
                  }
                });
                index++;
              }

              oSym.addTask(createTime, createNewCard);
            })();

            (function moveCard() {
              let len = ArCard.length;

              while (len--) {
                let card = ArCard[len];
                card.PixelTop > 60 * len //卡牌没有到达顶端
                && card.PixelTop >= 5 //卡牌没有超过最顶端
                && ($(card.DID).style.top = (card.PixelTop -= 1) + "px");
              }

              oSym.addTask(moveTime, moveCard);
            })();
          },
          ar: []
        });
        oP.AddZombiesFlag();
        oS.ControlFlagmeter && oFlagContent.show();
      });
      oSym.addTask(2400, function () {
        for (let i = 1; i < 6; i++) {
          for (let j = 5; j <= 9; j++) {
            if (i % 2 == j % 2) PlaceZombie(oImp, i, j);
          }
        }
      });
      oSym.addTask(2900, function () {
        for (let i = 1; i <= 9; i++) {
          for (let j = 1; j < 6; j++) {
            if (i == 1 || i == 9 || j == 1 || j == 5) {
              oSym.addTask(i * 30, _ => {
                let zom = PlaceZombie(oZombie, j, i);
                oSym.addTask(50, function () {
                  if (i == 1) {
                    goLine(zom, 1);
                  } else if (i != 9) {
                    let gotoLine;

                    if (j == 5) {
                      goLine(zom, 2);
                      gotoLine = Math.floor(Math.random() * 3) + 1;
                    } else {
                      goLine(zom, 3);
                      gotoLine = Math.floor(Math.random() * 3) + 3;
                    }

                    oSym.addTask(20, function check() {
                      if (zom.R == gotoLine) {
                        goLine(zom, 4);
                      } else {
                        $Z[zom.id] && oSym.addTask(20, check);
                      }
                    });
                  }
                });
              });
            }
          }
        }
      });
      oSym.addTask(3200, function () {
        let zoms = [];

        for (let i = 1; i < 6; i++) {
          zoms.push(PlaceZombie(oMakeRifterZombie, i, 11, 0));
          zoms[zoms.length - 1].Speed += 1;
          oSym.addTask(700, function ch(times = 0) {
            if (times++ < 15) {
              for (let i = 0; i < zoms.length; i++) {
                if (!$Z[zoms[i].id]) {
                  zoms.splice(i, 1);
                  continue;
                }

                zoms[i].HP += 5;
                zoms[i].Speed += 0.05;
                goLine(zoms[i], zoms[i].R <= 1 ? 3 : zoms[i].R >= 5 ? 2 : [4, 1, 2, 3, 4].random());
              }

              zoms.length > 0 && oSym.addTask(100, _ => {
                ch(times);
              });
            } else {
              for (let i = 0; i < zoms.length; i++) {
                zoms[i].HP -= 150;
                zoms[i].Speed = 3;
                goLine(zoms[i], 4);
              }
            }
          });
        }

        oSym.addTask(700, function () {
          let zoms = [];

          for (let i = 1; i < 6; i++) {
            zoms.push(PlaceZombie(oBucketheadZombie, i, 4));
            oSym.addTask(500, function ch(times = 0) {
              if (times++ < 30) {
                for (let i = 0; i < zoms.length; i++) {
                  if (!$Z[zoms[i].id]) {
                    zoms.splice(i, 1);
                    continue;
                  }

                  zoms[i].HP += 5;
                  zoms[i].Speed += 0.05;
                  goLine(zoms[i], zoms[i].R <= 1 ? 3 : zoms[i].R >= 5 ? 2 : [1, 1, 2, 3, 4].random());
                }

                zoms.length > 0 && oSym.addTask(100, _ => {
                  ch(times);
                });
              } else {
                for (let i = 0; i < zoms.length; i++) {
                  zoms[i].HP -= 150;
                  zoms[i].Speed += 1;
                  goLine(zoms[i], 1);
                }
              }
            });
          }
        });
      });
      oSym.addTask(4000, function () {
        for (let i = 2; i < 9; i++) {
          for (let j = 2; j < 5; j++) {
            if (j != 3 || i == 2 || i == 8) {
              oSym.addTask(i * 30, _ => {
                let zom = PlaceZombie(oSkatingZombie, j, i);
                zom.HP -= 50;
                oSym.addTask(50, function () {
                  if (i <= 5) {
                    goLine(zom, [1, 4].random());
                  }
                });
              });
            }
          }
        }
      });
      oSym.addTask(4200, function () {
        PlaceZombie(oCigarZombie, 1, 4).Speed += 1;
        PlaceZombie(oCigarZombie, 5, 4).Speed += 1;
        PlaceZombie(oBucketheadZombie, 3, 6).Speed -= 0.2;
      });
      oSym.addTask(5000, function () {
        for (let i = 4; i < 9; i++) {
          for (let j = 1; j < 6; j++) {
            let zom = PlaceZombie(oStrollZombie, j, i);
            oSym.addTask(Math.floor(Math.random() * 100 + 50), _ => {
              goLine(zom, [1, 1, 3, 4].random());
            });
          }
        }
      });
      oSym.addTask(5700, function () {
        for (let i = 1; i < 9; i++) {
          for (let j = 1; j < 6; j++) {
            if (i % 3 == j % 3) {
              let z = PlaceZombie(oConeheadZombie, j, i + 2);

              if (i < 3) {
                oSym.addTask(30, _ => {
                  goLine(z, 1);
                });
              }
            }
          }
        }
      });
      oSym.addTask(6000, function () {
        PlaceZombie(oFootballZombie, 1, 11, 0);
        PlaceZombie(oFootballZombie, 5, 11, 0);
      });
      oSym.addTask(6200, function () {
        let SummonT = 0;

        for (let i = 1; i < 6; i++) {
          for (let j = 3; j < 10; j++) {
            oSym.addTask(SummonT += 10, _ => {
              let z = PlaceZombie([oBucketheadZombie, oCigarZombie, oCigarZombie].random(), i, j);
              z.Speed += 0.4;
              oSym.addTask(Math.floor(Math.random() * 50) + 50, function () {
                goLine(z, [1, 4].random());
              });
            });
          }
        }

        let arr = oS.ZName;
        arr.pop();

        for (let i = 0; i < 5; i++) {
          oSym.addTask(Math.floor(Math.random() * 1000), _ => {
            PlaceZombie(arr.random(), [1, 2, 3, 4, 5].random(), 11, 0);
          });
        }
      });
      oSym.addTask(9100, function () {
        let arr = oS.ZName;
        arr.pop();

        for (let i = 0; i < 25; i++) {
          oSym.addTask(Math.floor(Math.random() * 4000), _ => {
            PlaceZombie(arr.random(), [1, 2, 3, 4, 5].random(), 11, 0);
          });
        }
      });
      oSym.addTask(10500, function () {
        for (let i = 1; i < 6; i++) {
          let z = PlaceZombie(oBucketheadZombie, i, 3);
          oSym.addTask(200, _ => {
            goLine(z, 1);
          });
          PlaceZombie(oBucketheadZombie, i, 9);
        }
      });
      oSym.addTask(12900, function () {
        for (let i = 1; i <= 9; i++) {
          for (let j = 1; j < 6; j++) {
            if (i == 1 || i == 9 || j == 1 || j == 5) {
              oSym.addTask(i * 30, _ => {
                let zom = PlaceZombie(oCigarZombie, j, i);
                oSym.addTask(50, function () {
                  if (i < 5) {
                    goLine(zom, 1);
                  }
                });
              });
            }
          }
        }

        oSym.addTask(200, function () {
          for (let i = 2; i < 9; i++) {
            for (let j = 2; j < 5; j++) {
              if (j != 3 || i == 2 || i == 8) {
                oSym.addTask(i * 30, _ => {
                  let z = PlaceZombie(oConeheadZombie, j, i);
                  z.HP -= 50;
                  oSym.addTask(50, function () {
                    if (i <= 5) {
                      goLine(z, [1, 4].random());
                    }
                  });
                });
              }
            }
          }
        });
        oSym.addTask(400, function () {
          for (let i = 3; i < 8; i++) {
            PlaceZombie(oSkatingZombie, 3, i);
          }
        });
      });
      oSym.addTask(14000, function () {
        for (let i = 4; i < 9; i++) {
          for (let j = 1; j < 6; j++) {
            let zom = PlaceZombie(oStrollZombie, j, i);
            oSym.addTask(Math.floor(Math.random() * 100 + 50), _ => {
              goLine(zom, [1, 1, 3, 4].random());
            });
          }
        }

        let SummonT = 0;

        for (let i = 1; i < 6; i++) {
          for (let j = 3; j < 5; j++) {
            oSym.addTask(SummonT += 10, _ => {
              let z = PlaceZombie([oBucketheadZombie, oCigarZombie].random(), i, j);
              z.Speed += 0.4;
              oSym.addTask(Math.floor(Math.random() * 50) + 50, function () {
                goLine(z, [1, 4].random());
              });
            });
          }
        }
      });
      oSym.addTask(16000, function checkWin() {
        for (let i of $Z) {
          if (i.pixelTop > 600 || i.pixelTop < 0) {
            i.NormalDie();
          }
        }

        for (let i of $Z) {
          if (i) {
            oSym.addTask(200, checkWin);
            return;
          }
        }

        toWin();
      });
    }
  }, {
    AZ: [[oImp, 1, 1], [oZombie, 13, 1]],
    FlagNum: 8,
    FlagToSumNum: {
      a1: [8],
      a2: [0, 0]
    },
    FlagToEnd: function () {
      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:500px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, Exitlevel("Act", 1));
        }
      });
    }
  });
}