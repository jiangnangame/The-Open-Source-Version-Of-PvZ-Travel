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

  });
  oS.Init({
    PName: [oPeashooter2],
    ZName: [oImp2, oImp3, oZombie2],
    backgroundImage: 'images/interface/Marsh.webp',
    CanSelectCard: 0,
    SunNum: 600,
    Dkind: 0,
    backgroundMask: 'BgMask-Marsh',
    LevelName: $__language_Array__["e86c683e94466f5b35a24b59e6774980"],
    InitLawnMover: function () {},
    LoadMusic: "Bgm_Marsh_Ready",
    StartGameMusic: "Bgm_Marsh_Fight_Challenge",
    LoadAccess: function (a) {
      let d = 0,
          DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll);
      NewImg("dDave", "images/interface/Dave.png", "left:0;top:81px", EDAll);

      (function fun() {
        switch (d) {
          case 0:
            DivTeach.onclick = fun;
            PlayAudio("crazydaveshort1");
            innerText(DivTeach, $__language_Array__["c5bbb8a626cd66ff334de3def0d106e6"]);
            d++;
            break;

          case 1:
            PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
            innerText(DivTeach, $__language_Array__["2b0f8be4be6e687450db498bd1bbe432"]);
            d++;
            break;

          case 2:
            ClearChild(DivTeach, $("dDave"));
            oSym.addTask(30, a, [0]);
        }
      })();

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
        oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc, PlaySubtitle(!Mobile ? $__language_Array__["3c1c373ea875534c581fb651acceb734"] : $__language_Array__["630030aaded855ba2dbc197b48040d03"]));
        BeginCool();
        oSym.addTask(1500, function () {
          oP.AddZombiesFlag();
          oS.ControlFlagmeter && oFlagContent.show();
          PlaySubtitle($__language_Array__["12a358328b6c10c6a4ca83a80b724051"]);
          oSym.addTask(800, PlaySubtitle);
        }, []);
      });
    }
  }, {
    AZ: [[oImp2, 1, 1, [1]], [oZombie2, 1, 5, [5, 6, 7]], [oImp3, 1, 2]],
    FlagNum: 11,
    FlagToSumNum: {
      a1: [1, 2, 4, 5, 7, 9],
      a2: [1, 4, 7, 1, 5, 6, 10]
    },

    FlagToEnd() {
      localStorage['Act_Danmaku'] = Number.parseInt(localStorage['Act_Danmaku']) + 1; //更新缓存

      NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
        onclick: function () {
          GetWin(this, "Act_Danmaku2_1");
        }
      });
    }

  });
}