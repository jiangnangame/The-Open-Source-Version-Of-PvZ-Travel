/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "IndustrySelection5.webp"],
  Music: "Bgm_Industry_Ready",
  backgroundImage: "images/interface/IndustrySelection4.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [path + 'ThiefZombie.webp', path + 'Cranberry.webp']
    });
    $c('left: 85px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry16', 5, [$__language_Array__["19262c90e7567c1f95ff420563ebeb9f"], $__language_Array__["0ecbfd324e5434a6588c38c0dffcdf08"], $__language_Array__["5aa7fac4c62410f7f1e8ec743bbe1d50"], $__language_Array__["691768d9e5946a77407b1c35e2640a0b"]], ['SkatingZombie', 'NewspaperZombie', 'MakeRifterZombie', 'BucketheadZombie', 'PushIceImp', 'CigarZombie', 'FootballZombie', 'Zomboni', 'BeetleCarZombie', 'SculptorZombie', 'Gargantuar'], ["images/interface/Conical_flask.png", "left: 90px;top:60px;"])
    });
    $c('left: 241px;top: 295px;', {
      onclick: _ => oLvlInfoUI.open('Industry17', 5, [$__language_Array__["5fe15c2ead38b10d62b190d5046e622d"], $__language_Array__["4865684cdf1650defc9788746929df5e"], $__language_Array__["5aa7fac4c62410f7f1e8ec743bbe1d50"], $__language_Array__["d486cf9adff8b04b2c359dda4a083992"]], ['Zombie', 'Imp', 'BalloonZombie', 'ConeheadZombie', 'PushIceImp', 'SculptorZombie', 'MembraneZombie', 'CigarZombie', 'Zomboni', 'ThiefZombie', 'BeetleCarZombie', 'Gargantuar'], 1)
    });
    $c('left: 398px;top: 300px;', {
      onclick: _ => oLvlInfoUI.open('Industry18', 5, [$__language_Array__["10d7ef3c03e6a86065066a6afa5a5e56"], $__language_Array__["6c6b642b69fb96a2a9705d47cfd008ed"], $__language_Array__["299e687ed3a9de8be90380883a6bd1da"], '/'], ['Imp', 'NewspaperZombie', 'CaskZombie', 'StrollZombie', 'SkatingZombie', 'MakeRifterZombie', 'BeetleCarZombie', 'Gargantuar', 'ThiefZombie', 'FootballZombie'], 1)
    });
    $c('left: 600px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry19', 5, [$__language_Array__["4ac5a3035277f184755f62d1a43e75cb"], $__language_Array__["8066e8ea7b6ea0d477f1ee07b5a02efb"], $__language_Array__["5aa7fac4c62410f7f1e8ec743bbe1d50"], $__language_Array__["691768d9e5946a77407b1c35e2640a0b"]], ['Imp', 'SadakoZombie', 'SkatingZombie', 'MakeRifterZombie', 'MembraneZombie', 'Zomboni', 'SculptorZombie', 'BeetleCarZombie', 'ThiefZombie', 'Gargantuar'], ["plant", oCranberry])
    });
    $c('left: 760px;top: 265px;', {
      onclick: _ => oLvlInfoUI.open('Industry20', 5, [$__language_Array__["222d1d40f012c7fb66cf5c3cfc0661a6"], $__language_Array__["cfe9b45456e10bf39f276f735a369e0b"], $__language_Array__["cf2a9e0a08f967c5d79a5843dd2e01a4"], $__language_Array__["28962d4e8e2696e89ef8034cbd00bb47"]], ['Zombie', 'Imp', 'ConeheadZombie', 'MakeRifterZombie', 'SkatingZombie', 'CigarZombie', 'MembraneZombie', 'Zomboni', 'BeetleCarZombie', 'SculptorZombie', 'Gargantuar', 'ThiefZombie'], 1)
    });
    NewImg("imgSF", "images/interface/Conical_flask.png", "left: 125px;top: 160px;clip: rect(138px,118px,auto,60px);", $box, {
      onmouseover: _ => ShowCue(110, 375, $__language_Array__["ab2c277a75b810a12bacce8505f6139d"], $__language_Array__["f9b5f5abee94359da2d7d8f592567e67"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'top: 355px;left: 170px;', {
      className: 'Shadow'
    }, $box);
  }

});