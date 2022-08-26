/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection1.webp", RESPATH + "ForestSelection2.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection1.webp",

  LoadAccess($c, $div) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'Forest.webp', path + 'zombie.webp', path + 'StoneFlower.webp', path + 'ConeheadZombie.webp', path + 'BucketheadZombie.webp', path + 'NewspaperZombie.webp', path + 'BalloonZombie.webp', path + 'SnowPea.webp', path + 'Radish.webp', RESPATH + 'ForestJx.webp']
    }); //教学关入口

    $c('left:64px;top:75px;width:109px;height:320px;', {
      onmouseover: _ => loadRes({
        img: [RESPATH + "SodRoll.png", RESPATH + "background1unsodded_1.webp", RESPATH + "background1unsodded.webp"]
      }),
      onclick: _ => jngAlert.open({
        'shade': 1,
        'text': $__language_Array__["3859b86bec72af4a7262e4a87ae45216"],
        'nextHandler': _ => SelectModal('Tutorial1')
      })
    }); //森林第一关

    $c('left:222px;top:250px;', {
      onclick: _ => oLvlInfoUI.open('Forest1', 1, [$__language_Array__["db728500d318c69b7f7050b44539829c"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["a11e3c70e0e0ff429268d4cb590fa58c"]], ['Zombie'], ["plant", oStoneFlower], 'Forest1jx')
    }); //森林第二关

    $c('left:355px;top:285px;', {
      onclick: _ => oLvlInfoUI.open('Forest2', 1, [$__language_Array__["1d2802a5e7e33fce08ba94b169f9cf45"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["240bc94fae77e28d630e0471ad0f5b73"]], ['Zombie', 'ConeheadZombie'], 1, 'Forest2jx')
    }); //森林第三关

    $c('left:482px;top:275px;', {
      onclick: _ => oLvlInfoUI.open('Forest3', 1, [$__language_Array__["cca5eca02972aef0e9fe102b31c8fd8e"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["56dbce8ea748aa050854b0bc80d56431"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie'], 1, 'Forest3jx')
    }); //森林第四关

    $c('left:633px;top:285px;', {
      onclick: _ => oLvlInfoUI.open('Forest4', 1, [$__language_Array__["e8091413040c3218a2681d678a90646e"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["5864bc83e48ad1a83072c335aec9e4cf"]], ['Zombie', 'NewspaperZombie', 'BucketheadZombie'], 1, 'Forest4jx')
    }); //森林第五关

    $c('left:770px;top:275px;', {
      onclick: _ => oLvlInfoUI.open('Forest5', 1, [$__language_Array__["a68b4511cc419bb29b45747abe53eb1a"], $__language_Array__["ed68d815d684f564be8193d4104858cf"], $__language_Array__["f4c16aaea282a25b6ca5829863ce37e0"], $__language_Array__["5864bc83e48ad1a83072c335aec9e4cf"]], ['Zombie', 'NewspaperZombie', 'ConeheadZombie'], 1, 'Forest5jx')
    });
  }

});