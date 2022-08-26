/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: ["images/interface/MarshSelection4.webp", 'images/interface/MarshClue2.webp'],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection4.webp",

  LoadAccess($c, $box) {
    loadRes({
      img: ['images/interface/MarshSelection6.webp']
    });
    $c('left:51px;top:192px;', {
      onclick: _ => oLvlInfoUI.open('Marsh16', 2, [$__language_Array__["1ea77ba015f193f9b9a9a467d79e354c"], $__language_Array__["573ec709977ed8febc9b04e19c46f745"], $__language_Array__["82eba8436155e003532b7242ce4219af"], $__language_Array__["5a155747bf0bef030e9798f4dd623970"]], ['Imp', 'Zombie', 'CaskZombie', 'SadakoZombie', 'BucketheadZombie'], 1)
    });
    $c('left:199px;top:250px;', {
      onclick: _ => oLvlInfoUI.open('Marsh17', 2, [$__language_Array__["e93d218ccf6c70744b48bfe291756e41"], $__language_Array__["50361aa75532556c38374ad979d85408"], $__language_Array__["82eba8436155e003532b7242ce4219af"], $__language_Array__["424df46d62b39673d81fd5af320287b4"]], ['Imp', 'Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie', 'CaskZombie', 'BucketheadZombie', 'FootballZombie'], ["images/interface/MarshClue2.webp", "left: 60px;top: -60px;transform: scale(0.15);"], "Marsh17jx")
    });
    $c('left:427px;top:203px;', {
      onclick: _ => oLvlInfoUI.open('Marsh18', 2, [$__language_Array__["357da1aae9d39e0390bdeecca479e339"], $__language_Array__["ec79ae4f79a9db587cf87a51678000dd"], $__language_Array__["82eba8436155e003532b7242ce4219af"], $__language_Array__["3213c6ee0d62313a2c1aaee32d6b0fcb"]], ['Imp', 'ConeheadZombie', 'SadakoZombie', 'BucketheadZombie', 'FootballZombie', 'CigarZombie'], 1, "Marsh18jx")
    });
    $c('left:564px;top:128px;', {
      onclick: _ => oLvlInfoUI.open('Marsh19', 2, [$__language_Array__["be2fd6b3b86f4d9d682776782a7decfd"], $__language_Array__["114ad817bef526e18d40c07be3fc9720"], $__language_Array__["82eba8436155e003532b7242ce4219af"], $__language_Array__["a5276b111b5396f0ac1f3150d7df98e6"]], ['Imp', 'BalloonZombie', 'Zombie', 'SadakoZombie', 'StrollZombie', 'BucketheadZombie', 'FootballZombie'], 1, "Marsh19jx")
    });
    $c('left:721px;top:192px;', {
      onclick: _ => oLvlInfoUI.open('Marsh20', 2, [$__language_Array__["fbdbd35bcab9752ae16d7ce44280484d"], $__language_Array__["84adc5b9bf9c1f8570bc603b1877cf9c"], $__language_Array__["82eba8436155e003532b7242ce4219af"], $__language_Array__["2f1ce1abe0ed6b77885be85d5ef1200a"]], ['Imp', 'BalloonZombie', 'NewspaperZombie', 'CaskZombie', 'SadakoZombie', 'StrollZombie', 'BucketheadZombie', 'FootballZombie'], ["plant", oDoomShroom])
    });
    NewImg("imgSF", "images/interface/MarshClue2.webp", "left: 228px;top: 10px;transform: scale(0.18);", $box, {
      onmouseover: _ => ShowCue(247, 358, $__language_Array__["9ac75eab9f5c33928a9c8c2b8ed0da79"], $__language_Array__["21f78b19907bb30472f8a2dae69e118a"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'top:334px;left:295px;', {
      className: 'Shadow'
    }, $box);
  }

});