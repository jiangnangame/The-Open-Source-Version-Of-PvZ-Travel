/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let EasyMode = false;

  function MoveTowards(curAngle, targetAngle, maxStep) {
    let deltaAngle = ((targetAngle - curAngle) % 360 + 360) % 360;

    if (deltaAngle > 180) {
      deltaAngle = deltaAngle - 360;
    }

    maxStep = Math.abs(maxStep);
    let c = Math.abs(deltaAngle) / deltaAngle;

    if (Math.abs(deltaAngle) > maxStep) {
      curAngle += c * maxStep;
    } else {
      curAngle = targetAngle;
    }

    return curAngle;
  }

  function createBullet(type, size, x, y, rgb, move, configs = {}) {
    let json = {
      pic: oMiniGames.oStg.publicPic[type],
      width: Math.round(size),
      height: Math.round(size),
      r: Math.max(1, Math.floor(Math.sqrt(size) - 1)),
      x: x - size / 2,
      y: y - size / 2,
      rgb: oMiniGames.oStg.publicRGB[rgb],
      angle: 0
    };
    json = Object.assign(json, configs);

    if (move) {
      let [lx, ly, lAngle] = [json.x, json.y, json.angle];

      json["move"] = function () {
        let self = this;
        move(self);

        if (Math.abs(self.angle - lAngle) > 0.0001) {
          lAngle = self.angle;
          self.picAngle = (self.angle + 90) / 180 * Math.PI;
          self._defSpd = [Math.cos(self.angle * (Math.PI / 180)), Math.sin(self.angle * (Math.PI / 180))];
        }

        self.dx = self._defSpd[0] * self.speed;
        self.dy = self._defSpd[1] * self.speed;

        if (Math.abs(lx - self.x) > 0.0001 || Math.abs(ly - self.y) > 0.0001) {
          self.dx = self.x - lx;
          self.dy = self.y - ly;
          self.x = lx;
          self.y = ly;
        }

        lx = self.x + self.dx;
        ly = self.y + self.dy;
      };
    }

    return new oMiniGames.oStg.Obj.CBullet().Birth(json);
  }

  let oRepeaterk = InheritO(oXshooter, {
    EName: "oRepeaterk",
    SunNum: 1000,

    CheckLoop(zid, direction) {
      //开始攻击，并且循环检查攻击条件1,2
      let self = this;
      let pid = self.id;

      if ($P[pid]) {
        self.NormalAttack(zid); //触发植物攻击，并传入触发者僵尸之id

        oSym.addTask(35, _ => $P[pid] && self.AttackCheck1(zid, direction));
      }
    }

  });
  let oBoss = InheritO(oBossB, {
    EName: "oBoss",
    CName: "boss",
    HP: 30000,
    shootTimes: 0,
    C: 0,
    SummonZombieDifficulty: 0,

    NormalGetAttack(self, a) {
      if (self.Stage > 1) {
        a = Math.ceil(a / 2);
      } else {
        a = Math.ceil(a / 3);
      }

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

    BirthCallBack(self) {
      PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
      let ele = self.Ele = $(self.id),
          eleBody = self.EleBody = ele.childNodes[1];
      self.EleShadow = ele.firstChild;
      ele.style.opacity = 0;
      oEffects.Animate(ele, {
        opacity: 1
      }, 1, 'ease-in', _ => self.RenderEleBody('images/Zombies/BossB/0.webp', _ => oSym.addTask(100, self.Activites)));
      self.InitAttacks();
      self.Attacks[1].shuffle();
      self.check(self);
    },

    isChecking: true,

    check(self) {
      if (!$Z[self.id]) {
        return;
      }

      if (self.isChecking && oMiniGames.oStg.hero && oMiniGames.oStg.checkTrigger({
        x: self.X + self.width / 2,
        y: GetY(self.R) - self.height / 2,
        r: 80
      }, oMiniGames.oStg.hero.Trigger)) {
        oMiniGames.oStg.hero.Die();
      }

      oSym.addTask(100, self.check, [self]);
    },

    RestoreAction(delay) {
      oSym.addTask(delay, _ => {
        this.Activites();
      });
    },

    Move(R, C = 8, callback = true) {
      let self = this,
          ele = self.EleBody,
          LX = self.X,
          LY = self.pixelTop,
          targetX = GetX(C) - self.beAttackedPointL,
          targetY = GetY(R) - self.height + self.GetDY();

      if (R === self.R && C === self.C) {
        if (callback) {
          self.Activites();
        }

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
        self.C = C;
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

          if (callback) {
            self.Activites();
          }
        }));
      });
    },

    defaultSummonPosition() {
      let self = this;
      return [self.X + self.width / 2, GetY(self.R) - self.height / 2];
    },

    addTask(t, f) {
      let self = this;
      oSym.addTask(t, () => {
        if (!$Z[self.id]) {
          return;
        }

        f();
      });
    },

    IceStorm() {
      let self = this; //console.log(self.HP);

      this.EleBody.src = 'images/Zombies/BossB/icewind.webp';

      if (self.Stage === 1) {
        this.RestoreAction(480);

        for (let times = 0; times < 250; times += 15) {
          self.addTask(times, () => {
            for (let t = 2; t < 13; t++) {
              for (let i = 0; i < 360; i += 60) {
                let speed = 5;
                createBullet("rice", 30, ...this.defaultSummonPosition(), "blueWhite", self => {
                  self.speed = Math.abs(speed -= 0.02 * t / 2);
                }, {
                  angle: ["hero", i]
                });
              }
            }
          });
        }
      } else if (self.Stage === 2) {
        this.RestoreAction(750);
        let pos = self.defaultSummonPosition();
        let delta = 30;
        let originRandom = Math.random() * 360;
        let ang = oMiniGames.oStg.getAngle2(...pos, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);

        for (let k = 0; k < 25; k++) {
          self.addTask(k * 22, () => {
            for (let t = 0; t < 90; t += EasyMode ? 13 : 9) {
              for (let i = 0; i < 360; i += 90) {
                let speed = 5;
                createBullet("rice", 30, ...this.defaultSummonPosition(), "blueWhite", self => {
                  self.speed = speed > 0 ? speed -= 0.03 + Math.sin(t / 90 * Math.PI) / 50 : Math.min(2, Math.abs(speed -= 0.02));
                }, {
                  angle: ang + i + t + delta * k + originRandom
                });
              }
            }
          });
        }
      } else {
        this.RestoreAction(600);
        let pos = self.defaultSummonPosition();
        let delta = 24;
        let originRandom = Math.random() * 360;
        let ang = oMiniGames.oStg.getAngle2(...pos, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);

        for (let k = 0; k < 25; k++) {
          self.addTask(k * 22, () => {
            for (let t = 0; t < 60; t += EasyMode ? 10 : 5) {
              for (let i = 0; i < 360; i += 60) {
                let speed = 5;
                createBullet("rice", 30, ...self.defaultSummonPosition(), "blueWhite", self => {
                  self.speed = speed > 0 ? speed -= 0.03 + Math.sin(t / 60 * Math.PI) / 50 : Math.min(1.5, Math.abs(speed -= 0.02));
                }, {
                  angle: ang + i + t + delta * k + originRandom
                });
              }
            }
          });
        }
      }
    },

    InitAttacks() {
      let self = this;
      self.Attacks = [//stage1
      [() => {
        this.RestoreAction(2025);
        let rand = Math.random() < 0.5 ? 1 : -1;
        let tt = 0;
        /*for(let k = 0;k<100;k++){
            self.addTask(1725/100*k,()=>{
                let r = Math.random()*30-15;
                for(let i = -90;i<90;i+=10){
                    createBullet("rice",30,...self.defaultSummonPosition(),"blueWhite",false,{
                        angle:i+r,
                        speed:4,
                    });
                }
            });
        }*/

        for (let shoot = 0; shoot < 12; shoot++) {
          let fu = rand * (shoot % 2 * 2 - 1);
          self.addTask(tt, () => {
            let pos = self.defaultSummonPosition();

            if (fu) {
              pos[1] -= 30;
            } else {
              pos[1] += 60;
            }

            let ang = oMiniGames.oStg.getAngle2(...pos, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);

            for (let k = 0; k < 12; k++) {
              if (EasyMode && k < 10 && k % 2 == 0) {
                continue;
              }

              for (let _i = 60; _i < 120; _i += k >= 10 ? 2 : EasyMode ? 10 : 5) {
                let i = _i * fu;

                if (k == 11) {
                  i = (120 + _i) * fu;
                }

                let targetAngle = ang;

                if (k == 10) {
                  targetAngle = 0;
                } else if (k == 11) {
                  targetAngle = 60 * fu;
                }

                let deltaAngle = ((targetAngle - i + (i - 90) * 2) % 360 + 360) % 360;

                if (deltaAngle > 180) {
                  deltaAngle = deltaAngle - 360;
                }

                let time = 70 - k * 3;
                let rotTime = 20;

                if (k == 11) {
                  rotTime = 90;
                }

                let f = t => {
                  return (Math.sin(t / time * Math.PI - Math.PI / 2) + 1) / 2 * deltaAngle + i;
                };

                createBullet("rice", 30, ...pos, "blueWhite", self => {
                  if (self.liveTime <= time + rotTime && self.liveTime >= rotTime) {
                    self.angle = f(self.liveTime - rotTime);
                  }
                }, {
                  angle: i,
                  speed: 3 - k / 10
                });
              }
            }
          });
          tt += 150 - shoot * 5;
        }
      }, () => {
        this.RestoreAction(47 * 24);

        for (let times = 0; times < 20; times++) {
          self.addTask(47 * times, () => {
            let ang = oMiniGames.oStg.getAngle2(...self.defaultSummonPosition(), oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y) - 180;

            for (let k = -1; k < 2; k += 2) {
              let pos = self.defaultSummonPosition();
              pos[1] += (60 + times * 5.3) * k;
              pos[0] += times * 5.3;

              for (let j = 0; j < 3; j++) {
                self.addTask(10 * j, () => {
                  for (let i = 40 + times * 7; i < 220 + times * 7; i += EasyMode ? 30 : 18) {
                    createBullet("rice", 30, ...pos, "purple", self => {
                      if (!EasyMode) {
                        self.angle += 3 * Math.DegToRad * Math.cos(self.liveTime * 3 * Math.DegToRad) * 10;
                      }
                    }, {
                      angle: i * k + ang,
                      speed: 3
                    });
                  }
                });
              }
            }
          });
        }
      }, () => {
        this.RestoreAction(450);
        let ang = oMiniGames.oStg.getAngle2(...self.defaultSummonPosition(), oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);
        let ran = Math.floor(Math.random() * 2);

        if (EasyMode) {
          for (let i = 0; i < 400; i += 5) {
            self.addTask(i, () => {
              for (let k = -21; k <= 21; k += 42) {
                createBullet("rice", 30, ...self.defaultSummonPosition(), "purple", self => {}, {
                  angle: ["hero", k],
                  speed: 8,
                  r: 1
                });
              }
            });
          }
        } else {
          for (let times = 15 + ran; times < 35 + ran; times++) {
            let step = 120 / times;
            self.addTask((times - 15 - ran) * 20, () => {
              let rand = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 7 + 14);

              for (let delta = -60; delta <= 120; delta += step) {
                let flag = false;
                createBullet("rice", 30, ...self.defaultSummonPosition(), "purple", self => {
                  if (!flag) {
                    self.speed -= 0.05;
                  } else {
                    self.speed += 0.05;
                  }

                  if (self.speed < 0 && !flag) {
                    self.angle = oMiniGames.oStg.getAngle2(self.Trigger.x, self.Trigger.y, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y) + rand;
                    flag = true;
                  }
                }, {
                  angle: delta + ang,
                  speed: 6,
                  r: 1
                });
              }
            });
          }
        }

        for (let times = 0; times < 330; times += GetC(self.ZX) < 8 ? 18 : 10) {
          self.addTask(times, () => {
            createBullet("ball", 50, ...self.defaultSummonPosition(), "blueWhite", self => {
              self.speed = Math.max(self.speed - 0.01, 1.5);
            }, {
              angle: ["hero", EasyMode ? Math.random() * 42 - 21 : Math.random() * 18 - 9],
              speed: 4,
              r: 1
            });
          });
        }
      }, () => {
        this.RestoreAction(1400);

        for (let times = 0; times < 18; times++) {
          self.addTask(50 * times, () => {
            let rand = Math.random() * 100 - 50;

            for (let i = 0; i < 950; i += 50) {
              let pos = [i + rand, EasyMode ? -74 : -99];
              let ang = oMiniGames.oStg.getAngle2(...pos, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);
              createBullet("rice", EasyMode ? 75 : 100, ...pos, "blueWhite", self => {
                self.angle = MoveTowards(self.angle, ang, 0.03);
              }, {
                angle: 90,
                speed: 2,
                r: EasyMode ? 2 : 5
              });
            }
          });
        }
      }], //stage2
      [shootLoop => {
        self.Move(4, 8, false);
        self.addTask(310, () => {
          this.RestoreAction(3675);
          let wing_flow;
          let randomRot = Math.random() < 0.5 ? 1 : -1;
          let wing_time = 3.7 - shootLoop / 5;

          for (let t = 0; t < 3400; t += EasyMode ? 15 : 8) {
            self.addTask(t, () => {
              let pos_ = self.defaultSummonPosition();
              wing_flow = (Math.cos(t / wing_time * Math.DegToRad) + 1) / 2;

              if (t < 150) {
                wing_flow = 5 - 4 * t / 150;
              }

              let wing_rot = Math.sin((t - 400) / (wing_time * 2 - 0.6) * Math.DegToRad) * randomRot;

              if (t < 400) {
                wing_rot = 0;
              }

              for (let k = -120; k <= 120; k += 240) {
                let defAngle = oMiniGames.oStg.getAngle2(pos_[0], pos_[1] + k, 0, 300 - k);
                let step = 24;

                for (let i = -step * 4.5; i <= step * 4.5; i += step) {
                  let bullet = createBullet("rice", 30, pos_[0], pos_[1] + k, "blueWhite", self => {}, {
                    angle: i * (wing_flow * 0.4 + (EasyMode ? 0.7 : 0.5)) + i / Math.abs(i) * (wing_flow * 2) + defAngle + wing_rot * 15,
                    speed: 5,
                    r: 1
                  });
                  bullet.grazed = true;
                }
              }

              for (let k = -90; k <= 90; k += 30) {
                let bullet = createBullet("rice", 60, pos_[0], pos_[1], "blueWhite", self => {}, {
                  angle: k * (Math.sin(t * Math.DegToRad) * 0.5 + 0.8),
                  speed: 5
                });
                bullet.grazed = true;
              }
            });
          }

          for (let times = 0; times < 280 * 12; times += Math.max(140, 280 - shootLoop * 30)) {
            self.addTask(times, () => {
              let rand = Math.random() * 10 - 5;
              let pos_ = self.defaultSummonPosition();
              let angle = oMiniGames.oStg.getAngle2(...pos_, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);
              let num = EasyMode ? 5 : 3.5;

              for (let k = 0; k <= num; k += num) {
                self.addTask(k * 7, () => {
                  for (let i = -30; i <= 30; i += num * 2) {
                    createBullet("ball", 32, pos_[0], pos_[1], "purple", self => {}, {
                      angle: angle + i + rand + k,
                      speed: 1,
                      r: 1
                    });
                  }
                });
              }
            });
          }

          for (let times = 330; times < 30 * 110; times += Math.max(50, 110 - shootLoop * 15)) {
            let pos_ = self.defaultSummonPosition();
            self.addTask(times, () => {
              if (wing_flow > 0.6) {
                let totalT = 0;
                let angle = oMiniGames.oStg.getAngle2(...pos_, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y);

                for (let k = -5; k <= 5; k += 5) {
                  self.addTask(totalT, () => {
                    if (EasyMode && k != 0) {
                      return;
                    }

                    let num = 5 - Math.abs(k);

                    for (let i = -num; i <= num; i += 2 * Math.max(num, 1)) {
                      createBullet("ball", 32, pos_[0], pos_[1], "red", self => {}, {
                        angle: angle + i,
                        speed: 2,
                        r: 1
                      });
                    }
                  });
                  totalT += 30;
                }
              }
            });
          }
        });
      }, shootLoop => {
        let pos_ = self.defaultSummonPosition();
        pos_[0] -= 100;
        let rand = Math.random() * 30;
        let deltaRot = Math.min(0.07, 0.01 * shootLoop);
        this.RestoreAction(3000);

        for (let t = 0; t < 2500; t += EasyMode ? 37 : 19) {
          self.addTask(t, () => {
            let p = 32;

            for (let i = 0; i < 360; i += 30) {
              createBullet("ball", 32, pos_[0], pos_[1], "purple", self => {
                self.x = pos_[0] + self.speed * self.liveTime * Math.cos(self.angle * Math.DegToRad) + self.width / 2;
                self.y = pos_[1] + self.speed * self.liveTime * Math.sin(self.angle * Math.DegToRad) + self.height / 2;
                self.angle += (0.2 + deltaRot) * Math.sin(t * Math.DegToRad);
              }, {
                angle: i + rand,
                speed: (0.2 + deltaRot) / 0.2,
                r: 1
              });
              createBullet("ball", 32, pos_[0] + p, pos_[1] + p, "purple", self => {
                self.x = pos_[0] + p + self.speed * self.liveTime * Math.cos(self.angle * Math.DegToRad) + self.width / 2;
                self.y = pos_[1] + p + self.speed * self.liveTime * Math.sin(self.angle * Math.DegToRad) + self.height / 2;
                self.angle += (0.2 + deltaRot) * Math.sin(t * Math.DegToRad);
              }, {
                angle: i + rand,
                speed: (0.2 + deltaRot) / 0.2,
                r: 1
              });

              if (shootLoop > 0) {
                createBullet("ball", 32, pos_[0] + p, pos_[1] - p, "purple", self => {
                  self.x = pos_[0] + p + self.speed * self.liveTime * Math.cos(self.angle * Math.DegToRad) + self.width / 2;
                  self.y = pos_[1] - p + self.speed * self.liveTime * Math.sin(self.angle * Math.DegToRad) + self.height / 2;
                  self.angle += (0.2 + deltaRot) * Math.sin(t * Math.DegToRad);
                }, {
                  angle: i + rand,
                  speed: (0.2 + deltaRot) / 0.2,
                  r: 1
                });
              }
            }
          });
        }
      }, shootLoop => {
        this.RestoreAction(3800);
        self.Move(4, 6, false);
        self.addTask(3400, () => {
          self.Move(4, 8, false);
        });
        self.addTask(310, () => {
          let pos_ = self.defaultSummonPosition();
          let rand = Math.random() * 360;
          let tot = 0;

          for (let times = 0; times < 3000; times += 100 - times / 3000 * 50) {
            self.addTask(times, () => {
              rand += Math.pow(tot, 1.1);
              tot += 1.4;

              for (let i = 1; i < 360; i += EasyMode ? 10 : 5) {
                let flag1 = false;
                let flag2 = false;
                let timer = 0;
                let totalTimeStep2 = 120;
                let c = 120 * (Math.sin(i * 6 * Math.DegToRad) + 1) / 2 + 80;
                createBullet("rice", 32, pos_[0], pos_[1], "purple", self => {
                  if (!flag1) {
                    if (self.speed <= 0) {
                      self.speed = 0;
                      flag1 = true;
                    } else {
                      self.speed -= 0.06;
                    }
                  } else if (!flag2) {
                    if (timer <= totalTimeStep2) {
                      self.angle += i % 30 / 30;
                      self.speed = -0.5 / totalTimeStep2 * c * Math.PI * Math.cos(Math.PI / totalTimeStep2 * timer - Math.PI / 2); //(Math.sin((timer/30*180-90)*Math.DegToRad)+1)/2*c;

                      timer++;
                    } else {
                      timer = 0;
                      flag2 = true;
                    }
                  } else {
                    if (timer <= totalTimeStep2) {
                      self.speed = 0.5 / totalTimeStep2 * c * Math.PI * Math.sin(Math.PI / 2 / totalTimeStep2 * timer);
                      timer++;
                    } else {
                      self.speed = Math.max(self.speed - 0.03, 0.5);
                    }
                  }
                }, {
                  angle: i + rand,
                  speed: (EasyMode ? 4 : 5) + times / 3000 * 1.9 + Math.min(0.4, shootLoop / 20),
                  r: 1
                });
              }
            });
          }
        });
      }], [() => {
        this.RestoreAction(10675);
        self.EleBody.src = 'images/Zombies/BossB/call.webp';
        self.Move(3, 5, false);
        let tmpZX = self.ZX;
        let pos = [self.X + self.width / 2, GetY(self.R) - self.height / 2];
        self.addTask(400, () => {
          pos = [self.X + self.width / 2, GetY(self.R) - self.height / 2];
          oEffects.Animate(self.Ele, {
            opacity: 0,
            transform: "scale(0)"
          }, 0.3 / oSym.NowSpeed, 'ease-out');
          self.ZX = self.AttackedLX = 11000;
          self.X = 11000;
          self.AttackedRX = 11000;
          self.pixelTop = 11000;
          self.beAttacked = 0;
          spell();
        });

        function recover() {
          let C = 8,
              R = 4;
          let targetX = GetX(C) - self.beAttackedPointL;
          let targetY = GetY(R) - self.height + self.GetDY();
          self.ZX = self.AttackedLX = targetX;
          self.X = targetX - self.beAttackedPointL;
          self.AttackedRX = self.X + self.beAttackedPointR;
          self.pixelTop = targetY;
          self.beAttacked = 1;
          oZ.moveTo(self.id, self.R, R);
          self.C = C;
          SetStyle(self.Ele, {
            left: self.X + 'px',
            top: targetY + 'px',
            zIndex: 3 * R + 2
          });
          self.isChecking = true;
          oEffects.Animate(self.Ele, {
            opacity: 1,
            transform: ""
          }, 0.3 / oSym.NowSpeed, 'ease-out');
        }

        function spell() {
          for (let i = 0; i < 360; i += 20) {
            createBullet("rice", 30, pos[0], pos[1] + 40, "blueWhite", self => {}, {
              angle: i
            });
          }

          self.addTask(9700, () => {
            recover();
          });

          for (let times = 0; times < 9000; times += 1500 - times / 9000 * 300) {
            self.addTask(times, () => {
              let heroTrigger = [oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y];
              let start = 400 - times / 9000 * 300;
              let total = 0;

              for (let r = start; r < start + 130; r += 24) {
                let fu = total % 2 * 2 - 1;
                let tot = total;
                let rand = Math.random() * 360;

                for (let i = rand; i < (EasyMode ? 720 : 960) + rand; i += EasyMode && total != 5 && total != 0 ? 12 : 4) {
                  self.addTask(EasyMode ? (i - rand) / 3 : (i - rand) / 4, () => {
                    let slice_r = Math.min(r, 3 + tot * (90 - times / 9000 * 30));
                    let oPos = [heroTrigger[0] + Math.cos(i * Math.DegToRad) * r, heroTrigger[1] + Math.sin(i * Math.DegToRad) * r];
                    let angle = Math.asin(slice_r / r) * Math.RadToDeg; //console.log(angle);

                    let b = createBullet("rice", 30, ...oPos, "blueWhite", self => {
                      if (self.liveTime > 650) {
                        self.speed = Math.min(self.speed + 0.01, 1 + times / 9000 * 0.5);
                      } else {//self.angle+=r/start;
                      }
                    }, {
                      angle: i + 180 + angle * fu,
                      speed: 0.001,
                      r: 1
                    });

                    if (r != start) {
                      b.grazed = true;
                    }
                  });
                }

                total += 1;
              }

              for (let t = 0; t < (EasyMode ? 100 : 200); t++) {
                self.addTask(Math.random() * 370, () => {
                  let i = Math.random() * 360;
                  let r = 300 * Math.random() + 300;
                  let slice_r = Math.random() * 200 + 3;
                  let oPos = [heroTrigger[0] + Math.cos(i * Math.DegToRad) * r, heroTrigger[1] + Math.sin(i * Math.DegToRad) * r];
                  let angle = Math.asin(slice_r / r) * Math.RadToDeg; //console.log(angle);

                  let b = createBullet("rice", 30, ...oPos, "blueWhite", self => {}, {
                    angle: i + 180 + angle,
                    speed: 1,
                    r: 1
                  });
                });
              }
            });
          }
        }

        self.isChecking = false;
      }, () => {
        self.Move(4, 7, false);
        this.RestoreAction(11675);
        self.addTask(410, () => {
          for (let i = 0; i < 11000; i += EasyMode ? 120 : 90) {
            let pos = self.defaultSummonPosition();
            pos[1] += 60;
            let rand = Math.random() * 15 - 7.5;
            self.addTask(i, () => {
              for (let a = rand - 30; a <= 30 + rand; a += 15) {
                createBullet("rice", 70, ...pos, "blueWhite", self => {}, {
                  angle: a,
                  speed: 0.7,
                  r: 1
                });
              }
            });
          }

          for (let i = 0; i < 9000; i += 500 + i / 9000 * 2500) {
            let tmpi = i;
            self.addTask(i, () => {
              createSnake(Math.floor(tmpi / 9000 * 70 + 30 - (EasyMode ? 15 : 0)), tmpi / 9000 * 68 + 30, 500 + tmpi / 9000 * 2500, tmpi / 9000 * 0.1);
            });
          }

          for (let i = 0; i < 4; i++) {
            self.addTask(Math.random() * 6000, () => {
              createSnake(Math.floor(Math.random() * 5) + 10, 30, 700);
            });
          }

          if (!EasyMode) {
            self.addTask(Math.random() * 3500, () => {
              for (let i = 0; i < 3; i++) {
                self.addTask(600 * Math.random(), () => {
                  createSnake(20, 45, 1500);
                });
              }
            });
            self.addTask(Math.random() * 3500 + 3600, () => {
              for (let i = 0; i < 3; i++) {
                self.addTask(700 * Math.random(), () => {
                  createSnake(20, 45, 1500);
                });
              }
            });
          }

          function createSnake(length, size, time, speed = 0) {
            let pos = self.defaultSummonPosition();
            let lastFrames = [];
            let maxNum = 20 * length;
            let head = null;

            for (let i = 0; i <= maxNum; i += 20) {
              let index = 0;
              self.addTask(i, () => {
                let randNum = Math.random() * 1.5;

                if (head !== null && !oMiniGames.oStg.bullets[head.id]) {
                  return;
                }

                let b = createBullet("rice", size, ...pos, "green", self => {
                  if (i === 0) {
                    lastFrames.splice(0, 0, self.angle);

                    if (self.liveTime < time) {
                      self.angle = MoveTowards(self.angle, oMiniGames.oStg.getAngle2(self.Trigger.x, self.Trigger.y, oMiniGames.oStg.hero.Trigger.x, oMiniGames.oStg.hero.Trigger.y), (Math.cos(self.liveTime * (2 + randNum) * Math.DegToRad) + 1) / 2 * 3);
                    }
                  } else if (oMiniGames.oStg.bullets[head.id]) {
                    if (index === 0) {
                      index = lastFrames.length - 1;
                    }

                    self.angle = lastFrames[index];

                    if (i === maxNum) {
                      lastFrames.pop();
                    }
                  } //self.speed = (Math.cos(self.liveTime*3*Math.DegToRad)+1)/2*2+0.2;

                }, {
                  angle: 180,
                  speed: 1.5 + speed,
                  r: 1 + (size - 30) / 100
                });

                if (i === 0) {
                  head = b;
                }
              });
            }
          }
        });
      }]];
    },

    AttackInStage1() {
      let self = this;
      self.EleBody.src = 'images/Zombies/BossB/call.webp';
      self.addTask(380, () => {
        this.EleBody.src = 'images/Zombies/BossB/0.webp';
      });

      if (self.shootTimes >= self.Attacks[0].length) {
        self.shootTimes = 0;
      }

      if (self.shootTimes == 0) {
        self.Attacks[0].shuffle();
      }

      self.Attacks[0][self.shootTimes++]();
    },

    AttackInStage2() {
      let self = this;
      self.EleBody.src = 'images/Zombies/BossB/call.webp';
      self.addTask(380, () => {
        this.EleBody.src = 'images/Zombies/BossB/0.webp';
      });

      if (self.shootTimes >= self.Attacks[1].length) {//self.shootTimes=0;
      }

      self.Attacks[1][self.shootTimes % self.Attacks[1].length](Math.floor(self.shootTimes / self.Attacks[1].length));
      self.shootTimes++;
    },

    AttackInStage3() {
      let self = this;
      self.EleBody.src = 'images/Zombies/BossB/call.webp';
      self.addTask(380, () => {
        this.EleBody.src = 'images/Zombies/BossB/0.webp';
      });

      if (self.shootTimes >= self.Attacks[2].length) {
        self.shootTimes = 0;
      }

      if (self.shootTimes > 0 && Math.random() < 0.2) {
        self.Attacks[1].random()(7);
      } else {
        self.Attacks[2][self.shootTimes]();
        self.shootTimes++;
      }
    },

    Activites() {
      let self = this;

      if (Math.random() < 0.15) {
        oSym.addTask(200, function () {
          self.IceStorm();
        });
      } else {
        if (self.Stage == 1) {
          if (Math.random() < 0.2) {
            self.Move([3, 4].random(), [7, 8].random());
          } else {
            self.AttackInStage1();
          }
        } else if (self.Stage == 2) {
          if (Math.random() < 0.2) {
            self.Move([3, 4].random(), [7, 8].random());
          } else {
            self.AttackInStage2();
          }
        } else {
          self.AttackInStage3();
        }
      }
    },

    getExplosion() {
      let self = this;

      if (self.HP > 13000) {
        self.HP -= 1000;
        self.ChkStage();
      } else if (self.HP > 1000) {
        self.HP -= 300;
        self.ChkStage();
      } else {
        self.HP = 0;
        self.NormalDie();
      }

      oFlagContent.__HeadEle__.className.includes("BOSSHead") && oFlagContent.update({
        curValue: self.HP
      });
    },

    ChkStage() {
      let self = this,
          HP = self.HP,
          oHP = self.__proto__.HP;

      switch (true) {
        case HP < 22500 && self.Stage < 2:
          self.Stage = 2;
          self.shootTimes = 0;
          break;

        case HP < 10000 && self.Stage < 3:
          self.Stage = 3;
          self.shootTimes = 0;
          break;
      }
    }

  });
  oS.Init({
    PName: [oRepeaterk],
    ZName: [oBoss],
    backgroundImage: 'images/interface/Polar2.webp',
    CanSelectCard: 0,
    SunNum: 4000,
    Dkind: 0,
    LevelName: $__language_Array__["2209c1ce3546804dceb5c321c3499a66"],
    ControlFlagmeter: false,
    InitLawnMover: function () {},
    LoadMusic: "Bgm_Polar_Ready_2",
    StartGameMusic: "Fuben_Winter_Fight2",
    LoadAccess: function (a) {
      PlayAudio('Bgm_Polar_Noise', 1);
      NewImg("imgKK", `images/interface/Polar_Mask4.webp`, `left:1100px;`, EDAll);
      NewImg("imgKK", `images/interface/Polar_Mask3.webp`, "left:167px;top:546px;", EDAll);
      jngAlert.open({
        'text': ``,
        'type': 2,
        'shade': 1
      });

      let dom = jngAlert._dom.querySelector('#text');

      NewEle("", "a", "color:white;text-align:center;", {
        innerText: $__language_Array__["81449889e013735163af2e8635dab318"]
      }, dom);
      NewEle("", "br", "", {}, dom);
      NewEle("", "br", "", {}, dom);
      NewEle("", "a", "color:cyan;cursor:pointer;transition:color 0.3s;text-align:center;", {
        innerText: $__language_Array__["10774f4c37ae9df585f2c8e5cb2b6c15"],

        onmouseenter() {
          this.style.color = "yellow";
        },

        onmouseleave() {
          this.style.color = "cyan";
        },

        onclick() {
          jngAlert.close();
          EasyMode = true;
          oSym.addTask(30, a, [0]);
        }

      }, dom);
      NewEle("", "br", "", {}, dom);
      NewEle("", "a", "color:rgb(255,100,100);cursor:pointer;transition:color 0.3s;text-align:center;", {
        innerText: $__language_Array__["80dd565303c44f6115f0640db324408d"],

        onmouseenter() {
          this.style.color = "yellow";
        },

        onmouseleave() {
          this.style.color = "rgb(255,100,100)";
        },

        onclick() {
          jngAlert.close();
          oSym.addTask(30, a, [0]);
        }

      }, dom); //(NewEle('PolarFire2', "div", null, {className: 'PolarFire'}, $('tGround')), NewEle('PolarFire', "div", null, {className: 'PolarFire'}, $('tGround')));          

      oMiniGames.oStg.Init();
    },
    StartGame: function () {
      $("dCardList").style.display = "none";
      StopMusic();
      PlayMusic(oS.LoadMusic = oS.StartGameMusic);
      NewMusic(oS.LoadMusic = oS.StartGameMusic);
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      let c = CustomSpecial(oRepeaterk, 3, 1);
      let s = new oMiniGames.oStg.Obj.CHero();
      s.Birth($(c.id), 150, 290, 75, 75, 4, 330); //s.CanDie=false;

      let boss = PlaceZombie(oBoss, 4, 8, 0);
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
    AZ: [],
    FlagNum: 9,
    FlagToSumNum: {
      a1: [1, 2, 4, 5, 7, 9],
      a2: [0]
    },
    FlagToMonitor: {},

    FlagToEnd() {
      oS.DefaultFlagToEnd();
    }

  });
}