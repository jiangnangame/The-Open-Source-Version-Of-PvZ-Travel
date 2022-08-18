/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oSunShroom,
        oRepeater
    ],
    'ZName': [oSadakoZombie],
    'PicArr': ['images/interface/PolarClue2.webp'],
    'LevelName': $__language_Array__['52c91fa66154b830ab73f31eaea90f7b'],
    'LoadMusic': 'Bgm_Polar_Ready_2',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'DKind': 0x0,
    'SunNum': 0x210,
    'CanSelectCard': 0x0,
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
        0x0,
        0x0,
        0x1,
        0x0,
        0x1
    ],
    'InitLawnMover': () => {
    },
    'LoadAccess': function (a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), NewEle(0x0, 'div', 'width:780px;height:535px;position:absolute;z-index:1;background:url(images/interface/Encirclement_and_annihilation3.webp);left:225px;top:65px;', 0x0, $('tGround'));
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;height:600px;opacity:0;', 0x0, EDAll);
        oEffects['Animate'](b, { 'background': 'rgba(0,0,0,1)' }, 'slow', 'linear', () => {
            c['innerText'] = $__language_Array__['3df8b2e222561f08b16f78d6d884229b'], oEffects['fadeIn'](c, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['fadeOut'](b, 0x2), oEffects['fadeOut'](c, 0x2, () => {
                        ClearChild(b, c), d();
                    });
                });
            });
        });
        function d() {
            let e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), f = 0x0, g = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), h = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function i() {
                g['onclick'] = i;
                switch (f) {
                case 0x0:
                    h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['98985db9d92a6067f6b2b8b3646bba77']), f++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['6ab6f05f594141ae4c7ee6d7d2529249']), f++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['13fb3a8e232c2ad2c87c2f8f01680976']), f++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['b896d596f200e34a4e207bed667f0d42']), f++;
                    break;
                case 0x4:
                    PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['2fdd77e6a18cda4c717914e5e1778591']), f++;
                    break;
                case 0x5:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['43d3dc181d007a2ef49534abedb12e54']), f++;
                    break;
                case 0x6:
                    PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['85c596d4961ce7fac2bf9204acaadd6b']), f++;
                    break;
                case 0x7:
                    PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['f99c85e041afb7da847a6141467508f8']), f++;
                    break;
                case 0x8:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['3a5b41cbfd563b9ac1480bcfcd9f46db']), f++;
                    break;
                case 0x9:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['e79e1bf6e1038175d2044d099203b940']), f++;
                    break;
                case 0xa:
                    PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['30dd91fe4f20e940a89ddeb46de106be']), f++;
                    break;
                case 0xb:
                    PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['42667323612b2c86643533e83b5bc45c']), f++;
                    break;
                case 0xc:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['af3a77a42b37ef6a024f00966441a193']), f++;
                    break;
                case 0xd:
                    PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['f236ecd859fe39b97d111630d71a3154']), f++;
                    break;
                case 0xe:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['81f00b6954d1116b2c68854d067a58c8']), f++;
                    break;
                case 0xf:
                    PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['83de8712f57f52640bb446677eac5f86']), f++;
                    break;
                case 0x10:
                    PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['648932313c2b9349f5e46c61a5889b0a']), f++;
                    break;
                case 0x11:
                    g['onclick'] = null, h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, '……'), oEffects['fadeIn'](e, 'slow', () => g['onclick'] = i), f++;
                    break;
                case 0x12:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(g, '……'), f++;
                    break;
                case 0x13:
                    PlayAudio('Zomboss1'), innerText(g, $__language_Array__['aaac21cce015432144f64678f3288e76']), f++;
                    break;
                case 0x14:
                    h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['415097d6ee63e305d676e54dc29fba8a']), f++;
                    break;
                case 0x15:
                    innerText(g, '……'), f++;
                    break;
                case 0x16:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['b96257eaa8673f62ec8059fab3fada9a']), f++;
                    break;
                case 0x17:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['bd57a0c24db692f2f341fa067ab0a401']), f++;
                    break;
                case 0x18:
                    innerText(g, '……'), f++;
                    break;
                case 0x19:
                    PlayAudio('Zomboss2'), innerText(g, $__language_Array__['42ee402831e56a295bbb0efb74599cb0']), f++;
                    break;
                case 0x1a:
                    h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['2721483cc6f365eacc8e5103e2c0a5a0']), f++;
                    break;
                case 0x1b:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['36c3d6b3cc2b0fe1458a4a8649117049']), f++;
                    break;
                case 0x1c:
                    ClearChild(g, h), oEffects['fadeOut'](e, 'slow', j => {
                        ClearChild(j), a();
                    });
                }
            }());
        }
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), NewMusic(oS['LoadMusic'] = oS['StartGameMusic']);
        for (let g = 0x1; g < 0x6; g++) {
            CustomSpecial(oInvisibleFlowerPot, 0x1, g);
        }
        let a = [
            [
                0x1,
                0x9
            ],
            [
                0x2,
                0x1
            ],
            [
                0x2,
                0x4
            ],
            [
                0x2,
                0x5
            ],
            [
                0x2,
                0x7
            ],
            [
                0x2,
                0x9
            ],
            [
                0x3,
                0x1
            ],
            [
                0x3,
                0x7
            ],
            [
                0x4,
                0x3
            ],
            [
                0x4,
                0x9
            ],
            [
                0x5,
                0x1
            ],
            [
                0x5,
                0x2
            ],
            [
                0x5,
                0x3
            ],
            [
                0x5,
                0x6
            ],
            [
                0x5,
                0x7
            ]
        ];
        for (let h of a) {
            CustomSpecial(oInvisibleFlowerPot, h[0x0], h[0x1]);
        }
        let b = [
            [
                0x3,
                0x3
            ],
            [
                0x3,
                0x8
            ],
            [
                0x5,
                0x4
            ],
            [
                0x5,
                0x8
            ]
        ];
        for (let l of b) {
            CustomSpecial(oGoUp, l[0x0], l[0x1]);
        }
        let c = [
            [
                0x1,
                0x6
            ],
            [
                0x2,
                0x2
            ],
            [
                0x4,
                0x5
            ]
        ];
        for (let m of c) {
            CustomSpecial(oGoDown, m[0x0], m[0x1]);
        }
        let d = [
            [
                0x1,
                0x8
            ],
            [
                0x2,
                0x3
            ],
            [
                0x3,
                0x4
            ],
            [
                0x3,
                0x6
            ],
            [
                0x4,
                0x2
            ],
            [
                0x4,
                0x8
            ],
            [
                0x5,
                0x5
            ]
        ];
        for (let n of d) {
            CustomSpecial(oGoLeft, n[0x0], n[0x1]);
        }
        for (let o = 0x1; o <= 0x5; o++) {
            for (let p = 0x1; p < 0xa; p++) {
                let q = !![];
                for (let r = 0x0; r <= PKindUpperLimit; r++) {
                    if (oGd['$'][o + '_' + p + '_' + r]) {
                        q = ![];
                        break;
                    }
                }
                q && CustomSpecial(oObstacle, o, p);
            }
        }
        SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        });
        let e = $P['length'], f;
        PrepareGrowPlants(function () {
            oP['Monitor']({
                'ar': [0x0],
                'f': function s(t) {
                    switch (t) {
                    case 0x0:
                        !$('PointerUD') && NewImg('PointerUD', 'images/interface/left.gif', 'position:absolute;left:215px;top:70px;z-index:\x203;', EDAll), !f && (f = $('dCardoSunShroom')['onmousedown']), $('dCardoSunShroom')['onmousedown'] = null, oRepeater['prototype']['SunNum'] = 0x25, PlaySubtitle($__language_Array__['4811db7b335401f5d65303fb574c7e17']), oSym['addTask'](0xa, s, [++t]);
                        break;
                    case 0x1:
                        oS['Chose'] > 0x0 && (PlaySubtitle($__language_Array__['5acebb947e0a0060df8b6edcd517eb51']), t++), oSym['addTask'](0xa, s, [t]);
                        break;
                    case 0x2:
                        if ($P['length'] > e) {
                            PlaySubtitle(), ClearChild($('PointerUD')), oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show'](), $('dCardoSunShroom')['onmousedown'] = f, oRepeater['prototype']['SunNum'] = 0xaf;
                            return;
                        }
                        if (!oS['Chose']) {
                            s(t = 0x0);
                            return;
                        }
                        oSym['addTask'](0xa, s, [t]);
                        break;
                    }
                }
            }), BeginCool();
        });
    }
}, {
    'AZ': [[
            oSadakoZombie,
            0x3,
            0x1
        ]],
    'FlagNum': 0xd,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x5,
            0x9,
            0xa,
            0xb,
            0xc
        ],
        'a2': [
            0x1,
            0x3,
            0x7,
            0xc,
            0x1a,
            0x10,
            0x16,
            0x23
        ]
    },
    'FlagToEnd': () => {
        let a = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;left:115px;background:#FFF;opacity:0;', 0x0, EDAll), b = 0x0, c = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), d = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function f() {
            c['onclick'] = f;
            switch (b) {
            case 0x0:
                c['onclick'] = null, d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['1d30dd0e87c8df83aff2c162de58765c']), oEffects['fadeIn'](a, 'slow', () => c['onclick'] = f), b++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['cc257fd929eaa9aedae052301d50a5a5']), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['4b2a3826465b3c5c3441dec3ac89872c']), b++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['0ccf258c30bf283e7c22a7bbc1a40c68']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['1c0e6598751d3848c64d4f0347c68425']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f8974f125594133ed69a4b71f28ecea0']), b++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['afd58714a25978b3c4b0efc384a0d1be']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['ca29892678e359db552044bd55f26596']), b++;
                break;
            case 0x8:
                PlayAudio('Zomboss1'), innerText(c, $__language_Array__['c0aec43a25b0e08739d84431bcd79948']), b++;
                break;
            case 0x9:
                PlayAudio('Zomboss2'), innerText(c, $__language_Array__['59f922b0363ceaa80ed22dbe32576910']), b++;
                break;
            case 0xa:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['3cd8514704f8d070830f9b493ed85028']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['3da91a37dbb49b07b77c1cfcab685b4f']), b++;
                break;
            case 0xc:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['a10d47cb679b72c5cd6fa86b1def7817']), b++;
                break;
            case 0xd:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['ea004e7d1e5da488ac0bb8d87441577f']), b++;
                break;
            case 0xe:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, '……'), b++;
                break;
            case 0xf:
                PlayAudio('Zomboss2'), innerText(c, $__language_Array__['36e3f392fad4e5a36565200123f876c6']), b++;
                break;
            case 0x10:
                PlayAudio('Zomboss1'), innerText(c, $__language_Array__['78420dcd155001944f7bb3e5cc360799']), b++;
                break;
            case 0x11:
                PlayAudio('Zomboss1'), innerText(c, $__language_Array__['6268e28a0e4d0015148635d78533963d']), b++;
                break;
            case 0x12:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['4c3bc7c44b5adb3631889f3812d4e068']), b++;
                break;
            case 0x13:
                c['onclick'] = null, d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['990cca4d92b4cd25f10c89f6d98bf4a9']), oEffects['fadeOut'](a, 'slow', () => c['onclick'] = f), b++;
                break;
            case 0x14:
                PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['126e0d316f130b4f2966dd52961bc7d0']), b++;
                break;
            case 0x15:
                PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['4b852a1c08d7f19ad6db4d09d90e9b67']), b++;
                break;
            case 0x16:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['8aa83d8e7bc63aac280363df627a7561']), b++;
                break;
            case 0x17:
                PlayAudio('crazydavelong1'), innerText(c, '……'), b++;
                break;
            case 0x18:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['2d38ed76f3bf502d74338ef6277a2b02']), b++;
                break;
            case 0x19:
                PlayAudio('crazydavelong3'), c['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['ea1425d4ea3156bbe7edad4bf654d5e3'],
                    'font_size': 0x18
                })[0x0] + '</p>', c['style']['fontSize'] = '24px', b++;
                break;
            case 0x1a:
                PlayAudio('crazydavelong2'), c['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['7983358de2162cfc94da6433ffad72b6'],
                    'font_size': 0x12
                })[0x0] + '</p>', c['style']['fontSize'] = '18px', b++;
                break;
            case 0x1b:
                PlayAudio('crazydavelong1'), innerText(c, '……'), b++;
                break;
            case 0x1c:
                PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['215f27f78eecb21919b0d98e92101275']), b++;
                break;
            case 0x1d:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['851916193feb5b5feac7108f9e6d1767']), b++;
                break;
            case 0x1e:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['06186a2b50e60ec2957813c1b22bff44']), b++;
                break;
            case 0x1f:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['1ceb86d987bccc87ef5742ffdef313a7']), b++;
                break;
            case 0x20:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['b55d6ef25c1de905571c99d3ed96876c']), b++;
                break;
            case 0x21:
                ClearChild(c, d), ClearChild(a), e();
            }
        }());
        function e() {
            ShowWinItem(NewImg('imgSF', 'images/interface/PolarClue2.webp', 'left:420px;top:200px;transform-origin:left\x20top;transform:\x20scale(0.15);', EDAll, {
                'onclick': function () {
                    GetNewProp(this, 'images/interface/PolarClue2.webp', $__language_Array__['4744f7bbd137f165c35ee9347caf43d5'], $__language_Array__['8157fa7659757f7bc2eb4adbb2f566d4'], NextLevel(), 'top:\x20-10%;transform:\x20scale(0.15);width:\x20563px;height:\x20616px;left:\x2018%;');
                }
            }));
        }
    }
});