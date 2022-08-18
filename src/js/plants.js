/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

var CPlants = NewO({
  /*
      上次和囧姨请教了几个关于植物定位属性的区分，就记录在这里了
      pixel：图片某个边缘到舞台边缘的距离
      beAttackedPoint：植物图像左下角（原点0）向某个方向，能触发僵尸攻击的范围
      Attacked：相对于整个场景，植物能触发僵尸攻击的范围
  */
  EName: "CPlants",
  HP: 300,

  /* PKind调用说明：0（花盆容器）、1（普通植物）、2（保护容器）、3（I类重叠植物，如花椒）、4（II类重叠植物，如液态保护膜）、5（可重叠型地形容器，如瓷砖） */
  PKind: 1,
  beAttackedPointL: 20,
  CardGif: 0,
  StaticGif: 1,
  NormalGif: 2,
  AlmanacGif: null,
  canEat: 1,
  zIndex: 0,
  AudioArr: [],
  coolTime: 7.5,
  canShovel: 1,
  CanSelect: 1,
  ImgStyle: {},
  //植物的style属性
  canTrigger: 1,
  //默认触发器能够被触发，在原版中蘑菇类白天睡眠时不触发
  Stature: 0,
  Sleep: 0,
  Tooltip: "",
  SunNum: 0,
  CanSpawnSun: false,
  //是否为阳光类植物
  Tools: false,
  //是否为道具
  Immediately: false,
  //是否为即刻触发的植物
  FlyingPlant: false,
  //是否为飞行植物
  UndergroundPlant: false,
  //是否为地底植物（如土豆雷，地刺）
  PicArr: ["", "", BlankPNG],

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`;
    let self = this;

    if ((oGd.$GdType[R][C] === 1 || self.FlyingPlant || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0) && oGd.$GdType[R][C] !== 0) {
      //如果是草地地形或无视地形的飞行植物，荒地强制禁止种植
      return !(C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord] && self.PKind != 5 || data[self.PKind]) && (!data[1] || data[1].canShovel); //     在可种植列以内        非坑洞                       非锁定格子且不是瓷砖                         没有当前种类植物    其他植物要种植时需保证没有普通植物或者普通植物可铲除
    } else {
      //如果是非草地地形则检测有无空容器，如果是地底植物则种不了水路
      return !(self.UndergroundPlant && oGd.$GdType[R][C] === 2) && data[0] && !data[self.PKind];
    }
  },

  GetDX: self => -Math.floor(self.width * 0.5),
  GetDY: (R, C, arg) => arg[0] ? -21 : -15,
  //返回植物底座相对格子中点的偏移量，默认可根据是否种在花盆容器中调整
  GetDBottom: self => self.height,
  //返回植物底部相对于其pt的偏移量。默认是植物的身高，若碰到咖啡豆、花椒等悬空植物需要作专门调整！
  getShadow: self => `left:${self.width * 0.5 - 48}px;top:${self.height - 22}px;`,

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg, true) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, self.PicArr[self.NormalGif], null, ele); //绘制植物本体

    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, Object.assign({
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    }, self.ImgStyle));
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册
    //只有在游戏关卡开始后privatebirth才会执行

    let callback = _ => {
      const PrivateBirth = self.PrivateBirth;

      if ($P[id]) {
        PrivateBirth && PrivateBirth.call(self, self);
        removeEventListenerRecord('jng-event-startgame', callback);
      }
    };

    oS.isStartGame === 1 ? callback() : addEventListenerRecord('jng-event-startgame', callback);
    return self;
  },

  BirthStyle: (self, id, ele, style) => EditEle(ele, {
    id,
    'data-jng-constructor': self.EName
  }, style, EDPZ),

  getHurt(zombie, AKind, Attack) {
    const o = this,
          id = o.id,
          ele = $(id).childNodes[1];
    o.SetBrightness(o, ele, 1);
    oSym.addTask(10, _ => $P[id] && o.SetBrightness(o, ele, 0));
    !(AKind % 3) ? (o.HP -= Attack) < 1 && o.Die() : o.Die(); //针对不同的僵尸承受不同的攻击
  },

  NormalAttack: function () {},
  //返回在本行的触发器
  //默认是本行LX-900，方向为右
  //某些植物（如裂荚射手）可能有多个触发器，因此要在外面再嵌套一个数组
  getTriggerRange: (R, LX, RX) => [[LX, oS.W, 0]],
  //传递触发器行上下限,返回格式是[小数行，大数行]
  getTriggerR: selfR => [selfR, selfR],

  InitTrigger(self, id, R, C, AttackedLX, AttackedRX) {
    //初始化植物自身触发器并注册全局触发器
    let trigger = {};
    let [minR, maxR] = self.getTriggerR(R);

    for (; minR <= maxR; minR++) {
      //逐行注册全局触发器
      let _trigger = trigger[minR] = self.getTriggerRange(minR, AttackedLX, AttackedRX);

      oT.add(minR, _trigger, id);
    }

    self.oTrigger = trigger; //备份在植物自身的触发器副本，用于非外部触发的植物自主追踪
  },

  TriggerCheck(zombie, direction) {
    //用于检测和触发自身植物的攻击
    const self = this;

    if (self.AttackCheck2(zombie) && oS.isStartGame === 1) {
      //检测僵尸海拔
      self.canTrigger = 0; //将植物的触发器关闭，使得外部僵尸在攻击阶段无法重复触发

      self.CheckLoop(zombie.id, direction);
    }
  },

  CheckLoop(zid, direction) {
    //开始攻击，并且循环检查攻击条件1,2
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid); //触发植物攻击，并传入触发者僵尸之id

      oSym.addTask(140, _ => $P[pid] && self.AttackCheck1(zid, direction));
    }
  },

  //传递之前触发攻击的僵尸之id，再次检测是否符合触发攻击条件
  //若符合，则触发下一次攻击；若不符合，则解锁植物触发器，继续接受外部僵尸触发攻击
  AttackCheck1(zid) {
    let self = this;
    let oTrigger = self.oTrigger;
    let zombie = $Z[zid]; //储存僵尸所在行的触发器们
    //为了防止僵尸换行，下头还要再检测一遍目前僵尸所在行有没有注册该植物的触发器

    let availableTriggers;

    if (zombie && zombie.PZ && (availableTriggers = oTrigger[zombie.R])) {
      let ZX = zombie.ZX; //僵尸左攻击点
      //搜索植物在本行注册的所有触发器，只要有触发器被触发，则进行下一次攻击

      for (let trigger of availableTriggers) {
        if (trigger[0] <= ZX && trigger[1] >= ZX && self.AttackCheck2(zombie)) {
          self.CheckLoop(zid, trigger[2]);
          return;
        }
      }
    }

    self.canTrigger = 1;
  },

  AttackCheck2: zombie => zombie.Altitude < 3 && zombie.Altitude > 0,
  //攻击先决条件检测：检测僵尸海拔
  PrivateDie: function (a) {},
  Die: function (a) {
    var b = this,
        c = b.id;
    b.oTrigger && oT.delP(b);
    b.HP = 0;
    delete $P[c];
    delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
    ClearChild($(c));
    b.PrivateDie(b);
  },
  RemoveRandomPic: function () {
    let self = this;

    for (let index in self.PicArr) {
      try {
        self.PicArr[index] = null;
      } catch {}

      ;
    }
  },

  BoomGIF(left, top) {
    PlayAudio("cherrybomb");
    let self = this;
    oEffects.ImgSpriter({
      ele: NewEle(self.id + '_Boom', "div", `position:absolute;overflow:hidden;z-index:${self.zIndex + 2};width:216px;height:164px;left:${left}px;top:${top}px;background:url(images/Plants/CherryBomb/Boom.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -216,
      frameNum: 25
    });
  },

  SetBrightness: function (zhizhen, dom, k) {
    dom && (k ? dom.style['filter'] = 'brightness(110%)' : dom.style['filter'] = 'brightness(100%)');
  }
}),
    oLawnCleaner = InheritO(CPlants, {
  EName: "oLawnCleaner",
  CName: $__language_Array__["e62c54032268681c517a5edd6264f0da"],
  width: 71,
  height: 57,
  canShovel: false,
  beAttackedPointL: 0,
  beAttackedPointR: 60,
  PicArr: ["images/interface/LawnCleaner.png", "images/Card/LawnCleaner.webp", 'images/Plants/SporeShroom/Effect.webp'],
  AudioArr: ["lawnmower"],
  NormalGif: 0,
  CardGif: 1,
  canEat: 0,
  Stature: 1,
  HP: Infinity,

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, self.PicArr[self.NormalGif], null, ele); //绘制植物本体

    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    });
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册

    self.PrivateBirth(self);
    return self;
  },

  PlayBirthEffect(obj) {
    const ele = NewEle(obj.id + "Effect", "div", `position:absolute;z-index:${obj.zIndex - 1};width:631px;height:481px;left:${obj.pixelLeft - 270}px;top:${obj.pixelTop - 260}px;transform:scale(0.5,0.5);background:url(${obj.PicArr[2]}) no-repeat;`, 0, EDPZ);
    oSym.addTask(20, ClearChild, [ele]);
  },

  PrivateBirth(obj) {
    obj.PlayBirthEffect(obj);
  },

  getShadow: function (a) {
    return "left:" + (a.width * 0.5 - 38) + "px;top:" + (a.height - 22) + "px";
  },
  getTriggerRange: function (a, b, c) {
    return [[b, c, 0]];
  },
  TriggerCheck: function (b, a) {
    b.beAttacked && b.Altitude > 0 && (this.canTrigger = 0, this.NormalAttack(this), localStorage.JNG_DEV !== 'true' && CSpeed(1));
  },
  NormalAttack: function (a) {
    PlayAudio(a.AudioArr[0]);

    (function fun(b, c, k, j, e, g) {
      var d = oZ.getArZ(k, j, e),
          f = d.length,
          h;

      if (!$P[b.id]) {
        return;
      }

      while (f--) {
        (h = d[f]).getCrushed(b) && h.CrushDie();
      }

      let C = GetC(b.AttackedRX);

      if (k > c) {
        b.Die();
      } else if (oGd.$GdType[b.R][C] === 2) {
        let src = RandomPic(WaterSplashImg);
        oEffects.Animate(g, {
          transform: "rotate(45deg)",
          left: b.pixelLeft + 100 + "px"
        }, 0.1 / oSym.NowSpeed);
        oSym.addTask(10, _ => {
          let ele = NewImg(0, src, `width:160px;height:195px;top:${GetY(b.R) - 170}px;left:${b.AttackedRX - 50}px;`, EDPZ);
          oSym.addTask(113, _ => {
            ClearChild(ele);
          });
          ele.addEventListener("unload", _ => {
            URL.revokeObjectURL(src);
            delete oImage["garbage"][src];
          }, {
            once: true
          });
          b.Die();
        });
      } else {
        b.pixelRight += 10;
        b.AttackedLX = k += 10;
        b.AttackedRX = j += 10;
        g.style.left = (b.pixelLeft += 10) + "px";
        oSym.addTask(1, fun, [b, c, k, j, e, g]);
      }
    })(a, oS.W, a.AttackedLX, a.AttackedRX, a.R, $(a.id));
  }
}),
    oBrains = InheritO(CPlants, {
  EName: "oBrains",
  CName: $__language_Array__["8ae8c152f44e6a6d8156c29c222e5b20"],
  width: 32,
  height: 31,
  beAttackedPointL: 0,
  beAttackedPointR: 32,
  NormalGif: 0,
  HP: 1,
  InitTrigger: _ => {},
  GetDX: _ => -40,
  PrivateDie: _ => oSym.Timer && toOver(1)
}),
    //庭院植物从以下开始
