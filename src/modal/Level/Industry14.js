/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    oS['Init']({
        'PName': [
            oShiitake,
            oFumeShroom,
            oWallNut,
            oSporeShroom
        ],
        'ZName': [
            oMembraneZombie,
            oCigarZombie,
            oSadakoZombie,
            oFootballZombie
        ],
        'LevelName': $__language_Array__['7d29fb5b394146de4e1f7bf50d71bbca'],
        'CanSelectCard': 0x0,
        'DKind': 0x0,
        'DynamicDifficulty': ![],
        'isScroll': ![],
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function h() {
                c['onclick'] = h;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9f682ebff642cf012eb8a2d806837cc9']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['6b6d64066b4d83202f6f02e2c6eda32f']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['7e28a67fe6f7edd8185c7ae84d2dd0a0']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['38ab4d0de77f641deebffcd045e273fa']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['3bd965ca7bd7430e9a8e9e46d754edc6']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['702459f06faebab2288bc85542e7b9ae']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['f1914c08c6dd57505f9295e7eecdeb25']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['52745adb5d2a8acf27cd239095e81328']), b++;
                    break;
                case 0x8:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['0df522919202f7f5fdd20fb9e735c899']), b++;
                    break;
                case 0x9:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['e9a905ae134e8beb2d972b159d7a8bf5']), b++;
                    break;
                case 0xa:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['49705baecdf7556dabeda4ee1e2524c8']), b++;
                    break;
                case 0xb:
                    ClearChild(c, d), oSym['addTask'](0x1e, f);
                }
            }());
            let e = EDAll['scrollLeft'];
            function f() {
                if (EDAll['scrollLeft'] > 0x73) {
                    EDAll['scrollLeft'] = 0x73, a(), g();
                    return;
                }
                oSym['addTask'](0x1, function () {
                    EDAll['scrollLeft'] = e += Math['max']((0x73 - e) / 0x14, 0x1), f();
                });
            }
            function g() {
                let j = [], k = function () {
                        j = [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ];
                    }, l = 0xa, m = [], n = function (q, r, s = oVase) {
                        m['push']([
                            {
                                'type': q,
                                'obj': r
                            },
                            s
                        ]);
                    }, o = function () {
                        for (let q = 0x0; q < m['length']; q++) {
                            j['length'] == 0x0 && (k(), l--);
                            let r = Math['floor'](Math['random']() * j['length']);
                            m[q] = [
                                m[q][0x0],
                                j[r],
                                l,
                                m[q][0x1]
                            ], j['splice'](r, 0x1);
                        }
                    };
                n(0x0, oShiitake, oVaseP), n(0x0, oShiitake, oVaseP), n(0x0, oFumeShroom, oVaseP), n(0x0, oSporeShroom), n(0x1, oMembraneZombie), n(0x1, oSadakoZombie), n(0x1, oConeheadZombie), n(0x1, oStrollZombie), n(0x1, oZombie), n(0x1, oConeheadZombie), n(0x1, oStrollZombie), n(0x1, oZombie);
                let p = m['shuffle']();
                m = [];
                for (let q = 0x0; q < 0x2; q++) {
                    n(0x0, oWallNut), n(0x0, oSporeShroom), n(0x0, oFumeShroom), n(0x1, oSadakoZombie), n(0x1, oConeheadZombie), n(0x1, oStrollZombie), n(0x1, oZombie);
                }
                n(0x1, oMembraneZombie), n(0x1, oSadakoZombie), n(0x0, oWallNut), n(0x0, oFumeShroom), m = m['shuffle'](), m = p['concat'](m), o();
                for (let r = 0x0; r < m['length']; r++) {
                    oSym['addTask'](Math['random']() * 0x96, function () {
                        let s = CustomSpecial(m[r][0x3], m[r][0x1], m[r][0x2]);
                        s['SetCard'](m[r][0x0]);
                    });
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
                        for (let e of $P) {
                            if (/oVase|oVaseP|oVaseZ/['test'](e['EName'])) {
                                d = ![];
                                break;
                            }
                        }
                        d && oP['NumZombies'] == 0x0 ? toWin() : oSym['addTask'](0xc8, c);
                    });
                });
            });
        }
    }, {
        'AZ': [
            oMembraneZombie,
            0x1,
            0x1
        ],
        'FlagNum': 0x29a,
        'FlagToSumNum': {
            'a1': [0x29a],
            'a2': [0x0]
        },
        'FlagToEnd'() {
            let a = NewImg('newCard', 'images/interface/Black_Mirror1.webp', 'left:667px;top:315px;height:100px;width:87px;opacity:1;z-index:261;cursor:pointer;', EDAll), b = 0x0, c = ![];
            ShowWinItem(a), a['onclick'] = function () {
                b++;
                if (b > 0x3)
                    return;
                if (b == 0x3) {
                    setTimeout(function () {
                        a['onclick'] = d;
                    }, 0x3e8), PlaySubtitle($__language_Array__['640ebca2097ede162a7c98ba7f885bed']), DataManager['SetAchievement']('Broken_Mirror', '1'), oSym['addTask'](0x1f4, f => {
                        PlaySubtitle();
                    }), a['src'] = 'images/interface/Black_Mirror2.webp';
                    return;
                }
                setTimeout(function () {
                    b < 0x3 && e();
                }, 0x2bc);
            };
            function d() {
                let f = NewEle('DivA' + Math['random'](), 'div', 'position:absolute;z-index:258;left:115px;width:900px;height:600px;background:#FFF;opacity:0;', {}, EDAll);
                oEffects['Animate'](f, { 'opacity': 0x1 }, 0x1, 'linear', g => {
                    SelectModal('Industry14-1');
                });
            }
            async function e() {
                if (c)
                    return;
                let f = ![];
                b >= 0x3 && (f = !![], localStorage['JNG_TR_BROKE_MIRROR'] = !![]);
                c = !![];
                let g = a['src'];
                ClearChild(a);
                const h = ({
                    ele: m,
                    properties: n,
                    duration: o,
                    ease: p,
                    delay: q
                }) => new Promise(r => oEffects['Animate'](m, n, o, p, r, q));
                await h({
                    'ele': NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;left:115px;', 0x0, EDAll),
                    'properties': { 'opacity': '1' }
                });
                const i = NewEle('picture', 'div', 'position:absolute;background:\x20url(images/interface/Black_Mirror' + (f ? 0x2 : 0x1) + '.webp)no-repeat;background-size:cover;z-index:258;opacity:0;transform:scale(0.95);width:\x20435px;height:500px;left:180px;top:120px', 0x0, EDAll);
                await h({
                    'ele': i,
                    'properties': {
                        'opacity': 0x1,
                        'top': '100px'
                    },
                    'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
                });
                const j = NewEle('textbox', 'p', 'z-index:\x20259;position:\x20absolute;background:\x20linear-gradient(to\x20right,rgb(0,\x200,\x200,\x200)\x206%,\x20#000\x2030%,\x20rgb(0,\x200,\x200,\x200)\x20100%);width:\x20362px;height:\x20162px;left:\x20600px;top:\x20375px;color:\x20rgb(255\x20255\x20255);opacity:\x200;padding:\x2010px\x2030px;font-size:\x2026px;cursor:\x20pointer;', { 'innerText': '' }, EDAll);
                await h({
                    'ele': j,
                    'properties': {
                        'opacity': 0x1,
                        'top': '360px'
                    },
                    'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
                });
                let k = f ? [{ 'text': $__language_Array__['19de03f7c97f382afe7e8eaa776ade3e'] }][Symbol['iterator']]() : [
                    { 'text': $__language_Array__['bf9c79ae0c3df291ca32e12984762677'] },
                    { 'text': $__language_Array__['954fadcf9477036dfaa7b245e2944b36'] },
                    { 'text': $__language_Array__['7f3dd1633bc50a5c2e821e689214998f'] },
                    { 'text': $__language_Array__['ec80999610e162ad9ea00a9ffd1795f1'] },
                    {
                        'text': $__language_Array__['19de03f7c97f382afe7e8eaa776ade3e'],
                        'pic': 'Black_Mirror2'
                    }
                ][Symbol['iterator']]();
                const l = NewImg('newCard', a['src'], 'left:667px;top:315px;height:100px;width:auto;opacity:0;z-index:261;cursor:pointer;', EDAll);
                j['onclick'] = async () => {
                    let {
                        value: m,
                        done: n
                    } = k['next']();
                    if (n)
                        j['onclick'] = null, j['style']['cursor'] = 'auto', await h({
                            'ele': j,
                            'properties': {
                                'top': '360px',
                                'opacity': '0'
                            },
                            'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                            'delay': 0.3
                        }), await h({
                            'ele': i,
                            'properties': {
                                'top': '40px',
                                'opacity': '0'
                            },
                            'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                            'delay': 0.5
                        }), await h({
                            'ele': l,
                            'properties': {
                                'top': '330px',
                                'opacity': '1'
                            },
                            'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)',
                            'delay': 0.5
                        }), oSelectionMap['_CurrentPage_'] = Exitlevel(oS['Lvl'], 0x1), l['onclick'] = o => GetNewProp(o['target'], a['src'], $__language_Array__['0efe0cf5e1d2a2ae28edf1e08528177b'], 'This\x20is\x20a\x20wholesome\x20universe', NextLevel(), 'background-size:cover;z-index:233;width:120px;height:140px;top:30%;left:43%;'), $('DivA')['style']['z-index'] = 0x104;
                    else {
                        let {
                            text: o,
                            pic: p
                        } = m;
                        j['innerText'] = o, p && (i['style']['backgroundImage'] = 'url(images/interface/' + p + '.webp)');
                    }
                }, j['click']();
            }
        }
    }, {
        'ChosePlant'() {
        }
    });
}