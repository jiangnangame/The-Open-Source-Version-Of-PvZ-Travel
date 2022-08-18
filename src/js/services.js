/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 /*! 
* 这个文件以后就专门用来写游戏中的一些复杂的定制功能（渲染）的代码
*/
"use strict";
/* 注册即用服务 */

document.addEventListener('visibilitychange', _ => document.hidden && IsGaming(1) && oMenu.open());
document.body.addEventListener("keydown", evt => {
  let key = evt.keyCode;

  switch (key) {
    case 13:
      //回车调出测试关卡
      localStorage.JNG_DEV === 'true' && SelectModal('test');
      break;

    case 81:
      //Q键调出铲子 
      IsGaming(1) && $('imgShovel').style.visibility != "hidden" && $('imgShovel').click();
      break;

    default:
      //选取植物快捷键
      key < 58 && key > 47 && IsGaming() && ChosePlant({
        clientX: $User.clientX + EDAlloffsetLeft,
        clientY: $User.clientY
      }, String.fromCharCode(key) - 1);
  }
});
let oButtons = {
  globalName: {
    "reset": $__language_Array__["28f665f26760650b0802bc3f31e79122"],
    "start": $__language_Array__["d2cbc86c8e41a802b8eef5883d40e6d0"],
    "speed": $__language_Array__["bd7215a24c7c7871ba67622836f1048e"],
    "menu": $__language_Array__["28e10c0c19f1414d4d6e533ec036ce6e"],
    "mirror": $__language_Array__["9d234786cbdc3307f470d057c3ca50c1"],
    "ok": $__language_Array__["c4fdf1c5c3bdd3f4edeeb06983f5c798"],
    "cancel": $__language_Array__["a6d9e5329070ebac89f6746da447ec8f"],
    "continue": $__language_Array__["035d9783bd2cb1703664e6e37b29915c"],
    "user": $__language_Array__["9fb4f9f9353524c20b6a09447e980d65"],
    "score": `${$__language_Array__["8dba32179838f912ec453b0b913bca8c"]}<a id='scoreNum'>0</a>/<a id='scoreMax'></a>`
  },

  GetName(name) {
    return this.globalName[name];
  },

  SetStaticTexts() {
    let self = this; //显示所有的html按钮文字

    let buttons = [{
      "query": "#dSelectCard #button1",
      "str": self.GetName("reset")
    }, {
      "query": "#dSelectCard #btnOK",
      "str": self.GetName("start")
    }, {
      "query": "#dMenu #dMenu0",
      "str": self.GetName("speed")
    }, {
      "query": "#dMenu #dMenu1",
      "str": self.GetName("menu")
    }, {
      "query": "#dGameScore",
      "str": self.GetName("score")
    }];

    for (let i = 0; i < buttons.length; i++) {
      let dom = document.querySelector(buttons[i].query);

      if (dom.tagName == "INPUT") {
        dom.value = buttons[i].str;
      } else {
        dom.innerHTML = buttons[i].str;
      }
    }
  },

  GetButtonPic() {}

};
let oSVG = {
  container: undefined,
  tmpEDAll: undefined,
  doms: {},
  svgs: {
    "getSnowPea": id => `<svg><filter id="${id}"><feColorMatrix type="matrix" values="0 0 0 0 0, 0 1 0 0 0, 0 0 2 0 0, 0 0 0 1 0"/></filter></svg>`,
    "getExcited": id => `<svg>
        <filter id="${id}">
            <feColorMatrix type="matrix" values="1.5 0 0 0 0, 0 0.6 0 0 0, 0 0 0.6 0 0, 0 0 0 1 0">
                <animate attributeName="values" dur="1s" calcMode="spline" keySplines="0.55, 0.085, 0.68, 0.53;0.25, 0.46, 0.45, 0.94" keyTimes="0;0.5;1" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0;1.5 0 0 0 0, 0 0.6 0 0 0, 0 0 0.6 0 0, 0 0 0 1 0;1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0" repeatCount="indefinite">
                </animate>
            </feColorMatrix>
        </filter>
        </svg>`
  },

  getSVG(id) {
    let self = this; //用来记录是否重载

    if (self.tmpEDAll != EDAll) {
      self.doms = {};
      self.tmpEDAll = EDAll;
      self.container = $("dSVGContainers");
    }

    if (!self.doms[id]) {
      let svgId = "SVG_" + Math.random();
      self.doms[id] = NewEle("", "div", "", {
        innerHTML: self.svgs[id](svgId)
      }, self.container);
      self.doms[id].dataset.svgId = svgId;
      return "#" + svgId;
    } else {
      return "#" + self.doms[id].dataset.svgId;
    }
  }

};
/* 用户功能类服务 */

