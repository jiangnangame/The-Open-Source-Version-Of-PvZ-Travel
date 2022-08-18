/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

var CZombies = NewO({
  EName: "Zombies",
  HP: 270,
  Lvl: 1,
  //僵尸强度级别，普通为1路障2铁桶4撑杆2
  NormalGif: 2,
  CardGif: 0,
  CanDisplay: 1,
  StaticGif: 2,
  AttackGif: 3,
  LostHeadGif: 4,
  LostHeadAttackGif: 5,
  HeadGif: 6,
  DieGif: 7,
  width: 166,
  height: 144,
  beAttackedPointL: 82,
  beAttackedPointR: 156,
  BreakPoint: 90,
  Ornaments: 0,
  OrnHP: 0,
  OSpeed: 1.6,
  Speed: 1.6,
  PZ: 1,
  Wrap: 'dPZ',
  //放置僵尸DOM的容器，默认为dPZ
  SpeedCoefficient: 1,
  //僵尸速度系数，默认为1，越低僵尸走的越慢（这个东西不受减速或亢奋效果影响，比如减速则最终速度是在减速的速度基础上乘上这个系数）
  DivingDepth: 0,
  //僵尸潜下去多深
  AKind: 0,
  //普通僵尸的攻击是0直接啃食，1巨人是秒杀，2篮球车冰车碾压，3篮球车丢篮球,以及其他远程.撑杆第一次是跳跃第二次是啃食
  beAttacked: 1,
  //是否可以被攻击，可用于粗略判断僵尸是否垂死
  isAttacking: 0,
  isGoingDie: 0,
  //僵尸是否垂死
  OAttack: 100,
  Attack: 100,
  LivingArea: 1,
  //目前所在格子的类型
  Altitude: 1,
  // //海拔位置：-1潜地 0潜水 1行走 2跳跃 3植物子弹无法到达的高空飞行
  WalkDirection: 0,
  //僵尸行走方向，0表示向左，1表示向右
  FreeSetbodyTime: 0,
  FreeFreezeTime: 0,
  FreeSlowTime: 0,
  //用于标记僵尸是否处于减速状态
  FreeVertigoTime: 0,
  FreeExcitedTime: 0,
  isFloating: 0,
  //标记僵尸是否处于浮空状态，即是否受战术风扇影响
  isCounted: 1,
  //是否需要纳入死亡统计
  isPuppet: 0,
  //是否是傀儡(非僵尸的僵尸)
  CanDiaplay: 1,
  WaterShadowGif: null,
  Almanac: {
    Dom: null,
    Tip: $__language_Array__["9e3f9d978ea4646e2749bc637bf076c0"],
    Weakness: $__language_Array__["9e3f9d978ea4646e2749bc637bf076c0"],
    Speed: $__language_Array__["ad3a86d920c7787208b260a16f1bd3f7"],
    Story: $__language_Array__["8d655bfee0720d959f6c77e2017bd983"]
  },
  AudioArr: ["splat1", "splat2", "splat3", "ignite", "frozen", "chomp", "chomp2", "chompsoft", 'awooga'],
  AccessiblePath: (() => {
    //可由某道路转向某道路
    let arr = {};
    arr["1_3"] = 1;

    for (let i in arr) {
      arr[i.reverse()] = 1;
    }

    for (let i = 0; i < 4; i++) {
      arr[`${i}_${i}`] = 1;
    }

    arr[`2_2`] = 0; //默认不走水路

    return arr;
  })(),

  //获取卡片图片
  GetCardImg() {
    let self = this;
    return "images/Card/" + self.EName.substr(1) + ".webp";
  },

  //判定僵尸能否走某行
  CanPass(R, LF) {
    let self = this;
    return LF && self.AccessiblePath[oGd.$LF[R] + "_" + LF];
  },

  //检查当前格子类型不同切换事件
  ChkCell_GdType(self) {
    let R = self.R;
    let C = GetC(self.ZX + (self.beAttackedPointR - self.beAttackedPointL) / 2);
    let gdType = oGd.$GdType[R][C];

    if (self.LivingArea != gdType) {
      if (gdType == 1 || gdType == 3) {
        if (self.LivingArea == 2) {
          self.SetWater(0);
        }
      }

      self.LivingArea = gdType;
    }

    if (gdType == 2) {
      if (self.DivingDepth != oGd.$WaterDepth[R][C]) {
        self.SetWater(oGd.$WaterDepth[R][C]);
      }
    }
  },

  //僵尸进水
  SetWater(px) {
    let self = this;

    if (px > 0) {
      let height = self.height;
      self.Ele.dataset.tmp_Altitude = self.Altitude;

      if (!self.WaterShadowGif) {
        self.WaterShadowGif = RandomPic(WaterShadowImg);
      }

      if (!self.EleShadow.dataset.hasOwnProperty("tmp_cssText")) {
        self.EleShadow.dataset.tmp_cssText = self.EleShadow.style.cssText;
      } else {
        self.EleShadow.style.cssText = self.EleShadow.dataset.tmp_cssText + `background:url(${self.WaterShadowGif});`;
      }

      if (self.DivingDepth === 0) {
        SetStyle(self.EleShadow, {
          background: `url(${self.WaterShadowGif})`
        });
      }

      EditCompositeStyle({
        ele: self.EleShadow,
        addFuncs: [["translate", "-90.25px,-20px"]],
        option: 2
      });
      SetStyle(self.EleShadow, {
        height: "91px",
        width: "260.5px",
        backgroundSize: "100% 100%",
        zIndex: 300
      }); //EleBody.style.top = height+'px';

      if (self.DivingDepth != px) {
        oEffects.Animate(self.EleBody, {
          top: `${px}px`
        }, 0.5 / oSym.NowSpeed, 'ease-out');
        let old = self.DivingDepth;
        self.DivingDepth = px; 

        oSym.addTask(1, function d(npx = 1) {
          let top = height - (Math.sqrt(npx / 50) * (px - old) + old);

          if ($User.LowPerformanceMode) {
            SetStyle(self.EleBody, {
              clip: `rect(0,auto,${top}px,0)`
            });
          } else {
            SetStyle(self.EleBody, {
              clip: `rect(0,auto,${top + 10}px,0)`,
              webkitMaskImage: `linear-gradient(black 0px ${top - 15}px, transparent ${top + 10}px)`
            });
          }

          npx < 50 ? oSym.addTask(1, d, [npx + 1]) : out();
        });

        function out() {
          if (self.DivingDepth != px) {
            return;
          } //如果水超过了最高处则潜水


          if (px > self.height) {
            self.Altitude = 0;
          }

          if (px > self.height / 2) {
            self.SpeedCoefficient = 0.7;
          }
        }
      }
    } else {
      //浮出水面
      px = 0;
      let height = self.height;

      if (self.DivingDepth != px) {
        let old = self.DivingDepth;
        self.DivingDepth = px;
        oEffects.Animate(self.EleBody, {
          top: `${px}px`
        }, 0.5 / oSym.NowSpeed, 'ease-out');
        let total = self.DivingDepth; //这里只能用这种定时器，否则无法实现动画

        oSym.addTask(1, function d(npx = 1) {
          let top = height - (Math.sqrt(npx / 50) * (px - old) + old);

          if ($User.LowPerformanceMode) {
            SetStyle(self.EleBody, {
              clip: `rect(0,auto,${top}px,0)`
            });
          } else {
            SetStyle(self.EleBody, {
              clip: `rect(0,auto,${top + 10}px,0)`,
              webkitMaskImage: `linear-gradient(black 0px ${top - 15}px, transparent ${top + 10}px)`
            });
          }

          npx < 50 ? oSym.addTask(1, d, [npx + 1]) : out();
        });

        function out() {
          SetStyle(self.EleBody, {
            clip: `rect(0,auto,auto,0)`,
            webkitMaskImage: ""
          });

          if (self.EleShadow.dataset.hasOwnProperty("tmp_cssText")) {
            self.EleShadow.style.cssText = self.EleShadow.dataset.tmp_cssText;
          }

          delete self.EleShadow.dataset.tmp_cssText;
        }

        self.SpeedCoefficient = 1;

        if (self.Altitude == 0) {
          var _Number;

          self.Altitude = (_Number = Number(self.Ele.dataset.tmp_Altitude)) !== null && _Number !== void 0 ? _Number : 1;
        }

        delete self.Ele.dataset.tmp_Altitude;
      }
    }
  },

  //判定僵尸能否走某个格
  CanPassCell: (R, C) => {
    var _self$R;

    let self = this;
    let DR = (_self$R = self === null || self === void 0 ? void 0 : self.R) !== null && _self$R !== void 0 ? _self$R : R;
    let DC = self.ZX ? GetC(self.ZX) : C;
    return self.AccessiblePath[`${oGd.$GdType[R][C]}_${oGd.$GdType[DR][DC]}`];
  },
  ChkActs: (o, R, arR, i) => o.GoLeft(o, R, arR, i),
  //默认向左走
  FangXiang: 'GoLeft',
  DeltaDirectionSpeed: {
    'GoLeft': 1,
    'GoRight': -1,
    'GoUp': 0,
    'GoDown': 0
  },
  HeadTargetPosition: [{
    x: 70,
    y: 50
  }, {
    x: 80,
    y: 50
  }],

  //头的位置数据
  GoLeft(o, R, arR, i) {
    //向左走
    let Speed = o.Speed * o.SpeedCoefficient;
    let hookKey = 1;

    if (!o.FreeFreezeTime && !o.FreeSetbodyTime) {
      //如果僵尸没有处于冰冻或者等待出场状态
      if (!o.isAttacking) {
        !o.isGoingDie && o.JudgeAttack(); //未临死，未攻击，进行攻击判断

        if ((o.AttackedRX -= Speed) < -50) {
          //向左走出屏幕，算作直接死亡，不排序只更新
          arR.splice(i, 1);
          o.DisappearDie();
          hookKey = 0;
        } else {
          //正常移动僵尸
          o.ZX = o.AttackedLX -= Speed;
          SetStyle(o.Ele, {
            left: (o.X -= Speed) + 'px'
          });
        }
      }
    } //检查场地事件


    o.ChkCell_GdType(o);
    return hookKey;
  },

  GoRight: function (o, R, arR, i) {
    //往右走的僵尸行动
    var Speed,
        rV,
        id = o.id;
    !(o.FreeFreezeTime || o.FreeSetbodyTime) ? (o.beAttacked && !o.isAttacking && o.JudgeAttack(), //未临死，未攻击，进行攻击判断
    !o.isAttacking ? o.X > oS.W ? (arR.splice(i, 1), o.DisappearDie(), rV = 0 //向右走出屏幕，算作直接死亡，不排序只更新
    ) : (o.AttackedLX += Speed = o.Speed * o.SpeedCoefficient, o.ZX = o.AttackedRX += Speed, SetStyle($(id), {
      left: Math.ceil(o.X += Speed) + 'px'
    }), rV = 1) : rV = 1) : rV = 1; //检查场地事件

    o.ChkCell_GdType(o);
    return rV;
  },
  GoDown: function (o, R, arR, i) {
    //向下走
    let rV,
        id = o.id,
        ele = $(id),
        newR = o.R + 1;
    !(o.FreeFreezeTime || o.FreeSetbodyTime) ? (o.beAttacked && !o.isAttacking && o.JudgeAttack(), !o.isAttacking ? (_ => {
      ele.style.cssText += `top:${o.pixelTop += o.Speed * o.SpeedCoefficient}px;z-index:${o.zIndex = 3 * newR + 1};`;

      if (o.pixelTop >= GetY(newR) - o.height + o.GetDY()) {
        oZ.moveTo(id, o.R, newR);
      }

      rV = 1;
    })() : rV = 1) : rV = 1; //检查场地事件

    o.ChkCell_GdType(o);
    return rV;
  },
  GoUp: function (o, R, arR, i) {
    //向上走
    let rV,
        id = o.id,
        ele = $(id),
        newR = o.R - 1;
    !(o.FreeFreezeTime || o.FreeSetbodyTime) ? (o.beAttacked && !o.isAttacking && o.JudgeAttack(), !o.isAttacking ? (_ => {
      ele.style.cssText += `top:${o.pixelTop -= o.Speed * o.SpeedCoefficient}px;z-index:${o.zIndex = 3 * newR + 1};`;

      if (o.pixelTop <= GetY(newR) - o.height + o.GetDY()) {
        oZ.moveTo(id, o.R, newR);
      }

      rV = 1;
    })() : rV = 1) : rV = 1; //检查场地事件

    o.ChkCell_GdType(o);
    return rV;
  },
  GetDX: _ => -110,
  //返回僵尸相对于格子中点的横坐标偏移
  GetDY: _ => -10,
  //返回僵尸相对于格子中点的纵坐标偏移
  GetDTop: 0,
  //僵尸gif跟div的顶部坐标偏移
  ChangeR: function (e) {
    //换行
    var h = e.R,
        g = e.ar || [],
        j = e.CustomTop,
        d = this,
        q = h - 1,
        l,
        k = d.id,
        m = -1,
        f = d.Ele,
        n = d.EleBody,
        i = GetC(d.ZX),
        c;
    !g.length && ( //如果没有指定移动行数组，则默认使用上下两行
    d.CanPassCell(q, i) && (g[++m] = q), //只有地形跟本行一样才能移动
    d.CanPassCell(q += 2, i) && (g[++m] = q));
    g.length ? ( //可以换行
    l = !d.WalkDirection ? -5 : 5, d.ZX += l, d.AttackedLX += l, d.AttackedRX += l, d.X += l, q = g[Math.floor(Math.random() * g.length)], SetStyle(f, {
      left: d.X + "px",
      top: (d.pixelTop = j == undefined ? GetY(q) - d.height + d.GetDY() : j) + "px",
      zIndex: d.zIndex = 3 * q + 1
    }), d.isAttacking && (n.src = d.PicArr[d.NormalGif]), oZ.moveTo(k, h, q)) : n.src = d.PicArr[d.NormalGif];
    d.isAttacking = 0;
  },
  getShadow: self => `left:${self.beAttackedPointL - 10}px;top:${self.height - 22}px;`,
  getDisplayShadow: self => self.getShadow(self),
  getCharredCSS: self => ({
    left: self.beAttackedPointL + 15 + `px`,
    top: self.height / 3 + `px`
  }),

  //初始化僵尸的prototype
  Init(AppearX, pro, LF, MaxR) {
    let len = 0,
        o = this,
        ArR = [];
    pro.ZX = pro.AttackedLX = AppearX;
    pro.X = pro.ZX - pro.beAttackedPointL;
    pro.AttackedRX = pro.X + pro.beAttackedPointR; //能够出现的行数数组ArR

    for (let i = 0; i <= MaxR; i++) {
      pro.CanPass(i, LF[i]) && ArR.push(i);
    }

    pro.ArR = ArR; //僵尸能够出现的行数组
    //初始化HTML字符数组

    pro.ArHTML = [`<div id="`, //0
    `" data-jng-constructor="`, //1
    `" style="width:${pro.width}px;height:${pro.height}px;position:absolute;display:`, //2
    `;left:`, //3
    `px;top:`, //4
    `px;z-index:`, //5
    `"><div class='Shadow' style="${pro.getShadow(pro)}"></div><img style="position:absolute;clip:rect(0,auto,`, //6
    `,0);top:`, //7
    `px" src="`, //8
    `"></div>` //9
    ];
    Object.hasOwn(pro, 'Almanac') && o.getAlmanacDom(pro);
  },

  getAlmanacDom(pro) {
    if (!pro.Almanac.Dom) {
      var _pro$displayWidth, _pro$displayHeight;

      let ClassAlmanac = CZombies.prototype.Almanac;

      for (let i in ClassAlmanac) {
        if (!pro.Almanac[i]) {
          pro.Almanac[i] = ClassAlmanac[i];
        }
      }

      let _width = (_pro$displayWidth = pro.displayWidth) !== null && _pro$displayWidth !== void 0 ? _pro$displayWidth : pro.width;

      let _height = (_pro$displayHeight = pro.displayHeight) !== null && _pro$displayHeight !== void 0 ? _pro$displayHeight : pro.height;

      pro.Almanac.Dom = pro.getDisplayHTML("", 170 - _width / 2, 450 - _height, "1;height:" + _height + "px;width:" + _width + "px", "block", "auto", pro.GetDTop, pro.PicArr[pro.StandGif]);
    }
  },

  getHTML(id, wrapLeft, wrapTop, zIndex, display, clip, top, img) {
    //渲染僵尸html代码
    const self = this,
          T = self.ArHTML;
    return T[0] + id + T[1] + self.EName + T[2] + display + T[3] + wrapLeft + T[4] + wrapTop + T[5] + zIndex + T[6] + clip + T[7] + top + T[8] + img + T[9];
  },

  getDisplayHTML(id, wrapLeft, wrapTop, zIndex, display, clip, top, img) {
    var _self$displayWidth, _self$displayHeight;

    const self = this;
    return `<div id="${id}" data-jng-constructor="${self.EName}" style="width:${(_self$displayWidth = self.displayWidth) !== null && _self$displayWidth !== void 0 ? _self$displayWidth : self.width}px;height:${(_self$displayHeight = self.displayHeight) !== null && _self$displayHeight !== void 0 ? _self$displayHeight : self.height}px;position:absolute;left:${wrapLeft}px;top:${wrapTop}px;z-index:${zIndex};display:${display};"><div class='Shadow' style="${self.getDisplayShadow(self)}"></div><img style="position:absolute;clip:rect(0,auto,${clip},0);top:${top}px" src="${img}"></div>`;
  },

  //普通诞生事件,由程序自动调用,在每波刷新 
  //初始化僵尸样式，编译僵尸html代码
  prepareBirth(delayT) {
    let self = this;
    let id = self.id = "Z_" + Math.random();
    let R = self.R = self.ArR.random(); //生成僵尸所在行数随机

    let top = self.pixelTop = GetY(R) + self.GetDY() - self.height; //计算僵尸顶部坐标

    let zIndex = self.zIndex = 3 * R + 1;
    (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设置延迟出场时间戳

    return self.getHTML(id, self.X, top, zIndex, "none", "auto", self.GetDTop, self.PicArr[self.NormalGif]);
  },

  //特殊诞生事件，传递自定义的坐标，比如从坟墓出生
  CustomBirth(R, C, delayT, clipH) {
    const self = this,
          bottomY = GetY(R) + self.GetDY(),
          //僵尸脚部坐标=当前行下边缘坐标+（-自定义向上偏移）
    pixelTop = bottomY - self.height,
          //僵尸图像顶端坐标=僵尸脚部坐标-僵尸图片高度
    zIndex = 3 * R + 1,
          id = self.id = "Z_" + Math.random(),
          beAttackedPointL = self.beAttackedPointL,
          beAttackedPointR = self.beAttackedPointR;
    self.ZX = self.AttackedLX = GetX(C) - (beAttackedPointR - beAttackedPointL) * 0.5;
    self.X = self.ZX - beAttackedPointL;
    self.AttackedRX = self.X + beAttackedPointR;
    self.R = R;
    self.pixelTop = pixelTop;
    self.zIndex = zIndex;
    (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设定自身定身时间为延迟登场时间

    return self.getHTML(id, self.X, pixelTop, zIndex, "none", clipH || 0, self.GetDTop, self.PicArr[self.NormalGif]);
  },

  Birth(json = {}) {
    //唤醒僵尸，注册$Z和oZ
    let self = this;

    if (!json.dont_set_original_value) {
      //不设置原始数据，例如OAttack,OSpeed之类，否则默认备份OAttack,OSpeed
      self.OAttack = self.Attack;
      self.OSpeed = self.Speed;
    }

    self.HeadTargetPosition = JSON.parse(JSON.stringify(self.HeadTargetPosition)); //深拷贝头部坐标，避免改的时候直接改成prototype的

    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr

    $Z[self.id] = self;
    oZ.add(self);
    let id = self.id;
    let ele = self.Ele = $(id);
    self.EleShadow = ele.firstChild;
    self.EleBody = ele.childNodes[1];
    self.BirthCallBack(self);
    oSym.addTask(self.delayT, _ => {
      //初始化随机化图片
      for (let index in self.PicArr) {
        if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
          self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
        }
      }

      ele.addEventListener("unload", self.RemoveRandomPic, {
        once: true
      });
      self.EleBody.src = self.PicArr[self.NormalGif];
    });
  },

  BirthCallBack(self) {
    let delayT = self.delayT;
    let id = self.id;
    let ele = self.Ele = $(id);
    self.EleShadow = ele.firstChild;
    self.EleBody = ele.childNodes[1];

    if (delayT) {
      oSym.addTask(delayT, _ => {
        $Z[id] && (self.FreeSetbodyTime = 0, SetBlock(ele));
      });
    } else {
      SetBlock(ele);
    }
  },

  getCrushed: function (c) {
    return true;
  },
  getRaven: function () {
    return this.DisappearDie(), 1;
  },
  getExplosion: function () {
    let self = this;
    self.HP > 1800 ? self.HP -= 1800 : $Z[self.id] && !self.isGoingDie && self.ExplosionDie();
  },
  getThump: function () {
    this.DisappearDie();
  },
  PlayNormalballAudio: function () {
    PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
  },
  PlayFireballAudio: function () {
    PlayAudio("ignite");
  },
  PlaySlowballAudio: function () {
    PlayAudio("frozen");
  },

  //自身，定住时间，图像（默认黄油），黄油图像宽度高度，偏移值
  getButter(self, time = 400, img, picSize = [40, 40], delta = [0, 0]) {
    if (!$Z[self.id] || self.HP < self.BreakPoint) {
      return;
    }

    img = img || "images/Plants/KernelPult/butter_spilt.webp";
    let body = self._TMP_ELEBODY || self.EleBody;
    let bodyStyle = body.style;
    let oOpacity = bodyStyle.opacity;
    let listener = false; //是否已经有listener，有的话不用重新监听

    let canvas;
    let ctx;
    /* 第一次定身执行时 */

    if (!self.FreeSetbodyTime) {
      self.Speed = 0;
      /* 处理dom */

      canvas = NewEle("Buttered_" + self.id, "canvas", bodyStyle.cssText, {
        "height": body.offsetHeight,
        "width": body.offsetWidth
      }, self.Ele);
      ctx = canvas.getContext("2d");
      ctx.drawImage(self.EleBody, 0, 0, body.offsetWidth, body.offsetHeight);
      bodyStyle.opacity = 0;
      self._TMP_ELEBODY = body;
      self.EleBody = canvas; //更改EleBody的元素 //属性复制

      for (let i = 0; i < self._TMP_ELEBODY.attributes.length; i++) {
        //属性复制
        let name = self._TMP_ELEBODY.attributes[i].nodeName;

        if (!/id|width|height|style|src/.test(name)) {
          self.EleBody.setAttribute(name, self._TMP_ELEBODY.attributes[i].nodeValue);
        }
      }
      /* 检查特殊图片的变化 */


      oSym.addTask(1, function CheckSPC(last = null) {
        if (!$Z[self.id] || self.HP < self.BreakPoint) {
          //没血量自动解除定身（在NormalDie的时候有用）
          if (self._FREESetBody_) {
            self._FREESetBody_();
          }
        } else if ($Z[self.id] && self.FreeSetbodyTime) {
          //时刻检查假的self.EleBody即canvas的src属性值变化并把这个值赋值到真正的EleBody上
          if (canvas.src) {
            self._TMP_ELEBODY.src = canvas.src;
            canvas.src = "";
          }

          if (!listener && last !== self._TMP_ELEBODY.src) {
            listener = true;

            function draw() {
              listener = false;

              if (!self._TMP_ELEBODY) {
                return;
              } //绘制僵尸图片的变化


              ctx.clearRect(0, 0, body.offsetWidth * 2, body.offsetHeight * 2);
              ctx.drawImage(self._TMP_ELEBODY, 0, 0, body.offsetWidth, body.offsetHeight);
            }

            self._TMP_ELEBODY.complete ? draw() : self._TMP_ELEBODY.addEventListener("load", draw, {
              once: true
            });
            last = self._TMP_ELEBODY.src;
          } //如有改变则重定位黄油


          let top = Number.parseInt(self._TMP_ELEBODY.style.top) || 0;
          let position = self.HeadTargetPosition.length > self.isAttacking ? self.HeadTargetPosition[self.isAttacking] : self.HeadTargetPosition[0];
          position.y += top;

          for (let i of self._Butter_Img_) {
            if (position.x != Number.parseInt(i.style.left) || position.y != Number.parseInt(i.style.top)) {
              i.style.left = position.x + delta[0] + "px";
              i.style.top = position.y + delta[1] + "px";
            }
          }

          position.y -= top;
          oSym.addTask(1, CheckSPC, [last]);
        }
      }); //结束定身

      self._FREESetBody_ = function () {
        self.FreeSetbodyTime = 0;
        self.EleBody = self._TMP_ELEBODY;

        if (self.EleBody) {
          self.EleBody.style.opacity = oOpacity;

          for (let i = 0; i < canvas.attributes.length; i++) {
            //还原属性
            let name = canvas.attributes[i].nodeName;

            if (!/id|width|height|src/.test(name)) {
              self.EleBody.setAttribute(name, canvas.attributes[i].nodeValue);
            }
          }

          canvas.src && (self.EleBody.src = canvas.src);
        }

        ClearChild(canvas);
        delete self._TMP_ELEBODY;

        for (let i = self._Butter_Img_.length - 1; i >= 0; i--) {
          ClearChild(self._Butter_Img_[i]);
        }

        delete self._Butter_Img_;

        if (!self.FreeFreezeTime) {
          self.Speed = self.FreeSlowTime ? self.OSpeed / 2 : self.OSpeed;
          self.isAttacking === 1 && self.JudgeAttack();
        }

        delete self._FREESetBody_;
      };
    } else {
      canvas = self.EleBody;
      ctx = canvas.getContext("2d");
    } //多次定身图片不一样的情况


    if (!$("butter" + self.id + img)) {
      !self._Butter_Img_ && (self._Butter_Img_ = []);
      let position = self.HeadTargetPosition.length > self.isAttacking ? self.HeadTargetPosition[self.isAttacking] : self.HeadTargetPosition[0];
      let topPos = (Number.parseInt(self._TMP_ELEBODY.style.top) || 0) + position.y + delta[1];

      self._Butter_Img_.push(NewImg("butter_" + self.id + img, img, (self.FangXiang == "GoRight" ? 'transform:rotateY(180deg);' : "") + `position:absolute;left:${position.x + delta[0]}px;top:${topPos}px;width:${picSize[0]}px;height:${picSize[1]}px;`, self.Ele));
    } //检查定身是否结束


    oSym.addTask(time, expectedFSBT => {
      if ($Z[self.id] && self.FreeSetbodyTime <= expectedFSBT && self._FREESetBody_) {
        self._FREESetBody_();
      }
    }, [self.FreeSetbodyTime = oSym.Now + time]);
  },

  getFireball(self, attackPower, dir) {
    self.FreeSlowTime = 0;
    self.Attack = self.OAttack;

    if (self.FreeFreezeTime || self.FreeSetbodyTime) {
      self.PlayNormalballAudio();
      self.Speed = self.OSpeed;
      ClearChild(ele.querySelector('.buff_freeze,.buff_vertigo'));
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        delFuncs: ['url'],
        option: 2
      });
    } else {
      self.PlayFireballAudio();
    }

    let LX = self.AttackedLX;
    let RX = self.AttackedRX;
    let R = self.R;
    let ArZ = !dir ? oZ.getArZ(LX, LX + 40, R) : oZ.getArZ(LR - 40, LR, R);
    ArZ.forEach(zombie => zombie.getSputtering(attackPower));
  },

  getSputtering(attackPower = 13) {
    this.getHit2(this, attackPower, 0);
  },

  getSlow(self) {
    if (self.isGoingDie) {
      return;
    }

    let ele = self.Ele;
    let oldTimeStamp = self.FreeSlowTime;
    let newTimeStamp = oSym.Now + 1000; //预期的解除冰冻的时间戳

    if (self.FreeExcitedTime) {
      //解除僵尸兴奋状态
      self.Speed = self.OSpeed;
      self.Attack = self.OAttack;
      self.FreeExcitedTime = 0;
      ClearChild(ele.querySelector('.buff_excited'));
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        delFuncs: [['url', oSVG.getSVG('getExcited')]],
        option: 2
      });
      return;
    }
    /* 僵尸减速与攻击削弱效果 */


    if (oldTimeStamp === 0) {
      self.Speed = 0.5 * self.OSpeed;
      self.Attack = self.OAttack * 0.5;
      $User.LowPerformanceMode && NewImg(`buff_freeze_${Math.random()}`, "images/zombies/buff_freeze.png", `${self.getFreezeCSS ? self.getFreezeCSS(self) : self.getShadow(self)};z-index:5;transform: scale(1);`, ele, {
        className: 'buff_freeze'
      });
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        addFuncs: [['url', oSVG.getSVG('getSnowPea')]],
        option: 2
      });
    }


    if (oldTimeStamp < newTimeStamp) {
      self.FreeSlowTime = newTimeStamp;
      oSym.addTask(1000, () => {
        //时间到后需要重新校验时间戳，确认僵尸未被重新冰冻
        if ($Z[self.id] && self.FreeSlowTime === newTimeStamp) {
          self.FreeSlowTime = 0;
          self.Attack = self.OAttack;
          self.Speed && (self.Speed = self.OSpeed);
          $User.LowPerformanceMode && ClearChild(ele.querySelector('.buff_freeze'));
          !$User.LowPerformanceMode && EditCompositeStyle({
            ele: self.EleBody,
            styleName: 'filter',
            delFuncs: [['url', oSVG.getSVG('getSnowPea')]],
            option: 2
          });
        }
      });
    }
  },

  getFreeze(self, id) {
    self.beAttacked && self.getHit0(self, 20, 0);
    self.Speed = 0;
    const img = NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.webp", self.getShadow(self), d.Ele);
    oSym.addTask(400, expectedFFT => {
      ClearChild(img);

      if ($Z[id] && self.FreeFreezeTime === expectedFFT) {
        self.FreeFreezeTime = 0;
        self.Attack = self.OAttack / 2;
        !self.FreeSetbodyTime && (self.Speed = 0.5 * self.OSpeed, self.isAttacking && self.JudgeAttack());
        oSym.addTask(1500, expectedFST => {
          if ($Z[id] && self.FreeSlowTime === expectedFST) {
            self.FreeSlowTime = 0;
            self.Attack = self.OAttack;
            !self.FreeSetbodyTime && (self.Speed = self.OSpeed);
          }
        }, [self.FreeSlowTime = oSym.Now + 1500]);
      }
    }, [self.FreeFreezeTime = oSym.Now + 400]);
  },

  getExcited(intensity, duration_ = undefined) {
    let self = this;
    let ele = self.Ele;
    let duration = duration_ !== null && duration_ !== void 0 ? duration_ : 1200;
    let oldTimeStamp = self.FreeExcitedTime;
    let newTimeStamp = oSym.Now + duration; //解除僵尸原先的削弱效果

    if (self.FreeSlowTime || self.FreeFreezeTime || self.FreeSetbodyTime) {
      self.Speed = self.OSpeed;
      self.Attack = self.OAttack;
      self.FreeSlowTime = 0;
      self.FreeFreezeTime = 0;
      ClearChild(...ele.querySelectorAll('.buff_freeze,.buff_vertigo'));
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        delFuncs: [['url', oSVG.getSVG('getSnowPea')]],
        option: 2
      });
      return;
    }

    self.Speed *= intensity;
    self.Attack *= intensity;

    if (!oldTimeStamp) {
      NewImg(`buff_excited_${Math.random()}`, "images/zombies/buff_excited.png", self.getShadow(self) + "z-index:5;transform: scale(1);", ele, {
        className: 'buff_excited'
      });
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        addFuncs: [['url', oSVG.getSVG('getExcited')]],
        option: 2
      });
    }

    if (oldTimeStamp < newTimeStamp) {
      self.FreeExcitedTime = newTimeStamp;
      oSym.addTask(duration, () => {
        if ($Z[self.id] && self.FreeExcitedTime === newTimeStamp) {
          ClearChild(ele.querySelector('.buff_excited'));
          self.FreeExcitedTime = 0;
          self.Attack = self.OAttack;
          self.Speed && (self.Speed = self.OSpeed);
          !$User.LowPerformanceMode && EditCompositeStyle({
            ele: self.EleBody,
            styleName: 'filter',
            delFuncs: [['url', oSVG.getSVG('getExcited')]],
            option: 2
          });
        }
      });
    }
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
  NormalDie: function () {
    let self = this,
        ele = self.Ele;
    self.PrivateDie && self.PrivateDie(self);
    self.EleBody.src = self.PicArr[self.DieGif];
    oSym.addTask(300, oEffects.fadeOut, [ele, 'fast', _ => ClearChild(ele)]);
    self.HP = 0;
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  },

  //灰烬死亡
  ExplosionDie() {
    let self = this;
    let eleWrap = self.Ele;
    let eleBody = self.EleBody;

    if (self._FREESetBody_) {
      self._FREESetBody_();

      delete self._FREESetBody_;
      eleBody = self.EleBody;
    }

    let explosionEle = NewImg(self.id + '_BoomDieGif', self.PicArr[self.BoomDieGif], null, eleWrap);
    SetStyle(explosionEle, self.getCharredCSS(self));
    ClearChild(eleBody);
    self.PrivateDie && self.PrivateDie(self);
    oSym.addTask(300, oEffects.fadeOut, [eleWrap, 0.7, _ => {
      ClearChild(eleWrap);
    }]);
    self.HP = 0;
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  },

  //死亡，直接移除
  DisappearDie: function () {
    let _this = this;

    _this.PrivateDie && _this.PrivateDie(_this);
    ClearChild(_this.Ele);
    _this.HP = 0;
    delete $Z[_this.id];
    oP.MonitorZombiePosition(self);
    _this.PZ && oP.MonPrgs();
  },
  //压死，小推车
  CrushDie: function (rotateTime = 0.15) {
    let self = this,
        id = self.id;
    self.PrivateDie && self.PrivateDie(self);
    self.GoingDieHead(id, self.PicArr, self);
    self.HP = 0;
    self.EleBody.src = self.PicArr[self.LostHeadGif];
    delete $Z[id];
    self.DieRotate(self, rotateTime);
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  },

  DieRotate(self, time = 0.1) {
    if (self._FREESetBody_) {
      //清除定身效果
      self._FREESetBody_();

      delete self._FREESetBody_;
    }

    if (self.AKind != 0) {
      ClearChild(self.Ele);
      return;
    }

    let TrueWidth = self.beAttackedPointR - self.beAttackedPointL;
    oEffects.Animate(self.EleBody, {
      transform: "rotate(90deg) rotateY(45deg)",
      top: self.height - TrueWidth - 20 + "px",
      left: "30px"
    }, time / oSym.NowSpeed, 'cubic-bezier(0.4, 0.0, 0.6, 1)', _ => {
      oEffects.Animate(self.Ele, {
        opacity: 0
      }, 0.05 / oSym.NowSpeed, false, _ => {
        ClearChild(self.Ele);
      });
    });
  },

  //被三叶草吹飞死亡，即战术风扇
  FloatingDie(self) {
    const id = self.id;
    if (!$Z[id] || !self.isFloating) return;
    self.HP = 0;
    delete $Z[id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
    oEffects.Animate(self.Ele, {
      left: '1290px'
    }, 'fast', 'cubic-bezier(0.4, 0.0, 0.6, 1)', _ => {
      ClearChild(self.Ele);
    });
  },

  GoingDieHead(id, PicArr, self) {
    let ele = NewImg(`${id}_Head`, PicArr[self.HeadGif], `left:${self.AttackedLX}px;top:${self.pixelTop - 20}px;z-index:${self.zIndex};`, EDPZ);

    if (oGd.$GdType[self.R][GetC(self.ZX)] === 2) {
      oSym.addTask(90, _ => {
        let src = RandomPic(WaterSplashImg);
        ele.src = src;
        SetStyle(ele, {
          width: "100px",
          height: "122px",
          top: GetY(self.R) - 110 + "px",
          left: self.AttackedLX + 80 + "px"
        });
        oSym.addTask(113, _ => {
          ClearChild(ele);
        });
        ele.addEventListener("unload", _ => {
          URL.revokeObjectURL(src);
          delete oImage["garbage"][src];
        }, {
          once: true
        });
      });
    } else {
      oSym.addTask(200, oEffects.fadeOut, [ele, 'fast', ClearChild]);
    }

    let url = EditCompositeStyle({
      ele: self.EleBody,
      styleName: 'filter',
      targetFunc: 'url'
    });
    EditCompositeStyle({
      ele,
      styleName: 'filter',
      addFuncs: [["url", url]],
      option: 2
    });
  },

  GoingDieHeadNew(id, PicArr, self, config = {}) {
    //通过旋转图片来达到掉头
    let bca,
        topa = self.pixelTop + (Number.parseInt(self.EleBody.style.top) || 0),
        lefta = self.AttackedLX; //默认数据

    let R = self.R;
    bca = GetY(R);
    let rand = Math.random() >= 0.5 ? 1 : -1;
    let {
      vy = -3,
      ay = 0.4,
      vx = rand * (-Math.random() * 1 - 1),
      rotate = 0,
      bc = bca,
      top = topa,
      left = lefta,
      times = 0,
      rotateSpeed = rand * (Math.random() * 1.5 + 1.5)
    } = config;
    let ele = NewImg(`${id}_Head`, PicArr[self.HeadGif], `left:${left}px;top:${top}px;z-index:${self.zIndex};transform:rotate(${-rotate}deg)`, EDPZ);
    oSym.addTask(3, function loop() {
      top += vy += ay;
      left += vx;
      ele.style.top = top + "px";
      ele.style.left = left + "px";
      ele.style.transform = `rotate(-${rotate}deg)`;
      rotate += rotateSpeed;

      while (rotate < 0) {
        rotate = (360 + rotate) % 360;
      }

      if (top <= bc) {
        oSym.addTask(3, loop);
      } else {
        if (times > 3) {
          oSym.addTask(50, oEffects.fadeOut, [ele, 'fast', ClearChild]);
        } else if (oGd.$GdType[R][GetC(left)] !== 2) {
          top = bc;
          vy = -vy / 3;
          times++;
          oSym.addTask(3, loop);
        } else {
          ClearChild(ele);
          let src = RandomPic(WaterSplashImg);
          let tmp = NewImg(0, src, `position:absolute;left:${left}px;top:${top}px;z-index:${self.zIndex};width:100px;height:122px;transform:translateX(-50%) translateY(-50%);`, EDPZ);
          tmp.addEventListener("unload", _ => {
            URL.revokeObjectURL(src);
            delete oImage["garbage"][src];
          }, {
            once: true
          });
          oSym.addTask(113, ClearChild, [tmp]);
        }
      }
    });
    let url = EditCompositeStyle({
      ele: self.EleBody,
      styleName: 'filter',
      targetFunc: 'url'
    });
    EditCompositeStyle({
      ele: ele,
      styleName: 'filter',
      addFuncs: [["url", url]],
      option: 2
    });
  },

  ChanceThrowCoin(self) {
    if (oS.CoinRatio === 0 || self.isPuppet || !oS.isStartGame) {
      return;
    }

    let rand = Math.random() * 10000;

    if (rand < 70 * oS.CoinRatio) {
      new oCoin("gold").throwIt({
        x: self.ZX,
        y: self.pixelTop + self.height / 2
      });
    } else if (rand < 500 * oS.CoinRatio) {
      new oCoin("silver").throwIt({
        x: self.ZX,
        y: self.pixelTop + self.height / 2
      });
    }
  },

  GoingDie(img) {
    let self = this,
        id = self.id;
    self.EleBody.src = img;
    self.GoingDieHead(id, self.PicArr, self);
    self.beAttacked = 0;
    self.isGoingDie = 1;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.AutoReduceHP(id);
    self.ChanceThrowCoin(self);
  },

  AutoReduceHP(id) {
    //垂死僵尸持续减血
    let self = this;
    oSym.addTask(100, _ => {
      $Z[id] && ((self.HP -= 60) < 1 ? self.NormalDie() : self.AutoReduceHP(id));
    });
  },

  JudgeAttack() {
    let self = this;
    let ZX = self.ZX;
    let crood = self.R + "_";
    let C = GetC(ZX);
    let G = oGd.$;
    let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

    if (arr && self.Altitude === 1) {
      //地上的僵尸才能检测攻击
      !self.isAttacking && (self.isAttacking = 1, self.EleBody.src = self.PicArr[self.AttackGif]); //如果是首次触发攻击，需要更新到攻击状态

      self.NormalAttack(...arr); //实施攻击
    } else {
      //撤销攻击状态
      self.isAttacking && (self.isAttacking = 0, self.EleBody.src = self.PicArr[self.NormalGif]);
    }
  },

  JudgeLR(self, crood, C, ZX, G) {
    //远程判定，普通僵尸的远程是自己前面一格
    if (C > 10 || C < 1) return;
    crood += C - 1 + '_';
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.canEat) {
        return One_Dimensional_Intersection([self.X + self.beAttackedPointL, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
      }

      z--;
    }
  },

  JudgeSR(self, crood, C, ZX, G) {
    //近程判定，普通僵尸的近程是自己所在一格
    if (C > 9) return;
    crood += C + "_";
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.canEat) {
        return One_Dimensional_Intersection([self.X + self.beAttackedPointL, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
      }

      z--;
    }
  },

  NormalAttack(zid, pid) {
    PlayAudio(["chomp", "chompsoft", 'chomp2'].random());
    oSym.addTask(50, _ => {
      $Z[zid] && PlayAudio(["chomp", "chompsoft", 'chomp2'].random());
    });
    oSym.addTask(100, _ => {
      let self = $Z[zid];

      if (self && self.beAttacked && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
        //这里需要再检测一次，否则可能会出现莫名穿过的现象，或者啃的植物不对的现象
        let ZX = self.ZX;
        let crood = self.R + "_";
        let C = GetC(ZX);
        let G = oGd.$;
        let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

        if (arr) {
          [zid, pid] = arr;
          let plant = $P[pid];
          plant && plant.getHurt(self, self.AKind, self.Attack);
        }

        self.JudgeAttack();
      }
    });
  },

  BoomGIF(left, top) {
    PlayAudio("ZombieBoom");
    let self = this;
    oEffects.ImgSpriter({
      ele: NewEle(self.id + '_Boom', "div", `position:absolute;overflow:hidden;z-index:${self.zIndex + 2};width:196px;height:259px;left:${left}px;top:${top}px;background:url(images/Zombies/Boom.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -196,
      frameNum: 19
    });
  },

  SetBrightness(self, ele, deep) {
    ele && EditCompositeStyle({
      ele,
      styleName: 'filter',
      delFuncs: ['brightness'],
      addFuncs: [['brightness', deep ? '110%' : '100%']],
      option: 2
    });
  },

  Bounce(config = {}) {
    //僵尸弹起效果，会触发战术风扇

    const self = this;
    const {
      distance = 1.1,
      velocity = -5,
      canBeAttacked = 1
    } = config;
    const {
      Speed: oldSpeed,
      Altitude: oldAltitude,
      id: zid
    } = self;

    if (!self.isFloating && oldAltitude !== 3) {
      //被弹起的和高空飞行状态的僵尸不能触发再弹起
      self.Speed = 0; //标记僵尸静止

      self.isFloating = true; //标记僵尸浮空

      !canBeAttacked && (self.Altitude = 3); //标记僵尸高空飞行，不可被攻击

      let wrapEle = this.Ele;
      let bodyEle = this.EleBody;
      let x = Number.parseFloat(wrapEle.style.left);
      let y = Number.parseFloat(bodyEle.style.top);
      let s = 80 * distance;
      let oldTop = bodyEle.style.top;
      let newX = x + s;
      let gravity = 0.2;
      let vy = velocity;
      let vx = -(gravity * s) / (2 * vy);
      let lastTime = 0;
      requestAnimationFrame(function drawFrame() {
        if ($Z[zid]) {
          vy += gravity;
          wrapEle.style.left = (x += vx) + 'px';
          self.AttackedLX += vx;
          self.AttackedRX += vx;
          self.ZX += vx;
          self.X += vx;
          bodyEle.style.top = (y += vy) + 'px';

          if (y >= 0) {
            //检查僵尸是否落地，否则继续回调
            self.isFloating = false;
            bodyEle.style.top = oldTop; //上次自己做关卡时还是出bug，这里修正()

            self.Altitude = oldAltitude;
            self.Speed = oldSpeed;
            return;
          }

          let currTime = Date.now();
          let timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
          oSym.addTask(timeToCall, drawFrame);
          lastTime = currTime + timeToCall;
        }
      });
    }
  }

}),
    OrnNoneZombies = function () {
  let getHit = function (self, attack) {
    if ((self.HP -= attack) < self.BreakPoint) {
      self.GoingDie(self.PicArr[[self.LostHeadGif, self.LostHeadAttackGif][self.isAttacking]]);

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = function () {};

      return;
    }

    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
  };

  return InheritO(CZombies, {
    EName: 'OrnNoneZombies',
    getHit,
    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getHit3: getHit,

    getPea(self, attack, direction) {
      //direction表示触发器侦测方向，0为水平自左向右，1为水平自右向左
      self.PlayNormalballAudio();
      self.getHit0(self, attack, direction);
    },

    getFirePea(self, attackPower, dir) {
      self.PlayFireballAudio();

      if (self.FreeSlowTime || self.FreeFreezeTime) {
        self.Speed = self.OSpeed;
        self.Attack = self.OAttack;
        self.FreeSlowTime = self.FreeFreezeTime = 0;
        ClearChild(self.Ele.querySelector('.buff_freeze,.buff_vertigo'));
        !$User.LowPerformanceMode && EditCompositeStyle({
          ele: self.EleBody,
          styleName: 'filter',
          delFuncs: ['url'],
          option: 2
        });
      }

      const LX = self.AttackedLX;
      oZ.getArZ(LX, LX + 40, self.R).forEach(zombie => zombie.getFirePeaSputtering());
      self.getHit0(self, attackPower, dir);
    },

    getFirePeaSputtering() {
      this.getHit0(this, 13);
    },

    getSnowPea(self, attackPower, dir) {
      if (self.FreeSlowTime === 0) {
        self.PlaySlowballAudio();
      } else {
        self.PlayNormalballAudio();
      }

      self.getSlow(self);
      self.getHit0(self, attackPower, dir);
    },

    getVertigo(self, attackPower, dir, style) {
      var _style;

      let ele = self.Ele;
      let oldTimeStampV = self.FreeVertigoTime;
      let oldTimeStampS = self.FreeSlowTime;
      let newTimeStamp = oSym.Now + 1000;
      style = (_style = style) !== null && _style !== void 0 ? _style : `left:${self.beAttackedPointL - 15}px;top:{self.height-115}px;`;

      if (self.FreeExcitedTime) {
        self.Speed = self.OSpeed;
        self.Attack = self.OAttack;
        self.FreeExcitedTime = 0;
        ClearChild(ele.querySelector('.buff_excited'));
        return;
      }

      if (oldTimeStampS === 0) {
        self.PlaySlowballAudio();
        self.Speed = 0.5 * self.OSpeed;
        self.Attack = self.OAttack * 0.5;
        NewImg(`buff_vertigo_${Math.random()}`, "images/zombies/buff_vertigo.webp", style, ele, {
          className: 'buff_vertigo'
        });
      } else {
        self.PlayNormalballAudio();
      }

      if (oldTimeStampS < newTimeStamp) {
        self.FreeSlowTime = newTimeStamp;
        oSym.addTask(1000, () => {
          if (!$Z[self.id]) return;
          self.FreeSlowTime === newTimeStamp && (self.FreeSlowTime = 0, self.Attack = self.OAttack, self.Speed && (self.Speed = self.OSpeed));
        });
      }

      if (oldTimeStampV < newTimeStamp) {
        self.FreeVertigoTime = newTimeStamp;
        oSym.addTask(1000, () => {
          if (!$Z[self.id]) return;
          self.FreeVertigoTime === newTimeStamp && (ClearChild(ele.querySelector('.buff_vertigo')), self.FreeVertigoTime = 0);
        });
      }

      self.getHit2(self, attackPower, dir);
    }

  });
}(),
    OrnIZombies = function () {
  var a = function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], !f.NormalballAudioTT && (f.PlayNormalballAudio = e.PlayNormalballAudio), //是否使用默认打击音乐开关 
    f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit);
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  };

  return InheritO(OrnNoneZombies, {
    EName: 'OrnIZombies',
    Ornaments: 1,
    OrnLostNormalGif: 8,
    OrnLostAttackGif: 9,
    getHit: a,
    getHit0: a,
    getHit1: a,
    getHit2: a,
    getHit3: a
  });
}(),
    OrnIIZombies = InheritO(OrnNoneZombies, {
  EName: 'OrnIIZombies',
  Ornaments: 2,
  BreakPoint: 91,
  NormalGif: 2,
  AttackGif: 3,
  LostHeadGif: 4,
  LostHeadAttackGif: 5,
  OrnLostNormalGif: 6,
  OrnLostAttackGif: 7,
  OrnLostHeadNormalGif: 8,
  OrnLostHeadAttackGif: 9,
  HeadGif: 10,
  DieGif: 11
}),
    //庭院僵尸从以下开始
oZombie = InheritO(OrnNoneZombies, {
  EName: "oZombie",
  CName: $__language_Array__["c867bd4b2d9e4a9bed4df55d9da81877"],
  StandGif: 8,
  BoomDieGif: 9,
  width: 216,
  height: 164,
  beAttackedPointL: 70,
  beAttackedPointR: 140,
  Almanac: {
    Tip: $__language_Array__["f1fac59b6dbe88d6e4f67612b475efd5"],
    Story: $__language_Array__["6466cc5f5b654141e53b97c8ccbf29e9"]
  },
  getShadow: self => "left:75px;top:" + (self.height - 25) + "px;",
  PicArr: (a => ["", "", a + "Zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'])("images/Zombies/Zombie/"),

  GoingDieHead(id, PicArr, self) {
    CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
      top: self.pixelTop + 44,
      left: self.X + 80,
      bc: self.pixelTop + 118
    });
  }

}),
    oConeheadZombie = InheritO(OrnIZombies, {
  EName: "oConeheadZombie",
  CName: $__language_Array__["216238deb69ea24283b71a281f46a0df"],
  OrnHP: 370,
  Lvl: 2,
  StandGif: 10,
  BoomDieGif: 11,
  width: 216,
  height: 164,
  beAttackedPointL: 70,
  beAttackedPointR: 140,
  Almanac: {
    Tip: $__language_Array__["1a98b7e36f0ad7e006067d0105fd0970"],
    Story: $__language_Array__["2d47de0d27895fa432b930841d9c1642"]
  },
  getShadow: function (a) {
    return "left:75px;top:" + (a.height - 25) + "px;";
  },
  PicArr: function () {
    var b = "images/Zombies/ConeheadZombie/",
        a = "images/Zombies/Zombie/";
    return ["", "", b + "ConeheadZombie.webp", b + "ConeheadZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "Zombie.webp", a + "ZombieAttack.webp", b + "1.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  AudioArr: ["plastichit", 'plastichit2'],
  PlayNormalballAudio: function () {
    PlayAudio(["plastichit", 'plastichit2'][Math.round(Math.random() * 1)]);
  },

  GoingDieHead(id, PicArr, self) {
    CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
      top: self.pixelTop + 44,
      left: self.X + 80,
      bc: self.pixelTop + 118
    });
  }

}),
    oBucketheadZombie = InheritO(oConeheadZombie, {
  EName: "oBucketheadZombie",
  CName: $__language_Array__["bf68f3a4fdcd2a3be895e84b8b3764be"],
  OrnHP: 1100,
  Lvl: 3,
  width: 216,
  height: 164,
  beAttackedPointL: 70,
  beAttackedPointR: 140,
  Almanac: {
    Tip: $__language_Array__["34332e5cef79e437202cf096b9f183c4"],
    Story: $__language_Array__["2cbf2dbf730fe8cd1e8620666f42c4a9"]
  },
  getShadow: function (a) {
    return "left:75px;top:" + (a.height - 25) + "px;";
  },
  AudioArr: ["shieldhit", "shieldhit2"],
  PlayNormalballAudio: function () {
    PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
  },
  PicArr: function () {
    var b = "images/Zombies/BucketheadZombie/",
        a = "images/Zombies/Zombie/";
    return ["", "", b + "BucketheadZombie.webp", b + "BucketheadZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "Zombie.webp", a + "ZombieAttack.webp", b + "1.webp", 'images/Zombies/BoomDie.webp'];
  }()
}),
    //森林僵尸从以下开始
oNewspaperZombie = InheritO(OrnIIZombies, {
  EName: "oNewspaperZombie",
  CName: $__language_Array__["3baa218074e5ee77476d12d2ca63fa81"],
  OrnHP: 300,
  Lvl: 2,
  LostPaperGif: 12,
  StandGif: 13,
  BoomDieGif: 14,
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  LostPaperSpeed: 4.8,
  LostPaperAttack: 200,
  Almanac: {
    Tip: $__language_Array__["064cd1ab62bcddd838ab50922f621643"],

    get Story() {
      let strB = $__language_Array__["3fc3c83bbb9dd08969a34530b1d3a7e8"];
      let strC = $__language_Array__["6ef193d07660aba73ed0ae3cd32eda22"];
      let strD = $__language_Array__["d34ae8f837df9eeeb4dfc82919087067"];
      let strA = strB + strD + strC;
      let json = localStorage.JNG_TR_WON ? JSON.parse(localStorage.JNG_TR_WON) : {};

      if (json["Industry23"]) {
        return strA + $__language_Array__["bf9bab52b5af65dbb250c99b54380e2a"];
      } else if (json["Industry20"]) {
        return strA + $__language_Array__["ad2865027e89f9dd9c116d087e0e62b8"];
      } else if (json["Industry17"]) {
        return strB + $__language_Array__["acfe9eb17b03acfbc7e7471badd9db91"];
      } else if (json["Industry13"]) {
        return strA + $__language_Array__["bed49cb94727d7ce7e11dfbe89ce9d60"];
      } else {
        return strB + strD + $__language_Array__["510b8b6b5a68d627796519a289acc712"];
      }
    },

    Speed: $__language_Array__["8b5b723ee066715424b0f38b2651f667"]
  },

  GetCardImg() {
    let self = this;
    return "images/Card/" + self.EName.substr(1).split("_")[0] + ".webp";
  },

  PicArr: function () {
    var a = "images/Zombies/NewspaperZombie/";
    return ["", "", a + "HeadWalk1.webp", a + "HeadAttack1.webp", a + "LostHeadWalk1.webp", a + "LostHeadAttack1.webp", a + "HeadWalk0.webp", a + "HeadAttack0.webp", a + "LostHeadWalk0.webp", a + "LostHeadAttack0.webp", a + "Head.webp", a + "Die.webp", a + "LostNewspaper.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  AudioArr: ["newspaper_rarrgh2", "newspaper_rarrgh2", "newspaper_rip"],
  getShadow: function (a) {
    return "left:75px;top:" + (a.height - 25) + "px;";
  },

  GoingDie(img) {
    const self = this;
    const id = self.id;
    const url = EditCompositeStyle({
      ele: self.EleBody,
      styleName: 'filter',
      targetFunc: 'url'
    });
    const headEle = NewImg(id + '_Head', self.PicArr[self.HeadGif], "left:" + self.AttackedLX + "px;top:" + (self.pixelTop - 20) + "px;z-index:" + self.zIndex, EDPZ);
    self.EleBody.src = img;
    EditCompositeStyle({
      ele: headEle,
      styleName: 'filter',
      addFuncs: [["url", url]],
      option: 2
    });
    oSym.addTask(200, ClearChild, [headEle]);
    self.beAttacked = 0;
    self.isGoingDie = 1;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.AutoReduceHP(id);
    self.ChanceThrowCoin(self);
  },

  getSnowPea: function (c, a, b) {
    PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
    c.getHit0(c, a, b);
  },

  getPea(self, attack, direction = 0) {
    if (/^Polar\d+jx$/.test(oS.Lvl)) {
      //泠漪:冰原镜像的读报可以直接被射手击中本体
      return self.getHit2(self, attack);
    }

    self.PlayNormalballAudio();
    self.getHit0(self, attack, direction);
  },

  getFirePea(self, attackPower, dir) {
    self.PlayFireballAudio();

    if (self.FreeSlowTime || self.FreeFreezeTime) {
      self.Speed = self.OSpeed;
      self.Attack = self.OAttack;
      self.FreeSlowTime = self.FreeFreezeTime = 0;
      ClearChild(self.Ele.querySelector('.buff_freeze,.buff_vertigo'));
      !$User.LowPerformanceMode && EditCompositeStyle({
        ele: self.EleBody,
        styleName: 'filter',
        delFuncs: ['url'],
        option: 2
      });
    }

    const LX = self.AttackedLX;
    oZ.getArZ(LX, LX + 40, self.R).forEach(zombie => zombie !== self && zombie.getFirePeaSputtering());

    if ((self.HP -= attackPower) < self.BreakPoint) {
      self.getFirePea = OrnNoneZombies.prototype.getFirePea;
      self.GoingDie(self.PicArr[[self.LostHeadGif, self.LostHeadAttackGif][self.isAttacking]]);

      self.getHit = self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = () => {};
    } else {
      self.CheckOrnHP(self, self.id, self.OrnHP, attackPower, self.PicArr, self.isAttacking, 0);
      self.SetBrightness(self, self.EleBody, 1);
      oSym.addTask(10, () => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
    }
  },

  getHit0: function (c, a, b) {
    b == c.WalkDirection ? (c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetBrightness(c, c.EleBody, 1), oSym.addTask(10, (e, d) => {
      (d = $Z[e]) && d.SetBrightness(d, d.EleBody, 0);
    }, [c.id])) : (c.HP -= a) < c.BreakPoint && (c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]), c.getFirePea = OrnNoneZombies.prototype.getFirePea, c.getSnowPea = OrnNoneZombies.prototype.getSnowPea, c.getHit = c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function () {});
  },
  getHit1: function (b, a) {
    (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function () {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetBrightness(b, b.EleBody, 1), oSym.addTask(10, (d, c) => {
      (c = $Z[d]) && c.SetBrightness(c, c.EleBody, 0);
    }, [b.id]));
  },
  getHit2: function (b, a) {
    (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function () {}) : (b.SetBrightness(b, b.EleBody, 1), oSym.addTask(10, function (d, c) {
      (c = $Z[d]) && c.SetBrightness(c, c.EleBody, 0);
    }, [b.id]));
  },
  getHit3: function (b, a) {
    (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function () {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetBrightness(b, b.EleBody, 1), oSym.addTask(10, function (d, c) {
      (c = $Z[d]) && c.SetBrightness(c, c.EleBody, 0);
    }, [b.id]));
  },
  CheckOrnHP: function (g, h, d, c, f, b, a) {
    let e = OrnNoneZombies.prototype;

    if ((g.OrnHP = d -= c) < 1) {
      PlayAudio("newspaper_rip");
      a && (g.HP += d);

      g.ChkActs = g.ChkActs1 = _ => 1;

      g.EleBody.src = f[g.LostPaperGif];
      g.Ornaments = 0;
      g.LostHeadGif = 8;
      g.LostHeadAttackGif = 9;
      g.getFirePea = e.getFirePea;
      g.getSnowPea = e.getSnowPea;
      g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit;
      oSym.addTask(150, function (m, l) {
        let k = $Z[m];

        if (!k) {
          return;
        }

        let j = CZombies.prototype,
            i = k.OSpeed = k.LostPaperSpeed;
        k.ChkActs = k[k.FangXiang];
        k.ChkActs1 = j.ChkActs1;
        k.Attack = k.LostPaperAttack;
        k.OAttack = k.Attack;
        k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);

        if (!k.beAttacked) {
          return;
        }

        PlayAudio(["newspaper_rarrgh", "newspaper_rarrgh2"][Math.round(Math.random() * 1)]);
        k.EleBody.src = l;
        k.JudgeAttack();
      }, [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]);
    }
  }
}),
    oBalloonZombie = InheritO(OrnNoneZombies, {
  EName: "oBalloonZombie",
  CName: $__language_Array__["9965791405605bd852bb0d47804aae1f"],
  Lvl: 2,
  width: 348,
  height: 210,
  OSpeed: 1.5,
  Speed: 2.5,
  AttackGif: 2,
  LostHeadGif: 3,
  LostHeadAttackGif: 4,
  HeadGif: 5,
  DieGif: 6,
  StandGif: 11,
  NormalGif: 11,
  BoomDieGif: 12,
  beAttackedPointL: 215,
  beAttackedPointR: 260,
  isFloating: true,
  HeadTargetPosition: [{
    x: 170,
    y: 105
  }, {
    x: 225,
    y: 105
  }],
  //头的位置数据
  AudioArr: ["balloon_pop", 'ballooninflate'],
  PicArr: function () {
    var a = "images/Zombies/BalloonZombie/";
    return ["", "", a + "PoleVaultingZombieAttack.webp", a + "PoleVaultingZombieLostHead.webp", a + "PoleVaultingZombieLostHeadAttack.webp", a + "PoleVaultingZombieHead.webp", a + "PoleVaultingZombieDie.webp", a + "PoleVaultingZombieWalk.webp", a + "PoleVaultingZombieLostHeadWalk.webp", a + "PoleVaultingZombieJump.webp", a + "PoleVaultingZombieJump2.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  Almanac: {
    Tip: $__language_Array__["77508f9eefedf0a252804bcc1d75b0ef"],
    Speed: $__language_Array__["f936d5500c4364fd956a7d7aebc96324"],
    Story: $__language_Array__["3977f82b964cc73f4b55a70176ce9e0f"]
  },
  BirthCallBack: function (a) {
    PlayAudio("ballooninflate");
    OrnNoneZombies.prototype.BirthCallBack(a);
  },
  getShadow: self => `left:${self.beAttackedPointL - 10}px;top:${self.height - 20}px;`,
  getCharredCSS: self => ({
    left: `205px`,
    top: `100px`
  }),

  GoingDieHead(id, PicArr, self) {
    oSym.addTask(200, ClearChild, [NewImg(`${id}_Head`, PicArr[self.HeadGif], "left:" + self.X + "px;top:" + (self.pixelTop - 20) + "px;z-index:" + self.zIndex, EDPZ)]);
  },

  JudgeAttack: function () {
    var g = this,
        b = g.ZX,
        d = g.R + "_",
        c = GetC(b),
        h = oGd.$,
        f,
        a,
        p,
        e = b - 74;

    for (var f = c - 2, len = c; f <= len; f++) {
      if (f > 9) {
        continue;
      }

      for (a = 2; a > -1; (p = h[d + f + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= e && p.AttackedLX < b && p.canEat && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, g.NormalAttack(g.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, (g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id))));
    }
  },
  getCrushed: function (a) {
    this.NormalAttack(this.id, a.id, a.AttackedLX);

    this.getCrushed = function () {
      return false;
    };

    a.Stature > 0 && oSym.addTask(50, function (c) {
      var b = $Z[c];
      b && b.CrushDie();
    }, [this.id]);
    return false;
  },
  NormalAttack: function (d, b, g) {
    var f = $Z[d],
        a = f.Ele,
        c = f.EleShadow,
        e = f.EleBody;
    e.src = "images/Zombies/BalloonZombie/PoleVaultingZombieJump.webp";
    SetHidden(c);
    f.isAttacking = 2;
    f.Altitude = 2;

    f.getFreeze = function () {
      f.getSnowPea(f, 20);
    };

    oSym.addTask(50, function (h) {
      $Z[h] && PlayAudio("balloon_pop");
    }, [d]);
    oSym.addTask(100, function (m, j, i, l, n) {
      var h = $Z[m],
          k = $P[j],
          q,
          r;

      if (h) {
        k && k.Stature > 0 ? ( //高坚果类植物
        h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = q = k.AttackedRX) - h.beAttackedPointL) + h.beAttackedPointR, SetStyle(i, {
          left: h.X + "px"
        }), n.src = "images/Zombies/BalloonZombie/PoleVaultingZombieWalk.webp", SetVisible(l), h.isAttacking = 0, h.Altitude = 1, h.OSpeed = h.Speed = 1.6, h.NormalGif = 7, h.LostHeadGif = 8, h.NormalAttack = (r = CZombies.prototype).NormalAttack, h.getCrushed = r.getCrushed, h.getFreeze = r.getFreeze, h.getRaven = r.getRaven, h.HeadTargetPosition[0].x += 30) : ( //普通植物
        h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - h.beAttackedPointR) + h.beAttackedPointL, SetStyle(i, {
          left: h.X + "px"
        }), n.src = "images/Zombies/BalloonZombie/PoleVaultingZombieJump2.webp", SetVisible(l), oSym.addTask(80, function (s, v) {
          var u = $Z[s],
              t;
          u && (v.src = "images/Zombies/BalloonZombie/PoleVaultingZombieWalk.webp", u.isAttacking = 0, u.Altitude = 1, u.OSpeed = u.Speed = 1.6, u.NormalGif = 7, u.LostHeadGif = 8, u.HeadTargetPosition[0].x += 30, u.NormalAttack = (t = CZombies.prototype).NormalAttack, u.getCrushed = t.getCrushed, u.getFreeze = t.getFreeze, u.getRaven = t.getRaven);
        }, [m, n]));
        h.isFloating = false;
      }
    }, [d, b, a, c, e]);
  },

  getVertigo(self, attackPower, dir) {
    OrnNoneZombies.prototype.getVertigo(self, attackPower, dir, `left:${self.beAttackedPointL - 50}px;top:${self.height - 120}px`);
  },

  //压死，小推车
  CrushDie: function (rotateTime = 0.15) {
    let self = this,
        id = self.id;
    self.PrivateDie && self.PrivateDie(self);
    self.GoingDieHead(id, self.PicArr, self);
    self.HP = 0;
    self.EleBody.src = self.PicArr[self.LostHeadGif];
    delete $Z[id];
    ClearChild(self.Ele);
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  },

  Bounce() {}

}),
    oStrollZombie = InheritO(OrnNoneZombies, {
  EName: "oStrollZombie",
  CName: $__language_Array__["1646156b61504879cd09a047b0752600"],
  OSpeed: 4.8,
  Speed: 4.8,
  HP: 130,
  AttackGif: 2,
  HeadGif: 3,
  DieGif: 4,
  StandGif: 5,
  BoomDieGif: 6,
  width: 166,
  height: 144,
  beAttackedPointL: 40,
  beAttackedPointR: 120,
  Almanac: {
    Tip: $__language_Array__["a4cc3c5f9cc44e03510b07ab6976ef9f"],
    Weakness: $__language_Array__["47487c0248ba031b5e40ae12f42fce91"],
    Story: $__language_Array__["a499b68be64c1e7a39c0ea3cc258596b"],
    Speed: $__language_Array__["426447ca47ebfe6eaced0f4182bda3d9"]
  },
  PicArr: (() => {
    let a = "images/Zombies/StrollZombie/";
    return ["", "", a + "Zombie.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
  })(),
  AudioArr: ["StrollZombie_Coming1", "StrollZombie_Coming2", "StrollZombie_Coming3"],
  getShadow: self => `left:55px;top:${self.height - 30}px;`,
  getCharredCSS: self => ({
    left: `55px`,
    top: self.height * 0.2 + `px`
  }),
  NormalAttack: (zid, pid) => oSym.addTask(100, () => {
    const zombie = $Z[zid],
          plant = $P[pid];
    zombie && !zombie.isGoingDie && !zombie.FreeFreezeTime && !zombie.FreeSetbodyTime && (plant && plant.EName !== "oLSP1" && plant.Die(), zombie.JudgeAttack());
  }),

  BirthCallBack(self) {
    PlayAudio("StrollZombie_Coming" + Math.floor(1 + Math.random() * 3));
    OrnNoneZombies.prototype.BirthCallBack(self);
  },

  GoingDie() {
    let self = this,
        id = self.id;
    self.GoingDieHead(id, self.PicArr, self);
    self.beAttacked = 0;
    self.isGoingDie = 1;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.NormalDie();
    self.ChanceThrowCoin(self);
  },

  NormalDie() {
    let self = this;
    self.PrivateDie && self.PrivateDie(self);
    self.EleBody.src = self.PicArr[self.DieGif];
    oSym.addTask(200, oEffects.fadeOut, [self.Ele, 'fast', ClearChild]);
    self.HP = 0;
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  }

}),
    oFootballZombie = InheritO(oConeheadZombie, {
  EName: "oFootballZombie",
  CName: $__language_Array__["5520ad6f6873575f0a834ef942b22067"],
  OrnHP: 1400,
  Lvl: 3,
  SunNum: 175,
  StandGif: 10,
  BoomDieGif: 11,
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  OSpeed: 3.2,
  Speed: 3.2,
  Almanac: {
    Tip: $__language_Array__["32f604e671e032af8d87ab899b07124a"],
    Speed: $__language_Array__["426447ca47ebfe6eaced0f4182bda3d9"],
    Story: $__language_Array__["5ba90092263366227ed3021df36cbf3b"]
  },
  HeadTargetPosition: [{
    x: 70,
    y: 45
  }, {
    x: 80,
    y: 45
  }],
  //头的位置数据
  PicArr: function () {
    var a = "images/Zombies/FootballZombie/";
    return ["", "", a + "FootballZombie.webp", a + "Attack.webp", a + "LostHead.webp", a + "LostHeadAttack.webp", "images/Zombies/Zombie/ZombieHead.webp", a + "Die.webp", a + "OrnLost.webp", a + "OrnLostAttack.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  getShadow: function (a) {
    return "left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px;";
  },

  getVertigo(self, attackPower, dir) {
    OrnNoneZombies.prototype.getVertigo(self, attackPower, dir, `left:${self.beAttackedPointL + 5}px;top:${self.height - 130}px`);
  }

}),
    oCigarZombie = InheritO(OrnNoneZombies, {
  EName: "oCigarZombie",
  CName: $__language_Array__["41d4c1f440cc978b8b162b3128f14de8"],
  HP: 300,
  Status: 1,
  AttackGif: 2,
  DieGif: 3,
  StandGif: 4,
  NormalGif: 5,
  OpenBoxGif: 6,
  LostHeadGif: 8,
  LostHeadAttackGif: 9,
  HeadGif: 10,
  BoomDieGif: 11,
  canBoom: 1,
  beAttackedPointL: 72,
  AudioArr: ["cherrybomb", "squash_hmm"],
  BombTime: 100,
  //爆炸的倒计时
  HeadTargetPosition: [{
    x: 75,
    y: 30
  }, {
    x: 90,
    y: 30
  }],
  PicArr: function () {
    var a = "images/Zombies/CigarZombie/";
    return ["", "", a + "Attack.webp", a + "Die.webp", a + "1.webp", a + "Walk.webp", a + "OpenBox.webp", "images/Zombies/Boom.png", a + "LostHead.webp", a + "LostHeadAttack.webp", a + "Head.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  Almanac: {
    Tip: $__language_Array__["77677e560511898b362060cdfadaec73"],
    Weakness: $__language_Array__["f937bc5afe4fab3de791d0123059a38f"],
    Story: $__language_Array__["b9aad340220daf93f525bb6a7aa56dd5"]
  },
  getShadow: _ => `left:85px;top:120px;`,
  getCharredCSS: _ => ({
    left: `85px`,
    top: `35px`
  }),

  getSnowPea(self, attackPower, dir) {
    OrnNoneZombies.prototype.getSnowPea(self, attackPower, dir);
    self.canBoom = 0; //被冰系植物攻击就失去了爆炸能力
  },

  RandomOpenBox: function (a) {
    oSym.addTask(1, function run(c) {
      var b = $Z[c];

      if (!b) {
        return;
      }

      if (b.BombTime <= 0) {
        b && b.beAttacked && b.canBoom && b.OpenBox(c);
        b.BombTime = Infinity;
      } else if (!b.FreeFreezeTime && !b.FreeSetbodyTime) {
        //如果还在任何的定身状态下，则时间不会减少
        $Z[c].BombTime--;
      }

      if ($Z[c]) {
        oSym.addTask(1, run, [c]);
      }
    }, [a]);
  },
  OpenBox: function (b) {
    PlayAudio("squash_hmm");
    var a = $Z[b];
    a.EleBody.src = a.PicArr[a.OpenBoxGif];

    a.ChkActs = a.ChkActs1 = function () {
      return 1;
    };

    a.JudgeAttack = function () {
      var g = this,
          d = g.ZX,
          e = g.R + "_",
          f = GetC(d),
          h = oGd.$,
          c;
      (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0);
    };

    a.getPea = a.getSnowPea = a.getFirePeaSputtering = a.getFirePea = a.getHit = a.getHit0 = a.getHit1 = a.getHit2 = a.getHit3 = a.ChangeR = a.bedevil = function () {};

    oSym.addTask(50, c => {
      $Z[c] && (a.Status = 0, oSym.addTask(90, f => {
        var e = $Z[f],
            d;
        e && (e.BoomGIF(e.X, e.pixelTop - 80), function (k, g) {
          oEffects.ScreenShake();
          var w = Math,
              q = w.max(1, k - 1),
              o = w.min(oS.R, k + 1),
              n = w.max(1, g - 1),
              h = w.min(oS.C, g + 1),
              r = oGd.$,
              l,
              j = "",
              m;

          do {
            g = n;

            do {
              j = q + "_" + g + "_";

              for (var l = 0, len = 4; l < len; l++) {
                (m = r[j + l]) && m.Die();
              }
            } while (g++ < h);
          } while (q++ < o);
        }(e.R, GetC(e.ZX)), e.DisappearDie());
      }, [c]));
    }, [b]);
  },
  BirthCallBack: function (d) {
    var c = d.delayT,
        b = d.id,
        a = d.Ele = $(b);
    d.EleShadow = a.firstChild;
    d.EleBody = a.childNodes[1];
    d.BombTime = Math.floor(Math.random() * 100) > 4 ? Math.floor(1325 + Math.random() * 976) : Math.floor(450 + Math.random() * 301);
    c ? oSym.addTask(c, function (f, e) {
      var g = $Z[f];
      g && (++oGd.$JackinTheBox, g.FreeSetbodyTime = 0, SetBlock(e), g.RandomOpenBox(f));
    }, [b, a]) : (++oGd.$JackinTheBox, SetBlock(a), d.RandomOpenBox(b));
  },
  PrivateDie: self => self.Status && ! --oGd.$JackinTheBox
}),
    //沼泽僵尸从以下开始
oCaskZombie = function () {
  const getHit = (self, power, dir) => {
    const id = self.id;
    self.CheckOrnHP(self, id, power, self.PicArr, self.isAttacking);
    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[id] && self.SetBrightness(self, self.EleBody, 0));
  };

  const getHit1 = function (b, a) {
    (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function () {}) : (b.CheckOrnHP(b, b.id, a, b.PicArr, b.isAttacking), b.SetBrightness(b, b.EleBody, 1), oSym.addTask(10, (d, c) => {
      (c = $Z[d]) && c.SetBrightness(c, c.EleBody, 0);
    }, [b.id]));
  };

  return InheritO(oNewspaperZombie, {
    EName: "oCaskZombie",
    CName: $__language_Array__["50157aa290b4670a9519769336f9535b"],
    OrnHP: 500,
    HP: 500,
    OrnLostNormalGif: 4,
    OrnLostAttackGif: 5,
    LostHeadGif: 6,
    LostHeadAttackGif: 7,
    HeadGif: 8,
    DieGif: 9,
    LostPaperGif: 10,
    StandGif: 11,
    BoomDieGif: 12,
    Ornaments: 1,
    AudioArr: ["Cask"],
    Almanac: {
      Tip: $__language_Array__["151289d5b6b00c4e490efdcbafb8bbc7"],
      Weakness: $__language_Array__["f937bc5afe4fab3de791d0123059a38f"],
      Speed: $__language_Array__["b26445ca9c6108873806f77f04f7d4d3"],
      Story: $__language_Array__["163d1131c7f9d60de696a480ba0e71c0"]
    },
    PicArr: function () {
      const a = "images/Zombies/CaskZombie/";
      return ["", "", a + "HeadWalk1.webp", a + "HeadAttack1.webp", a + "HeadWalk0.webp", a + "HeadAttack0.webp", a + "LostHeadWalk.webp", a + "LostHeadAttack.webp", a + "Head.webp", a + "Die.webp", a + "LostNewspaper.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
    }(),
    HeadTargetPosition: [{
      x: 70,
      y: 50
    }, {
      x: 70,
      y: 50
    }],
    //头的位置数据
    getHit0: getHit,
    //getHit0:直线非穿透攻击
    getHit1: getHit1,
    //getHit1:直线穿透攻击、投掷群体攻击
    getHit2: oNewspaperZombie.prototype.getHit2,

    //getHit2:投掷单体攻击，只伤害本体    
    getPea(self, attack, direction = 0) {
      if (/^Polar\d+jx$/.test(oS.Lvl)) {
        //泠漪:冰原镜像的读报可以直接被射手击中本体
        return self.getHit2(self, attack);
      }

      self.PlayNormalballAudio();
      self.getHit0(self, attack, direction);
    },

    getFirePea(self, attackPower, dir) {
      self.PlayFireballAudio();

      if (self.FreeSlowTime || self.FreeFreezeTime) {
        self.Speed = self.OSpeed;
        self.Attack = self.OAttack;
        self.FreeSlowTime = self.FreeFreezeTime = 0;
        ClearChild(self.Ele.querySelector('.buff_vertigo'));
      }

      const LX = self.AttackedLX;
      oZ.getArZ(LX, LX + 40, self.R).forEach(zombie => zombie !== self && zombie.getFirePeaSputtering());
      self.getHit0(self, attackPower, dir);
    },

    CheckOrnHP(self, id, power, PicArr, isAttacking = 0) {
      const pro = OrnNoneZombies.prototype;

      if ((self.OrnHP -= power) < 1) {
        PlayAudio("Cask");

        self.ChkActs = self.ChkActs1 = _ => 1;

        self.Ornaments = 0;
        self.getFirePea = pro.getFirePea;
        self.getSnowPea = pro.getSnowPea;
        self.getHit = self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = pro.getHit;
        self.EleBody.src = PicArr[self.LostPaperGif];
        oSym.addTask(150, _ => {
          if (!$Z[id]) return;
          let pro2 = CZombies.prototype,
              speed;
          self.ChkActs = pro2.ChkActs;
          self.ChkActs1 = pro2.ChkActs1;
          self.Attack = self.OAttack = self.LostPaperAttack;
          speed = self.OSpeed = self.LostPaperSpeed;
          self.Speed && (self.Speed = speed * (self.FreeSlowTime ? 0.5 : 1));

          if (self.beAttacked) {
            self.EleBody.src = PicArr[[self.NormalGif = self.OrnLostNormalGif, self.AttackGif = self.OrnLostAttackGif][isAttacking]];
            self.JudgeAttack();
          }
        });
      }
    },

    getVertigo(self, attackPower, dir) {
      OrnNoneZombies.prototype.getVertigo(self, attackPower, dir, `left:${self.beAttackedPointL + 2}px;top:${self.height - 130}px`);
    }

  });
}(),
    oSadakoZombie = InheritO(oZombie, {
  EName: "oSadakoZombie",
  CName: $__language_Array__["41c62ce72935eea0c77a29d2e8e6c536"],
  OSpeed: 1.5,
  Speed: 1.5,
  width: 216,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 130,
  LostHeadGif: 2,
  getShadow: _ => "display:none;",
  AudioArr: ['sadako'],
  Almanac: {
    Tip: $__language_Array__["5543e953a8517d7fa1e140875197b08d"],
    Story: $__language_Array__["ebfbab3cedee5e2af5a8ae0bfce937c4"]
  },
  PicArr: (_ => {
    var a = "images/Zombies/SadakoZombie/";
    return ["", "", BlankPNG, a + "ZombieAttack.webp", BlankPNG, a + "ZombieLostHeadAttack.webp", '', a + "ZombieDie.webp", a + "1.webp", 'images/Zombies/BoomDie.webp'];
  })(),
  GoingDieHead: _ => {},
  HeadTargetPosition: [{
    x: 70,
    y: 50
  }, {
    x: 65,
    y: 50
  }],

  //头的位置数据
  BirthCallBack(o) {
    PlayAudio("sadako");
    OrnNoneZombies.prototype.BirthCallBack(o);
  },

  GoingDieHead() {}

}),
    oImp = InheritO(oZombie, {
  EName: "oImp",
  CName: $__language_Array__["a8a94039de6fecf7d4b7d6b67c5d2769"],
  OSpeed: 2,
  Speed: 2,
  HP: 220,
  width: 89,
  height: 101,
  beAttackedPointL: 10,
  beAttackedPointR: 68,
  ThrowGif: 9,
  LandGif: 10,
  BoomDieGif: 11,
  Almanac: {
    Tip: $__language_Array__["ec751e5c886be5989b77dca281f29103"],
    Speed: $__language_Array__["039fdc7ae48c1e6b583012180d39bde3"],
    Story: $__language_Array__["bd6c2c3d4f1e41f5429ff0523cab4746"]
  },
  getShadow: _ => `top:76px;`,
  getCharredCSS: _ => ({
    top: `0px`,
    left: `10px`
  }),
  PicArr: function () {
    var a = "images/Zombies/Imp/";
    return ["", "", a + "Zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "1.webp", a + "ZombieThrowing.webp", a + "ZombieLand.webp", a + 'BoomDie.webp'];
  }(),
  AudioArr: function () {
    let arr = [];

    for (let i = 1; i < 15; i++) {
      arr.push("imp_" + i);
    }

    return arr;
  }(),
  HeadTargetPosition: [{
    x: 5,
    y: 15
  }],
  //头的位置数据
  BirthCallBack: function (self) {
    let delayT = self.delayT;
    let id = self.id;
    let ele = self.Ele = $(id);
    self.EleShadow = ele.firstChild;
    self.EleBody = ele.childNodes[1];

    if (delayT) {
      oSym.addTask(delayT, _ => {
        $Z[id] && (self.FreeSetbodyTime = 0, callback(), SetBlock(ele));
      });
    } else {
      SetBlock(ele);
      callback();
    }

    function callback() {
      PlayAudio(self.AudioArr[Math.floor(Math.random() * 10 + 1)]);
    }
  },

  JudgeAttack() {
    let self = this;
    let ZX = self.ZX;
    let crood = self.R + "_";
    let C = GetC(ZX);
    let G = oGd.$;
    let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

    if (arr && self.Altitude === 1 && (self.LivingArea !== 2 || !$P[arr[1]].FlyingPlant)) {
      //地上的僵尸才能检测攻击
      !self.isAttacking && (self.isAttacking = 1, self.EleBody.src = self.PicArr[self.AttackGif]); //如果是首次触发攻击，需要更新到攻击状态

      self.NormalAttack(...arr); //实施攻击
    } else {
      //撤销攻击状态
      self.isAttacking && (self.isAttacking = 0, self.EleBody.src = self.PicArr[self.NormalGif]);
    }
  },

  GoingDieHead(id, PicArr, self) {
    let bca,
        topa = self.pixelTop + 10;
    bca = topa + 40;
    CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
      top: topa,
      bc: bca
    });
  }

}),
    oImp2 = InheritO(oImp, {
  //供巨人抛射的小鬼
  EName: "oImp2",
  BirthCallBack: function (a) {
    OrnNoneZombies.prototype.BirthCallBack(a);
  }
}),
    oBossA = (() => {
  let getHit = function (self, attack) {
    if ((self.HP -= attack) < self.BreakPoint) {
      self.GoingDie(self.PicArr[[self.LostHeadGif, self.LostHeadAttackGif][self.isAttacking]]);

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = function () {};

      return;
    }

    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
    oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
      curValue: self.HP
    });
  };

  return InheritO(OrnNoneZombies, {
    EName: "oBossA",
    CName: $__language_Array__["b18a2680a856db0d625bdb60e7dc4856"],
    AttackGif: 2,
    LostHeadGif: 2,
    LostHeadAttackGif: 2,
    LostHeadGif: 2,
    DieGif: 5,
    BoomDieGif: 5,
    StandGif: 1,
    HP: 8000,
    HPT: 8000,
    OSpeed: 0.5,
    Speed: 0.5,
    width: 704,
    height: 410,
    beAttackedPointL: 88,
    beAttackedPointR: 700,
    AudioArr: ["Zomboss1", "Zomboss2", "Zomboss3", "hydraulic1", "hydraulic2"],

    Bounce() {},

    ChanceThrowCoin() {},

    Almanac: {
      Tip: $__language_Array__["0484ea431a1b18e86529bf687388717d"],
      Speed: $__language_Array__["3666f6380398d9a1227ae59e1623cf7d"],

      get Story() {
        let json = localStorage.JNG_TR_WON ? JSON.parse(localStorage.JNG_TR_WON) : {};
        let man = json["Industry25"] ? "Job" : $__language_Array__["8229f7563ddf03b73d111f4161c4eef6"];
        let strA = $__language_Array__["9d915795105b7fa6c06495621390d188"] + man + $__language_Array__["fa17c8d36dba5389b651f8eded17b06b"];
        let strB = $__language_Array__["e550f4e05850fe5d95a7f6eab8a17253"];

        let FstrC = function (description) {
          return $__language_Array__["0844f7002543ea751b0f45a0c65629ca"] + description + $__language_Array__["0ab8ae4b6787d001532d8a0683813066"];
        };

        if (json["Industry25"]) {
          return strA + $__language_Array__["d8085174a04069e0b9eac1e11bc976ce"] + strB + $__language_Array__["b2cc8ff6ef3f814081d5c8ceec550659"];
        } else if (json["Polar30"]) {
          return strA + $__language_Array__["87a17049a8357c20ccba179e06a41fe6"] + strB + FstrC($__language_Array__["a77673c679cb575a2220499c3863b2a7"]);
        } else if (json["Marsh25"]) {
          return strA + $__language_Array__["b4ea8899ad989a4ad805584c144f341f"] + strB + FstrC($__language_Array__["c56a3baa5f3f017960ce15f2cbfdf826"]);
        } else {
          return $__language_Array__["42c20114217ee068409f14655059d526"];
        }
      }

    },

    getAlmanacDom(pro) {
      if (!pro.Almanac.Dom) {
        //pro.Almanac = Object.assign({},pro.Almanac);
        let ClassAlmanac = CZombies.prototype.Almanac;

        for (let i in ClassAlmanac) {
          if (!pro.Almanac[i]) {
            pro.Almanac[i] = ClassAlmanac[i];
          }
        }

        pro.Almanac.Dom = pro.getHTML("", 300 - pro.width / 2, 520 - pro.height, "1;transform:scale(0.7);height:" + pro.height + "px;width:" + pro.width + "px", "block", "auto", pro.GetDTop, pro.PicArr[pro.NormalGif]);
      }
    },

    PlayNormalballAudio: function () {
      PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
    },
    prepareBirth: function (l) {
      var e = this,
          m = 3,
          k = GetY(m) + e.GetDY(),
          n = k - e.height,
          a = 3 * m + 1,
          b = e.id = "Z_" + Math.random();
      e.R = m;
      e.pixelTop = n;
      e.zIndex = a;
      (e.delayT = l) && (e.FreeSetbodyTime = oSym.Now);
      return e.getHTML(b, e.X, n, a, "none", "auto", e.GetDTop, e.PicArr[e.NormalGif]);
    },

    //获取卡片图片
    GetCardImg() {
      let self = this;
      return "images/Card/Boss.webp";
    },

    GoLeft: function (o, R, arR, i) {
      //向左走
      var Speed,
          AttackedRX,
          rV,
          id = o.id;
      !(o.FreeFreezeTime || o.FreeSetbodyTime) ? (o.beAttacked && !o.isAttacking && o.JudgeAttack(), //未临死，未攻击，进行攻击判断
      !o.isAttacking ? (AttackedRX = o.AttackedRX -= Speed = o.Speed * o.SpeedCoefficient) < -50 ? (arR.splice(i, 1), o.DisappearDie(), rV = 0) : (AttackedRX < 160 && toOver(1), o.ZX = o.AttackedLX -= Speed, SetStyle($(id), {
        left: (o.X -= Speed) + 'px'
      }), rV = 1) : rV = 1) : rV = 1;
      return rV;
    },

    BirthCallBack(self) {
      let delayT = self.delayT;
      let id = self.id;
      let ele = self.Ele = $(id);
      self.EleShadow = ele.firstChild;
      self.EleBody = ele.childNodes[1];
      oFlagContent.hide().init({
        MeterType: 'LeftBar RedBar',
        HeadType: 'BOSSHead',
        fullValue: self.HP,
        curValue: 0
      });
      PlayAudio("Zomboss_Coming");
      StopMusic();
      PlayMusic(oS.LoadMusic = "Boss");
      NewMusic(oS.LoadMusic = "Boss");
      oSym.addTask(60, _ => {
        oFlagContent.show().update({
          curValue: self.HP,
          animConfig: {
            duration: 1 / oSym.NowSpeed,
            ease: "ease-out"
          }
        });
      });
      oSym.addTask(120, _ => {
        if ($Z[id]) {
          self.FreeSetbodyTime = 0;
          SetBlock(ele);
        }
      });
    },

    PicArr: function () {
      var b = "images/Zombies/BossA/";
      return [BlankPNG, BlankPNG, b + "Zombie.webp", b + "Gun.webp", b + "radar.webp", b + "Die.webp", b + "Die.png"];
    }(),
    getRaven: function () {},
    getShadow: function (b) {
      return "display:none;";
    },

    getButter() {},

    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getHit3: getHit,
    getExplosion: function (b, e) {
      var a = this;

      if (a.HP > 250) {
        a.EleBody.src = a.PicArr[3];
        !a.isAttacking && (a.isAttacking = 1);
        a.HP -= 250;
        oFlagContent.update({
          curValue: a.HP
        });
        oSym.addTask(100, function (d) {
          var arrP = hasPlants(true);
          var c = oMissile;

          for (var is = 0; is < 2; is++) {
            var Select = parseInt(Math.random() * arrP.length);
            var ssd = 0;

            for (var i of arrP) {
              if (ssd == Select) {
                CustomSpecial(c, i.R, i.C);
              }

              ssd++;
            }
          }

          d.EleBody.src = d.PicArr[2];
          d.isAttacking && (d.isAttacking = 0);
        }, [a]);
      } else {
        a.HP = 0;
        oFlagContent.update({
          curValue: a.HP
        });
        a.NormalDie();
      }
    },
    JudgeAttack: function () {
      var b = this,
          k = b.ZX,
          j = b.R + "_",
          i = GetC(k),
          a = oGd.$,
          l;
      (l = b.JudgeLR(b, j, i, k, a) || b.JudgeSR(b, j, i, k, a)) ? (!b.isAttacking && (b.isAttacking = 1), b.NormalAttack(l[0], l[1])) : b.isAttacking && (b.isAttacking = 0);
    },
    NormalAttack: function (a, b) {
      PlayAudio("hydraulic" + Math.floor(1 + Math.random() * 2));
      this.EleBody.src = this.PicArr[4];
      oSym.addTask(300, function (j, k) {
        for (var c = 1; c <= 5; c++) {
          PlaceZombie(oFootballZombie, c, 9);
        }

        var d = $Z[j],
            i;
        d && d.beAttacked && !d.FreeFreezeTime && !d.FreeSetbodyTime && ((i = $P[k]) && i.Die(), d.JudgeAttack(), d.EleBody.src = d.PicArr[2]);
      }, [a, b]);
    },
    GoingDieHead: function () {},
    NormalDie: function () {
      PlayAudio("cherrybomb");
      let self = this,
          id = self.id;

      for (let i in $Z) $Z[i] && $Z[i].getRaven();

      self.EleBody.src = self.PicArr[self.DieGif];
      self.HP = 0;
      oEffects.fadeOut(self.Ele, 1.6, ClearChild);
      oEffects.ImgSpriter({
        ele: NewEle(id + "_Die", "div", `position:absolute;z-index:10;width:1016px;height:350px;left:${self.X}px;top:${self.pixelTop}px;background:url(images/Zombies/BossA/Die.png) no-repeat;`, 0, EDPZ),
        data: ["0 0", "0 -700px", "0 -1050px", "0 -1400px", "0 -1750px", "0 -2100px", "0 -2450px", "0 -2800px", "0 -3150px", "0 -3500px", "0 -3850px", "0 -4200px", "0 -4550px", "0 -4900px", "0 -5250px", "0 -5600px"],
        frameNum: 16,
        interval: 10,
        callback: ele => {
          ClearChild(ele);
          delete $Z[id];
          oP.MonitorZombiePosition(self);
          self.PZ && oP.MonPrgs();
        }
      });
    }
  });
})(),
    //极地僵尸从以下开始
oMembraneZombie = InheritO(OrnNoneZombies, {
  EName: "oMembraneZombie",
  CName: $__language_Array__["7b62405b5d8ac7e87afa043ae58ea42e"],
  StandGif: 8,
  width: 235,
  height: 213,
  beAttackedPointL: 154,
  beAttackedPointR: 210,
  OSpeed: 0.8,
  Speed: 0.8,
  HP: 500,
  ConjureGif: 9,
  BoomDieGif: 12,
  LostHeadGif: 4,
  LostHeadAttackGif: 5,
  LostHeadConjureGif: 10,
  LightningGif: 13,
  ElectricShockGif: 15,
  Almanac: {
    Tip: $__language_Array__["1e07a336fad65b5b273d0c9b4b99da79"],
    Speed: $__language_Array__["3666f6380398d9a1227ae59e1623cf7d"],
    Weakness: $__language_Array__["f98a299a7376cfa4efb1d43fcb12b85e"],
    Story: $__language_Array__["bdfad7a01b9854a261f1254c9a09c2ef"]
  },
  HeadTargetPosition: [{
    x: 115,
    y: 100
  }],
  //头的位置数据
  PicArr: function () {
    const a = "images/Zombies/MembraneZombie/";
    let b = ["", "", a + "Zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "1.webp", a + 'conjure.webp', a + 'ZombieLostHeadConjure.webp', a + 'effect.png', 'images/Zombies/BoomDie.webp', a + "lightning1.png", a + "lightning2.png"];
    let c = [];

    for (let i = 1; i <= 4; i++) {
      c.push(a + "effect" + i + ".webp");
    }

    return b.concat(c);
  }(),
  AudioArr: ['conjure'],
  Pianyi: 0,
  getCharredCSS: _ => ({
    top: `102px`,
    left: `142px`
  }),
  HeadTargetPosition: [{
    x: 145,
    y: 100
  }],

  GoingDie() {
    const self = this;
    const id = self.id;
    self.EleBody.src = [self.PicArr[self.LostHeadGif], self.PicArr[self.LostHeadAttackGif], self.PicArr[self.LostHeadConjureGif]][self.isAttacking];
    self.GoingDieHead(id, self.PicArr, self);
    self.beAttacked = 0;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.AutoReduceHP(id);
    self.ChanceThrowCoin(self);
  },

  GoingDieHead(id, PicArr, self) {
    return CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
      top: self.pixelTop + 90,
      left: self.X + 144,
      bc: self.pixelTop + 160
    });
  },

  BirthCallBack(self) {
    self.ElecPic = [new Image(), new Image()];
    self.ElecPic[0].src = self.PicArr[self.LightningGif];
    self.ElecPic[1].src = self.PicArr[self.LightningGif + 1];
    OrnNoneZombies.prototype.BirthCallBack(self);
  },

  NormalAttack(zid, pid) {
    oSym.addTask(96.67, _ => {
      PlayAudio(["chomp", "chompsoft", 'chomp2'].random());
      let self = $Z[zid];

      if (self && self.beAttacked && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
        //这里需要再检测一次，否则可能会出现莫名穿过的现象，或者啃的植物不对的现象
        let ZX = self.ZX;
        let crood = self.R + "_";
        let C = GetC(ZX);
        let G = oGd.$;
        let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

        if (arr) {
          [zid, pid] = arr;
          let plant = $P[pid];
          plant && plant.getHurt(self, self.AKind, self.Attack);
        }

        self.JudgeAttack();
      }
    });
  },

  GoLeft(o, R, arR, i) {
    //往左走的僵尸行动
    var Speed,
        AttackedRX,
        rV,
        id = o.id;
    !(o.FreeFreezeTime || o.FreeSetbodyTime) ? (o.beAttacked && !o.isAttacking && o.JudgeAttack(), //未临死，未攻击，进行攻击判断
    !o.isAttacking ? (AttackedRX = o.AttackedRX -= Speed = o.Speed * o.SpeedCoefficient) < -50 ? (arR.splice(i, 1), o.DisappearDie(), rV = 0) : ( //向左走出屏幕，算作直接死亡，不排序只更新
    //未走出屏幕，当右攻击点小于100的时候，进行移动判断
    o.ZX = o.AttackedLX -= Speed, $(id) != null && SetStyle($(id), {
      left: (o.X -= Speed) + 'px'
    }), //不知道为啥会出现没有$(id)的bug
    rV = 1, o.Conjure() //施法回调
    ) : rV = 1) : rV = 1; //检查场地事件

    o.ChkCell_GdType(o);
    return rV;
  },

  getPlants() {
    return hasPlants(true, v => v.PKind === 1);
  },

  Conjure() {
    let obj = this;
    const id = obj.id;

    function drawALink(R, C, oldCanvas = null) {
      //console.log(R,C);
      let pos = [obj.ZX, obj.pixelTop + 50];
      let currentPos = pos;
      let targetPos = [GetX(C), GetY(R) - 20]; //console.log(targetPos);

      let theta = Math.atan2(targetPos[1] - currentPos[1], targetPos[0] - currentPos[0]);
      let delta = [Math.cos(theta), Math.sin(theta)];
      let canvas = oldCanvas !== null && oldCanvas !== void 0 ? oldCanvas : NewEle("Canvas_Magician" + Math.random(), "canvas", "position:absolute;z-index:" + 3 * (oS.R + 1) + ";pointer-events:none;left:0;top:0;widht:100%;height:100%;" + (!$User.LowPerformanceMode ? "filter:brightness(220%);" : ""), {
        width: 900,
        height: 600
      }, FightingScene);
      let ctx = canvas.getContext("2d");
      let kk = 0;

      function RotatePaint(pic, x, y, width, height, rotate = 0, mirror = 0) {
        let dist = [x + width / 2, y + height / 2];
        ctx.save(); // 保存状态，以免影响其它物体

        ctx.translate(dist[0], dist[1]); // 将画布偏移到物体中心

        ctx.rotate(rotate); // 旋转角度

        ctx.translate(-dist[0], -dist[1]); // 将画布偏移回来

        if (mirror) {
          let mx = x + width / 2;
          ctx.translate(mx, 0);
          ctx.scale(-1, 1);
          ctx.translate(-mx, 0);
        }

        ctx.fillStyle = ["#000", "#fff"][kk ^= 1]; //ctx.fillRect(x,y,width,height);

        ctx.drawImage(pic, x, y, width, height); // 坐标参考还原

        ctx.restore(); // 恢复状态
      }

      let distance = Math.sqrt(Math.pow(targetPos[1] - currentPos[1], 2) + Math.pow(targetPos[0] - currentPos[0], 2));
      let times = Math.max(2, Math.floor(distance / 80));
      let k = distance / times;
      let picPos = [];

      while (times-- > 0) {
        let randLength = k;
        distance -= randLength;
        picPos.push({
          x: currentPos[0],
          y: currentPos[1],
          width: randLength,
          rotate: theta
        });
        currentPos[1] += delta[1] * randLength;
        currentPos[0] += delta[0] * randLength;
      }

      for (let t = 0; t < picPos.length; t++) {
        let i = picPos[t]; 

        let a = [-i.width / 2 + 10 * delta[1], -37.5 / 2 - 10 * delta[0]];


        if (t === 0) {
          RotatePaint(obj.ElecPic[1], i.x + delta[0] * i.width / 2 + a[0], i.y + delta[1] * i.width / 2 + a[1], i.width, 37.5, i.rotate, 0);
        } else {
          RotatePaint(obj.ElecPic[0], i.x + delta[0] * i.width / 2 + a[0], i.y + delta[1] * i.width / 2 + a[1], i.width, 37.5, i.rotate, Math.floor(Math.random() * 2));
        }
      }

      return canvas;
    }

    if (!$Z[id]) return;
    let arrPlants = obj.getPlants();
    obj.Pianyi++; //更新偏移

    if (obj.AttackedLX <= oS.W + 80 && !obj.isAttacking && obj.beAttacked && obj.Pianyi >= 190 && arrPlants.length > 0) {
      //判定是否释放膜法
      obj.Pianyi = 0; //重置计数器

      obj.isAttacking = 2; //标记正在施法，确保僵尸停止运动

      obj.EleBody.src = obj.PicArr[obj.ConjureGif];
      PlayAudio('conjure');
      oSym.addTask(300, _ => {
        var _$P$aPlant$id;

        //300
        //随机变一株植物为挨炮
        let aPlant = arrPlants.random(),
            {
          R,
          C
        } = aPlant;

        if (((_$P$aPlant$id = $P[aPlant.id]) === null || _$P$aPlant$id === void 0 ? void 0 : _$P$aPlant$id.Immediately) === false && $Z[id]) {
          aPlant.Die('JNG_TICKET_MembraneZombie');
          CustomSpecial(oApple, R, C);
          let canvas = drawALink(R, C),
              ctx = canvas.getContext("2d");

          if (!$User.LowPerformanceMode) {
            for (let i = 0; i < 3; i++) {
              oSym.addTask(2 * i, () => {
                if (!$(canvas.id)) {
                  return;
                }

                ctx.clearRect(0, 0, 900, 600);
                drawALink(R, C, canvas);
              });
            }
          }

          let img_index = Math.floor(Math.random() * 4);
          let elecEffect = NewEle("", "img", `position:absolute;z-index:${3 * R + 2};left:${GetX(C)}px;top:${GetY(R)}px;transform: translate(-50%, -65%) scale(0.5);`, {
            src: obj.PicArr[obj.ElectricShockGif + img_index]
          }, FightingScene);

          if (!$User.LowPerformanceMode) {
            elecEffect.style.filter = "brightness(200%)";
          }

          oSym.addTask(80, ClearChild, [elecEffect]);
          {
            let json = $User.LowPerformanceMode ? {
              opacity: 0
            } : {
              filter: "",
              opacity: 0
            };
            oEffects.Animate(canvas, json, 0.3 / oSym.NowSpeed, "linear", ClearChild, 0.1 / oSym.NowSpeed);
          }
          ;
          oEffects.ImgSpriter({
            ele: NewEle(id + '_Effect', "div", `position:absolute;z-index:${R * 3 + 2};width:208px;height:198px;left:${80 * C}px;top:${30 + 100 * (R - 1)}px;background:url(images/Zombies/MembraneZombie/effect.png) no-repeat;`, 0, EDPZ),
            styleProperty: 'X',
            changeValue: -209,
            frameNum: 13,
            interval: 9
          });
        }
      });
      oSym.addTask(390, _ => //恢复 390
      $Z[id] && obj.beAttacked && (obj.isAttacking = 0, obj.EleBody.src = obj.PicArr[obj.NormalGif]));
    }
  },

  DieRotate(self, time) {
    if (self._FREESetBody_) {
      //清除定身效果
      self._FREESetBody_();

      delete self._FREESetBody_;
    }

    let TrueWidth = self.beAttackedPointR - self.beAttackedPointL;
    oEffects.Animate(self.EleBody, {
      transform: "rotate(90deg) rotateY(45deg)",
      opacity: 0,
      top: self.height - TrueWidth - 80 + "px",
      left: "30px"
    }, time / oSym.NowSpeed, 'cubic-bezier(0.4, 0.0, 0.6, 1)', _ => {
      oEffects.Animate(self.Ele, {
        opacity: 0
      }, 0.05 / oSym.NowSpeed, 0, _ => {
        ClearChild(self.Ele);
      });
    });
  }

}),
    oMakeRifterZombie = InheritO(OrnNoneZombies, {
  EName: "oMakeRifterZombie",
  CName: $__language_Array__["7b9f9f7d6bbf7dfd5c0ae846a5529640"],
  StandGif: 8,
  BoomDieGif: 9,
  width: 200,
  height: 153,
  beAttackedPointL: 50,
  beAttackedPointR: 130,
  HP: 500,
  HeadTargetPosition: [{
    x: 77,
    y: 35
  }],
  //头的位置数据
  Almanac: {
    Tip: $__language_Array__["a9dd8967a1e2315165130b09ec2a5874"],
    Weakness: $__language_Array__["b02658e8ec8618b57e33d565752101af"],
    Story: $__language_Array__["ac458a160dcf3e952870d0c56df9036e"]
  },
  PicArr: function () {
    var a = "images/Zombies/MakeRifterZombie/";
    return ["", "", a + "Zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + '1.webp', 'images/Zombies/BoomDie.webp'];
  }(),
  getShadow: function (c) {
    return "left:" + (c.beAttackedPointL + 40) + "px;top:" + (c.height - 22) + "px;";
  },
  getCharredCSS: _ => ({
    top: `45px`,
    left: `95px`
  }),
  NormalAttack: function (d, c) {
    PlayAudio(["chomp", "chompsoft", 'chomp2'][Math.floor(Math.random() * 3)]);
    oSym.addTask(50, function (e) {
      $Z[e] && PlayAudio(["chomp", "chompsoft", 'chomp2'][Math.floor(Math.random() * 3)]);
    }, [d]);
    oSym.addTask(100, function (f, e) {
      var h = $Z[f],
          g;
      h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && h.MakeRifter(g), h.JudgeAttack());
    }, [d, c]);
  },
  MakeRifter: function (aPlant) {
    if (aPlant) {
      let [R, C] = [aPlant.R, aPlant.C];
      oGd.killAll(R, C, 'JNG_TICKET_MakeRifterZombie');

      for (let i = 0; i <= PKindUpperLimit; i++) {
        if (oGd.$[`${R}_${C}_${i}`]) return;
      }

      CustomSpecial(oRifter, R, C); //创建冰窟
    }
  }
}),
    oSkatingZombie = InheritO(OrnNoneZombies, {
  EName: "oSkatingZombie",
  CName: $__language_Array__["a8817fa0e8872a8094d48196687b0205"],
  StandGif: 2,
  BoomDieGif: 8,
  width: 122,
  height: 152,
  beAttackedPointL: 48,
  beAttackedPointR: 130,
  HeadTargetPosition: [{
    x: 25,
    y: 20
  }, {
    x: 20,
    y: 20
  }],
  //头的位置数据
  Almanac: {
    Tip: $__language_Array__["b7cffa7e4fdccea1508988e52b2078e9"],
    Speed: $__language_Array__["c3fc4ab7a25118798dd4876057951436"],
    Weakness: $__language_Array__["68560abd7a900ef03d1cad1be268af80"],
    Story: $__language_Array__["8eed52119f00bbb7a64fda869c57c413"]
  },
  PicArr: function () {
    var a = "images/Zombies/SkatingZombie/",
        b = "images/Zombies/";
    return ["", "", a + "Zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", 'images/Zombies/BoomDie.webp'];
  }(),
  getCharredCSS: _ => ({
    top: `45px`,
    left: `40px`
  }),
  Skating: function (_this) {
    let delta = _this.FangXiang == "GoRight" ? -1 : 1;

    if (_this && $Z[_this.id] && (delta == 1 ? GetC(_this.ZX) > 4 : GetC(_this.ZX) < 6)) {
      let x = 0,
          [_JudgeAttack, _JudgeLR, _JudgeSR] = [_this.JudgeAttack, _this.JudgeLR, _this.JudgeSR];

      _this.JudgeLR = _this.JudgeSR = () => {};

      requestAnimationFrame(function fun() {
        x += oSym.NowSpeed;
        _this.AttackedLX -= 4 * oSym.NowSpeed * delta, _this.AttackedRX -= 4 * oSym.NowSpeed * delta, _this.ZX -= 4 * oSym.NowSpeed * delta, _this.X -= 4 * oSym.NowSpeed * delta, $(_this.id) && SetStyle($(_this.id), {
          left: `${_this.X}px`
        });
        $Z[_this.id] && oSym.Timer && x < 68 ? requestAnimationFrame(fun) : [_this.JudgeAttack, _this.JudgeLR, _this.JudgeSR] = [_JudgeAttack, _JudgeLR, _JudgeSR];
      });
    }
  },
  JudgeLR: function (f, d, e, c, g) {
    return e > 10 || e < 1 ? false : function () {
      d += --e + "_";
      var h = PKindUpperLimit,
          i;

      while (h >= 0) {
        if (i = g[d + h]) {
          if (i.canEat) {
            //普通植物
            return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false;
          } else if (i.EName === 'oRifter' && i.AttackedRX >= c && i.AttackedLX <= c) {
            //冰窟
            f.Skating(f); //调用滑动

            return false;
          }
        }

        h--;
      }
    }();
  },
  JudgeSR: function (f, d, e, c, g) {
    return e > 9 ? false : function () {
      d += e + "_";
      var h = PKindUpperLimit,
          i;

      while (h >= 0) {
        if (i = g[d + h]) {
          if (i.canEat) {
            //普通植物
            return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false;
          } else if (i.EName === 'oRifter' && i.AttackedRX >= c && i.AttackedLX <= c) {
            //冰窟
            f.Skating(f); //调用滑动

            return false;
          }
        }

        h--;
      }
    }();
  }
}),
    oPushIceImp = InheritO(oZombie, {
  EName: "oPushIceImp",
  CName: $__language_Array__["10f428732828df7cf1a50f4cba9111fa"],
  OSpeed: 2.5,
  Speed: 2.5,
  width: 100,
  height: 140,
  beAttackedPointL: 30,
  beAttackedPointR: 70,
  HP: 450,
  AttackGif: 1,
  LostHeadGif: 2,
  LostHeadAttackGif: 3,
  HeadGif: 4,
  DieGif: 5,
  StandGif: 6,
  NormalGif: 6,
  FillGif: 7,
  BoomDieGif: 8,
  HeadTargetPosition: [{
    x: 10,
    y: 50
  }],
  //头的位置数据
  PicArr: (a => [a + "zombie.webp", a + "ZombieAttack.webp", a + "ZombieLostHead.webp", a + "ZombieLostHeadAttack.webp", a + "ZombieHead.webp", a + "ZombieDie.webp", a + "zombie2.webp", a + 'filling.webp', 'images/Zombies/Imp/BoomDie.webp'])("images/Zombies/PushIceImp/"),
  getShadow: self => `left:${self.beAttackedPointL - 15}px;top:${self.height - 29}px;`,
  getCharredCSS: () => ({
    top: `35px`,
    left: `20px`
  }),
  Almanac: {
    Tip: $__language_Array__["047103d3b42fbf683c20e8ab1802e111"],
    Speed: $__language_Array__["f936d5500c4364fd956a7d7aebc96324"],
    Story: $__language_Array__["6ad6d56b21a98f65df8dc3a9e80e7741"]
  },

  NormalAttack(zid, pid) {
    //无事件循环延迟，故无需手工判定植物和僵尸死活
    $P[pid].getHurt($Z[zid], 2, 50);
  },

  JudgeAttack() {
    let self = this;
    let ZX = self.ZX;
    let crood = self.R + "_";
    let C = GetC(ZX);
    let G = oGd.$;
    let data = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);
    data && self.NormalAttack(...data);
  },

  JudgeLR(self, crood, C, ZX, G) {
    //远程判定，普通僵尸的远程是自己前面一格
    if (C > 10 || C < 1) return;
    crood += C - 1 + '_';
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
        if (plant.canEat) return [self.id, plant.id];
        if (plant.EName === 'oRifter') return self.Fill(self, plant);
      }

      z--;
    }
  },

  JudgeSR(self, crood, C, ZX, G) {
    //近程判定，普通僵尸的近程是自己所在一格
    if (C > 9) return;
    crood += C + "_";
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
        if (plant.canEat) return [self.id, plant.id];
        if (plant.EName === 'oRifter') return self.Fill(self, plant);
      }

      z--;
    }
  },

  Fill(obj, bingku) {
    CustomSpecial(oBegonia, bingku.R, bingku.C); //调用冰封海棠填冰

    obj.isAttacking = 1; //禁用前进

    obj.Altitude = 3; //禁用受攻击

    obj.EleBody.src = obj.PicArr[obj.FillGif]; //切换贴图

    oSym.addTask(450, function () {
      //切换至正常状态
      if ($Z[obj.id]) {
        [obj.NormalGif, obj.Altitude, obj.isAttacking, obj.OSpeed, obj.Speed, obj.HP] = [0, 1, 0, 2, 2, 250];
        obj.EleBody.src = obj.PicArr[obj.NormalGif];

        for (let i of ['NormalAttack', 'JudgeAttack', 'JudgeLR', 'JudgeSR']) {
          //重写接口
          obj[i] = oZombie.prototype[i];
        }
      }
    });
  },

  GoingDieHead: CZombies.prototype.GoingDieHead
}),
    oZomboni = function () {
  var a = function (obj, attack) {
    let hp = obj.HP;

    if ((obj.HP = hp - attack) < 200) {
      //垂死
      obj.getHit0 = obj.getHit1 = obj.getHit2 = obj.getHit3 = function () {};

      obj.GoingDie();
      return;
    }

    obj.SetBrightness(obj, obj.EleBody, 1);
    oSym.addTask(10, function (id, e) {
      (e = $Z[id]) && e.SetBrightness(e, e.EleBody);
    }, [obj.id]);
  };

  return InheritO(OrnNoneZombies, {
    EName: "oZomboni",
    CName: $__language_Array__["3dc7e64030a1191e9d29a85dc3269a30"],
    HP: 1350,
    StandGif: 0,
    NormalGif: 0,
    DieGif: 2,
    FlatTireGif: 1,
    width: 225,
    height: 220,
    GetDTop: 10,
    beAttackedPointL: 0,
    beAttackedPointR: 175,
    OSpeed: 2.5,
    Speed: 2.5,
    AKind: 2,
    //汽车类僵尸
    Attack: 50,
    Ornaments: 1,
    BoomDieGif: 7,
    HeadTargetPosition: [{
      x: 65,
      y: 90
    }, {
      x: 65,
      y: 90
    }],
    //头的位置数据
    PicArr: function () {
      let b = "images/Zombies/Zomboni/";
      return [b + "1.webp", b + 'FlatTire.webp', b + "Die.webp", b + "ice_n.webp", b + "ice_m.webp", b + "ice_cap_n.webp", b + "ice_cap_m.webp", b + 'BoomDie.webp'];
    }(),
    Almanac: {
      Tip: $__language_Array__["4da9a4476d94f92af7e21b676c994e24"],
      Speed: $__language_Array__["f936d5500c4364fd956a7d7aebc96324"],
      Weakness: $__language_Array__["b02658e8ec8618b57e33d565752101af"],
      Story: $__language_Array__["b7e09052bf9cf5ec9056626f1d6a7c4a"]
    },

    getShadow(self) {
      return `left:${self.beAttackedPointL - 10}px;top:${self.height - 20}px;width:210px;background-size:210px 38px;height:38px;`;
    },

    AudioArr: ["zamboni", "machineExplosion"],

    getButter() {},

    BirthCallBack: function (h) {
      var g = h.delayT,
          e = h.id,
          c = h.Ele = $(e),
          R = h.R,
          $Ice = oGd.$Ice;
      h.EleShadow = c.firstChild;
      h.EleBody = c.childNodes[1]; //如果此行不存在冰道数据

      if (!$Ice[R] || !$("dIceCar" + R)) {
        let wrap = NewEle("dIceCar" + R, "div", `position:absolute;z-index:1;left:145px;top:${GetY(R) - 80}px;width:800px;height:72px`, 0, EDPZ);
        NewEle(`Ice_${R}`, 'div', `position:absolute;width:800px;height:72px;left:5px;clip:rect(0,auto,auto,800px);background:url(images/Zombies/Zomboni/ice_${oS.DKind ? 'm' : 'n'}.webp) repeat-x`, null, wrap);
        NewImg(`Ice_Cap_${R}`, `images/Zombies/Zomboni/ice_cap_${oS.DKind ? 'm' : 'n'}.webp`, "position:absolute;left:956px;", wrap);
        $Ice[R] = [1, 11, h.X + 150]; //第二个参数为制冰点X坐标，并不是AttackedLX，这里做出修改
      } else {
        ++$Ice[R][0];
      }

      g ? oSym.addTask(g, function (j, i) {
        var k = $Z[j];
        k && (k.FreeSetbodyTime = 0, SetBlock(i), PlayAudio("zamboni"));
      }, [e, c]) : (SetBlock(c), PlayAudio("zamboni"));
    },
    ChkActs: function (o, R, arR, i) {
      if (!(o.FreeFreezeTime || o.FreeSetbodyTime)) {
        let Speed,
            AttackedRX,
            rV,
            BigDiv,
            ArIce = oGd.$Ice[R],
            //当前行的冰道数据
        X,
            X1,
            X2,
            C,
            dIceCar = $('dIceCar' + R);
        o.JudgeAttack(); //无论是否临死均有碾压

        (AttackedRX = o.AttackedRX -= Speed = o.Speed * o.SpeedCoefficient) < -50 ? (arR.splice(i, 1), o.DisappearDie(), rV = 0) : (o.ZX = o.AttackedLX -= Speed, o.Ele.style.left = Math.floor(o.X -= Speed) + 'px', rV = 1);
        X = o.X;
        X1 = X + 150; //制冰点的X坐标

        X2 = X; //裁剪距离

        C = GetC(X1 + 19);
        C > -1 && ArIce && C < ArIce[1] && (oGd.$Crater[R + '_' + C] = 1, //当冰车的列比冰道小，则把列设置为坑，不允许植物种植
        (() => {
          for (let i = 0; i <= PKindUpperLimit; i++) {
            var _oGd$$$;

            if (((_oGd$$$ = oGd.$[`${R}_${C}_${i}`]) === null || _oGd$$$ === void 0 ? void 0 : _oGd$$$.EName) === "oSpikeweed") {
              o.flatTire();
              break;
            }
          }
        })(), oGd.killAll(R, C), //以防万一，清理被设置成坑的格子的植物
        ArIce[1] = C //保存当前行的冰车道最左到达了哪一列
        );

        if (X1 > 120 && ArIce && X1 < ArIce[2]) {
          ArIce[2] = X1;
          dIceCar && (dIceCar.firstChild.style['clip'] = "rect(0,auto,auto," + X2 + "px)", dIceCar.childNodes[1].style.left = Math.max(0, X2) + 'px');
        } //前4格减速


        GetC(o.AttackedLX) > 5 && (o.OSpeed = o.Speed -= .005);
        return rV;
      }

      return 1;
    },
    getPea: function (c, b) {
      PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
      c.getHit0(c, b);
    },
    getFirePea: function (c, b) {
      PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
      c.getHit0(c, b);
    },
    getSnowPea: function (c, b) {
      PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
      c.getHit0(c, b);
    },

    getSlow() {},

    getFirePeaSputtering: function () {},
    getFreeze: function (c, b) {
      //原地冰冻效果
      c.getHit0(c, 20);
    },
    getCharredCSS: _ => ({}),
    getHit: a,
    getHit0: a,
    getHit1: a,
    getHit2: a,
    getHit3: a,

    getExcited(intensity, duration_ = undefined) {
      let self = this;
      let ele = self.Ele;
      let duration = duration_ !== null && duration_ !== void 0 ? duration_ : 1200;
      let oldTimeStamp = self.FreeExcitedTime;
      let newTimeStamp = oSym.Now + duration;
      self.Speed *= intensity;
      self.Attack *= intensity;

      if (!oldTimeStamp) {
        NewImg(`buff_excited_${Math.random()}`, "images/zombies/buff_excited.png", "left:50px;top:200px;height:38px;z-index:5;", ele, {
          className: 'buff_excited'
        });
        !$User.LowPerformanceMode && EditCompositeStyle({
          ele: self.EleBody,
          styleName: 'filter',
          addFuncs: [['url', oSVG.getSVG('getExcited')]],
          option: 2
        });
      }

      if (oldTimeStamp < newTimeStamp) {
        self.FreeExcitedTime = newTimeStamp;
        oSym.addTask(duration, () => {
          if ($Z[self.id] && self.FreeExcitedTime === newTimeStamp) {
            ClearChild(ele.querySelector('.buff_excited'));
            self.FreeExcitedTime = 0;
            self.Attack = self.OAttack;
            self.Speed && (self.Speed = self.OSpeed);
            !$User.LowPerformanceMode && EditCompositeStyle({
              ele: self.EleBody,
              styleName: 'filter',
              delFuncs: [['url', oSVG.getSVG('getExcited')]],
              option: 2
            });
          }
        });
      }
    },

    GoingDie: function () {
      let b = this;
      b.beAttacked = 0;
      b.AutoReduceHP(b.id); //抖动特效

      (function fun() {
        oSym.addTask(2, () => {
          b.EleBody.style['marginLeft'] = '-1px';
          oSym.addTask(2, () => {
            b.EleBody.style['marginLeft'] = '2px';
            $Z[b.id] && fun();
          });
        });
      })();

      b.ChanceThrowCoin(b);
    },
    NormalDie: function () {
      //正常死亡
      PlayAudio("machineExplosion");
      let self = this;
      let wrap = self.Ele;
      let effect = NewEle(self.id + "godie", "div", `position:absolute;z-index:${self.zIndex + 1};width:225px;height:220px;left:${self.X}px;top:${self.pixelTop}px;background:url(${self.PicArr[self.DieGif]});`, 0, EDPZ);
      self.PrivateDie && self.PrivateDie(self);
      self.HP = 0;
      oEffects.fadeOut(wrap, 1.3, _ => ClearChild(wrap, effect));
      delete $Z[self.id];
      oP.MonitorZombiePosition(self);
      self.PZ && oP.MonPrgs();
    },
    PrivateDie: self => self.JudgeIce(),
    CrushDie: function () {
      //被剪草机压死
      this.NormalDie();
    },
    getThump: function () {
      //被窝瓜压死
      this.NormalDie();
    },
    JudgeIce: function () {
      //冰道后续机制
      let R = this.R,
          dIceCar = $("dIceCar" + R),
          $Ice = oGd.$Ice[R],
          $Crater = oGd.$Crater; //如果现在当前行已经没冰车了，激活清除程序

      $Ice && --$Ice[0] <= 0 && oSym.addTask(3000, _ => {
        let leftBorderC = $Ice[1];
        $Ice = oGd.$Ice[R];

        if ($Ice && $Ice[0] <= 0 && dIceCar) {
          oEffects.fadeOut(dIceCar, 'fast', ClearChild);

          while (leftBorderC < 11) delete $Crater[R + "_" + leftBorderC++];

          delete oGd.$Ice[R];
        }
      });
    },

    flatTire() {
      //被地刺扎到
      let self = this;
      self.EleBody.src = self.PicArr[self.FlatTireGif];
      self.beAttacked = self.HP = 0;

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = self.ChkActs = self.ChkActs1 = () => {};

      oSym.addTask(290, () => $Z[self.id] && self.NormalDie());
    },

    JudgeAttack: function () {
      var f = this,
          c = f.ZX,
          d = f.R + "_",
          e = GetC(c),
          g = oGd.$,
          b;
      (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1]);
    },

    JudgeLR(self, crood, C, ZX, G) {
      //远程判定，普通僵尸的远程是自己前面一格
      if (C > 10 || C < 1) return;
      crood += C - 1 + '_';
      let z = PKindUpperLimit;

      while (z >= 0) {
        let plant = G[crood + z];

        if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
          if (plant.EName === 'oRifter') return CustomSpecial(oBegonia, plant.R, plant.C);
          if (plant.canShovel) return [self.id, plant.id];
        }

        z--;
      }
    },

    JudgeSR(self, crood, C, ZX, G) {
      //近程判定，普通僵尸的近程是自己所在一格
      if (C > 9) return;
      crood += C + "_";
      let z = PKindUpperLimit;

      while (z >= 0) {
        let plant = G[crood + z];

        if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
          if (plant.EName === 'oRifter') return CustomSpecial(oBegonia, plant.R, plant.C);
          if (plant.canShovel) return [self.id, plant.id];
        }

        z--;
      }
    },

    NormalAttack: function (zid, pid) {
      let zombie = $Z[zid],
          plant = $P[pid];
      zombie && plant && plant.getHurt(zombie, 2, zombie.Attack);
    }
  });
}(),
    oBossB = InheritO(oBossA, {
  EName: "oBossB",
  CName: $__language_Array__["45e0a3309dec97998c3c17161e08392f"],
  HP: 8000,
  Stage: 1,
  width: 488,
  height: 420,
  CanSummonZomboni: 0,
  SummonLevel: 0,
  beAttackedPointL: 120,
  beAttackedPointR: 326,
  SummonZombieDifficulty: 0.7,

  ChanceThrowCoin() {},

  Almanac: {
    Tip: $__language_Array__["e39ba63078aecf2a41ff05b3acfc46ee"],
    Speed: $__language_Array__["8887ca7ef02ee588fdadc07a344f0f50"],
    Weakness: $__language_Array__["13a28bb5bdb15ce26671180fe095b7dc"],

    get Story() {
      let a = $__language_Array__["f2560395397fd24cc2093bc1253f3e6b"];
      let json = localStorage["JNG_TR_WON"] ? JSON.parse(localStorage["JNG_TR_WON"]) : {};
      let man = json["Industry25"] ? "Job" : $__language_Array__["8229f7563ddf03b73d111f4161c4eef6"];
      let word1 = `${$__language_Array__["2954884312057e870bb288a9a965d65a"][0]}${man}${$__language_Array__["2954884312057e870bb288a9a965d65a"][1]}`;
      let b = $__language_Array__["f987c88dba86cc4566d5dffa516ca0be"];
      let d = $__language_Array__["86c29dca559c0af588f54e587ebcac07"];
      let e = $__language_Array__["fe2f088d168cb352c05591754b5c88ce"];
      let f = $__language_Array__["e9f56bb433ebcee8f96746652ba5377e"];

      let c = function (str = $__language_Array__["ecb10811232552a2dd9ca24610246571"]) {
        return `${$__language_Array__["dee617691dab3c8825c2530faddf0745"][0]}${str}${$__language_Array__["dee617691dab3c8825c2530faddf0745"][1]}`;
      };

      if (!json["Marsh25"]) {
        return a;
      } else {
        if (json["Industry25"] || json["Industry20"]) {
          return word1 + b + e + d + f + c();
        } else if (json["Polar30"]) {
          return word1 + b + $__language_Array__["74746ded4cc6f25c9229ca8ab02c77dd"] + d + $__language_Array__["0c48a2809e55d77fe7fff1e44ccbd73e"] + c("");
        } else {
          return word1 + $__language_Array__["25c61ffde7552ce7d5500042426a82cb"];
        }
      }
    }

  },

  getAlmanacDom(pro) {
    if (!pro.Almanac.Dom) {
      let ClassAlmanac = CZombies.prototype.Almanac;

      for (let i in ClassAlmanac) {
        if (!pro.Almanac[i]) {
          pro.Almanac[i] = ClassAlmanac[i];
        }
      }

      pro.Almanac.Dom = pro.getHTML("", 190 - pro.width / 2, 550 - pro.height, "1;transform:scale(0.7);height:" + pro.height + "px;width:" + pro.width + "px", "block", "auto", pro.GetDTop, pro.PicArr[0]);
    }
  },

  PicArr: function () {
    var b = "images/Zombies/BossB/";
    return [b + "0.webp", b + "move1.webp", b + "move2.webp", b + "call.webp", b + "icewind.webp", b + 'missiles.webp', b + 'die.png'];
  }(),
  GetDY: _ => 40,

  getButter() {},

  RenderEleBody(url, callback) {
    let self = this;
    let oldBody = self.EleBody;
    let newBody = oldBody.cloneNode();
    newBody.src = url;

    newBody.onload = _ => {
      self.Ele.replaceChild(newBody, oldBody);
      self.EleBody = newBody;
      newBody.onload = null;
      callback && callback();
    };
  },

  CustomBirth(R, C, delayT, clipH) {
    const self = this,
          bottomY = GetY(R) + self.GetDY(),
          pixelTop = bottomY - self.height,
          zIndex = 3 * R + 1,
          id = self.id = "Z_" + Math.random(),
          beAttackedPointL = self.beAttackedPointL,
          beAttackedPointR = self.beAttackedPointR;
    self.ZX = self.AttackedLX = GetX(C) - beAttackedPointL;
    self.X = self.ZX - beAttackedPointL;
    self.AttackedRX = self.X + beAttackedPointR;
    self.R = R;
    self.pixelTop = pixelTop;
    self.zIndex = zIndex;
    (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now);
    self.Activites = self.Activites.bind(self);
    return self.getHTML(id, self.X, pixelTop, zIndex, "block", clipH || 0, self.GetDTop, 'images/Zombies/BossB/move2.webp');
  },

  RestoreAction(delay) {
    oSym.addTask(delay, _ => {
      this.EleBody.src = 'images/Zombies/BossB/0.webp';
      this.Activites();
    });
  },

  Move(R, C = 8) {
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
      }, 1.1 / oSym.NowSpeed, 'ease-in', _ => self.RenderEleBody('images/Zombies/BossB/0.webp', _ => {
        self.beAttacked = 1;
        self.Activites();
      }));
    });
  },

  Activites() {
    let time,
        random,
        self = this,
        ele = self.EleBody,
        sound = Math.floor(Math.random() * 11) + 1;

    if (!$Z[self.id]) {
      return;
    }

    if (sound < 4) {
      PlayAudio("Zomboss" + sound);
    }

    switch (self.Stage) {
      case 1:
        time = Math.random() * 600 + 600;
        random = Math.random() * 5;

        if (random >= 3.5 || oP.NumZombies < 3 * self.SummonZombieDifficulty) {
          self.PlaceZombies(time, Math.floor(Math.random() * 4 + 4), [oZombie, oConeheadZombie, oImp, oBalloonZombie]);
        } else if (random >= 2) {
          if (oP.NumZombies > 10) {
            oSym.addTask(time, self.Activites);
          } else {
            self.Move(Math.floor(Math.random() * 5 + 1));
          }
        } else if (random >= 1.25) {
          self.PlaceMissiles(2, 0);
        } else if (random >= 0.5) {
          self.IceStorm(self.R - 1, self.R, Math.floor(Math.random() * 3 + 1));
        } else {
          oSym.addTask(time / 6, self.Activites);
        }

        break;

      case 2:
        time = Math.random() * 600 + 800;
        random = Math.random() * 5;

        if (random >= 3.5 || oP.NumZombies < 4 * self.SummonZombieDifficulty) {
          self.PlaceZombies(time, Math.floor(Math.random() * (8 + (self.SummonLevel += Math.random() + 0.4)) + 12), [oZombie, oConeheadZombie, oBucketheadZombie, oStrollZombie, oMakeRifterZombie, oSkatingZombie, oNewspaperZombie, oCaskZombie]);
        } else if (random <= 1.5) {
          if (oP.NumZombies > 23) {
            oSym.addTask(time, self.Activites);
          } else {
            self.Move(Math.floor(Math.random() * 5 + 1));
          }
        } else if (random > 2.5) {
          self.PlaceMissiles(3, 0);
        } else if (random < 2) {
          self.IceStorm(self.R - 1, self.R + 1, Math.floor(Math.random() * 5 + 2));
        } else {
          oSym.addTask(time / 2, self.Activites);
        }

        break;

      case 3:
        time = Math.random() * 700 + 900;
        random = Math.random() * 5;

        if (random >= 3.5 || oP.NumZombies < 17 * self.SummonZombieDifficulty) {
          self.PlaceZombies(time, Math.floor(Math.random() * (15 + (self.SummonLevel += Math.random() + 0.6)) + 17), [oImp, oConeheadZombie, oZombie, oCigarZombie, oPushIceImp, oMembraneZombie, oSadakoZombie, oNewspaperZombie, oStrollZombie, oMakeRifterZombie]);
        } else if (random >= 2.7) {
          if (oP.NumZombies > 45) {
            self.SelfCantBeAttack(time / 2);
            oSym.addTask(time, self.Activites);
          } else {
            self.Move(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 2 + 7), 1.2);
          }
        } else if (random > 2.3) {
          self.PlaceMissiles(2, 0);
        } else if (random >= 1.9) {
          self.IceStorm(self.R - 1, self.R + 1, Math.floor(Math.random() * 3 + 3));
        } else if (random >= 1) {
          self.SelfCantBeAttack(time / 3);
          self.ZombieInvisible(self.R, self.R);
          oSym.addTask(time / 3, self.Activites);
        } else {
          self.SelfCantBeAttack(time / 2);
          oSym.addTask(time / 3, self.Activites);
        }

        break;

      case 4:
        time = Math.random() * 650 + 600;
        random = Math.random() * 5;

        if (random >= 3.5 || oP.NumZombies < 11 * self.SummonZombieDifficulty) {
          let arr = [oImp, oConeheadZombie, oImp, oConeheadZombie, oZombie, oCigarZombie, oPushIceImp, oMakeRifterZombie];
          self.CanSummonZomboni && (arr[arr.length] = oZomboni);
          self.PlaceZombies(time, Math.floor(Math.random() * (6 + (self.SummonLevel += Math.random() + 0.4)) + 6), arr);
        } else if (random <= 1.5) {
          if (oP.NumZombies > 45) {
            oSym.addTask(time, self.Activites);
            self.SelfCantBeAttack(time / 3);
          } else {
            self.Move(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 2 + 7), 1.4);
          }
        } else if (random > 2.5) {
          self.PlaceMissiles(1);
        } else if (random < 2) {
          self.IceStorm(self.R - 1, self.R + 1, Math.floor(Math.random() * 3 + 4));
        } else {
          self.SelfCantBeAttack(time / 4);
          oSym.addTask(time / 3, self.Activites);
        }

        break;

      default:
        time = Math.random() * 300 + 500;
        random = Math.random() * 7;

        if (random > 6 || oP.NumZombies < ((4466 - self.HP) % 25 + 13) * self.SummonZombieDifficulty) {
          self.SelfCantBeAttack(time / 1.3);
          let arr = [oZombie, oZombie, oZombie, oConeheadZombie, oStrollZombie, oBucketheadZombie, oBalloonZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oSkatingZombie, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oPushIceImp, oMembraneZombie, oCigarZombie, oSkatingZombie, oMakeRifterZombie, oFootballZombie, oImp, oCaskZombie, oSadakoZombie, oPushIceImp, oMembraneZombie];
          self.CanSummonZomboni && (arr[arr.length] = oZomboni);
          self.PlaceZombies(time, Math.floor(Math.random() * (13 + (self.SummonLevel += Math.random() + 0.8)) + 15), arr);
        } else if (random > 5.5) {
          self.PlaceMissiles();
          self.SelfCantBeAttack(time / 7.5);
        } else if (random > 4 && random < 5) {
          self.IceStorm(1, 5, Math.floor(Math.random() * 5 + 5));
          self.SelfCantBeAttack(time / 5.4);
        } else if (random > 3) {
          self.ZombieInvisible(self.R - 1, self.R + 1);
          self.Move(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 2 + 7), 1.5);
        } else {
          oSym.addTask(time / 3, self.Activites);
          self.SelfCantBeAttack(time / 4);
        }

    }
  },

  ZombieInvisible(Up, Down) {
    for (let zom of $Z) {
      if (zom.R >= Up && zom.R <= Down && !zom.isPuppet && zom.id !== this.id) {
        oEffects.Animate($(zom.id), {
          opacity: '0'
        }, 1 / oSym.NowSpeed, 'slow', _ => $Z[zom.id] && ($(zom.id).style.visibility = `hidden`));
      }
    }
  },

  SelfCantBeAttack(time) {
    this.HP += 5 * (time / 100);
    oFlagContent.update({
      curValue: self.HP
    });
  },

  PlaceZombies(time, num, zombies) {
    this.EleBody.src = 'images/Zombies/BossB/call.webp';
    this.RestoreAction(380);
    num = Math.floor(num * this.SummonZombieDifficulty);

    while (num--) {
      oSym.addTask(Math.random() * (time / 2), _ => {
        if (!$Z[this.id]) {
          return;
        }

        let obj = zombies[Math.floor(Math.random() * zombies.length)];
        PlaceZombie(obj, Math.floor(Math.random() * 5 + 1), obj.prototype.EName == "oZomboni" ? 11 : GetC(this.X) + 1);
      });
    }
  },

  IceStorm(a, b, number) {
    this.EleBody.src = 'images/Zombies/BossB/icewind.webp';
    this.RestoreAction(380);
    oSym.addTask(100, oMiniGames.IceStorm, [a, b, number]);
    oSym.addTask(200, _ => {
      for (let i of $Z) {
        if ($Z[i.id] && i.id != this.id && (i.R >= a && i.R <= b || i.R >= b && i.R <= a)) {
          i.getHit0(i, 60);
        }
      }
    });
  },

  BirthCallBack(self) {
    PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
    let ele = self.Ele = $(self.id),
        eleBody = self.EleBody = ele.childNodes[1];
    self.EleShadow = ele.firstChild;
    ele.style.opacity = 0;
    oEffects.Animate(ele, {
      opacity: 1
    }, 1, 'ease-in', _ => self.RenderEleBody('images/Zombies/BossB/0.webp', _ => oSym.addTask(100, self.Activites)));
  },

  ChkActs: _ => 1,

  ChkStage() {
    let self = this,
        HP = self.HP,
        oHP = self.__proto__.HP;

    switch (true) {
      case HP < oHP / 5 * 4.3 && self.Stage < 2:
        self.Stage = 2;
        self.SummonLevel = 0;
        break;

      case HP < oHP / 5 * 3 && self.Stage < 3:
        self.Stage = 3;
        self.SummonLevel = 0;
        break;

      case HP < oHP / 5 * 2.5 && self.Stage < 4:
        self.Stage = 4;
        self.SummonLevel = 0;
        break;

      case HP < oHP / 5 && self.Stage < 5:
        self.Stage = 5;
        self.SummonLevel = 0;
        break;
    }
  },

  NormalGetAttack(self, a) {
    if ((self.HP -= a) < 0) {
      self.NormalDie();

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = _ => {};

      return;
    }

    self.ChkStage();
    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
    oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
      curValue: self.HP
    });
  },

  getRaven() {},

  getCrushed() {
    this.NormalGetAttack(this, 40); //撞到车给僵王造成约1/10血量的伤害
  },

  getHit0(d, a) {
    this.NormalGetAttack(d, a);
  },

  getHit1(d, a) {
    this.NormalGetAttack(d, a);
  },

  getHit2(d, a) {
    this.NormalGetAttack(d, a);
  },

  getHit3(d, a) {
    this.NormalGetAttack(d, a);
  },

  getSlow() {},

  getExplosion() {
    let self = this;

    if (self.HP > 400) {
      self.HP -= 400;
      self.ChkStage();
    } else {
      self.HP = 0;
      self.NormalDie();
    }

    oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
      curValue: self.HP
    });
  },

  PlaceMissiles(Numbers = 2, PlaceRifter = 1, a = this) {
    a.EleBody.src = 'images/Zombies/BossB/missiles.webp';
    a.RestoreAction(200);
    !a.isAttacking && (a.isAttacking = 1);
    oSym.addTask(150, function (d) {
      var posArr = [];
      var arrP = hasPlants(true);
      var c = oMissile;

      for (var is = 0; is < Numbers && arrP.length > 0; is++) {
        var Select = parseInt(Math.random() * arrP.length);
        CustomSpecial(c, arrP[Select].R, arrP[Select].C);
        posArr.push([arrP[Select].R, arrP[Select].C]);
        arrP.splice(Select, 1);
      }

      oSym.addTask(40, function () {
        for (let i = 0; i < posArr.length; i++) {
          for (let z of $Z) {
            if ($Z[z.id]) {
              let dist = Math.distance([z.X, GetY(z.R)], [GetX(posArr[i][1]), GetY(posArr[i][0])]);

              if (z.id != a.id && dist <= 120) {
                if (z.R == posArr[i][0] && GetC(z.X) == posArr[i][1]) {
                  z.getExplosion();
                } else {
                  if (z.HP + z.OrnHP < 640 - Math.floor(dist * 2.7)) {
                    z.getExplosion();
                  } else {
                    z.getHit0(z, 640 - Math.floor(dist * 2.7));
                  }
                }
              }
            }
          }
        }
      });
      d.isAttacking && (d.isAttacking = 0);
    }, [a]);
  },

  NormalDie() {
    let self = this,
        id = self.id;
    self.EleBody.src = self.PicArr[0];
    self.HP = 0;
    oEffects.fadeOut(self.Ele, 3, _ => {
      ClearChild(self.Ele);
    });
    delete $Z[id];
    oEffects.ImgSpriter({
      ele: NewEle(id + "_Die", "div", `position:absolute;z-index:${self.zIndex + 3};height:420px;width:488px;left:${self.X}px;top:${self.pixelTop}px;background:url(images/Zombies/BossB/die.png) no-repeat;`, 0, EDPZ),
      styleProperty: 'X',
      changeValue: -488,
      frameNum: 24,
      interval: 9
    });
    oEffects.ScreenShake();
    oP.MonitorZombiePosition(self);
    toWin();

    for (let i of $Z) i.ExplosionDie();
  }

}),
    oWinterBoss = InheritO(oBossB, {
  EName: "oWinterBoss",
  CName: $__language_Array__["bfbcf152cf20f14c674a58f2a18b6553"],
  HP: 10000,
  SummonZombieDifficulty: 0.85,
  CanSummonZomboni: 1
}),
    //雾都僵尸从以下开始
oSculptorZombie = InheritO(oZombie, {
  EName: "oSculptorZombie",
  CName: $__language_Array__["4898eb6adbe716f3846baf049536aedd"],
  width: 230,
  height: 185,
  beAttackedPointL: 126,
  beAttackedPointR: 190,
  NormalGif: 0,
  AttackGif: 1,
  LostHeadGif: 2,
  LostHeadAttackGif: 3,
  HeadGif: 4,
  DieGif: 5,
  StandGif: 6,
  PushGif: 7,
  LostHeadPushGif: 8,
  GetDY: _ => 5,
  HP: 670,
  BreakPoint: 224,
  OSpeed: 0.6,
  Speed: 0.6,
  BoomDieGif: 9,
  Almanac: {
    Tip: $__language_Array__["a2b3fbfa1c5418cbf11e007dfd40ebdf"],
    Speed: $__language_Array__["3666f6380398d9a1227ae59e1623cf7d"],
    Weakness: $__language_Array__["47487c0248ba031b5e40ae12f42fce91"],
    Story: $__language_Array__["2e93037cc7ba5668979f88149acc9a1d"]
  },
  HeadTargetPosition: [{
    x: 95,
    y: 50
  }],
  //头的位置数据
  getShadow: _ => `left:115px;top:144px;`,
  PicArr: (path => ['ZombieWalk.webp', 'ZombieAttack.webp', 'ZombieLostHeadWalk.webp', "ZombieLostHeadAttack.webp", "ZombieHead.webp", "ZombieDie.webp", "ZombieStand.webp", 'ZombiePush.webp', 'ZombieLostHeadPush.webp'].map(s => path + s))("images/Zombies/SculptorZombie/").concat('images/Zombies/BoomDie.webp'),
  AudioArr: ['sculptorZombie1', 'sculptorZombie2', 'sculptorZombiePush'],
  getCharredCSS: self => ({
    top: '62px',
    left: '118px'
  }),

  getHTML(id, wrapLeft, wrapTop, zIndex, display, clip, top, img) {
    const self = this,
          T = self.ArHTML;
    (self === null || self === void 0 ? void 0 : self.zIndex) && (self.zIndex += 1, zIndex++);
    return T[0] + id + T[1] + self.EName + T[2] + display + T[3] + wrapLeft + T[4] + wrapTop + T[5] + zIndex + T[6] + clip + T[7] + top + T[8] + img + T[9];
  },

  BirthCallBack(self) {
    PlayAudio(`sculptorZombie${1 + Math.round(Math.random())}`);
    self.SummonBlockCount = Math.floor(Math.random() * 3);
    OrnNoneZombies.prototype.BirthCallBack(self);
  },

  JudgeAttack() {
    let self = this;
    let ZX = self.ZX;
    let crood = self.R + "_";
    let C = GetC(ZX);
    let G = oGd.$;
    let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

    if (arr && self.Altitude === 1) {
      !self.isAttacking && (self.isAttacking = 1, self.EleBody.src = self.PicArr[self.AttackGif]);
      self.NormalAttack(...arr);
    } else {
      self.isAttacking && (self.isAttacking = 0, self.EleBody.src = self.PicArr[self.NormalGif]);
    }

    self.JudgePush(self, self.R, C);
  },

  JudgePush(self, R, C, G = oGd.$Sculpture) {
    //判定推雕塑
    if (!self.isAttacking) {
      if (self.SummonBlockCount > 0 && !G[R + '_' + 11] && C >= 11) {
        PlaceZombie(oSculpture, R, 11, 0);
        self.SummonBlockCount--;
      }

      let sp = G[R + '_' + C] || G[R + '_' + C - 1];

      if (sp && !sp.isMoving && self.CanPush(sp)) {
        self.isAttacking = 2; //推的时候不能动

        self.EleBody.src = self.PicArr[self.PushGif]; //替换图片

        let tempX = self.ZX;
        oSym.addTask(280, _ => {
          //这里设置延时推，所以要再判断一次
          if ($Z[self.id] && !(self.FreeFreezeTime || self.FreeSetbodyTime) && !self.isGoingDie && !self.isFloating && Math.abs(self.ZX - tempX) <= 1) {
            //僵尸未死亡、未垂死、未被弹起、未脱离原先位置
            if ((sp = G[R + '_' + C] || G[R + '_' + C - 1]) && !sp.isMoving && self.CanPush(sp)) {
              PlayAudio('sculptorZombiePush');
              sp.Move();
            }
          }
        });
        oSym.addTask(510, _ => {
          //无论推雕塑是否成功，动画播放完成后僵尸恢复正常状态
          if ($Z[self.id] && !self.isGoingDie) {
            //防止僵尸在推雕像的过程中被植物打死
            self.isAttacking = 0; //结束推雕像状态

            self.EleBody.src = self.PicArr[self.NormalGif];
          }
        });
      }
    }
  },

  getButter(...arr) {
    if (arr[0].isAttacking == 2) {
      return;
    }

    CZombies.prototype.getButter(...arr);
  },

  CanPush(sp) {
    return sp.AllCheck(sp.R, Math.min(sp.C - 1, 9)) !== false && sp.C > 1 && sp.Altitude === 1;
  },

  GoingDie() {
    let self = this,
        id = self.id;
    self.EleBody.src = self.PicArr[[self.LostHeadGif, self.LostHeadAttackGif, self.LostHeadPushGif][self.isAttacking]];
    self.GoingDieHead(id, self.PicArr, self);
    self.beAttacked = 0;
    self.isGoingDie = 1;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.AutoReduceHP(id);
    self.ChanceThrowCoin(self);
  },

  GoingDieHead(id, PicArr, self) {
    let ele = NewImg(`${id}_Head`, PicArr[self.HeadGif], `left:${self.X}px;top:${self.pixelTop}px;z-index:${self.zIndex};`, EDPZ);
    oSym.addTask(200, oEffects.fadeOut, [ele, 'fast', ClearChild]);
  },

  NormalDie() {
    let self = this,
        ele = self.Ele;
    self.PrivateDie && self.PrivateDie(self);
    self.EleBody.src = self.PicArr[self.DieGif];
    oSym.addTask(250, oEffects.fadeOut, [ele, 'fast', ClearChild]);
    self.HP = 0;
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  }

}),
    oBeetleCarZombie = (() => {
  const _getHit = oZomboni.prototype.getHit;

  const _Die = function (isFlatTire) {
    PlayAudio('beetleCarDie');
    let self = this;
    self.HP = 0;
    !isFlatTire && (self.Ele.style.top = `${self.pixelTop - 50}px`, self.EleShadow.style.top = '201px', self.Speed = 0);
    self.EleBody.src = self.PicArr[self.DieGif];
    self.PrivateDie && self.PrivateDie(self);
    oEffects.fadeOut(self.Ele, 2, ClearChild, 1);
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  };

  const _getPea = (self, attack) => {
    PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
    self.getHit0(self, attack);
  };

  return InheritO(OrnNoneZombies, {
    EName: "oBeetleCarZombie",
    CName: $__language_Array__["2a427a0b34903d84e6ba7bb65607e7c4"],
    HP: 1000,
    StandGif: 0,
    NormalGif: 1,
    width: 248,
    height: 173,
    GetDTop: 10,
    beAttackedPointL: 50,
    beAttackedPointR: 230,
    OSpeed: 1.8,
    Speed: 1.8,
    Lvl: 4,
    AKind: 2,
    FlatTireGif: 3,
    DieGif: 4,
    isReleasing: 0,
    changingX: 0,
    getCharredCSS: _ => ({}),

    getButter() {},

    getShadow: self => `left:${self.beAttackedPointL - 10}px;top:${self.height - 22}px;`,
    getDisplayShadow: self => `left:${self.beAttackedPointL - 50}px;top:${self.height - 22}px; width: 250px; background-size: 250px 38px; height: 38px;`,
    PicArr: (path => [path + "Idle.webp", path + 'Walk.webp', path + 'Release.webp', path + 'FlatTire.webp', path + 'Die.webp', path + 'Exhaust.png', path + 'Shadow.png'])("images/Zombies/BeetleCarZombie/"),
    AudioArr: ["zamboni", "shieldhit", "shieldhit2", 'beetleCarDie'],
    Almanac: {
      Tip: $__language_Array__["1b7abfd9130e7c85454be45e13bfd7b6"],
      Speed: $__language_Array__["ad3a86d920c7787208b260a16f1bd3f7"],
      Weakness: $__language_Array__["b02658e8ec8618b57e33d565752101af"],

      get Story() {
        let json = localStorage["JNG_TR_WON"] ? JSON.parse(localStorage["JNG_TR_WON"]) : {};
        let man = json["Industry25"] ? "Job" : $__language_Array__["8229f7563ddf03b73d111f4161c4eef6"];
        let a = $__language_Array__["7d4902c8d0a209aa0eee72fb0511cb8d"];
        let aa = `${$__language_Array__["1b5ec391578388b0aac02b1352045999"][0]}${man}${$__language_Array__["1b5ec391578388b0aac02b1352045999"][1]}`;
        let b = $__language_Array__["3590fdb3fdd6222feca65969b5b9dd45"];
        let c = $__language_Array__["f70fabc6cd89196285da141c41eac97b"];

        if (json["Industry6"] || json["Industry25"]) {
          return a + aa + b + c;
        } else {
          return a + $__language_Array__["f5663f6b1b0ee1449822c8825f4699fe"] + b + $__language_Array__["72d62527968c6583c93b9c3ced9a5155"];
        }
      }

    },

    Init(AppearX, pro, LF, MaxR) {
      let len = 0,
          o = this,
          ArR = [];
      pro.ZX = pro.AttackedLX = AppearX;
      pro.X = pro.ZX - pro.beAttackedPointL;
      pro.AttackedRX = pro.X + pro.beAttackedPointR;

      for (let i = 0; i <= MaxR; i++) {
        pro.CanPass(i, LF[i]) && ArR.push(i);
      }

      pro.ArR = ArR; //僵尸能够出现的行数组
      //初始化HTML字符数组

      pro.ArHTML = [`<div id="`, //0
      `" data-jng-constructor="`, //1
      `" style="position:absolute;display:`, //2
      `;left:`, //3
      `px;top:`, //4
      `px;z-index:`, //5
      `"><div style="position: absolute;width: 231px;height: 44px;left:15px;top:145px;background:url(images/Zombies/BeetleCarZombie/Shadow.png);background-size:100% 120%;"></div><img style="clip:rect(0,auto,`, //6
      `,0);top:`, //7
      `px" src="`, //8
      `"></div>` //9
      ];
      o.getAlmanacDom(pro);
    },

    BirthCallBack(self) {
      PlayAudio('zamboni');
      let delayT = self.delayT;
      let id = self.id;
      let ele = self.Ele = $(id);
      self.EleShadow = ele.firstChild;
      self.EleBody = ele.childNodes[1];

      if (delayT) {
        oSym.addTask(delayT, () => $Z[id] && (self.FreeSetbodyTime = 0, SetBlock(ele)));
      } else {
        SetBlock(ele);
      }
    },

    GoLeft(o, R, arR, i) {
      let Speed = o.Speed * o.SpeedCoefficient;
      let hookKey = 1;

      if (!o.FreeFreezeTime && !o.FreeSetbodyTime) {
        if (!o.isReleasing) {
          !o.isGoingDie && o.JudgeAttack();

          if ((o.AttackedRX -= Speed) < -50) {
            arR.splice(i, 1);
            o.DisappearDie();
            hookKey = 0;
          } else {
            o.ZX = o.AttackedLX -= Speed;
            SetStyle(o.Ele, {
              left: (o.X -= Speed) + 'px'
            });
            o.Release(o, o.Speed);
          }
        }
      } //检查场地事件


      o.ChkCell_GdType(o);
      return hookKey;
    },

    Release(self, speed) {
      const id = self.id;
      const X = self.X;
      self.changingX += speed;

      if (GetC(X) >= 9) {
        return self.changingX = 0;
      }

      if (self.changingX >= 150) {
        self.changingX = 0;
        self.isReleasing = 1;
        self.EleBody.src = 'images/Zombies/BeetleCarZombie/Release.webp';
        oSym.addTask(240, () => {
          if (!$Z[id]) return;
          oEffects.ImgSpriter({
            ele: NewEle(self.id + '_Exhaust', "div", `pointer-events:none;position:absolute;z-index:${self.zIndex + 2};width:255px;height:216px;left:${self.X + 230}px;top:${self.pixelTop + 23}px;background:url(images/Zombies/BeetleCarZombie/Exhaust.png) no-repeat;`, 0, EDPZ),
            changeValue: -255,
            frameNum: 58
          });
          let zombieArr = oZ.getArZ(self.AttackedRX + 5, 880, self.R); //傀儡不加速

          zombieArr.forEach(zombie => !zombie.isPuppet && zombie.getExcited(1.2));
        });
        oSym.addTask(320, () => {
          $Z[id] && (self.isReleasing = 0, self.EleBody.src = 'images/Zombies/BeetleCarZombie/Walk.webp');
        });
      }
    },

    flatTire() {
      //被地刺扎到
      let self = this;
      self.Ele.style.cssText += `top:${self.pixelTop - 50}px;`;
      self.EleShadow.style.cssText += 'top:201px;';
      self.EleBody.src = self.PicArr[self.FlatTireGif];
      self.beAttacked = self.HP = self.Speed = 0;

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = self.ChkActs = self.ChkActs1 = () => {};

      oSym.addTask(115, () => $Z[self.id] && self.NormalDie(true));
    },

    getPea: _getPea,
    getFirePea: _getPea,
    getSnowPea: _getPea,
    getFreeze: _getPea,
    getHit: _getHit,
    getHit0: _getHit,
    getHit1: _getHit,
    getHit2: _getHit,
    getHit3: _getHit,
    GoingDie: oZomboni.prototype.GoingDie,
    NormalDie: _Die,
    CrushDie: _Die,
    getThump: _Die,
    ExplosionDie: _Die,

    getSlow() {},

    JudgeAttack: oZomboni.prototype.JudgeAttack,

    JudgeLR(self, crood, C, ZX, G) {
      //远程判定，普通僵尸的远程是自己前面一格
      if (C > 10 || C < 1) return;
      crood += C - 1 + '_';
      let z = PKindUpperLimit;

      while (z >= 0) {
        let plant = G[crood + z];

        if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
          if (plant.canShovel) return [self.id, plant.id];
        }

        z--;
      }
    },

    JudgeSR(self, crood, C, ZX, G) {
      //近程判定，普通僵尸的近程是自己所在一格
      if (C > 9) return;
      crood += C + "_";
      let z = PKindUpperLimit;

      while (z >= 0) {
        let plant = G[crood + z];

        if (plant && plant.AttackedRX >= ZX && plant.AttackedLX <= ZX) {
          if (plant.canShovel) return [self.id, plant.id];
        }

        z--;
      }
    },

    NormalAttack: oZomboni.prototype.NormalAttack
  });
})(),
    oThiefZombie = InheritO(OrnNoneZombies, {
  EName: "oThiefZombie",
  CName: $__language_Array__["25f4eea433be76ac291fe414b7f21f86"],
  HP: 700,
  oHP: 700,
  NormalGif: 3,
  CardGif: 0,
  StandGif: 1,
  StaticGif: 3,
  AttackGif: 5,
  LostHeadGif: 7,
  LostHeadAttackGif: 7,
  HeadGif: 8,
  DieGif: 7,
  DropGif: 2,
  width: 130,
  Lvl: 4,
  Almanac: {
    Tip: $__language_Array__["81d056d6354811e2ce57441e7477a10a"],
    Speed: $__language_Array__["426447ca47ebfe6eaced0f4182bda3d9"],
    Weakness: $__language_Array__["03a8f458a7e26b303bac19dbca58e5d6"],
    Story: $__language_Array__["4a66bc7143a41af1f0dfd6004ae74a36"]
  },
  StealPlantRequirement: function (p) {
    return p.Tools != true && p.canEat == true;
  },
  beAttackedPointL: 35,
  beAttackedPointR: 90,
  ForcePKind: -1,
  FullPackage: 0,
  Speed: 3.2,
  Altitude: 3,
  isAttacking: 3,
  isFloating: true,
  YiZengjia: 0,
  FangXiang: 'GoRight',
  WalkDirection: 1,
  height: 572,
  displayHeight: 124,
  width: 114,
  AudioArr: ["ThiefZombie"],
  BoomDieGif: 9,
  HeadTargetPosition: [{
    x: 78,
    y: 20
  }, {
    x: 75,
    y: 20
  }],
  //头的位置数据
  getShadow: self => `left:${self.beAttackedPointL - 25}px;top:${self.height - 22}px;`,
  getDisplayShadow: self => `left:${self.beAttackedPointL - 25}px;top:${self.displayHeight - 22}px;`,
  PicArr: (path => ["", path + "idle.webp", path + 'drop.webp', path + 'run_empty.webp', path + 'run_full.webp', path + 'catch.webp', path + 'eat.webp', path + 'die.webp', path + 'head.webp'])("images/Zombies/ThiefZombie/").concat('images/Zombies/BoomDie.webp'),
  getCharredCSS: self => ({
    left: `19px`,
    top: `16px`,
    transform: 'rotateY(180deg)'
  }),

  //普通诞生事件,由程序自动调用,在每波刷新 
  //初始化僵尸样式，编译僵尸html代码
  prepareBirth(delayT, r, c) {
    let self = this;
    self.ChkActs = self.GoRight;
    self.ArHTML = [`<div id="`, //0
    `" data-jng-constructor="`, //1
    `" style="position:absolute;display:`, //2
    `;left:`, //3
    `px;top:`, //4
    `px;z-index:`, //5
    `"><div class='Shadow' style="${self.getShadow(self)}"></div><img style="clip:rect(0,auto,`, //6
    `,0);top:`, //7
    `px" src="`, //8
    `"></div>` //9
    ];
    let id = self.id = "Z_" + Math.random();
    let R, C;

    if (!r || !c) {
      let plant = hasPlants(true, self.StealPlantRequirement);

      if (plant.length > 0 && Math.random() > 0.05) {
        let random = plant.random();
        [R, C] = [random.R, random.C];
      } else {
        R = self.ArR.random();
        C = Math.floor(Math.random() * 9 + 1);
      }
    } else {
      [R, C] = [r, c];
    }

    self.HP = Infinity;
    self.R = R;
    let top = self.pixelTop = GetY(R) + self.GetDY() - self.height; //计算僵尸顶部坐标

    let zIndex = self.zIndex = 3 * R + 1;
    self.ZX = self.AttackedLX = GetX(C) - 20 - (self.beAttackedPointR - self.beAttackedPointL) * 0.5;
    self.X = self.ZX - self.beAttackedPointL;
    self.AttackedRX = self.X + self.beAttackedPointR;
    (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设置延迟出场时间戳

    return self.getHTML(id, self.X, top, zIndex, "none", "auto", self.GetDTop, self.PicArr[self.NormalGif]);
  },

  Birth(json = {}) {
    //唤醒僵尸，注册$Z和oZ
    let self = this;

    if (!json.dont_set_original_value) {
      //不设置原始数据，例如OAttack,OSpeed之类，否则默认备份OAttack,OSpeed
      self.OAttack = self.Attack;
      self.OSpeed = self.Speed;
    }

    self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr

    $Z[self.id] = self;
    oZ.add(self);
    self.HeadTargetPosition = JSON.parse(JSON.stringify(self.HeadTargetPosition)); //深拷贝头部坐标，避免改的时候直接改成prototype的
    //在callback里添加僵尸避免僵尸被提前识别死亡

    let id = self.id;
    let ele = self.Ele = $(id);
    self.EleShadow = ele.firstChild;
    self.EleBody = ele.childNodes[1];
    oSym.addTask(self.delayT, _ => {
      //初始化随机化图片
      for (let index in self.PicArr) {
        if (self.PicArr[index] && !/base64/.test(self.PicArr[index])) {
          self.PicArr[index] = RandomPic(self.PicArr[index], false, true);
        }
      }
    });
    self.BirthCallBack(self);
  },

  CustomBirth(R, C, delayT, clipH) {
    return this.prepareBirth(delayT, R, C);
  },

  JudgeAttack() {
    let self = this;
    let ZX = self.ZX;
    let crood = self.R + "_";
    let C = GetC(ZX);
    let G = oGd.$;
    let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

    if (arr && self.Altitude === 1 && self.HP > 350) {
      //地上的僵尸才能检测攻击
      !self.isAttacking && (self.isAttacking = 1, self.EleBody.src = self.PicArr[self.AttackGif]); //如果是首次触发攻击，需要更新到攻击状态

      self.NormalAttack(...arr); //实施攻击
    } else {
      //撤销攻击状态
      self.isAttacking && (self.isAttacking = 0, self.EleBody.src = self.PicArr[self.NormalGif]);
    }
  },

  JudgeLR(self, crood, C, ZX, G) {
    //远程判定，盗贼僵尸偷能铲掉的植物且不为道具
    if (C > 10 || C < 1) return;
    crood += C - 1 + '_';
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.canShovel && !plant.Tools) {
        return One_Dimensional_Intersection([self.X + self.beAttackedPointL, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
      }

      z--;
    }
  },

  JudgeSR(self, crood, C, ZX, G) {
    //近程判定
    if (C > 9) return;
    crood += C + "_";
    let z = PKindUpperLimit;

    while (z >= 0) {
      let plant = G[crood + z];

      if (plant && plant.canShovel && !plant.Tools) {
        return One_Dimensional_Intersection([self.X + self.beAttackedPointL, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
      }

      z--;
    }
  },

  NormalAttack(zid, pid) {
    let self = $Z[zid];

    if (self && self.beAttacked && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
      self.StealPlant($P[pid].R, $P[pid].C);
    }
  },

  BirthCallBack(self) {
    let delayT = self.delayT;
    let id = self.id;
    let ele = self.Ele = $(id);
    self.EleShadow = ele.firstChild;
    self.EleBody = ele.childNodes[1];

    if (delayT) {
      oSym.addTask(delayT, _ => {
        if (oSym.Timer) {
          callback(), self.FreeSetbodyTime = 0, SetBlock(ele);
        }
      });
    } else {
      callback();
      SetBlock(ele);
    }

    function callback() {
      if (!$Z[id]) {
        return;
      }

      PlayAudio("ThiefZombie");
      self.EleBody.src = RandomPic(self.PicArr[self.DropGif], self.EleBody);
      oSym.addTask(136, function () {
        self.height = 124;
        self.width = 130;
        self.isAttacking = 0;
        self.isFloating = 0;
        self.Altitude = 1;
        self.HP = self.oHP;
        self.EleBody.src = self.PicArr[self.NormalGif];
        let top = self.pixelTop = GetY(self.R) + self.GetDY() - self.height; //重新计算僵尸顶部坐标

        SetStyle(self.Ele, {
          top: top + "px"
        });
        self.X -= 16;
        self.ZX -= 16;
        self.AttackedLX -= 16;
        self.AttackedRX -= 16;
        self.CrushDie = CZombies.prototype.CrushDie;
        self.EleShadow.style = self.getShadow(self);
      });
    }
  },

  StealPlant(r = 0, c = 0) {
    let self = this;
    self.EleBody.src = self.PicArr[self.AttackGif];
    self.height = 153;
    self.isAttacking = 2;
    let top = self.pixelTop = GetY(self.R) + self.GetDY() - self.height; //重新计算僵尸顶部坐标

    SetStyle(self.Ele, {
      top: top + "px",
      left: Number.parseFloat(self.Ele.style.left) - 21 + "px"
    });

    self.getCharredCSS = _ => ({
      left: `19px`,
      top: `46px`,
      transform: 'rotateY(180deg)'
    });

    self.EleShadow.style = self.getShadow(self);
    let [R, C] = [r ? r : self.R, c ? c : GetC(self.ZX)];
    const data = oGd.$;
    let val = -99999;
    let selectIndex = `${R}_${C}_${self.ForcePKind}`;

    if (self.ForcePKind === -1) {
      for (let i = 0; i <= PKindUpperLimit; i++) {
        let index = `${R}_${C}_${i}`;

        if (!data[index] || data[index].Tools) {
          continue;
        }

        let obj = data[index];
        let plantValue = (obj.Attack ? obj.Attack * 180 : 180) * obj.HP * obj.SunNum * (obj.C / 5 + 1) * (obj.CanSpawnSun ? 15 : 1);

        if (plantValue > val) {
          val = plantValue;
          selectIndex = index;
        }
      }
    }

    let plant;

    if (selectIndex && (plant = data[selectIndex])) {
      oSym.addTask(70, () => {
        var _$P$plant$id;

        if ($Z[self.id] && ((_$P$plant$id = $P[plant.id]) === null || _$P$plant$id === void 0 ? void 0 : _$P$plant$id.Immediately) === false) {
          self.StolenPlant = plant["__proto__"].constructor;
          self.deltaHP = plant["__proto__"].constructor.prototype.HP - plant.HP;
          plant.Die("JNG_TICKET_ThiefZombie");
          self.FullPackage = 1;
          self.NormalGif++;
          self.AttackGif++; //重置攻击

          self.NormalAttack = oZombie.prototype.NormalAttack;
          self.JudgeLR = oZombie.prototype.JudgeLR;
          self.JudgeSR = oZombie.prototype.JudgeSR;
        }
      });
    }

    oSym.addTask(220, function () {
      if (!$Z[self.id]) {
        return;
      }

      self.height = 124;
      let top = self.pixelTop = GetY(self.R) + self.GetDY() - self.height; //重新计算僵尸顶部坐标

      SetStyle(self.Ele, {
        top: top + "px",
        left: Number.parseFloat(self.Ele.style.left) + 21 + "px"
      });

      self.getCharredCSS = _ => ({
        left: `19px`,
        top: `16px`,
        transform: 'rotateY(180deg)'
      });

      self.EleShadow.style = self.getShadow(self);
      $Z[self.id] && (self.isAttacking = 0, self.EleBody.src = self.PicArr[self.NormalGif]);
    });
  },

  StolenPlant: null,
  deltaHP: null,

  throwPlant(plant, pos, hurt) {
    if (!plant) {
      return;
    }

    ThrowACard(plant, pos, function (p) {
      let bc = p.SetBrightness;

      p.SetBrightness = function () {};

      p.getHurt(null, 0, hurt); //造成伤害

      p.SetBrightness = bc;
    });
  },

  CrushDie: CZombies.prototype.DisappearDie,

  GoingDie() {
    let self = this,
        id = self.id;
    self.GoingDieHead(id, self.PicArr, self);
    self.beAttacked = 0;
    self.isGoingDie = 1;
    self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
    self.NormalDie();
    self.ChanceThrowCoin(self);
  },

  ExplosionDie(...arr) {
    let self = this;
    self.throwPlant(self.StolenPlant, [self.ZX, self.pixelTop + 30], self.deltaHP);
    return OrnNoneZombies.prototype.ExplosionDie.bind(self)();
  },

  NormalDie() {
    let self = this,
        ele = self.Ele;
    self.throwPlant(self.StolenPlant, [self.ZX, self.pixelTop + 30], self.deltaHP);
    self.PrivateDie && self.PrivateDie(self);
    self.height = 124;
    console.log(self.AttackedLX, self.HP);
    let top = self.pixelTop = GetY(self.R) + self.GetDY() - self.height; //重新计算僵尸顶部坐标

    SetStyle(self.Ele, {
      top: top + "px",
      left: Number.parseFloat(self.left) + 21 + "px"
    });
    self.EleShadow.style = self.getShadow(self);
    self.EleBody.src = self.PicArr[self.DieGif];
    oSym.addTask(150, oEffects.fadeOut, [ele, 'fast', ClearChild]);
    self.HP = 0;
    delete $Z[self.id];
    oP.MonitorZombiePosition(self);
    self.PZ && oP.MonPrgs();
  },

  GoingDieHead(id, PicArr, self) {
    CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
      vx: -Math.random() * 1 - 1,
      bc: GetY(self.R) - 60,
      rotateSpeed: Math.random() * 1.5 + 1.5
    });
  }

}),
    oGargantuar = function () {
  let HPx = 3600;

  let getHit = function (self, attack) {
    if ((self.HP -= attack) < self.BreakPoint) {
      self.GoingDie(self.PicArr[[self.LostHeadGif, self.LostHeadAttackGif][self.isAttacking]]);

      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = function () {};

      return;
    }

    if (self.HP <= HPx / 2 && !self.isAttacking && !self.throwedImp && self.hasChanceToThrow && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
      self.throwImp();
    }

    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
  };

  return InheritO(oZombie, {
    EName: "oGargantuar",
    CName: $__language_Array__["df506616d1b4b9cea2e2374718656ee5"],
    OSpeed: 1.6,
    Speed: 1.6,
    Lvl: 3,
    AKind: 1,
    HPx,
    HP: HPx,
    height: 398,
    width: 485,
    DieGif: 5,
    StandGif: 7,
    beAttackedPointL: 200,
    beAttackedPointR: 310,
    ThrowGif: 4,
    GetDTop: 0,
    getShadow: _ => "left:220px;top:350px;transform:scale(2.1);",
    getFreezeCSS: _ => 'left:220px;top:365px;',
    Almanac: {
      Tip: $__language_Array__["4a4267ebab7dfef314461fde944b2cb4"],
      Speed: $__language_Array__["ad3a86d920c7787208b260a16f1bd3f7"],
      Weakness: $__language_Array__["13a28bb5bdb15ce26671180fe095b7dc"],
      Story: $__language_Array__["01c7f2c1b001257b689639bc61b5674a"]
    },

    getAlmanacDom(pro) {
      if (!pro.Almanac.Dom) {
        let ClassAlmanac = CZombies.prototype.Almanac;

        for (let i in ClassAlmanac) {
          if (!pro.Almanac[i]) {
            pro.Almanac[i] = ClassAlmanac[i];
          }
        }

        pro.Almanac.Dom = pro.getHTML("", 170 - pro.width / 2, 470 - pro.height, "1;height:" + pro.height + "px;width:" + pro.width + "px", "block", "auto", pro.GetDTop, pro.PicArr[pro.StandGif]);
      }
    },

    AudioArr: (_ => {
      return ["Gargantuar_walk", "lowgroan", "lowgroan2", "gargantuar_thump"].concat(oImp.prototype.AudioArr);
    })(),
    PicArr: (path => {
      return ["", "", path + "walk.webp", path + 'crush.webp', path + "throw.webp", path + 'die.webp', path + 'Head.webp', path + 'idle.webp'].concat([path + "walk0.webp", path + 'crush0.webp', "", path + 'die0.webp']).concat(oImp.prototype.PicArr);
    })("images/Zombies/Gargantuar/"),
    HeadTargetPosition: [{
      x: 174,
      y: 225
    }],
    deltaPos: [null, null, [0, -20], [53.25, 141.6, 1], [30.3, 20.4], [125.45, -25.6], null],
    throwedImp: false,
    hasChanceToThrow: 1,
    //不管如何巨人只能又一次throwImp函数的调用机会，如果没了就不可能再扔小鬼
    getHit,
    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getHit3: getHit,

    GoingDie() {
      let self = this,
          id = self.id;
      self.GoingDieHead(id, self.PicArr, self);
      self.beAttacked = 0;
      self.isGoingDie = 1;
      self.FreeFreezeTime = self.FreeSetbodyTime = self.FreeSlowTime = 0;
      self.NormalDie();
      self.ChanceThrowCoin(self);
    },

    NormalDie: function () {
      let self = this,
          ele = self.Ele;
      self.PrivateDie && self.PrivateDie(self);
      self.changePic(self, self.DieGif);
      oSym.addTask(250, oEffects.fadeOut, [ele, 'fast', ClearChild]);
      oSym.addTask(130, PlayAudio, ["gargantuar_thump"]);
      self.HP = 0;
      delete $Z[self.id];
      oP.MonitorZombiePosition(self);
      self.PZ && oP.MonPrgs();
    },

    GoingDieHead(id, PicArr, self) {
      CZombies.prototype.GoingDieHeadNew(id, PicArr, self, {
        top: self.pixelTop + 180.5,
        left: self.X + 194.5,
        bc: self.pixelTop + 320.5
      });
    },

    ExplosionDie() {
      this.GoingDie();
    },

    BirthCallBack(self) {
      let delayT = self.delayT;
      let id = self.id;
      let ele = self.Ele = $(id);
      self.EleShadow = ele.firstChild;
      self.deltaPos = JSON.parse(JSON.stringify(self.deltaPos));
      self.EleBody = ele.childNodes[1];
      self.EleShadow.style = self.getShadow(self);

      if (delayT) {
        oSym.addTask(delayT, _ => {
          $Z[id] && (self.FreeSetbodyTime = 0, callback(), SetBlock(ele));
        });
      } else {
        callback();
        SetBlock(ele);
      }

      function callback() {
        let p = self.PicArr[3].split(".");
        p = (p[p.length - 2] += "0", p.join("."));
        RandomPic(p, self.EleBody);
        self.changePic(self, self.NormalGif);
        oSym.addTask(80, function a(times = 0) {
          if ($Z[self.id] && !self.isGoingDie && times <= 10) {
            if (!self.isAttacking && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
              StopAudio("Gargantuar_walk");
              PlayAudio("Gargantuar_walk");
              oAudio["Gargantuar_walk"].volume = Math.min(10 / times - 1, 1);
              times++;
              oSym.addTask(93, a, [times]);
            }
          }
        });
      }
    },

    //改变图片同时改变坐标
    changePic(self, id) {
      let p = !self.throwedImp ? self.PicArr[id] : self.PicArr[id + 6];
      self.EleBody.src = p;
    },

    throwImp() {
      let self = this;

      if (self.throwedImp || !self.hasChanceToThrow || self.ZX < 115) {
        return;
      }

      self.hasChanceToThrow--;
      let r = [1.8, 2.3, 2.7, 3.2].random();

      if (self.ZX < 370 && self.ZX >= 115) {
        if (Math.random() < 0.1) {
          r = [0.3, 0.5].random();
        } else {
          return;
        }
      }

      self.isAttacking = 2;
      self.changePic(self, self.ThrowGif);
      let zombie = PlaceZombie(oImp2, self.R, 12, 0, 1);
      let oOpacity = zombie.Ele.style.opacity;
      let oldHP = zombie.HP + 30;
      zombie.Ele.style.opacity = "0";
      zombie.HP = Infinity;
      zombie.isAttacking = 2;
      zombie.Altitude = 3;
      let delta = self.ZX - 36 - zombie.ZX;
      zombie.AttackedLX += delta;
      zombie.AttackedRX += delta;
      zombie.ZX += delta;
      zombie.X += delta;
      zombie.Ele.style.left = Number.parseFloat(zombie.Ele.style.left) + delta + 'px';
      oSym.addTask(75, _ => {
        if (self.FreeFreezeTime || self.FreeSetbodyTime || self.isGoingDie || !$Z[self.id]) {
          self.isAttacking = 0;
          self.throwedImp = false;
          zombie.DisappearDie();
          return;
        }

        self.deltaPos[self.DieGif] = [25.25, -48.7];
        self.throwedImp = true;
        PlayAudio(oImp.prototype.AudioArr.random());
        zombie.Ele.style.opacity = oOpacity;
        const {
          Altitude: oldAltitude,
          id: zid,
          AttackedLX: oldLX,
          AttackedRX: oldRX,
          ZX: oldZX,
          X: oldX
        } = zombie;
        let wrapEle = zombie.Ele;
        let bodyEle = zombie.EleBody;
        let deltaY = 162; //小鬼抛出时距离地面高度

        let oldTop = bodyEle.style.top;
        let TopNumber = Number.parseInt(bodyEle.style.top);
        zombie.Altitude = 3;
        zombie.isFloating = true;
        zombie.EleBody.src = zombie.PicArr[zombie.ThrowGif];
        let gravity = 0.2;
        let vy = -3;
        let x = Number.parseFloat(wrapEle.style.left);
        let y = Number.parseFloat(bodyEle.style.top) - deltaY;
        let position = GetX(Math.floor(r)) + (r - Math.floor(r)) * 80 + zombie.beAttackedPointL;
        let distance = position - x;
        let newX = x + distance;
        let vx = gravity ** 2 * distance / (gravity * (Math.sqrt(vy ** 2 + 2 * deltaY * gravity) - vy));
        let lastTime = 0;
        requestAnimationFrame(function drawFrame() {
          if ($Z[zid]) {
            vy += gravity;
            wrapEle.style.left = (x += vx) + 'px';
            zombie.AttackedLX += vx;
            zombie.AttackedRX += vx;
            zombie.ZX += vx;
            zombie.X += vx;
            bodyEle.style.top = (y += vy) + 'px';

            if (y >= 0) {
              //检查僵尸是否落地，否则继续回调
              zombie.isFloating = false;
              zombie.AttackedLX = oldLX + distance;
              zombie.AttackedRX = oldRX + distance;
              zombie.ZX = oldZX + distance;
              zombie.X = oldX + distance;
              bodyEle.style.top = oldTop; //上次自己做关卡时还是出bug，这里修正()

              zombie.Altitude = oldAltitude;
              zombie.EleBody.src = zombie.PicArr[zombie.LandGif];
              oSym.addTask(100, function () {
                if ($Z[zombie.id] && !zombie.isGoingDie) {
                  zombie.HP = oldHP;
                  zombie.isAttacking = 0;
                  zombie.Altitude = 1;
                  zombie.EleBody.src = zombie.PicArr[zombie.NormalGif];
                }
              });
              return;
            }

            let currTime = Date.now();
            let timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
            oSym.addTask(timeToCall + 1, drawFrame);
            lastTime = currTime + timeToCall + 1;
          }
        });
      });
      oSym.addTask(130, _ => {
        //无论扔小鬼是否成功，动画播放完成后僵尸恢复正常状态
        if ($Z[self.id] && !self.isGoingDie) {
          //防止僵尸在扔小鬼的过程中被植物打死
          self.isAttacking = 0;
          self.JudgeAttack();

          if (self.isAttacking == 0) {
            self.changePic(self, self.NormalGif);
          }
        }
      });
    },

    getExplosion: function () {
      let self = this;
      self.HP > 1800 ? (self.HP -= 1800, self.HP > self.BreakPoint && self.throwImp()) : $Z[self.id] && !self.isGoingDie && self.ExplosionDie();
    },

    JudgeAttack() {
      let self = this;
      let ZX = self.ZX;
      let crood = self.R + "_";
      let C = GetC(ZX);
      let G = oGd.$;
      let arr = self.JudgeLR(self, crood, C, ZX, G) || self.JudgeSR(self, crood, C, ZX, G);

      if (arr && self.Altitude === 1) {
        //地上的僵尸才能检测攻击
        if (self.HP <= self.HPx / 2 && !self.isAttacking && !self.throwedImp && self.hasChanceToThrow && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
          self.throwImp();
        } else {
          !self.isAttacking && (self.isAttacking = 1, self.changePic(self, self.AttackGif)); //如果是首次触发攻击，需要更新到攻击状态

          self.NormalAttack(...arr); //实施攻击
        }
      } else {
        //撤销攻击状态
        self.isAttacking && (self.isAttacking = 0, self.changePic(self, self.NormalGif));
      }
    },

    JudgeLR(self, crood, C, ZX, G) {
      //远程判定，巨人僵尸只吃能铲掉的植物
      if (C > 10 || C < 1) return;
      crood += C - 1 + '_';
      let z = PKindUpperLimit;

      while (z >= 0) {
        let plant = G[crood + z];

        if (plant && plant.canShovel) {
          return One_Dimensional_Intersection([self.X + self.beAttackedPointL - 30, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
        }

        z--;
      }
    },

    JudgeSR(self, crood, C, ZX, G) {
      //近程判定
      let tmp = crood;

      for (let i = 0; i < 3 && C + i < 10; i++) {
        crood = tmp + (C + i) + "_";
        let z = PKindUpperLimit;

        while (z >= 0) {
          let plant = G[crood + z];

          if (plant && plant.canShovel) {
            return One_Dimensional_Intersection([self.X + self.beAttackedPointL - 30, self.X + self.beAttackedPointR], [plant.AttackedLX, plant.AttackedRX]) || plant.AttackedRX >= ZX && plant.AttackedLX <= ZX ? [self.id, plant.id] : false;
          }

          z--;
        }
      }
    },

    Bounce() {},

    NormalAttack: function (d, c) {
      let aud = "lowgroan" + ["", 2].random();
      PlayAudio(aud);
      let successCrush = false;
      oSym.addTask(100, function () {
        let g,
            self = $Z[d];

        if (self && self.isAttacking === 1) {
          if (g = $P[c]) {
            self.CrushPlant(g, self);
          }

          successCrush = true;
        }
      });
      oSym.addTask(250, function (f, e) {
        if (successCrush) {
          var h = $Z[f];
          StopAudio(aud);

          if (h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && h.isAttacking === 1) {
            h.isAttacking = 0;
            h.changePic(h, h.NormalGif);
          }
        }
      }, [d, c]);
    },
    CrushPlant: function (aPlant, self) {
      if (aPlant && !self.FreeFreezeTime && !self.FreeSetbodyTime) {
        let [R, C] = [aPlant.R, aPlant.C];
        let z = PKindUpperLimit,
            p;

        while (z >= 0) {
          p = oGd.$[`${R}_${C}_${z}`];

          if (p && p.canShovel) {
            p.getHurt(self, 1, self.Attack);
          }

          z--;
        }

        oGd.killAll(R, C, 'JNG_TICKET_Gargantuar');
        PlayAudio("Gargantuar_crush");
        const effect = NewEle(self.id + "Effect", "div", `position:absolute;z-index:${self.zIndex - 1};width:631px;height:481px;left:${self.ZX - 365.5}px;top:${self.pixelTop + self.height - 370.5}px;background:url(${RandomPic('images/Plants/SporeShroom/Effect.webp')});`, 0, EDPZ);
        oSym.addTask(20, ClearChild, [effect]);
      }
    }
  });
}(),
    oZomboss_Industry = function () {
  let DoorIndexs = [-1]; //DoorIndexs不仅作为当前门图片的第一个索引也作为门到下一个门的临界值

  let DoorPicArr = function () {
    var b = "images/Zombies/Zomboss_Industry/Doors/",
        suffix = "png";
    let arr = [];

    for (let i = 1; i < 6; i++) {
      DoorIndexs.push(arr.length);

      for (let j = 1; j < 9; j++) {
        arr.push(b + `door${i}000${j}.${suffix}`);
      }
    }

    DoorIndexs.push(arr.length);
    return arr;
  }();

  let PicArr = function () {
    var b = "images/Zombies/Zomboss_Industry/",
        suffix = "png";
    let arr = [BlankPNG, BlankPNG, b + "Boss_Idle." + suffix, b + "aim.webp", b + "Belt.webp"];

    for (let j = 1; j < 6; j++) {
      arr.push(b + `Door_R${j}.${suffix}`);
    }

    return arr.concat(DoorPicArr);
  }();

  return InheritO(OrnNoneZombies, {
    EName: "oZomboss_Industry",
    CName: $__language_Array__["18445ced8adc62590963c1b4376c8dce"],
    isHard: false,
    DarkRainMasks: [],
    AttackGif: 2,
    LostHeadGif: 2,
    LostHeadAttackGif: 2,
    LostHeadGif: 2,
    DieGif: 5,
    BoomDieGif: 5,
    StandGif: 1,
    AimGif: 3,
    BeltGif: 4,
    HP: 21000,
    HPT: 21000,
    OSpeed: 0,
    Speed: 0,
    width: 451,
    NextAttackTime: 0,
    AttackTimes: 0,
    Stages: [],
    currentStage: 0,
    height: 611,
    beAttackedPointL: 20,
    beAttackedPointR: 400,
    isPuppet: true,
    AudioArr: ["Zomboss1", "Zomboss2", "Zomboss3", "hydraulic1", "hydraulic2"],

    Bounce() {},

    ChanceThrowCoin() {},

    //这里复制一份
    doorPicState: [].concat(DoorIndexs),
    doorState: [0, 0, 0, 0, 0, 0],
    HeadTargetPosition: [{
      x: 70,
      y: 300
    }, {
      x: 80,
      y: 300
    }],
    getRaven: function () {},
    getShadow: function (b) {
      return "display:none;";
    },

    getSlow() {},

    getButter() {},

    DoorIndexs,
    DoorPicArr,
    PicArr: PicArr,
    PlayNormalballAudio: function () {
      PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
    },
    Almanac: {
      Tip: $__language_Array__["e99e3d05fc51f13ccdad07383f379e52"],
      Speed: $__language_Array__["8887ca7ef02ee588fdadc07a344f0f50"],

      get Story() {
        let a = $__language_Array__["f01c759d86a41e89b0dc1e52d9180910"];
        let json = localStorage["JNG_TR_WON"] ? JSON.parse(localStorage["JNG_TR_WON"]) : {};
        let man = json["Industry25"] ? "Job" : $__language_Array__["8229f7563ddf03b73d111f4161c4eef6"];
        let word1 = `${$__language_Array__["9f57dce0e2b34009dcb7aa1771a2c29e"][0]}${man}${$__language_Array__["9f57dce0e2b34009dcb7aa1771a2c29e"][1]}`;

        if (json["Industry25"]) {
          return word1 + $__language_Array__["4f01ad7033aa407abce91292ad3c2391"];
        } else if (json["Marsh25"]) {
          return word1 + $__language_Array__["e2d4346914538b05735129d8f9a6a26d"];
        } else {
          return a;
        }
      },

      Dom: `<img id='oZomboss_Industry_Display' src='images/Zombies/Zomboss_Industry/display.webp'   style='width:280px;height:232px;position:absolute;left:60px;top:269px;'>`
    },

    //获取卡片图片
    GetCardImg() {
      let self = this;
      return "images/Card/Boss.webp";
    },

    setBossBlood(self) {
      oFlagContent.init({
        MeterType: 'LeftBar RedBar',
        HeadType: 'BOSSHead',
        fullValue: self.HP,
        curValue: 0
      }).show().update({
        curValue: self.HP,
        animConfig: {
          duration: 1 / oSym.NowSpeed,
          ease: "ease-out"
        }
      });
    },

    //特殊诞生事件，传递自定义的坐标，比如从坟墓出生
    CustomBirth(R, C, delayT, clipH) {
      const self = this,
            pixelTop = -27,
            bottomY = pixelTop + self.height,
            zIndex = 25,
            id = self.id = "Z_" + Math.random(),
            beAttackedPointL = self.beAttackedPointL,
            beAttackedPointR = self.beAttackedPointR;
      self.X = 741;
      self.ZX = self.AttackedLX = self.X + beAttackedPointL;
      self.AttackedRX = self.X + beAttackedPointR;
      self.R = R;
      self.pixelTop = pixelTop;
      self.zIndex = zIndex;
      (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设定自身定身时间为延迟登场时间

      return self.getHTML(id, self.X, pixelTop, zIndex, "none", clipH || 0, self.GetDTop, self.PicArr[self.NormalGif]);
    },

    JudgeDoor(self) {
      if (self.isGoingDie || !$Z[self.id]) {
        return;
      }

      for (let i = 1; i <= 5; i++) {
        if (self.doorCloseTime[i] <= oSym.Now && self.doorPicState[i] > self.DoorIndexs[i]) {
          self.doorPicState[i] -= 1;

          if ($User.LowPerformanceMode) {
            self.doorPicState[i] = self.DoorIndexs[i];
          }

          EditEle(self.doorsDom[i], {
            src: self.DoorPicArr[self.doorPicState[i]]
          });
          self.doorState[i] = 0;
        } else if (self.doorCloseTime[i] > oSym.Now && self.doorPicState[i] < self.DoorIndexs[i + 1] - 1) {
          self.doorPicState[i] += 1;

          if ($User.LowPerformanceMode) {
            self.doorPicState[i] = self.DoorIndexs[i + 1] - 1;
          }

          EditEle(self.doorsDom[i], {
            src: self.DoorPicArr[self.doorPicState[i]]
          });
          self.doorState[i] = 1;
        }
      }

      oSym.addTask(4, self.JudgeDoor, [self]);
    },

    JudgeAttack() {
      let self = this;
      let Attack = [_ => {
        let RandomCoefficient = Math.random();

        if (self.AttackTimes % 16 == 0) {
          self.SummonFog(Math.min(self.AttackTimes / 16 + 1, 5));
          self.NextAttackTime = oSym.Now + 500;
        } else if (RandomCoefficient < 0.05 && oGd.$Sculpture.length < 3) {
          let q = Math.floor(Math.random() * 2 + 1);
          let p = hasPlants(true, p => {
            return p.C > 1;
          }).shuffle().slice(-q);
          let arr = [];

          for (let i of p) {
            arr.push([i.R, i.C]);
          }

          self.SummonSculpture(arr);
          self.NextAttackTime = oSym.Now + 500;
        } else {
          //SummonVases(type,imgType,obj,R=undefined)
          let pArr = [oPuffShroom, oRepeater];
          let zArr = [oZombie, oConeheadZombie];
          let mpArr = [],
              mzArr = [];
          let probabilityPlant = Math.max(0.7 - self.AttackTimes / 100, 0.4);
          let attReduce = self.isHard ? 3 : 0;

          if (self.AttackTimes > 8 - attReduce) {
            zArr.push(oMembraneZombie, oBucketheadZombie, oBalloonZombie);
            pArr.push(oSnowPea);
          }

          if (self.AttackTimes < 36 - attReduce && self.AttackTimes > 32 - attReduce || self.AttackTimes > 200) {
            zArr = [oBucketheadZombie, oConeheadZombie];
            probabilityPlant = 0;
          }

          if (self.AttackTimes % (7 + attReduce) == 0) {
            self.NextAttackTime += 200;
            probabilityPlant = 1;
            pArr.push(oCherryBomb, oXshooter, oXshooter, oSnowPea);
          }

          for (let i of pArr) {
            mpArr.push([0, [0, 1, 1, 1].random(), i]);
          }

          if (self.AttackTimes > 4 - attReduce && self.AttackTimes > 1) {
            for (let i of zArr) {
              mzArr.push([1, 1, i]);
            }
          }

          if (Math.random() < probabilityPlant || !mzArr.length) {
            self.SummonVases(...mpArr.random());
          } else {
            self.SummonVases(...mzArr.random());
          }

          self.NextAttackTime = oSym.Now + Math.random() * 300 + 150;

          if (self.AttackTimes % 5 == 0) {
            self.NextAttackTime += 200;
          }
        }
      }, //2阶段
      _ => {
        if (self.AttackTimes % 50 == 0) {
          //SummonVases(type,imgType,obj,R=undefined)
          self.SummonFog(0);

          for (let i = 1; i < 6; i++) {
            self.SummonVases(1, 3, oGargantuar, i);
          }

          for (let i = 1; i < 4; i++) {
            oSym.addTask(Math.random() * 300 + i * 60, _ => {
              self.SummonVases(0, 0, oCherryBomb);
            });
            oSym.addTask(Math.random() * 300 + 800, _ => {
              self.SummonVases(1, 1, oBucketheadZombie);
            });
            oSym.addTask(Math.random() * 500 + 600, _ => {
              self.SummonVases(1, 1, oFootballZombie);
            });
          }

          oSym.addTask(400 + Math.random() * 300, _ => {
            self.SummonVases(0, 0, oDoomShroom);
          });
          oSym.addTask(1500, _ => {
            self.SummonVases(0, 0, oDoomShroom);
          });

          for (let i = 1; i <= 10; i++) {
            oSym.addTask(1700 + 1200 * Math.random(), _ => {
              if (Math.random() > 0.7) {
                self.SummonVases(0, 0, [oXshooter, oCherryBomb, oFumeShroom].random());
              } else {
                self.SummonVases(1, 1, [oBucketheadZombie, oNewspaperZombie, oConeheadZombie].random());
              }
            });
          }

          oSym.addTask(3800, _ => {
            for (let i = 1; i < 6; i++) {
              self.SummonVases(1, 3, oGargantuar, i);
            }

            oSym.addTask(400 + Math.random() * 300, _ => {
              self.SummonVases(0, 0, oDoomShroom);
            });
          });
          self.NextAttackTime = oSym.Now + 5700;
        } else {
          let RandomCoefficient = Math.random();

          if (self.AttackTimes % 16 == 1) {
            self.SummonFog(Math.floor(Math.min(self.AttackTimes / 16 + 3, 7)), "strongFog");
            self.NextAttackTime = oSym.Now + 500;
          } else if (RandomCoefficient < 0.15 && oGd.$Sculpture.length < 6) {
            let q = 1;
            let p = hasPlants(true, p => {
              return p.C > 1;
            }).shuffle().slice(-q);
            let arr = [[[1, 2, 3, 4, 5].random(), 8], [[1, 2, 3, 4, 5].random(), 8]];

            for (let i of p) {
              arr.push([i.R, i.C]);
            }

            self.SummonSculpture(arr);
            self.NextAttackTime = oSym.Now + 400;
          } else {
            //SummonVases(type,imgType,obj,R=undefined)
            let pArr = [oPuffShroom, oRepeater, oElecTurnip, oSporeShroom, oFumeShroom, oRadish, oXshooter];
            let zArr = [oSculptorZombie, oZombie, oConeheadZombie, oMembraneZombie, oMakeRifterZombie, oCaskZombie, oNewspaperZombie, oSadakoZombie];
            let mpArr = [],
                mzArr = [];
            let probabilityPlant = Math.max(0.7 - self.AttackTimes / 100, 0.4);

            if (self.AttackTimes % 7 == 0) {
              self.NextAttackTime += 100;
              probabilityPlant = 0.8;
              pArr.push(oCherryBomb, oElecTurnip, oElecTurnip, oDoomShroom);
            }

            if (self.AttackTimes % 4 == 0) {
              pArr.push(oElecTurnip);
            }

            for (let i of pArr) {
              mpArr.push([0, [0, 1, 1, 1].random(), i]);
            }

            for (let i of zArr) {
              mzArr.push([1, 1, i]);
            }

            let wantto = Math.random() * 2 + 1;

            for (let q = 1; q <= wantto; q++) {
              oSym.addTask(300 * Math.random(), _ => {
                if (Math.random() < probabilityPlant || !mzArr.length) {
                  self.SummonVases(...mpArr.random());

                  if (Math.random() < 0.2) {
                    oSym.addTask(Math.random() * 400, _ => {
                      self.SummonVases(...mpArr.random());
                    });
                  }
                } else {
                  if (Math.random() > 0.2) {
                    let random = Math.random() * 3 + 2;

                    for (let i = 1; i < random; i++) {
                      oSym.addTask(Math.random() * 200, _ => {
                        self.SummonVases(...mzArr.random());
                      });
                    }
                  } else {
                    self.SummonVases(1, 2, oBeetleCarZombie);
                  }
                }
              });
            }

            self.NextAttackTime = oSym.Now + Math.max(150, Math.random() * 300 + 240 - self.AttackTimes * 5);

            if (self.AttackTimes % 15 == 0) {
              self.NextAttackTime += 100;
            }
          }
        }
      }, //3阶段
      _ => {
        let specialAttacks = [_ => {
          oSym.addTask(800, _ => {
            let r = [1, 2, 3, 4, 5].random();

            for (let i = 1; i < 4; i++) {
              oSym.addTask(300 * i, _ => {
                self.SummonVases(1, 1, oFootballZombie, r);
              });
            }
          });
          self.NextAttackTime = oSym.Now + 1500;
        }];

        if (self.AttackTimes == 0) {
          self.SummonFog(9, "Fog");
          oSym.addTask(200, _ => {
            let plants = hasPlants().shuffle(); //高难度僵尸增加

            let hardAdd = self.isHard ? 5 : 0;
            let l = Math.min(3 + hardAdd, plants.length);

            for (let i = 0; i < l; i++) {
              oSym.addTask(150 * Math.random(), _ => {
                PlaceZombie(oThiefZombie, plants[i].R, plants[i].C, 0);
              });
            }
          });
          oSym.addTask(1300, _ => {
            self.SummonFog(2, "Fog");
          });
          self.NextAttackTime = oSym.Now + 1400;
        } else if (self.AttackTimes % 15 == 7) {
          specialAttacks.random()();
        } else {
          let hardZombies = self.isHard ? 5 : 0; //增加的僵尸容纳量

          let random = Math.random();

          if (random > 4 / 7 && oGd.$Sculpture.length < 12) {
            let low = Math.random() * 4 + 2;
            let arr = [];

            for (let i = 1; i < low; i++) {
              arr.push([[1, 2, 3, 4, 5].random(), [8, 7, 6, 5, 4].random()]);
            }

            self.SummonSculpture(arr);
            self.NextAttackTime = oSym.Now + 200;
          } else if ($Z.length < 25 + hardZombies) {
            let x = Math.min(Math.max(self.AttackTimes, 1), 105);
            let zNum = Math.floor(((x * 4 + 8) ** 0.8 - x ** 1.03 + x / 4 - 5) / 3 * 2);
            let pNum = Math.min(8, Math.floor((6 / x ** 0.3 + 2 + Math.abs(x - 105) ** 0.3) / 2 + 2 ** (1 / (0.2 * x))));
            let z = [oMakeRifterZombie, oPushIceImp, oSculptorZombie, oSculptorZombie, oSculptorZombie, oMembraneZombie, oMembraneZombie, oGargantuar];
            let p = [oElecTurnip, oXshooter, oXshooter, oRadish, oPuffShroom, oRadish, oFumeShroom];
            let gargantuarNum = 0,
                elecTurnipNum = 0;

            for (let i of $Z) {
              if (i.EName == "oGargantuar") {
                gargantuarNum++;
              }
            }

            for (let i of $P) {
              if (i.EName == "oElecTurnip") {
                elecTurnipNum++;
              }
            }

            let elecAdd = 4 * (self.isHard ^ 1); //easy的话增加芜菁容纳量

            if (elecTurnipNum >= 3 + elecAdd) {
              p.splice(0, 1, oPeashooter, oPeashooter, oRepeater, oTorchwood);
            }

            if (self.AttackTimes % 17 == 16) {
              self.SummonVases(0, 0, oDoomShroom);
            }

            if (gargantuarNum > 1) {
              z.splice(z.length - 1, 1);
            }

            for (let i = 0; i < zNum; i++) {
              oSym.addTask(1200 * Math.random(), _ => {
                let obj = z.random();
                self.SummonVases(1, obj !== oGargantuar ? 1 : 3, obj);

                if (obj === oGargantuar) {
                  gargantuarNum++;
                }

                if (gargantuarNum > 1) {
                  z.splice(z.length - 1, 1);
                }
              });
            }

            for (let i = 0; i < pNum; i++) {
              oSym.addTask(1200 * Math.random(), _ => {
                let obj = p.random();
                self.SummonVases(0, [0, 1, 1].random(), obj);
              });
            }

            self.NextAttackTime = oSym.Now + 700 + Math.random() * 400;

            if (self.AttackTimes % 15 == 0) {
              self.NextAttackTime += 800;
            }
          } else if (oFog.leftBorder < 7) {
            self.SummonFog(oFog.leftBorder + 1, "Fog");
            self.NextAttackTime = oSym.Now + 800;
          } else {
            self.NextAttackTime = oSym.Now + 500;
          }
        }
      }, //4阶段
      _ => {
        if (self.AttackTimes == 0) {
          self.SummonFog(2);
          let arr = [];

          for (let i = 1; i < 6; i++) {
            arr.push([i, 7]);

            if (self.isHard) {
              arr.push([i, 6]);
            }
          }

          self.SummonSculpture(arr);
          self.NextAttackTime = oSym.Now + 700;
        } else {
          let specialAttacks = [_ => {
            let vases = [];
            self.SummonFog(9, "strongFog");

            for (let i = 0; i < 10; i++) {
              oSym.addTask(Math.random() * 600, _ => {
                vases.push(self.SummonVases(0, 1, [oSporeShroom, oCherryBomb, oElecTurnip].random()));
              });
            }

            oSym.addTask(1000, _ => {
              self.SummonFog(2);

              for (let i of vases) {
                if ($Z[i.id]) {
                  i.configs = {
                    type: 1,
                    obj: [oFootballZombie, oBucketheadZombie].random()
                  };
                }
              }

              for (let i = 1; i < 6; i++) {
                self.SummonVases(1, 2, oZomboni, i);
              }
            });
            self.NextAttackTime = oSym.Now + 1700;
          }, _ => {
            let p = hasPlants();
            let mn = Math.min(6, p.length);

            for (let i = 0; i < mn; i++) {
              let k = Math.floor(Math.random() * p.length);
              let [R, C] = [p[k].R, p[k].C];
              oSym.addTask(Math.random() * 200, _ => {
                PlaceZombie(oThiefZombie, R, C, 0);
              });
              p.splice(k, 1);
            }

            self.SummonVases(0, 1, oXshooter);
          }];

          if (self.AttackTimes % 35 == 7) {
            specialAttacks.random()();
          } else {
            let hardZombies = self.isHard ? 7 : 0; //增加的僵尸容纳量

            let random = Math.random();

            if (random > 7 / 9 && oGd.$Sculpture.length < 10) {
              let low = Math.random() * 4 + 2;
              let arr = [];

              for (let i = 1; i < low; i++) {
                arr.push([[1, 2, 3, 4, 5].random(), [8, 7, 6].random()]);
              }

              self.SummonSculpture(arr);
              self.NextAttackTime = oSym.Now + 500;
            } else if ($Z.length < 20 + hardZombies) {
              let x = Math.min(Math.max(self.AttackTimes, 1), 105); //如果不是困难模式就减少僵尸

              let zNum = Math.floor(((x * 4 + 8) ** 0.8 - x ** 1.03 + x / 4 - 4) / (2 + (self.isHard ? -0.5 : 0.5)));
              let pNum = Math.round(8 - self.AttackTimes / 35);
              let z = [oMakeRifterZombie, oPushIceImp, oSculptorZombie, oSculptorZombie, oSculptorZombie, oConeheadZombie, oImp, oCigarZombie];
              z = z.concat(z).concat(z).concat(oBeetleCarZombie, oZomboni);
              let p = [oElecTurnip, oXshooter, oSporeShroom, oFumeShroom, oFumeShroom, oCabbage];
              let elecTurnipNum = 0;

              for (let i of $P) {
                if (i.EName == "oElecTurnip") {
                  elecTurnipNum++;
                }
              }

              if (elecTurnipNum >= 5) {
                p.splice(0, 1, oKernelPult, oKernelPult, oCabbage, oCabbage, oMelonPult, oMelonPult, oMelonPult, oSpikeweed, oSpikeweed);
              }

              for (let i = 0; i < zNum; i++) {
                oSym.addTask(1200 * Math.random(), _ => {
                  let obj = z.random();
                  self.SummonVases(1, obj !== oBeetleCarZombie && obj !== oZomboni ? 1 : 2, obj);
                });
              }

              for (let i = 0; i < pNum; i++) {
                oSym.addTask(1200 * Math.random(), _ => {
                  let obj = p.random();
                  self.SummonVases(0, [0, 1, 1].random(), obj);
                });
              }

              self.NextAttackTime = oSym.Now + 700 + Math.random() * 400;

              if (self.AttackTimes % 15 == 0) {
                self.NextAttackTime += 500;
              }
            } else {
              self.NextAttackTime = oSym.Now + 300;
            }
          }
        }
      }, //5阶段
      _ => {
        if (self.AttackTimes == 0) {
          self.SummonFog(0, "Fog");
          let e = NewEle("effect" + Math.random(), "div", "pointer-events:none;position:absolute;z-index:31;width:1500px;height:600px;background:#000;opacity:0;", 0, EDAll);
          oEffects.Animate(e, {
            opacity: 1
          }, 1.5 / oSym.NowSpeed, "linear", _ => {
            ClearChild(e);
          });
          oSym.addTask(70, _ => {
            self.DarkRainMasks = oMiniGames.DarkRain(5, 5, 4);
            let pos = [[2, 1], [3, 1], [4, 1], [1, 2], [3, 2], [5, 2], [1, 3], [2, 3], [4, 3], [5, 3], [1, 4], [3, 4], [5, 4], [2, 5], [3, 5], [4, 5]];
            let SculpturePos = [[1, 1], [1, 5], [2, 2], [2, 4], [3, 3], [4, 2], [4, 4], [5, 1], [5, 5]];
            pos.forEach(position => {
              CustomSpecial(oRifterAnimate, ...position);
            });
            self.SummonSculpture(SculpturePos);

            for (let i = 0; i < 3; i++) {
              oSym.addTask(Math.random() * 500, _ => {
                self.SummonVases(0, 0, oBegonia);
              });
              oSym.addTask(Math.random() * 500, _ => {
                self.SummonVases(0, 0, oDoomShroom);
              });
            }
          });
          self.NextAttackTime = oSym.Now + 1400;
        } else {
          let Attacks = [//攻击1
          _ => {
            //增加的炸弹个数
            let bombAdd = self.isHard ^ 1;

            for (let i = 1; i < 4 + bombAdd; i++) {
              oSym.addTask(i * 300, _ => {
                self.SummonVases(0, 0, oCherryBomb);
              });
            }

            oSym.addTask(800, _ => {
              self.SummonVases(0, 0, oDoomShroom);
            });
            oSym.addTask(500, _ => {
              for (let i = 1; i <= 5; i++) {
                self.SummonVases(1, 3, oGargantuar, i);
              }
            });

            for (let i = 0; i < 4; i++) {
              oSym.addTask(1200 * Math.random(), _ => {
                self.SummonVases(0, 0, [oCabbage, oKernelPult, oCabbage, oKernelPult, oMelonPult, oFumeShroom].random());
              });
            }

            if (self.AttackTimes > 5) {
              for (let i = 1; i <= 5; i++) {
                oSym.addTask(1200 * Math.random(), _ => {
                  self.SummonVases(1, 1, [oImp, oZombie, oStrollZombie].random());
                });
              }
            }
          }, //攻击2
          _ => {
            for (let i = 0; i < 3; i++) {
              oSym.addTask(1200 * Math.random(), _ => {
                self.SummonVases(0, 0, [oCabbage, oKernelPult, oCabbage, oKernelPult, oMelonPult, oFumeShroom].random());
              });
            }

            for (let i = 1; i < 3; i++) {
              oSym.addTask(Math.random() * 300, _ => {
                self.SummonVases(0, 0, oCherryBomb);
              });
            }

            oSym.addTask(500, _ => {
              for (let i = 1; i <= 5; i++) {
                self.SummonVases(1, 2, oBeetleCarZombie, i);
              }
            });
            oSym.addTask(800, _ => {
              for (let i = 1; i <= 5; i++) {
                self.SummonVases(1, 1, oBucketheadZombie, i);
              }
            });
            let pos = [];

            for (let i = 1; i <= 3; i++) {
              pos.push([[2, 3, 4].random(), [6, 7, 8, 9].random()]);
            }

            self.SummonSculpture(pos);
          }, //攻击3
          _ => {
            for (let i = 0; i < 3; i++) {
              oSym.addTask(1200 * Math.random() + 1200, _ => {
                self.SummonVases(0, 0, [oCabbage, oKernelPult, oCabbage, oKernelPult, oMelonPult, oFumeShroom].random());
              });
            }

            oSym.addTask(500 + Math.random() * 400, () => {
              self.SummonVases(0, 0, oCherryBomb);
            });
            oSym.addTask(500, _ => {
              for (let i = 2; i <= 4; i++) {
                self.SummonVases(1, 2, oZomboni, i);
              }
            });
            oSym.addTask(800, _ => {
              for (let i = 1; i <= 5; i++) {
                self.SummonVases(1, 1, oConeheadZombie, i);
              }
            });

            for (let i = 0; i < 3; i++) {
              oSym.addTask(500 * Math.random(), _ => {
                self.SummonVases(0, 0, oSpikeweed);
              });
            }

            oSym.addTask(800, _ => {
              for (let i = 2; i <= 4; i++) {
                self.SummonVases(1, 2, oBeetleCarZombie, i);
              }
            });
          }, //攻击4
          _ => {
            for (let i = 1; i <= 3; i++) {
              oSym.addTask(200 + Math.random() * 400, () => {
                self.SummonVases(0, 0, oMelonPult);
              });
            }

            oSym.addTask(400, _ => {
              for (let i = 1; i <= 5; i++) {
                self.SummonVases(1, 1, oSculptorZombie, i);
              }
            });
            oSym.addTask(300, () => {
              self.SummonVases(0, 0, oCherryBomb);
            });
            oSym.addTask(1100, () => {
              self.SummonVases(0, 0, oCherryBomb);
            });
            oSym.addTask(1200, _ => {
              let p = hasPlants();
              let hardZombies = self.isHard ? 0 : 1; //减少的僵尸生成量

              let mn = Math.min(3 - hardZombies, p.length);

              for (let i = 0; i < mn; i++) {
                let k = Math.floor(Math.random() * p.length);
                let [R, C] = [p[k].R, p[k].C];
                oSym.addTask(Math.random() * 200, _ => {
                  PlaceZombie(oThiefZombie, R, C, 0);
                });
                p.splice(k, 1);
              }
            });
            let pos = [];

            for (let i = 1; i <= 5; i++) {
              pos.push([[2, 3, 4].random(), [8, 9].random()]);
            }

            self.SummonSculpture(pos);
          }, //攻击5
          _ => {
            self.SummonVases(0, 0, oDoomShroom);
            oSym.addTask(200, () => {
              for (let i = 0; i < 6; i++) {
                oSym.addTask(400 * Math.random() + 200, _ => {
                  self.SummonVases(0, 0, [oWallNut, oPeashooter, oPotatoMine].random());
                });
              }
            });

            for (let i = 1; i < 4; i++) {
              oSym.addTask(250 * i, () => {
                for (let j = i % 2 + 1; j < 6; j += 2) {
                  let z = oZombie;
                  self.SummonVases(1, 1, z, j);
                }
              });
            }

            oSym.addTask(900, () => {
              for (let i = 1; i <= 5; i++) {
                let zombie = oGargantuar; //如果为简单难度换僵尸

                if (!self.isHard) {
                  zombie = oBucketheadZombie;
                }

                self.SummonVases(1, 3, zombie, i);
              }
            });
            oSym.addTask(1100, () => {
              self.SummonVases(0, 0, oDoomShroom);
            });
          }];

          if (self.AttackTimes % 6 == 5) {
            for (let i = 0; i < 2; i++) {
              oSym.addTask(Math.random() * 500, _ => {
                self.SummonVases(0, 0, oBegonia);
              });
            }
          }

          let WavesSum = self.isHard ? 4 : 6;

          if (self.AttackTimes > WavesSum) {
            let hardMuti = self.isHard ? 1.7 : 1.3;
            let num = Math.min(19, Math.floor(((self.AttackTimes - (WavesSum - 2)) * 3) ** (1 / 2) * hardMuti));

            for (let i = 1; i <= num; i++) {
              oSym.addTask(1000 * Math.random(), _ => {
                self.SummonVases(1, 1, [oZombie, oConeheadZombie, oBucketheadZombie, oZombie, oConeheadZombie, oBucketheadZombie, oImp, oMakeRifterZombie].random());
              });
            }

            if (self.isHard) self.getPea(self, 0); //self.getPea(self,500);
          }

          if (!self.isHard) {
            self.HP -= 300;
          } else {
            self.HP -= 450;
          }

          if (self.AttackTimes - 1 < Attacks.length) {
            Attacks[self.AttackTimes - 1]();
          } else {
            Attacks.random()();
          }

          self.NextAttackTime = oSym.Now + 1800;
        }
      }];

      if (self.NextAttackTime <= oSym.Now) {
        if (self.HP < self.Stages[self.currentStage]) {
          self.AttackTimes = 0;
          self.currentStage++;
        }

        Attack[Math.min(Attack.length - 1, self.currentStage)]();
        self.AttackTimes++;
      }
    },

    SummonSculpture(positions) {
      let self = this;
      let sculps = [0, 0, 0, 0, 0, 0];
      let limit = self.isHard ? 5 : 3;

      for (let i in $Z) {
        let tmp = $Z[i];

        if (tmp.EName === "oSculpture") {
          sculps[tmp.R]++;
        }
      }

      let placeScu = (R, C) => {
        if (oGd.$Sculpture[R + '_' + C]) {
          return;
        }

        let cnt = 0;

        for (let i in $Z) {
          let tmp = $Z[i];

          if (tmp.EName === "oSculpture") {
            if (tmp.R == R) {
              cnt++;
            }
          }
        }

        if (cnt >= limit) {
          return;
        }

        let z = PlaceZombie(oSculpture, R, C, 0, 1);
        EditCompositeStyle({
          ele: z.EleBody,
          delFuncs: ['translateY'],
          addFuncs: [["translateY", "-600px"]],
          option: 2
        });
        oEffects.Animate(z.EleBody, {
          transform: EditCompositeStyle({
            ele: z.EleBody,
            delFuncs: ['translateY']
          })
        }, 0.2 / oSym.NowSpeed);
      };

      oSym.addTask(100, _ => {
        if (self.isGoingDie || !$Z[self.id]) {
          return;
        }

        for (let i of positions) {
          if (!oGd.$Sculpture[i[0] + '_' + i[1]]) {
            if (sculps[i[0]] >= limit) {
              return;
            }

            sculps[i[0]]++;
            oSym.addTask(Math.random() * 150, () => {
              let aim = NewEle("", "img", `position:absolute;left:${GetX(i[1]) - 60}px;top:${GetY(i[0]) - 90}px;z-index:${i[0] * 3};`, {
                src: RandomPic(self.PicArr[self.AimGif])
              }, EDPZ);
              oSym.addTask(160, _ => {
                placeScu(...i);
                ClearChild(aim);
              });
            });
          }
        }
      });
    },

    JudgeZombies(self) {
      if (self.isGoingDie || !$Z[self.id]) {
        return;
      }

      for (let i in $Z) {
        let z = $Z[i];

        if (!z.isPuppet || /Sculpture/.test(z.EName)) {
          if (GetC(z.AttackedLX) >= 6) {
            if (z.OSpeed == 0) {
              z.Speed = 1.8;
            } else {
              z.SpeedCoefficient = 1.2;
            }
          } else {
            if (z.OSpeed == 0) {
              z.Speed = 0;
            } else {
              z.SpeedCoefficient = 1;
            }
          }
        }
      }

      oSym.addTask(70, self.JudgeZombies, [self]);
    },

    OpenDoor(time) {
      let self = this;

      if (!self.doorsDom) {
        return;
      }

      for (let i = 1; i <= 5; i++) {
        self.doorCloseTime[i] = Math.max(oSym.Now + (time[i] || 0), self.doorCloseTime[i]);
      }
    },

    SummonFog(leftBorder, type = "Fog") {
      let self = this;

      if ($("dFog")) {
        oEffects.fadeOut($("dFog"), 1 / oSym.NowSpeed, e => {
          ClearChild(e);
          leftBorder > 0 ? fog() : (oFog.hasLeftStage = true, oFog.leftBorder = 0);
        });
      } else {
        fog();
      }

      function fog() {
        self.OpenDoor([0, 200, 200, 200, 200, 200]);
        Object.assign(oFog, {
          leftBorder: leftBorder,
          type: type
        });
        let innerHTML = "";
        let imgY = 0;
        let MaxFogCId = 2 * leftBorder - 2;
        let ids = [];
        let left = GetX(oS.C - leftBorder) + 60;

        let createImg = (id, x, y) => `<img id='Fog${id}' class='${type} show' src='images/interface/fog${Math.floor(Math.random() * 4)}.png' style='left:${x}px;top:${y}px;transform:translateX(${-x + GetX(12) - left + 10}px) scale(0.5)'>`; //从上至下，从左至右绘制迷雾


        for (let idY = 1; idY < oS.R + 1; idY++) {
          for (let idX = 0, imgX = 0; idX <= MaxFogCId; idX++, imgX += 35) {
            let id = idY + "_" + idX;
            ids.push(`Fog${id}`);
            innerHTML += createImg(id, imgX - 15, imgY - 15);
          }

          imgY += 540 / oS.R;
        }

        let ele = NewEle("dFog", "div", `left:${left}px`, {
          innerHTML
        }, EDAll);
        ele.className = type + "Div";
        oFog.hasLeftStage = false;
        oFog.refreshTP();
        type === 'strongFog' && oFog.attackPlants();

        for (let i of ids) {
          oEffects.Animate($(i), {
            transform: ""
          }, (Math.random() * 1 + 1) / oSym.NowSpeed, "ease-out");
        }
      }
    },

    SummonVases(type, imgType, obj, R = undefined, HP = 0) {
      let self = this;

      if (self.isGoingDie || !$Z[self.id]) {
        return;
      }

      if (R === undefined) {
        R = [1, 2, 3, 4, 5].random();
      }

      let times = [];
      times[R] = 400;
      let z = PlaceZombie(oZombossVase, R, 10, 0, 1);

      if (self.currentStage >= 2) {
        z.Speed = 4.2 + (self.currentStage - 2) / 2;
        z.tSpeed = 2.5 + (self.currentStage - 2) / 2;
      }

      z.HP = Math.floor(Math.random() * 200 + 60 + HP);
      z.configs = {
        type: type,
        obj: obj
      };
      z.SetImg(imgType);
      z.DieX = GetX(5);
      self.OpenDoor(times);
      return z;
    },

    SetBrightness: function (zhizhen, dom, k) {
      let self = this;

      if (dom) {
        let s = `brightness(1${!k ^ 1}0%)`;

        if (self.doorsDom) {
          for (let i = 1; i <= 5; i++) {
            self.doorsDom[i].style['filter'] = s;
          }
        }

        dom.style['filter'] = s;
      }
    },

    Birth(json = {}) {
      //唤醒僵尸，注册$Z和oZ
      let self = this;

      if (!json.dont_set_original_value) {
        //不设置原始数据，例如OAttack,OSpeed之类，否则默认备份OAttack,OSpeed
        self.OAttack = self.Attack;
        self.OSpeed = self.Speed;
      }

      self.HeadTargetPosition = JSON.parse(JSON.stringify(self.HeadTargetPosition)); //深拷贝头部坐标，避免改的时候直接改成prototype的

      self.PicArr = self.PicArr.slice(); //复制一份数组，避免中途更改PicArr

      $Z[self.id] = self;

      for (let i = 1; i <= oS.R; i++) {
        self.R = i;
        oZ.add(self);
      }

      self.doorState = [0, 0, 0, 0, 0, 0];
      self.doorCloseTime = [0, 0, 0, 0, 0, 0];
      self.Stages = [19000, 15000, 10000, 3000, -1000];
      self.R = 3;
      self.NextAttackTime = oSym.Now + 500;
      self.setBossBlood(self);
      let id = self.id;
      let ele = self.Ele = $(id);
      self.EleShadow = ele.firstChild;
      self.EleBody = ele.childNodes[1]; //画传送带dom

      {
        let doorsX = [0, 637, 637, 637, 637, 637];
        let doorsY = [0, 78, 174, 277, 379, 475];

        for (let i = 1; i <= 5; i++) {
          NewImg("", self.PicArr[self.BeltGif], `position:absolute;top:${doorsY[i]}px;left:${doorsX[i] - 856 + self.X}px;z-index:${3 * i - 1};`, EDPZ);
        }
      }
      ; //画洞洞dom

      {
        let doorsX = [0, 884, 883, 886, 881, 882];
        let doorsY = [0, 12, 86, 181, 280, 373];

        for (let i = 1; i <= 5; i++) {
          NewImg("", self.PicArr[self.BeltGif + i], `position:absolute;top:${doorsY[i]}px;left:${doorsX[i] - 856 + self.X}px;z-index:${3 * i - 1};`, EDPZ);
        }
      }
      ; //画铁皮门dom

      let doms = [];
      let doorsX = [0, 895, 895, 895, 895, 895];
      let doorsY = [0, 43, 118, 218, 318, 418];

      for (let i = 1; i <= 5; i++) {
        doms[i] = NewImg("", self.DoorPicArr[self.DoorIndexs[i]], `position:absolute;top:${doorsY[i]}px;left:${doorsX[i] - 856 + self.X}px;z-index:${3 * i};`, EDPZ);
      }

      self.doorsDom = doms;
      self.BirthCallBack(self);
      oSym.addTask(self.delayT, _ => {
        ele.addEventListener("unload", self.RemoveRandomPic, {
          once: true
        });
        self.EleBody.src = self.PicArr[self.NormalGif];
      });
      self.JudgeDoor(self);
      self.JudgeZombies(self);
    },

    NormalGetAttack(self, a) {
      self.SetBrightness(self, self.EleBody, 1);
      oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));

      if (self.HP < self.Stages[self.currentStage]) {
        return;
      }

      if (self.currentStage == 4) {
        a = Math.floor(a / 3);
      }

      if ((self.HP -= a) < 0) {
        self.NormalDie();

        self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = _ => {};

        return;
      }

      oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
        curValue: self.HP
      });
    },

    getHit0(d, a) {
      d.NormalGetAttack(d, a);
    },

    getHit1(d, a) {
      d.NormalGetAttack(d, a);
    },

    getHit2(d, a) {
      d.NormalGetAttack(d, a);
    },

    getHit3(d, a) {
      d.NormalGetAttack(d, a);
    },

    getSnowPea: OrnNoneZombies.prototype.getPea,

    getExplosion() {},

    getCrushed(q) {
      q.PlayBirthEffect(q);
      q.Die();
      let self = this;
      self.NormalGetAttack(self, Math.floor(self.HP / 5));
    },

    NormalDie() {
      let self = this,
          id = self.id; //self.EleBody.src = self.PicArr[0];

      self.HP = 0; //oEffects.fadeOut(self.Ele, 3, self.Ele);

      delete $Z[id];
      oEffects.ImgSpriter({
        ele: NewEle(id + "_Die", "div", `position:absolute;z-index:${self.zIndex + 3};height:420px;width:488px;left:${self.X}px;top:${self.pixelTop}px;background:url(images/Zombies/BossB/die.png) no-repeat;`, 0, EDPZ),
        styleProperty: 'X',
        changeValue: -488,
        frameNum: 24,
        interval: 9
      });

      if (self.DarkRainMasks) {
        let e = NewEle("effect" + Math.random(), "div", "pointer-events:none;position:absolute;z-index:31;width:1500px;height:600px;background:#000;opacity:0;", 0, EDAll);
        oEffects.Animate(e, {
          opacity: 1
        }, 1.5 / oSym.NowSpeed, "linear", _ => {
          oSym.addTask(2, () => {
            oEffects.Animate(e, {
              opacity: 0
            }, 1.5 / oSym.NowSpeed, "linear", ClearChild);
          });
          ClearChild(...self.DarkRainMasks);
        });
      }

      oEffects.ScreenShake();
      oP.MonitorZombiePosition(self);
      toWin();

      for (let i of $Z) {
        if (i.EName == "oZombossVase") {
          i.DisappearDie();
        } else {
          i.ExplosionDie();
        }
      }
    }

  });
}(),
    //傀儡从下面开始
