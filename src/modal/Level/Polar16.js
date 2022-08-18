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
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oSkatingZombie,
        oMakeRifterZombie,
        oZomboni
    ],
    'PicArr': (function () {
        let c = oSpikeweed['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']]
        ];
    }()),
    'LevelName': $__language_Array__['c4f72f96fc97bb6edeb796c53f3af806'],
    'LoadMusic': 'Bgm_Polar_3_NPC',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'DKind': 0x0,
    'SunNum': 0x12c,
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
        for (let e = 0x8; e < 0xa; e++) {
            for (let f = 0x1; f < 0x6; f++) {
                CustomSpecial(oPuffShroom, f, e);
            }
        }
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function g() {
            c['onclick'] = g;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['cf5587bb5c895dbaef91b3f6b0832485']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['a4927e2d33ca3c5db3747aea01af832b']), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['0dbee332d4ac48dc66f8898a2ea72541']), b++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['8bf6e318b723722e0070a19bf0f268b1']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](Math['random']() * 0x3 + 0x1)), innerText(c, $__language_Array__['d91707968f175525b18deb1ada667e4f']), b++;
                break;
            case 0x5:
                PlayAudio('crazydavelong' + Math['floor'](Math['random']() * 0x3 + 0x1)), innerText(c, $__language_Array__['518198a5d323d84d5aa5fb9935265745']), b++;
                break;
            case 0x6:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['054b4076041f8a8ff27eb84ea617aa41']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['8950c9850146c3d2ad9c4018107b7970']), b++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['064173e537154f0a475e4916c25007ce']), b++;
                break;
            case 0x9:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['5b981aade9f4161f21e522e0d9f52a9f']), b++;
                break;
            case 0xa:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['981dcdb9aca6fe2f899b3556716572aa']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['93b075d42db6871c64044b1758f35fe0']), b++;
                break;
            case 0xc:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f0702f1f1552ddfc6db11a6b7081eb0c']), b++;
                break;
            case 0xd:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['64095d0828a50ccb74633b33f347d432']), b++;
                break;
            case 0xe:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['84b03f7bb3172df75e819b0ffa7967a5']), b++;
                break;
            case 0xf:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['d191fef88053c8f810faedf704dc80d6']), b++;
                break;
            case 0x10:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    }
}, {
    'AZ': [
        [
            oSkatingZombie,
            0x2,
            0x3,
            [
                0x3,
                0x9
            ]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x1,
            [
                0x1,
                0x2,
                0x9
            ]
        ],
        [
            oZomboni,
            0x1,
            0x9
        ]
    ],
    'FlagNum': 0x10,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x4,
            0x7,
            0x8,
            0xa,
            0xd,
            0xf
        ],
        'a2': [
            0x1,
            0x2,
            0x3,
            0x5,
            0xe,
            0xc,
            0x12,
            0x18,
            0x23
        ]
    },
    'FlagToEnd': function () {
        ShowWinItem(GetPlantCardDom(oSpikeweed));
    }
});