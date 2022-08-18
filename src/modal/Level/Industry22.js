/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    typeof option__isCheatEngineStart !== 'undefined' && (localStorage['JNG_TR_CHEATINDUSTRYPART3__'] = !![]);
    let diec = localStorage['JNG_TR_FAILEDINDUSTRY22'] = Number['parseInt'](localStorage['JNG_TR_FAILEDINDUSTRY22']) + 0x1 || 0x0;
    oS['Init']({
        'PName': [
            oShiitake,
            oFumeShroom,
            oWallNut,
            oSporeShroom,
            oPlantern,
            oXshooter,
            oCherryBomb,
            oBlover,
            oRepeater
        ],
        'ZName': [
            oImp,
            oBucketheadZombie,
            oMembraneZombie,
            oStrollZombie,
            oZombie,
            oConeheadZombie,
            oThiefZombie,
            oFootballZombie,
            oGargantuar
        ],
        'LevelName': $__language_Array__['e06104408e3462f2592bc8ba78535751'],
        'CanSelectCard': 0x0,
        'DKind': 0x0,
        'isScroll': ![],
        'DynamicDifficulty': ![],
        'HaveFog': {
            'leftBorder': 0x6,
            'type': 'Fog'
        },
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:256;width:1400px;height:600px;background:#000;opacity:1;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), f = NewImg('dDave', '', 'left:0;top:81px', EDAll), g = !![];
            PlayAudio('rain', !![]), oAudio['rain']['volume'] = 0.5, oSym['addTask'](0x1, function k() {
                oAudio['rain']['currentTime'] > oAudio['rain']['duration'] - 0.4 && (oAudio['rain']['currentTime'] = 0x0), g && oSym['addTask'](0x1, k);
            }), function m() {
                e['onclick'] = m;
                switch (d) {
                case 0x0:
                    f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['75062086a9bbda49e069cf66b3106254']), d++;
                    break;
                case 0x1:
                    f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['ce2c64b0725b5ee0800cb96174864a07']), d++;
                    break;
                case 0x2:
                    e['onclick'] = null, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['4c865affabe4ff975f58583e07e8ff02']), oEffects['fadeIn'](c, 'slow', () => e['onclick'] = m), d++;
                    break;
                case 0x3:
                    f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['8fd33336792ba76e4e880f26dc237ce8']), d++;
                    break;
                case 0x4:
                    f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['4ea7b435e3bb7c88744677603d16d5ad']), d++;
                    break;
                case 0x5:
                    f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(e, $__language_Array__['00942ad7bb5e4d1c48f995b707dc731a']), d++;
                    break;
                case 0x6:
                    e['onclick'] = null, f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['805e2574d1423f2676d699604957bd0f']), oEffects['fadeOut'](c, 'slow', () => e['onclick'] = m), d++;
                    break;
                case 0x7:
                    f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['de2917f74669e65605ee959d41022aa2']), d++;
                    break;
                case 0x8:
                    f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['24ce7490b339f2e1e721ff69889a796a']), d++;
                    break;
                case 0x9:
                    f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['99612094d30597f1444d5dd39e763fb2']), d++;
                    break;
                case 0xa:
                    ClearChild(e, f), ClearChild(c), oEffects['fadeOut'](b, 0x1, ClearChild), g = ![], oSym['addTask'](0x1e, i), oMiniGames['DarkRain'](0x7, 0x4, 0x6);
                }
            }(), NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            let h = EDAll['scrollLeft'];
            function i() {
                if (EDAll['scrollLeft'] > 0x73) {
                    EDAll['scrollLeft'] = 0x73, a(), j();
                    return;
                }
                oSym['addTask'](0x1, function () {
                    EDAll['scrollLeft'] = h += Math['max']((0x73 - h) / 0x14, 0x1), i();
                });
            }
            function j() {
                let n = 0xa, o = [], p = [], q = [];
                [
                    0x2,
                    0x3,
                    0x4,
                    0x6
                ]['forEach'](s => {
                    for (let t = 0x1; t < 0x6; t++) {
                        q['push']([
                            t,
                            s
                        ]);
                    }
                }), q['push']([
                    0x1,
                    0x5
                ]), q['push']([
                    0x5,
                    0x5
                ]);
                for (let s = 0x1; s <= 0x5; s++) {
                    (s - 0x1) % 0x4 != 0x0 && oSym['addTask'](Math['random']() * 0x96, t => {
                        CustomSpecial(oVaseZ, s, 0x5)['SetCard']({
                            'type': 0x1,
                            'obj': oGargantuar
                        });
                    }), diec < 0x7 ? oSym['addTask'](Math['random']() * 0x96, t => {
                        CustomSpecial(oVase, s, 0x1)['SetCard']({
                            'type': 0x1,
                            'obj': oThiefZombie
                        });
                    }) : oSym['addTask'](Math['random']() * 0x96, t => {
                        CustomSpecial(oVase, s, 0x1)['SetCard']([
                            {
                                'type': 0x1,
                                'obj': oThiefZombie
                            },
                            {
                                'type': 0x1,
                                'obj': oThiefZombie
                            },
                            {
                                'type': 0x1,
                                'obj': oThiefZombie
                            },
                            {
                                'type': 0x0,
                                'obj': oPlantern
                            },
                            {
                                'type': 0x0,
                                'obj': oRepeater
                            },
                            {
                                'type': 0x0,
                                'obj': oXshooter
                            }
                        ]['random']());
                    });
                }
                for (let t = 0x1; t <= 0x4; t++) {
                    o['push']({
                        'type': 0x0,
                        'obj': oRepeater
                    });
                }
                o['push']({
                    'type': 0x0,
                    'obj': oCherryBomb
                }), o['push']({
                    'type': 0x0,
                    'obj': oCherryBomb
                }), o['push']({
                    'type': 0x0,
                    'obj': oBlover
                });
                for (let u = 0x1; u <= 0x5; u++) {
                    o['push']({
                        'type': 0x0,
                        'obj': oXshooter
                    });
                }
                for (let v = 0x1; v < 0x4; v++) {
                    o['push']({
                        'type': 0x1,
                        'obj': oConeheadZombie
                    });
                }
                o['push']({
                    'type': 0x1,
                    'obj': oBucketheadZombie
                });
                for (let w = 0x1; w < 0x4; w++) {
                    w < 0x3 && o['push']({
                        'type': 0x0,
                        'obj': oPlantern
                    }), diec >= 0xa ? (w < 0x3 && o['push']({
                        'type': 0x1,
                        'obj': oMembraneZombie
                    }), w == 0x3 && o['push']({
                        'type': 0x0,
                        'obj': oCherryBomb
                    })) : o['push']({
                        'type': 0x1,
                        'obj': oMembraneZombie
                    });
                }
                o['push']({
                    'type': 0x1,
                    'obj': oFootballZombie
                });
                for (let x = 0x1; x < 0x3; x++) {
                    o['push']({
                        'type': 0x1,
                        'obj': oStrollZombie
                    });
                }
                {
                    let y = 0x0;
                    while (y++ < 0x2) {
                        let z = Math['floor'](q['length'] * Math['random']()), A = q[z];
                        oSym['addTask'](Math['random']() * 0x96, B => {
                            CustomSpecial(oVaseP, A[0x0], A[0x1])['SetCard']({
                                'type': 0x0,
                                'obj': oRepeater
                            });
                        }), q['splice'](z, 0x1);
                    }
                    {
                        let B = Math['floor'](q['length'] * Math['random']()), C = q[B];
                        oSym['addTask'](Math['random']() * 0x96, D => {
                            CustomSpecial(oVaseP, C[0x0], C[0x1])['SetCard']({
                                'type': 0x0,
                                'obj': oPlantern
                            });
                        }), q['splice'](B, 0x1);
                    }
                    ;
                }
                for (let D = 0x1; D < 0x6; D++) {
                    q['push']([
                        D,
                        0x7
                    ]);
                }
                let r = 0x0;
                while (r < o['length'] && q['length'] > 0x0) {
                    let E = Math['floor'](q['length'] * Math['random']()), F = q[E], G = r;
                    oSym['addTask'](Math['random']() * 0x96, H => {
                        CustomSpecial(oVase, F[0x0], F[0x1])['SetCard'](o[G]);
                    }), r++, q['splice'](E, 0x1);
                }
            }
        },
        'InitLawnMover'() {
        },
        'StartGame': function () {
            loadRes({
                'img': [
                    'images/interface/Black_Mirror1.webp',
                    'images/interface/Black_Mirror2.webp'
                ]
            }), StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), SetHidden($('dCardList'), $('dTop')), oS['InitLawnMover'](), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x12c, b => {
                    oSym['addTask'](0xc8, function c() {
                        let d = !![];
                        for (let f of $P) {
                            if (/oVase|oVaseP|oVaseZ/['test'](f['EName'])) {
                                d = ![];
                                break;
                            }
                        }
                        if (d && oP['NumZombies'] == 0x0) {
                            var e;
                            let g = JSON['parse']((e = localStorage['JNG_TR_OPTIONS_INDUSTRYPART3']) !== null && e !== void 0x0 ? e : '{}');
                            g['fail22'] = Number(localStorage['JNG_TR_FAILEDINDUSTRY22']), localStorage['JNG_TR_OPTIONS_INDUSTRYPART3'] = JSON['stringify'](g), delete localStorage['JNG_TR_FAILEDINDUSTRY22'], toWin();
                        } else
                            oSym['addTask'](0xc8, c);
                    });
                });
            });
        }
    }, {
        'AZ': [
            oConeheadZombie,
            0x1,
            0x1
        ],
        'FlagNum': 0x29a,
        'FlagToSumNum': {
            'a1': [0x29a],
            'a2': [0x0]
        }
    }, {
        'ChosePlant'() {
        }
    });
}