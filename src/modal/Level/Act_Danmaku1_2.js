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

  });
  oS.Init({
    PName: [oRepeater2],
    ZName: [oImp2, oImp3, oZombie2],
    backgroundImage: 'images/interface/Polar2.webp',
    CanSelectCard: 0,
    SunNum: 1000,
    Dkind: 0,
    LevelName: $__language_Array__["574f21a2ea66070d54f7549d8efc419b"],
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
        oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle(Mobile ? $__language_Array__["7ef18e276383685fdf50162d318ac0a7"] : $__language_Array__["4af54dcd40dc88225fe782b733f6a351"], 800));
        BeginCool();
        oSym.addTask(500, function () {
          oP.AddZombiesFlag();
          oS.ControlFlagmeter && oFlagContent.show();
        }, []);
      });
    }
  }, {
    AZ: [[oImp2, 1, 1, [1]], [oZombie2, 1, 5, [5, 6, 7]], [oImp3, 1, 2]],
    FlagNum: 11,
    FlagToSumNum: {
      a1: [1, 2, 4, 5, 7, 9],
      a2: [1, 3, 7, 1, 5, 6, 10]
    },

    FlagToEnd() {
      localStorage['Act_Danmaku'] = Number.parseInt(localStorage['Act_Danmaku']) + 1; //更新缓存

      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, "Act_Danmaku2_2");
        }
      });
    }

  });
}