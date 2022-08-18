/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  const oNewspaperZombie2 = InheritO(oNewspaperZombie, {
    EName: "oNewspaperZombie2",
    OrnHP: 1200,
    HP: 900,
    Speed: 2.4,
    OSpeed: 2.4,
    Lvl: 1,
    Attack: 380,
    LostPaperSpeed: 5.7,
    LostPaperAttack: 850,
    getExplosion: function () {
      //新版本中已对爆炸植物机制作出修改
      var a = this,
          b = 1800;

      if (a.OSpeed != a.LostPaperSpeed) {
        a.OrnHP = 0;
        this.getHit3(this, 0);
      } else {
        if (a.HP > b) {
          a.HP -= b; //如果僵尸血量大于1800，则扣除血量1800
        } else {
          $Z[a.id] && !a.isGoingDie && a.ExplosionDie(); //如果僵尸血量小于1800，则可被炸弹直接炸死
        }
      }
    }
  });
  oS.Init({
    PName: [oPeashooter, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb2, oBambooUncle1, oFumeShroom, oScaredyShroom, oTallNut],
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie, oCaskZombie, oNewspaperZombie2],
    PicArr: [],
    backgroundImage: "images/interface/MarshJx.webp",
    CanSelectCard: 0,
    StaticCard: 0,
    LevelName: $__language_Array__["da13105fab769a3b7010502eac076da0"],
    LoadMusic: "Bgm_Marsh_Ready_JX",
    StartGameMusic: "Bgm_Marsh_Fight_JX",
    InitLawnMover: function () {},
    StartGame: function () {
      let arrP = [oRepeater, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb2, oBambooUncle1, oBambooUncle1, oFumeShroom, oRepeater, oTallNut, oTallNut],
          timeShengcheng = 600,
          timeAn = 2,
          firstP = oTallNut;

      for (let i = 1; i <= 4; i++) {
        CustomSpecial(oWallNut, i, i + 3);
        NewEle(0, "div", "left: " + (415 + i * 80) + "px;top: " + (i * 100 - 30) + "px;", {
          className: 'sos'
        }, $("tGround"));
      }

      CustomSpecial(oTallNut, 4, 8);
      CustomSpecial(oZombieComeOnObs, 5, 9);

      (function ss() {
        var N = 0;

        for (let v in $P) $P[v].EName == 'oWallNut' && ++N;

        N > 3 ? oSym.addTask(200, ss, []) : toOver(2);
      })();

      oMiniGames.ConveyorBelt(arrP, timeShengcheng, timeAn, [firstP]);
    },
    LoadAccess: function (a) {
      !localStorage['JNG_TR_ACT_SPF2_DEATH'] ? localStorage['JNG_TR_ACT_SPF2_DEATH'] = '0' : localStorage['JNG_TR_ACT_SPF2_DEATH'] = Number(localStorage['JNG_TR_ACT_SPF2_DEATH']) + 1;
      let dieCount = Number(localStorage['JNG_TR_ACT_SPF2_DEATH']),
          SumNum;
      let d = 0,
          DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
          dDave = NewImg("dDave", "images/interface/Dave.png", "left:0;top:81px", EDAll);

      (function fun() {
        switch (d) {
          case 0:
            DivTeach.onclick = fun;
            PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
            innerText(DivTeach, $__language_Array__["70795715917743568dbc6945f5db6305"]);
            d++;
            break;

          case 1:
            PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
            innerText(DivTeach, $__language_Array__["3adabe33354160d4d8c563a9bc8eb2f1"]);
            d++;
            break;

          case 2:
            if (Number(localStorage['JNG_TR_ACT_SPF2_DEATH']) < 1) {
              ClearChild(DivTeach, dDave);
              jngAlert.open({
                'text': $__language_Array__["9c899565f6c806da040a934bb6f7da0e"],
                'type': 0,
                'shade': 1,
                'nextHandler': _ => oSym.addTask(10, a)
              });
            } else {
              d++;
            }

        }

        if (Number(localStorage['JNG_TR_ACT_SPF2_DEATH']) >= 1) {
          switch (d) {
            case 3:
              DivTeach.onclick = fun;
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);

              switch (true) {
                case dieCount < 11:
                  innerText(DivTeach, `${$__language_Array__["0fdbfec3557d0fec31ad85d4e3f127a0"][0]}${dieCount}${$__language_Array__["0fdbfec3557d0fec31ad85d4e3f127a0"][1]}`);
                  break;

                case dieCount >= 11 && dieCount < 15:
                  innerText(DivTeach, $__language_Array__["691f3cf43f2b2bf36bfaed4f58636248"]);
                  break;

                default:
                  innerText(DivTeach, $__language_Array__["4dbff570542047d9e1900704732cb3f9"]);
              }

              d++;
              break;

            case 4:
              dDave.src = 'images/interface/Black_Dave.png';
              PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);

              switch (true) {
                case dieCount < 7:
                  innerText(DivTeach, `${$__language_Array__["096d1e2af31c3669adf726908a5a76a1"][0]}${dieCount + 1}${$__language_Array__["096d1e2af31c3669adf726908a5a76a1"][1]}`);
                  break;

                case dieCount == 7:
                  innerText(DivTeach, $__language_Array__["b58d0c24a97f59ea4a6b6222488cd3ec"]);
                  break;

                case dieCount == 8:
                  innerText(DivTeach, $__language_Array__["2f91c71a9042e0e65fe1a915f40b5508"]);
                  break;

                case dieCount == 9 || dieCount > 10 && dieCount < 15:
                  innerText(DivTeach, $__language_Array__["7d97f753ebfee44feba5835a4c5f66e1"]);
                  break;

                case dieCount == 10:
                  innerText(DivTeach, $__language_Array__["095b5cccdc45e3c1add8866cd4f02b22"]);
                  break;

                default:
                  innerText(DivTeach, $__language_Array__["7a90cd418a494baa38d2770eedd01872"]);
              }

              d++;
              break;

            case 5:
              ClearChild(DivTeach, dDave);

              if (dieCount < 15) {
                jngAlert.open({
                  'text': $__language_Array__["7bb50731e395d43a90d0ebad301565c7"],
                  'type': 0,
                  'shade': 1,
                  'nextHandler': _ => oSym.addTask(10, a)
                });
              } else {
                jngAlert.open({
                  'text': $__language_Array__["3e64d5be19b945709de8811040c33451"],
                  'type': 0,
                  'shade': 1,
                  'nextHandler': _ => oSym.addTask(10, a)
                });
              }

          }
        }
      })();

      switch (true) {
        case dieCount < 5:
          SumNum = {
            a1: [1, 2, 3, 8, 10, 13, 15, 18],
            a2: [2, 5, 9, 17 - parseInt(dieCount / 2), 22 - parseInt(dieCount / 2), 14, 20 - parseInt(dieCount / 2), 26 - parseInt(dieCount / 2)]
          };
          break;

        case dieCount >= 5 && dieCount < 10 || dieCount >= 15:
          SumNum = {
            a1: [1, 2, 3, 8, 10, 13, 15, 18],
            a2: [1, 3, 5, 13, 11, 13, 18 - parseInt(dieCount / 3), 20 - parseInt(dieCount / 3)]
          };
          break;

        case dieCount >= 10 && dieCount < 15:
          SumNum = {
            a1: [1, 2, 3, 8, 10, 13, 15, 18],
            a2: [1, 2, 2, 9, 10, 7, 14, 16]
          };
          break;
      }

      oP.FlagToSumNum = SumNum;
    }
  }, {
    AZ: [[oZombie, 1, 1], [oNewspaperZombie2, 3, 13, [13, 14, 18]], [oBucketheadZombie, 1, 1], [oConeheadZombie, 1, 1], [oFootballZombie, 1, 10], [oCaskZombie, 1, 1]],
    FlagNum: 18,
    FlagToMonitor: {},
    FlagToEnd: function () {
      localStorage['JNG_TR_ACT_SPFES'] = 'Act_SpFes3'; //更新缓存

      localStorage.removeItem('JNG_TR_ACT_SPF2_DEATH');
      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, 'Act_SpFes3');
        }
      });
    }
  });
}