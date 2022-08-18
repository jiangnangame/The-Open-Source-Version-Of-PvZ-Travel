/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: ['images/Card/Boss.webp', "images/interface/MarshClue1.webp", "images/interface/MarshSelection6.webp"],
  Music: "Bgm_Marsh_Ready",
  backgroundImage: "images/interface/MarshSelection6.webp",

  LoadAccess($c, $box) {
    $c('left:507px;top:341px;', {
      onclick: _ => oLvlInfoUI.open('Marsh25', 2, [$__language_Array__["ec7d0d27524ba7c76da8f5798dc83dad"], $__language_Array__["4740a182ad19d0e26ed92b759216cfad"], $__language_Array__["49af05e3b28bbf19618a27d9007652c5"], '/'], ['Boss'], 1)
    });
    NewImg("imgSF", "images/interface/MarshClue1.webp", "left:-160px;top:35px;transform:scale(0.12);", $box, {
      onmouseover: _ => ShowCue(80, 365, $__language_Array__["18b7e9471382c0cd4cc1b2ada7554667"], $__language_Array__["50b5ccd836573bc6cafb46cee3d7fa88"]),
      onmouseout: _ => SetNone($('dCue'))
    });
    NewEle(null, 'div', 'top:338px;left:141px;', {
      className: 'Shadow'
    }, $box);
  }

});