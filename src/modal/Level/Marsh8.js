/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oAbutilonHybriden, oPumpkinHead],
  ZName: [oImp, oConeheadZombie, oBucketheadZombie, oStrollZombie, oSadakoZombie],
  LevelName: $__language_Array__["f24c93e15d84764bacf3f92c24e7de9a"],
  LoadAccess: function (a) {
    //ClearChild($("JSPVZ"));
    for (let C = 1, len = 6; C < len; C++) {
      CustomSpecial(oSunShroom, C, 1);
    }

    let dom = NewEle("", "script", null, {
      src: "./modal/Level/MarshRandomPlot.js"
    }, document.querySelector("head"));

    dom.onload = function () {
      window["__run__Plot__"](8, a);
      delete window["__run__Plot__"];
      ClearChild(dom);
    };

    dom.onerror = function () {
      ClearChild(dom);
      oSym.addTask(30, a);
    };
  }
}, {
  AZ: [[oImp, 3, 1, [1]], [oConeheadZombie, 2, 2], [oBucketheadZombie, 1, 3, [3, 7]], [oSadakoZombie, 2, 3], [oStrollZombie, 3, 4, [4, 6, 8, 10, 12]]],
  FlagNum: 12,
  FlagToSumNum: {
    a1: [1, 4, 7, 10],
    a2: [5, 2, 6, 17, 30]
  }
});