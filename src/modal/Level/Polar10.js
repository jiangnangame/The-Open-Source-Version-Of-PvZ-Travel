/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oRepeater,
        oPepper,
        oPumpkinHead,
        oRadish,
        oIceAloe
    ],
    'ZName': [
        oMembraneZombie,
        oFootballZombie,
        oSadakoZombie,
        oImp,
        oMakeRifterZombie,
        oBucketheadZombie,
        oCaskZombie,
        oCigarZombie,
        oStrollZombie
    ],
    'LevelName': $__language_Array__['206b97047aad032c5e3cbb6438578341'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'FixedProps': 'disabled',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'PicArr': (function () {
        let c = oImitater['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']]
        ];
    }()),
    'LoadAccess': function (b) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1);
        let c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            d['onclick'] = f;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['7b5486f68b71d0c10d39ab285487cb46']), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['a76404eef251e3bdf16998f44777a57e']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, '……'), c++;
                break;
            case 0x3:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['3cd1a99b089019dc50b13712772c4536']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['56df2c52d26c3afa4f163e90a69715d3']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['70f85420f57c1f18703e5eb46af6e057']), c++;
                break;
            case 0x6:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['5a0a1ac24a9affcbb6ca77658685309a']), c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['6c441b03c00c06d71c458620b635dfd1']), c++;
                break;
            case 0x8:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['59b644a67a33c0b5464dfb352c3b32ba']), c++;
                break;
            case 0x9:
                ClearChild(d, e), oSym['addTask'](0x1e, b);
            }
        }());
    },
    'StartGame': function () {
        NewImg('imgKK', 'images/interface/ConveyorBelt.webp', 'left:0px;top:0px;z-index:0;\x20', $('dCardList')), StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), SetHidden($('dSunNum')), oMiniGames['WinWithScore']({
            'scoreMax': 0x2710,
            'specialZombiesList': {
                '68': [
                    'oMembraneZombie',
                    'oFootballZombie'
                ],
                '17': ['oImp'],
                '51': ['oBucketheadZombie']
            },
            'zombieFunc': a => 0x22
        }), PrepareGrowPlants(a => {
            oP['Monitor']({
                'f'() {
                    (function b() {
                        var g = ArCard['length'], h = 0xa;
                        if (g < h) {
                            var i = oS['PName'], k = Math['floor'](Math['random']() * i['length']), l = i[k], m = l['prototype'], n = 'dCard' + Math['random']();
                            ArCard[g] = {
                                'DID': n,
                                'PName': l,
                                'PixelTop': 0x251
                            }, NewImg(n, m['PicArr'][m['CardGif']], 'top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)', $('dCardList'), {
                                'onmouseover': function (o) {
                                    ViewPlantTitle(GetChoseCard(n), o);
                                },
                                'onmouseout': function () {
                                    SetHidden($('dTitle'));
                                },
                                'onmousedown': function (o) {
                                    ChosePlant(o, oS['ChoseCard'], n), o['preventDefault'](), o['stopPropagation']();
                                }
                            });
                        }
                        oSym['addTask'](0x258, b);
                    }(), function c() {
                        var d = ArCard['length'], e, f;
                        while (d--) {
                            (f = (e = ArCard[d])['PixelTop']) > 0x3c * d && $(e['DID'])['style']['top'] != '5px' && ($(e['DID'])['style']['top'] = (e['PixelTop'] = f - 0x1) + 'px');
                        }
                        oSym['addTask'](0x5, c);
                    }());
                },
                'ar': []
            }), oP['AddZombiesFlag']();
        });
    }
}, {
    'AZ': [
        [
            oMembraneZombie,
            0x1,
            0xf
        ],
        [
            oFootballZombie,
            0x1,
            0xf
        ],
        [
            oSadakoZombie,
            0x1,
            0xa
        ],
        [
            oImp,
            0x1,
            0x1
        ],
        [
            oBucketheadZombie,
            0x1,
            0x1
        ],
        [
            oCaskZombie,
            0x1,
            0x1
        ],
        [
            oCigarZombie,
            0x1,
            0xf
        ],
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oMakeRifterZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0x29a,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x5,
            0x7,
            0x9,
            0xc,
            0xf,
            0x19,
            0x1e,
            0x2d,
            0x32,
            0x46,
            0x5a
        ],
        'a2': [
            0x2,
            0x6,
            0xb,
            0x12,
            0x16,
            0x1c,
            0x1f,
            0x23,
            0x28,
            0x32,
            0x64,
            0x96,
            0xc8
        ]
    },
    'FlagToEnd': function () {
        ShowWinItem(GetPlantCardDom(oImitater, EDAll));
    }
}, {
    'GetChoseCard': function (c) {
        if (oS['Chose'])
            return;
        var d = ArCard['length'];
        while (d--) {
            ArCard[d]['DID'] == c && (oS['ChoseCard'] = d, d = 0x0);
        }
        return oS['ChoseCard'];
    },
    'ChosePlant'(a, b = null) {
        oS['Chose'] === -0x1 && CancelShovel();
        if (oS['Chose'] === 0x1 || $('MovePlant')) {
            CancelPlant();
            return;
        }
        if (b !== null) {
            if (b + 0x1 > ArCard['length'] || b < 0x0)
                return;
            b === -0x1 && (b = 0x9), oS['ChoseCard'] = b;
        }
        oS['Chose'] = 0x1, $('MovePlant') && ClearChild($('MovePlant')), PlayAudio('seedlift');
        let c = ArCard[oS['ChoseCard']], d = a['clientX'] - EDAlloffsetLeft, e = a['clientY'], f = c['PName']['prototype'], g = NewImg('MovePlant', f['PicArr'][f['StaticGif']], 'left:' + d + 'px;top:' + (e + 0x14 - f['height']) + 'px;z-index:258;', FightingScene);
        SetStyle(g, f['ImgStyle']), EditImg(g['cloneNode'](![]), 'MovePlantAlpha', '', {
            'visibility': 'hidden',
            'opacity': 0.4,
            'zIndex': 0x1e
        }, FightingScene), EditCompositeStyle({
            'ele': g,
            'addFuncs': [[
                    'translateX',
                    '-50%'
                ]],
            'option': 0x2
        }), SetAlpha($(c['DID']), 0.5), SetHidden($('dTitle')), GroundOnmousemove = GroundOnmousemove1;
    },
    'CancelPlant': function () {
        ClearChild($('MovePlant'), $('MovePlantAlpha')), oS['Chose'] = 0x0, ArCard[oS['ChoseCard']] && SetAlpha($(ArCard[oS['ChoseCard']]['DID']), 0x64, 0x1), oS['ChoseCard'] = '', GroundOnmousemove = function () {
        };
    },
    'GrowPlant': function (m, n, o, p, q) {
        var r = oS['ChoseCard'], s = ArCard[r], t = s['PName'], u = t['prototype'], v = s['DID'], w, x = oGd['$LF'][p];
        u['CanGrow'](m, p, q) && (function () {
            PlayAudio(x != 0x2 ? 'plant' + Math['floor'](0x1 + Math['random']() * 0x2) : 'plant_water'), new t()['Birth'](n, o, p, q, m), oSym['addTask'](0x14, SetNone, [SetStyle($('imgGrowSoil'), {
                    'left': n - 0x1e + 'px',
                    'top': o - 0x28 + 'px',
                    'zIndex': 0x3 * p,
                    'visibility': 'visible'
                })]), ClearChild($('MovePlant'), $('MovePlantAlpha')), $('dCardList')['removeChild'](w = $(v)), w = null, ArCard['splice'](r, 0x1), oS['ChoseCard'] = '', oS['Chose'] = 0x0, GroundOnmousemove = function () {
            }, !Mobile && CancelPlant();
        }()), Mobile && CancelPlant();
    },
    'ViewPlantTitle': function () {
    }
});