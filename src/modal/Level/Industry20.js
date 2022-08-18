/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oRepeater,
        oCranberry,
        oTorchwood,
        oDoomShroom,
        oCherryBomb,
        oSpikeweed,
        oXshooter,
        oMacintosh,
        oFumeShroom,
        oShiitake
    ],
    'ZName': [
        oImp,
        oBeetleCarZombie,
        oMakeRifterZombie,
        oThiefZombie,
        oMembraneZombie,
        oSkatingZombie,
        oZombie,
        oConeheadZombie,
        oSculptorZombie,
        oSculpture,
        oZomboni,
        oCigarZombie,
        oGargantuar
    ],
    'LevelName': $__language_Array__['ee817b67b60fc7180d217777554cff66'],
    'StartGameMusic': 'Bgm_Industry_Fight_Challenge_4',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'DynamicDifficulty': ![],
    'FixedProps': 'disabled',
    'PicArr': [
        'images/Props/Industry20/book.webp',
        'images/Props/Industry20/fakeCode.webp',
        'images/Props/Industry20/ifeeldifferent.webp',
        'images/Props/Industry20/leoIMG.webp',
        'images/Props/Industry20/phone.webp',
        'images/Props/Industry20/the-mirror-lied.webp'
    ],
    'AudioArr': ['moonlight'],
    'HaveFog': {
        'type': 'strongFog',
        'leftBorder': 0x5
    },
    'LoadAccess'(a) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:1;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), f = NewImg('dDave', '', 'left:0;top:81px', EDAll), g = 0x0;
        (function h() {
            e['onclick'] = h;
            switch (d) {
            case 0x0:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['eab8464578f852cadf06f875f7254164']), d++;
                break;
            case 0x1:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['cd5cb4496de17eb6a3eac71320198612']), d++;
                break;
            case 0x2:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['cc648fb4addcfae16697997402802896']), d++;
                break;
            case 0x3:
                e['onclick'] = null, f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, '……'), c['style']['opacity'] = 0x1, oEffects['Animate'](c, 'NPCFade', 'fast', 'linear', () => e['onclick'] = h, 0x0, 0x4), d++;
                break;
            case 0x4:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), oAudio[oS['LoadMusic']]['playbackRate'] = 0.4, oSym['addTask'](0x1, function j() {
                    g += Math['random']() / 0x64, oAudio[oS['LoadMusic']]['playbackRate'] = Math['min'](0.8, Math['max'](0.1, (Math['sin'](g) + 1.2) / 0x3)), g >= -0x3e8 ? oSym['addTask'](0xa, j) : oAudio[oS['LoadMusic']]['playbackRate'] = 0x1;
                }), innerText(e, $__language_Array__['adbcc4228935f6fe1d0b8a3189ebda66']), d++;
                break;
            case 0x5:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['d08497711d613a5755e135b645ef6c1c']), d++;
                break;
            case 0x6:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['4647691cd7a4f33193f9ceb5c1d47453']), d++;
                break;
            case 0x7:
                e['onclick'] = null, oAudio[oS['LoadMusic']]['playbackRate'] = 0.2, g = -0xf4240, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['14dbd4a02878eca280e3050921fcca62']), oEffects['Animate'](c, { 'background': '#8B0000' }, 'slow', 'linear', () => e['onclick'] = h), d++;
                break;
            case 0x8:
                oAudio[oS['LoadMusic']]['playbackRate'] = 0.1, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['ebae9f9a03a77cad9ec00b72d687e1d3']), oEffects['Animate'](c, 'NPCRedFlash', 0xc, 'linear', 0x0, 0x0, 0x2710), d++;
                break;
            case 0x9:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['7afb922b0c37da5c3b5d91ad3cce028f']), d++;
                break;
            case 0xa:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), StopMusic(), innerText(e, $__language_Array__['6810f0a77f83554df4c0b9348d562fa2']), d++;
                break;
            case 0xb:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['7dfd57ab1e4df2d95249e7b9a96e2cef']), d++;
                break;
            case 0xc:
                ClearChild(e, f), ClearChild(b), oMiniGames['DarkRain'](0x7, 0x6), oEffects['fadeOut'](c, 'slow', k => {
                    ClearChild(k), a();
                });
            }
        }());
        for (let j = -0x1; j <= 0x1; j++) {
            NewEle(0x0, 'div', 'left:' + (0x14a + j * 0x50) + 'px;', { 'className': 'Mould' }, $('tGround'));
            for (let k = 0x1; k < 0x6; k++) {
                CustomSpecial(oObstacle, k, 0x2 + j), CustomSpecial(oRifter, k, 0x8 + j);
            }
        }
    },
    'StartGame'(a = ![]) {
        if (!a) {
            const b = NewEle('textbox', 'p', 'z-index:\x20259;position:\x20absolute;width:\x20900px;text-align:center;height:\x2026px;left:\x20115px;top:\x20247px;color:\x20white;opacity:\x200;font-size:\x2026px;', {
                'className': 'LvlUI_Industry20Div',
                'innerText': $__language_Array__['7ad288aa114573bbb5b91b0552b3fc54']
            }, EDAll);
            oEffects['fadeIn'](b, 'slow', c => {
                oSym['addTask'](0xc8, function () {
                    oEffects['fadeOut'](b, 'slow', d => {
                        ClearChild(d), oS['StartGame'](!![]);
                    });
                });
            });
            return;
        }
        oMiniGames['RainWithSeeds'](void 0x0, 0x190, 0x4, [
            oDoomShroom,
            oCherryBomb,
            oFumeShroom,
            oFumeShroom,
            oDoomShroom,
            oDoomShroom,
            oFumeShroom,
            oBlover,
            oFumeShroom,
            oXshooter,
            oXshooter,
            oTorchwood,
            oRepeater,
            ...[
                oDoomShroom,
                oDoomShroom,
                oCherryBomb,
                oDoomShroom,
                oCherryBomb
            ]['shuffle'](),
            oXshooter,
            oXshooter,
            oXshooter,
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            'random',
            oXshooter,
            oSpikeweed,
            oSpikeweed,
            oSpikeweed
        ], 0x2bc, ![]), addEventListenerRecord('jng-event-startgame', function c() {
            let d = 0x0;
            new MutationObserver(e => e['forEach'](f => f['addedNodes']['forEach'](g => {
                let h = g['id'], j = WIN[g['dataset']['jngConstructor']];
                if (!j)
                    return;
                let k = j['prototype']['EName'];
                if (h['includes']('P_0.') && $P[h]) {
                    if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](k)) {
                        if (!ArPCard[k])
                            return;
                        for (let l = 0x0; l < oP['FlagToSumNum']['a2']['length']; l++) {
                            oP['FlagToSumNum']['a2'][l] = Math['min'](0x3e8, Math['round'](oP['FlagToSumNum']['a2'][l] * Math['max'](0x1, d + 1.5)));
                        }
                        for (let m of $Z) {
                            m['HP'] += Math['min'](d == 0x0 ? 0x0 : d * 0x12c + 0xc8, 0x578);
                        }
                        ++d;
                    }
                }
            })))['observe'](EDPZ, { 'childList': !![] });
        }, { 'once': !![] });
    }
}, {
    'AZ': [
        [
            oMakeRifterZombie,
            0x1,
            0x4
        ],
        [
            oThiefZombie,
            0x1,
            0x1,
            [0x1]
        ],
        [
            oMembraneZombie,
            0x1,
            0x3
        ],
        [
            oSkatingZombie,
            0x1,
            0x2
        ],
        [
            oZombie,
            0x1,
            0x2
        ],
        [
            oConeheadZombie,
            0x1,
            0x2
        ],
        [
            oSculptorZombie,
            0x1,
            0x4
        ],
        [
            oZomboni,
            0x1,
            0x6
        ],
        [
            oCigarZombie,
            0x1,
            0x5
        ],
        [
            oGargantuar,
            0x1,
            0xe,
            [
                0x9,
                0xa
            ]
        ],
        [
            oBeetleCarZombie,
            0x1,
            0xf
        ]
    ],
    'FlagNum': 0xb,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x5,
            0x7,
            0x9,
            0xa
        ],
        'a2': [
            0x5,
            0x7,
            0x9,
            0xd,
            0xf,
            0x0
        ]
    },
    'FlagToMonitor': {
        0xa: [a => {
                let b = PlaceZombie(oBeetleCarZombie, 0x3, 0xb, 0x0);
                b['HP'] = Infinity, oSym['addTask'](0x1f4, function c() {
                    b['ZX'] < 0xe6 && b['NormalDie'](), oSym['addTask'](0xc8, c);
                });
            }]
    },
    'FlagToEnd'() {
        let a = [];
        ArCard['forEach'](c => oEffects['Animate'](c['Ele'], { 'transform': 'scale(0)' }, 0.2, 'linear'));
        function b() {
            ClearChild($('textbox')), ClearChild($('picture'));
            let c = 0x0, d = NewEle('DivTeach', 'div', 'opacity:0;left:415px;', 0x0, EDAll), e = NewImg('dDave', '', 'left:115px;top:81px;opacity:0', EDAll);
            setTimeout(function () {
                oEffects['Animate'](e, { 'opacity': 0x1 }, 0x1), oEffects['Animate'](d, { 'opacity': 0x1 }, 0x1);
            }, 0x64), f(), setTimeout(h => {
                d['onclick'] = f;
            }, 0x5dc);
            function f() {
                switch (c) {
                case 0x0:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['e6b47baa079601506def40ee68c6ffb0']), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['77adc8c81e2528a12b838e0a56241379']), c++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['5f2c45f88990c97687d4efe755aa30ec']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['35fe00fdffc1822dfe7df60e0ef2454a']), c++;
                    break;
                case 0x4:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['0208ff7c5d68a372fcdec684e0aa2d30']), c++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['faa6ab7a94ec68fee4a8d7cf30158a52']), c++;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['d4ff661d52bc4c10b4190152d87dbe41']), c++;
                    break;
                case 0x7:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['151fdb20fddd38de5ab356db85a6b323']), c++;
                    break;
                case 0x8:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['4779db0fa3f43b0bf1b97c7c3ecaeb35']), c++;
                    break;
                case 0x9:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['e505ce06e7ffe85ece13d1f0cb80c101']), c++;
                    break;
                case 0xa:
                    e['src'] = 'images/interface/Black_Dave.png', innerText(d, '…….'), c++;
                    break;
                case 0xb:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['0b09bc6c25cc25597fb2fbefacd51ccb']), c++;
                    break;
                case 0xc:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['031b66055661390a31ba5a471567ea04']), c++;
                    break;
                case 0xd:
                    e['src'] = 'images/interface/Black_Dave.png', innerText(d, '……'), c++;
                    break;
                case 0xe:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['37478927af6f9e7db48e9b9eb445ceee']), c++;
                    break;
                case 0xf:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['2065de372a9fa32e2546a1955a141c5a']), c++;
                    break;
                case 0x10:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['41b9cb63acb06fa9970ded7d8f59c3ce']), c++;
                    break;
                case 0x11:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['12b7f7fdf2cf5ca8be96b804351a8aab']), c++;
                    break;
                case 0x12:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['11259a8782a1035bf08793c1f5c49c0d']), c++;
                    break;
                case 0x13:
                    ClearChild(d, e), oEffects['Animate']($('effect'), { 'background': '#000' }, 0x1), PlayMusic('Industry_Story_Front'), setTimeout(g, 0x3e8);
                }
            }
            function g() {
                let h = [];
                const j = NewEle('Dom_' + Math['random'](), 'div', 'position:absolute;z-index:257;height:600px;width:900px;left:115px;', { 'className': 'LvlUI_Industry20Div' }, EDAll);
                setTimeout(function S() {
                    if (!$('effect'))
                        return;
                    oEffects['Animate']($('effect'), { 'background': 'rgb(150,0,0)' }, 0.1), setTimeout(T => {
                        oEffects['Animate']($('effect'), { 'background': 'black' }, 0x5);
                    }, 0x12c), setTimeout(S, 0x2710 + Math['random']() * 0x3a98);
                }, 0x9c40 + Math['random']() * 0x7530);
                let k = 0x0, l = NewEle('shade_PHONE', 'div', 'height:100%;width:100%;position:absolute;z-index:319;display:none;left:0;top:0;background:rgba(0,0,0,0.2)', {}, j), m = [
                        'rgba(40,40,40,0.5)',
                        'white'
                    ], n = [
                        'white',
                        'black'
                    ], o = 0x0, p = [], q = [], r = NewEle('PHONE_' + Math['random'](), 'div', 'background:white;background:url(images/Props/Industry20/phone.webp);background-size:\x20cover;background-position:\x20center\x200;position:absolute;width:250px;left:325px;height:550px;top:25px;border:0px\x20solid\x20red;z-index:257;text-align:center;display:inline-block;', 0x0, j), s = NewEle('', 'div', 'background:white;position:absolute;top:50px;left:0;width:100%;margin:0;padding:0;width:250px;height:55px;box-shadow:0px\x201px\x205px\x20rgba(0,0,0,0.4);', {}, r), t = NewEle('SEARCH_' + Math['random'](), 'input', 'font-size:0.7em;border-radius:\x205px\x200px\x200px\x205px;\x20text-align:\x20left;\x20height:\x2030px;\x20position:\x20absolute;\x20width:\x20140px;\x20left:\x2015px;\x20top:\x2060px;\x20border:\x201px\x20solid\x20black;\x20display:\x20inline-block;padding-left:5px;padding-right:30px;', {
                        'readonly': 'readonly',
                        'placeholder': $__language_Array__['fbdafc9c3ae730a290af14890dd37167'],
                        'className': EBody['className'] + '\x20LvlUI_Industry20Div',
                        'onfocus': function () {
                            t['blur']();
                        },
                        'onmousedown': function (T) {
                            T['preventDefault']();
                        }
                    }, r), u = ![], v = NewEle('SEARCH_' + Math['random'](), 'div', 'font-size:0.7em;line-height:32px;border-radius:\x200px\x205px\x205px\x200px;\x20transition:\x20background\x200.1s\x20ease\x200s,color\x200.1s;\x20position:\x20absolute;\x20background:\x20black;\x20color:\x20white;\x20left:\x20190px;\x20border:\x201px\x20solid\x20black;\x20width:\x2040px;\x20height:\x2032px;\x20top:\x2060px;', {
                        'onclick': T => {
                            K(0x1);
                        },
                        'innerText': $__language_Array__['0ea2431ab88517fb4fc1c088b3dd91d8'],
                        'className': 'LvlUI_Industry20Div',
                        'onmouseover': T => {
                            v['style']['background'] = 'white', v['style']['color'] = 'black';
                        },
                        'onmouseout': T => {
                            v['style']['background'] = 'black', v['style']['color'] = 'white';
                        }
                    }, r), w = NewEle('SEARCH_' + Math['random'](), 'div', 'position:\x20absolute;\x20border-radius:\x2025%;\x20left:\x2093px;outline:none;\x20border:\x200px\x20solid\x20red;\x20width:\x2060px;\x20height:\x2018px;\x20bottom:\x2018px;', {
                        'onclick': T => {
                            L(0x0), x['innerHTML'] = '';
                        },
                        'onmousedown'() {
                            this['style']['backgroundColor'] = 'rgba(0,0,0,0.2)';
                        },
                        'onmouseup'() {
                            this['style']['backgroundColor'] = '';
                        },
                        'onmouseout'() {
                            this['style']['backgroundColor'] = '';
                        }
                    }, r), x = NewEle('MAIN_' + Math['random'](), 'div', 'overflow:\x20auto;\x20height:\x20380px;\x20padding:\x200px;\x20text-align:\x20left;\x20position:\x20absolute;\x20width:\x20235px;\x20left:\x2010px;\x20top:\x20110px;\x20border:\x200px\x20solid\x20red;\x20display:\x20inline-block;', { 'className': 'NoBar\x20a4pxBar' }, r), y = 'cursor:pointer;transition:background\x200.2s,color\x200.2s;position:absolute;border-radius:5px\x205px\x200\x200;line-height:30px;text-align:center;color:white;z-index:258;height:35px;top:370px;', z = NewEle('Dom_' + Math['random'](), 'div', 'overflow:auto\x20hidden;background:rgba(40,40,40,0.5);border-radius:5px;margin:5px;position:absolute;z-index:259;height:190px;width:890px;top:400px;left:0px;', { 'className': 'NoBar' }, j), A = NewEle('Dom_' + Math['random'](), 'div', 'transition:left\x200.3s,width\x200.3s;position:absolute;border-radius:5px\x205px\x200\x200;background:white;line-height:30px;text-align:center;color:white;z-index:258;height:35px;width:61px;top:370px;left:5px;', 0x0, j), B = [
                        $__language_Array__['9ba3c819ae6181f7cfca471e4626dd63'],
                        $__language_Array__['60e414a1de59656477f777e7c7bcb058'],
                        $__language_Array__['417b4d401c72c744b6098b30c51593b3']
                    ], C = [0x5], D = [];
                for (let T = 0x0; T < B['length']; T++) {
                    let U = C[T], V = B[T]['replace'](/[^\x00-\xff]/g, '**')['length'] * 12.5 + 0x1;
                    U += V + 0x5, C['push'](U), D['push'](V);
                }
                let E = [
                        NewEle('Dom_' + Math['random'](), 'div', y + 'width:' + D[0x0] + 'px;left:' + C[0x0] + 'px;', {
                            'innerText': B[0x0],
                            'className': 'LvlUI_Industry20Div'
                        }, j),
                        NewEle('Dom_' + Math['random'](), 'div', y + 'width:' + D[0x1] + 'px;left:' + C[0x1] + 'px;', {
                            'innerText': B[0x1],
                            'className': 'LvlUI_Industry20Div'
                        }, j),
                        NewEle('Dom_' + Math['random'](), 'div', y + 'width:' + D[0x2] + 'px;left:' + C[0x2] + 'px;', {
                            'innerText': B[0x2],
                            'className': 'LvlUI_Industry20Div'
                        }, j)
                    ], F = [
                        [
                            {
                                'image': 'images/interface/MarshClue2.webp',
                                'txt': $__language_Array__['e4f1676cc94eba3eb620e6f0c3e3f38e']
                            },
                            {
                                'image': 'images/interface/MarshClue1.webp',
                                'txt': $__language_Array__['7693310617a4455596509e4f4068fc6b']
                            },
                            {
                                'image': 'images/interface/PolarClue1.webp',
                                'txt': $__language_Array__['555ad0fb34222271613ca71bb7b38cf5']
                            },
                            {
                                'image': 'images/interface/IndustryClue1_1.webp',
                                'func': W => {
                                    L(0x1);
                                    let X = NewEle('', 'div', 'padding:\x205px;\x20opacity:\x200;\x20top:\x2040%;\x20box-shadow:\x20black\x201px\x201px\x205px;\x20text-align:\x20center;\x20position:\x20relative;\x20height:\x20100px;\x20width:\x2090%;\x20left:\x2010px;', {
                                        'innerText': $__language_Array__['c8f79e0ad9725d489008f4b49c79115f'],
                                        'className': 'LvlUI_Industry20Div',
                                        'onclick'() {
                                            oEffects['Animate'](X, {
                                                'top': '40%',
                                                'opacity': '0'
                                            }, 'fast', 'linear', () => {
                                                L(0x0), x['innerHTML'] = '';
                                            });
                                        }
                                    }, x);
                                    oEffects['Animate'](X, {
                                        'top': '30%',
                                        'opacity': '1'
                                    }, 'fast');
                                }
                            },
                            {
                                'image': 'images/interface/Black_Mirror1.webp',
                                'func': W => {
                                    N($__language_Array__['4f541aad02f2160358a9f2b43d405dbf']);
                                }
                            }
                        ],
                        [
                            {
                                'left': 0x99 * 0x2,
                                'func': W => {
                                    N($__language_Array__['534867dddf9c0c9a5dd5ec9286dac2fb']);
                                }
                            },
                            {
                                'left': 0x99 * 0x4,
                                'txt': $__language_Array__['3690a6d3114c72fb45f9f7bd56c749ee']
                            }
                        ],
                        [
                            {
                                'title': [
                                    $__language_Array__['2338a3fca7f121998c61ca73185683f0'],
                                    $__language_Array__['dd0be40dc864e7338b34d4474b992a3e']
                                ],
                                'txt': $__language_Array__['1d9def3cca8beba2a2d94227b8f5d851']
                            },
                            {
                                'title': [
                                    $__language_Array__['5243a2da6e016f5b23024ae8a87d4a05'],
                                    $__language_Array__['88466e0270f01e54c4d154d0b6fbbe4f']
                                ],
                                'txt': $__language_Array__['c7adda32a34d342f213e72487ef9c372']
                            },
                            {
                                'title': [
                                    $__language_Array__['5243a2da6e016f5b23024ae8a87d4a05'],
                                    $__language_Array__['87b8e88b6b538691eb58690514dbce73']
                                ],
                                'func': W => {
                                    N(0x1);
                                }
                            },
                            {
                                'title': [
                                    $__language_Array__['5243a2da6e016f5b23024ae8a87d4a05'],
                                    $__language_Array__['72f74112f4505033c5a829508b2d6b77']
                                ],
                                'func': W => {
                                    N($__language_Array__['a552426ad196a7819199cca794d5240a']);
                                }
                            },
                            {
                                'title': [
                                    $__language_Array__['55a330e2572101d57185612c93ef5b68'],
                                    $__language_Array__['7379a28e4e50ccad78696731e8ca4651']
                                ],
                                'func': W => {
                                    L(0x1), M($__language_Array__['8ee77f3a31e262a2ade520f68bf57a42'], $__language_Array__['663404d4a7eea79072e58db8af03e0ae'], $__language_Array__['1cd0f21b52373e2d59d27f09d7dcd50f'], X => {
                                        N($__language_Array__['69b8951ef8081b09e8102df718245abe']);
                                    }, $__language_Array__['622fa7c91734228cea1d632ff2af22af']), M($__language_Array__['21293e580466fd281b290d036ea94531'], $__language_Array__['777bf5faaedfe4c9264faa51f6861a8f'], $__language_Array__['1cd0f21b52373e2d59d27f09d7dcd50f'], X => {
                                        N($__language_Array__['e5c12aa7ece294784d1ed29d678061fc']);
                                    }, '');
                                }
                            },
                            {
                                'title': [
                                    $__language_Array__['55a330e2572101d57185612c93ef5b68'],
                                    $__language_Array__['78b1154fae13123bfd6efd943fa1546e']
                                ],
                                'txt': $__language_Array__['6d81b3132cd9c89f55e647df7395f823']
                            }
                        ]
                    ], G = NewEle('CLEAR_' + Math['random'](), 'div', 'font-family:Arial;font-size:\x200.8em;\x20line-height:\x2015px;\x20border-radius:\x205px;\x20transition:\x20background\x200.1s\x20ease\x200s,\x20color\x200.1s\x20ease\x200s;\x20position:\x20absolute;\x20background:\x20black;\x20color:\x20white;\x20left:\x20165px;\x20border:\x201px\x20solid\x20black;\x20width:\x2015px;\x20height:\x2015px;\x20top:\x2069px;', {
                        'onclick': W => {
                            for (let X in F) {
                                for (let Y in F[X]) {
                                    let Z = F[X][Y];
                                    Z['selected'] && (Z['dom'] && $(Z['dom']['id']) && (Z['dom']['style']['filter'] = ''), Z['selected'] = ![]);
                                }
                            }
                            t['value'] = '', h = [];
                        },
                        'innerText': '×',
                        'onmouseover': W => {
                            G['style']['background'] = 'white', G['style']['color'] = 'black';
                        },
                        'onmouseout': W => {
                            G['style']['background'] = 'black', G['style']['color'] = 'white';
                        }
                    }, r);
                H(E[0x0]);
                for (let W of E) {
                    W['onmouseover'] = function () {
                        if (o == W)
                            return;
                        W['style']['background'] = n[0x0], W['style']['color'] = n[0x1];
                    }, W['onmouseout'] = function () {
                        if (o == W)
                            return;
                        W['style']['background'] = m[0x0], W['style']['color'] = m[0x1];
                    }, W['onclick'] = function () {
                        H(W);
                    };
                }
                function H(X) {
                    A['style']['left'] = X['style']['left'], A['style']['width'] = X['style']['width'], o = X;
                    let Y = 0x0;
                    for (let Z = 0x0; Z < E['length']; Z++) {
                        E[Z] != X ? (E[Z]['style']['background'] = m[0x0], E[Z]['style']['color'] = m[0x1]) : (E[Z]['style']['background'] = n[0x0], E[Z]['style']['color'] = n[0x1], Y = Z);
                    }
                    I(Y);
                }
                function I(X) {
                    if ($('itemBox')) {
                        let a0 = 'tmp' + Math['random'](), a1 = $('itemBox');
                        a1['id'] = a0, oEffects['Animate'](a1, { 'opacity': 0x0 }, 0.1, 'linear', a2 => {
                            ClearChild(a1), Y();
                        });
                    } else
                        Y();
                    function Y() {
                        z['innerHTML'] = '';
                        let a2 = NewEle('itemBox', 'div', 'white-space:\x20nowrap;overflow:auto\x20hidden;height:100%;position:relative;top:10px;opacity:0', { 'className': 'NoBar' }, z);
                        oEffects['Animate'](a2, {
                            'opacity': 0x1,
                            'top': 0x0
                        }, 0.2);
                        for (let a3 = 0x0; a3 < F[X]['length']; a3++) {
                            let a4 = F[X][a3], a5;
                            a4['image'] && (a5 = NewEle('ITEM_' + Math['random'](), 'img', 'position:relative;height:120px;width:auto;margin:25px;', { 'src': a4['image'] }, a2)), a4['left'] && (a5 = NewEle('ITEM_' + Math['random'](), 'div', 'border:3px\x20solid\x20white;position:relative;margin:25px;border-radius:10px;background-image:\x20url(images/interface/PreviewMap.webp);background-repeat:\x20no-repeat;display:inline-block;background-attachment:\x20scroll;background-position:\x20-' + a4['left'] / 1.2 + 'px\x200px;background-size:\x20637.5px\x20120px;background-color:\x20transparent;width:\x20127.5px;height:\x20120px;', '', a2)), a4['title'] && (a5 = NewEle('ITEM_' + Math['random'](), 'div', 'background:rgba(60,60,60,0.3);position:relative;color:white;margin:25px;width:auto;height:120px;border:3px\x20solid\x20white;display:inline-block;line-height:120px;padding-left:10px;padding-right:10px;', {
                                'innerText': a4['title'][0x0] + $__language_Array__['b4db4ca12cc35bb342d2dae73d9f41f1'] + a4['title'][0x1],
                                'className': 'LvlUI_Industry20Div'
                            }, a2)), a5['style']['cursor'] = 'pointer', a5['style']['transition'] = 'filter\x200.1s', a4['selected'] && (a5['style']['filter'] = 'brightness(70%)'), a5['onmouseover'] = a6 => {
                                !a4['selected'] && (a5['style']['filter'] = 'brightness(120%)');
                            }, a5['onmouseout'] = a6 => {
                                !a4['selected'] && (a5['style']['filter'] = '');
                            }, a4['txt'] && (a5['onclick'] = function () {
                                if (!u)
                                    return;
                                Z(a4, a5);
                            }), a4['func'] && (a5['onclick'] = a6 => {
                                if (!u)
                                    return;
                                a4['func']();
                            }), a4['dom'] = a5;
                        }
                    }
                    function Z(a2, a3) {
                        if (a2['selected']) {
                            for (let a5 = 0x0; a5 < h['length']; a5++) {
                                if (h[a5] == a2['txt']) {
                                    h['splice'](a5, 0x1);
                                    break;
                                }
                            }
                            a3['style']['filter'] = '', a2['selected'] = ![];
                        } else
                            h['push'](a2['txt']), a2['selected'] = !![], a3['style']['filter'] = 'brightness(70%)';
                        let a4 = '';
                        for (let a6 of h) {
                            a4 += a6 + '\x20';
                        }
                        t['value'] = a4, t['scrollLeft'] = t['scrollWidth'];
                    }
                }
                function J() {
                    let X = [
                        [
                            $__language_Array__['64c7f519fcb2df9500454c7400e376c2'],
                            $__language_Array__['a22711f4b02b2d72ccfa96b36d3b5c76'],
                            $__language_Array__['351e47b22f51e69a0333cefdb425455f'],
                            $__language_Array__['11353ae53f699ce7078dca19b6d6b843'],
                            $__language_Array__['4f541aad02f2160358a9f2b43d405dbf']
                        ],
                        [
                            $__language_Array__['ef69313fdd1cb1059ea14a5e040c4d05'],
                            $__language_Array__['c12401389c994a0abf0cecee18639297']
                        ],
                        [
                            $__language_Array__['15cd69d910758f3f4f7d6d2d35ec72c5'],
                            $__language_Array__['cf0454cfb549b6826abac61cd4dc9037'],
                            $__language_Array__['6047c85f7f088310f71a5c4d9ac0d19c'],
                            $__language_Array__['8dab7b2f351ca50ed9d1f5c6af21f7b1'],
                            $__language_Array__['582f6359cc4c3bbffde2aee7741a0436'],
                            $__language_Array__['fc8a9486d06a79554cb4415683bd69f6']
                        ]
                    ];
                    function Y(a2, a3) {
                        return X[a2][a3];
                    }
                    let Z = [Y(0x2, 0x0) + '+' + Y(0x0, 0x1) + '+' + Y(0x0, 0x0) + '+' + Y(0x1, 0x1) + '+(' + Y(0x2, 0x1) + $__language_Array__['f314f734addb2f947b5b96a71c097ae2'] + Y(0x2, 0x5) + $__language_Array__['f314f734addb2f947b5b96a71c097ae2'] + Y(0x0, 0x2) + ')'], a0 = (a2, a3) => {
                            let a4 = a3;
                            for (let a5 = 0x0; a5 < a4['length']; a5++) {
                                Z['push'](a2 + '+' + a4[a5]);
                            }
                        };
                    a0(Y(0x0, 0x0), [
                        Y(0x2, 0x5),
                        Y(0x0, 0x2),
                        Y(0x0, 0x1),
                        Y(0x2, 0x1)
                    ]), Z['push']('(' + Y(0x0, 0x1) + '+' + Y(0x2, 0x1) + $__language_Array__['d6f3c21634a69fa2ed69f1d931e562d0'] + Y(0x2, 0x1) + '+' + Y(0x1, 0x1) + $__language_Array__['d6f3c21634a69fa2ed69f1d931e562d0'] + Y(0x1, 0x1) + '+' + Y(0x2, 0x5) + ')'), a0(Y(0x0, 0x1), [Y(0x2, 0x5)]), Z['push'](Y(0x1, 0x1) + '+' + Y(0x0, 0x1) + '+' + Y(0x2, 0x0)), Z['push'](Y(0x1, 0x0), Y(0x0, 0x3), Y(0x0, 0x4), Y(0x2, 0x2), Y(0x2, 0x3), Y(0x2, 0x4));
                    let a1 = '';
                    for (let a2 = 0x0; a2 < Z['length']; a2++) {
                        a1 += a2 + 0x1 + '.\x20' + Z[a2] + '\x0a';
                    }
                    NewEle('', 'div', 'font-size:14px;color:\x20white;\x20white-space:\x20nowrap;background:\x20rgba(0,\x200,\x200,\x200.7);\x20position:\x20absolute;\x20top:\x200px;\x20left:\x20115px;\x20width:\x20320px;\x20height:\x20360px;\x20z-index:\x205000;\x20overflow:scroll;', {
                        'innerText': $__language_Array__['df3959c3fa515fe6276bdf3bfb90c541'] + a1,
                        'className': 'NoBar'
                    }, EDAll);
                }
                localStorage['JNG_DEV'] && J();
                function K(X) {
                    x['innerHTML'] = '', L(0x0), L(0x1);
                    function Y(Z, a0) {
                        return F[Z][a0]['selected'];
                    }
                    if (X == 0x1) {
                        if (Y(0x2, 0x0) && Y(0x0, 0x1) && Y(0x0, 0x0) && Y(0x1, 0x1) && (Y(0x2, 0x1) || Y(0x2, 0x5) || Y(0x0, 0x2))) {
                            M($__language_Array__['e0b8f968cbea64c5cf944136c9d98e28'], $__language_Array__['a183aac5492dfb00e64db400f30c53a0'], $__language_Array__['046efb3dff65759ef87ab5c80eaff748'], Z => {
                                N($__language_Array__['4e9537fc9766bdb4a73e10575e6ac09c']);
                            }, ''), M($__language_Array__['9b7e316e15e20444362650230ea07487'], $__language_Array__['c62ad89c6151d59dd8120aa8593187e9'], $__language_Array__['0b8f458906054ef2b3d78c9b1598c2a4'], Z => {
                                N($__language_Array__['badb8516ba9be78f99e6c2e52835acba']);
                            }, ''), M($__language_Array__['8ba7f1229be58463aca6c3b19dcbfc1b'], $__language_Array__['5034e79ed27478df080bf0b602f5a6a0'], $__language_Array__['046efb3dff65759ef87ab5c80eaff748'], Z => {
                                N($__language_Array__['63bc4e774052b06796f7b29accc15979']);
                            }, $__language_Array__['c6954a64fcf6034763a5de8cbe89792d']);
                            return;
                        }
                        if (Y(0x0, 0x0)) {
                            Y(0x2, 0x5) && (M($__language_Array__['4d19f51b7bcd114828db1565290f19db'], $__language_Array__['53fe02fed0e7abc5b1b633bea17b98a8'], $__language_Array__['a9e04d320926b2501e11744a8fdb23c6'], Z => {
                                N($__language_Array__['585036db3660396b28339f55aafd3744']);
                            }, $__language_Array__['5d5b697c9464957abb6a452233347261']), M($__language_Array__['8d5feacc1c5fed85cc6adf08c9213c91'], $__language_Array__['2510f81b036ee81af46d09653fd3d4a3'], $__language_Array__['1265f270c333b69f2a81c27d8ceea331'], Z => {
                                N($__language_Array__['33b99317538f3c908a110ef7bb5b506b']);
                            }, $__language_Array__['9d28f0e7c3844510e5054950c2b67e64']));
                            Y(0x0, 0x2) && M($__language_Array__['5c8f0b92e5d3aef82bd8e14e465f2e2c'], $__language_Array__['445c34a6e00f87fbf9c995948c916df0'], $__language_Array__['157cc8b0e185331dafe7b26eaedcd2f6'], Z => {
                                N($__language_Array__['a878aac8f77967a9f32055f05bc69a79']);
                            }, $__language_Array__['58075dc2e245580e064cb3fe35544b8c']);
                            Y(0x0, 0x1) && M($__language_Array__['11bc844e5a2cac484a7c8cea4007452b'], $__language_Array__['d4e1368ad7418855d2ef7276829db897'], $__language_Array__['a1d4a37b22c92b989c987d45e9bea3c4'], Z => {
                                N($__language_Array__['944a380cf4b0fca2672a07e77a8fc3a2']);
                            }, $__language_Array__['716331c99915c069baf003198064cb0e']);
                            if (Y(0x1, 0x1)) {
                            }
                            Y(0x2, 0x1) && (M($__language_Array__['bd7b3e35b6b8af82d49a44931894a4d3'], $__language_Array__['1e94a01ab11dbb0afd6debcf1ab07d03'], $__language_Array__['0818cce0c8903502829fa85fc7dfcff9'], Z => {
                                N($__language_Array__['a2b274161c6e5c39af2da769c951f0ae']);
                            }, $__language_Array__['e172ffd9ab950845328833430837d20d']), M($__language_Array__['8ba7f1229be58463aca6c3b19dcbfc1b'], $__language_Array__['5034e79ed27478df080bf0b602f5a6a0'], $__language_Array__['046efb3dff65759ef87ab5c80eaff748'], Z => {
                                N($__language_Array__['63bc4e774052b06796f7b29accc15979']);
                            }, $__language_Array__['c6954a64fcf6034763a5de8cbe89792d']));
                        }
                        if (Y(0x0, 0x1) && Y(0x2, 0x1) || Y(0x2, 0x1) && Y(0x1, 0x1) || Y(0x1, 0x1) && Y(0x2, 0x5)) {
                            let Z = '';
                            (Y(0x2, 0x5) || Y(0x2, 0x1)) && (Z += $__language_Array__['5d5b697c9464957abb6a452233347261']), Y(0x0, 0x1) && (Z += $__language_Array__['7693310617a4455596509e4f4068fc6b']), Y(0x1, 0x1) && (Z += $__language_Array__['99759c2f9c6e19b54be79abe6dfe5e06']), sessionStorage['leo_game3'] ? M($__language_Array__['9b7e316e15e20444362650230ea07487'], $__language_Array__['c62ad89c6151d59dd8120aa8593187e9'], $__language_Array__['0b8f458906054ef2b3d78c9b1598c2a4'], a0 => {
                                N($__language_Array__['ddaf6405c47a562513536ac92f1c46bb']);
                            }, Z) : (M($__language_Array__['9b7e316e15e20444362650230ea07487'], $__language_Array__['c62ad89c6151d59dd8120aa8593187e9'], $__language_Array__['0b8f458906054ef2b3d78c9b1598c2a4'], a0 => {
                                N($__language_Array__['badb8516ba9be78f99e6c2e52835acba']);
                            }, Z), sessionStorage['leo_game3'] = 0x1);
                        }
                        Y(0x0, 0x1) && (Y(0x2, 0x5) && M($__language_Array__['e7eab421baa08817b042009883ef9eac'], $__language_Array__['d7f89b6ad1521e4bd0c2fdd074a8cb6a'], $__language_Array__['046efb3dff65759ef87ab5c80eaff748'], a0 => {
                            N($__language_Array__['1a7f83d770557ddca5064e860dc5ec96']);
                        }, $__language_Array__['8e2220b01421c00a9c7975808f95c4aa']));
                        if (Y(0x0, 0x2) && Y(0x2, 0x5)) {
                        }
                        Y(0x1, 0x1) && Y(0x0, 0x1) && Y(0x2, 0x0) && M($__language_Array__['e0b8f968cbea64c5cf944136c9d98e28'], $__language_Array__['a183aac5492dfb00e64db400f30c53a0'], $__language_Array__['046efb3dff65759ef87ab5c80eaff748'], a0 => {
                            N($__language_Array__['4e9537fc9766bdb4a73e10575e6ac09c']);
                        }, '');
                        if (t['value'] == '') {
                            k++;
                            if (k > 0x1) {
                                let a0 = NewEle('', 'div', 'padding:\x205px;\x20opacity:\x200;\x20top:\x2040%;\x20box-shadow:\x20black\x201px\x201px\x205px;\x20text-align:\x20center;\x20position:\x20relative;line-height:100px;\x20height:\x20100px;\x20width:\x2090%;\x20left:\x2010px;', {
                                    'innerText': 'Knock\x20Knock\x20Leo',
                                    'className': 'LvlUI_Industry20Div',
                                    'onclick'() {
                                        oEffects['Animate'](a0, {
                                            'top': '40%',
                                            'opacity': '0'
                                        }, 'fast', 'linear', () => {
                                            L(0x0), x['innerHTML'] = '';
                                        });
                                    }
                                }, x);
                                setTimeout(a1 => {
                                    oEffects['Animate'](a0, {
                                        'top': '30%',
                                        'opacity': '1'
                                    }, 'fast');
                                }, 0x64);
                            } else
                                L(0x0);
                            return;
                        }
                        x['innerHTML'] == '' && (NewEle('', 'div', 'position:relative;left:0;top:30px;padding-left:5px;padding-right:5px;', {
                            'innerHTML': $__language_Array__['49a2a9f517a7c5e43187dcf6e32abde1'] + t['value'] + $__language_Array__['45247ae026b5ad1fe9951a83ad2f4d9f'],
                            'className': 'LvlUI_Industry20Div'
                        }, x), NewEle('', 'div', 'font-size:\x2012px;\x20color:\x20gray;\x20position:\x20relative;\x20padding-left:\x205px;padding-right:5px;top:50px;', {
                            'innerText': $__language_Array__['b3c41da1571e759016d4db235eec5f3b'],
                            'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
                        }, x));
                    }
                }
                function L(X) {
                    if (X == 0x1)
                        u = ![], r['style']['zIndex'] = 0x140, l['style']['display'] = '';
                    else {
                        oS['LoadMusic'] != 'Industry_Story_Front' && (StopMusic(), oS['LoadMusic'] = 'Industry_Story_Front', PlayMusic('Industry_Story_Front'));
                        l['style']['display'] = 'none', u = !![], r['style']['zIndex'] = 0x101;
                        let Y = 0x0;
                        for (let Z in p) {
                            Y++;
                        }
                        Y >= 0xe && Q();
                    }
                }
                function M(X, Y = '', Z = $__language_Array__['448b160d799d47ea4d88633359495960'], a0 = null, a1 = '') {
                    let a2 = X, a3 = NewEle(Math['random'](), 'div', 'position:relative;overflow:hidden;width:230px;border:0px\x20solid\x20red;margin-bottom:2px;', {}, x), a4 = Array['from'](new Set((t['value'] + a1)['split']('\x20'))), a5 = '<span\x20class=\x22LvlUI_Industry20Div\x22\x20style=\x22color:#f73131;cursor:pointer;text-decoration:underline;\x22>', a6 = '<span\x20class=\x22LvlUI_Industry20Div\x22\x20style=\x22color:#f73131;\x22>', a7 = String['fromCharCode'](-0x1), a8 = String['fromCharCode'](-0x3);
                    for (let ab = 0x0; ab < a4['length']; ab++) {
                        let ac = new RegExp(a4[ab], 'gi');
                        X = X['replace'](ac, a7 + '$&' + a8), Y = Y['replace'](ac, a7 + '$&' + a8);
                    }
                    let a9 = X['match'](/(.)\1*/g);
                    for (let ad = 0x0; ad < a9['length']; ad++) {
                        let ae = a9[ad]['split']('')[0x0];
                        if (ae == a7)
                            a9[ad] = a5;
                        else
                            ae == a8 && (a9[ad] = '</span>');
                    }
                    X = a9['join'](''), a9 = Y['match'](/(.)\1*/g);
                    for (let af = 0x0; af < a9['length']; af++) {
                        let ag = a9[af]['split']('')[0x0];
                        if (ag == a7)
                            a9[af] = a6;
                        else
                            ag == a8 && (a9[af] = '</span>');
                    }
                    Y = a9['join']('');
                    let aa = '#2440b3';
                    q[a2] && (aa = '#771CAA'), NewEle(Math['random'](), 'span', 'position:relative;cursor:pointer;color:' + aa + ';text-decoration:underline', {
                        'innerHTML': X,
                        'className': 'LvlUI_Industry20Div',
                        'onmouseover'() {
                            a0 && aa == '#2440b3' && (this['style']['color'] = '#315efb');
                        },
                        'onmouseout'() {
                            aa == '#2440b3' && (this['style']['color'] = '#2440b3');
                        },
                        'onclick'() {
                            a0 && (q[a2] = !![], a0());
                        }
                    }, a3), NewEle('', 'br', '', {}, a3), NewEle(Math['random'](), 'span', 'font-size:12px;position:relative;color:gray;', {
                        'innerText': Z + '\x20',
                        'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
                    }, a3), NewEle(Math['random'](), 'span', 'font-size:12px;position:relative;', {
                        'innerHTML': Y,
                        'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
                    }, a3);
                }
                function N(X) {
                    x['innerHTML'] = '', x['scrollTop'] = 0x0, L(0x1);
                    switch (X) {
                    case 0x1:
                        NewEle('', 'div', 'position:relative;margin:0;padding:0;left:0;top:0;height:100%;width:100%;background:black;', {}, x), NewEle('ttt', 'img', 'left:\x2010%;top:20%;', {
                            'src': 'images/Props/Industry20/the-mirror-lied.webp',
                            'width': '200',
                            'height': '200'
                        }, x), PauseMusic(), oS['LoadMusic'] = 'MIRROR_LIED', PlayMusic('MIRROR_LIED');
                        break;
                    case $__language_Array__['585036db3660396b28339f55aafd3744']:
                        O($__language_Array__['4d19f51b7bcd114828db1565290f19db'], '2016-03-29\x2008:32:19', $__language_Array__['cfb138676127b045f181341d0d9bdd0d']), p[X] = !![];
                        break;
                    case $__language_Array__['33b99317538f3c908a110ef7bb5b506b']:
                        O($__language_Array__['8d5feacc1c5fed85cc6adf08c9213c91'], '2016-03-30\x2013:24:32', $__language_Array__['9f4757c069dd5c91ed8100e459037086']), p[X] = !![];
                        break;
                    case $__language_Array__['534867dddf9c0c9a5dd5ec9286dac2fb']:
                        O($__language_Array__['d4f677274a8337d5a02776bb474e4bb1'], $__language_Array__['2727a32f147152cd1a675eb9cc13244a'], $__language_Array__['e428b2c5c8b1a1d7c2c57e7d55423fda']), P(0x0, [{ 'content': $__language_Array__['b5ca95843c2d88e07a901a9807c57d9d'] }]), p[X] = !![];
                        break;
                    case $__language_Array__['4f541aad02f2160358a9f2b43d405dbf']:
                        O($__language_Array__['0694287f24bf4ac934591167d3252b7f'], $__language_Array__['b8dd35069fe34cd8e2e709c879894dae'], $__language_Array__['bb027fca2c889be9c104f95640a034db'], !![]), P(0x1, [{
                                'people': 'DarthSkywalker',
                                'content': $__language_Array__['b33810a49a855f8ed5eed3bbc3e4c3d5']
                            }]), p[X] = !![];
                        break;
                    case $__language_Array__['e5c12aa7ece294784d1ed29d678061fc']:
                        O($__language_Array__['21293e580466fd281b290d036ea94531'], $__language_Array__['5ba5c7afc24fbdd7dab89ea9714ce299'], $__language_Array__['a8ba2fb49261490bc69946d1714bbd77'], !![]), P(0x0, []), p[X] = !![];
                        break;
                    case $__language_Array__['69b8951ef8081b09e8102df718245abe']:
                        O($__language_Array__['c40fbc9aa9c35af4a8dc44c5179bb915'], '', $__language_Array__['b14da8f79e550f5db771922f18902919'], ![], 'font-size:0.2em;'), p[X] = !![];
                        break;
                    case $__language_Array__['a878aac8f77967a9f32055f05bc69a79']:
                        O($__language_Array__['5c8f0b92e5d3aef82bd8e14e465f2e2c'], '2016-08-31\x2019:30:21', $__language_Array__['09785691690c305215a49ffd7085f87f']), p[X] = !![];
                        break;
                    case $__language_Array__['944a380cf4b0fca2672a07e77a8fc3a2']:
                        O($__language_Array__['11bc844e5a2cac484a7c8cea4007452b'], $__language_Array__['9c83cc0c24af07ca34362290213ef40f'], $__language_Array__['cf342419cb8f9665a6714eeee0d3ce92'], !![]), p[X] = !![];
                        break;
                    case $__language_Array__['a2b274161c6e5c39af2da769c951f0ae']:
                        O($__language_Array__['bd7b3e35b6b8af82d49a44931894a4d3'], $__language_Array__['64d88c7de097771cd098a3c8ba79d2bd'], $__language_Array__['f7fddc845131f72d6006b24126414684']);
                        sessionStorage['leo_game1'] == '1' ? P('44444443', [{
                                'people': 'User1919810',
                                'content': $__language_Array__['5dd6fe779a6f8a2168fed6cfb90ccbe4']
                            }]) : (P('44444444', [
                            {
                                'people': 'User1919810',
                                'content': $__language_Array__['5dd6fe779a6f8a2168fed6cfb90ccbe4']
                            },
                            {
                                'people': 'Leobai',
                                'content': $__language_Array__['917aebb38def5a4bba7a02b18b808483']
                            }
                        ]), sessionStorage['leo_game1'] = '1');
                        p[X] = !![];
                        break;
                    case $__language_Array__['63bc4e774052b06796f7b29accc15979']:
                        O($__language_Array__['8ba7f1229be58463aca6c3b19dcbfc1b'], '2016-03-23\x2023:22:22', a[0x2]), P('1', [{
                                'people': 'IsolatedIsland',
                                'content': $__language_Array__['025fee86fbd3138dfa9d041a854d3f50']
                            }]), p[X] = !![];
                        break;
                    case $__language_Array__['a552426ad196a7819199cca794d5240a']:
                        O($__language_Array__['d77c2b9139dfb29e6e02e6a522ed5d50'], '', $__language_Array__['aae4e02fa0584d3d0ee6fa2bf0e63e03'], !![]), p[X] = !![];
                        break;
                    case $__language_Array__['1a7f83d770557ddca5064e860dc5ec96']:
                        O($__language_Array__['e7eab421baa08817b042009883ef9eac'], $__language_Array__['af51add785e1c4127b5680a16b731c99'], a[0x0]);
                        let Y = [
                            {
                                'people': 'IsolatedIsland',
                                'content': $__language_Array__['b7f3b8f8987994795198fd71497aa3e8']
                            },
                            {
                                'people': 'DarthSkywalker',
                                'content': $__language_Array__['37dd873baf24adc7e31f4880d9a76cbb']
                            },
                            {
                                'people': $__language_Array__['9df29c734d75b1877b33669dfe6d16b8'],
                                'content': $__language_Array__['ddc8a26e246d168221b2042a846ed344']
                            },
                            {
                                'people': 'User114514',
                                'content': $__language_Array__['ccc63018249e47d2f0daafa033702be2']
                            },
                            {
                                'people': 'BS',
                                'content': $__language_Array__['d8be33fe8ff07f71ce18841400095987']
                            },
                            {
                                'people': $__language_Array__['b321586cb19799f8c8726fb5f99710d4'],
                                'content': $__language_Array__['e3899421bd3d8d32c15cc32b83b5f05b']
                            },
                            {
                                'people': $__language_Array__['b19d2ab9983373e3377d77c0a47b468c'],
                                'content': $__language_Array__['edbe233a2fd288143039620eb473a758']
                            },
                            {
                                'people': $__language_Array__['b321586cb19799f8c8726fb5f99710d4'],
                                'content': $__language_Array__['14462dae7aea3a95aad0b8519f506c76']
                            },
                            {
                                'people': $__language_Array__['42b14ebe50570ab6ee02beca0c5236f1'],
                                'content': $__language_Array__['80df459fac2411a70d4882ecefdd37aa']
                            },
                            {
                                'people': 'Leobai',
                                'content': $__language_Array__['3e9422f3763f55daa5c84b91b90cbf93']
                            },
                            {
                                'people': $__language_Array__['241fe09131b97a7b4ba67244045f5208'],
                                'content': $__language_Array__['568bda2668fa22aed11d951b67b1a97e']
                            }
                        ];
                        !sessionStorage['leo_game2'] ? sessionStorage['leo_game2'] = '1' : (Y['splice'](0xa, 0x1), Y['splice'](0x9, 0x1), Y['splice'](0x8, 0x1), Y['splice'](0x3, 0x1));
                        P(Y['length'], Y), p[X] = !![];
                        break;
                    case $__language_Array__['badb8516ba9be78f99e6c2e52835acba']:
                        O($__language_Array__['9b7e316e15e20444362650230ea07487'], $__language_Array__['c714a2161a5db675c40b130442dabdf3'], a[0x1], !![]), p[X] = !![];
                        break;
                    case $__language_Array__['ddaf6405c47a562513536ac92f1c46bb']:
                        O($__language_Array__['4d73f76afe334b7faf1c9066da37e8aa'], '', $__language_Array__['099e66e4d9af5144bc53573e3e588823']), p[$__language_Array__['badb8516ba9be78f99e6c2e52835acba']] = !![];
                        break;
                    case $__language_Array__['4e9537fc9766bdb4a73e10575e6ac09c']:
                        O($__language_Array__['e0b8f968cbea64c5cf944136c9d98e28'], '2016-3-23\x2023:59:59', $__language_Array__['659fd59450526b1e9915b353d404f415']);
                        if (!sessionStorage['dbut_game']) {
                            P(0x1, [{
                                    'people': 'BS',
                                    'content': $__language_Array__['c648e7a96a8d408342ed4f95d2eba30e']
                                }]);
                            let Z = $('comments'), a0 = Z['innerHTML'];
                            setTimeout(a1 => {
                                Z && $('comments') && $('comments')['innerHTML'] == a0 && (sessionStorage['dbut_game'] = 0x1, ClearChild(Z), P(0x0, []));
                            }, 0x2328);
                        } else
                            P(0x0, []);
                        p[X] = !![];
                        break;
                    }
                }
                function O(X, Y, Z, a0 = ![], a1 = '') {
                    NewEle('', 'h3', 'position:\x20relative;padding:5px;margin:0;', {
                        'innerText': X,
                        'className': 'LvlUI_Industry20Div'
                    }, x), NewEle('', 'span', 'position:\x20relative;padding-left:5px;\x20color:\x20gray;font-size:12px;display:inline-block;line-height:20px;', {
                        'innerText': Y,
                        'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
                    }, x), NewEle('', 'hr', 'position:\x20relative;\x20margin:\x202px\x20auto;\x20border:\x200px;\x20height:\x201px;\x20background-image:\x20linear-gradient(to\x20right,\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(0,\x200,\x200,\x200));', {}, x), a0 ? NewEle('', 'span', 'position:\x20relative;\x20font-size:\x2015px;\x20padding:\x205px;\x20margin:\x202px;display:inline-block;' + a1, {
                        'innerHTML': Z,
                        'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20Content'
                    }, x) : NewEle('', 'span', 'position:\x20relative;\x20font-size:\x2015px;\x20padding:\x205px;\x20margin:\x202px;display:inline-block;' + a1, {
                        'innerText': Z,
                        'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20Content'
                    }, x);
                }
                function P(X, Y) {
                    let Z = NewEle('comments', 'div', 'position:relative;width:100%;margin:0;padding:0;left:0;', ![], x);
                    NewEle('', 'br', 'position:relative', ![], x), NewEle('', 'br', 'position:relative', ![], Z), NewEle('', 'h4', 'position:\x20relative;padding:5px;margin:0;', {
                        'innerText': $__language_Array__['767009992e5a08a1fbf7c9482b668ae5'] + X,
                        'className': 'LvlUI_Industry20Div'
                    }, Z), NewEle('', 'hr', 'position:\x20relative;\x20margin:\x202px\x20auto;\x20border:\x200px;\x20height:\x201px;\x20background-image:\x20linear-gradient(to\x20right,\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(0,\x200,\x200,\x200));', {}, Z);
                    for (let a0 = 0x0; a0 < Y['length']; a0++) {
                        let a1 = Y[a0];
                        a1['people'] && NewEle('', 'h5', 'position:\x20relative;font-size:13px;padding:5px;margin:0;', {
                            'innerHTML': a1['people'] + $__language_Array__['fd793e23fce921f9e3d8bdd0c30438e6'],
                            'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20Content'
                        }, Z), NewEle('', 'span', 'position:\x20relative;\x20font-size:\x2012px;\x20padding-left:\x2015px;padding-right:\x205px;\x20margin:\x200;color:gray;display:inline-block', {
                            'innerText': a1['content'],
                            'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
                        }, Z), a0 < Y['length'] - 0x1 && NewEle('', 'hr', 'width:50%;left:-25%;position:\x20relative;\x20margin:\x202px\x20auto;\x20border:\x200px;\x20height:\x201px;\x20background-image:\x20linear-gradient(to\x20right,\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(0,\x200,\x200,\x200));', {}, Z);
                    }
                    NewEle('', 'br', 'position:relative', ![], x), NewEle('', 'br', 'position:relative', ![], Z);
                }
                function Q() {
                    let X = NewEle('Dom_' + Math['random'](), 'div', 'position:absolute;z-index:255;height:600px;width:900px;left:115px;background:black', 0x0, EDAll);
                    l['style']['display'] = '', l['style']['zIndex'] = '3333', l['style']['background'] = 'rgba(0,0,0,0)', oEffects['Animate'](j, { 'opacity': 0x0 }, 0x2, 'linear', Y => {
                        ClearChild(j), StopMusic();
                        let Z = PlayAudio('moonlight');
                        X['style']['zIndex'] = 0x102;
                        let a0 = NewEle('', 'div', 'opacity:1;position:absolute;width:900px;left:0;top:600px;text-align:center;color:white;line-height:' + 0x258 / 0x13 + 'px;', {
                            'className': 'LvlUI_Industry20Div',
                            'innerText': '\x0aArt\x20after\x20Art\x20goes\x20out,\x20and\x20all\x20is\x20night.\x0aSee\x20skulking\x20Truth\x20to\x20her\x20old\x20cavern\x20fled,\x0aMountains\x20of\x20casuistry\x20heap\x27d\x20o\x27er\x20her\x20head!\x0aPhilosophy,\x20that\x20lean\x27d\x20on\x20Heaven\x20before,\x0aShrinks\x20to\x20her\x20second\x20cause,\x20and\x20is\x20no\x20more.\x0aPhysic\x20of\x20Metaphysic\x20begs\x20defence,\x0aAnd\x20Metaphysic\x20calls\x20for\x20aid\x20on\x20Sense!\x0aSee\x20Mystery\x20to\x20Mathematics\x20fly!\x0aIn\x20vain!\x20they\x20gaze,\x20turn\x20giddy,\x20rave,\x20and\x20die.\x0aReligion,\x20blushing,\x20veils\x20her\x20sacred\x20fires,\x0aAnd\x20unawares\x20Morality\x20expires.\x0aNor\x20public\x20flame,\x20nor\x20private,\x20dares\x20to\x20shine;\x0aNor\x20human\x20spark\x20is\x20left,\x20nor\x20glimpse\x20divine!\x0aLo!\x20thy\x20dread\x20empire,\x20Chaos!\x20is\x20restor\x27d;\x0aLight\x20dies\x20before\x20thy\x20uncreating\x20word:\x0aThy\x20hand,\x20great\x20Anarch!\x20lets\x20the\x20curtain\x20fall;\x0aAnd\x20universal\x20Darkness\x20buries\x20all.\x20\x0a'
                        }, X);
                        oEffects['Animate'](a0, { 'top': '0' }, 0x1e, 'ease-in-out', a1 => {
                            a0['style']['cursor'] = 'pointer', a0['onclick'] = a2 => {
                                let a3;
                                oEffects['Animate'](a0, { 'opacity': 0x0 }, 0x7, 'linear', a4 => {
                                    ClearChild($('effect')), SelectModal(NextLevel()), StopAudio('moonlight');
                                }), a0['onclick'] = a4 => {
                                };
                            };
                        });
                    });
                }
                function R() {
                    let X = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:20px;color:white;font-size:20px;position:absolute;bottom:0;right:0;height:200px;width:300px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, j), Y = [
                            $__language_Array__['f89032a586c0023bcf86f6346949a5bc'],
                            $__language_Array__['9e37bb4272800cc656432c1c63a4d2eb'],
                            $__language_Array__['8f5cdc4e7bcbf6165df72001cf5ed8ad'],
                            $__language_Array__['bafe2a1b1eff84e4948a62805572fcc6'],
                            $__language_Array__['9778e7fd5ed070a825f9541e71b30118'],
                            $__language_Array__['b11d10a6b70308dc898fdbd36bafd215']
                        ], Z = '', a0 = -0x1, a1 = {
                            '，': 0xc8,
                            '…': 0x12c
                        }, a2 = ![];
                    X['onclick'] = function () {
                        if (a0 >= 0x0 && X['innerText']['length'] < Y[a0]['length'] + Z['length']) {
                            let a7 = Y[a0]['split']($__language_Array__['fd793e23fce921f9e3d8bdd0c30438e6']);
                            X['innerText'] = (Z ? Z + $__language_Array__['fd793e23fce921f9e3d8bdd0c30438e6'] : '') + a7[a7['length'] - 0x1] + '\x20\x20', a2 = !![];
                            return;
                        }
                        a2 = ![], a0++;
                        if (a0 >= Y['length']) {
                            u = !![], ClearChild(X);
                            return;
                        }
                        let a3 = Y[a0]['split']($__language_Array__['fd793e23fce921f9e3d8bdd0c30438e6']);
                        a3['length'] == 0x1 && (a3 = [
                            Z,
                            Y[a0]
                        ]);
                        a3[0x0] != Z && (Z = a3[0x0]);
                        X['innerText'] = Z ? Z + $__language_Array__['fd793e23fce921f9e3d8bdd0c30438e6'] : '';
                        let a4 = a3[0x1]['split'](''), a5 = 0x0, a6 = a0;
                        setTimeout(function a8() {
                            if (a0 != a6 || a5 >= a4['length'] || a2) {
                                a5 >= a4['length'] && !a2 && setTimeout(a9 => {
                                    a0 == a6 && !a2 && (a2 = !![], X['innerText'] += '\x20\x20');
                                }, 0xc8);
                                return;
                            }
                            X['innerText'] += a4[a5++], setTimeout(a8, a1[a4[a5 - 0x1]] ? a1[a4[a5 - 0x1]] : 0x32);
                        }, 0x32);
                    }, X['click']();
                }
                R();
            }
        }
        setTimeout(() => {
            (async function c() {
                const d = ({
                    ele: h,
                    properties: i,
                    duration: j,
                    ease: k,
                    delay: l
                }) => new Promise(m => oEffects['Animate'](h, i, j, k, m, l));
                await NewScript('jng_script_longString', './modal/Level/Leo_Article_Long_String.js'), window['__$jsonPFunc__'](a), delete window['__$jsonPFunc__'], await d({
                    'ele': NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;left:115px;', 0x0, EDAll),
                    'properties': { 'opacity': '1' }
                });
                const e = NewEle('picture', 'div', 'position:absolute;background-size:cover;z-index:258;opacity:0;transform:scale(0.95);width:\x20435px;height:500px;left:180px;top:120px', 0x0, EDAll);
                await d({
                    'ele': e,
                    'properties': {
                        'opacity': 0x1,
                        'top': '100px'
                    },
                    'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
                });
                const f = NewEle('textbox', 'p', 'z-index:\x20259;position:\x20absolute;transform:scale(1.3);width:\x20900px;text-align:center;height:\x2026px;left:\x20120px;top:\x20263px;color:\x20#fff;opacity:\x200;font-size:\x2026px;cursor:\x20pointer;', { 'innerText': 'AND\x20NOW,\x20WE\x20ESCALATE\x20TO\x20FULL\x20INTENSITY' }, EDAll);
                await d({
                    'ele': f,
                    'properties': {
                        'opacity': 0x1,
                        'top': '235px',
                        'transform': 'scale(1)'
                    },
                    'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
                });
                let g = [][Symbol['iterator']]();
                setTimeout(h => {
                    f['click']();
                }, 0x3e8), f['onclick'] = async () => {
                    let {
                        value: h,
                        done: i
                    } = g['next']();
                    if (i) {
                        f['onclick'] = null, f['style']['cursor'] = 'auto', f['style']['transform'] = 'scale(1)';
                        let j = 0x0, k = 0x64;
                        setTimeout(function l() {
                            if (j++ >= 0x7) {
                                b();
                                return;
                            }
                            $('effect')['style']['background'] = j % 0x2 == 0x1 ? '#fff' : '#000', setTimeout(l, Math['random']() * (0xc8 + k) + 0x64), k -= 0x1e;
                        }, 0x190), await d({
                            'ele': f,
                            'properties': {
                                'top': '235px',
                                'opacity': '0',
                                'transform': 'scale(1.3)'
                            },
                            'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                            'delay': 0.3
                        }), await d({
                            'ele': e,
                            'properties': {
                                'top': '40px',
                                'opacity': '0'
                            },
                            'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                            'delay': 0.5
                        });
                    } else {
                        let {
                            text: m,
                            pic: n
                        } = h;
                        f['innerText'] = m, f['style']['transform'] = 'scale(1.3)', f['style']['opacity'] = '0', await d({
                            'ele': f,
                            'properties': {
                                'top': '235px',
                                'opacity': '1',
                                'transform': 'scale(1)'
                            },
                            'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                            'delay': 0.3
                        }), n && (e['style']['background'] = 'url(images/interface/' + n + '.webp)\x20no-repeat');
                    }
                };
            }());
        }, 0x3e8);
    }
});