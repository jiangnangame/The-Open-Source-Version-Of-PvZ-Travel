/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 if (true) {
  var _search$lang, _search$src, _search$preloadData;

  let search = {};
  let s = location.search.split("?");
  s.splice(0, 1);
  s = s.join("");
  s = s.split("&");
  s.forEach(ele => {
    let arr = ele.split("=");
    search[arr[0]] = arr[1];
  });
  delete localStorage.JNG_DEV; //获取地区性语言

  if (!localStorage.JNG_TR_USER_LANGUAGE) {
    localStorage.JNG_TR_USER_LANGUAGE = navigator.language.toLocaleLowerCase();
  }

  search["lang"] = (_search$lang = search["lang"]) !== null && _search$lang !== void 0 ? _search$lang : localStorage.JNG_DEV ? "zh-cn" : localStorage.JNG_TR_USER_LANGUAGE;

  let getCssName = () => {
    switch (true) {
      case /en/.test(search['lang']):
        return "en-us";

      default:
        return "zh-cn";
    }
  },
      getJsonName = () => {
    switch (true) {
      case /en/.test(search['lang']):
        return "en-us";

      default:
        return "zh-cn";
    }
  },
      getPreloadData = () => {
    switch (true) {
      case /en/.test(search['lang']):
        return `languages/UI_Language/en-us/Custom_Modifications.js`;

      default:
        return "";
    }
  },
      //获取在加载PreloadData前需要的js
  getNeedJs = () => {
    switch (true) {
      case /en/.test(search['lang']):
        return ["js/services.js"];

      default:
        return [];
    }
  }; //语言文件路径


  let src = (_search$src = search["src"]) !== null && _search$src !== void 0 ? _search$src : `languages/${getJsonName()}.js`; //预加载图片等文件

  let preloadData = (_search$preloadData = search["preloadData"]) !== null && _search$preloadData !== void 0 ? _search$preloadData : getPreloadData();

  if (/.json/.test(src)) {
    let request = new XMLHttpRequest();
    request.open('GET', src, false);
    request.send(null);
    window.$__language_Array__ = JSON.parse(request.responseText);
  } else {
    document.write("<script src='" + src + "'></script>");
  }

  if (preloadData) {
    window.addEventListener("load", _ => {
      let needJS = getNeedJs(),
          chkingLoad = {},
          loadedCnt = 0;

      for (let k of needJS) {
        chkingLoad[k] = false;
      }

      let locationFolder = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);

      function checkLoaded() {
        let scripts = document.getElementsByTagName("script");

        for (let i of scripts) {
          var _i$src$split;

          let q = (_i$src$split = i.src.split(locationFolder)) === null || _i$src$split === void 0 ? void 0 : _i$src$split[1]; //console.log(q);

          if (chkingLoad[q] === false) {
            chkingLoad[q] = true;
            loadedCnt++;
          }
        }

        if (loadedCnt < needJS.length) {
          setTimeout(checkLoaded, 300);
        } else {
          NewEle("", "script", "", {
            src: preloadData
          }, EBody);
        }
      }

      checkLoaded();
    }, {
      once: true
    });
  } //获取字体


  let fontname = "FONT" + Math.floor(new Date().getTime() / 2626560) + 1427;
  let font_src = search["font"];

  if (!font_src) {
    if (search["lang"].includes("en")) {
      font_src = "./font/en.ttf";
    } else if (search["lang"].includes("zh-cn")) {
      font_src = "./font/HYBiRanTianTianQuanW.ttf";
    }
  }

  if (font_src) {
    window.addEventListener("load", function (event) {
      let ele = document.createElement("style");
      ele.innerHTML = `
                @font-face{font-family:${fontname};src:url(${font_src}) format('truetype')}
                *{
                    font-family:${fontname};
                 }`;
      document.body.appendChild(ele);
    }, {
      once: true
    });
  } //获取特殊css


  if (search["lang"]) {
    if (/en/.test(search['lang'])) {
      var _search$css;

      search["css"] = (_search$css = search["css"]) !== null && _search$css !== void 0 ? _search$css : `languages/UI_Language/${getCssName()}/Styles.css`;
    }
  }

  if (search["css"]) {
    document.addEventListener("DOMContentLoaded", function (event) {
      document.head.innerHTML += `<link href="${search["css"]}" rel="stylesheet"/>`;
    }, {
      once: true
    });
  }
}