oCrystal = InheritO(oConeheadZombie, {
  EName: "oCrystal",
  CName: $__language_Array__["6777bae79f908aac629b587e8e154d6a"],
  OrnHP: 462,
  HP: 238,
  width: 138,
  height: 120,
  beAttackedPointL: 25,
  beAttackedPointR: 165,
  getShadow: _ => "display:none;",
  Speed: 0,
  OSpeed: 0,
  NormalGif: 0,
  OrnLostNormalGif: 1,
  NormalballAudioTT: 1,
  isCounted: 0,
  //不被计入胜利条件
  isPuppet: 1,
  //傀儡需开启
  PicArr: function () {
    var b = "images/Props/Crystal/";
    return [b + "Crystal00.png", b + "Crystal01.png", b + "Crystal10.png", b + "Crystal11.png"];
  }(),
  PlayNormalballAudio: function () {
    PlayAudio("Crystal_Hited");
  },

  getSlow() {},

  GatherSun: function (id) {
    const randomTime = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].random(),
          lightEle = $(id + '_Light');
    oS.SunNum > 0 && oSym.addTask(randomTime * 100, _ => {
      const obj = $Z[id];

      if (obj) {
        oEffects.fadeIn(lightEle, undefined, ele => {
          $Z[id] && oEffects.fadeOut(lightEle);
        });
        oS.SunNum -= 25;
        obj.GatherSun(obj.id);
      }
    });
  },

  getButter() {},

  CustomBirth: function (i, c, d, m) {
    var g = this,
        f = GetY(i) + g.GetDY(),
        h = f - g.height,
        k = i * 3,
        e = g.id = "Z_" + Math.random(),
        l = g.beAttackedPointL,
        j = g.beAttackedPointR; //X：僵尸图片左坐标；ZX：僵当前坐标，往左时是AttackLX，右时是AttackRX

    g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = GetX(c) - (j - l) * 0.5 + 20) - l) + j;
    g.R = i;
    g.pixelTop = h, g.CR = i + '_' + c;
    g.zIndex = k;
    (g.delayT = d) && (g.FreeSetbodyTime = oSym.Now);
    oGd.$LockingGrid[g.CR] = true; //当前格子禁止种植

    NewImg(e + "_Light", "images/Props/Crystal/Crystal10.png", "left:" + (g.AttackedLX - g.beAttackedPointL) + "px;top:" + g.pixelTop + "px;z-index:" + g.zIndex, EDPZ); //初始化发光特效

    SetStyle($(e + "_Light"), {
      opacity: '0'
    });
    g.GatherSun(g.id); //注册发光特效后才能进行回调！！！

    return g.getHTML(e, g.X, h, k, "none", m || 0, g.GetDTop, g.PicArr[g.NormalGif]);
  },
  JudgeAttack: function () {
    return true;
  },
  getHit: function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit, $(f.id + '_Light') && ($(f.id + '_Light').src = "images/Props/Crystal/Crystal11.png"));
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  },
  getHit0: function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit, $(f.id + '_Light') && ($(f.id + '_Light').src = "images/Props/Crystal/Crystal11.png"));
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  },
  getHit1: function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit, $(f.id + '_Light') && ($(f.id + '_Light').src = "images/Props/Crystal/Crystal11.png"));
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  },
  getHit2: function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit, $(f.id + '_Light') && ($(f.id + '_Light').src = "images/Props/Crystal/Crystal11.png"));
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  },
  getHit3: function (f, b) {
    var d = f.OrnHP,
        c = f.HP,
        e = OrnNoneZombies.prototype;
    (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit, $(f.id + '_Light') && ($(f.id + '_Light').src = "images/Props/Crystal/Crystal11.png"));
    f.SetBrightness(f, f.EleBody, 1);
    oSym.addTask(10, function (h, g) {
      (g = $Z[h]) && g.SetBrightness(g, g.EleBody, 0);
    }, [f.id]);
  },
  NormalDie: function () {
    let self = this;
    ClearChild($(self.id + '_Light'));
    oEffects.fadeOut(self.Ele, 'fast', ClearChild); //水晶无死亡动画，可直接消失

    self.HP = 0;
    delete $Z[self.id];
    delete oGd.$LockingGrid[self.CR]; //解锁格子
  },
  ExplosionDie: function () {
    let self = this;
    ClearChild(self.Ele, $(self.id + '_Light'));
    self.HP = 0;
    delete $Z[self.id];
    delete oGd.$LockingGrid[self.CR]; //解锁格子
  },
  DisappearDie: function () {
    this.ExplosionDie();
  },
  CrushDie: _ => {},
  GoingDieHead: _ => {},
  GoingDie: function () {
    var b = this,
        c = b.id;
    b.beAttacked = 0;
    b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
    b.AutoReduceHP(c);
  }
}),
    oSculpture = (() => {
  const getHit = (self, attack) => {
    if ((self.HP -= attack) <= 0) {
      //死亡
      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = _ => {};

      self.NormalDie();
      return;
    }

    self.updateHurtStatus(self);
    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
  };

  return InheritO(oCrystal, {
    EName: "oSculpture",
    CName: $__language_Array__["9efec0a1c5ec67d94e4f8b127bd77980"],
    HP: 1200,
    HurtStatus: 0,
    width: 84,
    height: 177,
    beAttackedPointL: 18,
    beAttackedPointR: 84,
    PicArr: (path => ['Sculpture0.png', 'Sculpture1.png', 'Sculpture2.png', 'damage1.png', 'damage2.png'].map(s => path + s))("images/Props/Sculpture/"),
    AudioArr: ['sculpture1', 'sculpture2', 'sculpture3'],
    getShadow: _ => `left: 3px;top: 144px;`,
    isMoving: 0,
    ChkActs: (o, R, arR, i) => o.GoLeft(o, R, arR, i),
    //默认向左走
    FangXiang: 'GoLeft',
    DeltaDirectionSpeed: {
      //Speed*这个等于真实速度
      'GoLeft': 1,
      'GoRight': -1,
      'GoUp': 0,
      'GoDown': 0
    },
    lastSpeed: 0,
    CanPush: oSculptorZombie.prototype.CanPush,
    HeadTargetPosition: [{
      x: 70,
      y: 50
    }, {
      x: 80,
      y: 50
    }],

    GoLeft(o, R, arR, i) {
      //向左走
      let Speed = o.Speed * o.SpeedCoefficient;
      let hookKey = 1;

      if (o.lastSpeed === o.Speed) {
        if (Speed) {
          if (!o.FreeFreezeTime && !o.FreeSetbodyTime) {
            //如果僵尸没有处于冰冻或者等待出场状态
            if (!o.isAttacking) {
              !o.isGoingDie && o.JudgeAttack(); //未临死，未攻击，进行攻击判断

              if ((o.AttackedRX -= Speed) < -50) {
                //向左走出屏幕，算作直接死亡，不排序只更新
                arR.splice(i, 1);
                o.DisappearDie();
                hookKey = 0;
              } else {
                //正常移动僵尸
                o.ZX = o.AttackedLX -= Speed;
                SetStyle(o.Ele, {
                  left: (o.X -= Speed) + 'px'
                });

                if (oGd.$Sculpture[o.R + "_" + o.C] === o) {
                  delete oGd.$Sculpture[o.R + "_" + o.C];
                }

                o.C = GetC(o.AttackedLX);
                oGd.killAll(R, o.C, 'JNG_TICKET_Sculpture');
              }
            }
          } //检查场地事件


          o.ChkCell_GdType(o);
          return hookKey;
        }

        return hookKey;
      }

      if (!Speed) {
        let isAvailable = true; //是否没有植物

        let newC = GetC(o.AttackedLX);

        for (let f = 0, _$ = oGd.$; f <= PKindUpperLimit; f++) {
          if (_$[o.R + "_" + newC + "_" + f]) {
            isAvailable = false;
            break;
          }
        }

        if (newC > o.C && isAvailable) {
          o.C = newC - 1;
          o.Move(false, 0, "right");
          o.Speed = 0;
        } else {
          if (o.CanPush(o)) {
            o.C = newC + 1;
            o.Move();
            o.Speed = 0;
          } else {
            o.C = newC - 1;
            o.Move(false, 0, "right");
            o.Speed = 0;
          }
        }
      }

      o.lastSpeed = o.Speed;
      return hookKey;
    },

    HeadTargetPosition: [{
      x: 20,
      y: 20
    }],

    ChkCell_GdType(self) {
      let R = self.R;
      let C = self.C;
      let gdType = oGd.$GdType[R][C];

      if (self.LivingArea != gdType) {
        if (gdType == 1 || gdType == 3) {
          if (self.LivingArea == 2) {
            self.SetWater(0);
          }
        }

        if (gdType == 2) {
          if (self.DivingDepth != oGd.$WaterDepth[R][C]) {
            self.SetWater(oGd.$WaterDepth[R][C]);
          }
        }

        self.LivingArea = gdType;
      }
    },

    CustomBirth(R, C, delayT, clipH) {
      const self = this;
      const bottomY = GetY(R) + self.GetDY();
      const pixelTop = bottomY - self.height;
      const zIndex = 3 * R;
      const id = self.id = "Z_" + Math.random();
      const beAttackedPointL = self.beAttackedPointL;
      const beAttackedPointR = self.beAttackedPointR;
      self.ZX = self.AttackedLX = GetX(C) - (beAttackedPointR - beAttackedPointL) * 0.5;
      self.X = self.ZX - beAttackedPointL;
      self.AttackedRX = self.X + beAttackedPointR;
      self.R = R;
      self.C = C;
      self.pixelTop = pixelTop;
      self.zIndex = zIndex;

      if (C == 11) {
        //进场特殊处理
        self.X += 20;
      }

      oGd.killAll.bind(oGd)(R, C, 'JNG_TICKET_Sculpture'); //杀掉当前格植物

      (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now);
      oGd.$LockingGrid[R + '_' + C] = true;
      oGd.$Sculpture[R + '_' + C] = self; //当前格子禁止种植

      return self.getHTML(id, self.X, pixelTop, zIndex, "none", clipH || 0, self.GetDTop, self.PicArr[self.NormalGif]);
    },

    AllCheck(R, newC, spStack = oGd.$Sculpture, type = "left") {
      let lastSpArr = [];

      for (let c = newC; type == "left" ? c >= 1 : c <= 11; type == "left" ? c-- : c++) {
        //从右向左找出剩余可连推的雕像（从左向右推时是从左向右找）
        let sp = spStack[R + '_' + c];
        if (!sp) break; //如果往下找不到雕像了就放弃搜索

        if (c === 1 && type == "left") return false; //如果左边第一格有雕像就说明没法连推，直接放弃后续所有操作

        lastSpArr.push(sp);
      }

      return lastSpArr;
    },

    Move(isInUniform, uniformDelayT, type = "left") {
      let self = this;
      let oldC = self.C;
      let R = self.R;
      let MoveTime = 1;
      let spStack = oGd.$Sculpture;
      let lgStack = oGd.$LockingGrid;

      if (!$Z[self.id]) {
        delete lgStack[R + '_' + oldC];
        delete spStack[R + '_' + oldC];
        return;
      }

      let updateX = (newC, killDelayT = 2) => {
        //连推逻辑
        if (!isInUniform) {
          let lastSpArr = self.AllCheck(R, newC, spStack, type);

          if (lastSpArr === false) {
            return;
          }

          let time = lastSpArr.length;
          newC === 9 && (time += 1.3);
          let NewSpArr = lastSpArr.reverse();
          NewSpArr.forEach(sp => sp.Move(true, time-- * 0.1 / oSym.NowSpeed, type));
        }

        if (newC > 9 && type == "right") {
          newC++;
        } //雕像自己的移动逻辑


        self.C = newC;
        self.ZX = self.AttackedLX = GetX(newC) - (self.beAttackedPointR - self.beAttackedPointL) * 0.5;
        self.X = self.ZX - self.beAttackedPointL;
        self.AttackedRX = self.X + self.beAttackedPointR;
        self.Altitude = 0;
        self.isMoving = 1;
        delete lgStack[R + '_' + oldC];
        delete spStack[R + '_' + oldC];
        lgStack[R + '_' + newC] = true;
        spStack[R + '_' + newC] = self;
        oSym.addTask(killDelayT, oGd.killAll.bind(oGd), [R, newC, 'JNG_TICKET_Sculpture']);
        oEffects.Animate(self.Ele, {
          left: self.X + 'px'
        }, MoveTime / oSym.NowSpeed, 'cubic-bezier(0, 0, 0.2, 1)', _ => {
          self.isMoving = 0;
          self.Altitude = 1;
          self.ChkCell_GdType(self);

          if (newC > 11 && type === "right") {
            self.NormalDie();
          }
        }, uniformDelayT);
      };

      if (type == "left") {
        if (self.X > GetX(9)) {
          //从场外挪进场内
          updateX(9, 25);
          return;
        }

        if (oldC - 1 > 0) {
          //场地内移动
          updateX(self.C - 1);
          return;
        }
      } else {
        updateX(self.C + 1);
      }
    },

    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getHit3: getHit,
    getSnowPea: getHit,

    getSlow() {},

    getVertigo: getHit,

    updateHurtStatus(self) {
      if (self.HP <= 800 && self.HurtStatus < 1 || self.HP <= 400 && self.HurtStatus < 2) {
        self.EleBody.src = self.PicArr[++self.HurtStatus];

        switch (self.HurtStatus) {
          case 1:
            oEffects.ImgSpriter({
              ele: NewEle(`${self.id}_damage`, "div", `position:absolute;width:125px;height:73px;left:-15px;top:111px;background:url(images/Props/Sculpture/damage1.png) no-repeat;`, 0, self.Ele),
              styleProperty: 'X',
              changeValue: -125,
              frameNum: 34
            });
            break;

          case 2:
            oEffects.ImgSpriter({
              ele: NewEle(`${self.id}_damage`, "div", `position:absolute;width:84px;height:66px;top:111px;background:url(images/Props/Sculpture/damage2.png) no-repeat;`, 0, self.Ele),
              styleProperty: 'X',
              changeValue: -84,
              frameNum: 16,
              interval: 5
            });
            break;
        }
      }
    },

    NormalDie() {
      let self = this;
      oEffects.fadeOut(self.EleBody, 0.5, ele => ClearChild(ele, self.EleShadow));
      oEffects.ImgSpriter({
        ele: NewEle(`${self.id}_damage`, "div", `position:absolute;width:118px;height:84px;top:104px;left:-18px;background:url(images/Props/Sculpture/damage3.png) no-repeat;`, 0, self.Ele),
        styleProperty: 'X',
        changeValue: -118,
        frameNum: 22,
        interval: 5,
        callback: () => ClearChild(self.Ele)
      });
      self.HP = 0;
      delete $Z[self.id];
      delete oGd.$Sculpture[self.R + '_' + self.C];
      delete oGd.$LockingGrid[self.R + '_' + self.C];
    },

    CrushDie() {
      let self = this;
      oEffects.fadeOut(self.EleBody, 0.5, ele => ClearChild(ele, self.EleShadow));

      if (self.HurtStatus < 1) {
        oEffects.ImgSpriter({
          ele: NewEle(`${self.id}_damage1`, "div", `position:absolute;width:125px;height:73px;left:-15px;top:111px;background:url(images/Props/Sculpture/damage1.png) no-repeat;`, 0, self.Ele),
          styleProperty: 'X',
          changeValue: -125,
          frameNum: 34
        });
      }

      if (self.HurtStatus < 2) {
        oEffects.ImgSpriter({
          ele: NewEle(`${self.id}_damage2`, "div", `position:absolute;width:84px;height:66px;top:111px;background:url(images/Props/Sculpture/damage2.png) no-repeat;`, 0, self.Ele),
          styleProperty: 'X',
          changeValue: -84,
          frameNum: 16,
          interval: 5
        });
      }

      oEffects.ImgSpriter({
        ele: NewEle(`${self.id}_damage3`, "div", `position:absolute;width:118px;height:84px;top:104px;left:-18px;background:url(images/Props/Sculpture/damage3.png) no-repeat;`, 0, self.Ele),
        styleProperty: 'X',
        changeValue: -118,
        frameNum: 22,
        interval: 5,
        callback: () => ClearChild(self.Ele)
      });
      self.HP = 0;
      delete $Z[self.id];
      delete oGd.$Sculpture[self.R + '_' + self.C];
      delete oGd.$LockingGrid[self.R + '_' + self.C];
    },

    getCrushed(c) {
      if (/BigWallNut|Bowling/.test(c.EName)) {
        return true;
      }

      return false;
    },

    getExplosion() {
      this.getHit0(this, 400);
    },

    PlayNormalballAudio() {
      PlayAudio(this.AudioArr.random());
    }

  });
})(),
    oIceBlock = function () {
  const getHit = function (self, attack) {
    if ((self.HP -= attack) <= 0) {
      //死亡
      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = _ => {};

      self.PlayAnimation(self);
      self.NormalDie();
      return;
    }

    if (self.HP <= 800 / 3 * 2 && self.HurtStatus < 1) self.PlayAnimation(self);
    if (self.HP <= 800 / 3 && self.HurtStatus < 2) self.PlayAnimation(self);
    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
  };

  return InheritO(oCrystal, {
    EName: "oIceBlock",
    CName: $__language_Array__["942b8dd5d5e86d2186c1b164db598a8a"],
    width: 109,
    height: 120,
    beAttackedPointL: 0,
    beAttackedPointR: 105,
    HP: 800,
    HurtStatus: 0,
    PicArr: function () {
      const b = "images/Props/IceBlock/";
      return [b + "0.webp", b + "1.webp", b + "2.webp", b + "Bang1.webp", b + "Bang2.webp", b + "Bang3.webp", "images/Plants/Begonia/Frozen.webp"];
    }(),
    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getHit3: getHit,
    CustomBirth: function (i, c, d, m) {
      let self = this,
          f = GetY(i) + 10,
          h = f - self.height,
          k = 3 * i + 1,
          e = self.id = "Z_" + Math.random(),
          l = self.beAttackedPointL,
          j = self.beAttackedPointR;
      self.AttackedRX = (self.X = (self.ZX = self.AttackedLX = GetX(c) - (j - l) * 0.5) - l) + j;
      self.R = i;
      self.pixelTop = h;
      self.zIndex = k;
      oGd.$LockingGrid[self.CR = i + '_' + c] = true;
      let effect = NewImg(`${self.id}_Frozen`, self.PicArr[6], `position:absolute;z-index:${self.zIndex + 2};width:198px;height:113px;left:${self.ZX - 50}px;top:${self.pixelTop + 40}px;`, EDPZ);
      oSym.addTask(50, ClearChild, [effect]);
      return self.getHTML(e, self.X, h, k, "none", m || 0, self.GetDTop, self.PicArr[0]);
    },
    PlayAnimation: function (self) {
      ++self.HurtStatus < 3 && (self.EleBody.src = `images/Props/IceBlock/${self.HurtStatus}.webp`);
      oEffects.ImgSpriter({
        ele: NewEle(`${self.id}_Broken_${Math.random()}`, "div", `position:absolute;overflow:hidden;z-index:${self.zIndex + 1};width:291px;height:198px;left:${self.ZX - 85}px;top:${self.pixelTop - 30}px;background:url(images/Props/IceBlock/Bang${self.HurtStatus}.webp) no-repeat`, 0, EDPZ),
        styleProperty: 'X',
        changeValue: -291,
        frameNum: 12,
        callback: ele => oEffects.fadeOut(ele, 'fast', ClearChild)
      });
    }
  });
}(),
    oZombossVase = function () {
  const getHit = function (self, attack) {
    if ((self.HP -= attack) <= 0) {
      //死亡
      self.getHit0 = self.getHit1 = self.getHit2 = self.getHit3 = _ => {}; //self.PlayAnimation(self);


      self.NormalDie();
      return;
    } //if(self.HP <= (800/3)*2 && self.HurtStatus < 1) self.PlayAnimation(self);
    //if(self.HP <= 800/3 && self.HurtStatus < 2) self.PlayAnimation(self);


    self.SetBrightness(self, self.EleBody, 1);
    oSym.addTask(10, _ => $Z[self.id] && self.SetBrightness(self, self.EleBody, 0));
  };

  return InheritO(oCrystal, {
    EName: "oZombossVase",
    CName: $__language_Array__["b5a105a106764c8df16537dd85ec58fb"],
    width: 141,
    height: 136,
    beAttackedPointL: 40,
    beAttackedPointR: 105,
    HP: 60,
    BreakPoint: 0,
    Speed: 3.2,
    tSpeed: 1.5,
    EleClickArea: null,
    HurtStatus: 0,
    NormalGif: 0,
    configs: {
      type: null,
      obj: null
    },
    GetDY: _ => 15,
    DieX: -150,
    HeadTargetPosition: [{
      x: 20,
      y: 20
    }],
    getShadow: self => `left:${self.beAttackedPointL - 15}px;top:${self.height - 22 - 30}px;`,
    PicArr: function () {
      const b = "images/Props/ZombossVase/";
      return [b + "0.webp", b + "1.webp", b + "2.webp", b + "3.webp", b + "Bang0.webp", b + "Bang1.webp", b + "Bang2.webp", b + "Bang3.webp"];
    }(),

    getSlow() {},

    getButter() {},

    getExcited() {},

    //0 植物罐子，1 问号罐子，2 车罐子，3 巨人罐子
    SetImg(i) {
      let self = this;
      self.NormalGif = i;
      self.EleBody.src = self.PicArr[i];
      return self;
    },

    getHit0: getHit,
    getHit1: getHit,
    getHit2: getHit,
    getSnowPea: getHit,
    getHit3: getHit,

    BirthCallBack(self) {
      let delayT = self.delayT;
      let id = self.id;
      let ele = self.Ele = $(id);
      self.EleShadow = ele.firstChild;
      self.EleBody = ele.childNodes[1];
      self.EleClickArea = NewEle("clicking" + Math.random(), "div", `cursor:pointer;opacity:${localStorage.JNG_DEV ? 0.5 : 0};position:absolute;height:80px;width:70px;top:${self.pixelTop + 30}px;left:${self.X + self.beAttackedPointL - 5}px;background:blue;z-index:30;`, {}, EDPZ);
      self.EleClickArea.addEventListener("click", function () {
        oS.isStartGame && self.NormalDie();
      });

      if (delayT) {
        oSym.addTask(delayT, _ => {
          $Z[id] && (self.FreeSetbodyTime = 0, SetBlock(ele));
        });
      } else {
        SetBlock(ele);
      }
    },

    CustomBirth(R, C, delayT, clipH) {
      const self = this,
            bottomY = GetY(R) + self.GetDY(),
            //僵尸脚部坐标=当前行下边缘坐标+（-自定义向上偏移）
      pixelTop = bottomY - self.height,
            //僵尸图像顶端坐标=僵尸脚部坐标-僵尸图片高度
      zIndex = 3 * R + 1,
            id = self.id = "Z_" + Math.random(),
            beAttackedPointL = self.beAttackedPointL,
            beAttackedPointR = self.beAttackedPointR;
      self.ZX = self.AttackedLX = GetX(C) - (beAttackedPointR - beAttackedPointL) * 0.5;
      self.X = self.ZX - beAttackedPointL;
      self.AttackedRX = self.X + beAttackedPointR;
      self.R = R;
      self.pixelTop = pixelTop;
      self.zIndex = zIndex;
      (self.delayT = delayT) && (self.FreeSetbodyTime = oSym.Now); //设定自身定身时间为延迟登场时间

      return self.getHTML(id, self.X, pixelTop, zIndex, "none", clipH || 0, self.GetDTop, self.PicArr[self.NormalGif]);
    },

    PlaceThing(self, type, obj) {
      switch (type) {
        case 0:
          ThrowACard(obj, [self.ZX - 50, GetY(self.R) - 100], false, {
            delta: 30,
            vy: -4
          });
          break;

        case 1:
          let z = PlaceZombie(obj, self.R, GetC(self.ZX), 0, 1);
          let pro = obj.prototype;

          if (pro.height >= 200 || pro.beAttackedPointR - pro.beAttackedPointL >= 150) {
            z.Altitude = 3;

            (function f() {
              z.EleBody.style.transform = "scale(0)";
              z.EleBody.style.transformOrigin = "center bottom"; //z.EleBody.style.top=z.height/2+"px";

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

    JudgeAttack() {
      let self = this;
      SetStyle(self.EleClickArea, {
        top: `${self.pixelTop + 30}px`,
        left: `${self.X + self.beAttackedPointL - 5}px`
      });
      self.SpeedCoefficient = 1;

      if (self.Speed > self.tSpeed + 0.3) {
        self.Speed -= 0.05;
      } else if (self.Speed > self.tSpeed) {
        self.Speed -= 0.01;
      }

      if (self.ZX <= self.DieX) {
        oEffects.Animate(self.EleBody, {
          transform: EditCompositeStyle({
            ele: self.EleBody,
            delFuncs: ["rotate"],
            addFuncs: [["rotate", "-15deg"]]
          })
        }, 0.3 / oSym.NowSpeed, "ease-in");
        oSym.addTask(30, _ => {
          $Z[self.id] && self.NormalDie();
        });
      }
    },

    ExplosionDie: function () {
      this.NormalDie();
    },
    DisappearDie: function () {
      this.NormalDie(0);
    },
    CrushDie: function () {
      this.NormalDie();
    },
    NormalDie: function (place_thing = 1) {
      let self = this;

      if (self.EleBody) {
        self.EleBody.src = self.PicArr[self.NormalGif + 4];
      }

      oSym.addTask(157, _ => {
        oEffects.fadeOut(self.Ele, 0.1, ClearChild);
      });
      oEffects.ImgSpriter({
        ele: NewEle(`${self.id}_Break`, "div", `position:absolute;overflow:hidden;z-index:${self.zIndex + 1};width:141px;height:136px;left:${self.X}px;top:${self.pixelTop}px;background:url(images/Props/Vase_Breaker/Pop_Effect.webp) no-repeat`, 0, EDPZ),
        styleProperty: 'X',
        changeValue: -141,
        frameNum: 18,
        interval: 3
      });
      StopAudio("vase");
      PlayAudio("vase");
      self.isAttacking = 1;
      self.HP = 0;
      delete $Z[self.id];

      if (self.EleClickArea) {
        ClearChild(self.EleClickArea);
      }

      SetStyle(self.EleBody, {
        translate: "",
        transform: ""
      });

      if (place_thing && self.configs.type !== null && self.configs.obj) {
        self.PlaceThing(self, self.configs.type, self.configs.obj);
      }
    }
  });
}();