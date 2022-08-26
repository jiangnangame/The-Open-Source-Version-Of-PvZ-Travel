/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: ["images/interface/MarshSelection2.webp", "images/interface/Conical_flask.png"],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection2.webp",

  LoadAccess($c, $box) {
    loadRes({
      img: ["images/interface/MarshSelection4.webp", 'images/interface/MarshSelection6.webp']
    });
    $c('left:63px;top:244px;', {
      onclick: _ => oLvlInfoUI.open('Marsh6', 2, [$__language_Array__["c226df7369e5f95ab42cbc4d198789d6"], $__language_Array__["98d220174caa2e08a3a55f1c205134dc"], $__language_Array__["cb4473f103eb2a156407799593243a1f"], $__language_Array__["6cb4dfb2d43657f6543aa5842c99089d"]], ['Zombie', 'BalloonZombie', 'ConeheadZombie', 'SadakoZombie', 'StrollZombie', 'BucketheadZombie', 'CaskZombie', 'CigarZombie', 'FootballZombie'], ["images/interface/Conical_flask.png", "left: 90px;top:60px;"], "Marsh6jx")
    });
    $c('left:258px;top:142px;', {
      onclick: _ => oLvlInfoUI.open('Marsh7', 2, [$__language_Array__["07dcfb0c436f2800b2e1ecb8f38944f9"], $__language_Array__["cda83467b341aa56118615bfb07bd185"], $__language_Array__["cb4473f103eb2a156407799593243a1f"], $__language_Array__["d5920be9b63c54b38d1cd2a4ea7afca1"]], ['Zombie', 'Imp', 'NewspaperZombie', 'StrollZombie', 'CaskZombie', 'CigarZombie'], 1)
    });
    $c('left:417px;top:205px;', {
      onclick: _ => oLvlInfoUI.open('Marsh8', 2, [$__language_Array__["bf080d9ad732a19c7fce0bff57ceef56"], $__language_Array__["98d220174caa2e08a3a55f1c205134dc"], $__language_Array__["cb4473f103eb2a156407799593243a1f"], $__language_Array__["a601a3fba98c92d8856c3cf710518516"]], ['Imp', 'ConeheadZombie', 'StrollZombie', 'SadakoZombie', 'BucketheadZombie'], 1, "Marsh8jx")
    });
    $c('left:615px;top:283px;', {
      onclick: _ => oLvlInfoUI.open('Marsh9', 2, [$__language_Array__["c102ad1a1829c1bb0451943df0813ed3"], $__language_Array__["06d9cb8ffb043b9426bce25480370caa"], $__language_Array__["cb4473f103eb2a156407799593243a1f"], $__language_Array__["40c3bbc1ab9b692ca41261645b83df99"]], ['Zombie', 'ConeheadZombie', 'FootballZombie', 'BucketheadZombie'], ["plant", oFumeShroom], "Marsh9jx")
    });
    $c('left:756px;top:337px;', {
      onclick: _ => oLvlInfoUI.open('Marsh10', 2, [$__language_Array__["61937aa5b6cec1114b64984a85a57d66"], $__language_Array__["cda83467b341aa56118615bfb07bd185"], $__language_Array__["cb4473f103eb2a156407799593243a1f"], $__language_Array__["2c868dc05372933d1c203789b06d3612"]], ['Imp', 'Zombie', 'CaskZombie', 'ConeheadZombie', 'SadakoZombie', 'BucketheadZombie'], 1)
    });
    NewImg("imgSF", "images/interface/Conical_flask.png", "left:97px;top:51px;clip: rect(138px,118px,auto,60px);", $box, {
      onmouseover: function () {
        ShowCue(89, 271, $__language_Array__["72fdd664b4efdd4614f55f6933c52a12"], $__language_Array__["830dd3d7675587772f09b0b4624a5ccd"]);
      },
      onmouseout: function () {
        SetNone($('dCue'));
      }
    });
    NewEle(null, 'div', 'top:247px;left:141px;', {
      className: 'Shadow'
    }, $box);
  }

});