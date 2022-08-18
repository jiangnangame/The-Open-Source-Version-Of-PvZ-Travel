/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

oSelectionMap.loadPage({
  PicArr: [],
  Music: "Bgm_Industry_Ready",
  backgroundImage: "images/interface/IndustrySelection5.webp",

  LoadEveryTime() {
    let blackShade = NewEle("effect" + Math.random(), "div", "pointer-events:none;position:absolute;z-index:320;width:1400px;height:600px;background:#000;opacity:0.3;", 0, EDAll);
    oEffects.BgParticle({
      style: "z-index:300;",
      url: "images/Props/Effect/Rain.png",
      timeout: 4,
      move: function (i) {
        i.left -= 4.5 * oSym.NowSpeed;
        i.top += 6 * oSym.NowSpeed;
      },
      size: {
        width: 140,
        height: 140
      }
    });
  },

  LoadAccess($c, $box) {
    let moved = false;
    const path = "images/Card/";
    loadRes({
      img: [path + 'ThiefZombie.webp', path + 'Cranberry.webp']
    });
    $c('left: 85px;top: 270px;', {
      onclick: _ => oLvlInfoUI.open('Industry21', 5, [$__language_Array__["c97ec63c7859cf031ba7956b0383be71"], $__language_Array__["ff0e2053c95fa69be9a528d34e592ecc"], $__language_Array__["d6b4268fc945321179953915438681fe"], $__language_Array__["4cc5697566928f17a4d280c285383054"]], ['Zombie', 'Imp', 'ConeheadZombie', 'StrollZombie', 'MakeRifterZombie', 'MembraneZombie', 'PushIceImp', 'Zomboni', 'SculptorZombie', 'BeetleCarZombie', 'ThiefZombie', 'Gargantuar'], 1)
    });
    $c('left: 267px;top: 295px;', {
      onclick: _ => oLvlInfoUI.open('Industry22', 5, [$__language_Array__["9c07dd3f70225abacf022fece0772104"], $__language_Array__["420a75d5270b352ef67bc85650030119"], $__language_Array__["60cc1967744f4ea8a4c3dae89e9781b6"], '/'], ['unknown'], 1)
    });
    $c('left: 438px;top: 270px;', {
      onclick: _ => oLvlInfoUI.open('Industry23', 5, [$__language_Array__["fe9c7ac3420e77ad2b8bd6b5a814308f"], $__language_Array__["40ed73f02a45b2a94140f0a9a9d601c3"], $__language_Array__["d6b4268fc945321179953915438681fe"], $__language_Array__["63ab0893eec24d62a05e4b0e1f4a4296"]], ['Zombie', 'Imp', 'ConeheadZombie', 'StrollZombie', 'SadakoZombie', 'CaskZombie', 'SkatingZombie', 'MakeRifterZombie', 'FootballZombie', 'BucketheadZombie', 'CigarZombie', 'MembraneZombie', 'PushIceImp', 'Zomboni', 'BeetleCarZombie', 'SculptorZombie', 'ThiefZombie', 'Gargantuar'], ["plant", oMelonPult])
    });
    $c('left: 600px;top: 280px;', {
      onclick: _ => oLvlInfoUI.open('Industry24', 5, [$__language_Array__["2f279a3eff9fd24ea6d1b5da1f7df0c2"], $__language_Array__["ef3853c41f04e1ef514acbe6d2bc349e"], $__language_Array__["82e7028c9b2657bcf03e5bf62d7c238f"], $__language_Array__["7e7b81fbe8b24bbe4ed58d550e2ad3f9"]], ['Imp', 'NewspaperZombie', 'CaskZombie', 'StrollZombie', 'PushIceImp', 'FootballZombie', 'CigarZombie', 'Zomboni', 'Gargantuar', 'BeetleCarZombie', 'SculptorZombie'], ["plant", oElecTurnip])
    });
    $c('left: 760px;top: 305px;', {
      onclick: _ => {
        var _localStorage$JNG_TR_;

        let bonus_note = true;
        let json = JSON.parse((_localStorage$JNG_TR_ = localStorage.JNG_TR_OPTIONS_INDUSTRYPART3) !== null && _localStorage$JNG_TR_ !== void 0 ? _localStorage$JNG_TR_ : "{}");

        for (let i = 21; i < 25; i++) {
          if ((json["fail" + i] >= 9 || !json["fail" + i]) && json["fail" + i] !== 0) {
            bonus_note = false;
            break;
          }
        }

        if (typeof option__isCheatEngineStart !== "undefined" || !!localStorage.JNG_TR_CHEATINDUSTRYPART3__) {
          bonus_note = false;
        }

        let bonus = 1;

        if (bonus_note) {
          bonus = ["images/Props/Industry25/plan_note.png", "left: 150px;top:200px;width:15%;"];
        }

        oLvlInfoUI.open('Industry25', 5, [$__language_Array__["190f91d976d2711fb4a21b0d1b06756b"], $__language_Array__["c878af123bc68e5a3506707761c2d70c"], $__language_Array__["dee4e7cec10879667e14326c0c42467d"], '/'], ['Boss'], bonus);
      }
    });
  }

});