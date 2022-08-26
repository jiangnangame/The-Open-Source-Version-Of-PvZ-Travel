/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarSelection1.webp", RESPATH + "PolarSelection2.webp", "images/Props/LSP/LSP.gif"],
  Music: "Bgm_Polar_Ready_1",
  backgroundImage: "images/interface/PolarSelection1.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'Polar.webp', RESPATH + 'Polar_Mask2.webp', RESPATH + 'Polar_Mask1.webp', path + 'Begonia.webp', path + 'LSP.webp', path + 'Pepper.webp', path + 'SkatingZombie.webp', path + 'MakeRifterZombie.webp', ...oRifter.prototype.PicArr]
    });
    $c('left:86px;top:288px;', {
      onclick: _ => oLvlInfoUI.open('Polar1', 3, [$__language_Array__["56a2ce83969784b2ffb62099e172874b"], $__language_Array__["74a894636a39491122f20ec74bc6bf38"], $__language_Array__["2eb4ad5a085d71bf5bda66db70d82a48"], $__language_Array__["baa560e60f546627be30eb7a427d7ef3"]], ['Zombie', 'ConeheadZombie', 'StrollZombie', 'BucketheadZombie', 'CigarZombie'], 1, "Polar1jx")
    });
    $c('left:243px;top:301px;', {
      onclick: _ => oLvlInfoUI.open('Polar2', 3, [$__language_Array__["0c752c34804938a9bf9a816b7f384a4f"], $__language_Array__["8acd73ed5eff714d06b00de77a97b75b"], $__language_Array__["2eb4ad5a085d71bf5bda66db70d82a48"], $__language_Array__["6ee87bc0a4ec64b4d65b70ac3880af92"]], ['StrollZombie', 'SkatingZombie'], ["plant", oBegonia])
    });
    $c('left:407px;top:322px;', {
      onclick: _ => oLvlInfoUI.open('Polar3', 3, [$__language_Array__["79d841f1d6658c621ee2146d937b25bc"], $__language_Array__["2554ff9283cee1463380cd5d3f06f47a"], $__language_Array__["37aa15e344263023873d7b9eff3506d8"], $__language_Array__["b96a967366fbe29902b575e57239e4ad"]], ['Imp', 'BalloonZombie', 'Zombie', 'ConeheadZombie', 'SkatingZombie', 'NewspaperZombie', 'CaskZombie', 'StrollZombie', 'SadakoZombie', 'BucketheadZombie', 'FootballZombie', 'CigarZombie'], 1)
    });
    $c('left:572px;top:322px;', {
      onclick: _ => oLvlInfoUI.open('Polar4', 3, [$__language_Array__["c6ae5eacc39337acec01b292b9681195"], $__language_Array__["74a894636a39491122f20ec74bc6bf38"], $__language_Array__["2eb4ad5a085d71bf5bda66db70d82a48"], $__language_Array__["6ee87bc0a4ec64b4d65b70ac3880af92"]], ['Zombie', 'SadakoZombie', 'CaskZombie', 'SkatingZombie', 'CigarZombie'], ["images/Card/LSP.webp", "left: 150px;top:200px;clip:rect(auto,auto,60px,auto);"], "Polar4jx")
    });
    $c('left:740px;top:314px;', {
      onclick: _ => oLvlInfoUI.open('Polar5', 3, [$__language_Array__["b92ccddf28780844ee458d446c3e846b"], $__language_Array__["37d37cb006173572875d0ce480aa47bd"], $__language_Array__["2eb4ad5a085d71bf5bda66db70d82a48"], $__language_Array__["b96a967366fbe29902b575e57239e4ad"]], ['Zombie', 'StrollZombie', 'MakeRifterZombie', 'SadakoZombie', 'SkatingZombie'], ["plant", oPepper])
    });
    NewImg("imgSF", "images/Props/LSP/LSP.gif", "left:590px;top:200px;clip: rect(90px 130px auto 60px);", $box, {
      onmouseover: _ => ShowCue(600, 360, $__language_Array__["ed02f6172fd1da8dff75f0186a2bf439"], $__language_Array__["24ba80151cc024296e272234a1942318"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'top:340px;left:650px;', {
      className: 'Shadow'
    }, $box);
  }

});