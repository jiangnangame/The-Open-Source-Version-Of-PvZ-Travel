/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

let CBullets = NewO({
  EName: "CBullets",
  Attack: 20,
  NormalGif: 0,
  SplashGif: 1,
  PicArr: [],

  Birth(PicArr, X, Y, R, zIndex, prefix) {
    let self = this,
        id = `${prefix !== null && prefix !== void 0 ? prefix : self.EName}_${Math.random()}`;
    self.id = id;
    self.pixelTop = Y;
    self.pixelLeft = X;
    self.PicArr = PicArr;
    self.R = R;
    self.zIndex = zIndex !== null && zIndex !== void 0 ? zIndex : 3 * R + 2;
    self.Ele = NewImg(id, PicArr[self.NormalGif], `left:${self.pixelLeft}px;top:${self.pixelTop}px;z-index:${self.zIndex};`, EDPZ);
    oBu.add(self, id);
    return self;
  },

  CheckDie(self) {
    if (self.pixelLeft > oS.W || self.pixelLeft < 0) {
      return true;
    }

    return false;
  },

  Update(self) {
    if (self.CheckDie(self)) {
      self.Destroy(self);
      return;
    }

    self.Move(self);
  },

  Move(self) {
    self.Die(self);
  },

  Die(self) {
    self.Destroy();
  },

  Destroy() {
    let self = this;
    ClearChild(self.Ele);
    oBu.del(self);
  }

}),
    oPeaBullet = InheritO(CBullets, {
  EName: "oPeaBullet",
  Speed: 5,
  Direction: 0,
  PeaProperty: 0,
  //豌豆属性：普通豌豆传0、寒冰豌豆传-1、火焰豌豆传1
  Width: 20,

  Move(self) {
    let id = self.id,
        ele = self.Ele,
        hit = self.Attack,
        direction = self.Direction,
        pixelLeft = self.pixelLeft,
        R = self.R,
        PeaProperty = self.PeaProperty,
        C = GetC(pixelLeft),
        torch = oGd.$Torch,
        obstacle = oGd.$Obstacle,
        delta = direction * self.Speed,
        zombie = oZ[`getZ${direction}`](pixelLeft + self.Width, R);

    if (obstacle[`${R}_${C}`] && self.C != C) {
      self.Destroy();
    } else {
      if (PeaProperty < 1 && torch[`${R}_${C}`] && self.C != C) {
        PlayAudio("firepea");
        PeaProperty = ++self.PeaProperty;
        self.C = C;
        ele.src = RandomPic("images/Plants/PB" + PeaProperty + direction + ".webp");
      }

      if (zombie && zombie.Altitude == 1) {
        zombie["get" + ["Snow", "", "Fire"][PeaProperty + 1] + "Pea"](zombie, hit * Math.max(1, PeaProperty + 1), direction);
        self.Die(self);
      } else {
        pixelLeft = self.pixelLeft += self.Speed * (-direction * 2 + 1);
        ele.style.left = `${pixelLeft}px`;
      }
    }
  },

  Die(self) {
    let id = self.id + '_die';
    let res = `images/Plants/PeaBulletHit${self.PeaProperty}.webp`;
    let dieEffect = NewImg(id, null, `left: ${self.pixelLeft + 25}px; top: ${self.pixelTop - 23}px; z-index:${self.zIndex};width: 46px; height: 60px; position: absolute;`, EDPZ);
    dieEffect.src = RandomPic(res, dieEffect, true);
    oSym.addTask(50, ClearChild, [dieEffect]);
    self.Destroy(self);
  }

}),
    oRadishBullet = InheritO(CBullets, {
  EName: "oRadishBullet",
  Speed: 16,
  Direction: 0,
  Width: 74,
  DeltaMove: 0,
  Attack: 40,
  Destroyed: false,

  Birth(PicArr, X, Y, R, zIndex, prefix) {
    let self = this,
        id = `${prefix !== null && prefix !== void 0 ? prefix : self.EName}_${Math.random()}`;
    self.id = id;
    self.pixelTop = Y;
    self.pixelLeft = X;
    self.PicArr = PicArr;
    self.R = R;
    self.zIndex = zIndex !== null && zIndex !== void 0 ? zIndex : 3 * R + 2; //self.zombieList = new Set();

    self.Ele = NewImg(id, PicArr[self.NormalGif], `left:${self.pixelLeft}px;top:${self.pixelTop}px;z-index:${self.zIndex};`, EDPZ);

    (function hitZombies() {
      let zombies = oZ.getArZ(X, Math.min(X + 330, oS.W), self.R, Z => {
        return Z.height - Z.DivingDepth > 80;
      });
      zombies.forEach(zombie => zombie.Altitude < 2 && zombie.getPea(zombie, self.Attack));
    })();

    oBu.add(self, id);
    return self;
  },

  Move(self) {
    self.DeltaMove += self.Speed;
    self.Ele.style.left = `${self.pixelLeft += self.Speed}px`;

    if (self.DeltaMove > 330 - self.Speed * 15) {
      self.Die(self);
    }
  },

  CheckDie(self) {
    if (self.pixelLeft > oS.W || self.pixelLeft + self.Width < 0) {
      return true;
    }

    return false;
  },

  Die(self) {
    if (self.Destroyed) {
      return;
    }

    self.Destroyed = true;
    oEffects.Animate(self.Ele, {
      opacity: 0
    }, 0.2 / oSym.NowSpeed);
    oSym.addTask(20, () => {
      self.Destroy(self);
    });
  }

}),
    oSnowPeaBullet = InheritO(oPeaBullet, {
  EName: "oSnowPeaBullet",
  PeaProperty: -1
}),
    oPepperBullet = InheritO(oPeaBullet, {
  EName: "oPepperBullet",

  CanAttackCheck() {},

  Move(self) {
    let id = self.id,
        ele = self.Ele,
        hit = self.Attack,
        direction = self.Direction,
        pixelLeft = self.pixelLeft,
        R = self.R,
        PeaProperty = self.PeaProperty,
        C = GetC(pixelLeft),
        torch = oGd.$Torch,
        obstacle = oGd.$Obstacle,
        delta = direction * self.Speed,
        zombie = oZ[`getZ${direction}`](pixelLeft, R, self.CanAttackCheck);

    if (obstacle[`${R}_${C}`] && self.C != C) {
      self.Destroy();
    } else {
      if (zombie && zombie.Altitude == 1) {
        zombie["getPea"](zombie, hit, direction);
        SetStyle(ele, {
          left: pixelLeft - direction * 37 + "px",
          top: self.pixelTop - 15 + "px"
        });
        self.Die(self);
      } else {
        pixelLeft = self.pixelLeft += self.Speed * (-direction * 2 + 1);
        ele.style.left = `${pixelLeft - direction * 17 - 10}px`;
      }
    }
  },

  Die(self) {
    self.Ele.src = self.PicArr[self.SplashGif];
    oSym.addTask(50, ClearChild, [self.Ele]);
    oBu.del(self);
  }

});