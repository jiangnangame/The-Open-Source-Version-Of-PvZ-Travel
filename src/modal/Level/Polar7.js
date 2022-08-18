/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oBegonia,
        oIceAloe,
        oSnowPea,
        oCherryBomb
    ],
    'ZName': [
        oZombie,
        oMakeRifterZombie,
        oMembraneZombie,
        oCigarZombie,
        oSkatingZombie,
        oStrollZombie,
        oNewspaperZombie
    ],
    'PicArr': (function () {
        let c = oIceAloe['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']]
        ];
    }()),
    'LevelName': $__language_Array__['d5725957c56c0a3e9327238503ce12f4'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'FixedProps': 'disabled',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'LoadAccess': function (a) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        for (let f = 0x2; f < 0xa; f++) {
            for (let g = 0x1; g < 0x6; g++) {
                CustomSpecial(oRifter, g, f);
            }
        }
        PlayAudio('Bgm_Polar_Noise', 0x1);
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function h() {
            d['onclick'] = h;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['c46765d0aa42657e490a8e5fdc571a0d']), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['bdd68f24f5570423a29647b198ff9513']), c++;
                break;
            case 0x2:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['0b626d085f8080a0e9bfc7dcee7d0208']), c++;
                break;
            case 0x3:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['af90a431e74fda6b6d675c63c88e115b']), c++;
                break;
            case 0x4:
                PlayAudio('Zomboss1'), d['innerHTML'] = $__language_Array__['c6b98763759784c16af948018d586bfb'], c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['c91d7876773ad72923095ae03b9e9870']), c++;
                break;
            case 0x6:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['75c497a4b0ed5e0c6297d03a6cc6a30c']), d['style']['fontSize'] = '16px', c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['7272a8b5e89977e7dedeeb8042ccb3c2']), d['style']['fontSize'] = '18px', c++;
                break;
            case 0x8:
                d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['7d8321b007be15fb270cde61de99c489']), oEffects['Animate'](b, { 'background': 'black' }, 0x3, 'linear');
                for (let j = 0x7d0; j <= 0x1388; j += 0x5dc) {
                    setTimeout(h, j);
                }
                c++;
                break;
            case 0x9:
                innerText(d, '……'), c++;
                break;
            case 0xa:
                d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': '……',
                    'font_size': 0x12
                })[0x0] + '</p>', c++;
                break;
            case 0xb:
                PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['2f3592467b9b37ed6d36dddfd4a2762e']), oEffects['Animate'](b, { 'background': 'white' }, 'fast', 'linear', () => d['onclick'] = h), c++;
                break;
            case 0xc:
                d['onclick'] = null, PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['1b570e65143aed7d573b68f77b93c338']), oEffects['fadeOut'](b, 'slow', () => d['onclick'] = h), c++;
                break;
            case 0xd:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['769fd8974a7171f3c8f34d0d3819ccf9']), c++;
                break;
            case 0xe:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['2941c188a04d434d245ae2a8eb00503d']), c++;
                break;
            case 0xf:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['1a01f592d67b61f773acf59ae79934e2']), c++;
                break;
            case 0x10:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['352fc6ca068271931f4f846d9917a070']), c++;
                break;
            case 0x11:
                PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['0a926050ecaf8693a305114e4d31ebe7']), c++;
                break;
            case 0x12:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, '……'), c++;
                break;
            case 0x13:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, '……'), c++;
                break;
            case 0x14:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['468dd7122458ed7166af7557d69229e1']), c++;
                break;
            case 0x15:
                ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'StartGame': function () {
        oMiniGames['ConveyorBelt']([
            oBegonia,
            oCherryBomb,
            oBegonia,
            oIceAloe,
            oIceAloe,
            oSnowPea,
            oSnowPea,
            oSnowPea,
            oSnowPea
        ], 0x28a, 0x3, [oBegonia]);
    }
}, {
    'AZ': [
        [
            oZombie,
            0x4,
            0x1
        ],
        [
            oNewspaperZombie,
            0x2,
            0x1
        ],
        [
            oCigarZombie,
            0x2,
            0x3
        ],
        [
            oMembraneZombie,
            0x1,
            0xd,
            [
                0xd,
                0xe
            ]
        ],
        [
            oMakeRifterZombie,
            0x1,
            0x6
        ],
        [
            oStrollZombie,
            0x1,
            0xa
        ],
        [
            oSkatingZombie,
            0x2,
            0x9,
            [0x9]
        ]
    ],
    'FlagNum': 0x10,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x4,
            0x7,
            0x9,
            0xc,
            0xf
        ],
        'a2': [
            0x1,
            0x0,
            0x4,
            0x9,
            0xd,
            0x11,
            0x13,
            0x1c
        ]
    },
    'FlagToEnd': function () {
        SelectModal('Polar7-1');
    }
});