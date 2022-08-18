/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oNutBowling,
        oBoomNutBowling
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oBalloonZombie,
        oNewspaperZombie,
        oStrollZombie,
        oCigarZombie,
        oFootballZombie,
        oImp,
        oCaskZombie,
        oSadakoZombie,
        oSkatingZombie
    ],
    'AudioArr': ['Bgm_Polar_3_NPC'],
    'LevelName': $__language_Array__['817515cf3e69762c6d37b6857979c3e0'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'FixedProps': 'disabled',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'LoadAccess': function (a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewEle(0x0, 'div', 'left:380px;', { 'className': 'FlowerBed' }, FightingScene), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll), e, f = NewEle('', 'div', 'position:absolute;left:0;top:0;width:900px;height:600px;z-index:1299;display:none;', {}, EDAll);
        (function g() {
            c['onclick'] = g;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, '……'), b++;
                break;
            case 0x1:
                PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['9bf508cd964fb6fc9e4d244bcb193c97']), b++;
                break;
            case 0x2:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['20f184d6e9a0daf564e50d84dd4e8775']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['861e37c7a17a0d67c979494849b3dbca']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['cfe6096b21f164c639d7e7166ec90c97']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['fca47e0ee19a4ad79546fe1520915f9c']), oEffects['ScreenShake'](), b++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['d24041fe9c3507053e3f91451b4e9d77']), b++;
                break;
            case 0x7:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['61e4fa288b2be7eac3ee4dacdbed955d']), b++;
                break;
            case 0x8:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['1ba60d08d1561b6c0ca544c1028d4488']), b++;
                break;
            case 0x9:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['160b337ef8a9208ce269a89320d2b4b4']), b++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['83ecf32e3cd45e6df62034f471166b70']), StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_3_NPC'), b++;
                break;
            case 0xb:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9a63a89c3addf9ec3b8307de711a5c42']), b++;
                break;
            case 0xc:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['1349b6d992d5cc15a8612176c38d6d2c']), b++;
                break;
            case 0xd:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['f7b9f0266c4f867888ac2de14d9861a9']), b++;
                break;
            case 0xe:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['28edd6e54b964eb90868e6463c83e466']), b++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['68467aba869a07602c70c4b1d295acca']), b++;
                break;
            case 0x10:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['5a5caab499874427455d8439efc73e5b']), b++;
                break;
            case 0x11:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['cbe6baadeefe689f954403d93d461526']), b++;
                break;
            case 0x12:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2275ca2d68e40790cbb1f3e40a6bebbd']), b++;
                break;
            case 0x13:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['e27f64388c90f388c7ad0d1a19a612e7']), b++;
                break;
            case 0x14: {
                    c['style']['display'] = d['style']['display'] = 'none', oEffects['TextEffects']['ZombossEffect'](![], function (i) {
                        e = i, SetBlock(f);
                        let j = 0x0;
                        f['onclick'] = e['onclick'] = function () {
                            j < 0x3 ? e['innerText'] = [
                                $__language_Array__['cbb1f0029c95c2946d4ef2bb24641c10'],
                                $__language_Array__['ea7a7edb9833cd5c6a16e7093945150d'],
                                $__language_Array__['7f00686d8648baaadd5c95391dba4dab']
                            ][j++] : h();
                        }, e['click']();
                    });
                    function h() {
                        oEffects['TextEffects']['ZombossEffect'](e, () => {
                            SetNone(f), c['style']['display'] = d['style']['display'] = '', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['efb6e08076af4c70ef181eb99033749d']), b++;
                        });
                    }
                }
                ;
                break;
            case 0x15:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f0e03de06fc82858213aeea6f1d9580a']), b++;
                break;
            case 0x16:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, '……'), b++;
                break;
            case 0x17:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['4b32846fe2f934a2908dfcdf572fd7f4']), b++;
                break;
            case 0x18:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['36f9678bdb720989940470622c852f57']), c['style']['fontSize'] = '16px', b++;
                break;
            case 0x19:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['70b88e9fa5c7bcadb2e4da282f781a90']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0x1a:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['3b1b289265e1b8774cd6d17c48a1c362']), b++;
                break;
            case 0x1b:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['5ca9b145ea80d6ea94082be4d33ffb3f']), b++;
                break;
            case 0x1c:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['cd0223aba0a0db6fe8add1f28f58e187']), b++;
                break;
            case 0x1d:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['7a5c1069dc560c293b80525d30353a76']), b++;
                break;
            case 0x1e:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['ba19bd16c29897083809082647482d40']), b++;
                break;
            case 0x1f:
                ClearChild(c, d, f), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'StartGame': oMiniGames['ConveyorBelt']
}, {
    'AZ': [
        [
            oZombie,
            0x1,
            0x1
        ],
        [
            oConeheadZombie,
            0x1,
            0x1
        ],
        [
            oBucketheadZombie,
            0x1,
            0x1
        ],
        [
            oBalloonZombie,
            0x1,
            0x1
        ],
        [
            oCigarZombie,
            0x1,
            0x1
        ],
        [
            oFootballZombie,
            0x1,
            0x1
        ],
        [
            oNewspaperZombie,
            0x1,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0x1
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
            0x5,
            [
                0x5,
                0xa
            ]
        ],
        [
            oSkatingZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0xa,
    'FlagToSumNum': {
        'a1': [
            0x4,
            0x5,
            0x7,
            0x9
        ],
        'a2': [
            0x4,
            0x8,
            0x14,
            0x20,
            0x28
        ]
    },
    'FlagToEnd'() {
        let a = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;left:115px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), b = 0x0, c = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), d = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function e() {
            c['onclick'] = e;
            switch (b) {
            case 0x0:
                c['onclick'] = null, d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['bc9ebe08ec366347948226c2cfd927b7']), oEffects['fadeIn'](a, 'slow', () => c['onclick'] = e), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['08753057a689c55cd5a7126972dfde70']), b++;
                break;
            case 0x2:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['54ac9af24a64318b2d8c6cb5fb6fcd7a']), b++;
                break;
            case 0x3:
                PlayAudio('Zomboss1'), innerText(c, $__language_Array__['9749afe43c38831169dba0e34a11be5a']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9eb5b5e8c86bd705ef8c72d3459ff7fc']), b++;
                break;
            case 0x5:
                c['onclick'] = null, d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['a498d69c47a47978cd18819bfd293bf9']), oEffects['fadeOut'](a, 'slow', () => c['onclick'] = e), b++;
                break;
            case 0x6:
                c['onclick'] = null, d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['80058e7591e50536c6ccac64179586c2']), oEffects['fadeIn'](a, 'slow', () => c['onclick'] = e), b++;
                break;
            case 0x7:
                c['onclick'] = null, d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['80d42de9ce3042dba0faa6c4abbcf03c']), oEffects['ScreenShake'](), oEffects['fadeOut'](a, 'fast', () => c['onclick'] = e), b++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['bd7ec90d67a99d2f6b4e54d4db9e596d']), b++;
                break;
            case 0x9:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['26f976af221b3f1965de9a88b5350d34']), b++;
                break;
            case 0xa:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['55de765037cc1b0e1ea02b9d1612e8a6']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['c519779a7ea06e24388b1ae4060d0ba2']), b++;
                break;
            case 0xc:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['24291f5802ea58dda52a38838a2888f8']), b++;
                break;
            case 0xd:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9f632a3d8e0fa80eaa3f69b936ef2250']), b++;
                break;
            case 0xe:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['6520dcd707b23c46b5bf642db2e1b939']), b++;
                break;
            case 0xf:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['c0d3197669c1776d489b78cf6681eca0']), b++;
                break;
            case 0x10:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, '……'), b++;
                break;
            case 0x11:
                ClearChild(c, d), ClearChild(a), oS['DefaultFlagToEnd']();
            }
        }());
    }
}, {
    'GrowPlant': function (m, n, o, p, q) {
        ZimuRQ['style']['display'] === 'block' && PlaySubtitle();
        if (n > 0x15b)
            return PlaySubtitle($__language_Array__['e5172903a4a3dfc933867b906dae046d']), CancelPlant(), ![];
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
    }
});