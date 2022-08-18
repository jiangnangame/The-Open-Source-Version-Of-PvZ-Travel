/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oImp, oCaskZombie, oSadakoZombie, oBossA, oFootballZombie],
  PicArr: ["images/interface/Dave.png", "images/interface/Zomboss.png"],
  CanSelectCard: 0,
  LevelName: $__language_Array__["1a5a0b81913dae4bc62ff0249f646df9"],
  StaticCard: 0,
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight",
  InitLawnMover: function () {},
  StartGame: oMiniGames.ConveyorBelt,
  FixedProps: 'disabled',
  LoadAccess: function (callback) {
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, '……');
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["7399e48d909effdd3507b6848b51bc5e"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["70de76ce9d7aab5f53be5039af3dbd34"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["5c9f84833cc23156e67d079ce2962316"]);
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["64c4f988b7c377a05e3390839efcbfea"]);
          count++;
          break;

        case 5:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["5a144c334f1f411f33417613caef7fa6"]);
          count++;
          break;

        case 6:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["a69b790e4f7041ec0df72742e5b87cba"]);
          count++;
          break;

        case 7:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["94a31a93812896f63642dbacdfb5b604"]);
          count++;
          break;

        case 8:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["655ba6573687a7dd3af1da82affe3e78"]);
          count++;
          break;

        case 9:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["896f59ecc639b4922160a5c59c310fd1"]);
          count++;
          break;

        case 10:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e2fcb3a4fd6a4efbc067bed750433b06"]);
          count++;
          break;

        case 11:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong1');
          innerText(DivTeach, $__language_Array__["4d98b4b634dafaa8a56d2a739cae271c"]);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["d76c87b98ebfb45fafba1a351054d0eb"]);
          count++;
          break;

        case 13:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["c8416134ff306df0cdeebe3bacedbc20"]);
          count++;
          break;

        case 14:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["5af9ba21be5bc6d3cf63f98e57f4adde"]);
          count++;
          break;

        case 15:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["ab0b0d97bcab5f0e6e8e934756e51bdc"]);
          count++;
          break;

        case 16:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["02772130b2000e62b711e5c51a3561b9"]);
          count++;
          break;

        case 17:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["9f73148f32387175dd611e178e14efad"]);
          count++;
          break;

        case 18:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["28e6ba97669b794730db50877f2abb30"]);
          count++;
          break;

        case 19:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["17d27446a1a3413121b551e3d85e6a82"]);
          count++;
          break;

        case 20:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["6e964ec4bc1abab3816efd756bd17967"]);
          count++;
          break;

        case 21:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["688f870f073b44a35ff2e7d64933894c"]);
          count++;
          break;

        case 22:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["0a7bc496814af20690f76af800bdf0e8"]);
          count++;
          break;

        case 23:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["79937b93ef4de10b910b316f1ee88c68"]);
          count++;
          break;

        case 24:
          ClearChild(DivTeach, dDave);
          oSym.addTask(30, callback);
      }
    })();
  }
}, {
  AZ: [[oZombie, 2, 1], [oBucketheadZombie, 2, 2], [oConeheadZombie, 2, 2], [oImp, 2, 2], [oCaskZombie, 2, 2], [oSadakoZombie, 2, 10], [oBossA, 1, 21, [21]]],
  FlagNum: 21,
  FlagToSumNum: {
    a1: [1, 3, 5, 9, 10, 13, 15, 18, 20],
    a2: [3, 7, 5, 9, 10, 14, 16, 19, 30, 1]
  },
  FlagToEnd: function () {
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;left:115px;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;", 0, EDAll);
    setTimeout(() => {
      let count = 0,
          DivTeach = NewEle("DivTeach", "div", "position:absolute;left:415px;", 0, EDAll),
          dDave = NewImg("dDave", "", "left:115px;top:81px", EDAll);

      (function fun() {
        DivTeach.onclick = fun;

        switch (count) {
          case 0:
            DivTeach.onclick = null;
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss3');
            innerText(DivTeach, $__language_Array__["78851268b6b490b3f52a541ba3b6f961"]);
            oEffects.fadeIn(effect, 'slow', () => DivTeach.onclick = fun);
            count++;
            break;

          case 1:
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["e82b89cc844af7e532083c0518c3d6dc"]);
            count++;
            break;

          case 2:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["a6f80d3ee7bbc740f812cfd352a0ad81"]);
            count++;
            break;

          case 3:
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["4a4df78a4a35785e5c03c45ce0fd8c17"]);
            count++;
            break;

          case 4:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["31cfae74229feedbb9f4baa48b59168b"]);
            count++;
            break;

          case 5:
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["a01ff0dcabfcd8c3badbbdb379d50df4"]);
            count++;
            break;

          case 6:
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["a977b7d4ee72b3d4f74eb8f5a0fbe2d3"]);
            count++;
            break;

          case 7:
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["e10586f5db9c1f47a3e59db833eeb5c5"]);
            count++;
            break;

          case 8:
            PlayAudio('Zomboss3');
            innerText(DivTeach, $__language_Array__["951ffb77d747cda6878f296bc419b6d9"]);
            count++;
            break;

          case 9:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, '……');
            count++;
            break;

          case 10:
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["dbd13cc86397db34a4a4ef66ee3bbda5"]);
            count++;
            break;

          case 11:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["6757a58a2a06e18ac9112faf61e87d86"]);
            count++;
            break;

          case 12:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, '……');
            count++;
            break;

          case 13:
            dDave.src = 'images/interface/Zomboss.png';
            PlayAudio('Zomboss3');
            innerText(DivTeach, $__language_Array__["edd0243337aaf5b521cfc6eb77eb137c"]);
            count++;
            break;

          case 14:
            PlayAudio('Zomboss1');
            innerText(DivTeach, $__language_Array__["8736efdb4ee3ffa3c01d2f9024f745b2"]);
            count++;
            break;

          case 15:
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["bda927e32045da61c70b65bdc5af1ef4"]);
            count++;
            break;

          case 16:
            PlayAudio('Zomboss2');
            innerText(DivTeach, $__language_Array__["a7849adb1b3d33201d55891f15a19766"]);
            count++;
            break;

          case 17:
            dDave.src = 'images/interface/Black_Dave.png';
            PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
            innerText(DivTeach, $__language_Array__["8d67712af04f2813c51a24a9b7ecf61d"]);
            count++;
            break;

          case 18:
            oEffects.Animate(effect, {
              background: "rgba(0,0,0,1)"
            }, 2);
            ClearChild(DivTeach, dDave);
            callback();
        }
      })();
    }, 500);

    function callback() {
      let Silence = oS.Silence;
      let oMenuOpen = oMenu.open;

      oMenu.open = () => {};

      StopMusic();
      oS.Silence = true;
      oS.CoinRatio = 0;
      oS.isStartGame = 1;
      CSpeed(1);
      oS.ControlFlagmeter = 0;
      oP.FlagZombies = oP.FlagNum = 0;

      oP.MonPrgs = _ => {};

      SetNone($("dCardList"), $("tdShovel"), $("dMenu"));
      SetHidden($("dFlagMeter"), $("dFlagMeterContent"));
      oP.FlagToSumNum = {
        a1: [1],
        a2: [0]
      };

      for (let i of $Z) {
        i.DisappearDie();
      }

      let plant = hasPlants();

      for (let i of plant) {
        i.Die();
      }

      ResetGame();

      for (let i = 1; i <= 5; i++) {
        let p = CustomSpecial(oSunShroom, i, 2);

        p.ProduceSun = () => {};

        p = CustomSpecial(oSunShroom, i, 1);

        p.ProduceSun = () => {};

        CustomSpecial(oScaredyShroom, i, 3);
        CustomSpecial(oFumeShroom, i, 4);
        p = CustomSpecial(oWallNut, i, 5);
        p.HP = Infinity;
      }

      for (let i = 0; i < 20; i++) {
        oSym.addTask(300 * Math.random() + 1, () => {
          PlaceZombie([oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie, oImp].random(), [1, 2, 3, 4, 5].random(), [6, 7, 8, 9].random(), 0);
        });
      }

      let stopped = false;
      oSym.addTask(300, function loop() {
        oSym.addTask(50 * Math.random(), () => {
          PlaceZombie([oZombie, oZombie, oImp, oZombie, oImp, oConeheadZombie, oConeheadZombie, oBucketheadZombie, oImp].random(), [1, 2, 3, 4, 5].random(), 11, 0);
        });

        if (!stopped) {
          oSym.addTask(90 * Math.random() + 130, loop);
        }
      });
      oSym.addTask(300, () => {
        oEffects.Animate(effect, {
          background: "rgba(0,0,0,0.6)"
        }, "slow", "linear", ele => {
          //oS.Silence = Silence;
          let textBox = NewEle("", "div", "position: absolute;opacity:0;z-index:299; left: 115px; top: 288px; line-height: 24px; font-size: 24px; width: 900px; height: 24px; text-align: center;color:white;", {}, EDAll);
          let arr = [$__language_Array__["2dffa8d2a4a4bf7910d7ad45aa7ddbd9"], $__language_Array__["e12dcfa2bf148ac285c04f42fe33df5f"], $__language_Array__["67e313d3dff469d85376d39b1a04d39d"]];

          for (let i = 0; i < arr.length; i++) {
            oSym.addTask(500 * i, () => {
              textBox.innerText = arr[i];
              oEffects.Animate(textBox, {
                opacity: 1
              }, 1);
              oSym.addTask(399, () => {
                oEffects.Animate(textBox, {
                  opacity: 0
                }, 1);
              });
            });
          }

          oSym.addTask(arr.length * 500 + 100, () => {
            oEffects.Animate(effect, {
              background: "black"
            }, 1, "linear", () => {
              stopped = true;

              for (let i of $Z) {
                i.DisappearDie();
              }

              let plant = hasPlants();

              for (let i of plant) {
                i.Die();
              }

              setTimeout(() => {
                oS.Silence = Silence;
                oMenu.open = oMenuOpen;
                PauseGame();
                setTimeout(() => {
                  oS.isStartGame = 2;
                  $("dFlagMeter").style.display = $("dFlagMeterContent").style.display = "";
                  $("dMenu").style.display = "";
                  oS.DefaultFlagToEnd();
                }, 300);
              }, 300);
            });
          });
        });
      });
      /*NewImg("imgSF", "images/interface/Clearance_reward.png", "left:260px;top:233px", EDAll, {
          onclick: function() {
              GetWin(this, NextLevel())
          }
      });*/
    }
  }
});