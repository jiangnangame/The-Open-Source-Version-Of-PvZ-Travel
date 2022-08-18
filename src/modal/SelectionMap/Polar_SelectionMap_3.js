/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarSelection3.webp", RESPATH + "PolarSelection4.webp", "images/interface/Conical_flask.png"],
  Music: "Bgm_Polar_Ready_1",
  backgroundImage: "images/interface/PolarSelection3.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'Monotropa.webp', path + 'PushIceImp.webp']
    });
    $c('left:69px;top:311px;', {
      onclick: _ => oLvlInfoUI.open('Polar11', 3, [$__language_Array__["8b471725dca87eba45f90c05fce3f089"], $__language_Array__["21d95d62a9c26020946097b0fbd5562d"], $__language_Array__["90f8ae6edd7ae2927130cab5296a7a79"], $__language_Array__["850756ff68a2a35ad9e7e93f0e8f5c43"]], ['Zombie', 'ConeheadZombie', 'SadakoZombie', 'BucketheadZombie', 'FootballZombie'], ["plant", oMonotropa], "Polar11jx")
    });
    $c('left:230px;top:301px;', {
      onclick: _ => oLvlInfoUI.open('Polar12', 3, [$__language_Array__["f7028c5f7546b1100b6b8aee87412add"], $__language_Array__["3585791352cdbf498dfa4f49c658d7ea"], $__language_Array__["0931a3eb45a36cbf4a48c5e5e556598b"], $__language_Array__["46b57ed89dc4f8ac4543076a79c7a6e8"]], ['StrollZombie', 'BucketheadZombie', 'FootballZombie', 'PushIceImp'], ["images/interface/Conical_flask.png", "left: 90px;top:60px;"], "Polar12jx")
    });
    $c('left:428px;top:295px;', {
      onclick: _ => oLvlInfoUI.open('Polar13', 3, [$__language_Array__["19bc9f25d94aff9a6a52eab13e844b7e"], $__language_Array__["21d95d62a9c26020946097b0fbd5562d"], $__language_Array__["90f8ae6edd7ae2927130cab5296a7a79"], $__language_Array__["475705f6958343d7243300bab8de444f"]], ['SadakoZombie', 'SkatingZombie', 'StrollZombie', 'MakeRifterZombie', 'PushIceImp', 'MembraneZombie'], 1, "Polar13jx")
    });
    $c('left:600px;top:279px;', {
      onclick: _ => oLvlInfoUI.open('Polar14', 3, [$__language_Array__["f81338df041fc0f5b8874999a0e17240"], $__language_Array__["3585791352cdbf498dfa4f49c658d7ea"], $__language_Array__["ab30e8062bce232a3fc8af99393dd3d9"], $__language_Array__["0e13210539007f5f49474625b1d62d2c"]], ['Imp', 'StrollZombie', 'SadakoZombie', 'NewspaperZombie', 'SkatingZombie', 'MakeRifterZombie', 'FootballZombie'], 1, "Polar14jx")
    });
    $c('left:736px;top:249px;', {
      onclick: _ => oLvlInfoUI.open('Polar15', 3, [$__language_Array__["beebeecf49dfdc5ec34aa91b462a2137"], $__language_Array__["13075aaf3fe0d3f36c5a3741b81be73b"], $__language_Array__["90f8ae6edd7ae2927130cab5296a7a79"], $__language_Array__["a8d9160be5ce6a8fd8e8bcb00abae522"]], ['Zombie', 'SadakoZombie', 'ConeheadZombie', 'BucketheadZombie', 'PushIceImp', 'CigarZombie', 'FootballZombie', 'MembraneZombie'], 1)
    });
    NewImg("imgSF", "images/interface/Conical_flask.png", "left: 280px;top: 145px;clip: rect(138px,118px,auto,60px);", $box, {
      onmouseover: _ => ShowCue(265, 365, $__language_Array__["aad53aea59e6d3837f7d3050517a02e0"], $__language_Array__["de3c5bc1f4018890b189b165200379f3"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'top: 340px;left: 325px;', {
      className: 'Shadow'
    }, $box);
  }

});