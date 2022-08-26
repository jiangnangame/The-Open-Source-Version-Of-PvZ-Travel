/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarSelection2.webp"],
  Music: "Bgm_Polar_Ready_1",
  backgroundImage: "images/interface/PolarSelection2.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'PolarSelection4.webp', RESPATH + 'PolarSelection6.webp', path + 'IceAloe.webp', path + 'MembraneZombie.webp', path + 'Imitater.webp']
    });
    $c('left:86px;top:288px;', {
      onclick: _ => oLvlInfoUI.open('Polar6', 3, [$__language_Array__["c8dc8f4d557e093a19e9a1acda567a16"], $__language_Array__["65475b425fde9e204f697c8fd9ec234f"], $__language_Array__["c95ce214dcc1af33d5a33d0fc2292673"], $__language_Array__["fdee7a56cb932c3e08717513212467df"]], ['Imp', 'BucketheadZombie', 'FootballZombie'], 1, "Polar6jx")
    });
    $c('left:243px;top:270px;', {
      onclick: _ => oLvlInfoUI.open('Polar7', 3, [$__language_Array__["5626ee3a6a8f30b2cec073776a723c8b"], $__language_Array__["16cae51b844267bedf76df94a2306717"], $__language_Array__["73a42c46b9e367b47d8852e9e5f56985"], $__language_Array__["16b2f388d58cf602b9b2832bbf2f7c4e"]], ['Zombie', 'MakeRifterZombie', 'SkatingZombie', 'StrollZombie', 'NewspaperZombie', 'MembraneZombie', 'CigarZombie'], ["plant", oIceAloe])
    });
    $c('left:380px;top: 250px;', {
      onclick: _ => oLvlInfoUI.open('Polar8', 3, [$__language_Array__["e0cc006794cc37e8b6ab0104d9f833f0"], $__language_Array__["9c6e789c4554297e4d92002774bab9ef"], $__language_Array__["9b7d36fcb0ac4e424950542699e66cfc"], $__language_Array__["9a1db96c6d39555cb826c1f40dc9f5ad"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie'], 1)
    });
    $c('left:560px;top:280px;', {
      onclick: _ => oLvlInfoUI.open('Polar9', 3, [$__language_Array__["2c1227f417865f0179fd21c7b5144f63"], $__language_Array__["c6ab1fe82c6cec0123a32a7f4c55368d"], $__language_Array__["73a42c46b9e367b47d8852e9e5f56985"], $__language_Array__["9a1db96c6d39555cb826c1f40dc9f5ad"]], ['Imp', 'SadakoZombie', 'SkatingZombie', 'MakeRifterZombie', 'FootballZombie'], 1, "Polar9jx")
    });
    $c('left:710px;top:290px;', {
      onclick: _ => oLvlInfoUI.open('Polar10', 3, [$__language_Array__["939381fb5e6a5c18333cf8b617332483"], $__language_Array__["4aa19b44b5383fdce15b08f794bbf458"], $__language_Array__["c95ce214dcc1af33d5a33d0fc2292673"], '/'], ['Imp', 'SadakoZombie', 'MakeRifterZombie', 'CaskZombie', 'StrollZombie', 'MembraneZombie', 'FootballZombie', 'BucketheadZombie', 'CigarZombie'], ["plant", oImitater])
    });
  }

});