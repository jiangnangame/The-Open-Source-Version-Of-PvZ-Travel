/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";
/* prototype类补丁 */

Reflect.defineProperty(Object.prototype, 'length', {
  //查询对象中own属性数量
  enumerable: false,
  configurable: false,

  get() {
    return Object.keys(this).length;
  }

});

Object.prototype[Symbol.iterator] = function () {
  //普通对象允许使用forof遍历own属性
  const values = Object.values(this);
  return Array.prototype[Symbol.iterator].call(values);
};

Reflect.defineProperty(Array.prototype, 'random', {
  //从数组中随机抽取一个元素
  enumerable: false,

  value() {
    return this[Number.parseInt(Math.random() * this.length)];
  }

});
Reflect.defineProperty(String.prototype, 'reverse', {
  //反转字符串
  enumerable: false,

  value() {
    return this.split("").reverse().join("");
  }

});
let $tmp__listeners__ = {};
Reflect.defineProperty(EventTarget.prototype, "removeEventListenerRecord", {
  enumerable: false,

  value(...arr) {
    var _$tmp__listeners__$se, _$tmp__listeners__$se2;

    let self = this || window;
    let listeners = $tmp__listeners__ === null || $tmp__listeners__ === void 0 ? void 0 : (_$tmp__listeners__$se = $tmp__listeners__[self]) === null || _$tmp__listeners__$se === void 0 ? void 0 : (_$tmp__listeners__$se2 = _$tmp__listeners__$se[arr[0]]) === null || _$tmp__listeners__$se2 === void 0 ? void 0 : _$tmp__listeners__$se2[arr[1]];

    if (listeners) {
      for (let i = listeners.length - 1; i >= 0; i--) {
        if (listeners[i][0] == arr[1]) {
          self.removeEventListener(arr[0], listeners[i][1]);
          $tmp__listeners__[self][arr[0]][arr[1]].splice(i, 1);

          if ($tmp__listeners__[self][arr[0]][arr[1]].length < 1) {
            delete $tmp__listeners__[self][arr[0]][arr[1]];
          }
        }
      }
    }
  }

});
Reflect.defineProperty(EventTarget.prototype, "addEventListenerRecord", {
  enumerable: false,

  value(...arr) {
    var _arr$;

    let self = this || window;
    let c = arr[1];

    if ((_arr$ = arr[2]) !== null && _arr$ !== void 0 && _arr$.once) {
      arr[1] = function fun(...para) {
        c(...para);
        self.removeEventListenerRecord(arr[0], c);
      };
    }

    self.addEventListener(...arr);

    if (!$tmp__listeners__[self]) {
      $tmp__listeners__[self] = {};
    }

    if (!$tmp__listeners__[self][arr[0]]) {
      $tmp__listeners__[self][arr[0]] = {};
    }

    if (!$tmp__listeners__[self][arr[0]][c]) {
      $tmp__listeners__[self][arr[0]][c] = [];
    }

    $tmp__listeners__[self][arr[0]][c].push([c, arr[1]]);
  }

});
Reflect.defineProperty(Array.prototype, 'shuffle', {
  //随机打乱数组
  enumerable: false,

  value() {
    const self = this;
    const rightIndex = self.length - 1;
    self.forEach((value, index) => {
      if (index !== rightIndex) {
        const randomIndex = Math.floor(Math.random() * (rightIndex - index)) + index + 1;
        [self[index], self[randomIndex]] = [self[randomIndex], self[index]];
      }
    });
    return self;
  }

});
Reflect.defineProperty(Array.prototype, 'unique', {
  //数组去重
  enumerable: false,

  value() {
    return Array.from(new Set(this));
  }

});
Reflect.defineProperty(Array.prototype, 'delete', {
  //从数组中删去指定元素
  enumerable: false,

  value(targetValue, onlyFisrt) {
    const self = this;

    if (onlyFisrt) {
      let index = self.indexOf(targetValue);
      index > -1 && self.splice(index, 1);
      return self;
    }

    self.forEach((value, index) => value === targetValue && self.splice(index, 1));
    return self;
  }

});
Reflect.defineProperty(localStorage.__proto__, "getJsonItem", {
  enumerable: false,

  value(...arr) {
    var _localStorage$arr$;

    let json = JSON.parse((_localStorage$arr$ = localStorage[arr[0]]) !== null && _localStorage$arr$ !== void 0 ? _localStorage$arr$ : "{}");

    for (let i = 1; i < arr.length; i++) {
      json = json[arr[i]];

      if (!json) {
        return json;
      }
    }

    return json;
  }

});
Reflect.defineProperty(localStorage.__proto__, "setJsonItem", {
  enumerable: false,

  value(...keys) {
    var _localStorage$keys$;

    if (keys.length < 2) {
      return;
    }

    if (keys.length == 2) {
      localStorage[keys[0]] = keys[1];
      return keys[1];
    }

    let json = JSON.parse((_localStorage$keys$ = localStorage[keys[0]]) !== null && _localStorage$keys$ !== void 0 ? _localStorage$keys$ : "{}");
    let nowKey = json;

    for (let i = 1; i < keys.length - 2; i++) {
      if (!nowKey[keys[i]]) {
        nowKey[keys[i]] = {};
      }

      nowKey = nowKey[keys[i]];
    }

    nowKey[keys[keys.length - 2]] = keys[keys.length - 1];
    localStorage[keys[0]] = JSON.stringify(json);
    return json;
  }

});
/* static类补丁 */

