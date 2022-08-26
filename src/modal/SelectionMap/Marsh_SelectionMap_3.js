/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "MarshSelection3.webp", RESPATH + "MarshSelection4.webp"],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection3.webp",

  LoadAccess($c) {
    const path = "images/Card/";
    loadRes({
      img: [path + "SporeShroom.webp", path + "Light.webp", path + "BambooUncle.webp", path + "DoomShroom.webp"]
    });
    $c('left:107px;top:180px;', {
      onclick: _ => oLvlInfoUI.open('Marsh11', 2, [$__language_Array__["4c8e03fbf9d6c0d961a21486d1db720c"], $__language_Array__["3ff047b4430522038323f48e097d91cf"], $__language_Array__["baacb965f0ddf580b5d4b057bd6c2f6a"], $__language_Array__["a8a363a3d181e5a8fa4cba0d2d80a56e"]], ['Zombie', 'ConeheadZombie', 'BucketheadZombie', 'CaskZombie', 'FootballZombie'], 1, "Marsh11jx")
    });
    $c('left:276px;top:245px;', {
      onclick: _ => oLvlInfoUI.open('Marsh12', 2, [$__language_Array__["e5f00d1d1728ef5a01a63aeafba6dd09"], $__language_Array__["0660933082fd2ea178bd93607e5d3bdb"], $__language_Array__["baacb965f0ddf580b5d4b057bd6c2f6a"], $__language_Array__["61a5aa8432ed4415f151290f8616a276"]], ['Zombie', 'NewspaperZombie', 'ConeheadZombie', 'SadakoZombie', 'StrollZombie', 'CigarZombie'], ["plant", oSporeShroom])
    });
    $c('left:420px;top:173px;', {
      onclick: _ => oLvlInfoUI.open('Marsh13', 2, [$__language_Array__["5dc7723a1e0e254bcca76342eb32547a"], $__language_Array__["3ff047b4430522038323f48e097d91cf"], $__language_Array__["baacb965f0ddf580b5d4b057bd6c2f6a"], $__language_Array__["613ce8f95ec248fc03af3806f42a3dea"]], ['Imp', 'Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie', 'SadakoZombie', 'CaskZombie', 'BucketheadZombie', 'FootballZombie'], 1, "Marsh13jx")
    });
    $c('left:622px;top:162px;', {
      onclick: _ => oLvlInfoUI.open('Marsh14', 2, [$__language_Array__["ebb0f4a203f6f37d2117ce7c83162205"], $__language_Array__["3ff047b4430522038323f48e097d91cf"], $__language_Array__["baacb965f0ddf580b5d4b057bd6c2f6a"], $__language_Array__["613ce8f95ec248fc03af3806f42a3dea"]], ['Zombie', 'ConeheadZombie', 'NewspaperZombie', 'StrollZombie', 'CigarZombie', 'BucketheadZombie', 'FootballZombie'], ["images/Card/Light.webp", "left: 150px;top:200px;clip:rect(auto,auto,60px,auto);"], "Marsh14jx")
    });
    $c('left:778px;top:192px;', {
      onclick: _ => oLvlInfoUI.open('Marsh15', 2, [$__language_Array__["f25c1c930503524a2d5104a4f12bb308"], $__language_Array__["c74626013505c1049e24d759e8ad4178"], $__language_Array__["baacb965f0ddf580b5d4b057bd6c2f6a"], $__language_Array__["61a5aa8432ed4415f151290f8616a276"]], ['Imp', 'Zombie', 'ConeheadZombie', 'NewspaperZombie', 'CaskZombie', 'SadakoZombie', 'BucketheadZombie'], ["plant", oBambooUncle], "Marsh15jx")
    });
    $c('left:622px;top:103px;', {
      onmouseover: _ => ShowCue(555, 161, $__language_Array__["7708a9f24efb9f5a0af60042e25db470"], $__language_Array__["2b7fee07046dfaa19ccec87b8ab4fc5a"]),
      onmouseout: _ => SetNone($('dCue'))
    });
  }

});