let labMap = {
  //实验室服务
  index: 0,

  get nowDom() {
    return this.dom && this.dom.children[this.index];
  },

  get bgUrl() {
    return this.nowDom && this.nowDom.getAttribute('data-jng-bg');
  },

  init: function () {
    jngTemplate.require('labMap');

    this.dom = $('labMap');
    this.change(0);
  },
  open: function () {
    this.dom.style.display = 'block';
  },
  close: function () {
    labMap.dom.style.display = 'none';
    SelectModal('index', 'Service');
  },
  change: function (x) {
    PlayAudio("pause");
    labMap.nowDom.style.display = 'none';
    labMap.index += x;
    labMap.nowDom.style.display = 'block';
    let bgUrl = new Image();
    bgUrl.src = labMap.bgUrl;

    bgUrl.onload = _ => $('tGround').style['background-image'] = `url(${bgUrl.src})`;
  }
};
let oAlmanac = {
  //图鉴服务
  dom: $('Almanac'),

  open() {
    PlayAudio("pause");

    jngTemplate.require('Almanac');

    SetBlock($("shadeb"), $('home'));
    SetVisible(this.dom);
  },

  close() {
    PlayAudio("Close");
    SetNone($("shadeb"));
    SetHidden(this.dom);
  },

  openBaike() {
    PlayAudio("pause");
    SelectModal("Almanac", "Service");
    oAlmanac.close();
  }

};
let oFuben = {
  _shadeb: $("shadeb"),
  _dom: $("FuBen"),

  open() {
    PlayAudio("pause");

    jngTemplate.require('FuBen');

    SetBlock(this._shadeb);
    SetVisible(this._dom);
  },

  close() {
    PlayAudio("Close");
    SetNone(this._shadeb);
    SetHidden(this._dom);
  }

};
let oMenu = {
  //关卡菜单服务
  _Menu: $("Menu"),
  _shade: $("shade"),

  _render() {
    let playAgain = this.querySelector('#playAgain'),
        comeHome = this.querySelector('#comeHome');

    playAgain.onclick = _ => {
      jngAlert.open({
        'text': $__language_Array__["4eac71a450526ba2e53e4e8bddb37090"],
        'nextHandler': _ => {
          if (oS.DynamicDifficulty && operateDynamicDifficulty() > -4) {
            if (operateDynamicDifficulty() > 1) {
              operateDynamicDifficulty(1, true);
            } else {
              operateDynamicDifficulty(-1, false, true);
            }
          }

          if (/Fanmade/.test(oS.Lvl)) {
            if (oS.OriginLvl) {
              SelectModal(oS.OriginLvl);
            } else {
              SelectModal("index", "Service");
            }
          } else {
            $User._tmpARCARD = [oS.Lvl, ArCard];
            SelectModal(oS.Lvl);
          }

          PlayAudio("bottom");
        },
        'closeHandler': oMenu.close
      });
    };

    comeHome.onclick = _ => {
      jngAlert.open({
        'text': $__language_Array__["6f9d3d8a451d09027d6f452a1b6c8419"],
        'nextHandler': _ => {
          Exitlevel();
          PlayAudio("bottom");
        },
        'closeHandler': oMenu.close
      });
    };
  },

  open() {
    jngTemplate.require(['Menu', 'kuaisushezhi']);

    SetBlock(oMenu._Menu);
    localStorage.JNG_DEV !== 'true' && SetBlock(oMenu._shade);
    $('cAutoSun').checked = $('cAutoSun2').checked = $User.AutoSun;
    PauseGame();
  },

  close() {
    PlayAudio("Close");
    CheckAutoSun($('cAutoSun'));
    CheckSilence($('cSilence'));
    SetNone(oMenu._Menu, oMenu._shade);
    ResetGame();
  }

};
let oLvlInfoUI = {
  //关卡信息面板服务
  _lvl: '',
  _dom: $('LvlInfoUI'),

  open(lvl, pic, data, zombies, prize, jx) {
    jngTemplate.require('LvlInfoUI');

    PlayAudio("click3");
    SetBlock(this._dom, $("shade"));
    jx && (SetBlock($('jx')), $('anniu').style['margin-left'] = '-112px');
    this._lvl = lvl; //注册_lvl

    oEffects.Animate(this._dom, {
      top: '78px',
      opacity: 1
    }, 0.225, 'cubic-bezier(0.0, 0.0, 0.2, 1)');
    $("picture").style['background-position'] = `-${153 * (pic - 1)}px 0px`; //设定预览图

    [$("guankaming").innerText, $("leixing").innerText, $("dixing").innerText, $("boshu").innerText] = [data[0], data[1], data[2], data[3]]; //设定关卡基本信息

    zombies.forEach((val, index) => NewImg(`zombieCard${index}`, `images/Card/${val}.webp`, `left:${index * 112}px;`, $("zombie"))); //设定僵尸卡牌
    //开关为1的时候默认为奖励星星，否则显示其他奖励可以同时上传图片和css代码

    if (prize instanceof Array && prize[0] == "plant") {
      GetPlantCardDom(prize[1], $('textIn'), "top:200px;left:150px;", {
        className: 'NewPlantCard_Wrap',
        id: 'LvlInfo_Prize'
      });
    } else {
      NewImg('LvlInfo_Prize', ...(prize === 1 ? ['images/interface/Clearance_reward.png', 'top: 175px;left: 130px;'] : [prize[0], prize[1]]), $('textIn'));
    }
  },

  _close() {
    //正常关闭接口
    $('zombie').innerHTML = ''; //清除僵尸卡牌ui

    ClearChild($("LvlInfo_Prize")); //强制重置奖励

    SetNone(this._dom, $('shade'), $("jx")); //隐藏ui

    SetStyle(this._dom, {
      top: '88px',
      opacity: 0
    });
    $('anniu').style['margin-left'] = '-56px';
  },

  close() {
    //带动画效果的关闭接口
    let t = this;
    oEffects.Animate(t._dom, {
      top: '88px',
      opacity: 0
    }, 0.195, 'cubic-bezier(0.4, 0.0, 1, 1)', t._close.bind(this));
  },

  intoLvl(deep = '') {
    SelectModal(this._lvl + deep);

    this._close();
  }

};
let Notice = {
  //活动公告UI服务，目前只开发了活动板块
  _dom: $('Notice'),
  _data: {
    'activities': [{
      'dom': {
        'ActName': $__language_Array__["b9ec63735fc7d74e57bd6330d473d877"],
        'ActDate': $__language_Array__["69f323e16910d22d7c5ba7f2e5822a2f"],
        'ActNumber': $__language_Array__["d17a9b645321a9ec9663f2b5fda81902"]
      },
      'route': _ => SelectModal('Act_SpFes2023')
    }, {
      'dom': {
        'ActName': $__language_Array__["357c641d3d1f82d257e1dab90d5c5950"],
        'ActDate': $__language_Array__["7204cdfa7c4a7c3d672d0635da0f00fd"],
        'ActNumber': $__language_Array__["5eb6fbe149eddcca45715ac271148966"]
      },
      'route': _ => SelectModal('lab', 'Service')
    }, {
      'dom': {
        'ActName': $__language_Array__["7b7b284f46a483c199c6b1171d5c8b06"],
        'ActDate': $__language_Array__["5e4601ec0d534ef8003bba72f5adae90"],
        'ActNumber': $__language_Array__["9c6c93fef5bebf95c5a33023587f64b4"] + function () {
          let k = localStorage["JNG_TR_ACT_SPFES_2022"] ? JSON.parse(localStorage["JNG_TR_ACT_SPFES_2022"]).day : 1;
          let d = k > 100 ? 101 : Math.round(Math.pow(k, 1.05) + 2);
          return d > 100 ? "+∞" : d;
        }() + $__language_Array__["98f0a6c8c4f411fbac47d3f4e3d60f0b"]
      },
      'route': _ => SelectModal('Act_SpFes2022')
    },
    /*,{
        'dom': {
            'ActName': '每日挑战',
            'ActDate': '推出时间：2019.10',
            'ActNumber': '关卡数：每日1个',                
        },
        'route': _=>SelectModal('Everyday_Normal'), 
    }*/
    {
      'dom': {
        'ActName': $__language_Array__["3ffd7f0f248e515508e16975ac0fd87f"],
        'ActDate': $__language_Array__["07d00d7cb84957883c7ceab8dbaaaee1"],
        'ActNumber': $__language_Array__["45ec79665bca42a74967beba4bf43c5a"]
      },
      'route': _ => SelectModal(localStorage['JNG_TR_ACT_SPFES'] ? localStorage['JNG_TR_ACT_SPFES'] : 'Act_SpFes1')
    }, {
      'dom': {
        'ActName': $__language_Array__["a2e1d2c7d6423e6d6655f08cab47fc65"],
        'ActDate': $__language_Array__["81d00a765d1b54026813028ae1692ba7"],
        'ActNumber': $__language_Array__["c8c015f73a0b857fe87d36adc47c92c2"]
      },
      'route': _ => {
        localStorage['JNG_TR_ACT_SPFES_2020'] = localStorage['JNG_TR_ACT_SPFES_2020'] ? localStorage['JNG_TR_ACT_SPFES_2020'] : 1;
        let hasCREATE = [];
        hasCREATE[1] = hasCREATE[5] = hasCREATE[15] = true;

        if (localStorage['JNG_TR_ACT_SPFES_2020_WIN'] == "true" || Number.parseInt(localStorage['JNG_TR_ACT_SPFES_2020']) > 15) {
          localStorage['JNG_TR_ACT_SPFES_2020_WIN'] = "true";
          jngAlert.open({
            'text': $__language_Array__["7d179c064b8e74e4d1b2f768401a6ec6"],
            'type': 0,
            'shade': 1,
            'nextHandler': _ => {
              let dom = $("Fnumber");
              SetBlock($("dSurface"));

              if (dom.value) {
                localStorage['JNG_TR_ACT_SPFES_2020'] = dom.value;
                other();
              }
            }
          });
          $("jngAlert").querySelector("#text").innerHTML += $__language_Array__["bb68d0fd8c099e8670c8992dda22028a"];
        } else {
          other();
        }

        function other() {
          if (!hasCREATE[localStorage['JNG_TR_ACT_SPFES_2020']]) {
            SelectModal(`Act_Spf_2020`);
          } else {
            SelectModal(`Act_Spf_2020_${localStorage['JNG_TR_ACT_SPFES_2020']}`);
          }
        }
      }
    }, {
      'dom': {
        'ActName': $__language_Array__["ef5cd7b9c3b351ce8c71222cafcdd86e"],
        'ActDate': $__language_Array__["3d0b1052404338909600ded23e4656bf"],
        'ActNumber': $__language_Array__["45ec79665bca42a74967beba4bf43c5a"]
      },
      'route': _ => SelectModal('Act_SpFes2021_1')
    }, {
      'dom': {
        'ActName': $__language_Array__["798ed3736a2d06a9c7ca78ef28d74901"],
        'ActDate': $__language_Array__["6b31066cb355ef91fdabf117037d13b7"],
        'ActNumber': $__language_Array__["5068da7026a30ac6375d8bd98aefe5e2"]
      },
      'route': _ => SelectModal('Act_Impossible_Zombie_Border')
    }, {
      'dom': {
        'ActName': $__language_Array__["39727592a4cd23567c81a83016d2b52a"],
        'ActDate': $__language_Array__["8423448020dd683c025954caff91bb40"],
        'ActNumber': $__language_Array__["45ec79665bca42a74967beba4bf43c5a"]
      },
      'route': _ => {
        !localStorage["Act_Danmaku"] && (localStorage["Act_Danmaku"] = 1, localStorage["Act_Danmaku2"] = 1);
        SelectModal("Act_Danmaku" + localStorage["Act_Danmaku"] + "_" + localStorage["Act_Danmaku2"]);
      }
    }]
  },

  _render() {
    const data = Notice._data; //渲染活动板块

    let lis = document.createDocumentFragment();
    data['activities'].forEach(function (json) {
      const {
        dom,
        route
      } = json,
            li = document.createElement('li'); //每一个活动的li
      //渲染文字信息

      for (let key in dom) {
        //逐一创建每一条说明并输入li
        let a = document.createElement('a');
        a.className = key;
        a.innerHTML = dom[key];
        li.appendChild(a);
      } //入口路由


      let enter = document.createElement("button");
      enter.className = 'Enter jngButton';

      enter.onclick = _ => {
        Notice.close();
        SetNone(dSurface);
        route();
      };

      li.appendChild(enter); //打上class，注入网页

      li.className = 'ActLi';
      $('activities').appendChild(li);
    }); //渲染公告板块
    //暂未开发...
  },

  open() {
    jngTemplate.require('Notice');

    SetBlock($('shadeb'), Notice._dom);
  },

  close() {
    PlayAudio("Close");
    SetNone(Notice._dom, $('shadeb'));
  }

};
let jngAlert = {
  _dom: $('jngAlert'),
  _shade: null,

  open(data) {
    /* 传入data示例：{text: 'error', shade: true, nextHandler: ()=>{}, closeHandler: ()=>{}} */
    jngTemplate.require('jngAlert');

    let {
      type = 1,
      text,
      shade,
      nextHandler = _ => {},
      closeHandler = _ => {}
    } = data,
        dom = this._dom,
        textDom = dom.querySelector('#text'),
        nextDom = dom.querySelector('#next'),
        closeDom = dom.querySelector('#close');
    this._shade = shade ? $("shadeb") : $("shade"); //遮罩层0用透明，1用黑色
    //type默认是1类弹窗，即同时显示"确定"和"取消"

    switch (type) {
      case 2:
        SetNone(nextDom);
        SetNone(closeDom);
        break;

      case 0:
        SetNone(closeDom);
        SetBlock(nextDom);
        break;

      default:
        SetBlock(closeDom);
        SetBlock(nextDom);
    }

    textDom.innerText = text; //设置文本

    nextDom.onclick = _ => {
      nextHandler();
      this.close();
    };

    closeDom.onclick = _ => {
      closeHandler();
      this.close();
    };

    SetBlock(dom, this._shade);
  },

  close() {
    PlayAudio("Close");
    SetNone(this._dom, this._shade);
  }

};
let oWorldMap = {
  //世界地图服务
  _dom: $('WorldMap'),
  _handlerConfig: {
    'Close': _ => {
      PlayAudio("Close");
      oWorldMap.close();
    },
    'Tutorial': _ => {
      PlayAudio('bottom');
      jngAlert.open({
        'shade': 1,
        'text': $__language_Array__["2f63b862c7933782f2f7a670270163e0"],
        'nextHandler': _ => {
          SelectModal('Tutorial1');
          oWorldMap.close();
        }
      });
    },
    'Forest': _ => {
      oWorldMap.close();
      oSelectionMap.gotoPage('Forest_SelectionMap_1');
    },
    'Marsh': _ => {
      oWorldMap.close();
      oSelectionMap.gotoPage('Marsh_SelectionMap_1');
    },
    'Polar': _ => {
      oWorldMap.close();
      oSelectionMap.gotoPage('Polar_SelectionMap_1');
    },
    'Industry': _ => {
      oWorldMap.close();
      oSelectionMap.gotoPage('Industry_SelectionMap_1');
    },
    'Lab': _ => {
      SelectModal('lab', 'Service');
      oWorldMap.close();
    },
    'Other': _ => PlayAudio('UnlockLimit')
  },

  _render() {
    this.addEventListener('click', e => {
      let fun = oWorldMap._handlerConfig[e.target.getAttribute("id")];

      e.target !== oWorldMap._dom && (fun ? fun() : oWorldMap._handlerConfig['Other']());
    });
  },

  open() {
    PlayAudio("pause");

    jngTemplate.require('WorldMap');

    SetVisible(this._dom);
  },

  close() {
    SetHidden(this._dom);
  }

};
let oSelectionMap = {
  //选关地图服务
  _Ele_: $('SelectionMap'),
  _TargetPage_: null,
  _CurrentPage_: null,
  _OldPage_: null,
  _MapPageNum_: {
    'Forest': 6,
    'Marsh': 6,
    'Polar': 6,
    'Industry': 5
  },
  _WorldsList_: ['Forest', 'Marsh', 'Polar', 'Industry'],
  _LoadedPages_: new Map(),
  _lastMusic_: null,

  _render() {
    let hook;
    this.addEventListener('click', e => (hook = oSelectionMap[e.target.getAttribute("id")]) && hook.call(oSelectionMap, oSelectionMap._CurrentPage_.match(/(?<world>[a-zA-Z]+)_SelectionMap_(?<num>[0-9])/).groups));
  },

  init() {
    jngTemplate.require('SelectionMap');

    SetBlock($('SelectionMap'));
    this.gotoPage(this._TargetPage_ || localStorage['JNG_TR_SelectionMap'] || `Forest_SelectionMap_1`);
  },

  refreshModal(PageName) {
    this._TargetPage_ = PageName;
    SelectModal('selectionmap', 'Service');
  },

  gotoPage(PageName) {
    this._TargetPage_ = null; //作废target

    this._OldPage_ = this._CurrentPage_;
    this._CurrentPage_ = PageName;
    $('returnLast').style.display = this._CurrentPage_ === `Forest_SelectionMap_1` ? 'none' : 'block';
    $('returnNext').style.display = this._CurrentPage_ === `Industry_SelectionMap_5` ? 'none' : 'block';
    EBody.replaceChild(EDNewAll.cloneNode(true), EDAll);
    EDAll = $('dAll');
    localStorage['JNG_TR_SelectionMap'] = PageName;

    if (this._LoadedPages_.has(this._CurrentPage_)) {
      let oldEle;
      this._OldPage_ && (oldEle = $(this._OldPage_)) && (oldEle.style.display = 'none');
      $(this._CurrentPage_).style.display = 'block';

      let json = this._LoadedPages_.get(this._CurrentPage_);

      let newMusic = json.Music;
      json.LoadEveryTime && json.LoadEveryTime();
      this._lastMusic_ !== newMusic && (StopMusic(), PlayMusic(oS.LoadMusic = this._lastMusic_ = newMusic));
      return;
    }

    SetBlock($('loading'));
    ClearChild($("JSPVZ"));
    NewEle("JSPVZ", "script", 0, {
      src: `modal/SelectionMap/${PageName}.js`
    }, document.querySelector("head"));
  },

  loadPage(json) {
    //加载新的选关地图页面
    let {
      PicArr = [],
      Music,
      backgroundImage,
      LoadAccess,
      LoadEveryTime
    } = json;
    let PicNum = PicArr.length;

    let checkLoad = _ => {
      if (PicNum === 0 || --PicNum === 0) {
        let oldEle;
        let ele = NewEle(this._CurrentPage_, 'div', `background:url(${backgroundImage}) no-repeat`, {
          className: 'box'
        }, this._Ele_);

        this._LoadedPages_.set(this._CurrentPage_, json);

        this._lastMusic_ !== Music && (StopMusic(), PlayMusic(oS.LoadMusic = this._lastMusic_ = Music));
        this._OldPage_ && (oldEle = $(this._OldPage_)) && (oldEle.style.display = 'none');
        LoadEveryTime && LoadEveryTime();
        LoadAccess(this.$createVirtualButton(ele), ele);
        SetNone($('loading'));
      }
    };

    PicNum ? PicArr.forEach(picUrl => {
      let pic = new Image();
      pic.src = picUrl;
      pic.onload = pic.onerror = checkLoad;
    }) : checkLoad();
  },

  returnHome() {
    SelectModal('index', 'Service');
  },

  returnLast({
    num,
    world
  }) {
    let MapPageNum = this._MapPageNum_;
    num = Number(num);
    if (num <= MapPageNum[world] && num > 1) this.gotoPage(`${world}_SelectionMap_${num - 1}`); //在本世界内切换

    if (num === 1) {
      //切换到上一个世界
      let list = this._WorldsList_,
          newWorld = list[list.indexOf(world) - 1];
      this.gotoPage(`${newWorld}_SelectionMap_${MapPageNum[newWorld]}`, true);
    }
  },

  returnNext({
    num,
    world
  }) {
    let max = this._MapPageNum_[world];
    num = Number(num);
    if (num < max) this.gotoPage(`${world}_SelectionMap_${num + 1}`); //在本世界内切换

    if (num === max) {
      //切换到下一个世界
      let list = this._WorldsList_,
          newWorld = list[list.indexOf(world) + 1];
      this.gotoPage(`${newWorld}_SelectionMap_1`, true);
    }
  },

  $createVirtualButton: wrapEle => (cssText, json) => NewEle(Math.random(), 'button', cssText, Object.assign({
    className: 'VirtualButton'
  }, json), wrapEle)
};
let SpeedMenuServices = {
  //调速服务
  textDom: null,
  textLineDom: null,
  _dom: null,

  _set_ball_position() {
    let SMS = SpeedMenuServices;

    let bar = SMS._dom.querySelector("#speed_tracker"),
        text_bar = SMS._dom.querySelector("#speed_dash_line_tracker"),
        ball = SMS._dom.querySelector("#speed_ball"),
        text = SMS._dom.querySelector("#speed_text");

    ball.style.left = SMS.checkSpeed(Number.parseInt(ball.style.left), oSym.NowSpeed) + "px";
    text_bar.style.clip = bar.style.clip = "rect(0px," + (Number.parseInt(ball.style.left) + 14) + "px,30px,0px)";
  },

  _render() {
    //console.log(this);
    let self = this;
    let clicking = false;
    let inTheBall = false;
    let bar = self.querySelector("#speed_tracker"),
        text_bar = self.querySelector("#speed_dash_line_tracker"),
        ball = self.querySelector("#speed_ball"),
        text = self.querySelector("#speed_text");
    SpeedMenuServices._dom = self;
    SpeedMenuServices.textLineDom = document.querySelector("#speed_text_line");
    SpeedMenuServices.textDom = text;

    SpeedMenuServices._set_ball_position();

    let lstX = 0,
        lstBallX = 0;
    ball.addEventListener("mouseenter", _ => {
      let self = ball;

      if (!clicking) {
        self.style.background = "white"; //self.style.width="20px";

        text.style.color = "black";
        self.style.transform = "scale(1.4)";
        text.style.transform = "scale(1.1)";
      }

      inTheBall = true;
    });
    ball.addEventListener("mouseleave", _ => {
      let self = ball;

      if (!clicking) {
        self.style.background = "#8ADCDC";
        text.style.color = "white";
        text.style.transform = self.style.transform = "";
      }

      inTheBall = false;
    });

    let mouseDown = e => {
      var _e$targetTouches, _e$targetTouches$;

      let self = ball;
      clicking = true;
      lstX = e.clientX || ((_e$targetTouches = e.targetTouches) === null || _e$targetTouches === void 0 ? void 0 : (_e$targetTouches$ = _e$targetTouches[0]) === null || _e$targetTouches$ === void 0 ? void 0 : _e$targetTouches$.clientX);
      lstBallX = Number.parseInt(self.style.left);
      self.style.background = "#34AAAA";
      text.style.color = "white";
      self.style.transform = "scale(1.4)";
      text.style.transform = "scale(1.1)";
    };

    ball.addEventListener("mousedown", mouseDown);
    ball.addEventListener("touchstart", mouseDown);
    self.addEventListener("mouseleave", e => {
      clicking = false;
      ball.style.background = "#8ADCDC";
      text.style.color = "white";
      text.style.transform = ball.style.transform = "";
    });

    let mouseUp = e => {
      if (clicking) {
        clicking = false;

        if (!inTheBall) {
          text.style.color = "white";
          ball.style.background = "#8ADCDC";
          text.style.transform = ball.style.transform = "";
        } else {
          ball.style.background = "white";
          text.style.color = "black";
        }

        SpeedMenuServices._set_ball_position();
      }
    };

    self.addEventListener("mouseup", mouseUp);
    self.addEventListener("touchend", mouseUp);

    let mouseMove = e => {
      if (clicking) {
        var _e$targetTouches2, _e$targetTouches2$;

        let x = e.clientX || ((_e$targetTouches2 = e.targetTouches) === null || _e$targetTouches2 === void 0 ? void 0 : (_e$targetTouches2$ = _e$targetTouches2[0]) === null || _e$targetTouches2$ === void 0 ? void 0 : _e$targetTouches2$.clientX); //鼠标滑动对应的值

        let val = Math.min(195, Math.max(-15, x - lstX + lstBallX)); //改变速度并返回当前速度的标准值

        let standard = SpeedMenuServices.checkSpeed(val);
        let fu = Math.abs(val - standard) / (val - standard);
        let ballPos = standard + fu * 20 / Math.max(1, 21 - Math.abs(val - standard));
        ball.style.left = ballPos + "px";
        text_bar.style.clip = bar.style.clip = "rect(0px," + (ballPos + 14) + "px,30px,0px)";
      }
    };

    self.addEventListener("mousemove", mouseMove);
    self.addEventListener("touchmove", mouseMove);
  },

  checkSpeed(val, setSpeed) {
    let dom = SpeedMenuServices.textDom;
    let domLine = SpeedMenuServices.textLineDom;
    let speeds = [1, 1.2, 1.5, 2, 2.5, 3];
    let px = [15, 45, 85, 125, 165, 205];

    if (setSpeed) {
      let res = 1;

      for (let i = 0; i < speeds.length; i++) {
        if (speeds[i] == setSpeed) {
          res = i;
        }
      }

      dom.innerText = speeds[res];
      domLine.innerText = $__language_Array__["7d75b164a920f3e902c061e32acf944d"] + speeds[res].toFixed(1) + "x";
      return px[res] - 20;
    }

    let res = 0;

    for (let i = 0; i < px.length; i++) {
      var _px;

      if (val > ((_px = px[i - 1]) !== null && _px !== void 0 ? _px : -30) && val <= px[i]) {
        res = i;

        if (oSym.NowSpeed != speeds[i]) {
          CSpeed(speeds[i]);
          dom.innerText = speeds[i];
          domLine.innerText = $__language_Array__["7d75b164a920f3e902c061e32acf944d"] + speeds[i].toFixed(1) + "x";
          break;
        }
      }
    } //console.log(px[res]);


    return px[res] - 20;
  }

};
/* 模板总系统 */

