/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "MarshSelection1.webp", RESPATH + "MarshSelection2.webp"],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection1.webp",

  LoadAccess($c) {
    const path = "images/Card/";
    loadRes({
      img: [path + "PuffShroom.webp", path + "ScaredyShroom.webp", path + "SadakoZombie.webp", path + "CaskZombie.webp", path + "Imp.webp", path + "FumeShroom.webp", RESPATH + "Marsh.webp", RESPATH + "MarshJx.webp"]
    });
    $c('left:151px;top:203px;', {
      onclick: _ => oLvlInfoUI.open('Marsh1', 2, [$__language_Array__["c0f8ec6f6b2a6f9142441ff891fcd4e1"], $__language_Array__["edd68a2f5d9b07645cddcd0523134856"], $__language_Array__["540a317aa860bc654f72fe238ad9f46a"], $__language_Array__["55dea589f7aa37b47425c3e8e553864f"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie'], ["plant", oPuffShroom], "Marsh1jx")
    });
    $c('left:320px;top:261px;', {
      onclick: _ => oLvlInfoUI.open('Marsh2', 2, [$__language_Array__["4e46f1c46bf1456e6b61c0017b8c945b"], $__language_Array__["edd68a2f5d9b07645cddcd0523134856"], $__language_Array__["540a317aa860bc654f72fe238ad9f46a"], $__language_Array__["885d1efde116ee6b2a54ffdc1ccdaa48"]], ['Zombie', 'ConeheadZombie', 'CaskZombie'], 1, "Marsh2jx")
    });
    $c('left:502px;top:206px;', {
      onclick: _ => oLvlInfoUI.open('Marsh3', 2, [$__language_Array__["c00512d2a199cc20be78f9e2c6ef7994"], $__language_Array__["edd68a2f5d9b07645cddcd0523134856"], $__language_Array__["540a317aa860bc654f72fe238ad9f46a"], $__language_Array__["c8d39478439ed7767ea8cbd8c6dd2e61"]], ['Zombie', 'ConeheadZombie', 'CaskZombie', 'BucketheadZombie', 'FootballZombie'], 1, "Marsh3jx")
    });
    $c('left:634px;top:130px;', {
      onclick: _ => oLvlInfoUI.open('Marsh4', 2, [$__language_Array__["650c8b0c53f11debbc78e2a7626c43e4"], $__language_Array__["3825b39bf41e2aa79d6c260caa5d9259"], $__language_Array__["540a317aa860bc654f72fe238ad9f46a"], $__language_Array__["55dea589f7aa37b47425c3e8e553864f"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'CaskZombie', 'SadakoZombie'], 1)
    });
    $c('left:796px;top:153px;', {
      onclick: _ => oLvlInfoUI.open('Marsh5', 2, [$__language_Array__["e800730533a9b37d74bcaa75bb1d4df9"], $__language_Array__["3a39b02718ad0ff9b1e468a93eb16860"], $__language_Array__["540a317aa860bc654f72fe238ad9f46a"], $__language_Array__["cc24b00501b77a0eacbd4fb311c19a0e"]], ['Zombie', 'ConeheadZombie', 'SadakoZombie', 'StrollZombie', 'BucketheadZombie'], ["plant", oScaredyShroom], "Marsh5jx")
    });
  }

});