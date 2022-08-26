/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection4.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection4.webp",

  LoadAccess($c) {
    loadRes({
      img: ['images/interface/ForestSelection6.webp']
    });
    $c('left:56px;top:249px;', {
      onclick: _ => oLvlInfoUI.open('Forest16', 1, [$__language_Array__["fe6dd321af48d5abaa872cf6fd3023b1"], $__language_Array__["5100b2507c87c9999074a20a7d37d3a8"], $__language_Array__["cc86ce08e4943dcba75da093434ccf3c"], $__language_Array__["232b0e353d054f2c57b50912b629eb72"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'CigarZombie', 'BucketheadZombie'], 1)
    });
    $c('left:196px;top:229px;', {
      onclick: _ => oLvlInfoUI.open('Forest17', 1, [$__language_Array__["a2ede974dae3ba8724ed67fda2a468bf"], $__language_Array__["d7aaa7b9c8d9d067c6fbe518f9e3f698"], $__language_Array__["cc86ce08e4943dcba75da093434ccf3c"], $__language_Array__["e372995c584091ba6c3d9d90d8ed1403"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'BucketheadZombie', 'FootballZombie'], ["plant", oRepeater], 'Forest17jx')
    });
    $c('left:362px;top:215px;', {
      onclick: _ => oLvlInfoUI.open('Forest18', 1, [$__language_Array__["a8d246db9dec6a9e1de102f885b0e467"], $__language_Array__["d7aaa7b9c8d9d067c6fbe518f9e3f698"], $__language_Array__["cc86ce08e4943dcba75da093434ccf3c"], $__language_Array__["9c8809a166291323b3b88ec429e44b74"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'BucketheadZombie', 'FootballZombie'], 1, 'Forest18jx')
    });
    $c('left:552px;top:257px;', {
      onclick: _ => oLvlInfoUI.open('Forest19', 1, [$__language_Array__["189fc256c66a01192f5a203643d1b955"], $__language_Array__["d7aaa7b9c8d9d067c6fbe518f9e3f698"], $__language_Array__["cc86ce08e4943dcba75da093434ccf3c"], $__language_Array__["232b0e353d054f2c57b50912b629eb72"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'FootballZombie'], ["plant", oCherryBomb], 'Forest19jx')
    });
    $c('left:760px;top:337px;', {
      onclick: _ => oLvlInfoUI.open('Forest20', 1, [$__language_Array__["716137212c93c938d0a48ea870281575"], $__language_Array__["865ffc58d4559ca5adc4cee85a22ac96"], $__language_Array__["cc86ce08e4943dcba75da093434ccf3c"], $__language_Array__["232b0e353d054f2c57b50912b629eb72"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'StrollZombie', 'NewspaperZombie', 'CigarZombie', 'BucketheadZombie', 'FootballZombie'], 1)
    });
  }

});