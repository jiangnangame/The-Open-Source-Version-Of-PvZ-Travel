/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let boss;
  let oImp2 = InheritO(oImp, {
    EName: "oImp2",
    Speed: 3,
    BirthCallBack: function (a) {
      PlayAudio(["imp", 'imp2'][Math.round(Math.random() * 1)]);
      OrnNoneZombies.prototype.BirthCallBack(a);
      oSym.addTask(300, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self, index = 1) {
      if (!$Z[self.id]) {
        return;
      }

      new oMiniGames.oStg.Obj.CBullet().Birth({
        "pic": oMiniGames.oStg.publicPic["ball"],
        "width": 35,
        "height": 35,
        "r": 8,
        "x": self.X + self.width / 2,
        "y": GetY(self.R) - self.height / 2,
        "speed": 6,
        "angle": ["hero", Math.max(10, (10 + index * 2) % 360)],
        "rgb": oMiniGames.oStg.publicRGB["purple"]
      });
      new oMiniGames.oStg.Obj.CBullet().Birth({
        "pic": oMiniGames.oStg.publicPic["ball"],
        "width": 35,
        "height": 35,
        "r": 8,
        "x": self.X + self.width / 2,
        "y": GetY(self.R) - self.height / 2,
        "speed": 6,
        "angle": ["hero", Math.min(-10, (-10 - index * 2) % 360)],
        "rgb": oMiniGames.oStg.publicRGB["purple"]
      });
      oSym.addTask(20, self.shoot, [self, index + 9]);
    }

  }),
      oImp3 = InheritO(oImp, {
    EName: "oImp3",
    Speed: 2.7,
    BirthCallBack: function (a) {
      PlayAudio(["imp", 'imp2'][Math.round(Math.random() * 1)]);
      OrnNoneZombies.prototype.BirthCallBack(a);
      oSym.addTask(300, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self, index = 1) {
      if (!$Z[self.id] || self.HP < 90) {
        return;
      }

      for (let i = -30; i <= 30; i += 15) {
        new oMiniGames.oStg.Obj.CBullet().Birth({
          "pic": oMiniGames.oStg.publicPic["rice"],
          "width": 30,
          "height": 30,
          "r": 3,
          "x": self.X + self.width / 2,
          "y": GetY(self.R) - self.height / 2,
          "speed": 4 * Math.max(Math.abs(i / 40), 1.5),
          "angle": ["hero", i],
          "rgb": oMiniGames.oStg.publicRGB["purple"]
        });
      }

      if (index % 9 == 0) {
        new oMiniGames.oStg.Obj.CBullet().Birth({
          "pic": oMiniGames.oStg.publicPic["big"],
          "width": 150,
          "height": 150,
          "r": 40,
          "x": self.X + self.width / 2,
          "y": GetY(self.R) - self.height / 2,
          "speed": 4,
          "angle": ["hero", 0],
          "rgb": oMiniGames.oStg.publicRGB["red"]
        });
      }

      oSym.addTask(50, self.shoot, [self, index + 1]);
    }

  }),
      oZombie2 = InheritO(oZombie, {
    EName: "oZombie2",
    HP: 600,
    Speed: 2.2,
    BirthCallBack: function (a) {
      OrnNoneZombies.prototype.BirthCallBack(a);
      oSym.addTask(300, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self) {
      if (!$Z[self.id]) {
        return;
      }

      let d = Math.random() * 360;

      for (let j = 0; j <= 5; j++) {
        for (let i = -5; i <= 5; i++) {
          let cc = Math.floor(Math.random() * 2) * 10 + 30;
          oSym.addTask((i + 10) * 4, _ => {
            new oMiniGames.oStg.Obj.CBullet().Birth({
              "pic": oMiniGames.oStg.publicPic["rice"],
              "width": cc,
              "height": cc,
              "r": cc / 8,
              "x": self.X + self.width / 2,
              "y": GetY(self.R) - self.height / 2,
              "speed": 2 + (i + 10) % 3,
              "angle": ["hero", i * 2 + d + j * 60],
              "rgb": oMiniGames.oStg.publicRGB["red"]
            });
          });
        }
      }

      oSym.addTask(400, self.shoot, [self]);
    }

  }),
      oConeheadZombie2 = InheritO(oConeheadZombie, {
    EName: "oConeheadZombie2",
    Speed: 1.5,
    HP: 600,
    BirthCallBack: function (a) {
      OrnIZombies.prototype.BirthCallBack(a);
      oSym.addTask(300, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self) {
      if (!$Z[self.id]) {
        return;
      }

      let rrr = Math.floor(Math.random() * 10);
      oSym.addTask(1, function sh(index) {
        for (let j = 0; j < 5; j++) {
          let cc = Math.random() * 0.05,
              wh = Math.floor(Math.random() * 3) * 10 + 40;
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["rice"],
            "width": wh,
            "height": wh,
            "r": wh / 8,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": -(3 + index ** 2 % 4),
            "move": function () {
              let self = this;
              self.dx = self._defSpd[0] * self.speed;
              self.dy = self._defSpd[1] * self.speed;
              self.speed -= cc;
            },
            "angle": ["hero", j * 72 + index ** 2],
            "rgb": oMiniGames.oStg.publicRGB["red"]
          });
        }

        index < rrr + 30 && oSym.addTask(10, sh, [index + 1]);
      }, [rrr]);
      oSym.addTask(350, self.shoot, [self]);
    }

  }),
      oMembraneZombie2 = InheritO(oMembraneZombie, {
    EName: "oMembraneZombie2",
    Speed: 2.3,
    ShiFa: 0,
    HP: 800,

    Conjure() {
      const obj = this;
      if (!$Z[obj.id]) return;
      let arrPlants = hasPlants(true, v => v.PKind === 1);
      obj.Pianyi++; //更新偏移

      if (!obj.isAttacking && obj.Pianyi >= 60 && arrPlants.length > 0) {
        //判定是否释放膜法
        PlayAudio('conjure');
        obj.Pianyi = 0; //重置计数器

        obj.isAttacking = 2; //标记正在施法，确保僵尸停止运动

        obj.EleBody.src = 'images/Zombies/MembraneZombie/conjure.webp';
        obj.ShiFa++;
        oSym.addTask(300, _ => {
          let t = Math.floor(Math.random() * 4) + 5;

          for (let j = 0; j < 30; j++) for (let i = 0; i < t; i++) {
            new oMiniGames.oStg.Obj.CBullet().Birth({
              "pic": oMiniGames.oStg.publicPic["ball"],
              "width": 25,
              "height": 25,
              "r": 4,
              "x": obj.X + obj.width / 2,
              "y": GetY(obj.R) - obj.height / 2,
              "speed": 1 + j / 6,
              "angle": i * (360 / t) + j * 6,
              "move": function () {
                let self = this;
                self.dx = self._defSpd[0] * self.speed;
                self.dy = self._defSpd[1] * self.speed;
                self.speed -= Math.max(0.03, 0.003 * j);
              },
              "rgb": j < 20 && j >= 10 ? oMiniGames.oStg.publicRGB["red"] : j < 10 ? oMiniGames.oStg.publicRGB["blueWhite"] : oMiniGames.oStg.publicRGB["green"]
            });
          }

          obj.ShiFa >= 2 && obj.getExplosion();
          oSym.addTask(500, _ => //恢复
          obj.beAttacked && (obj.isAttacking = 0, obj.EleBody.src = 'images/Zombies/MembraneZombie/Zombie.webp'));
        });
      }
    }

  }),
      oStrollZombie2 = InheritO(oStrollZombie, {
    EName: "oStrollZombie2",
    HP: 180,
    BirthCallBack: function (a) {
      OrnNoneZombies.prototype.BirthCallBack(a);
      oSym.addTask(90, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self) {
      if (!$Z[self.id]) {
        return;
      }

      let ssfd = Math.random();

      for (let i = -30; i <= 30; i += 30) {
        let cc = (Math.random() - 0.5) * 0.1;

        if (ssfd < 0.5) {
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["rice"],
            "width": 40,
            "height": 40,
            "r": 3,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": 0 + Math.random() * 2,
            "angle": ["hero", i + Math.random() * 5 - 10],
            "move": function () {
              let self = this;
              self.dx = self._defSpd[0] * self.speed;
              self.dy = self._defSpd[1] * self.speed + cc;
              self.speed += 0.01;
            },
            "rgb": oMiniGames.oStg.publicRGB["green"]
          });
        } else {
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["rice"],
            "width": 40,
            "height": 40,
            "r": 3,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": 0 + Math.random() * 2,
            "angle": ["hero", i + Math.random() * 5 - 10],
            "move": function () {
              let self = this;
              self.dx = self._defSpd[0] * self.speed;
              self.dy = self._defSpd[1] * self.speed + cc;
              self.speed += 0.04;
            },
            "rgb": oMiniGames.oStg.publicRGB["blueWhite"]
          });
        }
      }

      oSym.addTask(12, self.shoot, [self]);
    }

  }),
      oBucketheadZombie2 = InheritO(oBucketheadZombie, {
    EName: "oBucketheadZombie2",
    Speed: 1,
    HP: 2000,
    OrnHP: 500,
    BirthCallBack: function (a) {
      OrnIIZombies.prototype.BirthCallBack(a);
      oSym.addTask(90, a.shoot, [a]);
      oSym.addTask(200, a.check, [a]);
    },

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 35
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
        self.NormalDie();
      }

      oSym.addTask(200, self.check, [self]);
    },

    shoot(self) {
      if (!$Z[self.id]) {
        return;
      }

      let ang = oMiniGames.oStg.getAngle2(20 + self.X + self.width / 2, GetY(self.R) - self.height / 2 + 20, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);
      oSym.addTask(1, function sh(i = 1) {
        for (let j = 1; j < 6; j++) {
          let cc = (Math.random() - 0.5) * 0.5;
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["rice"],
            "width": 40,
            "height": 40,
            "r": 4,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": 3 + j / 2,
            "move": function () {
              let self = this;
              self.dx = self._defSpd[0] * self.speed;
              self.dy = self._defSpd[1] * self.speed + cc;
              self.speed += 0.02;
            },
            "angle": ang + (20 - i * 2) * 5 + (j - 3) * 20,
            "rgb": oMiniGames.oStg.publicRGB["green"]
          });
        }

        i <= 20 && oSym.addTask(5, sh, [i + 1]);
      });
      oSym.addTask(200, self.shoot, [self]);
    }

  }),
      oBoss = InheritO(oBossB, {
    EName: "oBoss",
    CName: "boss",
    HP: 35000,
    SummonZombieDifficulty: 0,

    PlaceMissiles(Numbers = 2, PlaceRifter = 1, a = this) {
      this.RestoreAction(200);
    },

    Move(R, C = 8) {
      R = Math.floor(Math.random() * 3) + 2;
      let self = this,
          ele = self.EleBody,
          LX = self.X,
          LY = self.pixelTop,
          targetX = GetX(C) - self.beAttackedPointL,
          targetY = GetY(R) - self.height + self.GetDY();

      if (R === self.R) {
        self.Activites();
        return;
      }

      ele.src = `images/Zombies/BossB/move1.webp`;
      oSym.addTask(40, oEffects.Animate, [ele, {
        opacity: 0
      }, 'slow', 'ease-in', _ => {
        self.ZX = self.AttackedLX = targetX;
        self.X = targetX - self.beAttackedPointL;
        self.AttackedRX = self.X + self.beAttackedPointR;
        self.pixelTop = targetY;
        self.beAttacked = 0;
        oZ.moveTo(self.id, self.R, R);
      }]);
      oSym.addTask(200, _ => {
        ele.src = 'images/Zombies/BossB/move2.webp';
        SetStyle(self.Ele, {
          left: self.X + 'px',
          top: targetY + 'px',
          zIndex: 3 * R + 2
        });
        oEffects.Animate(ele, {
          opacity: 1
        }, 1.1, 'ease-in', _ => self.RenderEleBody('images/Zombies/BossB/0.webp', _ => {
          self.beAttacked = 1;
          self.Activites();
        }));
      });
    },

    IceStorm(a, b, number) {
      this.EleBody.src = 'images/Zombies/BossB/icewind.webp';
      this.RestoreAction(380);
      oSym.addTask(200, _ => {
        for (let i of $Z) {
          if ($Z[i.id] && i.id != this.id && (i.R >= a && i.R <= b || i.R >= b && i.R <= a)) {
            i.getHit0(i, 60);
          }
        }
      });
    },

    getExplosion() {
      let self = this;

      if (self.HP > 13000) {
        self.HP -= 500;
        self.ChkStage();
      } else if (self.HP > 1000) {
        self.HP -= 1000;
        self.ChkStage();
      } else {
        self.HP = 0;
        self.NormalDie();
      }

      oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
        curValue: self.HP
      });
    }

  });
  oS.Init({
    PName: [oRepeater2],
    ZName: [oImp2, oImp3, oZombie2, oMembraneZombie2, oConeheadZombie2, oStrollZombie2, oBucketheadZombie2],
    backgroundImage: 'images/interface/Polar2.webp',
    AudioArr: ["Fuben_Winter_Fight2"],
    CanSelectCard: 0,
    SunNum: 1700,
    Dkind: 0,
    LevelName: $__language_Array__["b38f0e250b9fdfe4fa40bace504041c5"],
    InitLawnMover: function () {},
    LoadMusic: "Bgm_Polar_Ready_2",
    StartGameMusic: "Bgm_Polar_Fight_Challenge",
    LoadAccess: function (a) {
      oSym.addTask(30, a, [0]);
      PlayAudio('Bgm_Polar_Noise', 1);
      NewImg("imgKK", `images/interface/Polar_Mask4.webp`, `left:1100px;`, EDAll);
      NewImg("imgKK", `images/interface/Polar_Mask3.webp`, "left:167px;top:546px;", EDAll); //(NewEle('PolarFire2', "div", null, {className: 'PolarFire'}, $('tGround')), NewEle('PolarFire', "div", null, {className: 'PolarFire'}, $('tGround')));          

      oMiniGames.oStg.Init();
    },
    StartGame: function () {
      $("dCardList").style.display = "none";
      StopMusic();
      PlayMusic(oS.LoadMusic = oS.StartGameMusic);
      NewMusic(oS.LoadMusic = oS.StartGameMusic);
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      oS.InitLawnMover();
      oS.ControlFlagmeter && oFlagContent.init({
        fullValue: oP.FlagNum - 1,
        curValue: 0
      });
      let c = CustomSpecial(oRepeater2, 3, 1);
      let s = new oMiniGames.oStg.Obj.CHero();
      s.Birth($(c.id), 150, 290, 75, 75, 4, true);
      PrepareGrowPlants(function () {
        oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
        BeginCool();
        oSym.addTask(500, function () {
          oP.AddZombiesFlag();
          oS.ControlFlagmeter && oFlagContent.show();
        }, []);
      });
    }
  }, {
    AZ: [[oImp2, 1, 1, [1, 2]], [oZombie2, 1, 1], [oImp3, 1, 1], [oMembraneZombie2, 1, 1], [oConeheadZombie2, 1, 1], [oStrollZombie2, 1, 1], [oBucketheadZombie2, 1, 1]],
    FlagNum: 4,
    FlagToSumNum: {
      a1: [1, 2, 3, 4],
      a2: [2, 5, 7, 0]
    },
    FlagToMonitor: {
      3: [_ => {
        for (let i of $Z) {
          i.NormalDie();
        }

        oMiniGames.IceStorm(1, 5, 0);

        for (let i = 1; i <= 5; ++i) {
          for (let j = 8; j < 10; ++j) {
            CustomSpecial(oRifter, i, j);
            CustomSpecial(oBegonia, i, j);
            oSym.addTask(1, _ => CustomSpecial(oRifter, i, j));
          }
        }

        StopMusic();
        PlayMusic(oS.LoadMusic = "Fuben_Winter_Fight2");
        NewMusic(oS.LoadMusic = "Fuben_Winter_Fight2");
        boss = PlaceZombie(oBoss, 4, 8, 0);
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
        oSym.addTask(100, function d() {
          if (boss.HP > 28000) {
            boss0(boss);
          } else if (boss.HP > 18000) {
            boss1(boss);
          } else if (boss.HP > 13000) {
            boss2(boss);
          } else if (boss.HP > 1000) {
            boss3(boss);
          } else {
            boss4(boss);
          }

          oSym.addTask(1500, d);
        });
        oSym.addTask(20, function test() {
          if (!oMiniGames.oStg.hero.CanDie && boss.HP >= 13000) {
            boss.HP += 100;
            boss.HP = Math.min(35000, boss.HP);
          }

          oSym.addTask(20, test);
        });

        function boss0(self) {
          for (let i = 0; i < 1400; i += 100) {
            oSym.addTask(i, function () {
              if (!$Z[boss.id]) {
                return;
              }

              let cc = Math.floor(Math.random() * 360);

              for (let a = 0; a < 360; a += 10) {
                new oMiniGames.oStg.Obj.CBullet().Birth({
                  "pic": oMiniGames.oStg.publicPic["ball"],
                  "width": 35,
                  "height": 35,
                  "r": 3,
                  "x": self.X + self.width / 2 + Math.random() * 200 - 100,
                  "y": GetY(self.R) - self.height / 2 + Math.random() * 200 - 100,
                  "speed": 1 + i / 80 % 3,
                  "angle": ["hero", a + cc],
                  "move": function () {
                    let self = this;
                    self.dx = self._defSpd[0] * self.speed;
                    self.dy = self._defSpd[1] * self.speed;
                    self.speed += 0.02;
                  },
                  "rgb": oMiniGames.oStg.publicRGB["green"]
                });
              }
            });
          }

          oSym.addTask(Math.floor(Math.random() * 1400), _ => {
            new oMiniGames.oStg.Obj.CBullet().Birth({
              "pic": oMiniGames.oStg.publicPic["ball"],
              "width": 35,
              "height": 35,
              "r": 3,
              "x": self.X + self.width / 2 + Math.random() * 200 - 100,
              "y": GetY(self.R) - self.height / 2 + Math.random() * 200 - 100,
              "speed": 3,
              "angle": ["hero", 0],
              "move": function () {
                let self = this;
                self.dx = self._defSpd[0] * self.speed;
                self.dy = self._defSpd[1] * self.speed;
                self.speed += 0.02;
              },
              "rgb": oMiniGames.oStg.publicRGB["green"]
            });
          });
        }

        function boss1(self) {
          for (let i = 0; i < 1400; i += 80) {
            oSym.addTask(i, function () {
              if (!$Z[boss.id]) {
                return;
              }

              let cc = Math.floor(Math.random() * 360);
              let pos = [Math.random() * 200 - 100, Math.random() * 200 - 100];

              for (let a = 0; a < 360; a += 18) {
                new oMiniGames.oStg.Obj.CBullet().Birth({
                  "pic": oMiniGames.oStg.publicPic["ball"],
                  "width": 30,
                  "height": 30,
                  "r": 3,
                  "x": self.X + self.width / 2 + pos[0],
                  "y": GetY(self.R) - self.height / 2 + pos[1],
                  "speed": 1 - Math.abs(Math.sin(a / 72 * Math.PI)) + 1,
                  "angle": ["hero", a + cc],
                  "move": function () {
                    let self = this;
                    self.dx = self._defSpd[0] * self.speed;
                    self.dy = self._defSpd[1] * self.speed;
                    self.speed += 0.02;
                  },
                  "rgb": oMiniGames.oStg.publicRGB["green"]
                });
              }
            });
          }

          for (let xx = 0; xx < 1400; xx += 70) {
            let index = xx / 70;
            oSym.addTask(xx, function () {
              if (!$Z[boss.id]) {
                return;
              }

              for (let i = -30; i <= 30; i += 15) {
                new oMiniGames.oStg.Obj.CBullet().Birth({
                  "pic": oMiniGames.oStg.publicPic["big"],
                  "width": 120,
                  "height": 120,
                  "r": 10,
                  "x": self.X + self.width / 2,
                  "y": GetY(self.R) - self.height / 2,
                  "speed": 2,
                  "angle": ["hero", i],
                  "rgb": oMiniGames.oStg.publicRGB["red"]
                });
              }

              new oMiniGames.oStg.Obj.CBullet().Birth({
                "pic": oMiniGames.oStg.publicPic["big"],
                "width": 150,
                "height": 150,
                "r": 40,
                "x": self.X + self.width / 2,
                "y": GetY(self.R) - self.height / 2 - 100,
                "speed": 6,
                "angle": 150,
                "rgb": oMiniGames.oStg.publicRGB["purple"]
              });
              new oMiniGames.oStg.Obj.CBullet().Birth({
                "pic": oMiniGames.oStg.publicPic["big"],
                "width": 150,
                "height": 150,
                "r": 40,
                "x": self.X + self.width / 2,
                "y": GetY(self.R) - self.height / 2 - 100,
                "speed": 6,
                "angle": 210,
                "rgb": oMiniGames.oStg.publicRGB["purple"]
              });

              for (let i = 0; i <= 4; i++) {
                oSym.addTask(i * 4, _ => {
                  new oMiniGames.oStg.Obj.CBullet().Birth({
                    "pic": oMiniGames.oStg.publicPic["rice"],
                    "width": 30,
                    "height": 30,
                    "r": 3,
                    "x": self.X + self.width / 2,
                    "y": GetY(self.R) - self.height / 2,
                    "speed": 4,
                    "angle": 90 + index * 6 + i * 15,
                    "rgb": oMiniGames.oStg.publicRGB["yellow"]
                  });
                  new oMiniGames.oStg.Obj.CBullet().Birth({
                    "pic": oMiniGames.oStg.publicPic["rice"],
                    "width": 30,
                    "height": 30,
                    "r": 3,
                    "x": self.X + self.width / 2,
                    "y": GetY(self.R) - self.height / 2,
                    "speed": 4,
                    "angle": 90 - index * 6 - i * 15,
                    "rgb": oMiniGames.oStg.publicRGB["yellow"]
                  });
                });
              }

              new oMiniGames.oStg.Obj.CBullet().Birth({
                "pic": oMiniGames.oStg.publicPic["rice"],
                "width": 30,
                "height": 30,
                "r": 3,
                "x": self.X + self.width / 2,
                "y": GetY(self.R) - self.height / 2,
                "speed": 2,
                "angle": ["hero", Math.random() * 20 - 10],
                "rgb": oMiniGames.oStg.publicRGB["yellow"]
              });
            });
          }
        }

        function boss2(self) {
          let mr = Math.floor(Math.random() * 360);

          for (let x = 0; x < 1400; x += 2) {
            oSym.addTask(x, _ => {
              if (!$Z[boss.id]) {
                return;
              }

              if (x % 30 == 0) {
                for (let i = -2; i <= 2; i++) {
                  new oMiniGames.oStg.Obj.CBullet().Birth({
                    "pic": oMiniGames.oStg.publicPic["rice"],
                    "width": 40,
                    "height": 40,
                    "r": 2,
                    "x": self.X + self.width / 2,
                    "y": GetY(self.R) - self.height / 2,
                    "speed": 6 + i,
                    "angle": i * 30 + 180,
                    "rgb": oMiniGames.oStg.publicRGB["blueWhite"]
                  });
                }
              }

              if (x < 300 && x % 80 == 0 || x < 700 && x % 120 == 0) {
                let mr = Math.random() * 40;

                for (let i = 0; i < 600; i += 40) {
                  new oMiniGames.oStg.Obj.CBullet().Birth({
                    "pic": oMiniGames.oStg.publicPic["rice"],
                    "width": 40,
                    "height": 40,
                    "r": 2,
                    "x": -39,
                    "y": i + mr,
                    "speed": x % 120 == 0 ? 4 : 2,
                    "angle": 360,
                    "rgb": oMiniGames.oStg.publicRGB["yellow"]
                  });
                  new oMiniGames.oStg.Obj.CBullet().Birth({
                    "pic": oMiniGames.oStg.publicPic["rice"],
                    "width": 40,
                    "height": 40,
                    "r": 2,
                    "x": 899,
                    "y": i + mr + 20,
                    "speed": x % 120 == 0 ? -4 : -2,
                    "angle": 360,
                    "rgb": oMiniGames.oStg.publicRGB["yellow"]
                  });
                }
              }
            });
          }
        }

        function boss3(self, spdp = 0) {
          let mr = Math.floor(Math.random() * 360);

          for (let x = 0; x < 1500; x += 5) {
            oSym.addTask(x, _ => {
              if (!$Z[boss.id]) {
                return;
              }

              for (let i = 0; i <= 5; i++) {
                new oMiniGames.oStg.Obj.CBullet().Birth({
                  "pic": oMiniGames.oStg.publicPic["rice"],
                  "width": 40,
                  "height": 40,
                  "r": 4,
                  "x": self.X + self.width / 2,
                  "y": GetY(self.R) - self.height / 2,
                  "speed": -3 + spdp,
                  "angle": (x / 5 + mr) ** (3 / 2) + i * 60,
                  "move": function () {
                    let self = this;
                    self.dx = self._defSpd[0] * self.speed;
                    self.dy = self._defSpd[1] * self.speed;
                    self.speed += 0.035;
                  },
                  "rgb": oMiniGames.oStg.publicRGB["blueWhite"]
                });
              }
            });
          }

          let ox = self.X + self.width / 2 - 10,
              oy = GetY(self.R) - self.height / 2 - 10;
          let zomR = 120;
          let shootAngle = Math.random() * 360;
          let r = Math.random() * 360;

          for (let i = 0; i < 150; i++) {
            oSym.addTask(i * 10, _ => {
              for (let an = 0; an < 6; an++) {
                let x = ox + Math.sin(shootAngle * Math.PI / 180) * zomR;
                let y = oy + Math.cos(shootAngle * Math.PI / 180) * zomR;
                new oMiniGames.oStg.Obj.CBullet().Birth({
                  "pic": oMiniGames.oStg.publicPic["ball"],
                  "width": 30,
                  "height": 30,
                  "r": 0.5,
                  "x": ox + Math.sin(shootAngle * Math.PI / 180) * zomR,
                  "y": oy + Math.cos(shootAngle * Math.PI / 180) * zomR,
                  "speed": (i / 5 + 2) % 5 + 1,
                  "angle": an * 60 + (shootAngle / 30 - 18) * 5 + r,
                  "move": function () {
                    let self = this;
                    self.dx = self._defSpd[0] * self.speed;
                    self.dy = self._defSpd[1] * self.speed; //vx+=Math.random()/5-0.1;
                    //vy+=Math.random()/5-0.1;
                  },
                  "rgb": oMiniGames.oStg.publicRGB["purple"]
                }); //console.log(shootAngle,Math.sin(shootAngle*Math.PI/180)*zomR);
              }

              shootAngle += 30;
              zomR -= 1;
            });
          }
        }

        function boss4(self) {
          boss0(self);
          boss3(self, 2);
        }
      }]
    },

    FlagToEnd() {
      localStorage['Act_Danmaku'] = 1; //更新缓存

      localStorage['Act_Danmaku2'] = 1; //更新缓存

      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, Exitlevel(oS.lvl, 1));
        }
      });
    }

  });
}