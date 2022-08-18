/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let coord = [
            0x3,
            0x5
        ], plantern;
    const RePlant = a => {
            ClearChild($('MovePlant')), PlayAudio('seedlift');
            let b = a['clientX'] - EDAlloffsetLeft, c = a['clientY'] + EBody['scrollTop'] || EElement['scrollTop'], d = oPlantern['prototype'];
            oS['Chose'] = 0x1;
            let e = NewImg('MovePlant', d['PicArr'][d['StaticGif']], 'left:' + b + 'px;top:' + (c + 0x14 - d['height']) + 'px;z-index:258;', FightingScene);
            EditImg(e['cloneNode'](![]), 'MovePlantAlpha', '', {
                'visibility': 'hidden',
                'opacity': 0.4,
                'zIndex': 0x1e
            }, FightingScene), EditCompositeStyle({
                'ele': e,
                'addFuncs': [[
                        'translateX',
                        '-50%'
                    ]],
                'option': 0x2
            }), GroundOnmousemove = f => GroundOnmousemove1(f, oPlantern);
        }, setMovePlant = () => {
            plantern['Die2'] = plantern['Die'], plantern['Die'] = a => {
                oS['Chose'] && oS['ChoseCard'] === '' && CancelPlant(), plantern['Die2']();
            };
        }, GrowPlant = (a, b, c, d, e) => {
            let f = oS['ChoseCard'], g, h;
            if (f !== '') {
                let j = ArCard[f];
                g = j['PName'], h = j['DID'];
            } else
                g = oPlantern;
            let i = g['prototype'];
            if (i['CanGrow'](a, d, e)) {
                PlayAudio('plant' + Math['floor'](0x1 + Math['random']() * 0x2));
                if (f !== '')
                    ArCard['splice'](f, 0x1), new g()['Birth'](b, c, d, e, a);
                else {
                    if (!$P[plantern['id']]) {
                        CancelPlant();
                        return;
                    }
                    let k = plantern['HP'];
                    plantern['Die'](), plantern = new g()['Birth'](b, c, d, e, a), plantern['HP'] = k, coord = [
                        d,
                        e
                    ], setMovePlant();
                }
                oSym['addTask'](0x14, SetHidden, [SetStyle($('imgGrowSoil'), {
                        'left': b - 0x1e + 'px',
                        'top': c - 0x1e + 'px',
                        'zIndex': 0x3 * d + 0x1,
                        'visibility': 'visible'
                    })]), oS['ChoseCard'] = '', oS['Chose'] = 0x0, GroundOnmousemove = () => {
                }, ClearChild($('MovePlant'), $('MovePlantAlpha'), $(h)), !Mobile && CancelPlant();
            }
            Mobile && CancelPlant();
        };
    oS['Init']({
        'PName': [
            oPeashooter,
            oRepeater,
            oSnowPea,
            oWallNut,
            oPotatoMine,
            oIceAloe,
            oBegonia
        ],
        'ZName': [
            oMakeRifterZombie,
            oSkatingZombie,
            oStrollZombie,
            oImp,
            oFootballZombie,
            oBucketheadZombie
        ],
        'PicArr': ((() => {
            let a = oPlantern['prototype'], b = a['PicArr'];
            return [
                b[a['CardGif']],
                b[a['StaticGif']],
                'images/interface/Industry.webp'
            ];
        })()),
        'LevelName': $__language_Array__['a24efa3f3aac0b928f2d8a6a2cd7039b'],
        'FixedProps': 'disabled',
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_1',
        'CanSelectCard': 0x0,
        'StaticCard': 0x0,
        'HaveFog': {
            'leftBorder': 0x9,
            'type': 'Fog'
        },
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let e = 0x1; e < 0x6; e++)
                CustomSpecial(oZombieComeOnObs, e, 0x3);
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function f() {
                c['onclick'] = f;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['ae8b770da0e753188e7dd66cd01516fa']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['5a7ba79e6c12ab9d364cfca99310032b']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['cc802e04d48a6c6e83583e6560993a8d']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9d1304d00cf58d67795a01780e1c7237']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['61b8c365c2b989506b2e3d1a6dffa118']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, '……'), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['48cd9bbe6c41d53aa9d2f490ae8a6a30']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['fb3a0c15ac162177d6a8f35e24056863']), b++;
                    break;
                case 0x8:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['718bdc507d5f789797c23e2fbe4ed89b']), b++;
                    break;
                case 0x9:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['4da877ddaad5235164c3912158496f22']), b++;
                    break;
                case 0xa:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['c3fab5654d9c118fd43b39069d944d2e']), b++;
                    break;
                case 0xb:
                    ClearChild(c, d), oSym['addTask'](0x1e, a);
                }
            }());
        },
        'StartGame'() {
            let a = {
                    '37': [
                        0x0,
                        -0x1
                    ],
                    '38': [
                        -0x1,
                        0x0
                    ],
                    '39': [
                        0x0,
                        0x1
                    ],
                    '40': [
                        0x1,
                        0x0
                    ],
                    '65': [
                        0x0,
                        -0x1
                    ],
                    '87': [
                        -0x1,
                        0x0
                    ],
                    '68': [
                        0x0,
                        0x1
                    ],
                    '83': [
                        0x1,
                        0x0
                    ]
                }, b = oGd['$'];
            plantern = CustomSpecial(oPlantern, ...coord), setMovePlant(), addEventListenerRecord('jng-event-startgame', () => {
                PlaySubtitle(IsMobile() ? $__language_Array__['aed9277f55887f6b365e0b7a2e420590'] : $__language_Array__['3008aae2255ec8f62ba6dcc22e9d5b8c'], 0x3e8), EBody['onkeydown'] = ({keyCode: c}) => {
                    if (!oSym['Timer'] || !$P[plantern['id']] || oS['Chose'] || !a[c])
                        return;
                    let e = Array['from'](coord), f = a[c], g = coord[0x0] += f[0x0], h = coord[0x1] += f[0x1], j = b[g + '_' + h + '_1'], k = 0x0, l = ![];
                    while (k++ < 0x9) {
                        if (g > 0x0 && g < 0x6 && h > 0x0 && h < 0xa) {
                            if (oPlantern['prototype']['CanGrow'](GetAP(GetX(h), GetY(g), g, h)[0x0], g, h)) {
                                let m = plantern['HP'];
                                plantern['Die'](), plantern = CustomSpecial(oPlantern, g, h), plantern['HP'] = m, setMovePlant(), coord = [
                                    g,
                                    h
                                ], l = !![];
                                break;
                            } else
                                g += f[0x0], h += f[0x1], j = b[g + '_' + h + '_1'];
                        } else {
                            coord = e;
                            break;
                        }
                    }
                    if (!l) {
                        coord = e;
                        let n = [], o = {
                                'r': coord[0x0] + f[0x0],
                                'c': coord[0x1] + f[0x1],
                                'step': 0x0
                            }, p = {}, q = [a[c]], r = {};
                        function s(t) {
                            return Math['random']() < 0.5 ? t['reverse']() : t;
                        }
                        c == 0x25 || c == 0x27 || c == 0x44 || c == 0x41 ? q['push'](...s([
                            a[0x26],
                            a[0x28]
                        ])) : q['push'](...s([
                            a[0x25],
                            a[0x27]
                        ]));
                        n['push'](o), p[o['r'] + '_' + o['c']] = !![];
                        while (n['length'] > 0x0) {
                            let t = n[0x0];
                            g = t['r'], h = t['c'], j = b[g + '_' + h + '_1'];
                            if (t['step'] > 0x2e) {
                                n['shift']();
                                continue;
                            }
                            if (o['r'] > 0x0 && o['r'] < 0x6 && o['c'] > 0x0 && o['c'] < 0xa) {
                                if (oPlantern['prototype']['CanGrow'](GetAP(GetX(h), GetY(g), g, h)[0x0], g, h)) {
                                    let u = plantern['HP'];
                                    plantern['Die'](), plantern = CustomSpecial(oPlantern, g, h), plantern['HP'] = u, setMovePlant(), coord = [
                                        g,
                                        h
                                    ], l = !![], n = [];
                                    break;
                                }
                            }
                            for (let v = 0x0; v < 0x3; v++) {
                                let w = {
                                    'r': t['r'] + q[v][0x0],
                                    'c': t['c'] + q[v][0x1],
                                    'step': t['step'] + 0x1
                                };
                                j = b[w['r'] + '_' + w['c'] + '_1'], w['r'] > 0x0 && w['r'] < 0x6 && w['c'] > 0x0 && w['c'] < 0xa && !p[w['r'] + '_' + w['c']] && (j ? j['canShovel'] : !![]) && (n['push'](w), p[w['r'] + '_' + w['c']] = !![]);
                            }
                            n['shift']();
                        }
                    }
                    !l && PlayAudio('buzzer');
                };
            }, { 'once': !![] }), oMiniGames['ConveyorBelt']();
        }
    }, {
        'AZ': [
            [
                oMakeRifterZombie,
                0x3,
                0x8
            ],
            [
                oSkatingZombie,
                0x2,
                0x5,
                [0xa]
            ],
            [
                oStrollZombie,
                0x2,
                0x4,
                [0xa]
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oFootballZombie,
                0x1,
                0xa
            ],
            [
                oBucketheadZombie,
                0x1,
                0xa
            ]
        ],
        'FlagNum': 0xf,
        'FlagToSumNum': {
            'a1': [
                0x2,
                0x5,
                0x7,
                0x8,
                0xb,
                0xd,
                0xf
            ],
            'a2': [
                0x3,
                0x5,
                0x7,
                0xa,
                0xc,
                0x11,
                0x14,
                0x17
            ]
        },
        'FlagToEnd'() {
            ShowWinItem(GetPlantCardDom(oPlantern, EDAll));
        }
    }, {
        'GroundOnmousedown'() {
            let a = event['clientX'] - EDAlloffsetLeft, b = event['clientY'], [[c, d], [e, f]] = [
                    ChosePlantX(a),
                    ChosePlantY(b)
                ], g = GetAP(a, b, f, d);
            if (oS['Chose'] === 0x0 && WhichMouseButton(event) < 0x2 && plantern && $P[plantern['id']]) {
                if (f == coord[0x0] && d === coord[0x1]) {
                    RePlant(event);
                    return;
                }
            }
            switch (oS['Chose']) {
            case 0x1:
                WhichMouseButton(event) < 0x2 ? GrowPlant(g[0x0], c, e, f, d) : CancelPlant();
                break;
            case -0x1:
                WhichMouseButton(event) < 0x2 ? ShovelPlant(g) : CancelShovel();
                break;
            }
        }
    });
}