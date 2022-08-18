/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PicArr: [RESPATH + "Fuben_Spring_SelectionMap.webp"],
  LoadMusic: "Fuben_Spring_Ready",
  backgroundImage: "images/interface/Fuben_Spring_SelectionMap.webp",

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
      onclick: _ => ClickRules('jf')
    }, EDAll); //副本切换

    NewEle(`returnNext`, 'button', null, {
      className: 'jngButton',
      onclick: _ => SelectModal('Fuben_Summer_SelectionMap', 'SelectionMap')
    }, EDAll); //第一关

    $c('left:50px;top:321px;', {
      onclick: _ => SelectModal('Season_Sp1')
    }); //第二关

    $c('left:230px;top:308px;', {
      onclick: _ => SelectModal('Season_Sp2')
    }); //第三关

    $c('left:402px;top:296px;', {
      onclick: _ => SelectModal('Season_Sp3')
    }); //第四关

    $c('left:543px;top:286px;', {
      onclick: _ => SelectModal('Season_Sp4')
    }); //第五关

    $c('left:707px;top:225px;', {
      onclick: _ => SelectModal('Season_Sp5')
    });
  }

});