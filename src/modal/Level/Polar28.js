/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    function makeUpSplitText(a, b = 0.2, c = 0x14, d = ![]) {
        let e = {
            'text': a,
            'font_size': c,
            'str': d,
            'time_range': b,
            'align_center': ![],
            'paddingLeft': 0x14,
            'paddingTop': 0x14,
            'width': 0x12c
        };
        return oEffects['TextEffects']['ShakeText'](e);
    }
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
            oKiwibeast,
            oMiracleImitater,
            oJalapeno
        ],
        'ZName': [
            oBucketheadZombie,
            oConeheadZombie,
            oMakeRifterZombie,
            oSkatingZombie,
            oBalloonZombie,
            oStrollZombie,
            oFootballZombie,
            oCigarZombie,
            oCaskZombie,
            oSadakoZombie,
            oImp
        ],
        'LevelName': $__language_Array__['3c62c446bdbfe731967c293cd73a4f92'],
        'LoadMusic': 'Bgm_Polar_25_NPC_1',
        'DKind': 0x0,
        'PicArr': [
            'images/Props/PolarPlots/zombosstrain.mp4',
            'images/Props/PolarPlots/zombosstrain_enter.mp4',
            'images/interface/Forest.webp'
        ],
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround'))), NewEle(0x0, 'div', 'left:490px;', { 'className': 'Mould' }, $('tGround')), NewEle(0x0, 'div', 'left:650px;', { 'className': 'Mould' }, $('tGround'));
            for (let h = 0x1; h < 0x6; h++) {
                CustomSpecial(oObstacle, h, 0x4), CustomSpecial(oApple, h, 0x5), NewEle(0x0, 'div', 'left:456px;top:' + (0x50 + 0x64 * (h - 0x1)) + 'px;', { 'className': 'sos' }, FightingScene), CustomSpecial(oObstacle, h, 0x6);
            }
            [
                [
                    0x1,
                    0x1
                ],
                [
                    0x3,
                    0x1
                ],
                [
                    0x5,
                    0x1
                ],
                [
                    0x1,
                    0x9
                ],
                [
                    0x3,
                    0x9
                ],
                [
                    0x5,
                    0x9
                ]
            ]['forEach'](i => CustomSpecial(oRifter, ...i));
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;background:black;opacity:1;', 0x0, EDAll), c = NewEle('', 'video', 'z-index:300;position:absolute;height:600px;top:0;left:0px;opacity:0;', {
                    'src': 'images/Props/PolarPlots/zombosstrain.mp4',
                    'loop': !![],
                    'controls': ![],
                    'autoplay': !![],
                    'preload': 'auto',
                    'muted': !![]
                }, EDAll), d = NewEle('', 'video', 'z-index:300;position:absolute;height:600px;top:0;left:0px;opacity:1;', {
                    'src': 'images/Props/PolarPlots/zombosstrain_enter.mp4',
                    'loop': ![],
                    'controls': ![],
                    'autoplay': !![],
                    'preload': 'auto',
                    'muted': !![]
                }, EDAll), e = setInterval(function () {
                    d['currentTime'] > 1.98 && (c['style']['opacity'] = 0x1, c['currentTime'] = d['duration'] - d['currentTime'], ClearChild(d), clearInterval(e));
                }, 0xa);
            function f() {
                if (c['style']['opacity'] != '1') {
                    oSym['addTask'](0xa, f);
                    return;
                }
                oEffects['fadeOut'](b, 'slow', () => {
                    ClearChild(b);
                }), oEffects['fadeOut'](c, 'slow', () => {
                    ClearChild(c), oSym['addTask'](0x1e, a);
                });
            }
            function g() {
                let i = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:20px;color:white;font-size:20px;position:absolute;bottom:0;right:0;height:200px;width:300px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), j = [
                        $__language_Array__['0f34f6552877b259b6705c6dedae9757'],
                        $__language_Array__['3b9d8e0d3c6bf908556b21322a6ac45a'],
                        '……',
                        $__language_Array__['70df6ef06b40368efbf895ce127fba6b'],
                        $__language_Array__['45d8185ba986e88163237cdf88d86a42'],
                        $__language_Array__['df4332f4f9503e6abd920ea76257a67a'],
                        $__language_Array__['53b87b03ead36597d0eac0a0346b8f43'],
                        $__language_Array__['15e3c3d29dae6bc5b76d2f2b688935c7'],
                        $__language_Array__['8a226db7b4c7a29384331624a3362470'],
                        $__language_Array__['68b0de45eed5b6c8e4a4f885f667e573'],
                        $__language_Array__['119ade1b074e5051dbe5b0797371c450'],
                        makeUpSplitText($__language_Array__['ec0a8ec91957bec65f71a48db8e2b3ba'])
                    ], k = '', l = -0x1, m = {
                        '，': 0xc8,
                        '…': 0x12c
                    };
                function n(p, q = !![]) {
                    if (p instanceof Array) {
                        let r = null;
                        return p[0x0]['includes']($__language_Array__['be4ac390234e5730488d5efa3c4ad524']) && (r = p[0x0]['split']($__language_Array__['be4ac390234e5730488d5efa3c4ad524'])['join'](''), p['splice'](0x0, 0x1)), q ? [
                            r,
                            p['join']('')
                        ] : [
                            r,
                            p
                        ];
                    } else {
                        let s = p['split']($__language_Array__['be4ac390234e5730488d5efa3c4ad524']), t = null;
                        return s['length'] > 0x1 && (t = s[0x0], s['splice'](0x0, 0x1)), q ? [
                            t,
                            s['join']('')
                        ] : [
                            t,
                            s['join']('')['split']('')
                        ];
                    }
                }
                let o = ![];
                i['onclick'] = function () {
                    if (l >= 0x0 && i['innerHTML']['length'] < j[l]['length'] + k['length']) {
                        let t = n(j[l]);
                        i['innerHTML'] = (k ? k + $__language_Array__['be4ac390234e5730488d5efa3c4ad524'] : '') + t[t['length'] - 0x1] + '\x20\x20', o = !![];
                        return;
                    }
                    o = ![], l++;
                    if (l >= j['length']) {
                        f(), ClearChild(i);
                        return;
                    }
                    let p = n(j[l], ![]);
                    p[0x0] !== null && p[0x0] != k && (k = p[0x0]);
                    i['innerHTML'] = k ? k + $__language_Array__['be4ac390234e5730488d5efa3c4ad524'] : '';
                    let q = p[0x1], r = 0x0, s = l;
                    setTimeout(function u() {
                        var v;
                        if (l != s || r >= q['length'] || o) {
                            r >= q['length'] && !o && setTimeout(w => {
                                l == s && !o && (o = !![], i['innerHTML'] += '\x20\x20');
                            }, 0xc8);
                            return;
                        }
                        i['innerHTML'] += q[r++], setTimeout(u, (v = m[q[r - 0x1]]) !== null && v !== void 0x0 ? v : 0x32);
                    }, 0x32);
                }, i['click']();
            }
            g();
        },
        'StartGame'() {
            StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](oS['Monitor']), BeginCool(), function b() {
                    let c = 0x0, d;
                    for (d of $P)
                        d['EName'] === 'oApple' && c++;
                    c < 0x5 && toOver(0x2), oSym['addTask'](0xc8, b);
                }(), function c() {
                    PlayAudio('frostbite'), oEffects['Animate'](NewEle('Frostbite' + Math['random'](), 'div', 'z-index:\x2020;position:\x20absolute;width:\x20200px;height:\x20600px;left:\x20-200px;background:\x20-webkit-linear-gradient(left,\x20rgba(16,\x20234,\x20194,\x200)\x200px,\x20#00a1ff52\x2050%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%);transform:\x20skewX(-25deg);', 0x0, EDPZ), { 'left': '1100px' }, 'slow', 'ease-in', ClearChild), hasPlants(![], d => d['EName'] !== 'oBrains' && d['EName'] !== 'oLawnCleaner' && d['canShovel'])['forEach'](d => d['getHurt'] && d['getHurt'](null, 0x0, 0x1e)), oSym['addTask'](0x9c4, c);
                }(), oSym['addTask'](0x5dc, d => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            });
        }
    }, {
        'AZ': [
            [
                oBucketheadZombie,
                0x3,
                0x1
            ],
            [
                oConeheadZombie,
                0x1,
                0x1
            ],
            [
                oMakeRifterZombie,
                0x3,
                0x1,
                [
                    0xa,
                    0x14,
                    0x1e
                ]
            ],
            [
                oSkatingZombie,
                0x2,
                0x4
            ],
            [
                oBalloonZombie,
                0x1,
                0x1
            ],
            [
                oStrollZombie,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oFootballZombie,
                0x3,
                0xa,
                [
                    0xa,
                    0x14,
                    0x1e
                ]
            ],
            [
                oCigarZombie,
                0x3,
                0x6
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oCaskZombie,
                0x1,
                0x1
            ],
            [
                oSadakoZombie,
                0x1,
                0x1
            ]
        ],
        'FlagNum': 0x12,
        'FlagToSumNum': {
            'a1': [
                0x3,
                0x9,
                0xa,
                0xf,
                0x12
            ],
            'a2': [
                0x1,
                0x3,
                0xa,
                0xf,
                0x19
            ]
        },
        'FlagToEnd'() {
            PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar_25_NPC_1');
            let a = NewEle('', 'video', 'z-index:298;position:absolute;height:600px;top:0;left:115px;opacity:1;', {
                    'src': 'images/Props/PolarPlots/zombosstrain.mp4',
                    'loop': !![],
                    'controls': ![],
                    'autoplay': !![],
                    'preload': 'auto',
                    'muted': !![]
                }, EDAll), b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;background:url(images/interface/Forest.webp);opacity:0;left:115px', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;text-align:center;color:white;line-height:600px;width:900px;height:600px;opacity:0;left:115px;transition:left\x200.05s,top\x200.05s;', 0x0, EDAll), d = setInterval(function () {
                    c['style']['left'] = 0x73 + Math['random']() * 0xa - 0x5 + 'px', c['style']['top'] = Math['random']() * 0xa - 0x5 + 'px';
                }, 0x32);
            function e() {
                oEffects['fadeOut'](a, 'slow', () => {
                    ClearChild(a);
                }), oEffects['fadeOut'](c, 'slow', () => {
                    clearInterval(d), ClearChild(c), oS['DefaultFlagToEnd']();
                });
            }
            function f() {
                let g = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:20px;color:white;font-size:20px;position:absolute;bottom:0;right:-115px;height:200px;width:300px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), h = [
                        makeUpSplitText($__language_Array__['ec0a8ec91957bec65f71a48db8e2b3ba']),
                        makeUpSplitText($__language_Array__['75278a79acf8f756a6a6e665574b9baa']),
                        makeUpSplitText($__language_Array__['c25551c5bb7bc8da3ed5a1120a657899']),
                        makeUpSplitText($__language_Array__['b163187693f8d27be592cedc4bf3134d']),
                        makeUpSplitText($__language_Array__['1b2f1e354909cb75aec6deb34f8d1259']),
                        makeUpSplitText($__language_Array__['584d8a012912ffe8eda71563cae27248'], 0.1),
                        makeUpSplitText($__language_Array__['9e5815fc1e85a82c80d03986ce859e24'], 0.1),
                        makeUpSplitText($__language_Array__['c4dc65de00f603d9c17b27554ed720a9'], 0.07),
                        makeUpSplitText($__language_Array__['286258ab41926b0c05137d8246b9fbbe'], 0.05, 0x16),
                        makeUpSplitText($__language_Array__['5026f38a42027e722d2e9044d3867278']),
                        makeUpSplitText($__language_Array__['578e229bc16e680575df7c30a388dd34']),
                        $__language_Array__['df6eed5f6714c5058ca3054e3d884ca4'],
                        $__language_Array__['fbd0a1a4642d091c4ae8c890590b345f'],
                        $__language_Array__['ef1ac4e26e55e5315e866b17bb3c29ff']
                    ], i = {
                        0x6: () => {
                            g['style']['pointerEvents'] = 'none', oEffects['Animate'](b, { 'opacity': 0.1 }, 'slow', 'linear', () => {
                                g['style']['pointerEvents'] = '';
                            });
                        },
                        0x7: () => {
                            g['style']['pointerEvents'] = 'none', oEffects['Animate'](b, { 'opacity': 0x0 }, 'slow', 'linear', () => {
                                ClearChild(b), g['style']['pointerEvents'] = '';
                            });
                        },
                        0xc: () => {
                            c['style']['opacity'] = '1', c['innerText'] = $__language_Array__['8bfaebc8610eb89de5daa2174217efd5'];
                        },
                        0xd: () => {
                            c['innerText'] = $__language_Array__['194dfb6c62931f641bde6d52e0362101'];
                        }
                    }, j = '', k = -0x1, l = {
                        '，': 0xc8,
                        '…': 0x12c
                    };
                function m(o, p = !![]) {
                    if (o instanceof Array) {
                        let q = null;
                        return o[0x0]['includes']($__language_Array__['be4ac390234e5730488d5efa3c4ad524']) && (q = o[0x0]['split']($__language_Array__['be4ac390234e5730488d5efa3c4ad524'])['join'](''), o['splice'](0x0, 0x1)), p ? [
                            q,
                            o['join']('')
                        ] : [
                            q,
                            o
                        ];
                    } else {
                        let r = o['split']($__language_Array__['be4ac390234e5730488d5efa3c4ad524']), s = null;
                        return r['length'] > 0x1 && (s = r[0x0], r['splice'](0x0, 0x1)), p ? [
                            s,
                            r['join']('')
                        ] : [
                            s,
                            r['join']('')['split']('')
                        ];
                    }
                }
                let n = ![];
                g['onclick'] = function () {
                    if (k >= 0x0 && g['innerHTML']['length'] < h[k]['length'] + j['length']) {
                        let s = m(h[k]);
                        g['innerHTML'] = (j ? j + $__language_Array__['be4ac390234e5730488d5efa3c4ad524'] : '') + s[s['length'] - 0x1] + '\x20\x20', n = !![];
                        return;
                    }
                    n = ![], k++;
                    i[k] && i[k]();
                    if (k >= h['length']) {
                        e(), ClearChild(g);
                        return;
                    }
                    let o = m(h[k], ![]);
                    o[0x0] !== null && o[0x0] != j && (j = o[0x0]);
                    g['innerHTML'] = j ? j + $__language_Array__['be4ac390234e5730488d5efa3c4ad524'] : '';
                    let p = o[0x1], q = 0x0, r = k;
                    setTimeout(function t() {
                        var u;
                        if (k != r || q >= p['length'] || n) {
                            q >= p['length'] && !n && setTimeout(v => {
                                k == r && !n && (n = !![], g['innerHTML'] += '\x20\x20');
                            }, 0xc8);
                            return;
                        }
                        g['innerHTML'] += p[q++], setTimeout(t, (u = l[p[q - 0x1]]) !== null && u !== void 0x0 ? u : 0x32);
                    }, 0x32);
                }, g['click']();
            }
            f();
        }
    });
}
;