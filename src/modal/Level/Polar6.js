/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oPeashooter,
        oSunFlower,
        oWallNut,
        oPotatoMine,
        oStoneFlower,
        oRadish,
        oSnowPea,
        oRepeater,
        oCherryBomb,
        oTallNut,
        oSunShroom,
        oPuffShroom,
        oScaredyShroom,
        oFumeShroom,
        oSporeShroom,
        oBambooUncle,
        oDoomShroom,
        oBegonia,
        oPepper
    ],
    'ZName': [
        oImp,
        oBucketheadZombie,
        oFootballZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'LevelName': $__language_Array__['d9addae36676e179f30a12892a6fa4fd'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'LoadAccess': function (a) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function e() {
            c['onclick'] = e;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['317ffaa84f6e22d4d8ea9b3d50c134be']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['bbc7ea630a729fc015b20ee337fd9cfa']), b++;
                break;
            case 0x2:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['622d654c2dff0cb9257e0c88d8adbd4f']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['9dfe44533be04531a3b064270901ddca']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['18ddca56b3cdd518684aa5da06b06b1f']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['33c7af137f73217e9a25c2df75bc6ad8']), b++;
                break;
            case 0x6:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['89bd8d6538471ba7e27f393d47401cae']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['79d439fedf8ff5936f35b413c6c73958']), b++;
                break;
            case 0x8:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['a3465f4412a3d707607b8c7e2cf9febc']), b++;
                break;
            case 0x9:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    }
}, {
    'AZ': [
        [
            oImp,
            0x4,
            0x1
        ],
        [
            oBucketheadZombie,
            0x3,
            0x3,
            [
                0x3,
                0x4,
                0x5,
                0x6,
                0x7
            ]
        ],
        [
            oFootballZombie,
            0x2,
            0x8,
            [
                0x8,
                0x9
            ]
        ]
    ],
    'FlagNum': 0x9,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x3,
            0x5,
            0x7,
            0x8,
            0x9
        ],
        'a2': [
            0x7,
            0x3,
            0x7,
            0xe,
            0x19,
            0x1e,
            0x28
        ]
    }
});