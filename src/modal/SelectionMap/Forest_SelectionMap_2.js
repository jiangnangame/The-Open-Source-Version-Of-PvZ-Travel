/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [RESPATH + "ForestSelection2.webp"],
  Music: "Bgm_Forest_Ready",
  backgroundImage: "images/interface/ForestSelection2.webp",

  LoadAccess($c) {
    loadRes({
      img: [RESPATH + 'ForestSelection4.webp', RESPATH + 'ForestSelection3.webp']
    }); //森林第六关

    $c("left:60px;top:235px;", {
      onclick: _ => oLvlInfoUI.open('Forest6', 1, [$__language_Array__["49dd9669f0379c6bd09ac232753eedc6"], $__language_Array__["eef24b0213a5b2250fc238b84804b434"], $__language_Array__["d018f5392263d1717da2e591a1a80ec2"], $__language_Array__["92a43f2e4aaf0205246d9f899cd51bbe"]], ['Zombie', 'NewspaperZombie', 'ConeheadZombie', 'BucketheadZombie'], 1, 'Forest6jx')
    }); //森林第七关

    $c("left:188px;top:230px;", {
      onclick: _ => oLvlInfoUI.open('Forest7', 1, [$__language_Array__["bf35676a74223aed06320355e719cc9b"], $__language_Array__["eef24b0213a5b2250fc238b84804b434"], $__language_Array__["d018f5392263d1717da2e591a1a80ec2"], $__language_Array__["32a11a2347e7a05d4724be9857011959"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie'], ["plant", oRadish], 'Forest7jx')
    }); //森林第八关

    $c('left:310px;top:190px;', {
      onclick: _ => oLvlInfoUI.open('Forest8', 1, [$__language_Array__["d3e29838245823d40a3c98ec681222ce"], $__language_Array__["eef24b0213a5b2250fc238b84804b434"], $__language_Array__["d018f5392263d1717da2e591a1a80ec2"], $__language_Array__["f6f80825fa10036ca18122abdd9203c4"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie', 'BucketheadZombie'], 1, 'Forest8jx')
    }); //森林第九关

    $c('left:452px;top:210px;', {
      onclick: _ => oLvlInfoUI.open('Forest9', 1, [$__language_Array__["92f917ae3411e56cd2a3c5444c583ba9"], $__language_Array__["eef24b0213a5b2250fc238b84804b434"], $__language_Array__["d018f5392263d1717da2e591a1a80ec2"], $__language_Array__["584df7da014828099f6c990018f1e17b"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie', 'BucketheadZombie'], 1, 'Forest9jx')
    }); //森林第十关

    $c('left:555px;top:210px;', {
      onclick: _ => oLvlInfoUI.open('Forest10', 1, [$__language_Array__["842d7b8b5b19df6a513763fc9ba279d2"], $__language_Array__["f5562142b5df9519b24d98d9bbcb9084"], $__language_Array__["d018f5392263d1717da2e591a1a80ec2"], $__language_Array__["c6aa008d05d0677954ef4a26edd0b011"]], ['Zombie', 'BalloonZombie', 'NewspaperZombie', 'ConeheadZombie', 'BucketheadZombie'], ["plant", oSnowPea])
    });
  }

});