/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "PolarClue1.webp", RESPATH + "PolarClue2.webp", RESPATH + "PolarSelection4.webp"],
  Music: "Bgm_Polar_Ready_2",
  backgroundImage: "images/interface/PolarSelection4.webp",

  LoadAccess($c, $box) {
    const path = "images/Card/";
    loadRes({
      img: [RESPATH + 'PolarSelection6.webp', path + 'Spikeweed.webp', path + 'Zomboni.webp', path + 'Torchwood.webp']
    });
    $c('left:145px;top:309px;', {
      onclick: _ => oLvlInfoUI.open('Polar16', 4, [$__language_Array__["9e0f1f3e6fb277d8627806b989ccfafe"], $__language_Array__["49763fc34317e5d4d6977ee7fb918ea6"], $__language_Array__["a1b704c9eac94ea08af70767581c118e"], $__language_Array__["10ec1c14e11d98b569e10ad0f28bae40"]], ['SkatingZombie', 'MakeRifterZombie', 'Zomboni'], ["plant", oSpikeweed], "Polar16jx")
    });
    $c('left:281px;top:309px;', {
      onclick: _ => oLvlInfoUI.open('Polar17', 4, [$__language_Array__["bbcd40da2ff17dba6713f5fa0b62b90a"], $__language_Array__["d4c4b4b89b8eab824ef1456a5c509a87"], $__language_Array__["a1b704c9eac94ea08af70767581c118e"], $__language_Array__["669f84db8d6b7d4dd749e1f1dcc0f8a9"]], ['Zombie', 'ConeheadZombie', 'StrollZombie', 'SadakoZombie', 'BucketheadZombie'], 1, "Polar17jx")
    });
    $c('left:429px;top:309px;', {
      onclick: _ => oLvlInfoUI.open('Polar18', 4, [$__language_Array__["5590077a4d541e700c4d7d2ff28a37d5"], $__language_Array__["ac6532acd9bf20b05012435adf3f9a8d"], $__language_Array__["a1b704c9eac94ea08af70767581c118e"], '/'], ['Zomboni'], ["images/interface/PolarClue1.webp", "left:-150px;top:-70px;transform:scale(0.12);"])
    });
    $c('left:573px;top:289px;', {
      onclick: _ => oLvlInfoUI.open('Polar19', 4, [$__language_Array__["c6ec7af4618453c8c5497255abacb09f"], $__language_Array__["01f759007212c1ad6ca405fdf9aa85c8"], $__language_Array__["8ac58f2c6751b7f3e30b9eef236d6de6"], $__language_Array__["4bba7ceed29e613d382f5c817cf776ff"]], ['SkatingZombie', 'SadakoZombie', 'StrollZombie', 'CigarZombie', 'PushIceImp', 'FootballZombie', 'NewspaperZombie'], ["plant", oTorchwood])
    });
    $c('left:693px;top:267px;', {
      onclick: _ => oLvlInfoUI.open('Polar20', 4, [$__language_Array__["cb5e34ad7a9019f49b6a4038e62b5ba4"], $__language_Array__["5d9f10259da65f2ef8478904cb8d4742"], $__language_Array__["a1b704c9eac94ea08af70767581c118e"], $__language_Array__["669f84db8d6b7d4dd749e1f1dcc0f8a9"]], ['SadakoZombie'], ["images/interface/PolarClue2.webp", "left:-100px;top:-70px;transform:scale(0.12);"], "Polar20jx")
    });
    NewImg("imgSF", "images/interface/PolarClue1.webp", "left:190px;top:30px;transform: scale(0.12);", $box, {
      onmouseover: _ => ShowCue(450, 364, $__language_Array__["6fb3fd47420713d7f81b07c0a194b265"], $__language_Array__["91c559b1d24a0263362be7c5a45a95e6"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewImg("imgSF", "images/interface/PolarClue2.webp", "left: 525px;top:-25px;transform: scale(0.12);", $box, {
      onmouseover: _ => ShowCue(635, 318, $__language_Array__["8684b47392b34d0d8509b423e8e49329"], $__language_Array__["774740306ea7842cc8d207d0b8b13192"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'left: 495px;top: 337px;', {
      className: 'Shadow'
    }, $box);
    NewEle(null, 'div', 'left: 760px;top: 295px;', {
      className: 'Shadow'
    }, $box);
  }

});