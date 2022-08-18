/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oPepper,
        oPumpkinHead,
        oStoneFlower,
        oWallNut,
        oSnowPea,
        oRepeater
    ],
    'ZName': [
        oZombie,
        oStrollZombie,
        oMakeRifterZombie,
        oSadakoZombie,
        oSkatingZombie
    ],
    'PicArr': (function () {
        let c = oPepper['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']],
            'images/interface/Fuben_Summer.webp'
        ];
    }()),
    'LevelName': $__language_Array__['fd8310c3a3ed8b9d56a64db4cbdb5333'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'FixedProps': 'disabled',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'LoadAccess': function (a) {
        let b = NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), d = NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        b['style']['zIndex'] = d['style']['zIndex'] = 0x0;
        for (let k = 0x1; k <= 0x5; k++) {
            k % 0x2 == 0x0 ? CustomSpecial(oApple, k, 0x6) : CustomSpecial(oRifter, k, 0x6), CustomSpecial(oRifter, k, 0x7), k > 0x1 && k < 0x5 && CustomSpecial(oRifter, k, 0x4), k != 0x3 && CustomSpecial(oRifter, k, 0x5);
        }
        CustomSpecial(oApple, 0x3, 0x5), NewEle(0x0, 'div', 'left:650px;top:180px;', { 'className': 'sos' }, $('tGround')), NewEle(0x0, 'div', 'left:650px;top:380px;', { 'className': 'sos' }, $('tGround')), NewEle(0x0, 'div', 'left:570px;top:278px;', { 'className': 'sos' }, $('tGround')), PlayAudio('Bgm_Polar_Noise', 0x1);
        let e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:0;width:900px;height:600px;background:url(images/interface/Fuben_Summer.webp);opacity:0;', 0x0, EDAll), f = 0x0, g = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), h = NewImg('dDave', '', 'left:0;top:81px', EDAll), i = ![], j = ![];
        oSym['addTask'](0x2, function l() {
            if (i)
                return;
            else
                j ? h['style']['transform'] = 'translate(' + (Math['random']() * 0x2 - 0x1) + 'px,' + (Math['random']() * 0x2 - 0x1) + 'px)' : h['style']['transform'] = '', oSym['addTask'](0x2, l);
        }), function m() {
            g['onclick'] = m;
            switch (f) {
            case 0x0:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['b3ecd01943517252b2d54529c6460356']), f++;
                break;
            case 0x1:
                PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['8da9a38e6dca403c2ae4450f5af2f411']), f++;
                break;
            case 0x2:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['d4d6067cc45fa545d8fda4578ab80ce5']), f++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['867e27808e1594fa686535bdb0abb801']), f++;
                break;
            case 0x4:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['9bc8c31d99de785fece7543c595e870d']), f++;
                break;
            case 0x5:
                PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['363560c6ca72b7d3aed839360d30bf32']), f++;
                break;
            case 0x6:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['ca64e1dd2ef4c36fd93baaae6fe3af42']), f++;
                break;
            case 0x7:
                g['onclick'] = null, PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['a8e42898c35b0c6bed7956e3565c469b']), j = !![], oEffects['fadeIn'](e, 1.5, () => g['onclick'] = m), f++;
                break;
            case 0x8:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), j = ![], innerText(g, $__language_Array__['afe2e74453551870321d0b0e4dfc1007']), f++;
                break;
            case 0x9:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), j = !![], innerText(g, $__language_Array__['dcc7eeb86a6f967b5e2246cd7c85bbe9']), f++;
                break;
            case 0xa:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), j = ![], innerText(g, $__language_Array__['3b56fb19b72ded7477f1bf5b9dd7f12e']), f++;
                break;
            case 0xb:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), j = !![], innerText(g, $__language_Array__['ba42e22072e5bba94f6ced676ebdd6b5']), f++;
                break;
            case 0xc:
                j = ![], g['onclick'] = null, h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), g['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['31dd4619160e9db67f17f550b54844ce'],
                    'font_size': 0x18
                })[0x0] + '</p>', oEffects['fadeOut'](e, 0.2, () => g['onclick'] = m), b['style']['zIndex'] = d['style']['zIndex'] = '', g['style']['fontSize'] = '24px', f++;
                break;
            case 0xd:
                PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['d9e8570bc9fd50bd882f94c78fe25ae7']), g['style']['fontSize'] = '18px', f++;
                break;
            case 0xe:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['8b822267ef2458b9b1c73d957624afc2']), f++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['adef476608f14990957470930da6101f']), f++;
                break;
            case 0x10:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), oEffects['ScreenShake'](), innerText(g, $__language_Array__['bc6717ae3a727db7971b62d023857f9d']), f++;
                break;
            case 0x11:
                h['src'] = 'images/interface/Dave.png', innerText(g, '……'), f++;
                break;
            case 0x12:
                i = !![], ClearChild(g, h), ClearChild(e), oSym['addTask'](0x1e, a);
            }
        }();
    },
    'StartGame': function () {
        NewImg('imgKK', 'images/interface/ConveyorBelt.webp', 'left:0px;top:0px;z-index:0;\x20', $('dCardList')), StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), SetHidden($('dSunNum')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(function () {
            oP['Monitor']({
                'f': function () {
                    var a = 0x0;
                    (function b() {
                        var g = ArCard['length'], h = 0x1f4, i = 0xa;
                        if (g < i) {
                            var k = oS['PName'], l = Math['floor'](Math['random']() * k['length']), m = k[l], n = m['prototype'], o = 'dCard' + Math['random']();
                            a < 0x5 && (m = oPepper, n = m['prototype'], o = 'dCard' + Math['random']());
                            if (a == 0x0)
                                m = oBegonia, n = m['prototype'], o = 'dCard' + Math['random']();
                            else
                                a < 0x2 && (m = oPumpkinHead, n = m['prototype'], o = 'dCard' + Math['random']());
                            ArCard[g] = {
                                'DID': o,
                                'PName': m,
                                'PixelTop': 0x251
                            }, NewImg(o, n['PicArr'][n['CardGif']], 'top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)', $('dCardList'), {
                                'onmouseover': function (p) {
                                    ViewPlantTitle(GetChoseCard(o), p);
                                },
                                'onmouseout': function () {
                                    SetHidden($('dTitle'));
                                },
                                'onmousedown': function (p) {
                                    ChosePlant(p, oS['ChoseCard'], o), p['preventDefault'](), p['stopPropagation']();
                                }
                            }), a++;
                        }
                        oSym['addTask'](h, b, []);
                    }(), function c() {
                        var d = ArCard['length'], e, f, g = 0x2;
                        while (d--) {
                            (f = (e = ArCard[d])['PixelTop']) > 0x3c * d && $(e['DID'])['style']['top'] != '5px' && ($(e['DID'])['style']['top'] = (e['PixelTop'] = f - 0x1) + 'px');
                        }
                        oSym['addTask'](g, c, []);
                    }());
                },
                'ar': []
            }), function a() {
                var b = 0x0;
                for (let c in $P)
                    $P[c]['EName'] == 'oApple' && ++b;
                b > 0x2 ? oSym['addTask'](0xc8, a) : toOver(0x2);
            }(), oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
        });
    }
}, {
    'AZ': [
        [
            oZombie,
            0x1,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0x5
        ],
        [
            oMakeRifterZombie,
            0x1,
            0x9,
            [
                0x9,
                0xa
            ]
        ],
        [
            oSadakoZombie,
            0x1,
            0x7,
            [
                0x9,
                0xa
            ]
        ],
        [
            oSkatingZombie,
            0x1,
            0xa,
            [0xa]
        ]
    ],
    'FlagNum': 0xa,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x3,
            0x5,
            0x6,
            0x8,
            0x9
        ],
        'a2': [
            0x1,
            0x2,
            0x3,
            0x4,
            0x9,
            0x12,
            0x1e
        ]
    },
    'FlagToEnd': function () {
        ShowWinItem(GetPlantCardDom(oPepper, EDAll, null, {
            'onclick': function () {
                GetNewCard(this, oPepper, 'Polar5-1');
            }
        }));
        let a = CloseNewPlant;
        RewriteGlobalVariables({
            'CloseNewPlant'() {
                StopAudio('plantsgarden'), SetHidden($('dNewPlant')), SelectModal('Polar5-1'), PlayAudio('Close'), a = CloseNewPlant;
            }
        });
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