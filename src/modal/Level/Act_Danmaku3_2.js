/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
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
          "width": 100,
          "height": 100,
          "r": 20,
          "x": self.X + self.width / 2 - 50,
          "y": GetY(self.R) - self.height / 2 - 50,
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

  });
  oS.Init({
    PName: [oRepeater2],
    ZName: [oImp2, oImp3, oZombie2, oMembraneZombie2, oConeheadZombie2, oStrollZombie2, oBucketheadZombie2],
    backgroundImage: 'images/interface/Polar2.webp',
    CanSelectCard: 0,
    SunNum: 1000,
    Dkind: 0,
    LevelName: $__language_Array__["eb59c9bfb1bb6d827aeb365d249ec9b8"],
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
    AZ: [[oImp2, 1, 1, [1, 2]], [oZombie2, 1, 3], [oImp3, 1, 2], [oMembraneZombie2, 1, 6], [oConeheadZombie2, 1, 7], [oStrollZombie2, 1, 1], [oBucketheadZombie2, 1, 6, [6, 7, 8, 9]]],
    FlagNum: 9,
    FlagToSumNum: {
      a1: [1, 2, 4, 5, 7, 9],
      a2: [1, 1, 4, 15, 15, 4]
    },
    FlagToMonitor: {
      1: [_ => {
        for (let i = 1; i <= 5; i += 2) {
          PlaceZombie(oStrollZombie2, i, 11, 0);
        }
      }],
      2: [_ => {
        for (let i = 1; i <= 5; i++) {
          PlaceZombie(oImp3, i, 11, 0);
        }

        oSym.addTask(600, _ => {
          for (let i = 2; i <= 5; i += 2) {
            PlaceZombie(oZombie2, i, 11, 0);
          }
        });
        oSym.addTask(1200, _ => {
          for (let i = 1; i <= 5; i++) {
            PlaceZombie(oImp2, i, 11, 0);
          }
        });
        oSym.addTask(1400, _ => {
          for (let i = 1; i <= 5; i++) {
            PlaceZombie(oImp2, i, 11, 0);
          }
        });
      }],
      3: [_ => {
        for (let i = 1; i <= 5; i += 2) {
          PlaceZombie(oStrollZombie2, i, 11, 0);
        }

        oSym.addTask(400, _ => {
          for (let i = 2; i <= 5; i += 2) {
            PlaceZombie(oStrollZombie2, i, 11, 0);
          }
        });
        oSym.addTask(380, _ => {
          PlaceZombie(oConeheadZombie2, 3, 11, 0);
          oSym.addTask(270, _ => {
            PlaceZombie(oMembraneZombie2, 3, 11, 0);
          });
        });
      }]
    },

    FlagToEnd() {
      localStorage['Act_Danmaku'] = "Last"; //更新缓存

      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, "Act_DanmakuLast_2");
        }
      });
    }

  });
}