oPeashooter = InheritO(CPlants, {
  EName: "oPeashooter",
  CName: $__language_Array__["d1b3b4d50e7eac3f1e5d6048313dc25f"],
  width: 75,
  height: 75,
  beAttackedPointR: 51,
  SunNum: 100,
  AttackGif: 5,
  BulletGif: 3,
  AudioArr: ["splat1", "splat2", "splat3", "plastichit", "shieldhit", "shieldhit2", 'throw', 'throw2'],
  PicArr: function () {
    var a = "images/Plants/Peashooter/";
    var b = "images/Plants/";
    return ["images/Card/Peashooter.webp", a + "0.webp", a + "Peashooter.webp", b + "PB00.webp", b + "PeaBulletHit0.webp", a + "PeashooterAttack.webp"];
  }(),
  Tooltip: $__language_Array__["42fbfe4a2f3b637997492484b640c173"],
  Story: $__language_Array__["f715fdd765128b7586139822a1a34279"],

  NormalAttack() {
    let self = this,
        id = self.id,
        dom = $(id);
    dom.childNodes[1].src = self.PicArr[self.AttackGif];
    oSym.addTask(100, _ => {
      $(id) && (dom.childNodes[1].src = self.PicArr[self.NormalGif]);
    });
    oSym.addTask(60, _ => {
      PlayAudio(['throw', 'throw2'][Math.round(Math.random() * 1)]);
      CustomBullet(oPeaBullet, [self.PicArr[self.BulletGif]], self.AttackedLX, self.pixelTop + 15, self.R);
    });
  }

}),
    oSunFlower = InheritO(CPlants, {
  EName: "oSunFlower",
  CName: $__language_Array__["f7ac9119e352c5c64091aab0af7a9fe7"],
  width: 73,
  height: 74,
  beAttackedPointR: 40,
  SunNum: 50,
  CanSpawnSun: true,
  ProduceGif: 3,
  PicArr: function () {
    let a = "images/Plants/SunFlower/";
    return ["images/Card/SunFlower.webp", a + "0.webp", a + "idle.webp", a + "produce.webp"];
  }(),
  Tooltip: $__language_Array__["85d65121427dd969c901e38f4429bf6d"],
  Story: $__language_Array__["cffb3ad2def5ae0d5afdb8ad02123070"],
  ChangePosition: function (c, a) {
    let self = this;
    const ele = c.childNodes[1];
    ele.src = self.PicArr[a ? self.ProduceGif : self.NormalGif];
  },
  PrivateBirth: function (self) {
    if (oS.ProduceSun) {
      let id = self.id,
          ele = $(id);
      oSym.addTask(500, function fun(X, Y) {
        //出生5秒之后初次生产阳光，之后每34秒生产一次
        $P[id] && ( //植物还存在
        self.ChangePosition(ele, 1), //播放动画
        oSym.addTask(75, _ => {
          if ($P[id]) {
            AppearSun(X - 30, Y - 50, 50, 0, 50 - Math.random() * 10); //生产阳光

            oSym.addTask(100, _ => $P[id] && self.ChangePosition(ele, 0)); //切回动画

            oSym.addTask(3425, fun, [X, Y]); //35s产一次
          }
        }));
      }, [GetX(self.C) + 75, GetY(self.R)]);
    }

    ;
  },
  InitTrigger: _ => {}
}),
    oPotatoMine = InheritO(CPlants, {
  EName: "oPotatoMine",
  CName: $__language_Array__["90b78375a7da6087fb4e1af8f933e4b3"],
  width: 143,
  height: 200,
  beAttackedPointL: 40,
  beAttackedPointR: 100,
  SunNum: 25,
  Stature: -1,
  HP: 2400,
  UndergroundPlant: true,
  firstCoolTime: 20,
  coolTime: 30,
  AlmanacGif: 3,
  PicArr: function () {
    var a = "images/Plants/PotatoMine/";
    return ["images/Card/PotatoMine.webp", a + "0.gif", a + "PotatoMineNotReady.png", a + "PotatoMine.gif", a + "Boom.png", a + "PotatoMineOut.gif"];
  }(),
  Tooltip: $__language_Array__["e5534a553c736ae39f0819c8c5917d3c"],
  Story: $__language_Array__["8f90e0eadc55b5abe8b482caade98a5a"],
  Status: 0,
  AudioArr: ["cherrybomb"],
  getShadow: self => `left:27px;top:170px;`,
  canTrigger: 0,
  getHurt2: function (d, b, a) {
    var c = this;
    b > 2 ? (c.HP -= a) < 1 && c.Die() : c.NormalAttack(c.pixelLeft, c.pixelRight, c.R);
  },

  PrivateBirth(self) {
    let id = self.id;
    let ele = $(id).childNodes[1];
    let arr = self.PicArr;
    oSym.addTask(1500, _ => {
      if ($P[id]) {
        ele.src = arr[5];
        self.Status = 1;
        self.canTrigger = 1;
        self.getHurt = self.getHurt2;
        self.canEat = 0;
        oSym.addTask(100, _ => $P[id] && (ele.src = arr[3]));
      }
    });
  },

  getTriggerRange: function (a, b, c) {
    return [[b, c - 20, 0]];
  },

  TriggerCheck(zombie) {
    let self = this;
    /* 土豆地雷触发的条件：
        1.僵尸处于可攻击状态，所处海拔正常，且不处于浮空状态
        2.土豆地雷没有被南瓜套包裹
    */

    zombie.beAttacked && zombie.Altitude < 2 && !zombie.isFloating && !oGd.$[self.R + "_" + self.C + "_2"] && self.NormalAttack(self.pixelLeft, self.pixelRight, self.R);
  },

  NormalAttack: function (lx, rx, r) {
    PlayAudio("cherrybomb");
    let self = this,
        id = self.id,
        zombies = oZ.getArZ(lx, rx, r);
    zombies.forEach(zombie => zombie.Altitude < 2 && zombie.getExplosion());
    self.Die();
    oEffects.ScreenShake();
    oEffects.ImgSpriter({
      ele: NewEle(id + '_Boom', "div", `position:absolute;overflow:hidden;z-index:${self.zIndex + 2};width:213px;height:210px;left:${self.pixelLeft - 50}px;top:${self.pixelTop - 10}px;background:url(images/Plants/PotatoMine/Boom.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -213,
      frameNum: 15,
      interval: 8
    });
  }
}),
    oPotatoMine2 = InheritO(oPotatoMine, {
  EName: "oPotatoMine2",
  CName: $__language_Array__["cb3ada09167806a53e4c41dde54b9c8a"],
  coolTime: 5,
  Tooltip: $__language_Array__["c9f97a7b0b5201d33e8222378968e971"]
}),
    oWallNut = InheritO(CPlants, {
  EName: "oWallNut",
  CName: $__language_Array__["d2d3101842f90d60aef0f659811e0527"],
  width: 65,
  height: 73,
  beAttackedPointR: 45,
  SunNum: 50,
  HP: 4000,
  coolTime: 20,
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/WallNut.webp", a + "0.gif", a + "WallNut.webp", a + "Wallnut_cracked1.webp", a + "Wallnut_cracked2.webp"];
  }(),
  Tooltip: $__language_Array__["e745c18d56cb526d4b45413939b9faaa"],
  Story: $__language_Array__["dbb3827f27f7eafeedf2751c76fa4d59"],
  CanGrow: function (c, b, f) {
    var a = b + "_" + f,
        d = c[1],
        e = oS.ArP;
    return e ? oGd.$GdType[b][f] == 1 ? f > 0 && f < e.ArC[1] && !(oGd.$Crater[a] || oGd.$LockingGrid[a] || d) : c[0] && !d : d && d.HP <= 2667 && d.EName == "oWallNut" ? 1 : oGd.$GdType[b][f] == 1 || oGd.$GdType[b][f] === 2 && oGd.$WaterDepth[b][f] === 0 ? !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$LockingGrid[a] || d) : c[0] && !d;
  },
  InitTrigger: function () {},
  HurtStatus: 0,
  getHurt: function (e, b, a) {
    let c = this,
        d = $(c.id).childNodes[1];
    c.SetBrightness(c, d, 1);
    oSym.addTask(10, () => {
      $P[c.id] && c.SetBrightness(c, d, 0);
    });
    !(b % 3) ? (c.HP -= a) < 1 ? c.Die() : c.HP < 1334 ? c.HurtStatus < 2 && (c.HurtStatus = 2, d.src = "images/Plants/WallNut/Wallnut_cracked2.webp") : c.HP < 2667 && c.HurtStatus < 1 && (c.HurtStatus = 1, d.src = "images/Plants/WallNut/Wallnut_cracked1.webp") : c.Die(1);
  }
}),
    //森林植物从以下开始
oStoneFlower = InheritO(CPlants, {
  EName: "oStoneFlower",
  CName: $__language_Array__["8600a5412831f4beb0804598453284c8"],
  width: 155,
  height: 130,
  beAttackedPointL: 63,
  beAttackedPointR: 75,
  SunNum: 100,
  HP: 5500,
  canEat: 1,
  coolTime: 30,
  AudioArr: ["Artichoke_Attack"],
  PicArr: function () {
    var a = "images/Plants/StoneFlower/";
    return ["images/Card/StoneFlower.webp", a + "0.gif", a + "Spikeweed.gif", a + "Attack.gif"];
  }(),
  Attack: 12,
  Tooltip: $__language_Array__["9f9727b266484595349d5e8127eb88ad"],
  Story: $__language_Array__["7954e0333dc8ee20d2f0c084f8efce25"],
  PrivateBirth: function (o) {
    o.ArZ = {};
  },
  NormalAttack: function (zid) {
    PlayAudio("Artichoke_Attack");
    let zombie = $Z[zid],
        o = this,
        pid = o.id;
    !o.isAttacking && ($(pid).childNodes[1].src = o.PicArr[3], o.isAttacking = 1, oSym.addTask(50, function fun() {
      if ($P[pid]) {
        o.ArZ.length < 1 ? ($(pid).childNodes[1].src = o.PicArr[2], o.isAttacking = 0) : oSym.addTask(50, fun);
      }
    }));
    zombie.getHit2(zombie, o.Attack, 0);
  },
  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft - 80, this.pixelRight + 80, 0]];
  },
  TriggerCheck: function (i, h) {
    var c = i.id,
        g = this.ArZ,
        a,
        b,
        e,
        f;
    i.PZ && !g[c] && (a = i.AttackedLX, b = i.AttackedRX, e = this.AttackedLX, f = this.AttackedRX, a <= f && a >= e || b <= f && b >= e || a <= e && b >= f) && this.AttackCheck2(i) && (g[c] = 1, //把当前僵尸标注为已检查过
    this.NormalAttack(c), oSym.addTask(100, function (d, j) {
      var k = $P[d];
      k && delete k.ArZ[j];
    }, [this.id, c]));
  },
  AttackCheck2: function (a) {
    //触发特殊条件检查器
    return a.Altitude == 1 && a.beAttacked;
  }
}),
    oRadish = InheritO(CPlants, {
  EName: "oRadish",
  CName: $__language_Array__["768ea42117ea0542c36c7be189f84d73"],
  width: 155,
  height: 130,
  beAttackedPointL: 63,
  beAttackedPointR: 75,
  SunNum: 200,
  coolTime: 20,
  AudioArr: ["Radish"],
  AttackGif: 3,
  BulletGif: 4,
  FlyingPlant: true,
  PicArr: function () {
    const a = "images/Plants/Radish/";
    return ["images/Card/Radish.webp", a + "0.webp", a + "Radish.webp", a + "Attack.webp", a + "Bullet.png"];
  }(),
  Tooltip: $__language_Array__["f2e968d9b7bd31c70290d3883070c10b"],
  Story: $__language_Array__["53d33adb28e98819175562b60d41e88f"],
  getTriggerRange: function (a, b, c) {
    return [[b, Math.min(c + 330, oS.W), 0]];
  },

  NormalAttack() {
    let self = this,
        id = self.id,
        dom = $(id);
    dom.childNodes[1].src = self.PicArr[self.AttackGif];
    oSym.addTask(87.5, _ => {
      $(id) && (dom.childNodes[1].src = self.PicArr[self.NormalGif]);
    });
    oSym.addTask(62.5, _ => {
      PlayAudio("Radish");
      CustomBullet(oRadishBullet, [self.PicArr[self.BulletGif]], self.AttackedLX, self.pixelTop + 30, self.R);
    });
  }

}),
    oSnowPea = InheritO(oPeashooter, {
  EName: "oSnowPea",
  CName: $__language_Array__["6788e7cf078b73df8f850e8207890a13"],
  SunNum: 175,
  AttackGif: 5,
  Attack: 40,
  //伪数值，总攻击力
  PicArr: function () {
    var a = "images/Plants/SnowPea/";
    var b = "images/Plants/";
    return ["images/Card/SnowPea.webp", a + "0.webp", a + "SnowPea.webp", b + "PB-10.webp", b + "PeaBulletHit1.webp", a + "PeashooterAttack.webp"];
  }(),
  AudioArr: ["frozen", "splat1", "splat2", "splat3", "shieldhit", "shieldhit2", "plastichit", 'throw', 'throw2'],
  Tooltip: $__language_Array__["5226551316a566a3319d222d47bfdfad"],
  Story: $__language_Array__["36bea0166ab38167051caae3c52a5066"],
  NormalAttack: function () {
    let self = this,
        id = self.id,
        dom = $(id);
    dom.childNodes[1].src = self.PicArr[self.AttackGif];
    oSym.addTask(100, function () {
      $(id) && (dom.childNodes[1].src = self.PicArr[self.NormalGif]);
    });
    oSym.addTask(60, function () {
      PlayAudio(['throw', 'throw2'][Math.round(Math.random() * 1)]);
      CustomBullet(oSnowPeaBullet, [self.PicArr[self.BulletGif]], self.AttackedLX, self.pixelTop + 15, self.R);
    });
  }
}),
    oRepeater = InheritO(oPeashooter, {
  EName: "oRepeater",
  CName: $__language_Array__["da0d6cdb41401d27fc95010de9578b34"],
  width: 73,
  height: 71,
  beAttackedPointR: 53,
  SunNum: 175,
  firstCoolTime: 7.5,
  Attack: 40,
  //总攻击力
  PicArr: function () {
    var a = "images/Plants/Repeater/";
    var b = "images/Plants/";
    return ["images/Card/Repeater.webp", a + "0.webp", a + "Repeater.webp", b + "PB00.webp", b + "PeaBulletHit0.webp", a + "RepeaterAttack.webp"];
  }(),
  Tooltip: $__language_Array__["988f503485b1dd32bf92f19a40df8523"],
  Story: $__language_Array__["a66d5d0f06998d681bcd577cb6c3dc9d"],
  NormalAttack1: oPeashooter.prototype.NormalAttack,
  NormalAttack: function (a) {
    this.NormalAttack1();
    oSym.addTask(75, function (c) {
      let b = $P[c];
      b && CustomBullet(oPeaBullet, [b.PicArr[b.BulletGif]], b.AttackedLX, b.pixelTop + 15, b.R);
    }, [this.id]);
  }
}),
    oCherryBomb = InheritO(CPlants, {
  EName: "oCherryBomb",
  CName: $__language_Array__["9c0c072455b32cf1014dfce0b3209749"],
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  SunNum: 100,
  coolTime: 30,
  Immediately: true,
  HP: Infinity,
  PicArr: function () {
    const a = "images/Plants/CherryBomb/";
    return ["images/Card/CherryBomb.webp", a + "0.gif", a + "CherryBomb.gif", a + "Boom.png"];
  }(),
  AudioArr: ["cherrybomb"],
  Tooltip: $__language_Array__["78a6733d7d15a2ca945c9e6d19367518"],
  Story: $__language_Array__["7874b6251734188280e9ae2b629bdf70"],
  InitTrigger: _ => {},
  getHurt: _ => {},

  Die(ticket) {
    let self = this;
    let id = self.id;

    if (['JNG_TICKET_SuperPower', 'JNG_TICKET_ShovelPlant'].includes(ticket)) {
      self.oTrigger && oT.delP(self);
      self.HP = 0;
      delete $P[id];
      delete oGd.$[self.R + "_" + self.C + "_" + self.PKind];
      ClearChild($(id));
    }
  },

  DisappearDie: _ => {},

  PrivateBirth(self) {
    oSym.addTask(119, id => {
      if ($P[id]) {
        let ele = $(id),
            R = self.R,
            floorR = R > 1 ? R - 1 : 1,
            ceilingR = R < oS.R ? R + 1 : oS.R,
            leftBorder = self.pixelLeft - 80,
            rightBorder = self.pixelRight + 80;

        do {
          oZ.getArZ(leftBorder, rightBorder, floorR).forEach(zombie => zombie.getExplosion());
        } while (floorR++ < ceilingR);

        self.Die('JNG_TICKET_SuperPower');
        self.BoomGIF(self.pixelLeft, self.pixelTop);
        oEffects.ScreenShake();
      }
    }, [self.id]);
  }

}),
    oCherryBomb2 = InheritO(oCherryBomb, {
  EName: "oCherryBomb2",
  CName: $__language_Array__["8bfca4490c95e22d90220d294f044029"],
  coolTime: 10,
  Tooltip: $__language_Array__["7d826824ccd184f6a2a2ba3d29445b82"]
}),
    oTallNut = InheritO(oWallNut, {
  EName: "oTallNut",
  CName: $__language_Array__["92450412f3a53b32e1e62fc67db4c12f"],
  width: 83,
  height: 119,
  beAttackedPointR: 63,
  SunNum: 125,
  HP: 12000,
  coolTime: 25,
  PicArr: function () {
    var a = "images/Plants/TallNut/";
    return ["images/Card/TallNut.webp", a + "0.gif", a + "TallNut.gif", a + "TallnutCracked1.gif", a + "TallnutCracked2.gif"];
  }(),
  Tooltip: $__language_Array__["4fa673f4f48306fac9cb5e7742c238d7"],
  Story: $__language_Array__["69bb04fa7223a2b52acc178b7e6a86c8"],
  CanGrow: function (c, b, f) {
    var a = b + "_" + f,
        d = c[1],
        e = oS.ArP;
    return e ? oGd.$GdType[b][f] == 1 ? f > 0 && f < e.ArC[1] && !(oGd.$Crater[a] || oGd.$LockingGrid[a] || d) : c[0] && !d : d && d.HP <= 8000 && d.EName == "oTallNut" ? 1 : oGd.$GdType[b][f] == 1 || oGd.$GdType[b][f] === 2 && oGd.$WaterDepth[b][f] === 0 ? !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$LockingGrid[a] || d) : c[0] && !d;
  },
  Stature: 1,
  getHurt: function (e, b, a) {
    var c = this,
        d = $(c.id).childNodes[1];
    c.SetBrightness(c, d, 1);
    oSym.addTask(10, () => {
      $P[c.id] && c.SetBrightness(c, d, 0);
    });
    !(b % 3) ? (c.HP -= a) < 1 ? c.Die() : c.HP < 4000 ? c.HurtStatus < 2 && (c.HurtStatus = 2, d.src = "images/Plants/TallNut/TallnutCracked2.gif") : c.HP < 8000 && c.HurtStatus < 1 && (c.HurtStatus = 1, d.src = "images/Plants/TallNut/TallnutCracked1.gif") : c.Die(1);
  }
}),
    //沼泽植物从以下开始
oSunShroom = InheritO(CPlants, {
  EName: "oSunShroom",
  CName: $__language_Array__["645fbcfb942862b717c502065c01e02d"],
  width: 77,
  height: 94,
  beAttackedPointL: 8,
  beAttackedPointR: 20,
  SunNum: 25,
  Stature: -1,
  Status: 0,
  CanSpawnSun: true,
  AlmanacGif: 3,
  AudioArr: ['plantgrow'],
  PicArr: function () {
    var a = "images/Plants/SunShroom/";
    return ["images/Card/SunShroom.webp", a + "0.webp", a + "SunShroom2.webp", a + "SunShroom.webp", a + "SunShroomGrow.webp", a + "ProduceSun.webp"];
  }(),
  Tooltip: $__language_Array__["5504ba167263f1dc8b85cdda1f2bd3cb"],
  Story: $__language_Array__["d9993fdd9804eca521e21a1bac6895f0"],
  InitTrigger: function () {},
  BirthStyle: function (c, d, b, a) {
    let self = this;
    b.childNodes[1].src = this.PicArr[2];
    EditEle(b, {
      id: d,
      'data-jng-constructor': self.EName
    }, a, EDPZ);

    function fun(_this, c, d, b, a) {
      oSym.addTask(600, (h, g, f) => {
        let e = $P[h];
        e && e.ProduceSun(e, g, f);
      }, [d, GetX(c.C) - 40, GetY(c.R) - 60]);
      oSym.addTask(12000, f => {
        PlayAudio('plantgrow');
        let e = $P[f];
        e && (e.Sleep = 0, $(f).childNodes[1].src = e.PicArr[4], e.Status = 1);
        oSym.addTask(233, f => {
          let e = $P[f];
          e && ($(f).childNodes[1].src = e.PicArr[3]);
        }, [d]);
      }, [d]);
    }

    if (oS.isStartGame === 0) {
      //修复阳光菇在LoadAccess产阳光bug
      addEventListenerRecord("jng-event-startgame", function sd() {
        fun(self, c, d, b, a);
        removeEventListenerRecord("jng-event-startgame", sd);
      });
    } else {
      fun(self, c, d, b, a);
    }
  },
  ProduceSun: function (a, c, b) {
    a && a.Status && a.ChangePosition(a.id, 1);
    oSym.addTask(80, () => {
      $P[a.id] && AppearSun(c + 65, b, !a.Status ? 25 : 50, 0, 30 - Math.random() * 10, 10);
    });
    oSym.addTask(250, function () {
      a && a.Status && a.ChangePosition(a.id, 0);
    });
    oSym.addTask(2100, function (g, f, e) {
      var d = $P[g];
      d && d.ProduceSun(d, f, e);
    }, [a.id, c, b]);
  },
  ChangePosition: function (id, a) {
    if ($P[id]) {
      let obj = $P[id],
          dom = $(id);
      obj.beAttackedPointR = 40;
      dom.childNodes && (a ? dom.childNodes[1].src = obj.PicArr[5] : dom.childNodes[1].src = obj.PicArr[3]);
    }
  }
}),
    oPuffShroom = InheritO(CPlants, {
  EName: "oPuffShroom",
  CName: $__language_Array__["d9a1489086ec7541226dfa802aa5e231"],
  width: 59,
  height: 61,
  beAttackedPointL: 15,
  beAttackedPointR: 44,
  Attack: 20,
  Stature: -1,
  PicArr: function () {
    var a = "images/Plants/PuffShroom/";
    var b = "images/Plants/";
    return ["images/Card/PuffShroom.webp", a + "0.gif", a + "PuffShroom.gif", a + "PuffShroomAttack.gif", b + "ShroomBullet.png", b + "ShroomBulletHit.gif"];
  }(),
  AudioArr: ["puff"],
  Tooltip: $__language_Array__["e77edb8526e6623fc2f8156b62da1291"],
  Story: $__language_Array__["52a16adb21e5b9edfc14d6bfc9a8f5e8"],
  getTriggerRange: function (a, b, c) {
    return [[b, Math.min(c + 250, oS.W), 0]];
  },
  PrivateBirth: function (a) {
    a.BulletEle = NewImg(0, "images/Plants/ShroomBullet.png", "left:" + (a.AttackedLX - 46) + "px;top:" + (a.pixelTop + 35) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
  },
  PrivateDie: function (a) {
    a.BulletEle = null;
  },
  NormalAttack: function () {
    var b = this,
        c = "PSB" + Math.random(),
        a = b.AttackedLX,
        w = b.id;
    EditEle(b.BulletEle.cloneNode(false), {
      id: c
    }, 0, EDPZ);
    PlayAudio("puff");
    $(w).childNodes[1].src = b.PicArr[3];
    oSym.addTask(60, function (e) {
      var d = $(e);
      d && (d.childNodes[1].src = b.PicArr[b.NormalGif]);
    }, [w]);
    oSym.addTask(15, function (e) {
      var d = $(e);
      d && SetVisible(d);
    }, [c]);
    oSym.addTask(1, function fun(j, d, e, f, g, v) {
      var i = GetC(e),
          h = oZ.getZ0(e, f);

      if (v[f + "_" + i]) {
        ClearChild(d);
      } else {
        h && h.Altitude == 1 ? (h.getPea(h, b.Attack, 0), SetStyle(d, {
          left: g + 38 + "px"
        }).src = "images/Plants/ShroomBulletHit.gif", oSym.addTask(10, ClearChild, [d])) : (e += 5) < oS.W ? (d.style.left = (g += 5) + "px", oSym.addTask(1, fun, [j, d, e, f, g, v])) : ClearChild(d);
      }
    }, [c, $(c), a, b.R, a - 46, oGd.$Obstacle]);
  }
}),
    oScaredyShroom = InheritO(CPlants, {
  EName: "oScaredyShroom",
  CName: $__language_Array__["3e7789b2d0491928c8fb8afd42bf2a15"],
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  SunNum: 75,
  Cry: 0,
  ArZ: [],
  Attacking: 0,
  Attack: 30,
  AudioArr: ["puff"],
  PicArr: function () {
    var a = "images/Plants/ScaredyShroom/",
        b = "images/Plants/";
    return ["images/Card/ScaredyShroom.webp", a + "0.webp", a + "ScaredyShroom.webp", a + "ScaredyShroomAttack.webp", a + "ScaredyShroomCry.webp", b + "ShroomBullet.png", b + "ShroomBulletHit.gif"];
  }(),
  Tooltip: $__language_Array__["b8d9cff9fe193e98f88d879c404301cf"],
  Story: $__language_Array__["e3f388a18b754fab4f9c4169cf00aa1a"],
  getTriggerR: function (c) {
    var b = this.MinR = c > 2 ? c - 1 : 1,
        a = this.MaxR = c < oS.R ? Number(c) + 1 : c;
    return [b, a];
  },
  TriggerCheck: function (zombie, direction) {
    var self = this,
        id = self.id;
    let dom = $(id);
    let pic = dom.childNodes[1]; //zombie.PZ && !zombie.isPuppet && Math.abs(zombie.ZX - self.MX) < 121 && zombie.beAttacked ? (self.ArZ.push(zombie.id), !self.Cry && (self.Cry = 1, $(id).childNodes[1].src = "images/Plants/ScaredyShroom/ScaredyShroomCry.webp", self.CryCheck(id))) : (zombie.R == self.R && !self.Cry && !self.Attacking && zombie.Altitude > 0 && zombie.Altitude < 3 && self.NormalAttack())

    if (zombie.PZ && !zombie.isPuppet && Math.abs(zombie.ZX - self.MX) < 121 && zombie.beAttacked) {
      self.ArZ.push(zombie.id);

      if (!self.Cry) {
        self.Cry = 1;
        pic.src = self.PicArr[4];
        self.CryCheck(id);
      }
    } else {
      if (zombie.R == self.R && !self.Cry && !self.Attacking && zombie.Altitude > 0 && zombie.Altitude < 3) {
        self.NormalAttack();
      }
    }

    if (self.Cry == 1 && pic.src != self.PicArr[4]) {
      pic.src = self.PicArr[4];
    } else if (!self.Attacking && self.Cry == 0 && pic.src != self.PicArr[2]) {
      pic.src = self.PicArr[2];
    }
  },
  PrivateBirth: function (c) {
    var b = c.AttackedLX,
        a = b - 40;
    c.BulletClass = NewO({
      X: b,
      R: c.R,
      pixelLeft: a,
      F: oGd.MB2
    });
    c.BulletEle = NewImg(0, "images/Plants/ShroomBullet.png", "left:" + a + "px;top:" + (c.pixelTop + 110) + "px;visibility:hidden;z-index:" + (c.zIndex + 2));
    c.MX = b + 9;
  },
  PrivateDie: function (a) {
    a.BulletEle = null;
  },
  NormalAttack: function () {
    var c = this,
        a = c.id,
        d = "SSB" + Math.random(),
        b = c.AttackedLX;
    EditEle(c.BulletEle.cloneNode(false), {
      id: d
    }, 0, EDPZ);
    PlayAudio("puff");
    $(a).childNodes[1].src = c.PicArr[3];
    oSym.addTask(1, function fun(k, e, f, g, h, u) {
      var j = GetC(f),
          i = oZ.getZ0(f, g);

      if (u[g + "_" + j]) {
        ClearChild(e);
      } else {
        i && i.Altitude == 1 ? (i.getPea(i, c.Attack, 0), SetStyle(e, {
          left: h + 38 + "px"
        }).src = "images/Plants/ShroomBulletHit.gif", oSym.addTask(10, ClearChild, [e])) : (f += 5) < oS.W ? (e.style.left = (h += 5) + "px", oSym.addTask(1, fun, [k, e, f, g, h, u])) : ClearChild(e);
      }
    }, [d, $(d), b, c.R, b - 46, oGd.$Obstacle]);
    c.Attacking = 1;
    oSym.addTask(40, function (g) {
      var f = $(g);
      f && (f.childNodes[1].src = c.PicArr[c.NormalGif]);
    }, [a]);
    oSym.addTask(10, function (g, e) {
      var f = $(g);
      f && SetVisible(f);
      oSym.addTask(130, function (h) {
        var i = $P[h];
        i && (i.Attacking = 0);
      }, [e]);
    }, [d, a]);
  },
  CryCheck: function (id) {
    oSym.addTask(140, function (pid) {
      var self = $P[pid],
          len,
          ArZ,
          zombie;

      if (self) {
        len = (ArZ = self.ArZ).length;

        while (len--) {
          if (!(zombie = $Z[ArZ[len]]) || !zombie.PZ || Math.abs(zombie.ZX - self.MX) > 120) {
            ArZ.splice(len, 1);
          }
        }

        ArZ.length ? self.CryCheck(pid) : (self.Cry = 0, $(pid).childNodes[1].src = self.PicArr[2]);
      }
    }, [id]);
  }
}),
    oFumeShroom = InheritO(oRadish, {
  EName: "oFumeShroom",
  CName: $__language_Array__["aa6448bef6b81aad002c9ac426dfbdb1"],
  SunNum: 75,
  coolTime: 7.5,
  width: 216,
  height: 164,
  FlyingPlant: false,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  Attack: 20,
  PicArr: function () {
    var a = "images/Plants/FumeShroom/";
    return ["images/Card/FumeShroom.webp", a + "0.webp", a + "FumeShroom.webp", a + "FumeShroomAttack.webp", a + "FumeShroomBullet.webp"];
  }(),
  AudioArr: ["fume"],
  Tooltip: $__language_Array__["44a62cfd6bb8bc2f2f307ac5dfe36cc3"],
  Story: $__language_Array__["c71dee1b6e538e2a871aef7064797bcf"],
  PrivateBirth: function (b) {
    var a = b.id;
    NewEle(a + "_Bullet", "div", "position:absolute;visibility:hidden;width:406px;height:48px;left:" + b.AttackedRX + "px;top:" + (b.pixelTop + 90) + "px;background:url(images/Plants/FumeShroom/FumeShroomBullet.webp);z-index:" + (b.zIndex + 1), 0, EDPZ);
  },
  NormalAttack: function () {
    PlayAudio("fume");
    let self = this,
        id = self.id,
        ele = $(id).childNodes[1],
        bullet = $(id + "_Bullet"),
        PicArr = self.PicArr,
        NormalGif = PicArr[self.NormalGif],
        zombies = oZ.getArZ(self.AttackedLX, Math.min(self.AttackedRX + 330, oS.W), self.R);
    ele.src = PicArr[self.AttackGif];
    SetVisible(bullet);
    oEffects.ImgSpriter({
      ele: bullet,
      data: ["0 0", "0 -96px", "0 -240px", "0 -336px", "0 -432px", "0 -528px", "0 -624px", "0 -720px", "0 -816px", "0 -864px", "0 -912px"],
      frameNum: 11,
      interval: 9,
      callback: SetHidden
    });
    zombies.forEach(zombie => zombie.Altitude < 2 && zombie.getHit1(zombie, self.Attack));
    oSym.addTask(345, _ => $P[id] && !ele.src.includes(NormalGif) && (ele.src = NormalGif));
  }
}),
    oSporeShroom = InheritO(CPlants, {
  EName: "oSporeShroom",
  CName: $__language_Array__["e2ff22b02098fc48fa13a8f23d28e2b0"],
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  SunNum: 100,
  AudioArr: ["puff"],
  coolTime: 15,
  Attack: 20,
  PicArr: function () {
    var a = "images/Plants/SporeShroom/",
        b = "images/Plants/";
    return ["images/Card/SporeShroom.webp", a + "0.gif", a + "SporeShroom.gif", a + "SporeShroomAttack.gif", b + "ShroomBullet.png", b + "ShroomBulletHit.gif", a + "Effect.webp"];
  }(),
  Tooltip: $__language_Array__["4143fa13d2bf5df305b5184dd3981f08"],
  Story: $__language_Array__["1e23506eeaf5eafe707891748fd86ee0"],
  Panding: function (R, C) {
    let data = [];

    for (let f = 0, _$ = oGd.$; f <= PKindUpperLimit; f++) {
      data.push(_$[R + "_" + C + "_" + f]);
    }

    return oPuffShroom.prototype.CanGrow(data, R, C);
  },
  CreatePawns: function (a) {
    var R = a.R,
        C = a.C,
        R1,
        C1,
        MaxR = oS.R,
        MaxC = oS.C,
        LF = oGd.$LF,
        LFR,
        _$ = oGd.$;

    for (R1 = R - 1; R1 <= R + 1; R1++) {
      if (R1 > 0 && R1 <= MaxR) {
        LFR = LF[R];

        for (C1 = C - 1; C1 <= C + 1; C1++) {
          if (C1 > 0 && C1 <= MaxC && (LFR == 1 || LFR == 3)) {
            a.Panding(R1, C1) && CustomSpecial(oPuffShroom, R1, C1);
          }
        }
      }
    }
  },

  PrivateBirth(obj) {
    const id = obj.id;
    const effect = NewEle(obj.id + "Effect", "div", `position:absolute;z-index:${obj.zIndex + 1};width:631px;height:481px;left:${obj.pixelLeft - 200}px;top:${obj.pixelTop - 216}px;background:url(${obj.PicArr[6]}) no-repeat;`, 0, EDPZ);
    obj.BulletEle = NewImg(0, `images/Plants/ShroomBullet.png`, `left:${obj.AttackedLX - 40}px;top:${obj.pixelTop + 95}px;visibility:hidden;z-index:{obj.zIndex + 3};`);
    oSym.addTask(18, _ => $P[id] && obj.CreatePawns(obj));
    oSym.addTask(20, ClearChild, [effect]);
  },

  PrivateDie: function (a) {
    a.BulletEle = null;
  },
  NormalAttack: function () {
    var a = this,
        b = "PB" + Math.random(),
        w = a.id;
    EditEle(a.BulletEle.cloneNode(false), {
      id: b
    }, 0, EDPZ);
    PlayAudio("puff");
    $(w).childNodes[1].src = a.PicArr[3];
    oSym.addTask(40, function (e) {
      var d = $(e);
      d && (d.childNodes[1].src = a.PicArr[a.NormalGif]);
    }, [w]);
    oSym.addTask(15, function (d) {
      var c = $(d);
      c && SetVisible(c);
    }, [b]);
    oSym.addTask(1, function fun(f, j, h, c, n, i, m, k, o, g, u) {
      var l,
          e = GetC(n),
          d = oZ["getZ" + c](n, i);

      if (u[i + "_" + e] && k != e) {
        ClearChild(j);
      } else {
        d && d.Altitude == 1 ? (d.getPea(d, h, c), SetStyle(j, {
          left: o + 28 + "px"
        }).src = "images/Plants/ShroomBulletHit.gif", oSym.addTask(10, ClearChild, [j])) : (n += l = !c ? 5 : -5) < oS.W && n > 100 ? (j.style.left = (o += l) + "px", oSym.addTask(1, fun, [f, j, h, c, n, i, m, k, o, g, u])) : ClearChild(j);
      }
    }, [b, $(b), a.Attack, 0, a.AttackedLX, a.R, 0, 0, a.AttackedLX - 40, oGd.$Torch, oGd.$Obstacle]);
  }
}),
    oBambooUncle = InheritO(CPlants, {
  EName: "oBambooUncle",
  CName: $__language_Array__["584a262e119dda3c376acc37665b0626"],
  width: 216,
  height: 164,
  beAttackedPointL: 40,
  beAttackedPointR: 130,
  SunNum: 200,
  coolTime: 15,
  PicArr: ["images/Card/BambooUncle.webp", "images/Plants/BambooUncle/0.gif", "images/Plants/BambooUncle/BambooUncle.gif", "images/Plants/CherryBomb/Boom.png"],
  AudioArr: ["cherrybomb"],
  Tooltip: $__language_Array__["c5451a20175a9527ed5bfa6888512f41"],
  Story: $__language_Array__["37f2cee8f8d60c9eb62d01452f217cdf"],
  getTriggerRange: (R, LX, RX) => [[LX, RX, 0]],

  TriggerCheck(zombie) {
    zombie.beAttacked && zombie.Altitude > 0 && (this.canTrigger = 0, this.NormalAttack(this));
  },

  NormalAttack: self => self.Die(),

  Die(ticket) {
    let self = this;
    let id = self.id;
    self.oTrigger && oT.delP(self);
    self.HP = 0;
    delete $P[id];
    delete oGd.$[self.R + "_" + self.C + "_" + self.PKind];
    ClearChild($(id));

    if (!['JNG_TICKET_SuperPower', 'JNG_TICKET_ShovelPlant'].includes(ticket)) {
      self.PrivateDie(self);
    }
  },

  PrivateDie(self) {
    let R = self.R,
        floorR = R > 1 ? R - 1 : 1,
        ceilingR = R < oS.R ? R + 1 : oS.R,
        leftBorder = self.pixelLeft - 80,
        rightBorder = self.pixelRight + 80;

    do {
      oZ.getArZ(leftBorder, rightBorder, floorR).forEach(zombie => zombie.getExplosion());
    } while (floorR++ < ceilingR);

    self.BoomGIF(self.pixelLeft, self.pixelTop);
    oEffects.ScreenShake();
  }

}),
    oBambooUncle1 = InheritO(oBambooUncle, {
  EName: "oBambooUncle1",
  CName: $__language_Array__["3e0afe2fe9128f1ce23497caff5b1895"],
  CoolTime: 3,
  Tooltip: $__language_Array__["912834969e9414a58a8eef6f08f2a41b"]
}),
    oDoomShroom = InheritO(oCherryBomb, {
  EName: "oDoomShroom",
  CName: $__language_Array__["a537e01f1d831344058fd0b88f03b076"],
  width: 102,
  height: 91,
  beAttackedPointR: 80,
  coolTime: 35,
  SunNum: 150,
  AudioArr: ["doomshroom"],
  PicArr: function () {
    const a = "images/Plants/DoomShroom/";
    return ["images/Card/DoomShroom.webp", a + "0.gif", a + "DoomShroom.gif", a + "Boom.webp"];
  }(),
  Tooltip: $__language_Array__["d7251eab598dac40e05a81402b9715ba"],
  Story: $__language_Array__["ca7a5ab1199976adc98796942f3e1f6a"],
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
        leftBorder = obj.pixelLeft - 240,
            rightBorder = obj.pixelRight + 240;

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
}),
    oDoomShroom1 = InheritO(oDoomShroom, {
  EName: "oDoomShroom1",
  CName: $__language_Array__["c3f6f58e2d40630c3e7353250a2f6150"],
  coolTime: 12,
  Tooltip: $__language_Array__["1444fbfbfc52ef9548d85cb70a116960"]
}),
    oNutBowling = InheritO(CPlants, {
  EName: "oNutBowling",
  CName: $__language_Array__["40d4eab76e348482bc0d8598fd0ea555"],
  width: 65,
  height: 73,
  beAttackedPointR: 45,
  canEat: 0,
  zIndex: 1,
  Immediately: true,
  PicArr: ["images/Card/WallNut.webp", "images/Plants/WallNut/0.gif", "images/Plants/WallNut/WallNutRoll.webp"],
  AudioArr: ["bowling", "bowlingimpact", "bowlingimpact2"],
  CanAttack: 1,

  InitTrigger() {},

  getHurt() {},

  PrivateBirth(self) {
    PlayAudio("bowling");
    let ele = $(self.id);
    let dir = 0; //坚果的上下移动方向，0为不移动，1为向下，-1为向上

    let minY = GetY1Y2(1)[0] + 40; //坚果可以运动到的上边界坐标

    let maxY = GetY1Y2(oS.R)[1]; //坚果可以运动到的下边界坐标

    (function fun() {
      let R = self.R;
      let C = self.C;
      let targZombie;

      if (!$P[self.id]) {
        return;
      }

      if (self.CanAttack && (targZombie = oZ.getZ0(self.AttackedRX, R)) && targZombie.getCrushed(self)) {
        PlayAudio(["bowlingimpact", "bowlingimpact2"].random());

        switch (targZombie.Ornaments) {
          case 0:
            //无防具僵尸
            if (targZombie.HP < 900) {
              targZombie.NormalDie();
            } else {
              targZombie.getHit0(targZombie, 900, 0);
            }

            break;

          case 1:
            //I类防具僵尸，如路障铁桶橄榄球
            targZombie.getHit0(targZombie, Math.min(targZombie.OrnHP || targZombie.HP, 900), 0);
            break;

          default:
            //II类防具僵尸，如读报
            targZombie.CheckOrnHP(targZombie, targZombie.id, targZombie.OrnHP, 400, targZombie.PicArr, 0, 0, 0);
        }

        self.CanAttack = 0; //下面计算坚果的上下移动方向

        switch (R) {
          case oS.R:
            dir = -1;
            break;

          case 1:
            dir = 1;
            break;

          default:
            switch (dir) {
              case 1:
                dir = -1;
                break;

              case -1:
                dir = 1;
                break;

              default:
                dir = Math.random() > 0.5 ? 1 : -1;
            }

        }
      } else {
        let flag = false; //用于标记坚果的坐标位置是否发生变化
        //处理保龄球超越上下边界的情况

        switch (dir) {
          case 1:
            //向下运动
            self.pixelBottom + 2 > maxY && (dir = -1);
            break;

          case -1:
            //向上运动
            self.pixelBottom - 2 < minY && (dir = 1);
            break;
        }

        if (self.AttackedLX > oS.W) {
          self.Die();
        } else {
          self.AttackedLX += 2;
          self.AttackedRX += 2;
          let curR = GetR(self.pixelBottom += dir * 2); //计算坚果处在行

          let curC = GetC(self.pixelRight += 2); //计算坚果处在列

          SetStyle(ele, {
            left: (self.pixelLeft += 2) + "px",
            top: (self.pixelTop += dir * 2) + "px",
            zIndex: self.zIndex = 3 * curR
          });
          curR !== R && (self.R = curR, flag = true, !self.CanAttack && (self.CanAttack = 1));
          curC !== C && (self.C = curC, flag = true);

          if (flag) {
            let id = curR + "_" + curC + "_1";

            if (oGd.$[`${R}_${C}_1`] == self) {
              oGd.del({
                R,
                C,
                PKind: 1
              });
            }

            if (oGd.$[id]) {
              oGd.$[id].Die("JNG_TICKET_Sculpture");
            }

            if (!oGd.$[id]) {
              oGd.add(self, id);
            }
          }
        }
      }

      oSym.addTask(1 / 3, fun);
    })();
  },

  Die(ticket) {
    const list = new Set(['JNG_TICKET_Sculpture']);

    if (!list.has(ticket)) {
      //只有接收到特定标示才【不会!!!!!】死亡
      CPlants.prototype.Die.call(this);
    }
  }

}),
    oNutBowlingPay = InheritO(oNutBowling, {
  EName: "oNutBowlingPay",
  SunNum: 50,
  coolTime: 5,
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/WallNut.webp", a + "0.gif", a + "WallNutRoll.webp"];
  }()
}),
    oBigWallNutPay = InheritO(oNutBowling, {
  EName: "oBigWallNutPay",
  SunNum: 225,
  coolTime: 5,
  CName: $__language_Array__["00efef8d7a00ea0444cd28ec0f0fe9a6"],
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/BigWallNut.webp", a + "0.gif", a + "WallNutRoll.webp"];
  }(),
  PrivateBirth: function (c) {
    c.height = 146;
    let d = $(c.id);
    PlayAudio("bowling");
    oGd.del({
      R: c.R,
      C: c.C,
      PKind: 1
    });

    (function fun() {
      let z = oZ.getArZ(c.pixelLeft, c.pixelRight, c.R);

      for (let i = z.length - 1; i >= 0; i--) {
        if ($Z[z[i].id]) {
          z[i].HP + z[i].OrnHP > 3000 ? z[i].getHit0(z[i], 3000) : z[i].CrushDie(0.15);
        }
      }

      if (z.length > 0) {
        oEffects.ScreenShake(2);
        PlayAudio(["bowlingimpact", "bowlingimpact2"].random());
      }

      SetStyle(d, {
        left: (c.pixelLeft += 2) + "px"
      });
      c.pixelRight += 2;

      if (c.pixelLeft > oS.W) {
        c.Die();
        return;
      }

      oSym.addTask(1, fun);
    })();
  },
  width: 130,
  height: 73,
  ImgStyle: {
    transform: "scale(2)"
  },
  getShadow: self => `top:50px;`,
  GetDX: self => -Math.floor(self.width * 0.5),
  GetDY: (R, C, arg, birthed) => (birthed ? -73 : -30) + (arg[0] ? -21 : -15) //返回植物底座相对格子中点的偏移量，默认可根据是否种在花盆容器中调整

}),
    oBigWallNut = InheritO(oBigWallNutPay, {
  EName: "oBigWallNut",
  SunNum: 0,
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/BigWallNut.webp", a + "0.gif", a + "WallNutRoll.webp"];
  }()
}),
    oBoomNutBowling = InheritO(oNutBowling, {
  EName: "oBoomNutBowling",
  CName: $__language_Array__["a35bcfb0170f444ce7dfb48dbee5b117"],
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/BoomNutBowling.webp", a + "1.gif", a + "BoomNutBowling.webp", "images/Plants/CherryBomb/Boom.png"];
  }(),
  AudioArr: ["cherrybomb", "bowling"],
  PrivateBirth: function (self) {
    PlayAudio("bowling");

    (function fun(self, GroundWidth, AttackedLX, AttackedRX, dom) {
      var oldR = self.R,
          oldC = self.C,
          t,
          curC; //GroundWidth = AttackedLX + "_Boom";

      if ((t = oZ.getZ0(AttackedRX, oldR)) && t.getCrushed(self)) {
        var j = oldR > 2 ? oldR - 1 : 1,
            g = oldR < oS.R ? oldR + 1 : oS.R,
            u = self.pixelLeft - 80,
            r = self.pixelLeft + 160,
            e,
            k,
            i = Math.random();
        PlayAudio("cherrybomb");

        do {
          k = (e = oZ.getArZ(u, r, j)).length;

          while (k--) {
            e[k].getExplosion(i);
          }
        } while (j++ < g);

        self.Die();
        ClearChild(dom);
        self.BoomGIF(self.pixelLeft, self.pixelTop - 100);
      } else {
        if (AttackedLX > GroundWidth) {
          self.Die();
        } else {
          curC = GetC(self.pixelRight += 2);
          self.AttackedLX = AttackedLX += 2;
          self.AttackedRX = AttackedRX += 2;
          SetStyle(dom, {
            left: (self.pixelLeft += 2) + "px"
          });

          if (curC != oldC) {
            self.C = curC; //oGd.del({ R: oldR, C: oldC, PKind: 1 });
            //oGd.add(self, oldR + "_" + curC + "_1");

            let id = oldR + "_" + curC + "_1";

            if (oGd.$[`${oldR}_${oldC}_1`] == self) {
              oGd.del({
                R: oldR,
                C: oldC,
                PKind: 1
              });
            }

            if (oGd.$[id]) {
              oGd.$[id].Die("JNG_TICKET_Sculpture");
            }

            if (!oGd.$[id]) {
              oGd.add(self, id);
            }
          }

          oSym.addTask(1, fun, [self, GroundWidth, self.AttackedLX, self.AttackedRX, dom]);
        }
      }
    })(self, oS.W, self.AttackedLX, self.AttackedRX, $(self.id));
  }
}),
    oBoomNutBowlingPay = InheritO(oBoomNutBowling, {
  EName: "oBoomNutBowlingPay",
  SunNum: 150,
  coolTime: 5,
  PicArr: function () {
    var a = "images/Plants/WallNut/";
    return ["images/Card/BoomNutBowling.webp", a + "1.gif", a + "BoomNutBowling.webp", "images/Plants/CherryBomb/Boom.png"];
  }()
}),
    //极光冰原植物
oBegonia = InheritO(CPlants, {
  EName: "oBegonia",
  CName: $__language_Array__["4230969ff4e939f2b8e25676cc20d96d"],
  width: 77,
  height: 88,
  beAttackedPointR: 45,
  SunNum: 25,
  HP: 1000,
  coolTime: 15,
  NormalGif: 1,
  EffectGif: 3,
  PicArr: function () {
    var a = "images/Plants/Begonia/";
    return ["images/Card/Begonia.webp", a + "0.png", a + "cracked.gif", a + 'Frozen.webp'];
  }(),
  Tooltip: $__language_Array__["df2ba9c2190c4926a41e7e1ce52a6693"],
  Story: $__language_Array__["45a3b6e4b4af243eaa8827a6aa08886b"],
  getShadow: self => `left:${self.width * 0.5 - 44}px;top:${self.height - 28}px;`,

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`;
    let [d0, d1] = data;

    if (d1 && (d1.EName === 'oRifter' || d1.EName === 'oBegonia' && d1.HurtStatus > 0)) {
      return true;
    }

    if (oGd.$GdType[R][C] === 1 || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0 || d0) {
      return !(C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord] || d1);
    }
  },

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this;
    let test = oGd.$[`${R}_${C}_1`];

    if (test && test.EName === "oRifter") {
      //判断当前地形是否为冰窟
      self.isRifter = test;
    }

    let id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, self.PicArr[self.NormalGif], null, ele); //绘制植物本体

    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    });
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册

    self.PrivateBirth(self);
    return self;
  },

  PrivateBirth(obj) {
    if (obj && obj.isRifter) {
      //补洞逻辑
      let effect = NewImg(`${obj.id}_Frozen`, obj.PicArr[obj.EffectGif], `position:absolute;z-index:${obj.zIndex + 2};width:198px;height:113px;left:${obj.pixelLeft - 65}px;top:${obj.pixelTop}px;`, EDPZ);
      oSym.addTask(50, ClearChild, [effect]);

      obj['isRifter']._Die();

      obj.Die();
    }
  },

  InitTrigger: () => {},
  HurtStatus: 0,
  getHurt: function (e, b, a) {
    let c = this,
        id = c.id,
        d = $(id).childNodes[1];
    c.SetBrightness(c, d, 1);
    oSym.addTask(10, () => {
      $P[id] && c.SetBrightness(c, d, 0);
    });
    (c.HP -= a) < 1 ? c.Die() : c.HP < 500 && c.HurtStatus < 1 && (c.HurtStatus = 1, d.src = "images/Plants/Begonia/cracked.gif");
  }
}),
    oIceAloe = InheritO(oPeashooter, {
  EName: "oIceAloe",
  CName: $__language_Array__["5e4dea72f493b118ada9d61674cf42a4"],
  width: 160,
  height: 126,
  beAttackedPointR: 80,
  SunNum: 225,
  AttackGif: 5,
  coolTime: 22.5,
  Attack: 160,
  AudioArr: ["CabbageAttack1", "CabbageAttack2"],
  PicArr: (path => ["images/Card/IceAloe.webp", path + "0.webp", path + "IceAloe.webp", path + "Bullet.webp", path + "BulletHit.webp", path + "Attack.webp", path + 'rest.webp'])("images/Plants/IceAloe/"),
  Tooltip: $__language_Array__["ee08274dbe62b5dd6d0fe6e98cec5528"],
  Story: $__language_Array__["84ceed6f58e8998a586f16e9975c5aeb"],

  PrivateBirth(self) {
    self.BulletEle = NewImg(0, self.PicArr[3], `left:${self.pixelLeft + 100}px;top:${self.pixelTop - 10}px;visibility:hidden;z-index:${self.zIndex + 2};`);
  },

  BirthStyle: (self, id, ele, style) => {
    EditEle(ele.childNodes[1], {}, {
      top: "15px"
    });
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  CheckLoop(zid, direction) {
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(700, _ => {
        $P[pid] && ($(pid).childNodes[1].src = self.PicArr[self.NormalGif], oSym.addTask(100, _ => self.AttackCheck1(zid, direction)) //此处务必箭头函数，以免this指针丢失
        );
      });
    }
  },

  getAngle: (x, y, lastX, lastY) => Math.atan((y - lastY) / (x - lastX)),

  //获取水平距离与水平速度
  //originalPos&targetPos [x,y]坐标
  //vy 竖直方向初速度
  //targetXSpeed 目标坐标的横速度
  get_S_Vx(originalPos, targetPos, vy, gravity, targetXSpeed) {
    let [x, y] = originalPos;
    let [zX, zY] = targetPos;
    let t1 = Math.abs(vy / gravity); //上行时间

    let topPosition = y - 1 / 2 * gravity * t1 ** 2; //最高点坐标

    let relativeY = zY - topPosition; //相对最高点坐标僵尸的高度

    let t2 = Math.sqrt(2 * Math.abs(relativeY) / gravity); //下落时间

    let speedX = targetXSpeed * (t1 + t2) / 10; //僵尸走动而影响的距离差

    let s = zX - speedX - x; //水平位移，即投手到僵尸的距离

    let vx = Math.abs(s / (t1 + t2)); //水平速度

    return [s, vx];
  },

  NormalAttack(zid) {
    let self = this;
    let ele = $(self.id);
    let zombieTarget = $Z[zid];
    if (!zombieTarget) return;
    let bullet = EditEle(self.BulletEle.cloneNode(), {
      id: "CB" + Math.random()
    }, 0, EDPZ);
    ele.childNodes[1].src = self.PicArr[self.AttackGif];
    oSym.addTask(241, _ => $P[self.id] && (ele.childNodes[1].src = 'images/Plants/IceAloe/rest.webp'));
    oSym.addTask(100, _ => {
      PlayAudio(['CabbageAttack1', 'CabbageAttack2'].random());
      SetVisible(bullet); //目前投手代码由类平抛改成斜抛

      let x = self.pixelLeft + 100; //子弹横坐标

      let y = self.pixelTop - 10; //子弹纵坐标
      //子弹宽高

      let width = 22;
      let height = 35;
      let gravity = 0.2; //重力加速度，定值

      let vy = -10; //竖直方向速度，初速度为定值

      let zomRelativePos = zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] ? zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] : zombieTarget.HeadTargetPosition[0]; //僵尸和僵尸头部坐标

      let zY = Number.parseInt(zombieTarget.Ele.style.top) + zombieTarget.DivingDepth + zomRelativePos.y - height; //僵尸绝对纵坐标

      let zX = Number.parseInt(zombieTarget.Ele.style.left) + zomRelativePos.x - width; //投出时僵尸横坐标

      let zSpeed = !zombieTarget.isAttacking * zombieTarget.Speed * zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang];
      let [s, vx] = self.get_S_Vx([x, y], [zX, zY], vy, gravity, zSpeed); //获取距离和水平速度

      let x2 = x + s; //落点坐标

      let dt = 2; //更新时间

      let [lastX, lastY] = [x, y];
      let defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      let bulletShadow = NewEle(`AloeBullet_Shadow_${Math.random()}`, 'div', `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${self.pixelTop + self.height - 10}px;`, {
        className: 'Shadow'
      }, EDPZ);

      (function drawFrame() {
        vy += gravity * dt; //竖直方向的速度受重力加速度影响                

        bullet.style.left = (x += vx * dt) + 'px';
        bulletShadow.style.left = x + 15 + 'px';
        bullet.style.top = (y += vy * dt) + 'px';
        bullet.style.transform = `rotate(${self.getAngle(x, y, lastX, lastY) - defAngle}rad)`;

        if (!$Z[zombieTarget.id]) {
          //僵尸死亡的时候改变下落坐标
          zY = GetY(self.R) - 90;
        }

        if (x >= x2 && y >= zY && vy > 0 || s < 40) {
          bullet && (bullet.src = RandomPic(self.PicArr[4]), bullet.style.left = x - 40 + "px", bullet.style.top = y - 20 + "px", bullet.style.transform = `rotate(0deg)`, oSym.addTask(70, ClearChild, [bullet]));

          for (let zombie of oZ.getArZ(x2 - 45, x2 + 90, self.R)) {
            zombie.getSlow(zombie, zombie.id, 1500);
            zombie.getHit2(zombie, self.Attack);
          }

          oEffects.fadeOut(bulletShadow, 0.1 / oSym.NowSpeed, ClearChild); //影子消失

          return;
        }

        oSym.addTask(dt, drawFrame);
        [lastX, lastY] = [x, y];
      })();
    });
  }

}),
    oPepper = InheritO(oPeashooter, {
  EName: "oPepper",
  CName: $__language_Array__["4de60d984065c35547d0aa942084c5ab"],
  width: 85,
  height: 117,
  SunNum: 50,
  coolTime: 12.5,
  PKind: 3,
  Attack: 15,
  FlyingPlant: true,
  PicArr: function () {
    var a = "images/Plants/Pepper/";
    return ["images/Card/Pepper.webp", a + "0.png", a + "Pepper.gif", a + "Bullet.png", a + "BulletHit.gif", a + "Attack.gif"];
  }(),
  Tooltip: $__language_Array__["bc53521884a3cb0866cfa5b78f668910"],
  Story: $__language_Array__["617d84726ca219f22c20cb429f0120da"],

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, self.PicArr[self.NormalGif], null, ele); //绘制植物本体

    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    });
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册
    //只有在游戏关卡开始后privatebirth才会执行

    let callback = _ => {
      const PrivateBirth = self.PrivateBirth;

      if ($P[id]) {
        PrivateBirth && PrivateBirth.call(self, self);
        removeEventListenerRecord('jng-event-startgame', callback);
      }
    };

    oS.isStartGame === 1 ? callback() : addEventListenerRecord('jng-event-startgame', callback);
    return self;
  },

  getShadow: self => `left:${self.width * 0.5 - 38}px;top:${self.height - 22}px;transform:scale(0.5);`,
  GetDBottom: function () {
    return 82;
  },
  getTriggerRange: (R, LX, RX) => [[GetX(-2) - 10, oS.W, 0]],
  NormalAttack: function (zid) {
    let a = this,
        direction = 0,
        w = a.id;

    function heightCheck(Z) {
      return Z.height - Z.DivingDepth > a.height - a.GetDBottom(a) / 3;
    }

    let leftZombie = oZ.getRangeLeftZ(GetX(-2) - 10, oS.W, a.R, false, false, heightCheck); //默认检测的是最右边僵尸，但是我还是需要获取最左边僵尸

    let rightZombie = oZ.getRangeLeftZ(a.AttackedLX + 20, oS.W, a.R, false, false, heightCheck);

    if (!leftZombie) {
      return;
    }

    $(w).childNodes[1].src = a.PicArr[a.AttackGif];
    oSym.addTask(130, function (e) {
      var d = $(e);
      d && (d.childNodes[1].src = a.PicArr[a.NormalGif]);
    }, [w]);

    if ((leftZombie === null || leftZombie === void 0 ? void 0 : leftZombie.AttackedRX) < a.AttackedLX && leftZombie.Altitude != 3) {
      direction = 1;
      let dom = $(w).childNodes[1];
      EditCompositeStyle({
        ele: dom,
        delFuncs: ["rotateY"],
        addFuncs: [["rotateY", "180deg"]],
        option: 2
      });
      SetStyle(dom, {
        left: "20px"
      });
    } else if (!(rightZombie && rightZombie.Altitude != 3)) {
      return;
    } else {
      let dom = $(w).childNodes[1];
      EditCompositeStyle({
        ele: dom,
        delFuncs: ["rotateY"],
        option: 2
      });
      SetStyle(dom, {
        left: "0"
      });
    }

    oSym.addTask(120, function () {
      PlayAudio(['throw', 'throw2'][Math.round(Math.random() * 1)]);
      let bullet = CustomBullet(oPepperBullet, [a.PicArr[a.BulletGif], a.PicArr[4]], a.AttackedLX - direction * 27, a.pixelTop + 40, a.R);
      bullet.Direction = direction;
      bullet.CanAttackCheck = heightCheck;

      if (direction == 1) {
        EditCompositeStyle({
          ele: bullet.Ele,
          delFuncs: ["rotateY"],
          addFuncs: [["rotateY", "180deg"]],
          option: 2
        });
      }
    });
  }
}),
    oImitater = InheritO(CPlants, {
  EName: "oImitater",
  CName: $__language_Array__["e3de5b9ba428b4f7edf3c5eb27807b2e"],
  SunNum: 100,
  width: 66,
  height: 93,
  beAttackedPointL: 5,
  beAttackedPointR: 50,
  coolTime: 20,
  Immediately: true,
  PicArr: function () {
    let a = "images/Plants/Imitater/";
    return ["images/Card/Imitater.webp", a + "0.png", a + "Imitater.webp"];
  }(),
  mobile: Mobile,
  AudioArr: ["Imitater"],
  Tooltip: $__language_Array__["b69cf99055305d0a3ec03c8247871d72"],
  Story: $__language_Array__["103159e8213a6107637569a5b7080062"],
  InitTrigger: function () {},

  BirthStyle(self, e, b, a) {
    let d = b.childNodes[1];
    d.src = this.PicArr[2];
    EditEle(b, {
      id: e,
      'data-jng-constructor': self.EName
    }, a, EDPZ);
  },

  Imitat() {
    let arr = oS.StaticCard ? ArCard.map(card => card.PName) : oS.PName;

    if (arr.length < 2) {
      this.toPlant = oApple;
      return;
    }

    this.toPlant = arr.filter(plant => plant.prototype.EName !== 'oImitater').random();
  },

  PrivateBirth: function () {
    let zhizhen = this;
    zhizhen.Imitat();
    oSym.addTask(600, function () {
      if ($P[zhizhen.id]) {
        PlayAudio("Imitater");
        zhizhen.canEat = 0;
      }
    });
    oSym.addTask(700, function () {
      if ($P[zhizhen.id]) {
        zhizhen.Die();
        let plant;
        zhizhen.toPlant && (plant = CustomSpecial(zhizhen.toPlant, zhizhen.R, zhizhen.C));
      }
    });
  }
}),
    oMonotropa = InheritO(oPeashooter, {
  EName: "oMonotropa",
  CName: $__language_Array__["54a0c1d2145a112b61171fba211c00f2"],
  SunNum: 100,
  coolTime: 15,
  AttackGif: 5,
  width: 91,
  height: 90,
  Attack: 20,
  CanSpawnSun: true,
  PicArr: function () {
    var a = "images/Plants/Monotropa/";
    return ["images/Card/Monotropa.webp", a + "0.png", a + "Monotropa.gif", a + "Bullet.png", a + "BulletHit.png", a + "Attack.gif"];
  }(),
  Tooltip: $__language_Array__["2ee8751b3138f39bc06c7432fbe33134"],
  Story: $__language_Array__["a4ce449f863bc5f398c5b18e3299233f"],
  PrivateBirth: function (a) {
    a.BulletEle = NewImg(0, a.PicArr[3], "left:" + a.AttackedLX + "px;top:" + (a.pixelTop + 45) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
  },
  NormalAttack: function () {
    let a = this,
        b = "PB" + Math.random(),
        w = a.id;
    EditEle(a.BulletEle.cloneNode(false), {
      id: b
    }, 0, EDPZ);
    $(w).childNodes[1].src = a.PicArr[a.AttackGif];
    oSym.addTask(110, function (e) {
      var d = $(e);
      d && (d.childNodes[1].src = a.PicArr[a.NormalGif]);
    }, [w]);
    oSym.addTask(65, function (d) {
      PlayAudio(['throw', 'throw2'][Math.round(Math.random() * 1)]);
      var c = $(d);
      c && SetVisible(c);
    }, [b]);
    oSym.addTask(65, function fun(f, j, n, i, k, o, u) {
      var l,
          e = GetC(n),
          sun,
          d = oZ["getZ0"](n, i);

      if (u[i + "_" + e] && k != e) {
        ClearChild(j);
      } else {
        d && d.Altitude == 1 ? (d["getPea"](d, a.Attack), SetStyle(j, {
          left: o + 28 + "px"
        }).src = a.PicArr[4], oS.StaticCard && (sun = AppearSun(o + 40, a.pixelTop + 45, 10, 0, GetY(a.R) - (a.pixelTop + 45) - 30 - Math.random() * 10, -50, 48, 72), oSym.addTask(100, function () {
          ClickSun(sun.id);
        })), oSym.addTask(10, ClearChild, [j])) : (n += l = 5) < oS.W && n > 100 ? (j.style.left = (o += l) + "px", oSym.addTask(1, fun, [f, j, n, i, k, o, u])) : ClearChild(j);
      }
    }, [b, $(b), a.AttackedLX, a.R, 0, a.AttackedLX, oGd.$Obstacle]);
  }
}),
    oSpikeweed = InheritO(oStoneFlower, {
  EName: "oSpikeweed",
  CName: $__language_Array__["af6179d978e3b00051ca5fa4adcea183"],
  width: 85,
  height: 31,
  beAttackedPointL: 10,
  beAttackedPointR: 75,
  SunNum: 100,
  coolTime: 7.5,
  Stature: -1,
  canEat: 0,
  UndergroundPlant: true,
  Attack: 20,
  Tooltip: $__language_Array__["1d9d55fa7401ab72882abfe54e46d1f3"],
  Story: $__language_Array__["8e97e48e644a247155f827dab4db4f04"],
  PicArr: function () {
    var a = "images/Plants/Spikeweed/";
    return ["images/Card/Spikeweed.webp", a + "0.png", a + "Spikeweed.gif", a + "Attack.gif"];
  }(),
  GetDX: self => -Math.floor(self.width * 0.5) - 10,
  getShadow: self => `left:5px;top:6.5px;`,
  PrivateBirth: function (o) {
    o.ArZ = {};
    let z = oZ.getArZ(o.AttackedLX, o.AttackedRX, o.R, Z => {
      return Z.AKind === 2;
    });

    if (z.length > 0) {
      z[0].flatTire();
      o.Die();
    }
  },
  getHurt: function (d, b, a) {
    let c = this;

    switch (b) {
      case 2:
        //汽车类僵尸调用爆胎回调
        d && d.flatTire();
        c.Die();
        break;

      case 1:
        d && d.getHit2(d, 20, 0);
        c.Die();
        break;

      default:
        (c.HP -= a) < 1 && c.Die();
    }
  }
}),
    oTorchwood = InheritO(CPlants, {
  EName: "oTorchwood",
  CName: $__language_Array__["9e0b5b86a83c2225e822694a59a8df40"],
  width: 84,
  height: 141,
  beAttackedPointR: 53,
  SunNum: 175,
  PicArr: ["images/Card/Torchwood.webp", "images/Plants/Torchwood/0.webp", "images/Plants/Torchwood/Torchwood.webp", "images/Plants/PB10.webp", "images/Plants/PeaBulletHit1.webp"],
  AudioArr: ["firepea", "ignite"],
  Tooltip: $__language_Array__["e12fb531646bb53371f670f81d47e6ff"],
  Story: $__language_Array__["846c74724b702c4fa7aaa54760ad2d23"],

  PrivateBirth() {
    let {
      R,
      C,
      id
    } = this;
    oGd.$Torch[R + "_" + C] = id;
    oS.HaveFog && oFog.update(R, C, 0, 0, 0);
  },

  InitTrigger() {},

  PrivateDie() {
    let {
      R,
      C
    } = this;
    delete oGd.$Torch[R + "_" + C];
    oS.HaveFog && oFog.update(R, C, 0, 0, 1);
  }

}),
    oKiwibeastStrong = InheritO(CPlants, {
  EName: "oKiwibeastStrong",
  CName: $__language_Array__["12245c09fe504839881d4d064e86aca6"],
  width: 140,
  height: 196,
  beAttackedPointL: 30,
  beAttackedPointR: 80,
  SunNum: 175,
  HP: 2000,
  canEat: 1,
  coolTime: 30,
  restTime: 110,
  Attack: 40,
  HurtStatus: 0,
  AlmanacGif: 6,
  Tooltip: $__language_Array__["55f65b1ebd51a0794af9ce5acd955838"],
  Story: $__language_Array__["e8e797fe4305d1142fd53e4654967cbd"],
  AudioArr: ['KiwibeastAttack', 'KiwibeastGrow1', 'KiwibeastGrow2'],
  PicArr: function () {
    let a = "images/Plants/Kiwibeast/";
    return ["images/Card/Kiwibeast.webp", a + "0.webp", a + "Kiwibeast_0.webp", a + "Kiwibeast_0_attack.webp", a + "Kiwibeast_1.webp", a + "Kiwibeast_1_attack.webp", a + "Kiwibeast_2.webp", a + "Kiwibeast_2_attack.webp", a + 'Kiwibeast_growup_1.webp', a + 'Kiwibeast_growup_2.webp'];
  }(),
  BirthStyle: (self, id, ele, style) => {
    EditEle(ele.childNodes[1], {}, {
      top: "10px"
    });
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  PrivateBirth(o) {
    o.MinR = o.MaxR = o.R;
  },

  getHurt(objZ, AKind, point) {
    let t = this;

    if (AKind % 3) {
      //致命性攻击
      t.Die();
    } else {
      let _HP = t.HP -= point;

      switch (true) {
        case _HP < 1650 && t.HurtStatus < 1:
          t.UpDate();
          t.Attack = 50;
          t.restTime = 200;

          t.AttackEffect = (left, top) => oEffects.ImgSpriter({
            ele: NewEle(t.id + '_Effect', "div", `position:absolute;overflow:hidden;z-index:${this.zIndex + 2};height:65px;width:106px;left:${left + 6}px;top:${top + 146}px;background:url(images/Plants/Kiwibeast/Effect1.png) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -106,
            frameNum: 3,
            interval: 9
          });

          break;

        case _HP < 1000 && t.HurtStatus < 2:
          t.UpDate();
          t.Attack = 70;
          t.restTime = 240;

          t.AttackEffect = (left, top) => oEffects.ImgSpriter({
            ele: NewEle(t.id + '_Effect', "div", `position:absolute;overflow:hidden;z-index:${this.zIndex + 2};height:86px;width:183px;left:${left - 22}px;top:${top + 136}px;background:url(images/Plants/Kiwibeast/Effect2.png) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -183,
            frameNum: 4,
            interval: 9
          });

          break;

        case _HP < 0:
          t.Die();
          break;
      }
    }
  },

  UpDate() {
    let self = this,
        id = self.id,
        HurtStatus = ++self.HurtStatus,
        ele = $(id).childNodes[1];
    PlayAudio(`KiwibeastGrow${HurtStatus}`);
    self.isAttacking = 0;
    ele.src = `images/Plants/Kiwibeast/Kiwibeast_growup_${HurtStatus}.webp`; //更新触发器

    Object.assign(self, self.GrowUpFun[HurtStatus]);
    self.oTrigger && oT.delP(self);
    self.InitTrigger(self, id, self.R, self.C, self.AttackedLX, self.AttackedRX); //切图，重新触发攻击判定

    oSym.addTask(100, _ => $P[id] && (ele.src = `images/Plants/Kiwibeast/Kiwibeast_${HurtStatus}.webp`, self.cAttackCheck()));
  },

  GrowUpFun: [//第二阶段
  {
    getTriggerRange() {
      let X = GetX(this.C),
          MinX = this.MinX = X - 120,
          MaxX = this.MaxX = X + 120;
      return [[MinX, MaxX, 0]];
    },

    getTriggerR(R) {
      let MinR = this.MinR = R > 1 ? R - 1 : 1,
          MaxR = this.MaxR = R < oS.R ? R + 1 : oS.R;
      return [MinR, MaxR];
    }

  }, //第三阶段
  {
    getTriggerRange() {
      let X = GetX(this.C),
          MinX = this.MinX = X - 200,
          MaxX = this.MaxX = X + 200;
      return [[MinX, MaxX, 0]];
    },

    getTriggerR(R) {
      let MinR = this.MinR = R > 2 ? R - 2 : 1,
          MaxR = this.MaxR = R < oS.R - 1 ? R + 2 : oS.R;
      return [MinR, MaxR];
    }

  }],

  /* 幼年触发器 */
  getTriggerRange() {
    //返回在本行的触发器范围
    let X = GetX(this.C),
        MinX = this.MinX = X - 20,
        MaxX = this.MaxX = X + 20;
    return [[MinX, MaxX, 0]];
  },

  getTriggerR: R => [R, R],

  //传递行返回触发器行上下限,返回格式是[下限，上限]
  NormalAttack() {
    let o = this,
        MaxR = o.MaxR,
        MinX = o.MinX,
        MaxX = o.MaxX,
        id = o.id,
        Attack = o.Attack,
        ele = $(id).childNodes[1],
        canBounce = Math.random() > 0.92 && o.HurtStatus === 2;
    oSym.addTask(130, _ => {
      if ($P[id]) {
        PlayAudio(`KiwibeastAttack`);
        o.AttackEffect(o.pixelLeft, o.pixelTop);

        for (let _R = o.MinR; _R <= MaxR; _R++) {
          //遍历所有有效行,查询所有进入触发范围的僵尸并攻击
          oZ.getArZ(MinX, MaxX, _R).forEach(zombie => zombie.Altitude < 2 && (zombie.getHit1(zombie, Attack), canBounce && !zombie.isPuppet && zombie.Bounce()));
        }

        canBounce && oEffects.ScreenShake(4);
      }
    });
    o.isAttacking = 2;
    ele.src = `images/Plants/Kiwibeast/Kiwibeast_${o.HurtStatus}_attack.webp`;
    oSym.addTask(o.restTime, _ => $P[id] && o.isAttacking && (ele.src = `images/Plants/Kiwibeast/Kiwibeast_${o.HurtStatus}.webp`, o.isAttacking = 0, o.cAttackCheck()));
  },

  AttackEffect(left, top) {
    oEffects.ImgSpriter({
      ele: NewEle(this.id + '_Effect', "div", `position:absolute;overflow:hidden;z-index:${this.zIndex + 2};height:64px;width:118px;left:${left + 8}px;top:${top + 146}px;background:url(images/Plants/Kiwibeast/Effect0.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -118,
      frameNum: 5,
      interval: 9
    });
  },

  CheckLoop(zid) {
    const self = this,
          id = self.id;

    self.cAttackCheck = _ => $P[id] && self.AttackCheck1(zid);

    $P[id] && self.NormalAttack();
  }

}),
    oKiwibeast = InheritO(oKiwibeastStrong, {
  EName: "oKiwibeast",
  HP: 1600,

  getHurt(objZ, AKind, point) {
    let t = this;

    if (AKind % 3) {
      //致命性攻击
      t.Die();
    } else {
      let _HP = t.HP -= point;

      switch (true) {
        case _HP < 1350 && t.HurtStatus < 1:
          t.UpDate();
          t.Attack = 50;
          t.restTime = 200;

          t.AttackEffect = (left, top) => oEffects.ImgSpriter({
            ele: NewEle(t.id + '_Effect', "div", `position:absolute;overflow:hidden;z-index:${this.zIndex + 2};height:65px;width:106px;left:${left + 6}px;top:${top + 146}px;background:url(images/Plants/Kiwibeast/Effect1.png) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -106,
            frameNum: 3,
            interval: 9
          });

          break;

        case _HP < 700 && t.HurtStatus < 2:
          t.UpDate();
          t.Attack = 70;
          t.restTime = 240;

          t.AttackEffect = (left, top) => oEffects.ImgSpriter({
            ele: NewEle(t.id + '_Effect', "div", `position:absolute;overflow:hidden;z-index:${this.zIndex + 2};height:86px;width:183px;left:${left - 22}px;top:${top + 136}px;background:url(images/Plants/Kiwibeast/Effect2.png) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -183,
            frameNum: 4,
            interval: 9
          });

          break;

        case _HP < 0:
          t.Die();
          break;
      }
    }
  },

  GrowUpFun: [//第二阶段
  {
    getTriggerRange() {
      let X = GetX(this.C),
          MinX = this.MinX = X - 100,
          MaxX = this.MaxX = X + 100;
      return [[MinX, MaxX, 0]];
    },

    getTriggerR(R) {
      let MinR = this.MinR = R > 1 ? R - 1 : 1,
          MaxR = this.MaxR = R < oS.R ? R + 1 : oS.R;
      return [MinR, MaxR];
    }

  }, //第三阶段
  {
    getTriggerRange() {
      let X = GetX(this.C),
          MinX = this.MinX = X - 160,
          MaxX = this.MaxX = X + 160;
      return [[MinX, MaxX, 0]];
    },

    getTriggerR(R) {
      let MinR = this.MinR = R > 2 ? R - 2 : 1,
          MaxR = this.MaxR = R < oS.R - 1 ? R + 2 : oS.R;
      return [MinR, MaxR];
    }

  }]
}),
    //浓雾弃都
oCabbage = InheritO(oPeashooter, {
  EName: "oCabbage",
  CName: $__language_Array__["f3f4bbe2353eded794961d8b0a28b2be"],
  width: 115,
  height: 103,
  beAttackedPointR: 60,
  SunNum: 125,
  AttackGif: 5,
  Attack: 40,
  AudioArr: ["CabbageAttack1", "CabbageAttack2"],
  PicArr: function () {
    var a = "images/Plants/Cabbage/";
    return ["images/Card/Cabbage.webp", a + "0.gif", a + "Cabbage.gif", a + "Bullet.png", a + "BulletHit.gif", a + "CabbageAttack.gif"];
  }(),
  Tooltip: $__language_Array__["a51b066de5c17357a4c8c998cca3cf31"],
  Story: $__language_Array__["c1cf64367a6086150793a485cca2ca34"],

  PrivateBirth(a) {
    a.BulletEle = NewImg(0, a.PicArr[3], "left:" + (a.pixelLeft + 50) + "px;top:" + (a.pixelTop + 10) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
  },

  getAngle(x, y, lastX, lastY) {
    return 180 / Math.PI * Math.atan2(y - lastY, x - lastX);
  },

  CheckLoop(zid, direction) {
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(290 + Math.random() * 10 - 5, _ => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },

  HitZombie(zombieTarget, self) {
    zombieTarget.getPea(zombieTarget, 0); //为了放出声音，所以假装攻击下

    zombieTarget.getHit2(zombieTarget, self.Attack);
  },

  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif];
  },

  get_S_Vx: oIceAloe.prototype.get_S_Vx,

  NormalAttack(zid) {
    let self = this;
    let ele = $(self.id);
    let zombieTarget = oZ.getRangeLeftZ(self.pixelLeft + self.beAttackedPointR, oS.W, self.R, true);
    if (!zombieTarget) return;
    let bullet = EditEle(self.BulletEle.cloneNode(), {
      id: "CB" + Math.random()
    }, 0, EDPZ);
    self.AttackAnim(ele, self);
    oSym.addTask(135, _ => $P[self.id] && (ele.childNodes[1].src = self.PicArr[self.NormalGif]));
    oSym.addTask(70, _ => {
      PlayAudio(self.AudioArr.slice(0, 2).random());
      SetVisible(bullet);
      let x = self.pixelLeft + 30; //子弹横坐标

      let y = self.pixelTop + 10; //子弹纵坐标
      //子弹宽高

      let width = 15;
      let height = 20;
      let gravity = 0.2; //重力加速度，定值

      let vy = -10; //竖直方向速度，初速度为定值

      let zomRelativePos = zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] ? zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] : zombieTarget.HeadTargetPosition[0]; //僵尸和僵尸头部坐标

      let zY = Number.parseInt(zombieTarget.Ele.style.top) + zombieTarget.DivingDepth + zomRelativePos.y - height; //僵尸绝对纵坐标

      let zX = Number.parseInt(zombieTarget.Ele.style.left) + zomRelativePos.x - width; //投出时僵尸横坐标

      let zSpeed = !zombieTarget.isAttacking * zombieTarget.Speed * zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang];
      let [s, vx] = self.get_S_Vx([x, y], [zX, zY], vy, gravity, zSpeed); //获取距离和水平速度

      let x2 = x + s; //落点坐标

      let dt = 2; //更新时间

      let [lastX, lastY] = [x, y];
      let defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      let bulletShadow = NewEle(`Cabbage${self.id}_B_${Math.random()}_Shadow`, 'div', `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${self.pixelTop + self.height - 10}px;`, {
        className: 'Shadow'
      }, EDPZ);

      (function drawFrame() {
        vy += gravity * dt; //竖直方向的速度受重力加速度影响

        bullet.style.left = (x += vx * dt) + 'px';
        bulletShadow.style.left = x + 'px';
        bullet.style.top = (y += vy * dt) + 'px';
        bullet.style.transform = `rotate(${self.getAngle(x, y, lastX, lastY) - defAngle - 25}deg)`;

        if (!$Z[zombieTarget.id]) {
          //僵尸死亡的时候改变下落坐标
          zY = GetY(self.R) - 70;
        }

        if (x >= x2 && y >= zY && vy > 0 || s < 40) {
          //僵尸距离太小的情况
          bullet && (bullet.src = self.PicArr[4], bullet.style.transform = `rotate(0deg)`, oSym.addTask(120, ClearChild, [bullet]));
          $Z[zombieTarget.id] && self.HitZombie(zombieTarget, self);
          oEffects.fadeOut(bulletShadow, 1 / oSym.NowSpeed, ClearChild); //影子消失

          return;
        }

        oSym.addTask(dt, drawFrame);
        [lastX, lastY] = [x, y]; //重设上一个x,y
      })();
    });
  }

}),
    oKernelPult = InheritO(oCabbage, {
  EName: "oKernelPult",
  CName: $__language_Array__["f5ce93c0ee9e9a48e0c6cefb63067f13"],
  Attack: 20,
  ButterAttack: 40,
  AttackGif: 3,
  width: 170,
  height: 131,
  SunNum: 100,
  ButterChance: 0.25,
  beAttackedPointR: 80,
  beAttackedPointL: 50,
  Tooltip: $__language_Array__["0185ebeb56637affcf244f5b09015323"],
  Story: $__language_Array__["b3d009662fedcfbe3b393f3675f01820"],
  PicArr: function () {
    var a = "images/Plants/KernelPult/";
    return ["images/Card/KernelPult.webp", a + "kernelpult.webp", a + "idle.webp", a + "attack1.webp", a + "attack2.webp", a + "corn.webp", a + "butter.webp", a + "corn_hit.webp", a + "butter_hit.webp"];
  }(),

  CheckLoop(zid, direction) {
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(290 + Math.random() * 20 - 10, _ => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },

  PrivateBirth(a) {
    a.BulletEle = NewImg(0, a.PicArr[5], "left:" + (a.pixelLeft + 50) + "px;top:" + (a.pixelTop + 10) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
    a.ButterEle = NewImg(0, a.PicArr[6], "left:" + (a.pixelLeft + 50) + "px;top:" + (a.pixelTop + 10) + "px;height:40;width:auto;visibility:hidden;z-index:" + (a.zIndex + 2));
    a.ButterChance += Math.random() * 0.4 - 0.1;
  },

  HitZombie(zombieTarget, self, isButter) {
    if (zombieTarget.Altitude != 1) {
      return;
    }

    if (isButter) {
      StopAudio("butter");
      PlayAudio("butter");
      zombieTarget.getButter(zombieTarget);
      zombieTarget.getHit2(zombieTarget, self.ButterAttack);
    } else {
      StopAudio("kernelpult1");
      StopAudio("kernelpult2");
      PlayAudio(`kernelpult${Math.floor(Math.random() * 2 + 1)}`);
      zombieTarget.getHit2(zombieTarget, self.Attack);
    }
  },

  AttackAnim(ele, self, isButter) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif + isButter];
  },

  NormalAttack(zid) {
    let self = this;
    let ele = $(self.id);
    let isButter = Math.random() < self.ButterChance ? 1 : 0;
    let zombieTarget = oZ.getRangeLeftZ(self.pixelLeft + self.beAttackedPointR, oS.W, self.R, true);
    if (!zombieTarget) return;
    let bullet = EditEle(isButter ? self.ButterEle.cloneNode() : self.BulletEle.cloneNode(), {
      id: "KB" + Math.random()
    }, 0, EDPZ);

    if (self.ButterChance > self.__proto__.ButterChance) {
      self.ButterChance = Math.max(self.ButterChance - Math.random() * 0.02, self.__proto__.ButterChance);
    } else if (self.ButterChance < self.__proto__.ButterChance) {
      self.ButterChance = Math.min(self.ButterChance + Math.random() * 0.02, self.__proto__.ButterChance);
    }

    self.AttackAnim(ele, self, isButter);
    oSym.addTask(180, _ => $P[self.id] && (ele.childNodes[1].src = self.PicArr[self.NormalGif]));
    oSym.addTask(55, _ => {
      PlayAudio(self.AudioArr.slice(0, 2).random());
      SetVisible(bullet);
      let x = self.pixelLeft + 50; //子弹横坐标

      let y = self.pixelTop + 10; //子弹纵坐标
      //子弹宽高

      let width = 0;
      let height = 5;

      if (isButter) {
        width = 5;
        height = 10;
      }

      let gravity = 0.2; //重力加速度，定值

      let vy = -10; //竖直方向速度，初速度为定值

      let zomRelativePos = zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] ? zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] : zombieTarget.HeadTargetPosition[0]; //僵尸和僵尸头部坐标

      let zY = Number.parseInt(zombieTarget.Ele.style.top) + zombieTarget.DivingDepth + zomRelativePos.y - height; //僵尸绝对纵坐标

      let zX = Number.parseInt(zombieTarget.Ele.style.left) + zomRelativePos.x - width; //投出时僵尸横坐标

      let zSpeed = !zombieTarget.isAttacking * zombieTarget.Speed * zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang];
      let [s, vx] = self.get_S_Vx([x, y], [zX, zY], vy, gravity, zSpeed); //获取距离和水平速度

      let x2 = x + s; //落点坐标

      let dt = 2; //更新时间

      let angle = 0;
      let rotSpd = Math.random() * 3 + 2;
      let bulletShadow = NewEle(`${self.id}_B_${Math.random()}_Shadow`, 'div', `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${self.pixelTop + self.height - 10}px;`, {
        className: 'Shadow'
      }, EDPZ);

      (function drawFrame() {
        vy += gravity * dt; //竖直方向的速度受重力加速度影响

        bullet.style.left = (x += vx * dt) + 'px';
        bulletShadow.style.left = x + 'px';
        bullet.style.top = (y += vy * dt) + 'px';
        bullet.style.transform = `rotate(${angle += rotSpd * dt}deg)`;

        if (!$Z[zombieTarget.id]) {
          //僵尸死亡的时候改变下落坐标
          zY = GetY(self.R) - 70;
        }

        if (x >= x2 - 40 && y >= zY && vy > 0 || s < 40) {
          //僵尸距离太小的情况
          if (s < 40) {
            bullet.style.top = zY + "px";
            bullet.style.left = x2 + "px";
          }

          bullet && (bullet.src = self.PicArr[7 + isButter], bullet.style.transform = `rotate(0deg)`, oSym.addTask(13, ClearChild, [bullet]));
          $Z[zombieTarget.id] && self.HitZombie(zombieTarget, self, isButter);
          oEffects.fadeOut(bulletShadow, 1 / oSym.NowSpeed, ClearChild); //影子消失

          return;
        }

        oSym.addTask(dt, drawFrame);
      })();
    });
  }

}),
    oPlantern = InheritO(CPlants, {
  EName: "oPlantern",
  CName: $__language_Array__["a8b66f4e36df585d25a8c461bc9cdebc"],
  width: 110,
  height: 115,
  beAttackedPointL: 14,
  beAttackedPointR: 60,
  SunNum: 25,
  PicArr: ["images/Card/Plantern.webp", "images/Plants/Plantern/0.webp", "images/Plants/Plantern/idle.webp"],
  AudioArr: ['plantern'],
  Tooltip: $__language_Array__["8e4fb1001034f4345a319c580608fe9d"],
  Story: $__language_Array__["5cf4bff75e50dc916cd0d6e77bdcc83f"],

  InitTrigger() {},

  BirthStyle(self, id, ele, style) {
    ele.childNodes[1].style.cssText += `left:-8px;top:6px;`;
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  PrivateBirth() {
    PlayAudio('plantern');
    let {
      R,
      C,
      id
    } = this;
    oGd.$Plantern[R + "_" + C] = id;
    oS.HaveFog && oFog.update(R, C, 1, 1, 0);

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (oGd.$[`${R + i}_${C + j}_1`] && oGd.$[`${R + i}_${C + j}_1`].XRay) {
          oGd.$[`${R + i}_${C + j}_1`].Update();
        }
      }
    }
  },

  PrivateDie(c) {
    let {
      R,
      C
    } = this;
    delete oGd.$Plantern[R + "_" + C];
    oS.HaveFog && oFog.update(R, C, 1, 1, 1);

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (oGd.$[`${R + i}_${C + j}_1`] && oGd.$[`${R + i}_${C + j}_1`].XRay) {
          oGd.$[`${R + i}_${C + j}_1`].Update();
        }
      }
    }
  }

}),
    oBlover = InheritO(oCherryBomb, {
  EName: "oBlover",
  CName: $__language_Array__["811cfdf3280b039073e94aba193acde0"],
  SunNum: 50,
  width: 149,
  height: 109,
  Immediately: true,
  beAttackedPointL: 20,
  beAttackedPointR: 80,
  PicArr: ["images/Card/Blover.webp", "images/Plants/Blover/0.webp", "images/Plants/Blover/Blover.webp"],
  AudioArr: ["Blover"],
  Tooltip: $__language_Array__["34ca770263295411f1a2a9fc781157a0"],
  Story: $__language_Array__["a7cbbdce74f6479acf876b910e3a3fd2"],

  PrivateBirth(self) {
    const id = self.id; //播放音效

    oSym.addTask(150, _ => $P[id] && PlayAudio('Blover')); //动画播放一半的时候吹去雾霾和僵尸

    oSym.addTask(200, _ => {
      if ($P[id]) {
        self.isBlowing = true;
        self.canEat = false;
        oS.HaveFog && !oFog.hasLeftStage && oFog.moveRight();
        self.KillFloatingZombie(self);
      }
    }); //动画结束，死亡

    oSym.addTask(300, _ => $P[id] && self.Die('JNG_TICKET_SuperPower'));
  },

  KillFloatingZombie(self) {
    //战术风扇
    for (let zombie of $Z) zombie.isFloating && zombie.FloatingDie(zombie);

    self.isBlowing && $P[self.id] && oSym.addTask(25, self.KillFloatingZombie, [self]);
  },

  Die(ticket) {
    if (!['JNG_TICKET_SuperPower', 'JNG_TICKET_ShovelPlant'].includes(ticket)) {
      return;
    }

    let self = this,
        id = self.id,
        shadow = self.id + "_Shadow";
    self.HP = 0;
    delete $P[id];
    delete oGd.$[self.R + "_" + self.C + "_" + self.PKind];
    oEffects.fadeOut($(id), 'fast', ClearChild);
    oEffects.fadeOut($(shadow), 'fast', ClearChild);
  }

}),
    oShiitake = InheritO(oPeashooter, {
  EName: "oShiitake",
  CName: $__language_Array__["9776cb40f02b94e80beab3e9b3e31afc"],
  SunNum: 250,
  coolTime: 15,
  width: 117,
  height: 87,
  beAttackedPointL: 14,
  beAttackedPointR: 96,
  AttackGif: 3,
  BulletGif: 4,
  BulletHitGif: 5,
  Attack: 200,
  PicArr: (path => ["images/Card/Shiitake.webp", path + "0.webp", path + "idle.webp", path + "attack.webp", path + "bullet.webp", path + "bulletHit.webp"])("images/Plants/Shiitake/"),
  AudioArr: ['shiitake', 'shiitakeHit'],
  Tooltip: $__language_Array__["2f75e535e96fb5f9f75b2ef7ce0fd3ce"],
  Story: $__language_Array__["f5a95c33ef494b68cb6d185e78d1fa84"],

  CheckLoop(zid, direction) {
    //开始攻击，并且循环检查攻击条件1,2
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid); //触发植物攻击，并传入触发者僵尸之id

      oSym.addTask(580, _ => $P[pid] && self.AttackCheck1(zid, direction));
    }
  },

  PrivateBirth(self) {
    self.BulletEle = NewImg(0, self.PicArr[self.BulletGif], `top:${self.pixelTop + 12}px;visibility:hidden;z-index:${self.zIndex + 2}`);
  },

  NormalAttack() {
    const self = this;
    const id = self.id;
    const ele = $(id);
    const bullet = EditEle(self.BulletEle.cloneNode(false), {
      id: "PB" + Math.random()
    }, 0, EDPZ); //生产一个子弹img对象

    ele.childNodes[1].src = self.PicArr[self.AttackGif]; //切换攻击动画

    oSym.addTask(65, () => {
      if (!$P[id]) return;
      PlayAudio('shiitake');
      SetVisible(bullet);
      const R = self.R;
      const obstacles = oGd.$Obstacle;

      const bulletAnim = bulletX => {
        let C = GetC(bulletX);
        let zombie = oZ.getZ0(bulletX, R); //查询僵尸

        if (obstacles[`${R}_${C}`]) {
          //检测障碍物
          ClearChild(bullet);
          return;
        }

        if (zombie && !zombie.isGoingDie && zombie.Altitude === 1) {
          //判断能否攻击僵尸
          self.HitZombie(zombie); //攻击僵尸

          bullet.src = self.PicArr[self.BulletHitGif]; //子弹爆裂动画

          oSym.addTask(70, ClearChild, [bullet]); //删除子弹图片

          return;
        } //检测子弹是否飞出场外
        //若没有飞出，则移动子弹并递归


        if ((bulletX += 6) < oS.W) {
          bullet.style.left = bulletX + "px";
          oSym.addTask(1, bulletAnim, [bulletX]);
        } else {
          ClearChild(bullet);
        }
      };

      bulletAnim(self.AttackedLX + 57);
    });
    oSym.addTask(130, () => $P[id] && (ele.childNodes[1].src = self.PicArr[self.NormalGif]));
  },

  HitZombie(zombie) {
    PlayAudio('shiitakeHit');
    zombie.getHit0(zombie, this.Attack, 0);

    if (!zombie.isPuppet) {
      zombie.Bounce({
        velocity: -1.5,
        distance: 1.45 + (Math.random() - 0.35) / 2
      });
    } else {
      if (zombie.EName == "oSculpture") {
        zombie.Move(false, 0, "right");
      }
    }
  }

}),
    oElecTurnip = InheritO(oSpikeweed, {
  EName: "oElecTurnip",
  CName: $__language_Array__["5f948583c079d0f482e9e289a2f4586f"],
  width: 118,
  height: 155,
  beAttackedPointL: 10,
  beAttackedPointR: 75,
  coolTime: 20,
  Stature: 0,
  canEat: 0,
  UndergroundPlant: true,
  Attack: 40,
  canShovel: false,
  HP: Infinity,
  SunNum: 125,
  PKind: 5,
  SpawnGif: 3,
  BlockGif: 4,
  AttackGif: 5,
  EleBody: null,
  AttackTime: 0,
  BlockPicDom: null,
  Tooltip: $__language_Array__["1ef479173c768b1718fb60917cf0d9e3"],
  Story: $__language_Array__["727da5f43ed354be1cf402aadcaad287"],
  AudioArr: ["turnip1", "turnip2", "turnip3", "turniptile1", "turniptile2", "electurnip"],
  PicArr: function () {
    var a = "images/Plants/ElecTurnip/";
    return ["images/Card/ElecTurnip.webp", a + "0.png", a + "idle.webp", a + "Spawn.webp", a + "block.png", a + "Attack.webp"];
  }(),
  getShadow: self => `display:none;`,
  getHurt: function (d, b, a) {},
  PrivateBirth: function (self, dd = $(self.id)) {
    self.ArZ = {};
    dd.style.zIndex = 3 * self.R + 2;
    let R = self.R,
        C = self.C;
    self.EleBody = dd.childNodes[1];
    oSym.addTask(150, _ => {
      PlayAudio("turnip" + [1, 2, 3].random());
      self.EleBody.src = self.PicArr[self.SpawnGif];
      oSym.addTask(190, _ => {
        PlayAudio("turniptile" + [1, 2].random());
        self.BlockPicDom = NewImg(undefined, self.PicArr[self.BlockGif], `position:absolute;left:${self.pixelLeft + 15}px;top:${self.pixelTop + 80}px;z-index:1`, EDPZ);
        oEffects.Animate(self.BlockPicDom, 'TurnipBlink', 5, null, null, null, 'infinite');
      });
      oSym.addTask(213, _ => {
        EditCompositeStyle({
          ele: self.EleBody,
          delFuncs: ["translate"],
          addFuncs: [["translate", "20.5px,62px"]],
          option: 2
        });
        SetStyle(self.EleBody, {
          display: "none"
        });
        self.CanAttack = true;
      });
    });
  },
  SetBrightness: _ => {},
  AttackCheck2: function (a) {
    //触发特殊条件检查器
    return a.beAttacked;
  },
  TriggerCheck: function (zombie, h) {
    let self = this;
    var id = zombie.id,
        ZLX,
        ZRX,
        PLX,
        PRX;

    if (!self.CanAttack) {
      return;
    }

    if (zombie.PZ) {
      ZLX = zombie.AttackedLX;
      ZRX = zombie.AttackedRX;
      PLX = self.AttackedLX;
      PRX = self.AttackedRX;

      if ((ZLX <= PRX && ZLX >= PLX || ZRX <= PRX && ZRX >= PLX || ZLX <= PLX && ZRX >= PRX) && self.AttackCheck2(zombie)) {
        if (self.AttackTime <= oSym.Now) {
          self.NormalAttack(id);
        }
      }
    }
  },
  NormalAttack: function (zid) {
    //oZ.getArZ(lx, rx, r)
    let zombie = $Z[zid],
        o = this,
        pid = o.id;

    if (!o.CanAttack || !zombie) {
      return;
    }

    o.AttackTime = oSym.Now + 290;

    function stopAttack() {
      return SetStyle(o.EleBody, {
        display: "none"
      }), SetStyle(o.BlockPicDom, {
        animationName: "TurnipBlink"
      }), o.EleBody.src = o.PicArr[o.NormalGif];
    }

    if (oGd.$Crater[o.R + '_' + o.C] == 1) {
      stopAttack();
      return;
    }

    PlayAudio("electurnip");
    let G = oGd.$;
    let att = 0;
    let tmp = o.EName;
    o.EName = ""; //不让它检测到自己

    for (let R = 1; R < oS.R; R++) {
      for (let C = 1; C < oS.C; C++) {
        var _G$;

        if (((_G$ = G[`${R}_${C}_${o.PKind}`]) === null || _G$ === void 0 ? void 0 : _G$.EName) == "oElecTurnip") {
          att += 45;
        }
      }
    }

    o.EName = tmp; //不让它检测到自己

    att = Math.floor(Math.pow(att, 0.7));
    let totalAttack = 0;
    let AllZombies = oZ.getArZ(o.pixelLeft - 80, o.pixelLeft + 80, o.R);

    for (let z of AllZombies) {
      let attack = 33;

      if (z.isPuppet) {
        attack = 45;
      }

      attack += att;
      attack = Math.min(attack, 165);
      totalAttack += attack;
      z.getHit2(z, attack, 0);
    }

    SetStyle(o.BlockPicDom, {
      animationName: ""
    });
    o.EleBody.src = o.PicArr[o.AttackGif];
    let sc = (totalAttack / Math.max(1, AllZombies.length) / 33 - 1) * 2 / 3 + 1;
    SetStyle(o.EleBody, {
      display: "",
      transformOrigin: "center bottom"
    });
    EditCompositeStyle({
      ele: o.EleBody,
      delFuncs: ["scale"],
      addFuncs: [["scale", sc]],
      option: 2
    });
    oSym.addTask(58, function fun() {
      if ($P[pid]) {
        stopAttack();
      }
    });
  },
  Die: function (ticket = "NONE_TICKET") {
    const list = new Set(['NONE_TICKET', 'JNG_TICKET_ShovelPlant', 'JNG_TICKET_MakeRifterZombie', 'JNG_TICKET_Gargantuar', 'JNG_TICKET_SuperPower']);
    let self = this;

    if (list.has(ticket)) {
      //只有接收到特定标示才会死亡
      ClearChild(self.BlockPicDom);
      CPlants.prototype.Die.call(self);
    } else {
      SetAlpha($(self.id).childNodes[1], 1);
    }
  }
}),
    oCranberry = InheritO(CPlants, {
  EName: "oCranberry",
  CName: $__language_Array__["c0b63ce0c7fe3858a9c9015d30139d12"],
  width: 85,
  height: 77,
  beAttackedPointL: 10,
  beAttackedPointR: 50,
  SunNum: 50,
  HP: 600,
  coolTime: 7.5,
  Attack: 0,
  AttackedLX: 40,
  BerryNum: 1,
  StaticGif: 6,
  NormalGif: 1,
  coolTime: 5,
  AlmanacGif: 5,
  Tooltip: $__language_Array__["7f23527d23e9723788a6cb59f8ba8517"],
  Story: $__language_Array__["d099c4a02587237f5c2355ac2d8c5961"],
  PicArr: function () {
    var a = "images/Plants/Cranberry/";
    return ["images/Card/Cranberry.webp", a + "1.webp", a + "2.webp", a + "3.webp", a + "4.webp", a + "5.webp", a + "static.webp", a + "Bullet.webp", a + "BulletHit.webp", a + "Die.webp"];
  }(),
  getShadow: self => `left:${self.width * 0.5 - 48}px;top:${self.height - 30}px;`,

  PrivateBirth(self) {
    const id = self.id;
    self.growBigger(id, self);
    $(id).childNodes[1].src = self.PicArr[1];
    self.BulletEle = NewImg(0, self.PicArr[7], "left:" + self.AttackedLX + "px;top:" + (self.pixelTop + 15) + "px;visibility:hidden;z-index:" + (self.zIndex + 2));
    self.EleBody = $(id).childNodes[1];
    let date = null;
    self.EleClickArea = NewEle("clicking_cran" + Math.random(), "div", `opacity:0;position:absolute;height:60px;width:60px;top:${self.pixelTop + 25}px;left:${self.pixelLeft + self.beAttackedPointL}px;background:blue;z-index:30;`, {}, EDPZ);

    self.EleClickArea.onmousedown = function () {
      if (!oS.Chose && oSym.Timer && $P[id] && self.BerryNum >= 2) {
        date = new Date();
        oEffects.Animate(self.EleBody, {
          filter: "brightness(120%)"
        }, 0.2, 0);
      }
    };

    self.EleClickArea.onmouseup = function () {
      self.EleBody.style.filter = "";

      if (date && new Date() - date >= 200) {
        check();
      }
    };

    self.EleClickArea.ondblclick = check;

    function check() {
      if (!oS.Chose && oSym.Timer && $P[id] && self.BerryNum >= 2) {
        oEffects.Animate(self.EleBody, {
          transform: "scaleY(0.8)"
        }, 0.1 / oSym.NowSpeed);
        oSym.addTask(10, function () {
          oEffects.Animate(self.EleBody, {
            transform: "scaleY(1)"
          }, 0.1 / oSym.NowSpeed);
          oSym.addTask(2, function () {
            self.Shoot(self, 1);
            self.EleBody.src = self.PicArr[1];
            self.growBigger(id, self);
          });
        });
      }
    }

    self.EleClickArea.onmouseout = function () {
      self.EleBody.style.filter = "";
    };
  },

  PrivateDie(c, type = 0, dom) {
    if (!type) {
      return;
    }

    oSym.addTask(100 / 24 * 5, _ => {
      ClearChild(dom);
      PlayAudio("cherrybomb");
      let self = c,
          id = self.id,
          thisX = GetX(self.C),
          zombies = oZ.getArZ(thisX - 40, thisX + 40, self.R);
      zombies.forEach(zombie => zombie.Altitude < 2 && zombie.getHit1(zombie, 200));
      oEffects.ScreenShake();
      let eff = NewImg(0, self.PicArr[9], "left:" + c.pixelLeft + "px;top:" + c.pixelTop + "px;z-index:" + (c.zIndex - 2), EDPZ);
      oSym.addTask(100 / 24 * 19, _ => {
        ClearChild(eff);
      });
      self.Shoot(self);
    });
    self.HP = 0;
  },

  Shoot(self, min = 0) {
    (function LoopF(left) {
      if (left <= 3) {
        return;
      }

      self.ThrowAttack([20, 45][left - 4], left - 3);
      oSym.addTask(5, LoopF, [left - 1]);
    })(self.BerryNum);

    (function LoopF(left) {
      if (left <= min) {
        return;
      }

      let attack = left * 15;

      if (left == 1) {
        attack = 60;
      }

      self.BulletAttack(attack, 5 + left * 1.2);
      oSym.addTask(5, LoopF, [left - 1]);
    })(Math.min(self.BerryNum, 3));

    self.BerryNum = min;
  },

  Die: function (ticket) {
    ClearChild(this.EleClickArea);
    const list = new Set(['JNG_TICKET_MakeRifterZombie', 'JNG_TICKET_Gargantuar', 'JNG_TICKET_ThiefZombie', 'JNG_TICKET_SuperPower']);

    if (list.has(ticket)) {
      //只有接收到特定标示才会不爆炸死亡
      CPlants.prototype.Die.call(this);
      return;
    }

    var b = this,
        c = b.id;
    b.oTrigger && oT.delP(b);
    delete $P[c];
    delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
    let dom = $(c);
    oEffects.Animate(dom, {
      filter: "brightness(120%)"
    }, 5 / 24 / oSym.NowSpeed);
    b.PrivateDie(b, 1, dom);
  },
  BulletAttack: function (attackV, spd) {
    var a = this,
        b = "CB_" + Math.random(),
        w = a.id;
    EditEle(a.BulletEle.cloneNode(false), {
      //生产一个子弹img对象
      id: b
    }, 0, EDPZ);
    $(b).style.opacity = 0;
    $(b).style.filter = "brightness(120%)";
    oEffects.Animate($(b), {
      opacity: 1,
      filter: ""
    }, 0.5 / oSym.NowSpeed, 0);
    oSym.addTask(5, function (d) {
      PlayAudio(['throw', 'throw2'][Math.round(Math.random() * 1)]);
      var c = $(d);
      c && SetVisible(c);
    }, [b]);
    oSym.addTask(10, function fun(f, j, h, c, n, i, m
    /*豌豆属性：普通豌豆传0、寒冰豌豆传-1、火焰豌豆传1*/
    , k, o, g, u) {
      var l,
          e = GetC(n),
          d = oZ["getZ" + c](n + 3, i); //获取要攻击的僵尸对象

      if (u[i + "_" + e] && k != e) {
        ClearChild(j);
      } else {
        d && !d.isGoingDie && d.Altitude == 1 ? (d["getPea"](d, h, c), SetStyle(j, {
          left: o + 10 + "px"
        }).src = a.PicArr[8], oSym.addTask(30, ClearChild, [j])) : (n += l = !c ? spd : -spd) < oS.W && n > 100 ? (j.style.left = (o += l) + "px", oSym.addTask(1, fun, [f, j, h, c, n, i, m, k, o, g, u])) : ClearChild(j);
      }
    }, [b, $(b), attackV, 0, a.AttackedLX + 30, a.R, 0, 0, a.AttackedLX, oGd.$Torch, oGd.$Obstacle]);
  },
  growBigger: function (id, self) {
    let ele = $(id);
    oSym.addTask(500, function loopF(index = self.BerryNum + 1) {
      if ($P[id] && index < 6) {
        if (self.BerryNum + 1 != index) {
          return;
        }

        self.BerryNum++;

        if (self.BerryNum > 1) {
          self.EleClickArea.style.cursor = "pointer";
        } else {
          self.EleClickArea.style.cursor = "";
        }

        ele.childNodes[1].src = self.PicArr[index];
        oSym.addTask(500, loopF, [index + 1]);
      }
    });
  },
  get_S_Vx: oIceAloe.prototype.get_S_Vx,

  ThrowAttack(deltaM = 30, deltaAtt = 0) {
    let self = this;
    let ele = $(self.id);
    let zombieTarget = oZ.getRangeLeftZ(self.pixelLeft + self.beAttackedPointR, oS.W, self.R, true, true);
    if (!zombieTarget) return;
    let bullet = EditEle(self.BulletEle.cloneNode(), {
      id: "CB" + Math.random()
    }, 0, EDPZ);
    oSym.addTask(1, _ => {
      PlayAudio(self.AudioArr.slice(0, 2).random());
      SetVisible(bullet);
      bullet.style.opacity = 0;
      bullet.style.filter = "brightness(120%)";
      oEffects.Animate(bullet, {
        opacity: 1,
        filter: ""
      }, 0.1 / oSym.NowSpeed, 0);
      let x = self.pixelLeft + deltaM; //子弹横坐标

      let y = self.pixelTop + 10; //子弹纵坐标
      //子弹宽高

      let width = 12;
      let height = 20;
      let gravity = 0.2; //重力加速度，定值

      let vy = -10; //竖直方向速度，初速度为定值

      let zomRelativePos = zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] ? zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] : zombieTarget.HeadTargetPosition[0]; //僵尸和僵尸头部坐标

      let zY = Number.parseInt(zombieTarget.Ele.style.top) + zombieTarget.DivingDepth + zomRelativePos.y - height; //僵尸绝对纵坐标

      let zX = Number.parseInt(zombieTarget.Ele.style.left) + zomRelativePos.x - width; //投出时僵尸横坐标

      let zSpeed = !zombieTarget.isAttacking * zombieTarget.Speed * zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang];
      let [s, vx] = self.get_S_Vx([x, y], [zX, zY], vy, gravity, zSpeed); //获取距离和水平速度

      let x2 = x + s; //落点坐标

      let dt = 2; //更新时间

      let [lastX, lastY] = [x, y];
      let defAngle = Math.atan2(y + vy + gravity - lastY, x + vx - lastX);
      let bulletShadow = NewEle(`${self.id}_B_${Math.random()}_Shadow`, 'div', `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${self.pixelTop + self.height - 10}px;`, {
        className: 'Shadow'
      }, EDPZ);

      (function drawFrame() {
        vy += gravity * dt; //竖直方向的速度受重力加速度影响

        bullet.style.left = (x += vx * dt) + 'px';
        bulletShadow.style.left = x + 'px';
        bullet.style.top = (y += vy * dt) + 'px';
        bullet.style.transform = `rotate(${Math.atan2(y - lastY, x - lastX)}rad)`;

        if (!$Z[zombieTarget.id]) {
          //僵尸死亡的时候改变下落坐标
          zY = GetY(self.R) - 70;
        }

        if (x >= x2 && y >= zY && vy > 0 || s < 40) {
          //僵尸距离太小的情况
          bullet && (bullet.src = self.PicArr[8], oSym.addTask(30, ClearChild, [bullet]));
          $Z[zombieTarget.id] && zombieTarget.getHit0(zombieTarget, 35 + deltaAtt * 10);
          oEffects.fadeOut(bulletShadow, 1 / oSym.NowSpeed, ClearChild); //影子消失

          return;
        }

        oSym.addTask(dt, drawFrame);
        [lastX, lastY] = [x, y]; //重设上一个x,y
      })();
    });
  }

}),
    oMelonPult = InheritO(oCabbage, {
  EName: "oMelonPult",
  CName: $__language_Array__["8135472b90e9fd0a5dee9dff5fb18592"],
  width: 190,
  height: 120,
  beAttackedPointR: 60,
  SunNum: 300,
  AttackGif: 4,
  Attack: 80,
  coolTime: 5,
  AudioArr: ["CabbageAttack1", "CabbageAttack2", "melonimpact1", "melonimpact2"],
  PicArr: function () {
    var b = "images/Plants/MelonPult/",
        arr = [];

    for (let i = 1; i <= 7; i++) {
      arr.push(b + "piece" + i + ".webp");
    }

    return ["images/Card/MelonPult.webp", b + "0.webp", b + "static.webp", b + "Bullet.webp", b + "attack.webp"].concat(arr);
  }(),
  Tooltip: $__language_Array__["dbbd26c7680d757a144fe05143e6c7ea"],
  Story: $__language_Array__["4e8aa44f1cee3f25c2247ad71d2bf657"],

  PrivateBirth(a) {
    a.BulletEle = NewImg(0, a.PicArr[3], "left:" + (a.pixelLeft + 50) + "px;top:" + (a.pixelTop + 10) + "px;width:40px;visibility:hidden;z-index:" + (a.zIndex + 2));
  },

  CheckLoop(zid, direction) {
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(270 + Math.random() * 10 - 5, _ => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },

  HitZombie(zombieTarget, self, x2, zY, realX, realY) {
    if ($Z[zombieTarget.id]) {
      zombieTarget.getHit2(zombieTarget, self.Attack);
    }

    PlayAudio(self.AudioArr.slice(2, 4).random());

    for (let i = Math.max(1, self.R - 1); i <= Math.min(self.R + 1, 5); i++) {
      for (let zombie of oZ.getArZ(x2 - 50, x2 + 70, i)) {
        if (zombie != zombieTarget) {
          let attack = self.Attack;

          if (zombie.isPuppet) {
            attack += 60;
          }

          zombie.getHit2(zombie, zombie.isPuppet ? Math.floor(attack / 1.5) : Math.floor(attack / 3));
        }
      }
    }

    let obj = [];
    let C = GetC(zombieTarget.ZX),
        R = self.R;

    for (let i = 0; i < Math.round(5 + Math.random() * 4); i++) {
      let vy = 0.5 - Math.random() * 3;
      let ay = 0.2;
      let vx = Math.random() * 2 - 1;
      let rotate = Math.random() * 0.25 * (vx > 0 ? 1 : -1);
      let alpha = Math.random() * 0.8 + 1;
      let baseY = 50;
      let dy = baseY + Math.random() * 18 - 9;
      let ly = GetY(self.R) - 30 - (zY - 20) + (dy - baseY);
      obj.push({
        src: self.PicArr[Math.floor(Math.random() * 7) + 5],
        rotate: Math.random() * 360,
        x: 50 + Math.random() * 18 - 9,
        y: dy,
        width: Math.round(18 + (Math.random() * 6 - 2)),
        height: Math.round(18 + (Math.random() * 6 - 2)),

        move() {
          let self = this;
          self.x += vx;
          self.y += vy;
          vy += ay;
          self.y = Math.min(ly, self.y);

          if (self.y == ly) {
            if (oGd.$GdType[R][C] != 2) {
              vy = -vy / 3;
              rotate /= 1.2;
            } else {
              alpha -= 0.1;
            }
          }

          self.rotate += rotate;
          self.alpha = Math.max(0, Math.min(alpha, 1));
          alpha -= 0.05;
        }

      });
    }

    oEffects.Particle({
      height: 200,
      width: 100,
      style: `left:${realX + 70}px;top:${realY - 20}px;z-index:${self.zIndex + 2}`,

      canvasFunction(canvas) {
        oSym.addTask(45, _ => {
          oEffects.fadeOut(canvas, 0.25 / oSym.NowSpeed, ClearChild);
        });
      },

      objects: obj
    });
  },

  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif];
  },

  NormalAttack(zid) {
    let self = this;
    let ele = $(self.id);
    let zombieTarget = oZ.getRangeLeftZ(self.pixelLeft + self.beAttackedPointR, oS.W, self.R, true);
    if (!zombieTarget) return;
    let bullet = EditEle(self.BulletEle.cloneNode(), {
      id: "CB" + Math.random()
    }, 0, EDPZ);
    self.AttackAnim(ele, self);
    oSym.addTask(265, _ => $P[self.id] && (ele.childNodes[1].src = self.PicArr[self.NormalGif]));
    oSym.addTask(90, _ => {
      PlayAudio(self.AudioArr.slice(0, 2).random());
      SetVisible(bullet);
      let x = self.pixelLeft + 30; //子弹横坐标

      let y = self.pixelTop; //子弹纵坐标
      //子弹宽高

      let width = 10;
      let height = 20;
      let gravity = 0.2; //重力加速度，定值

      let vy = -10; //竖直方向速度，初速度为定值

      let zomRelativePos = zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] ? zombieTarget.HeadTargetPosition[zombieTarget.isAttacking] : zombieTarget.HeadTargetPosition[0]; //僵尸和僵尸头部坐标

      let zY = Number.parseInt(zombieTarget.Ele.style.top) + zombieTarget.DivingDepth + zomRelativePos.y - height; //僵尸绝对纵坐标

      let zX = Number.parseInt(zombieTarget.Ele.style.left) + zomRelativePos.x - width; //投出时僵尸横坐标

      let zSpeed = !zombieTarget.isAttacking * zombieTarget.Speed * zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang];
      let [s, vx] = self.get_S_Vx([x, y], [zX, zY], vy, gravity, zSpeed); //获取距离和水平速度

      let x2 = x + s; //落点坐标

      let dt = 2; //更新时间

      let defAngle = Math.floor(Math.random() * 20 - 10);
      let rotSpd = Math.floor(Math.random() * 6 + 3);
      let bulletShadow = NewEle(`${self.id}_B_${Math.random()}_Shadow`, 'div', `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${self.pixelTop + self.height - 10}px;`, {
        className: 'Shadow'
      }, EDPZ);

      (function drawFrame() {
        vy += gravity * dt; //竖直方向的速度受重力加速度影响

        bullet.style.left = (x += vx * dt) + 'px';
        bulletShadow.style.left = x + 'px';
        bullet.style.top = (y += vy * dt) + 'px';
        bullet.style.transform = `rotate(${defAngle += rotSpd * dt}deg)`;

        if (!$Z[zombieTarget.id]) {
          //僵尸死亡的时候改变下落坐标
          zY = GetY(self.R) - 70;
        }

        if (x >= x2 && y >= zY && vy > 0 || s < 40) {
          //僵尸距离太小的情况
          ClearChild(bullet);
          self.HitZombie(zombieTarget, self, x2, zY, x, y - vy * dt);
          ClearChild(bulletShadow); //影子消失

          return;
        }

        oSym.addTask(dt, drawFrame);
      })();
    });
  }

}),
    //实验室
oAbutilonHybriden = InheritO(CPlants, {
  EName: "oAbutilonHybriden",
  CName: $__language_Array__["e009e8a75dd0b7a601e63464211c43a1"],
  SunNum: 25,
  canEat: 0,
  coolTime: 20,
  width: 216,
  height: 164,
  Immediately: true,
  FlyingPlant: true,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  PicArr: function () {
    var a = "images/Plants/AbutilonHybriden/";
    return ["images/Card/AbutilonHybriden.webp", a + "0.gif", a + "AbutilonHybriden.gif", 'images/Zombies/buff_vertigo.webp', a + "Firefly.gif", a + "shadow.png"];
  }(),
  AudioArr: ["AbutilonHybriden"],
  Tooltip: $__language_Array__["77df58f30d4b8715f83f2236f0862e2b"],
  Story: $__language_Array__["417434df90277b5aadd1ae9eba62ae38"],
  InitTrigger: function () {},
  PrivateBirth: function (a) {
    oSym.addTask(400, function (b) {
      var e = $P[b],
          d,
          f;
      e && (d = e.R, f = e.C, e.Die(), PlayAudio("AbutilonHybriden"), !oGd.$[d + "_" + f + "_1"] && CustomSpecial(oFirefly, d, f));
    }, [a.id]);
  }
}),
    oFirefly = InheritO(oStoneFlower, {
  //金铃花产物
  EName: "oFirefly",
  canEat: 0,
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  Attack: 20,
  getShadow: function (a) {
    return "display:none";
  },
  PicArr: ["", "", "images/Plants/AbutilonHybriden/Firefly.gif"],
  HP: 300,
  PrivateBirth: function (self) {
    self.ArZ = {};
    oSym.addTask(3000, _ => {
      //死亡倒计时
      let obj = $P[self.id];
      obj && obj.Die();
    });
  },
  BirthStyle: function (c, d, b, a) {
    b.childNodes[1].src = this.PicArr[2];
    EditEle(b, {
      id: d,
      'data-jng-constructor': c.EName
    }, a, EDPZ);
    NewImg(d + "_shadow", "images/Plants/AbutilonHybriden/shadow.png", "left:" + c.pixelLeft + "px;top:" + (c.pixelTop + 20) + "px;z-index:" + (c.zIndex - 2), EDPZ);
  },
  NormalAttack: function (b, a) {
    PlayAudio("Artichoke_Attack");
    var c = $Z[b];
    c.getVertigo(c, this.Attack, 0);
  },
  Die: function () {
    let self = this,
        id = self.id,
        shadow = self.id + "_shadow";
    self.oTrigger && oT.delP(self); //注销侦测器

    self.HP = 0;
    delete $P[id];
    delete oGd.$[self.R + "_" + self.C + "_" + self.PKind];
    oEffects.fadeOut($(id), 'fast', ClearChild);
    oEffects.fadeOut($(shadow), 'fast', ClearChild);
  }
}),
    oPumpkinHead = InheritO(CPlants, {
  EName: "oPumpkinHead",
  CName: $__language_Array__["d542a474510bad3f8338d9e7dc0ab9f7"],
  width: 97,
  height: 67,
  beAttackedPointL: 15,
  beAttackedPointR: 82,
  SunNum: 125,
  PKind: 2,
  HP: 4000,
  coolTime: 25,
  zIndex: 1,
  BackId: null,
  AlmanacGif: 5,
  PicArr: function () {
    var a = "images/Plants/PumpkinHead/";
    return ["images/Card/PumpkinHead.webp", a + "0.gif", a + "Pumpkin_back.gif", a + "pumpkin_damage1.gif", a + "Pumpkin_damage2.gif", a + "PumpkinHead1.gif"];
  }(),
  Tooltip: $__language_Array__["1f62f6f6e4092b7c4852f97c6d7f9109"],
  Story: $__language_Array__["d8a786ccd72d0dee62b92dda03f1bd4f"],

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`;
    let [d0, d1, d2] = data;

    if (d2 && d2.EName === 'oPumpkinHead' && d2.HurtStatus > 0) {
      return true;
    }

    if ((oGd.$GdType[R][C] === 1 || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0 || d0) && !(d2 || C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord])) {
      return d1 ? d1.canShovel : true;
    }
  },

  GetDY: function (b, c, a) {
    return a[0] ? -12 : -5;
  },
  HurtStatus: 0,
  RefreshImg: function () {
    //修复背面动画不同步Bug
    $(this.BackId).src = "images/Plants/PumpkinHead/Pumpkin_back.gif";
  },
  getHurt: function (e, c, b) {
    var d = this,
        f = d.id,
        a = $(f);
    d.SetBrightness(d, a, 1);
    oSym.addTask(10, () => {
      $P[f] && d.SetBrightness(d, a, 0);
    });

    switch (true) {
      case c && c < 3:
        d.Die(1);
        break;

      case (d.HP -= b) < 1:
        d.Die();
        break;

      case d.HP < 1334:
        d.HurtStatus < 2 && (d.HurtStatus = 2, a.childNodes[1].src = "images/Plants/PumpkinHead/pumpkin_damage2.gif", d.RefreshImg());
        break;

      case d.HP < 2667:
        d.HurtStatus < 1 && (d.HurtStatus = 1, a.childNodes[1].src = "images/Plants/PumpkinHead/pumpkin_damage1.gif", d.RefreshImg());
    }
  },
  InitTrigger: function () {},

  BirthStyle(c, d, b, a) {
    b.childNodes[1].src = "images/Plants/PumpkinHead/PumpkinHead1.gif";
    EditEle(b, {
      id: d,
      'data-jng-constructor': c.EName
    }, a, EDPZ);
    this.BackId = "PBack_" + Math.random();
    let dom = NewImg(this.BackId, "images/Plants/PumpkinHead/Pumpkin_back.gif", b.style.cssText, EDPZ);
    oSym.addTask(1, function () {
      //在生成完后复制所有样式不然可能会有样式没有复制
      dom.style = b.style.cssText;
      SetStyle(dom, {
        "left": c.pixelLeft + "px",
        "top": c.pixelTop + "px",
        "zIndex": c.zIndex - 2
      });
    });
  },

  PrivateDie: function (a) {
    ClearChild($(a.BackId));
  }
}),
    oMiracleImitater = InheritO(oStoneFlower, {
  EName: "oMiracleImitater",
  CName: $__language_Array__["c6f2dedc6f50659a6f2c5a50a37c8d8e"],
  width: 109,
  height: 124,
  beAttackedPointL: 23,
  beAttackedPointR: 60,
  SunNum: 75,
  HP: 2000,
  coolTime: 20,
  AudioArr: ["Imitater"],
  PicArr: function () {
    var a = "images/Plants/MiracleImitater/";
    return ["images/Card/MiracleImitater.webp", a + "0.png", a + "MiracleImitater.gif", a + "Die.gif"];
  }(),
  Attack: 20,
  Tooltip: $__language_Array__["031d1df4beacda78f76520000bea498c"],
  Story: $__language_Array__["acc651b7362dcef798aca5d90cefe4a0"],
  NormalAttack: function (b, a) {
    PlayAudio("Artichoke_Attack");
    var c = $Z[b],
        y = this;
    c.getHit2(c, y.Attack, 0);
  },
  Die: function (ticket) {
    const self = this,
          whitelist = new Set([`JNG_TICKET_MembraneZombie`, `JNG_TICKET_IceStorm`, 'JNG_TICKET_Gargantuar', 'JNG_TICKET_MakeRifterZombie', 'JNG_TICKET_ThiefZombie', "JNG_TICKET_SuperPower"]);

    if (whitelist.has(ticket)) {
      //特殊情况直接死亡
      CPlants.prototype.Die.call(self);
    } else {
      PlayAudio("Imitater");
      let id = self.id,
          r = self.R,
          c = self.C;
      self.oTrigger && oT.delP(self);
      self.HP = 0;
      $(id).childNodes[1].src = 'images/Plants/MiracleImitater/Die.gif';
      delete oGd.$[r + "_" + c + "_" + self.PKind];
      oEffects.fadeOut($(id).childNodes[1], 1.5, function () {
        let arr = [oAbutilonHybriden, oPumpkinHead, oJalapeno, oMacintosh, oXshooter];
        !oGd.$[r + "_" + c + "_1"] && CustomSpecial(arr.random(), r, c);
        ClearChild($(id));
        delete $P[id];
      });
    }
  }
}),
    oJalapeno = InheritO(oCherryBomb, {
  EName: "oJalapeno",
  CName: $__language_Array__["0e925b8e1e8dad9025d7c9cbdd8e0894"],
  width: 76,
  height: 105,
  beAttackedPointR: 48,
  SunNum: 125,
  coolTime: 30,
  PicArr: ["images/Card/Jalapeno.webp", "images/Plants/Jalapeno/0.webp", "images/Plants/Jalapeno/Jalapeno.webp", "images/Plants/Jalapeno/JalapenoAttack.webp"],
  AudioArr: ["jalapeno"],
  Tooltip: $__language_Array__["3d4c9c12eff8d545e46b0170395a5290"],
  Story: $__language_Array__["9c1743cd84d9ea294ab7b20a30e36277"],

  PrivateBirth(self) {
    oSym.addTask(80, id => {
      let obj = $P[id];

      if (obj) {
        PlayAudio("jalapeno");
        let ele = $(id),
            R = obj.R,
            $Ice = oGd.$Ice[R],
            fireId = `${id}_Fire`,
            ima = 0;
        let rememberZombies = {}; //烧僵尸（火的灼烧会持续一段时间）

        (function burn() {
          let zombieArr = oZ.getArZ(100, 880, R);
          zombieArr.forEach(zombie => {
            if (!rememberZombies[zombie.id]) {
              zombie.getExplosion();
              rememberZombies[zombie.id] = true;
            }
          });
          ima < 3 && (ima++, oSym.addTask(50, burn));
        })(); //除冰道


        ClearChild($("dIceCar" + R));

        if ($Ice) {
          for (let leftBorder = $Ice[1], $Crater = oGd.$Crater; leftBorder < 11; leftBorder++) {
            delete $Crater[R + "_" + leftBorder];
          }
        }

        obj.Die('JNG_TICKET_SuperPower');
        let effect = NewImg(fireId, self.PicArr[3], `position: absolute;left:130px;top:${obj.pixelBottom - 83}px;z-index:${obj.zIndex + 1}`, EDPZ, {
          width: 752,
          height: 103
        });
        oSym.addTask(160, ClearChild, effect);
      }
    }, [self.id]);
  }

}),
    oXshooter = InheritO(oPeashooter, {
  EName: "oXshooter",
  CName: $__language_Array__["fb18f28095397473086f7aa0f8622718"],
  SunNum: 225,
  HP: 500,
  StaticGif: 1,
  NormalGif: 2,
  AttackGif: 3,
  FlowerGif: 4,
  LeafGif: 6,
  height: 92,
  width: 77,
  beAttackedPointL: 30,
  beAttackedPointR: 35,
  Tooltip: $__language_Array__["3b99a27a753c53b3ce5d037c760d674e"],
  Story: $__language_Array__["6237aea4db95b269f5ff469b759108c0"],
  getTriggerRange: (R, LX, RX) => [[0, oS.W, 0]],
  PicArr: function () {
    var a = "images/Plants/Xshooter/";
    return ["images/Card/Xshooter.webp", a + "idle.webp", a + "Normal.webp", a + "Attack.webp", a + "Bullet_Flower.webp", a + "Bullet_Flower_Splash.webp", a + "Bullet_Leaf.webp", a + "Bullet_Leaf_Splash.webp"];
  }(),
  getShadow: self => `left:${self.width * 0.5 - 48}px;top:${self.height - 22}px;transform:scale(0.75);`,
  BirthStyle: (self, id, ele, style) => {
    EditEle(ele.childNodes[1], {}, {
      left: "-7px",
      top: "5px"
    });
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },
  PrivateBirth: function (a) {
    a.FlowerEle = NewImg(0, a.PicArr[a.FlowerGif], "left:" + a.AttackedLX + "px;top:" + (a.pixelTop + 15) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
    a.BulletEle = NewImg(0, a.PicArr[a.LeafGif], "left:" + a.AttackedLX + "px;top:" + (a.pixelTop + 15) + "px;visibility:hidden;z-index:" + (a.zIndex + 2));
  },
  getTriggerR: selfR => [selfR != 1 ? selfR - 1 : selfR, selfR != oS.R ? selfR + 1 : selfR],
  getHurt: function (zombie, AKind, Attack) {
    const o = this,
          id = o.id,
          ele = $(id).childNodes[1];
    o.SetBrightness(o, ele, 1);
    oSym.addTask(10, _ => $P[id] && o.SetBrightness(o, ele, 0));
    !(AKind % 3) ? (zombie && zombie.getHit1(zombie, 80), (o.HP -= Attack / 2) < 1 && o.Die()) : o.Die();
  },
  CheckLoop: function (b, c) {
    var a = this.id;

    if ($P[a]) {
      this.NormalAttack(b);
      oSym.addTask(280, function (e, f, h) {
        var g;
        (g = $P[e]) && g.AttackCheck1(f, h);
      }, [a, b, c]);
    }
  },

  getPosition(x, distance = 900, pi = Math.PI) {
    return Math.sin(x * ((distance > 400 ? 4 : 2) * pi / distance)) * 4;
  },

  SpecialBullet(g, f, d, b, c, e, point, a, theZ, type, dist = 100) {
    let AttackType = 0;

    if (theZ.ZX < d) {
      AttackType = 1;
    }

    ;

    (function (h) {
      oSym.addTask(1, function (j) {
        var i = $(j);
        i && SetVisible(i);
      }, [h]);
      oSym.addTask(1, function shoot(n, l, m, k, i, j, speed = 4 * dist / 100, moveType = 1, distance = false, hig = false) {
        let tmpX = m,
            tmpY = k;

        if (n > 1000 || k < -40) {
          ClearChild(i);
          hig = true;
        } else {
          if ((type === 0 ? k < b - dist || k < 50 : k > b + dist || k > 590) && moveType < 2) {
            moveType = 2;
          }

          if (moveType === 1) {
            let g = Math.sqrt(Math.abs(m - f));
            SetStyle(i, {
              left: (m += speed = Math.max(speed - 0.1, 1.5)) + "px",
              top: (k = b + (type === 1 ? g : -g) * 10) + "px"
            });
          } else if (moveType === 2) {
            let g = Math.sqrt(Math.abs(m - f));

            if (theZ && $Z[theZ.id]) {
              SetStyle(i, {
                left: (m += speed = Math.max(speed - 0.03, 0.08)) + "px",
                top: (k = b + (type === 1 ? g : -g) * 10) + "px"
              });

              if (speed == 0.08) {
                moveType = 3;
              }
            } else {
              SetStyle(i, {
                left: (m += speed += 0.2) + "px",
                top: k + "px"
              });
              !j(oZ.getZ0(n, l), 0, i, 0, 80) && (hig = true);
            }
          } else {
            if (theZ && $Z[theZ.id]) {
              speed = Math.min(speed + 0.2, 7);

              if (theZ.ZX > m) {
                m += speed;
              } else {
                m -= speed;
              }

              if (!distance) {
                distance = Math.abs(theZ.ZX - m);
                hig = Math.abs(theZ.pixelTop + theZ.height / 2 - k);
              }

              let deltaX = Math.abs(theZ.ZX - m),
                  deltah = hig * (deltaX / distance),
                  zhig = theZ.pixelTop + theZ.height / 2;
              SetStyle(i, {
                left: m + "px",
                top: (k = zhig + (k >= zhig ? deltah : -deltah)) + "px"
              });

              if (deltaX < 10) {
                m = theZ.ZX;
                k = zhig;
                !j(theZ, AttackType, i) && (hig = true, i.src = g.PicArr[g.FlowerGif + 1]);
              }
            } else {
              if (theZ.ZX < m) {
                speed = -speed;
                moveType = 2;
              } else {
                moveType = 2;
              }
            }
          }

          if (hig !== true) {
            SetStyle(i, {
              transform: $User.LowPerformanceMode ? "" : `rotate(${Math.atan2(k - tmpY, m - tmpX)}rad)`
            });
            oSym.addTask(1, shoot, [m, GetR(k + 15), m, k, i, j, speed, moveType, distance, hig]);
          }
        }
      }, [f, c, d, b, EditEle(g.FlowerEle.cloneNode(false), {
        id: h
      }, 0, EDPZ), a]);
    })("NiBulletB" + Math.random());
  },

  NormalAttack() {
    var g = this,
        f = g.pixelLeft,
        d = f + 10,
        b = g.pixelTop + 20,
        c = g.R,
        e = f + 15,
        point = 17,
        a = function (j, i, h, time = 15, p = point) {
      return j && j.Altitude == 1 ? (j.getPea(j, p, i), oSym.addTask(time, ClearChild, [h]), false) : true;
    };

    function zombieF(z) {
      return z.Altitude > 0 && z.Altitude < 3;
    }

    let theZ = oZ.getRangeLeftZ(e, 900, g.R, false, false, zombieF);

    if (!theZ) {
      theZ = oZ.getRangeLeftZ(0, 900, g.R, false, false, zombieF);
    }

    $(g.id).childNodes[1].src = g.PicArr[g.AttackGif];
    oSym.addTask(50, _ => {
      if (theZ && $Z[theZ.id] && $P[g.id]) {
        PlayAudio("throw" + ["", 2].random()); //sin

        if (theZ.ZX - e > 0) {
          (function (h) {
            oSym.addTask(15, function (j) {
              var i = $(j);
              i && SetVisible(i);
            }, [h]);
            oSym.addTask(1, function shoot(n, l, m, k, i, j, tmp) {
              theZ.ZX && (tmp = theZ.ZX);
              let [tmpX, tmpY] = [m, k];
              j(oZ.getZ0(n, l), 0, i, 15, 20) ? n > 900 || k < -40 ? ClearChild(i) : (SetStyle(i, {
                left: (m += 4) + "px",
                top: (k = k + g.getPosition(m - d, tmp - d)) + "px",
                transform: $User.LowPerformanceMode ? "" : `rotate(${Math.atan2(k - tmpY, m - tmpX)}rad)`
              }), oSym.addTask(1, shoot, [m + 8, GetR(k + 15), m, k, i, j, tmp])) : i.src = g.PicArr[g.LeafGif + 1];
            }, [f, c, d, b, EditEle(g.BulletEle.cloneNode(false), {
              id: h
            }, 0, EDPZ), a]);
          })("NiBulletB" + Math.random());

          (function (h) {
            oSym.addTask(15, function (j) {
              var i = $(j);
              i && SetVisible(i);
            }, [h]);
            oSym.addTask(1, function shoot(n, l, m, k, i, j, tmp) {
              theZ.ZX && (tmp = theZ.ZX);
              let [tmpX, tmpY] = [m, k];
              j(oZ.getZ0(n, l), 0, i, 15, 20) ? n > 900 || k < -40 ? ClearChild(i) : (SetStyle(i, {
                left: (m += 4) + "px",
                top: (k = k - g.getPosition(m - d, tmp - d)) + "px",
                transform: $User.LowPerformanceMode ? "" : `rotate(${Math.atan2(k - tmpY, m - tmpX)}rad)`
              }), oSym.addTask(1, shoot, [m + 8, GetR(k + 15), m, k, i, j, tmp])) : i.src = g.PicArr[g.LeafGif + 1];
            }, [f, c, d, b, EditEle(g.BulletEle.cloneNode(false), {
              id: h
            }, 0, EDPZ), a]);
          })("NiBulletB" + Math.random());
        } //自机狙


        g.SpecialBullet(g, f, d, b, c, e, point, a, theZ, 0);
        g.SpecialBullet(g, f, d, b, c, e, point, a, theZ, 1);
      }

      {
        //全屏自机狙
        let z,
            triggerR = g.getTriggerR(g.R);
        let rand = [[triggerR[0], triggerR[1], 1], [triggerR[1], triggerR[0], -1]].random();

        for (let i = rand[0]; rand[2] == 1 ? i <= rand[1] : i >= rand[1]; i += rand[2]) {
          let tmp = oZ.getRangeLeftZ(0, 900, i, false, false, zombieF);

          if (tmp && (!z || tmp.ZX < z.ZX)) {
            z = tmp;
          }
        }

        if (z && $Z[z.id]) {
          g.SpecialBullet(g, f, d, b, c, e, 15, a, z, 0, 50);
          g.SpecialBullet(g, f, d, b, c, e, 15, a, z, 1, 50);
        }
      }
    });
    oSym.addTask(130, function () {
      if ($P[g.id]) {
        $(g.id).childNodes[1].src = g.PicArr[g.NormalGif];
      }
    });
  }

}),
    oMacintosh = InheritO(oWallNut, {
  EName: "oMacintosh",
  CName: $__language_Array__["b83fb4f5cdd559d7ee573f099eb0c7a2"],
  HP: 3700,
  coolTime: 10,
  SunNum: 125,
  width: 82,
  Tooltip: $__language_Array__["b93541bd7e045f3e6e6c591c197814e8"],
  Story: $__language_Array__["99c25c5754db80d8b89ff80c013ba36e"],
  height: 108,
  Sons: [],
  BirthStyle: (self, id, ele, style) => {
    EditEle(ele.childNodes[1], {}, {
      top: "5px",
      left: "-5px"
    });
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`;

    if (oGd.$GdType[R][C] === 1 || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0) {
      //如果是草地地形
      return !(C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord] || data[1]);
    } else {
      //如果是非草地地形则检测有无空容器
      return data[0] && !data[1];
    }
  },

  CheckLoop() {
    return false;
  },

  Check: function (R, C) {
    let data = [];

    for (let f = 0, _$ = oGd.$; f <= PKindUpperLimit; f++) {
      data.push(_$[R + "_" + C + "_" + f]);
    }

    return o8BitApple.prototype.CanGrow(data, R, C);
  },
  PicArr: function () {
    var a = "images/Plants/Macintosh/";
    return ["images/Card/Macintosh.webp", a + "Static.webp", a + "Normal.webp", a + "Summon.webp"];
  }(),
  getHurt: CPlants.prototype.getHurt,

  PrivateBirth(self) {
    self.Sons = [];
    self.EleBody = $(self.id).childNodes[1];
    oSym.addTask(150, function d() {
      if (!$P[self.id]) {
        return;
      }

      self.SummonApple(self);
      oSym.addTask(950, d);
    });
  },

  SummonApple(self) {
    const r = self.R;
    let c = -3;

    for (let i = self.C + 1; i <= oS.C; i++) {
      if (!self.Check(r, i)) {
        continue; //break;
      }

      let obj = oGd.$[r + "_" + i + "_" + 4];

      if (obj && obj.EName == "o8BitApple") {
        continue;
      }

      if (!obj) {
        c = i;
        break;
      } else if (obj.HP < o8BitApple.prototype.HP && obj.canShovel) {
        c = i;
        break;
      }
    }

    if (c > 0) {
      self.Sons.push(CustomSpecial(o8BitApple, r, c));
      self.EleBody.src = self.PicArr[3];
      oSym.addTask(137, function () {
        if (!$P[self.id]) {
          return;
        }

        for (let i = 0; i < self.Sons.length; i++) {
          !$P[self.Sons[i].id] && self.Sons.splice(i, 1);
        }

        self.EleBody.src = self.PicArr[2];
      });
    }
  },

  PrivateDie(self) {
    for (let i of self.Sons) {
      if ($P[i.id]) {
        i.Die("JNG_TICKET_8BitApple");
      }
    }
  }

}),
    //其他
//一些道具
oFlowerPot = InheritO(CPlants, {
  EName: "oFlowerPot",
  CName: $__language_Array__["beae69d7cbebeeaedcb27b91f2ca2f16"],
  width: 82,
  height: 58,
  beAttackedPointR: 52,
  SunNum: 25,
  Tooltip: $__language_Array__["c7a2646b8db2017aa29380adf95f42da"],
  Story: $__language_Array__["74f6e772f99bc139f16339902e5da905"],
  HP: 1000,
  PicArr: ["images/Card/FlowerPot.webp", "images/Plants/FlowerPot/FlowerPot.png", "images/Plants/FlowerPot/FlowerPot.png"],
  PKind: 0,
  Stature: -1,

  CanGrow(plantArgs, R, C) {
    let flatCoord = R + "_" + C;
    return oGd.$GdType[R][C] != 2 && !(!oGd.$GdType[R][C] || C < 1 || C > 9 || plantArgs[1] || plantArgs[2] || plantArgs[0] || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord]);
  },

  InitTrigger: function () {}
}),
    oLilyPad = InheritO(oFlowerPot, {
  EName: "oLilyPad",
  CName: $__language_Array__["548a2fae40d86121ee19520bfd53af6c"],
  width: 82,
  height: 58,
  beAttackedPointR: 52,
  SunNum: 25,
  Tooltip: $__language_Array__["6955fca154809bbd03d4eac2995564ed"],
  Story: $__language_Array__["74f6e772f99bc139f16339902e5da905"],
  HP: 250,

  getShadow() {
    return "display:none;";
  },

  PicArr: ["images/Card/FlowerPot.webp", "images/Plants/FlowerPot/FlowerPot.png", "images/Plants/FlowerPot/FlowerPot.png"],
  PKind: 0,
  Stature: -1,

  CanGrow(plantArgs, R, C) {
    let flatCoord = R + "_" + C;
    return !(oGd.$GdType[R][C] != 2 || C < 1 || C > 9 || plantArgs[0] || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord]);
  },

  BirthStyle: (self, id, ele, style) => {
    style.zIndex = self.zIndex -= 1;
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },
  InitTrigger: function () {}
}),
    oLight = InheritO(CPlants, {
  EName: "oLight",
  CName: $__language_Array__["577e5bed8282c3a5e5b3ac19c435f059"],
  SunNum: 0,
  canEat: 0,
  coolTime: 40,
  width: 71,
  height: 71,
  Immediately: true,
  FlyingPlant: false,
  beAttackedPointR: 51,
  PicArr: function () {
    var a = "images/Props/Light/";
    return ["images/Card/Light.webp", a + "p.gif", a + "Light.gif"];
  }(),
  Tooltip: $__language_Array__["c79f686c3c6bc2d10f158f90bfd04f65"],
  Story: $__language_Array__["57fb1f07dba7e7bded7fda6feb3ec9df"],
  GetDY: function (b, c, a) {
    return -30;
  },
  InitTrigger: function () {},
  PrivateBirth: function (a) {
    oSym.addTask(40, function (b) {
      var e = $P[b],
          c,
          d,
          f;
      e && (d = e.R, f = e.C, e.Die(), oS.StaticCard && AppearSun(GetX(f) - Math.random() * 41, GetY(d), 300, 0));
    }, [a.id]);
  }
}),
    oLightCS = InheritO(oLight, {
  coolTime: 7.5
}),
    olSPCase = InheritO(CPlants, {
  //保护膜实例
  EName: "olSPCase",
  width: 67,
  height: 87,
  beAttackedPointL: 15,
  beAttackedPointR: 60,
  PKind: 4,
  HP: Infinity,
  zIndex: 2,
  Tools: true,
  getShadow: () => "display:none",
  GetDBottom: () => 72,

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`; //如果当前格为草坪（或有花盆容器）且未越界，那么判定当前格[1]位置（常规植物）的情况
    //如果当前格存在不可铲除的障碍物，不允许种植；否则即刻种植

    if ((oGd.$GdType[R][C] === 1 || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0 || data[0]) && !(C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord])) {
      return data[1] ? data[1].canShovel : true;
    }
  },

  BirthStyle(self, id, ele, style) {
    ele.childNodes[1].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABIBAMAAABVf/vRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURdbW2MjJy+fo6UxpcdXV1svLzT6ksp4AAAAGdFJOU8zMzAA8imZsnvsAAAHySURBVEjHvZXNTuswEEa/seh+LGBv5QluVboH2u5Bun7/V2H+7DghrRAInC7SOT4zY7tpcLg18AV6Pp/m0NP8DYeny9s0FejYVWDSUZBrrSehz5MH5JqHzuV7oS/wcAJSClgsl1MJt/lBE0Zq4dKpq0afMeBQ00BZwkWzI31yX+0uJW0pjar1/OoTkXrHQdFpQtER0Chh4UptgyXKBjVZ7RR5jfKibvGt0vYSCWtuiq4QiylaFOzrLVFW60p2y8xg7+pf7yrZB5KLFDqNPTe7aG/WUnMnoGPV5SIZWFHL6ztBxLyksWydYnDt9kFZrjUt7UYghsw0t91c4OFK5pzV7ZRoTZurufiqG+fFS8q87TKRUJoz6+q7TOZKJ0HtvG66ubctSca6Es/6WwlMo7vvbtTOSnWuU4JBO1NmAXlwNaeeiZgSkyq2VdHzXgKSyib4jGyZgbvuKrakWiRcp5njO6uTHceK9qRtWCd5vtMlmkst4PXiXtxdd9eDZHd3S3eBydzjJuXIfLzieuZj9s254uYfufiBSzdd+mM3KNPWGTE3ik2XjMJ+vuu6TvexGf4ItGGPk9JZ04eosXBfeFXO3k/6oNIJh/et88v2N6x0a7XaF6B0DNX6X1+v5/OlSrzTx1oXL2F7Dwu9+PRvv9l/g34AN7WqFkcqQWsAAAAASUVORK5CYII=';
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  PrivateBirth(self) {
    oSym.addTask(1500, () => {
      const o = $P[self.id];
      o && o.Die('JNG_TICKET_lSPCase');
    });
  },

  InitTrigger() {},

  Die(ticket) {
    const list = new Set(['JNG_TICKET_lSPCase', "JNG_TICKET_ThiefZombie", 'JNG_TICKET_ShovelPlant', 'JNG_TICKET_IceStorm', 'JNG_TICKET_Gargantuar', 'JNG_TICKET_MakeRifterZombie', "JNG_TICKET_ThiefZombie", "JNG_TICKET_SuperPower"]);

    if (list.has(ticket)) {
      //只有接收到特定标示才会死亡
      CPlants.prototype.Die.call(this);
    }
  }

}),
    o8BitApple = InheritO(oStoneFlower, {
  EName: "o8BitApple",
  HP: 800,
  Attack: 15,
  width: 82,
  height: 106,
  PKind: 4,
  FlyingPlant: true,
  Tools: true,
  getShadow: _ => {
    return "display:none";
  },

  BirthStyle(self, id, ele, style) {
    style.opacity = 0.5;
    style.zIndex++;
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  PicArr: function () {
    var a = "images/Plants/Macintosh/";
    return ["", a + "Little_Born.webp", a + "Little_Normal.webp", a + "Little_Attack.webp", a + "Little_Die.webp"];
  }(),
  AudioArr: ["8BitAppleAttack", "8BitAppleSummon", "8BitAppleDie"],
  NormalAttack: function (zid) {
    PlayAudio("8BitAppleAttack");
    let zombie = $Z[zid],
        o = this,
        pid = o.id;
    !o.isAttacking && ($(pid).childNodes[1].src = o.PicArr[3], o.isAttacking = 1, oSym.addTask(128, function fun() {
      if ($P[pid]) {
        o.ArZ.length < 1 ? ($(pid).childNodes[1].src = o.PicArr[2], o.isAttacking = 0) : oSym.addTask(128, fun);
      }
    }));
    zombie.getHit2(zombie, o.Attack, 0);
  },
  GetDX: self => -Math.floor(self.width * 0.5) - 10,
  GetDY: (R, C, arg) => 0,
  GetDBottom: function () {
    return 50;
  },

  PrivateBirth(self) {
    self.ArZ = {};
    self.EleBody = $(self.id).childNodes[1];
    self.EleBody.src = self.PicArr[1];
    PlayAudio("8BitAppleSummon");
    oSym.addTask(79, function () {
      $P[self.id] && (self.EleBody.src = self.PicArr[self.isAttacking ? 3 : 2]);
    });
  },

  Die(ticket) {
    let b = this,
        c = b.id;
    b.oTrigger && oT.delP(b);
    b.HP = 0;
    delete $P[c];
    delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
    b.PrivateDie(b);
    b.EleBody.src = b.PicArr[4];
    PlayAudio("8BitAppleDie");
    oSym.addTask(100, function () {
      let self = b,
          id = self.id,
          zombies = oZ.getArZ(self.pixelLeft - 40, self.pixelRight + 80, self.R);
      zombies.forEach(zombie => zombie.Altitude < 2 && zombie.getHit2(zombie, self.Attack * 10, 0));
    });
    oSym.addTask(154, function () {
      ClearChild($(c));
    });
  },

  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft - 80, this.pixelRight + 80, 0]];
  },
  TriggerCheck: function (i, h) {
    var c = i.id,
        g = this.ArZ,
        a,
        b,
        e,
        f;
    i.PZ && !g[c] && (a = i.AttackedLX, b = i.AttackedRX, e = this.AttackedLX, f = this.AttackedRX, a <= f && a >= e || b <= f && b >= e || a <= e && b >= f) && this.AttackCheck2(i) && (g[c] = 1, //把当前僵尸标注为已检查过
    this.NormalAttack(c), oSym.addTask(100, function (d, j) {
      var k = $P[d];
      k && delete k.ArZ[j];
    }, [this.id, c]));
  },

  CanGrow(data, R, C) {
    let flatCoord = `${R}_${C}`; //如果当前格为草坪（或有花盆容器）且未越界，那么判定当前格[1]位置（常规植物）的情况
    //如果当前格存在不可铲除的障碍物，不允许种植；否则即刻种植

    if ((oGd.$GdType[R][C] === 1 || oGd.$GdType[R][C] === 2 && oGd.$WaterDepth[R][C] === 0 || data[0]) && !(C < 1 || C > 9 || oGd.$Crater[flatCoord] || oGd.$LockingGrid[flatCoord])) {
      return data[1] ? data[1].canShovel : true;
    }
  }

}),
    oLSP = InheritO(CPlants, {
  EName: "oLSP",
  CName: $__language_Array__["cbc733fe78e03266567354a51cf6df1a"],
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  SunNum: 0,
  coolTime: 20,
  PKind: 4,
  Immediately: true,
  PicArr: ["images/Card/LSP.webp", "images/Props/LSP/LSP.gif"],
  Tooltip: $__language_Array__["e1fd3f98b0c36787f038cc452c5c2aa4"],
  Story: $__language_Array__["139c57cbd7c890018e1cbf1df6972009"],
  CanGrow: olSPCase.prototype.CanGrow,

  BirthStyle(self, id, ele, style) {
    ele.childNodes[1].src = self.PicArr[1];
    EditEle(ele, {
      id,
      'data-jng-constructor': self.EName
    }, style, EDPZ);
  },

  Check(R, C) {
    let data = [];

    for (let pkind = 0, G = oGd.$; pkind <= PKindUpperLimit; pkind++) {
      data.push(G[R + "_" + C + "_" + pkind]);
    }

    return olSPCase.prototype.CanGrow(data, R, C);
  },

  PrivateBirth(self) {
    let R = self.R;
    let C = self.C;
    let R2 = Math.min(R + 1, oS.R);
    let C2 = Math.min(C + 1, oS.C);

    for (let R1 = Math.max(R - 1, 0); R1 <= R2; R1++) {
      for (let C1 = Math.max(C - 1, 0); C1 <= C2; C1++) {
        self.Check(R1, C1) && requestAnimationFrame(() => CustomSpecial(olSPCase, R1, C1));
      }
    }

    self.Die();
  }

}),
    //常用的障碍物及傀儡
oApple = InheritO(CPlants, {
  EName: "oApple",
  CName: $__language_Array__["809a352d8efed0fd51a706a67979a45b"],
  HP: 500,
  width: 155,
  height: 130,
  beAttackedPointL: 63,
  beAttackedPointR: 75,
  NormalGif: 1,
  PicArr: ["images/Card/Apple.webp", "images/Plants/Apple/Apple.gif"],
  InitTrigger: function () {}
}),
    oObstacle = InheritO(CPlants, {
  //占位障碍物
  EName: "oObstacle",
  canShovel: false,
  canEat: false,
  Stature: 0,
  HP: 1,
  zIndex: 0,
  width: 40,
  Tools: true,
  beAttackedPointL: 0,
  beAttackedPointR: 10,
  Die: function () {},
  InitTrigger: function () {},
  getShadow: function (a) {
    return "display:none";
  }
}),
    oObstacle2 = InheritO(oObstacle, {
  //啃食监视障碍物
  EName: "oObstacle2",
  canEat: 1,
  PKind: 0,
  Die: CPlants.prototype.Die
}),
    oObstacle3 = InheritO(oObstacle, {
  //挡子弹障碍物
  EName: "oObstacle3",
  canEat: 0,
  zIndex: 0,
  PrivateBirth: function (c) {
    var a = c.R,
        b = c.C;
    oGd.$Obstacle[a + "_" + b] = c.id;
  },
  InitTrigger: function () {},
  PrivateDie: function (c) {
    var a = c.R,
        b = c.C;
    delete oGd.$Obstacle[a + "_" + b];
  }
}),
    oInvisibleFlowerPot = InheritO(oFlowerPot, {
  EName: "oInvisibleFlowerPot",
  CName: $__language_Array__["06775225851a484b07efe4ce743a9955"],
  PicArr: ["", "", BlankPNG],
  canEat: 0,
  canShovel: 0,
  Tools: true,
  Die: () => {},
  getShadow: function (a) {
    return "display:none";
  }
}),
    oMissile = InheritO(oLight, {
  EName: "oMissile",
  width: 53,
  height: 104,
  zIndex: 3,
  //防止导弹掉落时被其他植物遮住
  coolTime: 0,
  canEat: 0,
  Tools: true,
  canShovel: 0,
  PicArr: function () {
    let a = "images/Props/Missile/";
    return ["", "", a + "Missile.webp", 'images/Zombies/Boom.png'];
  }(),
  Birth: function (x, y, R, C) {
    let self = this,
        pixelTop,
        pixelLeft,
        targetTop,
        id = self.id = "P_" + Math.random(),
        zIndex = self.zIndex += 3 * R,
        ele = NewEle(0, "div", "position:absolute;");
    self.pixelLeft = pixelLeft = x + self.GetDX(self), self.pixelTop = pixelTop = 0 - self.height;
    self.targetTop = targetTop = y - 15 - self.height;
    self.R = R;
    self.C = C;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    NewImg(0, self.PicArr[self.NormalGif], "", ele);
    EditEle(ele, {
      id: id
    }, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: zIndex
    }, EDPZ);
    $P[id] = self;

    const callback = _ => {
      self.PrivateBirth(self, id, ele, pixelTop, targetTop);
      removeEventListenerRecord('jng-event-startgame', callback);
    };

    oS.isStartGame === 1 ? callback() : addEventListenerRecord('jng-event-startgame', callback);
    return self;
  },
  Boom: function (obj) {
    PlayAudio("ZombieBoom");
    let gd = oGd.$,
        key = obj.R + "_" + obj.C + "_",
        plant;

    for (let pkind = 0; pkind < 4; pkind++) {
      (plant = gd[key + pkind]) && plant.Die();
    }

    oEffects.ScreenShake();
    oEffects.ImgSpriter({
      ele: NewEle(obj.id + '_Boom', "div", `position:absolute;overflow:hidden;z-index:${obj.zIndex};width:196px;height:259px;left:${obj.pixelLeft - 78}px;top:${obj.pixelTop - 120}px;background:url(images/Zombies/Boom.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -196,
      frameNum: 19,
      interval: 9
    });
  },
  PrivateBirth: function (obj, id, ele, pixelTop, targetTop) {
    let cv = 1;

    (function move() {
      pixelTop < targetTop ? $P[id] && (ele.style.top = (pixelTop = obj.pixelTop = pixelTop + cv++) + 'px', oSym.addTask(1, move)) : $P[id] && (oGd.add(obj, obj.R + "_" + obj.C + "_" + obj.PKind), obj.Boom(obj));
    })();
  }
}),
    oSummonZombieObs = InheritO(CPlants, {
  EName: "oSummonZombieObs",
  CName: $__language_Array__["1a739668974fd9f51dd960284ba409bc"],
  width: 61,
  height: 78,
  beAttackedPointL: 1,
  beAttackedPointR: 60,
  canEat: 0,
  canShovel: 0,
  Tools: true,
  Die: () => {},
  getShadow: () => 'display:none',
  PicArr: ["images/Props/MarshOrgan/SummonZombieObstacle.webp"],

  BirthStyle(c, e, b, a) {
    let d = b.childNodes[1];
    d.src = this.PicArr[0];
    d.style.clip = "rect(0,auto,76px,0)";
    d.style.height = "156px";
    EditEle(b, {
      id: e,
      'data-jng-constructor': c.EName
    }, a, EDPZ);
  },

  PrivateBirth: function (o) {
    o.ArZ = {}; //在实例上创建僵尸列表

    NewImg(o.id + "_Light", o.PicArr[0], `clip: rect(78px,auto,auto,auto); top: -78px; opacity: 0;`, $(o.id)); //初始化发光特效
  },
  NormalAttack: function (id) {
    let o = this;
    let zombie = $Z[id];

    if (!o.ArZ[id] && !zombie.isPuppet && zombie.Speed > 0) {
      //如果没有在僵尸列表里查询到该僵尸
      const r = o.R;
      const c = o.C;
      o.MyEffect(o);
      PlaceZombie(oZombie, r, c);
      oSym.addTask(30, PlaceZombie, [oConeheadZombie, r, c]);
      oSym.addTask(60, PlaceZombie, [oBucketheadZombie, r, c]);
      o.ArZ[id] = true;
    }
  },
  MyEffect: function (o) {
    oEffects.fadeOut($(o.id + "_Light"));
  },
  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft + 40, this.pixelRight + 40, 0]];
  },
  TriggerCheck: function (i, h) {
    var c = i.id,
        g = this.ArZ,
        a,
        b,
        e,
        f;
    i.PZ && !g[c] && (a = i.AttackedLX, b = i.AttackedRX, e = this.AttackedLX, f = this.AttackedRX, a <= f && a >= e || b <= f && b >= e || a <= e && b >= f) && this.AttackCheck2(i) && this.NormalAttack(c);
  },
  AttackCheck2: function (a) {
    //触发特殊条件检查器
    return a.Altitude == 1 && a.beAttacked;
  }
}),
    oZombiePlusBloodObs = InheritO(oSummonZombieObs, {
  EName: "oZombiePlusBloodObs",
  CName: $__language_Array__["831039442f05c95b00db68360c683fc3"],
  Tooltip: $__language_Array__["ceceec9441ee0f6853774c3e97c1beff"],
  PicArr: ["images/Props/MarshOrgan/ZombiePlusBloodObs.webp"],
  NormalAttack: function (id, a) {
    let zombie = $Z[id],
        o = this;

    if (!o.ArZ[id] && !zombie.isPuppet && zombie.Speed > 0) {
      o.MyEffect(o);
      zombie.HP += Number.parseInt(Math.random() * 75) + 126;
      o.ArZ[id] = true;
    }
  },
  GetDY: function (b, c, a) {
    return -2;
  },
  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft - 40, this.pixelRight + 40, 0]];
  }
}),
    oZombieComeOnObs = InheritO(oSummonZombieObs, {
  EName: "oZombieComeOnObs",
  CName: $__language_Array__["23ded886dab3ea71848668c74fe2e7fa"],
  Tooltip: $__language_Array__["f2e87aa0bd2395b0eecae6ee5182db90"],
  PicArr: ["images/Props/MarshOrgan/ZombieComeOnObs.webp"],
  NormalAttack: function (id, a) {
    let zombie = $Z[id],
        o = this;

    if (!o.ArZ[id] && !zombie.isPuppet && zombie.Speed > 0) {
      o.MyEffect(o);
      zombie.OSpeed = zombie['__proto__'].Speed;
      zombie.OAttack = zombie['__proto__'].Attack;
      zombie.Speed = zombie.Speed + 0.3;
      zombie.Attack = zombie.Attack + 300;
      oSym.addTask(300, () => {
        o.ArZ[id] = true;
        zombie.Speed = zombie.OSpeed;
        zombie.Attack = zombie.OAttack;
      });
    }
  },
  GetDY: function (b, c, a) {
    return -2;
  },
  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft - 40, this.pixelRight + 40, 0]];
  }
}),
    oRifter = InheritO(oObstacle, {
  //冰窟
  EName: "oRifter",
  CName: $__language_Array__["821e2535831b7fe4594f6ab57d476b83"],
  height: 80,
  width: 90,
  beAttackedPointL: 63,
  beAttackedPointR: 75,
  Die: function () {},
  _Die: function (a) {
    var b = this,
        c = b.id;
    b.oTrigger && oT.delP(b);
    b.HP = 0;
    delete $P[c];
    delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
    ClearChild($(c));
  },
  InitTrigger: function () {},
  getShadow: () => "display:none",
  PicArr: function () {
    let arr = [];

    for (let j = 1; j < 3; j++) {
      for (let i = 1; i < 5; i++) {
        arr.push(`images/Props/Rifter/${i}${j % 2 ? 'dark' : ''}.png`);
      }
    }

    return arr;
  }(),

  Birth(X, Y, R, C, plantsArg, isTyped = false) {
    //最后一个参数是生成冰块动画使用的
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R - 1;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, `images/Props/Rifter/${isTyped !== false ? isTyped : 1 + Math.round(Math.random() * 3)}${oS.DKind ? '' : 'dark'}.png`, 'clip:rect(auto, 80px, auto, auto);', ele);
    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    });
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册
    //只有在游戏关卡开始后privatebirth才会执行

    let callback = _ => {
      const PrivateBirth = self.PrivateBirth;

      if ($P[id]) {
        PrivateBirth && PrivateBirth.call(self, self);
        removeEventListenerRecord('jng-event-startgame', callback);
      }
    };

    oS.isStartGame === 1 ? callback() : addEventListenerRecord('jng-event-startgame', callback);
    return self;
  },

  PrivateBirth({
    id
  }) {
    let img = $(id).children[1];
    oSym.addTask(9000, _ => {
      if ($P[id]) {
        img.style.left = `-80px`;
        img.style.clip = `rect(auto, 160px, auto, 80px)`; //切换样式         

        oSym.addTask(9000, _ => $P[id] && this._Die());
      }
    });
  },

  getHurt: () => {}
}),
    oRifterAnimate = InheritO(oObstacle, {
  //冰窟
  EName: "oRifterAnimate",
  height: 80,
  width: 90,
  beAttackedPointL: 63,
  beAttackedPointR: 75,
  PKind: 2,
  HP: Infinity,
  EffectGif: 0,
  InitTrigger: function () {},
  getShadow: () => "display:none",
  CanGrow: function (c, b, d) {
    let a = b + "_" + d;
    return c[2] ? 1 : oGd.$GdType[b][d] == 1 ? !(d < 1 || d > 9) && (c[1] ? c[1].canShovel : true) : c[0];
  },
  PicArr: function () {
    let arr = ['images/Plants/Begonia/Frozen.webp'];

    for (let j = 1; j < 3; j++) {
      for (let i = 1; i < 5; i++) {
        arr.push(`images/Props/Rifter/${i}${j % 2 ? 'dark' : ''}.png`);
      }
    }

    return arr;
  }(),
  Die: CPlants.prototype.Die,
  iceType: 0,
  GoDie: false,
  Pepper: true,

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R - 1;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    NewEle(`${id}_Shadow`, 'div', self.getShadow(self), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    NewImg(0, `images/Props/Rifter/${self.iceType = 1 + Math.round(Math.random() * 3)}${oS.DKind ? '' : 'dark'}.png`, 'opacity:0.6;left:-80px;clip:rect(auto, 160px, auto, 80px);', ele);
    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, {
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    });

    if (self.Pepper && oGd.$[`${R}_${C}_3`] || oGd.$Crater[R + '_' + C] || oGd.$[`${R}_${C}_1`] && !oGd.$[`${R}_${C}_1`].canShovel) {
      self.GoDie = true;
    } else {
      oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册
    } //只有在游戏关卡开始后privatebirth才会执行


    let callback = _ => {
      const PrivateBirth = self.PrivateBirth;

      if ($P[id]) {
        PrivateBirth && PrivateBirth.call(self, self);
        removeEventListenerRecord('jng-event-startgame', callback);
      }
    };

    oS.isStartGame === 1 ? callback() : addEventListenerRecord('jng-event-startgame', callback);
    return self;
  },

  audioTimes: [0, 376, 376, 295, 188, 206, 206, 271, 222],

  PrivateBirth({
    id
  }) {
    let img = $(id).children[1];
    let self = this;

    if (self.GoDie) {
      self.Die();
      return;
    }

    (function Stage(num = 0) {
      let cas;
      let Audioname = `Rifter_break${cas = Math.floor(Math.random() * 3) + 1 + num * 3}`;
      let audio = PlayAudio(Audioname);
      oSym.addTask(self.audioTimes[cas] + Math.floor(Math.random() * 100) - 50, _ => {
        if ($P[id]) {
          if (!num) {
            img.style.opacity = "0.9";
            StopAudio(Audioname);
            Stage(1);
          } else {
            let obj = self,
                hasP;
            let effect = NewImg(`${obj.id}_Frozen`, obj.PicArr[obj.EffectGif], `position:absolute;z-index:${obj.zIndex + 2};width:198px;height:113px;left:${obj.pixelLeft - 65}px;top:${obj.pixelTop}px;`, EDPZ);
            oSym.addTask(50, ClearChild, [effect]);

            if (hasP = oGd.$[`${self.R}_${self.C}_1`]) {
              PlayAudio(`Rifter_Summon1`);

              if (oGd.$[`${self.R}_${self.C}_1`].EName != "oBegonia") {
                oEffects.ImgSpriter({
                  ele: NewEle(`${obj.id}_Drop`, "div", `position:absolute;overflow:hidden;z-index:${obj.zIndex + 2};width:150px;height:184px;left:${obj.pixelLeft - 30}px;top:${obj.pixelTop - 60}px;transform:scale(1.3);background:url(images/Props/Rifter/Drop_Water.png) no-repeat`, 0, EDPZ),
                  styleProperty: 'X',
                  changeValue: -150,
                  frameNum: 37,
                  interval: 3
                });
              }
            } else {
              PlayAudio(`Rifter_Summon2`);
            }

            if (hasP && oGd.$[`${self.R}_${self.C}_1`].EName != "oBegonia" || !hasP) {
              oGd.killAll(self.R, self.C);
              new oRifter().Birth(GetX(self.C), GetY(self.R), self.R, self.C, [], self.iceType);
            } else if (hasP) {
              hasP.Die();
            }

            PlayAudio(`Rifter_break1`);
            oSym.addTask(100, StopAudio, [`Rifter_break1`]);
            self.Die();
          }
        }
      });
    })();
  }

}),
    oGoUpIce = InheritO(oSummonZombieObs, {
  EName: "oGoUpIce",
  CName: $__language_Array__["14c3baa2232fea6b4d53da228a49ad68"],
  Tooltip: $__language_Array__["bf9946e7863c4745d35cdb56ffbb023c"],
  CantGo: 1,
  height: 80,
  width: 80,
  First: 0,
  UserBirth: 0,
  EleBody: null,
  NormalGif: 0,
  StaticGif: 0,
  PicArr: ["images/Props/GoIce/2.webp", "images/Props/GoIce/1.webp"],
  PrivateBirth: function (d, dd = $(d.id)) {
    d.ArZ = {}; //在实例上创建僵尸列表

    d.AnotherBirth && d.AnotherBirth(d);
    dd.style.zIndex = "1";
    d.EleBody = dd.childNodes[1];
    d.EleBody2 = d.EleBody.cloneNode(false);
    d.EleBody2.src = d.PicArr[1];
    EditEle(d.EleBody2, {}, {
      "opacity": "0"
    }, dd);
  },

  BirthStyle(c, e, b, a) {
    let d = b.childNodes[1];
    d.src = this.PicArr[0];
    d.style.clip = "rect(0,auto,81px,0)";
    d.style.height = "81px";
    EditEle(b, {
      id: e,
      'data-jng-constructor': c.EName
    }, a, EDPZ);
  },

  SetBrightness: _ => {},
  MoveZombie: function (id, zombie) {
    oZ.moveTo(id, zombie.R, zombie.R - 1);
    return zombie.R;
  },
  NormalAttack: function (id, a) {
    let zombie = $Z[id],
        o = this;

    if (zombie.R != o.CantGo && zombie.AKind != 2 && oGd.$Crater[o.R + '_' + o.C] != 1) {
      PlayAudio("IceButtonTouch");
      let dom_ = zombie.Ele;
      let value = o.MoveZombie(id, zombie);
      zombie.pixelTop = GetY(zombie.R) - zombie.height + zombie.GetDY();
      o.First && (dom_.style.cssText += `z-index:${zombie.zIndex = 3 * value + 1};`);
      oEffects.Animate(o.EleBody2, {
        opacity: 1
      }, 0.2 / oSym.NowSpeed);
      oEffects.Animate(dom_, {
        top: `${zombie.pixelTop}px`
      }, 0.4 / oSym.NowSpeed, 'ease', _ => {
        dom_.style.cssText += `top:${zombie.pixelTop}px;z-index:${zombie.zIndex = 3 * value + 1};`;
        oEffects.Animate(o.EleBody2, {
          opacity: 0
        }, 0.2 / oSym.NowSpeed);
      });
      o.UseBirth && o.AnotherBirth && o.AnotherBirth(o);
    }
  },
  GetDY: function (b, c, a) {
    return -2;
  },
  getTriggerRange: function (a, b, c) {
    return [[this.pixelLeft - 20, this.pixelRight - 28, 0]];
  }
}),
    oGoDownIce = InheritO(oGoUpIce, {
  EName: "oGoDownIce",
  CName: $__language_Array__["c1f7219327f6004609a1b2f4410a2a21"],
  Tooltip: $__language_Array__["153386d32d0f92ef680bf314b007fc36"],
  CantGo: 5,
  First: 1,
  height: 80,
  PicArr: ["images/Props/GoIce/4.webp", "images/Props/GoIce/3.webp"],
  MoveZombie: function (id, zombie) {
    oZ.moveTo(id, zombie.R, zombie.R + 1);
    return zombie.R;
  }
}),
    oRandomIce = InheritO(oGoUpIce, {
  EName: "oRandomIce",
  CName: $__language_Array__["d61427d7cde6132ceae8e9f679839d3d"],
  Tooltip: $__language_Array__["4d1ccf55fd940a8c8b9f768117e53c91"],
  Type: 1,
  //0向上，1向下
  CantGo: 1,
  First: 0,
  UseBirth: 1,
  height: 100,
  PicArr: ["images/Props/GoIce/5.webp", "images/Props/GoIce/6.webp"],
  AnotherBirth: function (o) {
    o.Type = o.R == oS.R ? 0 : o.R == 1 ? 1 : Number.parseInt(Math.random() * 2);
    o.CantGo = o.Rand * 4 + 1;
    o.First = o.Type;
  },
  MoveZombie: function (id, zombie) {
    let s = this;

    if (s.Type) {
      oZ.moveTo(id, zombie.R, zombie.R + 1);
    } else {
      oZ.moveTo(id, zombie.R, zombie.R - 1);
    }

    return zombie.R;
  }
}),
    oGoDown = InheritO(oStoneFlower, {
  EName: "oGoDown",
  CName: $__language_Array__["a8023cff8d0351927d49140714f553c7"],
  width: 85,
  height: 1,
  Tools: true,
  Stature: -1,
  canEat: 0,
  canShovel: 0,
  ArZ: {},
  getShadow: () => "display:none",
  HP: 1,
  PicArr: ["", "", BlankPNG],

  TriggerCheck(zombie) {
    if (zombie.FangXiang !== 'GoDown') {
      zombie.ChkActs = zombie.GoDown;
      $User.LowPerformanceMode === false && zombie.FangXiang !== 'GoDown' && (EDPZ_Spare2.insertBefore(zombie.Ele, EDPZ_Spare2.children[0]), zombie.Wrap = 'dPZ_Spare2');
      zombie.FangXiang = 'GoDown';
    }
  },

  getTriggerRange(R, LX, RX) {
    return [[GetX(this.C) - 50, GetX(this.C) - 40, 0]];
  },

  Die: () => {}
}),
    oGoDownFixed = InheritO(oGoDown, {
  EName: "oGoUpFixed",
  CName: $__language_Array__["8f5659fcbd15b453d5e3d2b9ec1d62d3"],

  getTriggerRange(R, LX, RX) {
    return [[GetX(this.C) + 30, GetX(this.C) + 35, 0]];
  }

}),
    oGoUp = InheritO(oGoDown, {
  EName: "oGoUp",
  CName: $__language_Array__["8ead44688b229fa48b969adbe9ec6e5b"],

  TriggerCheck(zombie) {
    if (zombie.FangXiang !== 'GoUp') {
      zombie.ChkActs = zombie.GoUp;
      $User.LowPerformanceMode === false && zombie.FangXiang !== 'GoUp' && (EDPZ_Spare1.append(zombie.Ele), zombie.Wrap = 'dPZ_Spare1');
      zombie.FangXiang = 'GoUp';
    }
  }

}),
    oGoUpFixed = InheritO(oGoUp, {
  EName: "oGoUpFixed",
  CName: $__language_Array__["c6b0c4ba9fb21313992263905ef76e35"],

  getTriggerRange(R, LX, RX) {
    return [[GetX(this.C) + 30, GetX(this.C) + 35, 0]];
  }

}),
    oGoUp2 = InheritO(oGoUp, {
  EName: "oGoUp2",

  TriggerCheck(zombie) {
    if (zombie.FangXiang !== 'GoUp' && Math.random() < 0.5) {
      zombie.ChkActs = zombie.GoUp;
      zombie.FangXiang = 'GoUp';
    }
  }

}),
    oGoLeft = InheritO(oGoDown, {
  EName: "oGoLeft",
  CName: $__language_Array__["855e779c7a7e312d9f4dbe5ad00701fb"],

  TriggerCheck(zombie) {
    if (zombie.FangXiang !== 'GoLeft') {
      zombie.ChkActs = zombie.GoLeft;
      zombie.YiZengjia = 0;
      zombie.FangXiang = 'GoLeft'; //完成标记

      zombie.WalkDirection = 0;
      zombie.EleBody['style']['transform'] = 'rotateY(0deg)';
      zombie.EleBody['style']['transform-origin'] = `0px 0px`;
    }
  }

}),
    oGoLeftFixed = InheritO(oGoLeft, {
  EName: "oGoLeft",
  CName: $__language_Array__["4ccc207cebba576f5764351e3fb068b8"],

  getTriggerRange(R, LX, RX) {
    return [[GetX(this.C) + 30, GetX(this.C) + 35, 0]];
  }

}),
    oGoRight = InheritO(oGoDown, {
  EName: "oGoRight",
  CName: $__language_Array__["b08ffb829a14ee4a901f3a52d590ba91"],

  TriggerCheck(zombie) {
    if (zombie.FangXiang !== 'GoRight') {
      zombie.ChkActs = zombie.GoRight;
      zombie.YiZengjia = 0;
      zombie.FangXiang = 'GoRight';
      zombie.WalkDirection = 1;
      zombie.EleBody['style']['transform'] = 'rotateY(180deg)'; //切换方向

      zombie.EleBody['style']['transform-origin'] = `${(zombie.beAttackedPointL + zombie.beAttackedPointR) / 2}px 0px`;
    }
  }

}),
    oGoRightFixed = InheritO(oGoRight, {
  EName: "oGoRight",
  CName: $__language_Array__["77b73edf202dbd0d5858bba6114e4957"],

  getTriggerRange(R, LX, RX) {
    return [[GetX(this.C) + 30, GetX(this.C) + 35, 0]];
  }

}),
    oVase = InheritO(oObstacle, {
  EName: "oVase",
  height: 112,
  width: 140,
  ImgStyle: {
    "display": "none"
  },
  WaterGif: 5,
  getShadow: self => `left:${self.width * 0.5 - 48}px;top:${self.height - 22}px;`,
  CardEle: null,
  Ele: null,
  EleBody: null,
  EleShadow: null,
  EleClickArea: null,
  EleCard: null,

  Die(ticket) {
    const list = new Set(['JNG_TICKET_VASE', "JNG_TICKET_SuperPower"]);

    if (!list.has(ticket)) {
      //只有接收到特定标示才会死亡
      return;
    }

    var b = this,
        c = b.id;
    b.oTrigger && oT.delP(b);
    b.HP = 0;
    ClearChild(b.EleClickArea); //确保删除点击框成功

    delete $P[c];

    if (oGd.$[b.R + "_" + b.C + "_" + b.PKind] == b) {
      delete oGd.$[b.R + "_" + b.C + "_" + b.PKind];
    }

    ClearChild($(c));
    b.PrivateDie(b);
  },

  beAttackedPointL: 30,
  XRaying: 0,
  setCardAttempt: null,
  getCardStyle: function (type) {
    let self = this;
    return [//植物卡牌
    `pointer-events:none;clip:rect(auto,auto,60px,auto);position:absolute;height:120px;width:100px;top:30px;left:${self.beAttackedPointL - 10}px;z-index:4;transform:scale(0.75);`, //僵尸卡牌
    `pointer-events:none;position:absolute;height:83px;width:112px;top:30px;left:${self.beAttackedPointL - 15}px;z-index:4;transform:scale(0.7);`][type];
  },
  PicArr: function () {
    let arr = ["", ""];

    for (let i = 0; i < 3; i++) {
      arr.push("images/Props/Vase_Breaker/Vase_Q" + i + ".webp");
    }

    arr.push(WaterShadowImg);
    return arr;
  }(),

  Update() {
    let self = this;
    let {
      R,
      C
    } = self;
    let flag = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (oGd.$[`${R + i}_${C + j}_1`] && oGd.$[`${R + i}_${C + j}_1`].EName == "oPlantern") {
          flag = 1;
          break;
        }
      }
    }

    flag != self.XRaying && self.XRay(flag);
  },

  configs: {
    type: null,
    pic: null,
    obj: null
  },

  Birth(X, Y, R, C, plantsArg) {
    //植物初始化方法
    let self = this,
        id = "P_" + Math.random(),
        pixelLeft = X + self.GetDX(self),
        //默认植物相对于FightingScene左侧的距离=格子中点坐标-0.5*植物图像宽度
    pixelTop = Y + self.GetDY(R, C, plantsArg, true) - self.height,
        //默认植物顶部相对于FS顶部的距离=格子中点坐标+底座偏移-植物身高
    ele = NewEle(null, "div", "position:absolute;");
    self.Ele = ele;
    self.id = id;
    self.pixelLeft = pixelLeft;
    self.pixelRight = pixelLeft + self.width;
    self.pixelTop = pixelTop;
    self.pixelBottom = pixelTop + self.GetDBottom(self); //默认植物底部相对距离=pt+植物身高

    self.zIndex += 3 * R;
    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr
    //初始化随机化图片

    for (let index in self.PicArr) {
      if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
        self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
      }
    }

    ele.addEventListener("unload", self.RemoveRandomPic, {
      once: true
    });
    $P[id] = self; //在植物池中注册

    self.EleShadow = NewEle(`${id}_Shadow`, 'div', self.getShadow(self, R, C), {
      className: 'Shadow'
    }, ele); //绘制植物影子

    self.EleBody = NewImg(0, self.PicArr[self.NormalGif], null, ele); //绘制植物本体

    self.InitTrigger(self, id, self.R = R, self.C = C, self.AttackedLX = pixelLeft + self.beAttackedPointL, //植物左检测点
    self.AttackedRX = pixelLeft + self.beAttackedPointR //植物右检测点
    );
    self.BirthStyle(self, id, ele, Object.assign({
      left: pixelLeft + "px",
      top: pixelTop + "px",
      zIndex: self.zIndex
    }, self.ImgStyle));
    self.EleBodyXRay = self.EleBody.cloneNode(false);
    self.EleBodyXRay.src = self.PicArr[3];
    self.EleCard = NewEle("vase_showCard" + Math.random(), "img", `opacity:0`, {}, self.Ele);
    oGd.add(self, `${R}_${C}_${self.PKind}`); //在场景注册
    //只有在游戏关卡开始后privatebirth才会执行

    let callback = _ => {
      const PrivateBirth = self.PrivateBirth;

      if ($P[id]) {
        PrivateBirth && PrivateBirth.call(self, self);
      }
    };

    callback();
    return self;
  },

  PrivateBirth: function (self) {
    SetBlock(self.Ele);
    self.FallDown(self, callback);

    function callback() {
      self.EleClickArea = NewEle("clicking" + Math.random(), "div", `cursor:pointer;opacity:0;position:absolute;height:80px;width:70px;top:${self.pixelTop + 30}px;left:${self.pixelLeft + self.beAttackedPointL + 5}px;background:blue;z-index:30;`, {}, EDPZ);
      self.EleClickArea.addEventListener("click", function () {
        oS.isStartGame === 1 && self.Break_Vase(self);
      }); //console.log(self);
      //self.EleBody.style="";

      EditEle(self.EleBodyXRay, {}, {
        cssText: self.EleBody.style.cssText + "opacity:0;"
      }, self.Ele);
      self.setCardAttempt && self.setCardAttempt();
      self.XRaying == 1 && self.XRay(1);
    }
  },

  XRay(turnOn) {
    let self = this;
    let aimOpacity = turnOn * 1;
    self.XRaying = aimOpacity;

    if (!self.EleClickArea) {
      return;
    }

    oEffects.Animate(self.EleBodyXRay, {
      opacity: aimOpacity
    }, 0.5 / oSym.NowSpeed);
    oEffects.Animate(self.EleCard, {
      opacity: aimOpacity
    }, 0.5 / oSym.NowSpeed);
  },

  Break_Vase(self) {
    oEffects.ImgSpriter({
      ele: NewEle(`${self.id}_Break`, "div", `position:absolute;overflow:hidden;z-index:${self.zIndex};width:141px;height:136px;left:${self.pixelLeft}px;top:${self.pixelTop}px;background:url(images/Props/Vase_Breaker/Pop_Effect.webp) no-repeat`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -141,
      frameNum: 18,
      interval: 3
    });
    StopAudio("vase");
    PlayAudio("vase");
    delete $P[self.id];
    delete oGd.$[self.R + "_" + self.C + "_" + self.PKind];
    ClearChild(self.EleClickArea);
    ClearChild(self.EleCard);
    ClearChild(self.EleBodyXRay);
    self.EleBody.src = RandomPic(self.PicArr[4], self.EleBody);
    self.PlaceThing(self, self.configs.type, self.configs.obj);
    oSym.addTask(160, function () {
      self.Die("JNG_TICKET_VASE");
    });
  },

  PlaceThing(self, type, obj) {
    switch (type) {
      case 0:
        ThrowACard(obj, [GetX(self.C) - 50, GetY(self.R) - 100], false, {
          delta: 30,
          vy: -4
        });
        break;

      case 1:
        let z = PlaceZombie(obj, self.R, self.C, 0, 1);
        let pro = obj.prototype;

        if (pro.height >= 200 || pro.beAttackedPointR - pro.beAttackedPointL >= 150) {
          z.Altitude = 3;

          (function f() {
            z.EleBody.style.transform = "scale(0)";
            z.EleBody.style.transformOrigin = "center bottom";
            oEffects.Animate(z.EleBody, {
              transform: "scale(1)"
            }, 0.3 / oSym.NowSpeed, false, function () {
              z.Altitude = 1;
              z.EleBody.style.transform = "";
              z.EleBody.style.transformOrigin = "";
            });
          })();
        }

        break;
    }
  },

  SetCard(config = {}) {
    let self = this;
    let pro = config.obj.prototype;
    self.EleClickArea ? callback() : self.setCardAttempt = callback;

    function callback() {
      self.configs = config;
      self.EleCard.src = !config.type ? pro.PicArr[pro.CardGif] : "images/Card/" + pro.EName.substring(1).split("_")[0] + ".webp";
      self.EleCard.style = self.getCardStyle(config.type) + "opacity:0;";
      self.XRay(self.XRaying);
    }
  },

  FallDown: function (self, callback) {
    let oy = -Number.parseFloat(self.Ele.style.top) - self.height;
    let nowY = oy;
    let vy = 20;
    let ay = 5;
    let times = 0;
    let random = "throw" + ["", "2"].random();
    PlayAudio(random);
    oAudio[random].currentTime = 0.1;

    (function loop() {
      if (times < 1) {
        SetStyle(self.EleBody, {
          position: "relative",
          top: nowY + "px",
          transform: "scaleY(1.1) scaleX(" + (0.8 - 0.3 * (1 - nowY / oy)) + ")"
        });
        EditCompositeStyle({
          ele: self.EleShadow,
          delFuncs: ["scale"],
          addFuncs: [["scale", 0.5 * (1 - nowY / oy)]],
          option: 2
        });
      }

      if (nowY < 0) {
        nowY += vy += ay;
        oSym.addTask(3, loop);
      } else if (nowY > 0) {
        if (times >= 1) {
          nowY = 0;
          return;
        }

        nowY = 0;
        vy = -3;
        ay = 0.8;
        nowY += vy += ay;
        times++;
        stop();
        oSym.addTask(3, loop);
      }
    })();

    function stop() {
      let nowRY = 1;
      let vRY = -0.18;
      let aRY = 0.04;
      let t = 2 * Math.abs(vRY / aRY);
      let nowRX = 0.5;
      let nowVX = 0.225;
      let nowAX = 0.002;
      let flag = false;
      let nowSc = 0.5;
      let deltaSc = (1 - nowSc) / (t / 5);
      let deltaY = 0;

      if (oGd.$GdType[self.R][self.C] === 2) {
        self.EleShadow.style.cssText += `background:url(${self.PicArr[self.WaterGif]});height:91px;width:260.5px;background-size:100% 100%;z-index:300;`;
        EditCompositeStyle({
          ele: self.EleShadow,
          addFuncs: [["translate", "-87.25px,-25px"]],
          option: 2
        });
        SetStyle(self.EleBody, {
          position: "absolute",
          clip: `rect(0,auto,${self.height - 15}px,0)`
        });
        deltaY = 15;
      } else {
        SetStyle(self.EleBody, {
          position: "absolute"
        });
      }

      (function loop() {
        SetStyle(self.EleBody, {
          transform: "scaleY(" + nowRY + ") scaleX(" + nowRX + ")",
          top: (1 - nowRY) * self.height / 2 + nowY + deltaY + "px"
        });
        EditCompositeStyle({
          ele: self.EleShadow,
          delFuncs: ["scale"],
          addFuncs: [["scale", nowSc]],
          option: 2
        });
        nowRY += vRY += aRY;
        nowRX += nowVX += nowAX;
        nowRX = Math.min(nowRX, 1);
        nowRY = Math.min(nowRY, 1);
        nowSc = Math.min(deltaSc + nowSc, 1);

        if (nowRY != 1 || nowRX != 1 || nowSc != 1 || nowY != 0) {
          oSym.addTask(1, loop);
        } else {
          SetStyle(self.EleBody, {
            transform: "",
            top: deltaY + "px"
          });
          EditCompositeStyle({
            ele: self.EleShadow,
            delFuncs: ["scale"],
            option: 2
          });
          callback && callback();
        }
      })();
    }
  }
}),
    oVaseP = InheritO(oVase, {
  EName: "oVaseP",
  PicArr: function () {
    let arr = ["", ""];

    for (let i = 0; i < 3; i++) {
      arr.push("images/Props/Vase_Breaker/Vase_P" + i + ".webp");
    }

    arr.push(WaterShadowImg);
    return arr;
  }()
}),
    oVaseZ = InheritO(oVase, {
  EName: "oVaseZ",
  PicArr: function () {
    let arr = ["", ""];

    for (let i = 0; i < 3; i++) {
      arr.push("images/Props/Vase_Breaker/Vase_Z" + i + ".webp");
    }

    arr.push(WaterShadowImg);
    return arr;
  }()
}),
    oTrafficLight = InheritO(oObstacle, {
  EName: "oTrafficLight",
  HP: Infinity,
  Tools: 1,
  //是否为道具
  Tooltip: $__language_Array__["93b8d86ba9ab565efc9b25fd430563c0"],
  ColorsGif: [1, 2, 3],
  ZombieStop: {},
  color: 0,
  height: 119,
  width: 67,
  AutoChange: true,
  PicArr: ["images/Card/AbutilonHybriden.webp", "images/Props/TrafficLight/red.png", "images/Props/TrafficLight/green.png", "images/Props/TrafficLight/close.png"],

  PrivateBirth(self) {
    let {
      R,
      C,
      id
    } = self;
    self.ZombieStop = {};
    oGd.$TrafficLights[R + "_" + C] = id;
    oS.HaveFog && oFog.update(R, C, 0, 0, 0);

    if (self.AutoChange) {
      self.AutoChangeColor();
    }

    self.ChangeColorPic();
  },

  AutoChangeColor() {
    let self = this;
    self.AutoChange = true;

    function loop() {
      if (!$P[self.id] || !self.AutoChange) {
        return;
      } //console.log(self.color^1);


      self.SetColor(self.color ^ 1, self);
      oSym.addTask(3000 * Math.random() + 1000, loop);
    }

    loop();
  },

  PrivateDie() {
    let {
      R,
      C
    } = this;
    delete oGd.$TrafficLights[R + "_" + C];
    oS.HaveFog && oFog.update(R, C, 0, 0, 1);
  },

  StopLoop(self) {
    if ($P[self.id] && self.color === 0) {
      let id = self.id;
      let R = self.R,
          floorR = R > 1 ? R - 1 : 1,
          ceilingR = R < oS.R ? R + 1 : oS.R,
          leftBorder = self.pixelLeft,
          rightBorder = self.pixelRight + 90;
      floorR = ceilingR = R;

      do {
        oZ.getArZ(leftBorder, rightBorder - Math.abs(R - floorR) * 40, floorR).forEach(zombie => {
          if (!zombie.isPuppet) {
            CZombies.prototype.getButter(zombie, 230, BlankPNG);
          }
        });
      } while (floorR++ < ceilingR);

      oSym.addTask(200, self.StopLoop.bind(self), [self]);
    }
  },

  ExciteLoop(self) {
    if ($P[self.id] && self.color === 1) {
      let id = self.id;
      let R = self.R,
          floorR = R > 1 ? R - 1 : 1,
          ceilingR = R < oS.R ? R + 1 : oS.R,
          leftBorder = self.pixelLeft,
          rightBorder = self.pixelRight + 90;
      floorR = ceilingR = R;

      do {
        oZ.getArZ(leftBorder, rightBorder - Math.abs(R - floorR) * 40, floorR).forEach(zombie => {
          if (!zombie.isPuppet) {
            zombie.getExcited(1.4, 230 - Math.abs(R - floorR) * 40);
          }
        });
      } while (floorR++ < ceilingR);

      oSym.addTask(200, self.ExciteLoop.bind(self), [self]);
    }
  },

  SetColor(color, _self) {
    let self = _self;

    if (!_self) {
      self = this;
    }

    self.color = color;
    $(self.id).childNodes[1].src = self.PicArr[self.ColorsGif[color]];

    if (color === 0) {
      self.StopLoop(self);
    } else if (color === 1) {
      self.ExciteLoop(self);
    }
  },

  ChangeColorPic() {
    let self = this;
    let dom = $(self.id);
    oSym.addTask(Math.random() * 100 + 10, function loop() {
      if (!$P[self.id]) {
        return;
      }

      dom.childNodes[1].src = self.PicArr[self.ColorsGif[2]];
      oSym.addTask(10, _ => {
        if (!$P[self.id]) {
          return;
        }

        dom.childNodes[1].src = self.PicArr[self.ColorsGif[self.color]];
      });

      if (Math.random() < 0.1) {
        oSym.addTask(Math.random() * 50 + 20, loop);
      } else {
        oSym.addTask(Math.random() * 1500 + 300, loop);
      }
    });
  }

}),
    //活动用特殊植物
oPeashooter2 = InheritO(oPeashooter, {
  EName: "oPeashooter2",
  coolTime: 0,
  SunNum: 100,

  CheckLoop(zid, direction) {
    //开始攻击，并且循环检查攻击条件1,2
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid); //触发植物攻击，并传入触发者僵尸之id

      oSym.addTask(23, _ => $P[pid] && self.AttackCheck1(zid, direction));
    }
  }

}),
    oRepeater2 = InheritO(oXshooter, {
  EName: "oRepeater2",
  SunNum: 250,

  CheckLoop(zid, direction) {
    //开始攻击，并且循环检查攻击条件1,2
    let self = this;
    let pid = self.id;

    if ($P[pid]) {
      self.NormalAttack(zid); //触发植物攻击，并传入触发者僵尸之id

      oSym.addTask(23, _ => $P[pid] && self.AttackCheck1(zid, direction));
    }
  }

});