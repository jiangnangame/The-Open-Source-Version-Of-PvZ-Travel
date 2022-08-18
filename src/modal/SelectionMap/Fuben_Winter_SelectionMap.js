/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oS.Init({
  PicArr: [RESPATH + "Fuben_Winter_SelectionMap.webp"],
  LoadMusic: "Fuben_Winter_Ready",
  backgroundImage: "images/interface/Fuben_Winter_SelectionMap.webp",

  LoadAccess() {
    oEffects.BgParticle({
      url: "images/Props/Effect/snow_pieces.png"
    });
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
    }, EDAll);
    NewEle(`returnLast`, 'button', null, {
      className: 'jngButton',
      onclick: _ => SelectModal('Fuben_Autumn_SelectionMap', 'SelectionMap')
    }, EDAll);
    $c('left:50px;top:355px;', {
      onclick: _ => SelectModal('Season_W1')
    });
    $c('left:245px;top:315px;', {
      onclick: _ => SelectModal('Season_W2')
    });
    $c('left:390px;top:298px;', {
      onclick: _ => SelectModal('Season_W3')
    });
    $c('left:550px;top:265px;', {
      onclick: _ => SelectModal('Season_W4')
    });
    $c('left:720px;top:276px;', {
      onclick: _ => SelectModal('Season_W5')
    });
  }

});