let jngTemplate = {
  template: {
    //储存原始html数据
    Diary: `<iframe id='DiaryIframe' class="NoBar" width="900" height="600" frameBorder='0' scrolling='auto' src='frame/Diary.html'></iframe>`,
    WorldMap: `<input class="voidButton oneLineVoidButton jngButton button_Close" type="button" id="Close" value="${oButtons.GetName('continue')}"><div class="entrance" id="Tutorial"></div><div class="entrance" id="Forest"></div><div class="entrance" id="Marsh"></div><div class="entrance" id="Polar"></div><div class="entrance" id="Industry"></div><div class="entrance" id="Modern"></div><div class="entrance" id="Lab"></div>`,
    FuBen: `<div class="biaoti"></div><div id="jijie" class="FuBenN" onclick="SelectModal('Fuben_Summer_SelectionMap','SelectionMap');PlayAudio('bottom');oFuben.close()"></div><div id="jijie2" class="FuBenT"></div><div id="jishu" class="FuBenN" onclick="PlayAudio('UnlockLimit')"></div><div id="jishu2" class="FuBenT"></div><div id="meng" class="FuBenN" onclick="PlayAudio('UnlockLimit')"></div><div id="meng2" class="FuBenT"></div><div id="wanjia" class="FuBenN" onclick="PlayAudio('UnlockLimit')"></div><div id="wanjia2" class="FuBenT"></div><input class="voidButton oneLineVoidButton jngButton button_Close"  value="${oButtons.GetName('continue')}" type="button" id="button" onclick="oFuben.close()">`,
    dNewPlant: `<div class="card"><img id="iNewPlantCard" border="0"></div><div id="dNewPlantName"></div><div id="dNewPlantTooltip"></div><div id="dNewPlantSunNum"></div><div id="dNewPlantcoolTime"></div><div id="dNewPlantStory" class='NoBar'></div><input type="button" id="btnNextLevel"><input class="jngButton Homepage" type="button" id="button" onclick="CloseNewPlant();">`,
    dNewProp: `<div id="iNewProp"></div><div id="dNewPropName"></div><div id="dNewPropTooltip"></div><input class="voidButton oneLineVoidButton jngButton" value="${oButtons.GetName('continue')}" type="button" id="NextLevel"><input class="jngButton Homepage" type="button" id="button" onclick="CloseProp();">`,
    Writer: `<div id="wrap"><img src="images/interface/writer.webp"></div>`,
    jngAlert: `
        <div id="text"></div>
        <ul id="anr">
            <li>
                <input class="voidButton jngButton" type="button" id="next" value="${oButtons.GetName('ok')}">
            </li>
            <li>
                <input class="voidButton jngButton" type="button" id="close" value="${oButtons.GetName('cancel')}">
            </li>
        </ul>`,
    rules: `<input type="button" id="button" class="voidButton oneLineVoidButton jngButton" value="${oButtons.GetName('continue')}" onclick="SetNone($('rules'), $('shade'));PlayAudio('Close');">`,
    LvlInfoUI: `
        <p id="guankaming"></p>
        <input class="jngButton Close" type="button" id="guanbi" onclick="oLvlInfoUI.close()">
        <div id="textIn">
            <p id="leixing"></p>
            <p id="dixing"></p>
            <p id="boshu"></p>
        </div>
        <div id="picture"></div>
        <div id="zombie"></div>
        <div id="anniu">
            <input class="voidButton jngButton" type="button" id="go" onclick="oLvlInfoUI.intoLvl()" value="${oButtons.GetName('start')}">
            <input class="voidButton jngButton" type="button" id="jx" onclick="oLvlInfoUI.intoLvl('jx')" value="${oButtons.GetName('mirror')}">
        </div>`,
    Menu: `
        <div class="OMd0">
            <div class="OMd1">
                <div>
                    <input type="checkbox" id="cAutoSun" value="1" onclick="PlayAudio('click3');TongbuShezhi(1);" onchange="CheckAutoSun(this)" class="chk">
                    <label for="cAutoSun" id="lAutoSun">${$__language_Array__["6d4bfb0385c6e53f2065ae8ecbd465c2"]}</label>
                </div>
                <div>
                    <input type="checkbox" id="cSilence" value="1" onclick="PlayAudio('click3');TongbuShezhi(1);" onchange="CheckSilence(this)" class="chk">
                    <label for="cSilence" id="lSilence">${$__language_Array__["db0917d6a31b4a9ad591014bf3f9bcb4"]}</label>
                </div>
            </div>
        </div>
        <div class="BigLevel button" id='playAgain'>${$__language_Array__["336283f16f2d9f1c6a5fadfc80e90b79"]}</div>
        <div class="BigLevel button" id='comeHome'>${$__language_Array__["6123a3305f1116ac430adb051a1c008c"]}</div>
        <input class="OptionsMenuButton" onclick="oMenu.close()" type="button" id="button">`,
    kuaisushezhi: `
        <div class="OMd1">
            <div>
                <input type="checkbox" id="cAutoSun2" value="1" onClick="PlayAudio('click3');TongbuShezhi(0);" onchange="CheckAutoSun(this)" class="chk">
                <label for="cAutoSun" id="lAutoSun">${$__language_Array__["6d4bfb0385c6e53f2065ae8ecbd465c2"]}</label>
            </div>
            <div>
                <input type="checkbox" id="cSilence2" value="1" onClick="PlayAudio('click3');TongbuShezhi(0);" onChange="CheckSilence(this)" class="chk">
                <label for="cSilence" id="lSilence">${$__language_Array__["db0917d6a31b4a9ad591014bf3f9bcb4"]}</label>
            </div>
            <div>
                <input type="checkbox" id="cCursor" value="1" onClick="PlayAudio('click3');" onChange="CheckCursor(this)" class="chk">
                <label for="cCursor" id="lCursor">${$__language_Array__["62a7475ed3545604b45bc332053401b6"]}</label>
            </div>
            <div>
                <input type="checkbox" id="cCoolType" value="1" onClick="PlayAudio('click3');" onChange="if(!Number(localStorage.JNG_TR_COOLTEXT)){localStorage.JNG_TR_COOLTEXT=1;}else{localStorage.JNG_TR_COOLTEXT=0;}" class="chk">
                <label for="cCoolType" id="lCoolType">${$__language_Array__["cbdb6f779b7232010146790ff7882933"]}</label>
            </div>
            <div>
                <input type="checkbox" id="cLowPerformance" value="1" onClick="PlayAudio('click3');" onChange="$User.LowPerformanceMode=this.checked;" class="chk">
                <label for="cLowPerformance" id="lLowPerformance">${$__language_Array__["4bb7031d83f0986603c6f27c069b56bf"]}</label>
            </div>
            <div>
                <input type="checkbox" id="cAsync_Gif" value="1" onClick="PlayAudio('click3');" onChange="$User.Async_GIFS_Animate=this.checked;" class="chk">
                <label for="cAsync_Gif" id="lAsync_Gif">${$__language_Array__["f913926ec5c291253e197c05ba2679eb"]}</label>
            </div>
        </div>
        <input class="jngButton OptionsMenuButton Close" onclick="HiddenKuaiShe(),PlayAudio(&quot;Close&quot;)" type="button">
        <br/>
        <br/>
        `,
    dSpeedContainer: `
        <input class="jngButton Close" onclick="HiddenSpeed()" type="button" id="button3">
            <!--<div class="dS2">
                <div class="an" onclick="CSpeed(2)"></div>
                <div class="an" onclick="CSpeed(3)"></div>
                <div class="an" onclick="CSpeed(5)"></div>
                <div class="an" onclick="CSpeed(10)"></div>
            </div>-->
            <span style="position:absolute;left:265px;font-size:37px;top:4px;color:white;text-shadow:-1px 1px 10px rgba(0,0,0,0.5);-webkit-text-stroke:1.3px black;">${$__language_Array__["f00a13ceb6ffc698ee3a579c7de415c1"]}</span>
            <div class="dS2">
                <div style="position:absolute;transform:scale(1.1);left:-25px;top:30px;height:15px;line-height:30px;width:200px;border-radius:15px;border:2px solid white;background:white">
                    <div id="speed_tracker" style="position:absolute;left:0px;top:0px;height:15px;line-height:30px;width:200px;border-radius:15px;background:#8ADCDC"></div>
                    <a id="speed_dash_line_tracker" style="pointer-events:none;color:rgba(255,255,255,0.3);word-wrap:keep-all;font-family:Arial;font-size:1.2em;left:10px;position:absolute;top:-8.5px;width:300px;height:100%;">
                        - - - - - - - - - - - - - - - - - - - - - -
                    </a>
                    <div id="speed_ball" style="position:absolute;cursor:pointer;left:-5px;top:-4px;line-height:30px;height:20px;width:20px;border-radius:9px;border-radius:15px;border:2px solid white;background:#8ADCDC;transition:background 0.2s,transform 0.2s;text-align:center;">
                        <a id="speed_text" style="position:absolute;color:white;text-shadow:0 0 3px #8ADCDC;left:0px;width:20px;top:1px;font-size:0.3em;line-height:20px;">1</a>
                    </div>
                </div>
            </div>
            <div class="DisplaySpeed">
                <input class="voidButton oneLineVoidButton jngButton" value="${oButtons.GetName('continue')}" onclick="HiddenSpeed()" type="button" id="button1" style="position:relative;left:63px;">
            </div>
            <div style="position:absolute;left:200px;top:132px;width:270px;height:200px;font-size:1.2em;color:white;text-shadow:-1px 1px 10px black;-webkit-text-stroke:0.7px black;">
                <center id="speed_text_line"></center><br/>
                <span style="color:white">${$__language_Array__["43a9bfa90af9569dfd30ee8d62ec53b8"]}</span>
            </div>
        `,
    SelectionMap: `<input class="jngButton Homepage " type="button" id="returnHome"><input class="jngButton" onclick="oWorldMap.open()" type="button" id="tiaoye"><input class="jngButton" type="button" id="returnLast"><input class="jngButton" type="button" id="returnNext"><div id="dCue"><div id="dCueName"></div><div id="dCueTooltip"></div></div>`,
    labMap: `
        <div id="lab0" class="WindowFrame" data-jng-bg="images/interface/lab1.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 222px;top: 150px;" onclick="SelectModal('Lab1')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:650px;top:185px;" onclick="SelectModal('Lab2')"></button>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab1" class="WindowFrame noneLab" data-jng-bg="images/interface/lab2.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left:102px;top:180px;" onclick="SelectModal('Lab3')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:530px;top:38px;" onclick="SelectModal('Lab4')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab2" class="WindowFrame noneLab" data-jng-bg="images/interface/lab3.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 180px;top: 50px;" onclick="SelectModal('Lab5')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:550px;top:185px;" onclick="SelectModal('Lab6')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
        </div>
        `,
    Almanac: `<div id='home'><a id='aTitle'></a><button id='aBaike' class='Book' onclick="oAlmanac.openBaike()"></button><button id='aDiary' class='Book' onclick="oAlmanac.close();SelectModal('diary', 'Service')"></button></div><input class="voidButton oneLineVoidButton jngButton button_Close" value="${oButtons.GetName('continue')}" type="button" id="button" onclick="oAlmanac.close()">`,
    Notice: `<ul id='selectors' ><li class='selector' id='toAct'></li><li class='selector' id='toNot'></li></ul><ul id='activities'></ul><button class='jngButton Close' onclick='Notice.close()'></button>`
  },
  renders: {
    //渲染器
    Render_Menu: oMenu._render,
    Render_Notice: Notice._render,
    Render_WorldMap: oWorldMap._render,
    Render_SelectionMap: oSelectionMap._render,
    Render_dSpeedContainer: SpeedMenuServices._render
  },

  require(id, callback) {
    let fun = function (_id) {
      //导入html资源
      let dom = $(_id),
          render,
          onrequire;

      if (dom.innerHTML === '' || dom.hasAttribute('data-dev')) {
        //判断是否要导入
        dom.innerHTML = jngTemplate.template[_id];

        if (render = jngTemplate.renders[`Render_${_id}`]) {
          //如果有渲染器的话就用渲染器进行修饰
          render.apply(dom);
        }
      }
    }; //id可以为一个数组！


    id['forEach'] ? id.forEach(x => fun(x)) : fun(id);
    callback && callback();
  }

};