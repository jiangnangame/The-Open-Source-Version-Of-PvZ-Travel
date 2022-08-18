/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine, oStoneFlower, oRadish, oSnowPea, oRepeater, oCherryBomb, oTallNut, oSunShroom, oPuffShroom, oScaredyShroom, oFumeShroom, oSporeShroom, oBambooUncle, oDoomShroom,
  /*oLight,*/
  oAbutilonHybriden, oPumpkinHead],
  ZName: [oZombie, oBucketheadZombie, oConeheadZombie, oBalloonZombie, oFootballZombie, oNewspaperZombie, oStrollZombie, oCigarZombie, oImp, oCaskZombie, oSadakoZombie],
  CanSelectCard: 1,
  SunNum: 150,
  DKind: 0,
  LevelName: $__language_Array__["97b2467471f1103bd52806e334e95b18"],
  LoadMusic: "Bgm_Marsh_Ready",
  StartGameMusic: "Bgm_Marsh_Fight"
  /*LoadAccess: function(a) {
      let d = 0,
      DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
      dDave = NewImg("dDave", "images/interface/Dave.png", "left:0;top:81px", EDAll);
        (function fun() {
          switch (d) {
          case 0:
              DivTeach.onclick = fun;
              PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
              innerText(DivTeach, "山岭，卷云，残月……萤火沼泽，星月缠夜……徜徉其中，只余一梦……");
              d++;
              break;
          case 1:
             dDave.src = 'images/interface/Zomboss.png'
              PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
              innerText(DivTeach, "……把实验用机器提前拿来对付戴夫是个错误……");
              d++;
              break;
          case 2:
              PlayAudio("Zomboss" + Math.floor(1 + Math.random() * 3));
              innerText(DivTeach, "……绝绝对对的错误……");
              d++;
              break;
          case 3:
              ClearChild(DivTeach, dDave);
              oSym.addTask(30, a, [0]);
          }
      })();
  },*/

}, {
  AZ: [[oZombie, 1, 3, [3]], [oBucketheadZombie, 1, 3, [3]], [oConeheadZombie, 1, 3, [3]], [oBalloonZombie, 1, 5, [9]], [oFootballZombie, 1, 5, [9]], [oNewspaperZombie, 1, 5, [9]], [oStrollZombie, 1, 5, [9]], [oCigarZombie, 1, 5, [9]], [oImp, 1, 1], [oCaskZombie, 1, 5, [7, 8, 9]], [oSadakoZombie, 1, 4, [4, 5, 6, 7, 8, 9]]],
  FlagNum: 24,
  FlagToSumNum: {
    a1: [2, 3, 5, 8, 9, 10, 16, 20, 24],
    a2: [2, 3, 7, 10, 30, 16, 20, 28, 100]
  }
});