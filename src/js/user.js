/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let rc4 = (data, key) => {
    var i, j, k, tmp, a;
    var pwd = key;
    var cipher = '';
    var key = [];
    var box = [];
    var pwd_length = pwd.length;
    var data_length = data.length;

    for (i = 0; i < 256; i++) {
      key[i] = pwd[i % pwd_length].charCodeAt();
      box[i] = i;
    }

    for (j = i = 0; i < 256; i++) {
      j = (j + box[i] + key[i]) % 256;
      tmp = box[i];
      box[i] = box[j];
      box[j] = tmp;
    }

    for (a = j = i = 0; i < data_length; i++) {
      a = (a + 1) % 256;
      j = (j + box[a]) % 256;
      tmp = box[a];
      box[a] = box[j];
      box[j] = tmp;
      k = box[(box[a] + box[j]) % 256];
      cipher += String.fromCharCode(data[i].charCodeAt() ^ k);
    }

    return cipher;
  };

  window.DataManager = {
    XHR: function () {
      if (!(navigator.onLine && /(http:\/\/)|(https:\/\/)/.test(location.href))) {
        return "local";
      }

      let xhr = new XMLHttpRequest();
      return xhr;
    },

    SetAchievement(key, value) {
      $User.Achievement[key] = value;
      localStorage.JNG_TR_Achievement = JSON.stringify($User.Achievement);
      PlayAudio("Achievement");
    },

    SetAchievements(data) {
      if (data.length == 0) {
        return;
      }

      for (let i in data) {
        $User.Achievement[i] = data[i];
      }

      localStorage.JNG_TR_Achievement = JSON.stringify($User.Achievement);
      PlayAudio("Achievement");
    },

    CheckAchievement(type, ...arr) {
      let data = {};

      let ps = function (name, ach, type = $__language_Array__["95d001bcead770c985b0a185c2599b35"]) {
        PlaySubtitle(`${$__language_Array__["02717ef3f8b4f0a331beec2c48bb8959"][0]}${type}${$__language_Array__["02717ef3f8b4f0a331beec2c48bb8959"][1]}${name}`);
        oSym.addTask(500, function () {
          PlaySubtitle();
        });
        data[ach[0]] = ach[1];
      };

      let chk = function (cname, name, value, fun) {
        if (!$User.Achievement[name] && fun()) {
          ps(cname, [name, value]);
        }
      };

      switch (type) {
        case "lvl":
          let ls = arr[0];
          let winnum = ls.length;
          chk($__language_Array__["ffe1964b3aa8bf43dcf2606a661b76d0"], "New_Travel", 1, _ => {
            return ls[`Forest1`];
          });
          chk($__language_Array__["b3a263cb218e4a6508409545054ee1a3"], "The_Star_Night", 1, _ => {
            return ls[`Marsh20`];
          });
          chk($__language_Array__["3e1dd8fb28405bd05fcad385f1b6aad2"], "The_Ice_Winner", 1, _ => {
            return ls[`Polar30`];
          });
          chk($__language_Array__["f36d48bc6c1cbd730eb957b0d14a0563"], "Industry_PART2_WIN", 1, _ => {
            let flag = true;

            for (let i = 11; i <= 20; i++) {
              if (!ls["Industry" + i]) {
                flag = false;
                break;
              }
            }

            return flag;
          });
          chk($__language_Array__["6372371b49eb3288c8f979767700be0a"], "Industry_PART3_WIN", 1, _ => {
            let flag = true;

            for (let i = 21; i <= 24; i++) {
              if (!ls["Industry" + i]) {
                flag = false;
                break;
              }
            }

            return flag;
          });

          if (winnum >= 90) {
            chk($__language_Array__["c8db33c353da2dd1d10758f32069f9ad"], "Winner_LEVEL3", 1, _ => {
              return true;
            });
          }

          if (winnum >= 60) {
            chk($__language_Array__["a19a36a2943b4ce8786265a84e7f91b0"], "Winner_LEVEL2", 1, _ => {
              return true;
            });
          }

          if (winnum >= 30) {
            chk($__language_Array__["3ac55d088d98848d7f70b3edd86da7e2"], "Winner_LEVEL1", 1, _ => {
              return true;
            });
          }

          break;
      }

      DataManager.SetAchievements(data);
    },

    href: location.origin + location.pathname,
    Web: localStorage.JNG_DEV && /localhost/.test(location.hostname) ? "localhost" : "pvz.jiangnangame.com",
    Login: function (userName, passWord, type = "login") {
      if (!userName || !passWord || userName === "local") {
        return;
      }

      let dm = DataManager;
      let xhr = dm.XHR();
      let url = DataManager.href.substring(0, DataManager.href.lastIndexOf("/") + 1) + "upload/user/";

      if (dm.XHR == "local") {
        return false;
      }

      ;
      xhr.open("POST", url + "login.php");
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      [userName, passWord] = [encodeURIComponent(userName), encodeURIComponent(passWord)];
      xhr.send(`user=${userName}&pw=${passWord}&type=${type}`); //发送请求

      if (type == "login") {
        let run = _ => {};

        xhr.onload = function () {
          let text = xhr.responseText;
          let flag = 0;

          switch (text) {
            case "false":
              text = $__language_Array__["9c70aa6f7328026e2909898e4ef52824"];
              break;

            case "none":
              text = $__language_Array__["26db9f147ace75a53c25d22e086e34dc"];
              break;

            default:
              let json = JSON.parse(xhr.responseText);

              if (json.data) {
                text = $__language_Array__["ff4f3d6f477cadeb8f6aa1785b33a5fd"];
                flag = 1;
                run = DataManager.LOAD;
              } else {
                text = $__language_Array__["9f5cb0cc56043f0de9cf225adb83a235"];
              }

              $User.Name = localStorage.name = userName;
              $User.Tag = localStorage.tag = json.tag;
          }

          jngAlert.open({
            text: text,
            type: flag,
            shade: true,
            nextHandler: run
          });
        };
      } else {
        xhr.onload = function () {
          let text = xhr.responseText;

          switch (text) {
            case "false":
              text = $__language_Array__["788aad70ec708d97d5d8fd292dfd2c6d"];
              break;

            case "used":
              text = $__language_Array__["6d4414ede4f769cbf8283024dae1354e"];
              break;

            default:
              text = $__language_Array__["dcdb6ff7a8d373f26ed0041b5089a958"];
              $User.Name = localStorage.name = userName;
              $User.Tag = localStorage.tag = xhr.responseText;
          }

          jngAlert.open({
            text: text,
            type: 0,
            shade: true
          });
        };
      }
    },

    getSaveData() {
      let str = JSON.stringify(localStorage);

      if (!str) {
        return "";
      }

      Math.seed = str.length;
      let key = 0;

      for (let i = 1; i < 32; i++) {
        key += Math.seededRandom(1000, 1);
      }

      key = btoa(key.toString());
      let t = str.length << 2;
      let res = btoa(t + "\n" + btoa(rc4(str, key))); //PlayAudio("UnlockLimit");

      return res;
    },

    readData(text) {
      if (text) {
        try {
          let strA = atob(text).split("\n");
          let q = Number(strA[0]) >> 2;
          Math.seed = q;
          let key = 0;

          for (let i = 1; i < 32; i++) {
            key += Math.seededRandom(1000, 1);
          }

          key = btoa(key.toString()); //PlayAudio("UnlockLimit");

          let local = JSON.parse(JSON.stringify(localStorage));
          let obj = JSON.parse(rc4(atob(strA[1]), key));

          for (let i in obj) {
            localStorage[i] = obj[i];
          }

          for (let i in local) {
            if (localStorage[i] && local[i] && !obj[i]) {
              delete localStorage[i];
            }
          }

          jngAlert.open({
            text: $__language_Array__["83a90f9d794398f152ec3bf9ce303110"],
            type: 0,
            shade: true
          });
        } catch (err) {
          jngAlert.open({
            text: $__language_Array__["f324d088f89141b1a77a815323b298c1"],
            type: 0,
            shade: true
          });
        }
      }
    },

    localStart: /file:\/\/\//.test(location.href),

    LoginTip() {
      let CantSave = true;
      let buttonOnMouse = `
            onmouseenter="this.style.backgroundColor='white';this.style.color='black';" 
            onmouseleave="this.style.backgroundColor='';this.style.color='white';"
        `;
      let buttonCssText = `
            padding:5px;
            border:2px solid white;
            cursor:pointer;
            transition:background-color 0.2s,color 0.2s;
        `;
      let shade = NewEle("", "div", `position:absolute;top:0;left:0;width:900px;height:600px;`, {}, EDAll);
      let no_border_button_mouseon = `onmouseleave="this.style.color='white';" onmouseenter="this.style.color='yellow';"`;
      let backButtonHTML = `<a id="close_the_login_pedal" ${no_border_button_mouseon} style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);${buttonCssText}border:0;font-size:1.2em;">${$__language_Array__["b68f15fdf122a64af6666151910a5f4c"]}</a>`;
      let loginInputBoxStyle = `height:1.4em;border-radius:5px;padding-left:10px;background:rgba(0,0,0,0.2);border:1px solid white;color:white;`; //let switchLanguageHTML = `<select id="languageSelect" style="width: 150px;border-radius:3px;"><option value="zh-cn">${"简体中文"}</option><option value="en-us">English</option></select><br/><br/>`;

      let box = NewEle("", "div", `
            height:450px;
            width:350px;
            left:275px;
            top:75px;
            position:absolute;
            background:rgba(0,0,0,0.8);
            border-radius:5px;
            opacity:0;
            transform:rotateX(30deg) rotateY(90deg) scale(1.2);
        `, {
        innerHTML: `
                <center style="position:relative;color:white;font-size:1.1em;padding-top:20px;height:430px;width:100%;">
                    <h3>${$__language_Array__["7da469dccb66c60a16685f6c476c4af8"]}${$User.Name == "local" ? $__language_Array__["c3e748541ebd5a8ebb18020fbf380ab3"] : decodeURI($User.Name)}</h3><br/>
                    <a id="copy_content" ${buttonOnMouse} style="position:relative;${buttonCssText}">${$__language_Array__["87c327fc1d3e9875223a8308f2024543"]}</a><br/><br/>
                    <a id="paste_content" ${buttonOnMouse} style="position:relative;${buttonCssText}">${$__language_Array__["e26ccab35418b29b990dacf92a7beaf5"]}</a><br/><br/>
                    ${backButtonHTML}
                </center>
            `
      }, EDAll);
      oEffects.Animate(box, {
        opacity: 1,
        transform: ""
      }, 0.3);

      function letLogin(username, password, type = 0) {
        if (type) {
          DataManager.Login(username, password, type);
          $("close_the_login_pedal").click();
        }
      }

      function saveTip() {
        jngAlert.open({
          text: $__language_Array__["5a4f635a868680b31869f9bad90f1864"],
          type: 1,
          shade: true,
          nextHandler: _ => {
            DataManager.SAVE();
          }
        });
      }

      function loadTip() {
        jngAlert.open({
          text: $__language_Array__["f497958d738087437bb807d01511d628"],
          type: 1,
          shade: true,
          nextHandler: _ => {
            DataManager.LOAD();
          }
        });
      } //设置自由复制


      function setActiveCopy(tmp) {
        tmp.oncopy = tmp.oncontextmenu = tmp.onselectstart = tmp.onmousedown = function (e) {
          e.stopPropagation();
        };
      }

      $("save_content") && ($("save_content").onclick = saveTip);
      $("load_content") && ($("load_content").onclick = loadTip);
      $("button_register") && ($("button_register").onclick = function () {
        letLogin($("user_name").value, $("passwordBox").value, "register");
      });
      $("button_login") && ($("button_login").onclick = function () {
        letLogin($("user_name").value, $("passwordBox").value, "login");
      });

      if ($("user_name") && $("passwordBox")) {
        setActiveCopy($("user_name"));
        setActiveCopy($("passwordBox"));
      }

      $("copy_content").onclick = function () {
        let saveData = DataManager.getSaveData();
        let self = $("copy_content");
        let dom = self.nextElementSibling;
        let tmp = NewEle("", "textarea", "user-select:all;position:relative;top:0px;left:0px;height:40px;width:300px;margin:0px;", {
          value: saveData,

          onclick() {
            this.focus();
          }

        });
        setActiveCopy(tmp);
        dom.parentNode.insertBefore(tmp, dom);
        ClearChild(self);
      };

      $("paste_content").onclick = function showPaste() {
        let self = $("paste_content");
        let dom = self.nextElementSibling;
        let text = NewEle("", "textarea", "position:relative;top:0px;left:0px;height:40px;width:300px;margin:0px;", {
          placeholder: $__language_Array__["d84b6ebd9ed8903966d781718f1a04f1"],

          onclick() {
            this.focus();
          }

        });
        setActiveCopy(text);
        let tmp = NewEle("", "center", "position:relative;top:0;left:0px;height:30px;width:300px;color:white;cursor:pointer;", {
          onmouseenter() {
            this.style.color = "yellow";
          },

          onmouseleave() {
            this.style.color = "white";
          },

          innerText: $__language_Array__["54510a322adf9c2ad3eb12b20371d825"],

          onclick() {
            DataManager.readData(text.value);
            $("close_the_login_pedal").click();
          }

        });
        dom.parentNode.insertBefore(text, dom);
        dom.parentNode.insertBefore(tmp, dom);
        ClearChild(self);
      };

      $("close_the_login_pedal").onclick = function () {
        oEffects.Animate(box, {
          opacity: 0,
          transform: ""
        }, 0.2, false, _ => {
          ClearChild(box, shade);
        });
      };
    }

  };
}
;