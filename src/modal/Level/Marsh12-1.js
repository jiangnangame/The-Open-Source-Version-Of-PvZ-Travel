/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  LoadMusic: "Bgm_Marsh_Plot2",
  StartGameMusic: "Bgm_Marsh_Ready",
  LoadAccess: function (callback) {
    CSpeed(1);
    let blackShade = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:258;width:900px;height:600px;background:black;opacity:1;", 0, EDAll);
    let tmpkeydown = EBody.onkeydown;

    EBody.onkeydown = () => {};

    let timer = 0;
    let timer_lock = false;
    let canclick = true;
    let nextEvent = [];
    let position = {
      x: 0,
      y: 0
    };
    let stateSave = {};
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let changeDia = daveRemainTalk();
    /*
    {
        time:
        event:
    }
    */

    (function preload(src) {
      let vid_ = NewEle("", "video", "position:absolute;top:0;left:0px;z-index:258;height:600px;opacity:0;", {
        src: "images/Props/Marsh12/ghost.webm"
      });
      let vid = NewEle("", "video", "position:absolute;top:0;left:0px;z-index:258;height:600px;opacity:0;", {
        src: "images/Props/Marsh12/Anim.webm"
      }); //vid.onload = vid.onerror = function(){};
    })();

    let timeDom = NewEle("txt_time", "span", "position:absolute;top:2px;left:2px;pointer-event:none;z-index:258;color:white;", 0, EDAll);
    let positionDom = NewEle("txt_pos", "span", "position:absolute;top:25px;left:2px;pointer-event:none;z-index:258;color:white;", 0, EDAll);
    let mobileKey = NewEle("", "div", "position:absolute;left:25px;bottom:25px;z-index:301;", 0, EDAll);
    {
      let pos = [[0, 0, "◀"], [62, 62, "▲"], [124, 0, "▶"], [62, 0, "▼"]];

      for (let i = 0; i < pos.length; i++) {
        let Key = NewEle("", "div", `transition:background 0.2s,color 0.2s;color:white;text-align:center;line-height:60px;position:absolute;left:${pos[i][0]}px;bottom:${pos[i][1]}px;width:60px;height:60px;background:rgba(255,255,255,0.2);border:2px solid white;`, {
          innerText: pos[i][2],

          onmousedown() {
            this.style.background = "black";
            this.style.color = "white";
          },

          onmouseup() {
            this.style.background = "rgba(255,255,255,0.2)";
            this.style.color = "white";
            chkKey({
              which: 37 + i
            });
            console.log(37 + i);
          },

          onmouseleave() {
            this.style.background = "rgba(255,255,255,0.2)";
            this.style.color = "white";
          },

          onmouseenter() {
            this.style.background = "white";
            this.style.color = "black";
          }

        }, mobileKey);
      }
      /*if(!Mobile){
          mobileKey.style.display="none";
      }*/

    }
    ;

    if (!localStorage.JNG_DEV) {
      timeDom.style.display = "none";
      positionDom.style.display = "none";
    }

    oSym.addTask(1, function t() {
      if (!timer_lock) {
        timer++;
        timeDom.innerText = timer / 100 + "s";
      }

      if (nextEvent.length > 0 && timer >= nextEvent[0].time) {
        nextEvent[0].event(); //console.log(nextEvent[0].time,nextEvent);

        nextEvent.splice(0, 1); //console.log(nextEvent);
      }

      oSym.addTask(1, t);
    });

    function NuoFuShow() {
      //显示懦夫并重新开始
      $("talkBox").style.display = "none";

      for (let i = 1; i < 70; i++) {
        oSym.addTask(Math.random() * 100, () => {
          let k = $__language_Array__["30588f11726c27438661db879e4fdd56"];
          let leftRandom = Math.random() * (860 - k.length * 18);
          aTextSummon(k, [leftRandom, Math.random() * 560]);
        });
      }

      addEvent(101, () => {
        oEffects.Animate(blackShade, {
          background: "white"
        }, 2.8);
      });
      localStorage.JNG_PVZTR_HARD_MARSH12 = 1;
      addEvent(401, () => {
        EBody.removeEventListener("keyup", chkKey);
        EBody.onkeydown = tmpkeydown;
        SelectModal("Marsh12");
      });
    }

    function PlayAnim() {
      let left = -(600 / 720 * 1280 - 900) / 2;
      let dom = NewEle("", "video", "position:absolute;top:0;left:" + left + "px;z-index:300;height:600px;opacity:0;", {
        src: "images/Props/Marsh12/Anim.webm",
        autoplay: true,
        loop: false,
        muted: true
      }, EDAll);
      oEffects.Animate(dom, {
        opacity: 1
      }, 1);
      oSym.addTask(400, () => {
        let whiteShade = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:358;width:900px;height:600px;background:white;opacity:0;", 0, EDAll);
        oEffects.Animate(whiteShade, {
          opacity: 1
        }, 2, "ease-in", () => {
          oSym.addTask(100, () => {
            EBody.removeEventListener("keyup", chkKey);
            EBody.onkeydown = tmpkeydown;
            SelectModal("Marsh13");
          });
        });
      });
    }

    function addEvent(time, event) {
      time = timer + time; //console.log("beforeAdd",nextEvent);

      nextEvent.push({
        time: time,
        event: event
      }); //console.log("Add",nextEvent);

      nextEvent.sort(function (a, b) {
        return a.time > b.time ? 1 : -1;
      }); //console.log("sort",nextEvent);
    }

    changeDia($__language_Array__["0b0c0eb81142707b9aeed47f0be33376"]);
    {
      let tmpPosition = position;
      addEvent(500, function loop() {
        if (position.x !== 0 || position.y !== 0) {
          return;
        }

        if (tmpPosition === position) {
          changeDia($__language_Array__["6d15c5ddb85e5172e4a373315c984422"]);
        }

        tmpPosition = position;
        addEvent(500, loop); //console.log(nextEvent);
      });
    }
    ;
    EBody.addEventListener("keyup", chkKey);

    function chkKey(e) {
      if (!canclick) {
        return;
      }

      let key = e.which || e.keyCode;

      if (key >= 37 && key <= 40) {
        position = {
          x: position.x + dx[key - 37],
          y: position.y + dy[key - 37]
        };
        checkPosition();
        positionDom.innerText = `(${position.x},${position.y})`;
      }
    }

    function checkPosition() {
      let tmpPosition = position;

      if (!stateSave["y=1"] && !stateSave["y=2"]) {
        if (position.y === 0 && position.x !== 0) {
          position = {
            x: 0,
            y: 0
          };
          changeDia($__language_Array__["6d15c5ddb85e5172e4a373315c984422"]);
        }

        if (position.y === -1 && position.x === 0) {
          changeDia($__language_Array__["b4559dc5ccb54638a93e2fce5ab37732"]);
        }

        if (position.y === -5 && position.x === 0) {
          changeDia($__language_Array__["ecf9a86a70a7fc0e71a83b4f86bfa36e"]);
        }

        if (position.y === -7 && position.x === 0) {
          changeDia($__language_Array__["c8cff08cde6863c328b7dc81e8ec96ef"]);
        }

        if (position.y === -15 && position.x === 0) {
          changeDia($__language_Array__["f17f8d1cf1bc705d2af7dffc6984025a"]);
        }

        if (position.y === -19 && position.x === 0) {
          changeDia($__language_Array__["18031d4ed98b6ec8f16eb35d11d298fd"]);
        }

        if (position.y === -28 && position.x === 0) {
          changeDia($__language_Array__["1a88900b2cceb004b3a033e5dceb2371"]);
        }

        if (position.y === -29 && position.x === 0) {
          changeDia($__language_Array__["3a131b9e248e818624a55b9a32c5be03"]);
          addEvent(1, () => {
            oEffects.Animate(blackShade, {
              background: "white"
            }, 2.8);
          });
          localStorage.JNG_PVZTR_HARD_MARSH12 = 1;
          addEvent(301, () => {
            EBody.removeEventListener("keyup", chkKey);
            EBody.onkeydown = tmpkeydown;
            SelectModal("Marsh12");
          });
        }
      }

      if (position.y < 1 && stateSave["y=1"] && !stateSave["y=2"] && !stateSave["y=3"]) {
        if (position.x != 0) {
          position.x = 0;
        }

        if (position.y === 0) {
          changeDia($__language_Array__["4efb1def70d8e68bfa57fc540fb5fa68"]);
        }

        if (position.y === -1) {
          NuoFuShow(); //显示懦夫并重新开始
        }
      }

      if (!stateSave["y=2"]) {
        if (!stateSave["y=1"] && position.y === 1) {
          position.x = 0;
        }

        if (position.y === 1 && position.x === 0) {
          stateSave["y=1"] = true;
          changeDia($__language_Array__["05d53132d2afb3dce54e09e1d43658b0"]);
          addEvent(500, function dia(index = 0) {
            let time = [200, 800, 400, 900, 100];
            let arr = [$__language_Array__["4586f5bd4eecff246a8817f86a2f3730"], $__language_Array__["d1f4ad788482cf1434f85ddc07bc5178"], $__language_Array__["b1e7aca5ed92db9c26050e0e6149ff11"], $__language_Array__["aa0e1ddbaf45c6998797b7e9f022efe9"], $__language_Array__["4e5c4b1ea24ca913e7f5066fb3119a96"], $__language_Array__["ff4d1ee8e5981b01ac577c70b6bdcbcb"]];

            if (tmpPosition === position) {
              changeDia(arr[index]);

              if (index < time.length) {
                addEvent(time[index], () => {
                  dia(index + 1);
                });
              }
            }
          });
        }

        if (position.y === 1 && position.x <= -1) {
          position.x = -1;

          if (!stateSave["-1_1"]) {
            stateSave["-1_1"] = true;
            changeDia($__language_Array__["65a0d79e1ddd81d89b120da2f4fc4cf0"]);
          } else {
            changeDia($__language_Array__["409c474708c2e3fbad82d565025e4062"]);
          }
        }

        if (position.y === 1 && position.x >= 1) {
          position.x = 1;
          changeDia($__language_Array__["409c474708c2e3fbad82d565025e4062"]);
        }
      }

      if (position.y === 2) {
        if (position.x != 0 && !stateSave["y=2"]) {
          position.x = 0;
        }

        stateSave["y=2"] = true;

        if (position.x === 0) {
          changeDia($__language_Array__["d098d085d513f74cc87a50e218b9824b"]);
        }

        if (position.x <= -1 || position.x >= 1) {
          stateSave["-1_2"] = true;
          position.x = position.x / Math.abs(position.x);
          changeDia($__language_Array__["8bcee511abffc8419262fd5a85eafbca"]);
          addEvent(30, () => {
            changeDia($__language_Array__["ed3b5a99e669596cc0cc58758880f7e7"]);
            addEvent(1, () => {
              canclick = true;
            });
          });
        }
      }

      if (stateSave["y=2"] && !stateSave["y=3"]) {
        if (position.y < 2) {
          position.x = 0;
        }

        if (position.y === 1) {
          changeDia($__language_Array__["c9b8057fee89021a818840f3b136a66c"]);
        }

        if (position.y === 0) {
          NuoFuShow();
        }
      }

      if (stateSave["y=3"]) {
        if (position.y < 3) {
          position.x = 0;
        }

        if (position.y === 2) {
          changeDia($__language_Array__["8d93a1ac4b2e4814248c2f8a60f6e965"]);
        }

        if (position.y === 1) {
          NuoFuShow();
        }
      }

      if (position.y === 3) {
        if (!stateSave["-1_2"]) {
          position.y = 2;
          position.x = 0;
          oEffects.Animate(blackShade, {
            background: "rgba(160,0,0,1)"
          }, 0.2, "linear", () => {
            oSym.addTask(1, () => {
              oEffects.Animate(blackShade, {
                background: "black"
              }, 0.2);
            });
          });
          changeDia($__language_Array__["9b1dee10b4c53c78e26029dcad6a5f3f"]);
        } else {
          (function color(c = "rgba(160,0,0,1)") {
            if (position.y > 3) {
              return;
            }

            oEffects.Animate(blackShade, {
              background: c
            }, 0.3, "linear", () => {
              oSym.addTask(1, color, [c == "black" ? "rgba(160,0,0,1)" : "black"]);
            });
          })();

          if (!stateSave["y=3"]) {
            position.x = 0;
          }

          stateSave["y=3"] = true;

          if (position.x === 0) {
            changeDia($__language_Array__["f6562835a5949d313c01b9e1faf5d982"]);
            addEvent(500, function dia(index = 0) {
              let time = [200, 800, 400, 900, 100];
              let arr = [$__language_Array__["359370b6a23cbe5edcb8fa9288d7f8dd"], $__language_Array__["1df389dadef4d3500329b3beb36ff3ba"], $__language_Array__["53ca7e991137c5bfa6de7ce876ab56b4"], $__language_Array__["f853287f35e67eb7b01fd217428a60f6"], $__language_Array__["c3b0867cf670d677e660325b8184e12d"], $__language_Array__["3ec2fb5e44c9649b25758755523521c2"]];

              if (tmpPosition === position) {
                if (index == 4) {
                  let dom = NewImg("", "images/interface/Clearance_reward.png", "position:absolute;z-index:300;left:300px;top:100px;", EDAll);
                  PlayAudio("winmusic");
                  changeDia(" ");
                  addEvent(600, () => {
                    changeDia(arr[index]);

                    if (index < time.length) {
                      addEvent(time[index], () => {
                        dia(index + 1);
                        ClearChild(dom);
                      });
                    }
                  });
                } else {
                  changeDia(arr[index]);

                  if (index < time.length) {
                    addEvent(time[index], () => {
                      dia(index + 1);
                    });
                  }
                }
              }
            });
          } else if (Math.abs(position.x) === 1) {
            changeDia($__language_Array__["51179e1af1c0a53f7929f0a719227358"]);
            addEvent(1000, function dia(index = 0) {
              let time = [1000, 1000, 1000, 3, 6000];
              let arr = [$__language_Array__["4169fcb8fd8fc1463d1a297b40b9c301"], $__language_Array__["4e799df66485f57e875a9b45858e9a2d"], $__language_Array__["b71991792564010eae56ebaa5d4ec876"], $__language_Array__["8f048489c432fe7282ef9295e1b6af83"], $__language_Array__["4292d38deb9d4f06c68ae872a7cd9f51"], $__language_Array__["b8f92cd14b12948c0902767e52674e4a"]];

              if (tmpPosition === position) {
                if (index == 5) {
                  changeDia(arr[index]);
                  stateSave["-1_3"] = true;
                } else {
                  changeDia(arr[index]);

                  if (index < time.length) {
                    addEvent(time[index], () => {
                      dia(index + 1);
                    });
                  }
                }
              }
            });
          }
        }
      }

      if (position.y === 4) {
        blackShade.style.background = "black";

        if (stateSave["-1_3"]) {
          changeDia($__language_Array__["318dc9517276cf58009a5dcf58853ede"]);
          addEvent(1, () => {
            StopMusic();
            PlayAudio("Rifter_Summon2");
            addEvent(250, () => {
              changeDia($__language_Array__["230cff11927755dc35904e6694b52773"]);
              addEvent(50, () => {
                PlayAnim();
              });
            });
          });
        } else {
          let stoped = false;

          (function color(c = "rgba(160,0,0,1)") {
            if (stoped) {
              blackShade.style.background = "black";
              return;
            }

            oEffects.Animate(blackShade, {
              background: c
            }, 0.1, "linear", () => {
              oSym.addTask(1, color, [c == "black" ? "rgba(160,0,0,1)" : "black"]);
            });
          })();

          PlayAudio("Rifter_Summon2");
          ClearChild($("talkBox"));
          oAudio[oS.LoadMusic].playbackRate = 0.3;
          oSym.addTask(300, () => {
            let dom = NewEle("", "video", "position:absolute;top:0;left:0px;z-index:258;height:600px;opacity:0;", {
              src: "images/Props/Marsh12/ghost.webm",
              autoplay: true,
              loop: false,
              muted: true
            }, EDAll);
            oEffects.Animate(dom, {
              opacity: 1
            }, 0.2, "linear", () => {
              oEffects.Animate(dom, {
                filter: "invert(100%)"
              }, 0.5);
            });
            oSym.addTask(100, () => {
              stoped = true;
              ClearChild(dom);
              oAudio[oS.LoadMusic].playbackRate = 1;
              StopMusic();
              oSym.addTask(200, () => {
                PlayAnim();
              });
            });
          });
        }
      }

      canclick = false;

      if (!(position.y === -29 && position.x === 0) && !(position.y === -1 && position.x === 0 && stateSave["y=1"]) && !(position.y === 2 && Math.abs(position.x) === 1) && !(position.y === 4)) {
        addEvent(1, () => {
          canclick = true;
        });
      }
    }

    function daveRemainTalk() {
      let talkBox = NewEle("talkBox", "div", " word-break: break-all; z-index: 300; padding: 20px 20px 20px; color: white; font-size: 20px; position: absolute; bottom: 0px; left: 150px; height: 300px; width: 600px; background: rgba(30, 30, 30, 0.5);", 0, EDAll);
      let arr = [$__language_Array__["0b0c0eb81142707b9aeed47f0be33376"] //0
      ];
      let man = "";
      let index = -1;
      let interval = 40;
      let special = {
        "。": 250,
        "，": 150,
        "…": 350
      };
      let nowCompleted = false;
      let playid;

      function change(str) {
        arr[0] = str;
        index = -1;
        timer_lock = true; //timer = 0;

        playid = Math.random();
        play();
        return () => {
          return nowCompleted;
        };
      }

      function play() {
        let tmpid = playid;
        nowCompleted = false;
        index++;
        let str = arr[index].split($__language_Array__["75b7a5016962900e3b5a584144ebc56b"]);

        if (str.length == 1) {
          str = [man, arr[index]];
        }

        if (str[0] != man) {
          man = str[0];
        }

        talkBox.innerText = man ? man + $__language_Array__["75b7a5016962900e3b5a584144ebc56b"] : "";
        let splitedChar = str[1].split("");
        let charIndex = 0;
        let tmpFinalStr = talkBox.innerText;
        let compareIndex = index;
        setTimeout(function f() {
          if (index != compareIndex || charIndex >= splitedChar.length || nowCompleted || tmpid != playid) {
            if (charIndex >= splitedChar.length && !nowCompleted && tmpid === playid) {
              nowCompleted = true;
              timer_lock = false;
            }

            return;
          } //console.log(splitedChar[charIndex]);


          tmpFinalStr += splitedChar[charIndex++];
          talkBox.innerText = tmpFinalStr;
          setTimeout(f, special[splitedChar[charIndex - 1]] ? special[splitedChar[charIndex - 1]] : interval);
        }, interval);
      }

      ; //talkBox.click();

      return change;
    }

    function colorSVG(randomPX, time = 1) {
      let svgId = "color" + Math.random();

      function rand() {
        return Math.random() * randomPX - randomPX / 2;
      }

      let rands = [];

      for (let i = 0; i < 6; i++) {
        rands.push(rand());
      }

      return [svgId, `
            <svg>
                <filter id="${svgId}">
                
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0" result="red"/>
                    <feOffset in="red" dx="${rands[0]}" dy="${rands[1]}" result="red_offset">
                        <animate attributeName="dx" from="${rands[0]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[1]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                0 1 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0" result="green"/>
                    <feOffset in="green" dx="${rands[2]}" dy="${rands[3]}" result="green_offset">
                        <animate attributeName="dx" from="${rands[2]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[3]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feColorMatrix in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 1 0 0
                                0 0 0 1 0" result="blue"/>
                    <feOffset in="blue" dx="${rands[4]}" dy="${rands[5]}" result="blue_offset">
                        <animate attributeName="dx" from="${rands[4]}" to="0" dur="${time}s" repeatCount="1"/>
                        <animate attributeName="dy" from="${rands[5]}" to="0" dur="${time}s" repeatCount="1"/>
                    </feOffset>
                    <feBlend mode="lighten" in="red_offset" in2="green_offset" result ="blend1"/>
                    <feBlend mode="lighten" in="blend1" in2="blue_offset" result ="blend1"/>
                </filter>
            </svg>
            `];
    }

    function aTextSummon(text, pos) {
      let svg_ = colorSVG(1000, 10000);
      let nullDom = NewEle("", "div", "display:none;", {}, EDAll);
      let textBox = NewEle("", "span", "z-index:258;position:absolute;color:white;top:" + pos[1] + "px;left:" + pos[0] + "px;font-size:" + Math.floor(18 + Math.random() * 20) + "px;opacity:0;", {
        innerText: text
      }, EDAll);
      nullDom.innerHTML = svg_[1];
      textBox.style.filter = "url(#" + svg_[0] + ")";
      oEffects.Animate(textBox, {
        opacity: 1
      }, 0.2);

      function glitch() {
        for (let i = 1; i < 4; i++) {
          oSym.addTask((5 - i) * Math.random() + i * 5, _ => {
            svg_ = colorSVG(60 - i * 15, 0.4);
            nullDom.innerHTML = svg_[1];
            textBox.style.filter = "url(#" + svg_[0] + ")";

            if (i == 3) {
              oSym.addTask(20, () => {
                nullDom.innerHTML = "";
              });
            }
          });
        }
      }

      glitch();
      oSym.addTask(400, () => {
        oSym.addTask(10, () => {
          glitch();
        });
        oEffects.Animate(textBox, {
          opacity: 0
        }, 0.3, "linear", ClearChild);
      });
    }
  }
});