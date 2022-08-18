/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PicArr: [RESPATH + "Fuben_Autumn_SelectionMap.webp"],
  LoadMusic: "Fuben_Autumn_Ready",
  backgroundImage: "images/interface/Fuben_Autumn_SelectionMap.webp",

  LoadAccess() {
    const $c = oSelectionMap.$createVirtualButton(EDAll);
    NewEle(`jngButton${Math.random()}`, 'a', 'left:1px;top:1px;z-index:258;position: absolute;', {
      className: 'Homepage jngButton',
      onclick: _ => {
        SelectModal('index', 'Service');
        SetBlock($("dSurface"));
      }
    }, EDAll);
    NewEle(`jngButton${Math.random()}`, 'a', 'left:80px;top:1px;z-index:258;position: absolute;', {
      className: 'Describe jngButton',
      onclick: function () {
        ClickRules('jf');
      }
    }, EDAll);
    NewEle(`returnLast`, 'button', null, {
      className: 'jngButton',
      onclick: _ => SelectModal('Fuben_Summer_SelectionMap', 'SelectionMap')
    }, EDAll);
    NewEle(`returnNext`, 'button', null, {
      className: 'jngButton',
      onclick: _ => SelectModal('Fuben_Winter_SelectionMap', 'SelectionMap')
    }, EDAll);
    $c('left:222px;top:270px;', {
      onclick: _ => SelectModal('Season_A1')
    });
    $c('left:360px;top:305px;', {
      onclick: _ => SelectModal('Season_A2')
    });
    $c('left:482px;top:288px;', {
      onclick: _ => SelectModal('Season_A3')
    });
    $c('left:633px;top:305px;', {
      onclick: _ => SelectModal('Season_A4')
    });
    $c('left:775px;top:295px;', {
      onclick: _ => SelectModal('Season_A5')
    });
  }

});