/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    typeof option__isCheatEngineStart !== 'undefined' && (localStorage['JNG_TR_CHEATINDUSTRYPART3__'] = !![]);
    let melonpult, oMelonPult_CanMove_ = InheritO(oMelonPult, {
            'EName': 'oMelonPult_CanMove_',
            'PrivateBirth'(b) {
                b['BulletEle'] = NewImg(0x0, b['PicArr'][0x3], 'left:' + (b['pixelLeft'] + 0x32) + 'px;top:' + (b['pixelTop'] + 0xa) + 'px;width:40px;visibility:hidden;z-index:' + (b['zIndex'] + 0x2)), melonpult = b, coord = [
                    b['R'],
                    b['C']
                ];
            },
            'NormalAttack'(a) {
                let b = this, c = $(b['id']), d = oZ['getRangeLeftZ'](b['pixelLeft'] + b['beAttackedPointR'], oS['W'], b['R'], !![]);
                if (!d)
                    return;
                let e = EditEle(b['BulletEle']['cloneNode'](), { 'id': 'CB' + Math['random']() }, 0x0, EDPZ);
                b['AttackAnim'](c, b), oSym['addTask'](0x109, f => $P[b['id']] && (c['childNodes'][0x1]['src'] = b['PicArr'][b['NormalGif']])), oSym['addTask'](0x5a, f => {
                    d = oZ['getRangeLeftZ'](b['pixelLeft'] + b['beAttackedPointR'], oS['W'], b['R'], !![]), EditImg(e, 0x0, 0x0, {
                        'left': b['pixelLeft'] + 0x32,
                        'top': b['pixelTop'] + 0xa,
                        'zIndex': b['zIndex'] + 0x2
                    }), PlayAudio(b['AudioArr']['slice'](0x0, 0x2)['random']()), SetVisible(e);
                    let g = b['pixelLeft'] + 0x1e, h = b['pixelTop'], i = !d ? [
                            0x384,
                            -0x46
                        ] : d['HeadTargetPosition'][d['isAttacking']] ? d['HeadTargetPosition'][d['isAttacking']] : d['HeadTargetPosition'][0x0], j = !d ? 0x384 : Number['parseInt'](d['Ele']['style']['left']) + i['x'] - g - !d['isAttacking'] * d['Speed'] * d['DeltaDirectionSpeed'][d['FangXiang']] * 0xa * oSym['NowSpeed'], k = g + j, l = 0.2, m = -0x8, n = -(l * j) / (0x2 * m), o = 0x0, p = !d ? GetY(b['R']) : Number['parseInt'](d['Ele']['style']['top']) + i['y'] - 0x14, [q, r] = [
                            g,
                            h
                        ], t = Math['floor'](Math['random']() * 0x14 - 0xa), u = Math['floor'](Math['random']() * 0x6 + 0x3), v = NewEle(b['id'] + '_B_' + Math['random']() + '_Shadow', 'div', 'opacity:0.5;background-size:29px;background-repeat:\x20no-repeat;width:29px;left:' + g + 'px;top:' + (b['pixelTop'] + b['height'] - 0xa) + 'px;', { 'className': 'Shadow' }, EDPZ), w = b['R'];
                    (function z() {
                        var A;
                        m += l, e['style']['left'] = (g += n) + 'px', v['style']['left'] = g + 'px', e['style']['top'] = (h += m) + 'px', e['style']['transform'] = 'rotate(' + (t += u) + 'deg)';
                        !$Z[(A = d) === null || A === void 0x0 ? void 0x0 : A['id']] && (p = GetY(w) - 0x46);
                        if (g >= k - 0x28 && h >= p && m > 0x0 || j < 0x28) {
                            var B;
                            ClearChild(e);
                            let E = b['R'];
                            b['R'] = w, b['HitZombie']((B = d) !== null && B !== void 0x0 ? B : { 'id': '-1' }, b, g, h), b['R'] = E, ClearChild(v);
                            return;
                        }
                        let C = new Date()['getTime'](), D = Math['max'](0x0, 0x32 / 0x3 - (C - o)) / 0xa;
                        oSym['addTask'](D, z), o = C + D, [q, r] = [
                            g,
                            h
                        ];
                    }());
                });
            }
        }), movePlantDoing = function (a, b, c) {
            a['oTrigger'] && oT['delP'](a), delete oGd['$'][a['R'] + '_' + a['C'] + '_' + a['PKind']];
            let d = GetX(c), e = GetY(b), f = GetAP(d, e, b, c)[0x0], g = $(a['id']), h = d + a['GetDX'](a), i = e + a['GetDY'](b, c, f, !![]) - a['height'];
            a['pixelLeft'] = h, a['pixelRight'] = h + a['width'], a['pixelTop'] = i, a['pixelBottom'] = i + a['GetDBottom'](a), a['zIndex'] = 0x3 * b, a['InitTrigger'](a, a['id'], a['R'] = b, a['C'] = c, a['AttackedLX'] = h + a['beAttackedPointL'], a['AttackedRX'] = h + a['beAttackedPointR']), a['BirthStyle'](a, a['id'], g, Object['assign']({
                'left': h + 'px',
                'top': i + 'px',
                'zIndex': a['zIndex']
            }, a['ImgStyle'])), oGd['add'](a, b + '_' + c + '_' + a['PKind']);
        }, oMembraneZombie_NOMelon = InheritO(oMembraneZombie, {
            'EName': 'oMembraneZombie_NOMelon',
            'getPlants'() {
                return hasPlants(!![], a => {
                    return !(a['EName'] === 'oMelonPult_CanMove_') && a['PKind'] === 0x1;
                });
            }
        }), oThiefZombie_NOMelon = InheritO(oThiefZombie, {
            'EName': 'oThiefZombie_NOMelon',
            'StealPlantRequirement': function (a) {
                return a['Tools'] != !![] && a['EName'] !== 'oMelonPult_CanMove_' && a['canEat'] == !![];
            }
        }), coord = [
            0x3,
            0x5
        ];
    const RePlant = a => {
            ClearChild($('MovePlant')), PlayAudio('seedlift');
            let b = a['clientX'] - EDAlloffsetLeft + EBody['scrollLeft'] || EElement['scrollLeft'], c = a['clientY'] + EBody['scrollTop'] || EElement['scrollTop'], d = oMelonPult_CanMove_['prototype'];
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
            }), GroundOnmousemove = f => GroundOnmousemove1(f, oMelonPult_CanMove_);
        }, setMovePlant = () => {
            melonpult['Die2'] = melonpult['Die'], melonpult['Die'] = a => {
                oS['Chose'] && oS['ChoseCard'] === '' && CancelPlant(), melonpult['Die2']();
            };
        };
    RewriteGlobalVariables({
        'GrowPlant': (a, b, c, d, e) => {
            let f = oS['ChoseCard'], g, h;
            if (f !== '') {
                let j = ArCard[f];
                g = j['PName'], h = j['DID'];
            } else
                g = oMelonPult_CanMove_;
            let i = g['prototype'];
            if (i['CanGrow'](a, d, e)) {
                PlayAudio('plant' + Math['floor'](0x1 + Math['random']() * 0x2));
                if (f !== '') {
                    let k = ArCard[f], l = i['coolTime'];
                    new g()['Birth'](b, c, d, e, a), oS['SunNum'] -= i['SunNum'], l && (k['CDReady'] = 0x0, DoCoolTimer(f, l)), oS['ChoseCard'] = '';
                } else {
                    if (!$P[melonpult['id']]) {
                        CancelPlant();
                        return;
                    }
                    movePlantDoing(melonpult, d, e), coord = [
                        d,
                        e
                    ], oS['ChoseCard'] = '', oS['Chose'] = 0x0, GroundOnmousemove = () => {
                    }, ClearChild($('MovePlant'), $('MovePlantAlpha'), $(h));
                }
                oSym['addTask'](0x14, SetHidden, [SetStyle($('imgGrowSoil'), {
                        'left': b - 0x1e + 'px',
                        'top': c - 0x1e + 'px',
                        'zIndex': 0x3 * d + 0x1,
                        'visibility': 'visible'
                    })]), !Mobile && CancelPlant();
            }
            Mobile && CancelPlant();
        }
    }, !![]), oS['Init']({
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
            oPlantern,
            oCabbage,
            oBlover,
            oShiitake,
            oKernelPult,
            oXshooter,
            oMacintosh,
            oCranberry
        ],
        'ZName': [
            oBeetleCarZombie,
            oImp,
            oSculptorZombie,
            oSculpture,
            oMembraneZombie_NOMelon,
            oZombie,
            oBucketheadZombie,
            oStrollZombie,
            oSadakoZombie,
            oPushIceImp,
            oCigarZombie,
            oConeheadZombie,
            oZomboni,
            oThiefZombie_NOMelon,
            oFootballZombie,
            oMakeRifterZombie,
            oCaskZombie,
            oSkatingZombie,
            oGargantuar
        ],
        'PicArr': ((() => {
            let a = oMelonPult_CanMove_['prototype'], b = a['PicArr'];
            return b['concat'](['images/interface/Industry.webp']);
        })()),
        'DKind': 0x0,
        'SunNum': 0x12c,
        'DynamicDifficulty': ![],
        'LockedCards': [
            [
                oCherryBomb,
                0x0
            ],
            [
                oBambooUncle,
                0x0
            ],
            [
                oPepper,
                0x0
            ]
        ],
        'LevelName': $__language_Array__['7f16e27df61cf8aecf2e3180332b2f5c'],
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_4',
        'HaveFog': {
            'leftBorder': 0x4,
            'type': 'strongFog'
        },
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let h = 0x1; h < 0x6; h++) {
                [
                    0x7,
                    0x8,
                    0x9
                ]['forEach'](i => {
                    PlaceZombie(oSculpture, h, i);
                });
            }
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:1300px;height:600px;background:#000;opacity:1;', 0x0, EDAll), c = !![];
            PlayAudio('rain', !![]), oAudio['rain']['volume'] = 0.5, oSym['addTask'](0x1, function i() {
                oAudio['rain']['currentTime'] > oAudio['rain']['duration'] - 0.4 && (oAudio['rain']['currentTime'] = 0x0), c && oSym['addTask'](0x1, i);
            });
            let d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), e = 0x0, f = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), g = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function j() {
                f['onclick'] = j;
                switch (e) {
                case 0x0:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['eea0528752227a33b3f56ab3f7384e84']), f['onclick'] = null, oEffects['fadeIn'](d, 'slow', () => f['onclick'] = j), e++;
                    break;
                case 0x1:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['6d8247de1b3d12462e510fefb29d8a5f']), e++;
                    break;
                case 0x2:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(f, $__language_Array__['1dacbaeeaaed781c890a26c1847ee83e']), e++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss3'), innerText(f, $__language_Array__['b9f58a828b1e2abd6b6f3d3bed20d7c8']), e++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss1'), innerText(f, $__language_Array__['5ad7f7ba8e98491ca116d6d24ac1955a']), e++;
                    break;
                case 0x5:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['8e6ce2d5c87c4f5fb60e9fff8cc6648d']), e++;
                    break;
                case 0x6:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(f, $__language_Array__['e7b76877967aff53074a0436ddbb8f80']), e++;
                    break;
                case 0x7:
                    PlayAudio('Zomboss2'), innerText(f, $__language_Array__['fe6cdc8f69464f0366d1df837febfbe1']), e++;
                    break;
                case 0x8:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['df54a75c513353c20e1b6076b3cf7833']), e++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['7f6fc1dd51668b573ddaee6179c9b982']), e++;
                    break;
                case 0xa:
                    f['onclick'] = null, oEffects['fadeOut'](d, 'slow', () => f['onclick'] = j), g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(f, $__language_Array__['755121eeeef55f33d1ef3d3d775f9d89']), e++;
                    break;
                case 0xb:
                    PlayAudio('crazydavelong2'), innerText(f, $__language_Array__['4dc3d32875bf9a9c257efb33b43d0ec9']), e++;
                    break;
                case 0xc:
                    PlayAudio('crazydavelong2'), innerText(f, $__language_Array__['66c42163888061ba2c58644ccedf98c6']), e++;
                    break;
                case 0xd:
                    ClearChild(f, g, d), c = ![], oEffects['fadeOut'](b, 0x1, ClearChild), oMiniGames['DarkRain'](0x4, 0x2, 0x5), oSym['addTask'](0x1e, a);
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
            melonpult = CustomSpecial(oMelonPult_CanMove_, ...coord), setMovePlant();
            {
                let c = 0x0;
                new MutationObserver(d => d['forEach'](e => e['addedNodes']['forEach'](f => {
                    let g = f['id'], h = WIN[f['dataset']['jngConstructor']];
                    if (!h)
                        return;
                    let j = h['prototype']['EName'];
                    if (g['includes']('P_0.')) {
                        if (/oDoomShroom/['test'](j)) {
                            ++c;
                            let k = 0x7 - (!/oDoomShroom/['test'](j) ? 0x3 : 0x0);
                            if (c > k) {
                                for (let l = 0x0; l < oP['FlagToSumNum']['a2']['length']; l++) {
                                    oP['FlagToSumNum']['a2'][l] < 0xc8 && (oP['FlagToSumNum']['a2'][l] = Math['min'](oP['FlagToSumNum']['a2'][l] * (c - k), 0xc8)), oP['SpecialJudgment']['delays'][l] = Math['max'](0x1e, 0x96 - (c - k) * 0xf);
                                }
                                for (let m of $Z) {
                                    m['HP'] = Math['min'](0xfa0, m['HP'] + Math['round'](Math['min'](Math['max'](c - k, 0x0) * 0x190, 0x76c)));
                                }
                            }
                        }
                    }
                })))['observe'](EDPZ, { 'childList': !![] });
            }
            !localStorage['DIEC_IND23'] && (localStorage['DIEC_IND23'] = 0x0), localStorage['DIEC_IND23'] = Number['parseInt'](localStorage['DIEC_IND23']) + 0x1, addEventListenerRecord('jng-event-startgame', () => {
                PlaySubtitle(IsMobile() ? $__language_Array__['7b985434397c309b90ff0ab3b643b8fc'] : $__language_Array__['b2c96d69374600dbab5a2648609af1d4'], 0x3e8), EBody['onkeydown'] = ({keyCode: e}) => {
                    if (!oSym['Timer'] || !$P[melonpult['id']] || oS['Chose'] || !a[e])
                        return;
                    let f = Array['from'](coord), g = a[e], h = coord[0x0] += g[0x0], j = coord[0x1] += g[0x1], k = b[h + '_' + j + '_1'], l = 0x0, m = ![];
                    while (l++ < 0x9) {
                        if (h > 0x0 && h < 0x6 && j > 0x0 && j < 0xa) {
                            if (oMelonPult_CanMove_['prototype']['CanGrow'](GetAP(GetX(j), GetY(h), h, j)[0x0], h, j)) {
                                movePlantDoing(melonpult, h, j), coord = [
                                    h,
                                    j
                                ], m = !![];
                                break;
                            } else
                                h += g[0x0], j += g[0x1], k = b[h + '_' + j + '_1'];
                        } else {
                            coord = f;
                            break;
                        }
                    }
                    if (!m) {
                        coord = f;
                        let n = [], o = {
                                'r': coord[0x0] + g[0x0],
                                'c': coord[0x1] + g[0x1],
                                'step': 0x0
                            }, p = {}, q = [a[e]], r = {};
                        function s(t) {
                            return Math['random']() < 0.5 ? t['reverse']() : t;
                        }
                        e == 0x25 || e == 0x27 || e == 0x44 || e == 0x41 ? q['push'](...s([
                            a[0x26],
                            a[0x28]
                        ])) : q['push'](...s([
                            a[0x25],
                            a[0x27]
                        ]));
                        n['push'](o), p[o['r'] + '_' + o['c']] = !![];
                        while (n['length'] > 0x0) {
                            let t = n[0x0];
                            h = t['r'], j = t['c'], k = b[h + '_' + j + '_1'];
                            if (t['step'] > 0x2e) {
                                n['shift']();
                                continue;
                            }
                            if (o['r'] > 0x0 && o['r'] < 0x6 && o['c'] > 0x0 && o['c'] < 0xa) {
                                if (oMelonPult_CanMove_['prototype']['CanGrow'](GetAP(GetX(j), GetY(h), h, j)[0x0], h, j)) {
                                    movePlantDoing(melonpult, h, j), coord = [
                                        h,
                                        j
                                    ], m = !![], n = [];
                                    break;
                                }
                            }
                            for (let u = 0x0; u < 0x3; u++) {
                                let v = {
                                    'r': t['r'] + q[u][0x0],
                                    'c': t['c'] + q[u][0x1],
                                    'step': t['step'] + 0x1
                                };
                                k = b[v['r'] + '_' + v['c'] + '_1'], v['r'] > 0x0 && v['r'] < 0x6 && v['c'] > 0x0 && v['c'] < 0xa && !p[v['r'] + '_' + v['c']] && (k ? k['canShovel'] : !![]) && (n['push'](v), p[v['r'] + '_' + v['c']] = !![]);
                            }
                            n['shift']();
                        }
                    }
                    !m && PlayAudio('buzzer');
                };
            }, { 'once': !![] }), oS['DefaultStartGame'](), oSym['addTask'](0x5dc, d => {
                for (let e = 0x1; e < 0x6; e++) {
                    oSym['addTask'](Math['abs'](e - 0x3) * 0x64, f => {
                        PlaceZombie(oSadakoZombie, e, 0xb, 0x0);
                    });
                }
            });
        }
    }, {
        'AZ': [
            [
                oBeetleCarZombie,
                0x1,
                0xf
            ],
            [
                oSculptorZombie,
                0x1,
                0xf
            ],
            [
                oMembraneZombie_NOMelon,
                0x1,
                0x7
            ],
            [
                oStrollZombie,
                0x1,
                0xa
            ],
            [
                oSadakoZombie,
                0x1,
                0xa
            ],
            [
                oPushIceImp,
                0x1,
                0xc
            ],
            [
                oCigarZombie,
                0x1,
                0x3
            ],
            [
                oConeheadZombie,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oZomboni,
                0x1,
                0xe
            ],
            [
                oThiefZombie_NOMelon,
                0x1,
                0x13
            ],
            [
                oFootballZombie,
                0x1,
                0xf
            ],
            [
                oMakeRifterZombie,
                0x1,
                0xd
            ],
            [
                oCaskZombie,
                0x1,
                0x2
            ],
            [
                oSkatingZombie,
                0x1,
                0x1
            ],
            [
                oGargantuar,
                0x1,
                0x13
            ]
        ],
        'FlagNum': 0x10,
        'FlagToSumNum': {
            'a1': [
                0x2,
                0x5,
                0x7,
                0xa,
                0xc,
                0xf,
                0x13,
                0x14
            ],
            'a2': [
                0x2,
                0x2,
                0x2,
                0x2,
                0x1c,
                0x32,
                0x46,
                0x46,
                0x4b
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = -0x3; b < 0x4; b++) {
                        oSym['addTask'](b * 0x3c, c => {
                            PlaceZombie(oSadakoZombie, (b + coord[0x0] - coord[0x1] + 0x64) % 0x5 + 0x1, 0xb, 0x0)['HP'] -= 0x28;
                        });
                    }
                    if (Number['parseInt'](localStorage['DIEC_IND23']) < 0x4)
                        for (let c = 0x1; c < 0x6; c++) {
                            !oGd['$LockingGrid'][c + '_11'] && PlaceZombie(oSculpture, c, 0xb, 0x0);
                        }
                    oSym['addTask'](0x5dc, d => {
                        for (let e = 0x1; e < 0x6; e++) {
                            oSym['addTask'](Math['random']() * 0x64, f => {
                                Number['parseInt'](localStorage['DIEC_IND23']) < 0x7 && PlaceZombie(oMembraneZombie_NOMelon, (e + coord[0x0] + 0x2 * [
                                    0x1,
                                    -1.5
                                ]['random']() + 0x64) % 0x5 + 0x1, 0xb, 0x0), PlaceZombie(oStrollZombie, (e + coord[0x0] + Math['round'](0x3 * [
                                    0x1,
                                    -1.5
                                ]['random']()) + 0x64) % 0x5 + 0x1, 0xb, 0x0);
                            });
                        }
                    });
                }],
            0x2: [a => {
                    for (let b = 0x2; b < 0x5; b++) {
                        PlaceZombie(oBeetleCarZombie, b, 0xc, 0x0)['HP'] -= 0x12c, Number['parseInt'](localStorage['DIEC_IND23']) < 0x7 && (PlaceZombie(oMembraneZombie_NOMelon, (b + coord[0x0] + 0x2 * [
                            0x1,
                            -1.5
                        ]['random']() + 0x64) % 0x5 + 0x1, 0xb, 0x0)['HP'] -= 0xc8);
                    }
                    oSym['addTask'](0x384, c => {
                        for (let d = 0x1; d < 0x4; d++) {
                            oSym['addTask'](Math['random']() * 0x12c + d * 0x1f4, e => {
                                PlaceZombie(oSculptorZombie, Math['floor'](coord[0x1] / 0x3 * (coord[0x0] + d)) % 0x5 + 0x1, 0xc, 0x0);
                            });
                        }
                    });
                }],
            0x3: [a => {
                    for (let b = 0x0; b < 0x7; b++) {
                        oSym['addTask'](0x708 * Math['random'](), c => {
                            PlaceZombie([
                                oMembraneZombie_NOMelon,
                                oConeheadZombie,
                                oPushIceImp,
                                oConeheadZombie,
                                oPushIceImp
                            ]['random'](), [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        }), oSym['addTask'](0x708 * Math['random'](), c => {
                            PlaceZombie(oCigarZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc, 0x0);
                        });
                    }
                    oSym['addTask'](0x708 * Math['random'](), c => {
                        PlaceZombie(oBeetleCarZombie, [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](), 0xc, 0x0)['HP'] -= 0x12c;
                    });
                }],
            0x4: [a => {
                    if (localStorage['DIEC_IND23'] <= 0x3)
                        for (let c = 0x1; c < 0x6; c++) {
                            CustomSpecial(oRifterAnimate, c, 0x1);
                        }
                    let b = hasPlants(!![], d => {
                        return d['C'] > 0x2;
                    });
                    b['shuffle']()['slice'](0x0, 0x2)['forEach'](d => {
                        CustomSpecial(oRifterAnimate, d['R'], d['C']);
                    });
                    for (let d = 0x0; d < 0x5; d++) {
                        oSym['addTask'](0x708 * Math['random'](), e => {
                            PlaceZombie([
                                oMembraneZombie_NOMelon,
                                oConeheadZombie,
                                oPushIceImp
                            ]['random'](), [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        }), oSym['addTask'](0x708 * Math['random'](), e => {
                            PlaceZombie(oCigarZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc, 0x0);
                        });
                    }
                    for (let e = 0x0; e < 0x3; e++) {
                        oSym['addTask'](0x708 * Math['random'](), f => {
                            PlaceZombie([
                                oSculptorZombie,
                                oZomboni,
                                oBeetleCarZombie
                            ]['random'](), [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc, 0x0)['HP'] -= 0x12c;
                        });
                    }
                }],
            0x5: [a => {
                    for (let c = 0x1; c < 0x6; c++) {
                        !oGd['$LockingGrid'][c + '_11'] && PlaceZombie(oSculpture, c, 0xb, 0x0);
                    }
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oSculptorZombie, d, 0xc, 0x0);
                    }
                    let b = hasPlants();
                    b['shuffle']()['slice'](0x0, 0x1)['forEach'](e => {
                        CustomSpecial(oRifterAnimate, e['R'], e['C']);
                    });
                }],
            0x6: [a => {
                    [
                        [
                            0x3,
                            0x1
                        ],
                        [
                            0x3,
                            0x3
                        ],
                        [
                            0x3,
                            0x5
                        ],
                        [
                            0x3,
                            0x9
                        ],
                        [
                            0x1,
                            0x4
                        ],
                        [
                            0x1,
                            0x6
                        ],
                        [
                            0x1,
                            0x8
                        ],
                        [
                            0x5,
                            0x4
                        ],
                        [
                            0x5,
                            0x6
                        ],
                        [
                            0x5,
                            0x8
                        ]
                    ]['forEach'](b => {
                        PlaceZombie(oThiefZombie, b[0x0], b[0x1], 0x0);
                    });
                }],
            0x8: [a => {
                }],
            0xb: [a => {
                    localStorage['DIEC_IND23'] <= 0x4 && [
                        [
                            0x3,
                            0x1
                        ],
                        [
                            0x3,
                            0x3
                        ],
                        [
                            0x3,
                            0x5
                        ],
                        [
                            0x3,
                            0x9
                        ],
                        [
                            0x1,
                            0x4
                        ],
                        [
                            0x1,
                            0x6
                        ],
                        [
                            0x1,
                            0x8
                        ],
                        [
                            0x5,
                            0x4
                        ],
                        [
                            0x5,
                            0x6
                        ],
                        [
                            0x5,
                            0x8
                        ]
                    ]['forEach'](c => {
                        PlaceZombie(oThiefZombie, c[0x0], c[0x1], 0x0);
                    });
                    for (let c = 0x0; c < 0x1e; c++) {
                        oSym['addTask'](0x708 * Math['random'](), d => {
                            PlaceZombie(oSadakoZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc, 0x0);
                        });
                    }
                    let b = hasPlants();
                    b['shuffle']()['slice'](0x0, 0x5)['forEach'](d => {
                        CustomSpecial(oRifterAnimate, d['R'], d['C']);
                    });
                }],
            0xc: [a => {
                    PlaceZombie(oGargantuar, 0x1, 0xc, 0x0), PlaceZombie(oGargantuar, 0x5, 0xc, 0x0), oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x4; c++) {
                            oSym['addTask'](Math['random']() * 0x12c + c * 0x1f4, d => {
                                PlaceZombie(oSculptorZombie, coord[0x0], 0xc, 0x0);
                            });
                        }
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        !oGd['$LockingGrid'][b + '_11'] && PlaceZombie(oSculpture, b, 0xb, 0x0);
                    }
                }],
            0xd: [a => {
                    for (let b = 0x1; b < 0x2; b++) {
                        oSym['addTask'](Math['random']() * 0x12c + b * 0x1f4, c => {
                            PlaceZombie(oSculptorZombie, coord[0x0], 0xc, 0x0);
                        });
                    }
                }],
            0xf: [a => {
                    let b = 0x1;
                    localStorage['DIEC_IND23'] >= 0x6 && (b = 0x2);
                    for (let c = 0x1; c < 0x6; c += b) {
                        !oGd['$LockingGrid'][c + '_11'] && PlaceZombie(oSculpture, c, 0xb, 0x0), PlaceZombie(oGargantuar, c, 0xc, 0x0)['HP'] -= 0xc8, PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                    }
                }]
        },
        'FlagToEnd'() {
            ShowWinItem(GetPlantCardDom(oMelonPult, EDAll, null, {
                'onclick'() {
                    var a;
                    GetNewCard(this, oMelonPult, NextLevel());
                    let b = JSON['parse']((a = localStorage['JNG_TR_OPTIONS_INDUSTRYPART3']) !== null && a !== void 0x0 ? a : '{}');
                    b['fail23'] = Number(localStorage['DIEC_IND23']) - 0x1, localStorage['JNG_TR_OPTIONS_INDUSTRYPART3'] = JSON['stringify'](b), delete localStorage['DIEC_IND23'];
                }
            }));
        }
    }, {
        'GroundOnmousedown'() {
            let a = event['clientX'] - EDAlloffsetLeft, b = event['clientY'], [[c, d], [e, f]] = [
                    ChosePlantX(a),
                    ChosePlantY(b)
                ], g = GetAP(a, b, f, d);
            if (oS['Chose'] === 0x0 && WhichMouseButton(event) < 0x2 && melonpult && $P[melonpult['id']]) {
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