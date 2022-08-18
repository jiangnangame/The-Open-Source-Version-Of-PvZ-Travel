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
        oPepper,
        oIceAloe,
        oImitater,
        oMonotropa,
        oSpikeweed,
        oTorchwood,
        oKiwibeast
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oImp,
        oMembraneZombie,
        oCigarZombie,
        oMakeRifterZombie,
        oSkatingZombie,
        oStrollZombie,
        oFootballZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['b5b02429de00d8ee71f388050412c8a8'],
    'LoadAccess'(b) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
        let c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            d['onclick'] = f;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['eda3a8c2da1da0f9d7bc170154cbf2a4']), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['08846edfff5d80a86ac50fe004ea0d9a']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['2675b5c45ccf08831740b2c4a9d99340']), c++;
                break;
            case 0x3:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['f86c596aa50a9608a14802bb6d3d5647']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['ff6a98f9e0295192bd2e735781346dce']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['f0f32f892dd86da93effe2f3d494e336']), c++;
                break;
            case 0x6:
                ClearChild(d, e), oSym['addTask'](0x1e, b);
            }
        }());
    },
    'HaveFog': {
        'leftBorder': 0x2,
        'type': 'Fog'
    }
}, {
    'AZ': [
        [
            oZombie,
            0x3,
            0x1,
            [
                0x1,
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
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
            0xa
        ],
        [
            oImp,
            0x2,
            0x1,
            [
                0x1,
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ],
        [
            oMembraneZombie,
            0x2,
            0x3,
            [
                0x3,
                0x4,
                0x5,
                0xa,
                0x13,
                0x14
            ]
        ],
        [
            oCigarZombie,
            0x2,
            0x3,
            [
                0x3,
                0xa,
                0x13,
                0x14
            ]
        ],
        [
            oMakeRifterZombie,
            0x1,
            0xa
        ],
        [
            oSkatingZombie,
            0x1,
            0xa
        ],
        [
            oStrollZombie,
            0x1,
            0xa
        ],
        [
            oFootballZombie,
            0x1,
            0xa
        ],
        [
            oZomboni,
            0x2,
            0xa,
            [
                0xf,
                0x13,
                0x14
            ]
        ]
    ],
    'FlagNum': 0x14,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x5,
            0x7,
            0x9,
            0xb,
            0xd,
            0xf,
            0x11,
            0x13,
            0x14
        ],
        'a2': [
            0x2,
            0x3,
            0x5,
            0xa,
            0x14,
            0x1c,
            0x1e,
            0x23,
            0x26,
            0x2a,
            0x2d
        ]
    }
});