Object.assignWithoutOverwrite = function (target, ...sources) {
  //不带覆盖功能的Object.assign
  sources.forEach(source => {
    for (let v in source) {
      (target[v] === undefined || target[v] === null) && (target[v] = source[v]);
    }
  });
  return target;
};

Object.hasOwn = Object.hasOwn || function (instance, prop) {
  return Object.prototype.hasOwnProperty.call(instance, prop);
};

Math.distance = function (point1, point2) {
  //两点间距离公式
  const [x1, y1, x2, y2] = [...point1, ...point2];
  return Math.hypot(x1 - x2, y1 - y2);
};

Math.DegToRad = Math.PI / 180;
Math.RadToDeg = 180 / Math.PI;

function One_Dimensional_Intersection(line1 = [], line2 = []) {
  //求解两区间是否有交集
  if (line1[0] > line1[1]) {
    //线段相反的情况
    line1[1] ^= line1[0];
    line1[0] ^= line1[1];
    line1[1] ^= line1[0];
  }

  if (line2[0] > line2[1]) {
    //线段相反的情况
    line2[1] ^= line2[0];
    line2[0] ^= line2[1];
    line2[1] ^= line2[0];
  }

  return line2[0] <= line1[1] && line1[0] <= line2[1];
}

Math.seed = 5;

Math.seededRandom = function (max, min) {
  //伪随机数
  max = max || 1;
  min = min || 0;
  max -= 0.0000000001;
  Math.seed = (Math.seed * 9301 + 49297) % 233280;
  var rnd = Math.seed / 233280.0;
  return min + rnd * (max - min);
};

Math.seededRandomV2 = function (max = null, min = null) {
  //xorshift128plus
  if (min > max) {
    max ^= min;
    min ^= max;
    max ^= min;
  }

  let [state0, state1] = Math.seedV2;
  let s1 = BigInt(state0);
  let s0 = BigInt(state1);
  state0 = s0;
  s1 ^= s1 << 23n;
  s1 ^= s1 >> 17n;
  s1 ^= s0;
  s1 ^= s0 >> 26n;
  state1 = s1;
  Math.seedV2 = {
    val: [state0 % BigInt(1e150), state1 % BigInt(1e150)]
  }; //这里采用避免循环的设置

  let z = Number((state0 + state1) % BigInt(1e18)) / 1e18;

  if (max === null || min === null) {
    return z;
  } else {
    return z * (max - min) + min;
  }
};

Reflect.defineProperty(Math, 'seedV2', {
  //查询对象中own属性数量
  configurable: false,

  get() {
    return this.val;
  },

  set(val) {
    if (val instanceof Array) {
      this.val = val;

      for (let i = 1; i <= 10; i++) {
        Math.seededRandomV2();
      }
    } else {
      this.val = val.val;
    }
  }

});
Math.seedV2 = [3, 2];
/* DOM操作工具类 */

const $ = id => id && document.getElementById(id),
      $n = tag => document.createElement(tag),
      ClearChild = (...arr) => arr.forEach(ele => (ele === null || ele === void 0 ? void 0 : ele.parentNode) && ele.parentNode.removeChild(ele)),
      //此函数是直接删除元素
SetBlock = (...arr) => arr.forEach(ele => ele.style.display = "block"),
      SetNone = (...arr) => arr.forEach(ele => ele.style.display = "none"),
      //此函数是隐藏，同时清除元素占位
SetVisible = (...arr) => arr.forEach(ele => ele && (ele.style.visibility = "visible")),
      SetHidden = (...arr) => arr.forEach(ele => ele.style.visibility = "hidden"),
      //此函数是隐藏，但只是看不见，元素会占位
