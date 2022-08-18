/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
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
    'LevelName': $__language_Array__['5d9d4237a929b307f31eaed795d87cf2'],
    'DKind': 0x0,
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'StartGameMusic': 'Bgm_PolarJx_Lunatic',
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')));
        let b = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;display:none;', 0x0, $('dAll'));
        b['classList']['add']('BgMask-PolarJX'), NewEle(0x0, 'div', 'left:490px;', { 'className': 'Mould' }, $('tGround')), NewEle(0x0, 'div', 'left:650px;', { 'className': 'Mould' }, $('tGround')), NewImg('imgKxK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;animation:rotate2\x20130s\x20linear\x20infinite;', b);
        for (let g = 0x1; g < 0x6; g++) {
            CustomSpecial(oObstacle, g, 0x6), CustomSpecial(oObstacle, g, 0x4), CustomSpecial(oApple, g, 0x1), NewEle(0x0, 'div', 'left:130px;top:' + (0x50 + 0x64 * (g - 0x1)) + 'px;', { 'className': 'sos' }, FightingScene);
        }
        let c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll), f;
        f = NewEle('effect', 'div', 'position:absolute;z-index:256;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), function h() {
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Dave.png', oEffects['fadeIn'](f, 'slow', i => d['onclick'] = h), PlayAudio('crazydaveshort1'), innerText(d, $__language_Array__['209ec26d3ee4d355fcdde3bc43f674cd']), c++;
                break;
            case 0x1:
                PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['71aa8d8fb44a8ac9da8d5b2c9a9dc362']), c++;
                break;
            case 0x2:
                PlayAudio('crazydavelong2'), oEffects['Animate'](f, { 'background': '#000' }, 0x4), d['onclick'] = null, innerText(d, $__language_Array__['4c7f6ed6b4767b60e50f97b3d83a0e81']), setTimeout(function () {
                    ClearChild(d, e), oEffects['Animate'](f, {
                        'background': '#FFF',
                        'opacity': 0x0
                    }, 0x3), setTimeout(function () {
                        b['style']['display'] = 'block', h();
                    }, 0x3e8);
                }, 0x1389), c++;
                break;
            case 0x3:
                ClearChild(f), a();
            }
        }();
    },
    'StartGame'() {
        StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](oS['Monitor']), BeginCool(), function c() {
                let d = 0x0, e;
                for (e of $P)
                    e['EName'] === 'oApple' && (e['HP'] += 0x4b, d++);
                d < 0x5 && toOver(0x2), oSym['addTask'](0xc8, c);
            }();
            let b = new MutationObserver(function (d) {
                d['forEach'](function (e) {
                    for (let f = 0x0; f < e['addedNodes']['length']; f++) {
                        const g = e['addedNodes'][f]['id'], h = $P[g];
                        (h && ArCard['length'] >= 0x5 && (h['EName'] == 'oCherryBomb' || h['EName'] == 'oBambooUncle' || h['EName'] == 'oMiracleImitater' || h['EName'] == 'oPepper') || ArCard['length'] > 0x7 && h['EName'] == 'oRadish') && oSym['addTask'](Math['floor'](Math['random']() * 0x1f4) + 0x384, k => {
                            for (let l = 0x1; l <= 0x5; l++) {
                                for (let m = 0x7; m < 0xa; m++) {
                                    CustomSpecial(oRifterAnimate, l, m);
                                }
                                CustomSpecial(oRifterAnimate, l, 0x5), PlaceZombie(oSkatingZombie, l, 0xb, 0x0), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4), n => {
                                    PlaceZombie(oFootballZombie, [
                                        0x1,
                                        0x2,
                                        0x3,
                                        0x4,
                                        0x5
                                    ]['random'](), 0xb, 0x0);
                                });
                            }
                        });
                    }
                });
            });
            b['observe'](EDPZ, { 'childList': !![] }), oSym['addTask'](0x708, function d() {
                PlayAudio('frostbite'), oEffects['Animate'](NewEle('Frostbite' + Math['random'](), 'div', 'z-index:\x2020;position:\x20absolute;width:\x20200px;height:\x20600px;left:\x20-200px;background:\x20-webkit-linear-gradient(left,\x20rgba(16,\x20234,\x20194,\x200)\x200px,\x20#00a1ff52\x2050%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%);transform:\x20skewX(-25deg);', 0x0, EDPZ), { 'left': '1100px' }, 'slow', 'ease-in', ClearChild), hasPlants(![], e => e['EName'] !== 'oBrains' && e['EName'] !== 'oLawnCleaner' && e['canShovel'])['forEach'](e => e['getHurt'] && e['getHurt'](null, 0x0, 0x7 * ArCard['length'])), oSym['addTask'](0xa8c, d);
            }), oSym['addTask'](0x5dc, e => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        }), oP['FlagToSumNum'] = {
            'a1': [
                0x1,
                0x2,
                0x3,
                0x4,
                0x5,
                0x6,
                0x7,
                0x8,
                0x9
            ],
            'a2': [
                0x1,
                0x2,
                0x4,
                0x7,
                0x9,
                0xb,
                0xf,
                0x1e,
                0x28
            ]
        };
        for (let a = 0x0; a < oP['FlagToSumNum']['a2']['length']; a++) {
            oP['FlagToSumNum']['a2'][a] = Math['floor'](oP['FlagToSumNum']['a2'][a] * ((ArCard['length'] <= 0x5 ? 0x5 : ArCard['length'] * 1.5) - 0x4));
        }
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
            0x9,
            [0x9]
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
    'FlagNum': 0x9
});