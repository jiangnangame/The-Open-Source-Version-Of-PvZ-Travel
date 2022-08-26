/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection6.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection6.webp",

  LoadAccess($c) {
    loadRes({
      img: ["images/interface/MarshSelection1.webp", "images/interface/MarshSelection2.webp"]
    });
    $c('left:84px;top:323px;', {
      onclick: _ => oLvlInfoUI.open('Forest26', 1, [$__language_Array__["2a2396f17ffd7278954ea9512a34ed21"], $__language_Array__["9472b45b0aed55aa429d451d82eaffcd"], $__language_Array__["cbdeafc3f699ce7cdd45ac19823f46fd"], $__language_Array__["55275893d44ab441dd9699a5d5c94129"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'FootballZombie'], 1, 'Forest26jx')
    });
    $c('left:224px;top:285px;', {
      onclick: _ => oLvlInfoUI.open('Forest27', 1, [$__language_Array__["4114a999f56be1ba974ee5697f6e64b4"], $__language_Array__["9472b45b0aed55aa429d451d82eaffcd"], $__language_Array__["cbdeafc3f699ce7cdd45ac19823f46fd"], $__language_Array__["f15b1719b1b971f6833cf326170611fc"]], ['Zombie', 'ConeheadZombie', 'StrollZombie', 'FootballZombie', 'BucketheadZombie'], 1, 'Forest27jx')
    });
    $c('left:358px;top:230px;', {
      onclick: _ => oLvlInfoUI.open('Forest28', 1, [$__language_Array__["6b25dfc0faa25548f2c21507f266feba"], $__language_Array__["3ec2e0a73cfa3e29096cbc67d1f4f031"], $__language_Array__["cbdeafc3f699ce7cdd45ac19823f46fd"], $__language_Array__["52535ddfc4bdc54eb99e6efcd1ab2c24"]], ['Zombie', 'NewspaperZombie', 'StrollZombie', 'CigarZombie'], 1)
    });
    $c('left:502px;top:235px;', {
      onclick: _ => oLvlInfoUI.open('Forest29', 1, [$__language_Array__["e8eeac582ca787fb99909c4effeb43a5"], $__language_Array__["9472b45b0aed55aa429d451d82eaffcd"], $__language_Array__["cbdeafc3f699ce7cdd45ac19823f46fd"], $__language_Array__["ca3bd5e9a9f77b1b3ee4c06d3dc5bee5"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'BucketheadZombie', 'FootballZombie'], 1, 'Forest29jx')
    });
    $c('left:648px;top:279px;', {
      onclick: _ => oLvlInfoUI.open('Forest30', 1, [$__language_Array__["01774b534af3f43c7c1c9fdf819b4f2b"], $__language_Array__["930b3bc08e4bb05e15e2dee8131a6dfa"], $__language_Array__["cbdeafc3f699ce7cdd45ac19823f46fd"], $__language_Array__["ca3bd5e9a9f77b1b3ee4c06d3dc5bee5"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'BucketheadZombie', 'FootballZombie'], ["plant", oSunShroom], 'Forest30jx')
    });
  }

});