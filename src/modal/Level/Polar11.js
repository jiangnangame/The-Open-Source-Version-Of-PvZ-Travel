/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oImitater,
        oMonotropa,
        oPuffShroom,
        oIceAloe,
        oCherryBomb
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oFootballZombie,
        oSadakoZombie
    ],
    'PicArr': (function () {
        let c = oMonotropa['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']],
            'images/interface/Forest.webp'
        ];
    }()),
    'LevelName': $__language_Array__['5f84680164cb009195d3bf2bdfe9312a'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'AudioArr': [
        'Bgm_Polar_11_NPC_1',
        'Bgm_Polar_11_NPC_2'
    ],
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        oAudio[oS['LoadMusic']]['pause'](), PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            switch (b) {
            case 0x0:
                PlayAudio('Bgm_Polar_11_NPC_1')['addEventListener']('ended', g => {
                    c['onclick'] = f, PlayMusic(oS['LoadMusic']);
                }), d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['c52dd3cffe2c01ef3e077e1efcb74c16']), b++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2cfa543ad83ac4360b4110383fad653a']), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['24084af72b8a36e4a9f9225d936bfde8']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['624cb4814e2068b63e14ea992e51a051']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['c0bf9487d784c190f0775ff5dddb26c1']), b++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f02d2773f8d1fb864f1528c0fb23568b']), b++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2b3da072ae29999274ccb20adc1b20f5']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['cf83ec29f55448c4c461f59c37f5aa15']), b++;
                break;
            case 0x8:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['8095d4e0ab1b7a0a5ae07b67e0329aa1']), c['onclick'] = () => {
                    e(c, f), c['style']['display'] = d['style']['display'] = 'none';
                }, b++;
                break;
            case 0x9:
                c['style']['display'] = d['style']['display'] = '', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['9825ae833512a3d50ae8fff75f65738a']), b++;
                break;
            case 0xa:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['0739169f59094fc6648c3edfc72351e8']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, '……'), b++;
                break;
            case 0xc:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['eb288c61bdd9d5797f6d6f1fa8ad4197']), b++;
                break;
            case 0xd:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
        function e(g, h) {
            g['onclick'] = null, StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_11_NPC_2');
            let i = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;background:url(images/interface/Forest.webp);opacity:0;', 0x0, EDAll);
            oEffects['fadeIn'](i, 'slow', () => {
                k();
                function j() {
                    oEffects['fadeOut'](i, 'slow', () => {
                        ClearChild(i), g['onclick'] = h;
                    }), h();
                }
                function k() {
                    let l = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), m = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, l), n = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll), o = [
                            [
                                $__language_Array__['d5e3a3c9fd514fe2223df909c8391e26'],
                                $__language_Array__['2c632d60d4d0f38485d36b83fb6884f2']
                            ],
                            [
                                $__language_Array__['270c4044ca336bcc5fc2acee8c1d81d9'],
                                $__language_Array__['b520559ebd6bce11cac3d8e8541748e6']
                            ],
                            [
                                $__language_Array__['d5e3a3c9fd514fe2223df909c8391e26'],
                                $__language_Array__['1b3b1908b496723fd9d3e4adedb5eab0']
                            ],
                            [
                                $__language_Array__['270c4044ca336bcc5fc2acee8c1d81d9'],
                                $__language_Array__['a7322d822cecc1f6f4f60f55fc2cf79a']
                            ],
                            [
                                $__language_Array__['270c4044ca336bcc5fc2acee8c1d81d9'],
                                $__language_Array__['8d2013f75251c28d5f2bb0c8f05269fb']
                            ]
                        ], p = -0x1, q = 0x32, r = {
                            '，': 0xc8,
                            '…': 0x12c
                        }, s = ![];
                    m['onclick'] = function () {
                        if (p >= 0x0 && m['innerText']['length'] < o[p][0x1]['length']) {
                            let y = o[p][0x1]['split']($__language_Array__['4466b2d38a308dfee6b7b18f519e204b']);
                            m['innerText'] = y[y['length'] - 0x1] + '\x20', s = !![];
                            return;
                        }
                        s = ![], p++;
                        if (p >= o['length']) {
                            ClearChild(l, n), j();
                            return;
                        }
                        m['innerText'] = '', n['innerText'] = o[p][0x0];
                        let t = o[p][0x1], u = t instanceof Array ? t : t['split'](''), v = 0x0, w = '', x = p;
                        setTimeout(function z() {
                            if (p != x || v >= u['length'] || s) {
                                v >= u['length'] && !s && setTimeout(A => {
                                    p == x && !s && (s = !![], m['innerText'] = w += '\x20');
                                }, 0xc8);
                                return;
                            }
                            m['innerText'] = w += u[v++], setTimeout(z, r[u[v - 0x1]] ? r[u[v - 0x1]] : q);
                        }, q);
                    }, m['click']();
                }
            });
        }
    }
}, {
    'AZ': [
        [
            oZombie,
            0x4,
            0x1
        ],
        [
            oConeheadZombie,
            0x3,
            0x1
        ],
        [
            oBucketheadZombie,
            0x3,
            0x1
        ],
        [
            oFootballZombie,
            0x1,
            0xa,
            [0xa]
        ],
        [
            oSadakoZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0x11,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x5,
            0x8,
            0xa,
            0xc,
            0xe,
            0x10
        ],
        'a2': [
            0x1,
            0x3,
            0x8,
            0x14,
            0xc,
            0xf,
            0x14,
            0x1e
        ]
    },
    'FlagToEnd': function () {
        SelectModal('Polar11-1');
    }
});