SetAlpha = (ele, alpha) => ele.style.opacity = alpha,
      innerText = (ele, str) => ele.innerText = str,
      SetStyle = (ele, json) => {
  for (let key in json) {
    ele.style[key] = json[key];
  }

  return ele;
},
      GetStyle = (ele, styleName) => getComputedStyle(ele, null).getPropertyValue(styleName),
      NewEle = function (id, tag, cssText, properties, wrap) {
  //创建新元素
  const ele = $n(tag);
  ele.id = id;
  ele.style.cssText = cssText;
  Object.assign(ele, properties);
  wrap && wrap.appendChild(ele);
  return ele;
},
      NewImg = function (id, src, cssText, wrap, properties) {
  //创建新图片
  let _properties = {
    src
  };
  Object.assign(_properties, properties);
  return NewEle(id, 'img', cssText, _properties, wrap);
},
      NewScript = (id, src) => {
  id = id || 'jng_script_' + Math.random();

  if ($(id)) {
    return new Promise(suc => suc());
  } else {
    const ele = NewEle(id, "script", null, {
      src
    }, DOC.head);
    return new Promise(suc => {
      ele.onload = suc;
    });
  }
},
      EditEle = function (ele, attributes, style, wrap, properties) {
  //编辑现有元素
  if (attributes) {
    for (let index in attributes) ele.setAttribute(index, attributes[index]);
  }

  SetStyle(ele, style);
  Object.assign(ele, properties);
  wrap && wrap.appendChild(ele);
  return ele;
},
      EditImg = function (ele, id, src, style, wrap) {
  SetStyle(ele, style);
  id && (ele.id = id);
  src && (ele.src = src);
  wrap && wrap.appendChild(ele);
  return ele;
},
      //获取扩长图
getBorderCanvasDom = function (src, left, right, width, imgheight) {
  let canvas = NewEle("", "canvas");
  let ctx = canvas.getContext("2d");
  let img = new Image();
  img.src = src;

  img.onload = function () {
    canvas.width = width;
    canvas.height = imgheight !== null && imgheight !== void 0 ? imgheight : img.height;
    ctx.drawImage(img, 0, 0, left, img.height, 0, 0, left, img.height);
    ctx.drawImage(img, img.width - right, 0, right, img.height, width - right, 0, right, img.height);
    let remainWidth = width - left - right;
    let remainTrueWidth = img.width - left - right;
    ctx.drawImage(img, left, 0, remainTrueWidth, img.height, left, 0, remainWidth, img.height);
  };

  return canvas;
};


const EditCompositeStyle = ({
  ele,
  styleName = 'transform',
  delFuncs = [],
  addFuncs = [],
  targetFunc = '',
  option = 1
}) => {
  let cssText = ele.style[styleName];
  let tmpArr = cssText.split(/\s*\(|\)\s*/).filter(str => str);
  let list = [];
  let output = ''; 

  function check(name, value) {
    let tmp;

    for (let i = 0; i < delFuncs.length; i++) {
      tmp = delFuncs[i];

      if (tmp instanceof Array) {
        if (name === tmp[0] && value === tmp[1]) {
          return true;
        }
      } else {
        if (name === tmp) {
          return true;
        }
      }
    }

    return false;
  }

  for (let i = 0; i < tmpArr.length; i += 2) {
    let name = tmpArr[i];
    let value = tmpArr[i + 1];
    value = value.replace(/"/g, "");

    if (name === targetFunc) {
      return value;
    }

    !check(name, value) && list.push([name, value]);
  }

  list.concat(addFuncs).forEach(func => {
    output += ` ${func[0]}(${func[1]}) `;
  });

  if (option === 2) {
    return ele.style[styleName] = output;
  }

  return output;
};
/* 其他自定义函数 */


const convertBase64ToBlob = function (base64) {
  //分离头信息和base64数据
  let base64Arr = base64.split(','),
      imgtype = base64Arr[0].match(/data:(\S*?);base64/),
      // 将base64解码成string
  string = atob(base64Arr[1]),
      len = string.length;
  let bytesCode = new ArrayBuffer(len),
      //转换为unit8数组
  u8Array = new Uint8Array(bytesCode); //写入Unicode码

  for (let i = 0; i < len; i++) {
    u8Array[i] = string.charCodeAt(i);
  } //生成Blob对象（文件对象）


  return new Blob([bytesCode], {
    type: imgtype
  });
},
ClearEventListeners = function (dom, name) {
  let a = $tmp__listeners__; //清除所有已经注册并记录的事件

  if (a !== null && a !== void 0 && a[dom] && a !== null && a !== void 0 && a[dom][name]) {
    for (let d of a[dom][name]) {
      for (let i = d.length - 1; i >= 0; i--) {
        let fun = d[i];
        dom.removeEventListenerRecord(name, fun[0]);
      }
    }
  }
},
UserPerformance = {
  CPU: navigator.hardwareConcurrency,
  MEM: navigator.deviceMemory,
  online: navigator.onLine
},
Mobile = /Android|iPhone|iPad/.test(navigator.userAgent) && !/win/.test(navigator.platform.toLowerCase()),
IsMobile = _ => Mobile,
canXHR = navigator.onLine && /(http:\/\/)|(https:\/\/)/.test(location.href),
RandomPic = function (l, a, b, callback = null) {
  let link = l+(!canXHR?`?${oSym.Now}`:"");
  if (callback) {
    callback(link);
  }

  return link;
};