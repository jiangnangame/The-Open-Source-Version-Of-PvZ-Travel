/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarSelection5.webp", RESPATH + "PolarSelection6.webp"],
  Music: "Bgm_Polar_Ready_2",
  backgroundImage: "images/interface/PolarSelection5.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'PolarSelection6.webp', path + 'Spikeweed.webp', path + 'Zomboni.webp', path + 'Torchwood.webp']
    });
    $c('left:81.7px;top:265px;', {
      onclick: _ => oLvlInfoUI.open('Polar21', 4, [$__language_Array__["b9a6bae49ee3371280cb3d56d1ee6037"], $__language_Array__["6254a19710af46286db9eda3da598398"], $__language_Array__["6f57125d4750beb7ebfd296c8b2e57b0"], $__language_Array__["aa0682a37b1aba3d1439cf1f9ddf1dd8"]], ['Zombie', 'StrollZombie', 'SkatingZombie', 'MakeRifterZombie', 'Zomboni', 'MembraneZombie', 'FootballZombie'], 1, "Polar21jx")
    });
    $c('left:240.7px;top:298px;', {
      onclick: _ => oLvlInfoUI.open('Polar22', 4, [$__language_Array__["16dca1627d91770f7c235db4f47b7b8a"], $__language_Array__["6185ea2a59c626732b2135bfb068869a"], $__language_Array__["6f57125d4750beb7ebfd296c8b2e57b0"], $__language_Array__["5a5620e62709a465c06e04fe18c4d1ac"]], ['Imp', 'BalloonZombie', 'SkatingZombie', 'CigarZombie', 'Zomboni', 'MembraneZombie'], 1, "Polar22jx")
    });
    $c('left:426.7px;top:298px;', {
      onclick: _ => oLvlInfoUI.open('Polar23', 4, [$__language_Array__["1dd816a8b077d4902434265947c00add"], $__language_Array__["e0ba97c70a783e91650c0dc53f8196fa"], $__language_Array__["50548f6b554e645564068fc090f87723"], $__language_Array__["5a5620e62709a465c06e04fe18c4d1ac"]], ['ConeheadZombie', 'SadakoZombie', 'CaskZombie', 'MakeRifterZombie', 'BucketheadZombie', 'FootballZombie'], ["plant", oKiwibeast])
    });
    $c('left:608.7px;top:304px;', {
      onclick: _ => oLvlInfoUI.open('Polar24', 4, [$__language_Array__["0e1a84f0f9b95f586c38312eaa1f6239"], $__language_Array__["85d035a1628f7e405e8227ac096ceb01"], $__language_Array__["6f57125d4750beb7ebfd296c8b2e57b0"], $__language_Array__["5a5620e62709a465c06e04fe18c4d1ac"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'SkatingZombie', 'CaskZombie', 'MakeRifterZombie', 'BucketheadZombie', 'Zomboni'], 1, "Polar24jx")
    });
    $c('left:766.7px;top: 336px;', {
      onclick: _ => oLvlInfoUI.open('Polar25', 4, [$__language_Array__["4ebf994ce765abda74f7cceb74710095"], $__language_Array__["c427be1c2c61eac5a581e8f2f759cbef"], $__language_Array__["50548f6b554e645564068fc090f87723"], $__language_Array__["3e80be9791da20cada599a78fc3c98a1"]], ['Imp', 'CaskZombie', 'SadakoZombie', 'MakeRifterZombie', 'SkatingZombie', 'StrollZombie', 'Zomboni', 'FootballZombie', 'BucketheadZombie', 'CigarZombie'], 1, "Polar25jx")
    });
  }

});