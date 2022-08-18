/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oSunFlower,
        oSunShroom,
        oPepper,
        oIceAloe,
        oSpikeweed
    ],
    'ZName': [
        oImp,
        oBalloonZombie,
        oSkatingZombie,
        oCigarZombie,
        oZomboni,
        oMembraneZombie
    ],
    'PicArr': ['images/interface/Marsh.webp'],
    'LevelName': $__language_Array__['7289aa4a78885a6a36fe950ad3fbfa20'],
    'LoadMusic': 'Bgm_Polar_Noise',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'AudioArr': ['Bgm_Marsh_Plot'],
    'DKind': 0x0,
    'SunNum': 0x12c,
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        for (let i = 0x1; i < 0x6; i++) {
            if (i % 0x2 === 0x0) {
                for (let j = 0x6; j < 0xa; j++)
                    CustomSpecial(oRifter, i, j);
            } else {
                for (let k = 0x1; k < 0x6; k++)
                    CustomSpecial(oRifter, i, k);
            }
        }
        NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), NewEle('PolarFire2', 'div', { 'className': 'PolarFire' }, 0x0, Ground), NewEle('PolarFire', 'div', { 'className': 'PolarFire' }, 0x0, Ground);
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:259;width:900px;height:600px;background:white;opacity:0;font-size:24px;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(images/interface/Marsh.webp);opacity:0;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:black;text-align:center;pointer-events:none;line-height:600px;z-index:2570;width:900px;height:600px;opacity:0;', 0x0, EDAll);
        function e(l) {
            oEffects['Animate'](b, { 'opacity': 0x1 }, 0.1, 'linear', () => {
                oSym['addTask'](0x1, () => {
                    d['innerText'] = $__language_Array__['f009b2a6c652d494846a244b4ac64e1c'], oEffects['fadeIn'](d, 0x2, () => {
                        oSym['addTask'](0x64, function () {
                            oEffects['Animate'](b, { 'background': 'rgba(0,0,0,0)' }, 0x2), c['style']['backgroundImage'] = '', oEffects['fadeOut'](d, 0x2, () => {
                                ClearChild(d, c, b), l();
                            });
                        });
                    });
                });
            });
        }
        let f = 0x0, g = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), h = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function l() {
            g['onclick'] = l;
            switch (f) {
            case 0x0:
                g['onclick'] = null, oEffects['fadeIn'](c, 'slow', () => {
                    g['onclick'] = l;
                }), h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['01e2a594fceb15553a6e4514151463a7']), f++;
                break;
            case 0x1:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['f49ac95672bf42d806b048d000631641']), f++;
                break;
            case 0x2:
                PlayAudio('Zomboss1'), innerText(g, $__language_Array__['1b61ad8f464260d8e94a5ea18cbf6b0f']), f++;
                break;
            case 0x3:
                PlayAudio('Zomboss1'), innerText(g, '……'), f++;
                break;
            case 0x4:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, '……'), f++;
                break;
            case 0x5:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['4d7f5e9e2d2ef147b9dabe49fca8b9ba']), f++;
                break;
            case 0x6:
                PlayAudio('Zomboss1'), innerText(g, $__language_Array__['72d103f1ed34ae3f00962e02fa6e0a0f']), f++;
                break;
            case 0x7:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['2da5f02e0f7668c9ac13a052f7d8ab9b']), f++;
                break;
            case 0x8:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['10061f64b0b2a1fad56f03261c717e3b']), f++;
                break;
            case 0x9:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['a47ee3005046e771edee3144c8a0c504']), f++;
                break;
            case 0xa:
                PlayAudio('Zomboss3'), innerText(g, $__language_Array__['1a1a8c627bbdae2aff2c647a71117fcb']), f++;
                break;
            case 0xb:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['03da66b0a07923d1d881a859b41c332e']), f++;
                break;
            case 0xc:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(g, '……'), f++;
                break;
            case 0xd:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['a1b73263f9eef0bc59b4b6d4b8e9d4f8']), f++;
                break;
            case 0xe:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['8b13f68ca7340abc40dbcbf056874845']), f++;
                break;
            case 0xf:
                PlayAudio('Zomboss1'), innerText(g, $__language_Array__['976cf885e2d75644ff83e5f36e691920']), f++;
                break;
            case 0x10:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['8a8490a9d4e4cc7503dbde9b9a52737f']), f++;
                break;
            case 0x11:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(g, $__language_Array__['e028eece3972069fba762e35c1e88fdb']), f++;
                break;
            case 0x12:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['f1b0f276aa792e2f33d3a85e43af1cf1']), f++;
                break;
            case 0x13:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['7338faf7c2cbcc9d356a1450284c9627']), f++;
                break;
            case 0x14:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(g, $__language_Array__['2fbcd7af5eeca7087d3ffc543f18a246']), f++;
                break;
            case 0x15:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['a95d75e72f7fcdde3945211617d1c478']), f++;
                break;
            case 0x16:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['616dea675ee22de739118063d8f2c878']), f++;
                break;
            case 0x17:
                PlayMusic(oS['LoadMusic'] = 'Bgm_Marsh_Plot'), h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(g, '……'), f++;
                break;
            case 0x18:
                PlayAudio('Zomboss2'), innerText(g, $__language_Array__['7d2a82f921fbfe7d3c18bffc5cdddb37']), f++;
                break;
            case 0x19:
                PlayAudio('Zomboss3'), innerText(g, $__language_Array__['5a4ec108f5d28612acde6fbedd79b109']), f++;
                break;
            case 0x1a:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, '……'), f++;
                break;
            case 0x1b:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['a784c74a0c4e9b15962b6d52b04372a2']), f++;
                break;
            case 0x1c:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, '……'), f++;
                break;
            case 0x1d:
                h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(g, '……'), f++;
                break;
            case 0x1e:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['eab1b59c3364b01cc3e835238ea01b37']), f++;
                break;
            case 0x1f:
                h['style']['display'] = g['style']['display'] = 'none', g['onclick'] = null, e(() => {
                    g['onclick'] = l, h['style']['display'] = g['style']['display'] = '';
                }), h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['0ac91c2afb4c5280f4d7aa09ebfaea03']), f++;
                break;
            case 0x20:
                PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['60925cb81e494e524d870bc81043afef']), f++;
                break;
            case 0x21:
                PlayAudio('crazydavelong2'), g['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['3003ea547bf8d3a73e75acf239544259'],
                    'font_size': 0x18
                })[0x0] + '</p>', g['style']['fontSize'] = '24px', f++;
                break;
            case 0x22:
                PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['db3da463d95674c14c6cc0cdd5777fa3']), g['style']['fontSize'] = '18px', f++;
                break;
            case 0x23:
                ClearChild(g, h), oSym['addTask'](0x1e, a);
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
            oBalloonZombie,
            0x3,
            0x3,
            [0x3]
        ],
        [
            oSkatingZombie,
            0x2,
            0x4,
            [0x4]
        ],
        [
            oCigarZombie,
            0x2,
            0xa,
            [
                0xa,
                0x14
            ]
        ],
        [
            oZomboni,
            0x1,
            0xb,
            [
                0xb,
                0xf,
                0x14
            ]
        ],
        [
            oMembraneZombie,
            0x2,
            0xa,
            [
                0xa,
                0xf,
                0x14
            ]
        ]
    ],
    'FlagNum': 0x14,
    'FlagToSumNum': {
        'a1': [
            0x3,
            0x5,
            0x6,
            0x9,
            0xa,
            0xe,
            0xf,
            0x12,
            0x13
        ],
        'a2': [
            0x1,
            0x5,
            0xa,
            0x14,
            0x1e,
            0xf,
            0x28,
            0x19,
            0x1e,
            0x32
        ]
    },
    'FlagToEnd'() {
        SelectModal('Polar22-1');
    }
});