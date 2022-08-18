/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let oImp2 = InheritO(oImp, {
    EName: "oImp2",
    HP: 140,
    BirthCallBack: function (a) {
      PlayAudio(["imp", 'imp2'][Math.round(Math.random() * 1)]);
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

      new oMiniGames.oStg.Obj.CBullet().Birth({
        "pic": oMiniGames.oStg.publicPic["ball"],
        "width": 40,
        "height": 40,
        "r": 10,
        "x": self.X + self.width / 2,
        "y": GetY(self.R) - self.height / 2,
        "speed": 3,
        "angle": ["hero", 10],
        "rgb": oMiniGames.oStg.publicRGB["purple"]
      });
      new oMiniGames.oStg.Obj.CBullet().Birth({
        "pic": oMiniGames.oStg.publicPic["ball"],
        "width": 40,
        "height": 40,
        "r": 10,
        "x": self.X + self.width / 2,
        "y": GetY(self.R) - self.height / 2,
        "speed": 3,
        "angle": ["hero", -10],
        "rgb": oMiniGames.oStg.publicRGB["purple"]
      });
      oSym.addTask(500, self.shoot, [self]);
    }

  }),
      oImp3 = InheritO(oImp, {
    EName: "oImp3",
    HP: 140,
    BirthCallBack: function (a) {
      PlayAudio(["imp", 'imp2'][Math.round(Math.random() * 1)]);
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

      for (let i = -30; i <= 30; i += 30) {
        new oMiniGames.oStg.Obj.CBullet().Birth({
          "pic": oMiniGames.oStg.publicPic["ball"],
          "width": 40,
          "height": 40,
          "r": 10,
          "x": self.X + self.width / 2,
          "y": GetY(self.R) - self.height / 2,
          "speed": 3,
          "angle": ["hero", i],
          "rgb": oMiniGames.oStg.publicRGB["purple"]
        });
      }

      oSym.addTask(400, self.shoot, [self]);
    }

  }),
      oZombie2 = InheritO(oZombie, {
    EName: "oZombie2",
    HP: 200,
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

      for (let j = 0; j <= 2; j++) {
        for (let i = -3; i <= 3; i++) {
          oSym.addTask((i + 10) * 4, _ => {
            new oMiniGames.oStg.Obj.CBullet().Birth({
              "pic": oMiniGames.oStg.publicPic["ball"],
              "width": 30,
              "height": 30,
              "r": 8,
              "x": self.X + self.width / 2,
              "y": GetY(self.R) - self.height / 2,
              "speed": 2 + (i + 10) % 3,
              "angle": ["hero", i * 3 + j * 120],
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
    Speed: 1.4,
    BirthCallBack: function (a) {
      OrnIZombies.prototype.BirthCallBack(a);
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

      let rrr = Math.floor(Math.random() * 10);
      oSym.addTask(1, function sh(index) {
        for (let j = 0; j < 5; j++) {
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["ball"],
            "width": 20,
            "height": 20,
            "r": 5,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": 4 + index ** 2 % 4,
            "angle": j * 72 + index ** 2,
            "rgb": oMiniGames.oStg.publicRGB["red"]
          });
        }

        index < rrr + 10 && oSym.addTask(10, sh, [index + 1]);
      }, [rrr]);
      oSym.addTask(400, self.shoot, [self]);
    }

  }),
      oMembraneZombie2 = InheritO(oMembraneZombie, {
    EName: "oMembraneZombie2",
    Speed: 1.7,

    Conjure() {
      const obj = this;
      if (!$Z[obj.id]) return;
      let arrPlants = hasPlants(true, v => v.PKind === 1);
      obj.Pianyi++; //更新偏移

      if (!obj.isAttacking && obj.Pianyi >= 100 && arrPlants.length > 0) {
        //判定是否释放膜法
        PlayAudio('conjure');
        obj.Pianyi = 0; //重置计数器

        obj.isAttacking = 2; //标记正在施法，确保僵尸停止运动

        obj.EleBody.src = 'images/Zombies/MembraneZombie/conjure.webp';
        oSym.addTask(300, _ => {
          let t = Math.floor(Math.random() * 7) + 2;

          for (let j = 0; j < 20; j++) for (let i = 0; i < t; i++) {
            new oMiniGames.oStg.Obj.CBullet().Birth({
              "pic": oMiniGames.oStg.publicPic["ball"],
              "width": 25,
              "height": 25,
              "r": 3,
              "x": obj.X + obj.width / 2,
              "y": GetY(obj.R) - obj.height / 2,
              "speed": 1 + j / 6,
              "angle": i * (360 / t) + j * 6,
              "move": function () {
                let self = this;
                self.dx = Math.sin(self.AngleToRad(self.angle)) * self.speed;
                self.dy = Math.cos(self.AngleToRad(self.angle)) * self.speed;
                self.speed -= Math.max(0.03, 0.003 * j);
              },
              "rgb": j < 10 ? oMiniGames.oStg.publicRGB["blueWhite"] : oMiniGames.oStg.publicRGB["green"]
            });
          }

          obj.getExplosion();
          oSym.addTask(500, _ => //恢复
          obj.beAttacked && (obj.isAttacking = 0, obj.EleBody.src = 'images/Zombies/MembraneZombie/Zombie.webp'));
        });
      }
    }

  }),
      oStrollZombie2 = InheritO(oStrollZombie, {
    EName: "oStrollZombie2",
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

      for (let i = -180; i <= 180; i += 90) {
        new oMiniGames.oStg.Obj.CBullet().Birth({
          "pic": oMiniGames.oStg.publicPic["ball"],
          "width": 28,
          "height": 28,
          "r": 4,
          "x": self.X + self.width / 2,
          "y": GetY(self.R) - self.height / 2,
          "speed": 6,
          "angle": ["hero", i],
          "rgb": oMiniGames.oStg.publicRGB["green"]
        });
      }

      oSym.addTask(24, self.shoot, [self]);
    }

  }),
      oBucketheadZombie2 = InheritO(oBucketheadZombie, {
    EName: "oBucketheadZombie2",
    Speed: 1,
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
          new oMiniGames.oStg.Obj.CBullet().Birth({
            "pic": oMiniGames.oStg.publicPic["ball"],
            "width": 25,
            "height": 25,
            "r": 4,
            "x": self.X + self.width / 2,
            "y": GetY(self.R) - self.height / 2,
            "speed": 3 + j / 2,
            "angle": ang + (20 - i * 2) * 5 + (j - 3) * 20,
            "rgb": oMiniGames.oStg.publicRGB["green"]
          });
        }

        i <= 20 && oSym.addTask(5, sh, [i + 1]);
      });
      oSym.addTask(320, self.shoot, [self]);
    }

  });
  oS.Init({
    PName: [oPeashooter2],
    ZName: [oImp2, oImp3, oZombie2, oMembraneZombie2, oConeheadZombie2, oStrollZombie2, oBucketheadZombie2],
    backgroundImage: 'images/interface/Marsh.webp',
    CanSelectCard: 0,
    SunNum: 600,
    Dkind: 0,
    backgroundMask: 'BgMask-Marsh',
    InitLawnMover: function () {},
    LevelName: $__language_Array__["fa05b0d58715e0a05838b1a2b2a28f6c"],
    LoadMusic: "Bgm_Forest_Ready",
    LoadAccess: function (a) {
      oSym.addTask(40, a, [0]);
      StopMusic();
      PlayMusic("Bgm_Marsh_Fight_Challenge");
      NewMusic("Bgm_Marsh_Fight_Challenge");
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
      let c = CustomSpecial(oPeashooter2, 3, 1);
      let s = new oMiniGames.oStg.Obj.CHero();
      s.Birth($(c.id), 150, 290, 75, 75, 4);
      PrepareGrowPlants(function () {
        oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle(""));
        BeginCool();
        oSym.addTask(800, function () {
          oP.AddZombiesFlag();
          oS.ControlFlagmeter && oFlagContent.show();
        }, []);
      });
    }
  }, {
    AZ: [[oImp2, 1, 1, [1, 2]], [oZombie2, 1, 3], [oImp3, 1, 2], [oMembraneZombie2, 1, 6], [oConeheadZombie2, 1, 7], [oStrollZombie2, 1, 1], [oBucketheadZombie2, 1, 6, [6, 7, 8]]],
    FlagNum: 8,
    FlagToSumNum: {
      a1: [1, 2, 4, 5, 7, 9],
      a2: [1, 1, 0, 6, 13, 15]
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
      localStorage['Act_Danmaku'] = 1; //更新缓存

      localStorage['Act_Danmaku2'] = 2; //更新缓存

      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, "Act_Danmaku1_2");
        }
      });
    }

  });
}