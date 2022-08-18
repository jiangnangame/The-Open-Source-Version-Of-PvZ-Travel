/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oIceAloe,
        oRadish,
        oSnowPea,
        oRepeater,
        oJalapeno
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oSadakoZombie,
        oPushIceImp,
        oCigarZombie,
        oFootballZombie,
        oMembraneZombie
    ],
    'PicArr': [
        'images/interface/Polar.webp',
        'images/interface/Encirclement_and_annihilation2.webp'
    ],
    'LevelName': $__language_Array__['ac6f8a837411ef038023b29ec71d7675'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'LF': [
        0x0,
        0x3,
        0x3,
        0x3,
        0x3,
        0x3
    ],
    'ZF': [
        0x0,
        0x1,
        0x0,
        0x0,
        0x0,
        0x1
    ],
    'FixedProps': 'disabled',
    'InitLawnMover': () => {
    },
    'LoadAccess': function (b) {
        NewEle(0x0, 'div', 'width:780px;height:535px;position:absolute;z-index:1;background:url(images/interface/Encirclement_and_annihilation2.webp);left:225px;top:65px;', 0x0, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1), oSym['addTask'](0x5a, b);
    },
    'StartGame': function () {
        for (let a = 0x1; a < 0x5; a++) {
            for (let b = 0x2; b < 0x6; b++) {
                a + '' + b !== '42' && CustomSpecial(oInvisibleFlowerPot, b, a);
            }
        }
        for (let c = 0x4; c < 0x7; c++) {
            CustomSpecial(oInvisibleFlowerPot, 0x1, c);
        }
        CustomSpecial(oInvisibleFlowerPot, 0x2, 0x6), CustomSpecial(oInvisibleFlowerPot, 0x3, 0x8), CustomSpecial(oGoDown, 0x1, 0x7), CustomSpecial(oGoDown, 0x2, 0x7), CustomSpecial(oGoLeft, 0x3, 0x7), CustomSpecial(oGoUp, 0x3, 0x5), CustomSpecial(oGoLeft, 0x2, 0x5), CustomSpecial(oGoUp, 0x2, 0x3), CustomSpecial(oGoLeft, 0x1, 0x3), CustomSpecial(oGoUp, 0x5, 0x5), CustomSpecial(oGoRight, 0x4, 0x5), CustomSpecial(oGoUpFixed, 0x4, 0x9), CustomSpecial(oGoLeftFixed, 0x2, 0x9);
        for (let d = 0x1; d <= 0x5; d++) {
            for (let e = 0x1; e < 0xa; e++) {
                let f = !![];
                for (let g = 0x0; g <= PKindUpperLimit; g++) {
                    if (oGd['$'][d + '_' + e + '_' + g]) {
                        f = ![];
                        break;
                    }
                }
                f && CustomSpecial(oObstacle, d, e);
            }
        }
        oMiniGames['ConveyorBelt']([
            oIceAloe,
            oRadish,
            oRadish,
            oRadish,
            oSnowPea,
            oSnowPea,
            oRepeater,
            oRepeater,
            oRepeater,
            oJalapeno
        ], 0x4b0);
    }
}, {
    'AZ': [
        [
            oZombie,
            0x1,
            0x1,
            [0x1]
        ],
        [
            oConeheadZombie,
            0x1,
            0x2,
            [0x2]
        ],
        [
            oBucketheadZombie,
            0x1,
            0x3,
            [0x3]
        ],
        [
            oSadakoZombie,
            0x1,
            0x1,
            [
                0x1,
                0x5
            ]
        ],
        [
            oPushIceImp,
            0x1,
            0x8
        ],
        [
            oCigarZombie,
            0x1,
            0xa,
            [0xa]
        ],
        [
            oFootballZombie,
            0x1,
            0xc,
            [
                0xc,
                0xf,
                0x12
            ]
        ],
        [
            oMembraneZombie,
            0x1,
            0xf,
            [
                0xf,
                0x10,
                0x11,
                0x12
            ]
        ]
    ],
    'FlagNum': 0x12,
    'FlagToSumNum': {
        'a1': [
            0x5,
            0x9,
            0xa,
            0xc,
            0x11
        ],
        'a2': [
            0x6,
            0x18,
            0x24,
            0x1c,
            0x20,
            0x32
        ]
    },
    'FlagToEnd': function () {
        let a = EDPZ['querySelectorAll']('div');
        for (let b of a) {
            b['id']['indexOf']('Z_') === 0x0 && ClearChild(b);
        }
        oS['DefaultFlagToEnd']();
    }
});