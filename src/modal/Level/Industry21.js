/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    typeof option__isCheatEngineStart !== 'undefined' && (localStorage['JNG_TR_CHEATINDUSTRYPART3__'] = !![]);
    let KIWIBEAST = null, oMembraneZombie_NO37 = InheritO(oMembraneZombie, {
            'EName': 'oMembraneZombie_NO37',
            'getPlants'() {
                return hasPlants(!![], a => {
                    return !(a['R'] == 0x3 && a['C'] == 0x7) && a['PKind'] === 0x1;
                });
            }
        });
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
            oImp,
            oSculptorZombie,
            oMakeRifterZombie,
            oSculpture,
            oMembraneZombie_NO37,
            oStrollZombie,
            oZombie,
            oConeheadZombie,
            oPushIceImp,
            oZomboni,
            oThiefZombie,
            oBeetleCarZombie,
            oGargantuar
        ],
        'PicArr': oKiwibeastStrong['prototype']['PicArr'],
        'LevelName': $__language_Array__['0a5100b42fc587f798ba00663be26442'],
        'LockedCards': [[
                oDoomShroom,
                0x2
            ]],
        'DynamicDifficulty': ![],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f < 0x6; f++) {
                f != 0x3 && PlaceZombie(oSculpture, f, 0x9), f % 0x2 != 0x0 && f != 0x3 && PlaceZombie(oSculpture, f, 0x8), (f % 0x2 == 0x0 || f == 0x3) && PlaceZombie(oSculpture, f, 0x6), PlaceZombie(oSculpture, f, 0x5);
            }
            {
                let [g, h] = [
                    0x3,
                    0x7
                ];
                KIWIBEAST = CustomSpecial(oKiwibeastStrong, g, h), NewEle(0x0, 'div', 'left:\x20' + (0x8c + 0x50 * (h - 0x1)) + 'px;top:\x20' + (0x50 + (g - 0x1) * 0x64) + 'px;', { 'className': 'sos' }, FightingScene);
            }
            ;
            let b = !![];
            PlayAudio('rain', !![]), oAudio['rain']['volume'] = 0.5, oSym['addTask'](0x1, function j() {
                oAudio['rain']['currentTime'] > oAudio['rain']['duration'] - 0.4 && (oAudio['rain']['currentTime'] = 0x0), b && oSym['addTask'](0x1, j);
            });
            !localStorage['JNG_TR_Industry21DieCount'] && (localStorage['JNG_TR_Industry21DieCount'] = 0x0);
            let d = NewEle('effect' + Math['random'](), 'div', 'pointer-events:none;position:absolute;z-index:257;width:1300px;height:600px;background:#000;opacity:1;', 0x0, EDAll);
            switch (Number['parseInt'](localStorage['JNG_TR_Industry21DieCount'])) {
            case 0x0: {
                    let k = 0x0, m = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), n = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                    (function o() {
                        m['onclick'] = o;
                        switch (k) {
                        case 0x0:
                            n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['43b572f0d5ac902cc4465dfad0e42f16']), k++;
                            break;
                        case 0x1:
                            n['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(m, $__language_Array__['1ac1f2a5d80b094370ae1fcfefe1edca']), k++;
                            break;
                        case 0x2:
                            n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['d7faca051953373c875da7ee593e105d']), k++;
                            break;
                        case 0x3:
                            n['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(m, $__language_Array__['3fc58fff3530adfa9b9875f2b54417c6']), k++;
                            break;
                        case 0x4:
                            n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['302d51ac2d2e328809786553735fe502']), k++;
                            break;
                        case 0x5:
                            PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['651e0410243a184eea2845ac593226e3']), k++;
                            break;
                        case 0x6:
                            PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['ecd66e482083407e78b4db99f76ebb4c']), k++;
                            break;
                        case 0x7:
                            ClearChild(m, n), oSym['addTask'](0x1e, a);
                        }
                    }());
                }
                break;
            case 0x1: {
                    let p = 0x0, q = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), r = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                    (function s() {
                        q['onclick'] = s;
                        switch (p) {
                        case 0x0:
                            r['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(q, $__language_Array__['9776852e816574a18eb6dddb1a1eeaeb']), p++;
                            break;
                        case 0x1:
                            PlayAudio('crazydavelong3'), innerText(q, $__language_Array__['ae0db71f73ac20d023c3451a0f50c3c4']), p++;
                            break;
                        case 0x2:
                            PlayAudio('crazydavelong2'), innerText(q, $__language_Array__['d2a0431b4a81f55dba201a18cef9df37']), p++;
                            break;
                        case 0x3:
                            PlayAudio('crazydavelong1'), innerText(q, $__language_Array__['04f2346a6807b15b5e8f8ca5a82e6015']), p++;
                            break;
                        case 0x4:
                            PlayAudio('crazydavelong2'), innerText(q, $__language_Array__['ecd66e482083407e78b4db99f76ebb4c']), p++;
                            break;
                        case 0x5:
                            r['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(q, $__language_Array__['e22be33b5c3cfd287f74ace7a3acb4c1']), p++;
                            break;
                        case 0x6:
                            PlayAudio('Zomboss3'), innerText(q, $__language_Array__['1ac1f2a5d80b094370ae1fcfefe1edca']), p++;
                            break;
                        case 0x7:
                            r['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(q, $__language_Array__['3fc58fff3530adfa9b9875f2b54417c6']), p++;
                            break;
                        case 0x8:
                            PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(q, $__language_Array__['938b4a6d034accb03d5cef1d2dd9229e']), p++;
                            break;
                        case 0x9:
                            ClearChild(q, r), oSym['addTask'](0x1e, a);
                        }
                    }());
                }
                break;
            case 0x2: {
                    let t = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), u = 0x0, v = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), w = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                    (function x() {
                        v['onclick'] = x;
                        switch (u) {
                        case 0x0:
                            v['onclick'] = null, w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(v, $__language_Array__['9c90bddb51ffccac514a04a167a532aa']), oEffects['fadeIn'](t, 'slow', () => v['onclick'] = x), u++;
                            break;
                        case 0x1:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(v, $__language_Array__['ff40fc8da031aa458b20be212fbd5f14']), u++;
                            break;
                        case 0x2:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(v, $__language_Array__['bd0252f3bd9f8485941ff3f22bd16aef']), u++;
                            break;
                        case 0x3:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(v, $__language_Array__['c27f5f908a3b68f46498ed82f3d936d2']), u++;
                            break;
                        case 0x4:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(v, $__language_Array__['7d4fdaf99c2ff376542459419634793d']), u++;
                            break;
                        case 0x5:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(v, $__language_Array__['f708cbfdcf25b82e835127d85316826a']), u++;
                            break;
                        case 0x6:
                            w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(v, $__language_Array__['46b969045217516972406589e2cf6c3e']), u++;
                            break;
                        case 0x7:
                            v['onclick'] = null, w['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(v, $__language_Array__['f0580f7b618c2a1f204bcfe6a2ddc9de']), oEffects['fadeOut'](t, 'slow', () => v['onclick'] = x), u++;
                            break;
                        case 0x8:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(v, $__language_Array__['90cfe3e058a4c537694c98f820d11ff6']), u++;
                            break;
                        case 0x9:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(v, $__language_Array__['9cd6e93aff475c0eab62405ef7b8f310']), u++;
                            break;
                        case 0xa:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(v, $__language_Array__['23cebd69531db3b9957c27344afb3cd4']), u++;
                            break;
                        case 0xb:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(v, $__language_Array__['23a9231efe3677fdb0136983d6de5dcd']), u++;
                            break;
                        case 0xc:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(v, $__language_Array__['59f6aea2fd26fe5c92eb48cf0a60cfe2']), u++;
                            break;
                        case 0xd:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(v, $__language_Array__['ecd66e482083407e78b4db99f76ebb4c']), u++;
                            break;
                        case 0xe:
                            w['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(v, $__language_Array__['3f4aad476effba16316eae5481f2d7aa']), u++;
                            break;
                        case 0xf:
                            ClearChild(v, w), ClearChild(t), oSym['addTask'](0x1e, a);
                        }
                    }());
                }
                break;
            case 0x3: {
                    let y = 0x0, z = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), A = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                    (function B() {
                        z['onclick'] = B;
                        switch (y) {
                        case 0x0:
                            A['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['46f92c73673b81d4ce7e65a530efa2c2']), y++;
                            break;
                        case 0x1:
                            PlayAudio('crazydavelong1'), innerText(z, $__language_Array__['fac0d8fef419deec63683d7b143c7527']), y++;
                            break;
                        case 0x2:
                            PlayAudio('crazydavelong1'), innerText(z, $__language_Array__['fb197a171c8ae2e2f156faa71ab53625']), y++;
                            break;
                        case 0x3:
                            PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['f6670837a7e2e63650e20c8ae3a3361d']), y++;
                            break;
                        case 0x4:
                            PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['fedf11746f3a3095b073b520ae1c422b']), y++;
                            break;
                        case 0x5:
                            PlayAudio('crazydavelong1'), innerText(z, $__language_Array__['ec09da4ac9e8a7cc1c9bcf82e6bce6eb']), y++;
                            break;
                        case 0x6:
                            ClearChild(z, A), oSym['addTask'](0x1e, a);
                        }
                    }());
                }
                break;
            default: {
                    let C = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), D = 0x0, E = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), F = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                    (function G() {
                        E['onclick'] = G;
                        switch (D) {
                        case 0x0:
                            F['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['1e7bf8c08118919167ae64d6814f645f']), D++;
                            break;
                        case 0x1:
                            PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['9c63f3d1ea8f397bd6850c71a802e4ff']), D++;
                            break;
                        case 0x2:
                            PlayAudio('crazydavelong3'), innerText(E, $__language_Array__['2729219a9b65faab6bebf2af60d22b66']), D++;
                            break;
                        case 0x3:
                            PlayAudio('crazydavelong3'), innerText(E, $__language_Array__['97522b74351aa660b3b4426cdd1d6d5f']), D++;
                            break;
                        case 0x4:
                            PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['0c534ce2ab426435bb2bfffc16bc6961']), D++;
                            break;
                        case 0x5:
                            PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['52dd02b78d38171956005526db39b27b']), D++;
                            break;
                        case 0x6:
                            PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['9a0f9a5e562b939678ac59492f299105']), D++;
                            break;
                        case 0x7:
                            PlayAudio('crazydavelong3'), innerText(E, $__language_Array__['672a4dc81ef1ee5ce98ff7de423dd13f']), D++, NewImg('fakeStar_Industry21', 'images/interface/Clearance_reward.png', 'cursor:pointer;z-index:9999;left:535px;top:350px;', EDAll, {
                                'onclick'() {
                                    let H = this;
                                    StopMusic(), ClearChild(E, F), PlayAudio('winmusic'), oEffects['fadeIn'](C, 0x6), setTimeout(function () {
                                        ClearChild(H, C), toOver(0x1), EDAll['scrollLeft'] = 0x73;
                                    }, 0x157c), SetStyle(H, { 'cursor': 'default' })['onclick'] = null;
                                }
                            });
                            break;
                        case 0x8:
                            ClearChild($('fakeStar_Industry21')), PlayAudio('crazydavelong1'), innerText(E, $__language_Array__['b7fd1b0b06c309f4838bb6d4cde1b76f']), D++;
                            break;
                        case 0x9:
                            PlayAudio('crazydavelong3'), innerText(E, $__language_Array__['5ae54e73ada7338981574955b3454945']), D++;
                            break;
                        case 0xa:
                            PlayAudio('crazydavelong2'), innerText(E, $__language_Array__['59f6aea2fd26fe5c92eb48cf0a60cfe2']), D++;
                            break;
                        case 0xb:
                            PlayAudio('crazydavelong2'), innerText(E, $__language_Array__['ecd66e482083407e78b4db99f76ebb4c']), D++;
                            break;
                        case 0xc:
                            ClearChild(C), ClearChild(E, F), oSym['addTask'](0x1e, a);
                        }
                    }());
                }
            }
            localStorage['JNG_TR_Industry21DieCount'] = Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) + 0x1, addEventListenerRecord('jng-event-startgame', function H() {
                let I = 0x0;
                new MutationObserver(J => J['forEach'](K => K['addedNodes']['forEach'](L => {
                    let M = L['id'], N = WIN[L['dataset']['jngConstructor']];
                    if (!N)
                        return;
                    let O = N['prototype']['EName'];
                    if (M['includes']('P_0.') && $P[M]) {
                        if (/oDoomShroom/['test'](O)) {
                            if (!ArPCard[O])
                                return;
                            if (Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0x6) {
                                for (let P = 0x0; P < oP['FlagToSumNum']['a2']['length']; P++) {
                                    oP['FlagToSumNum']['a2'][P] = Math['min'](0x12c, Math['round'](oP['FlagToSumNum']['a2'][P] + Math['max'](0x1, I * 0xa)));
                                }
                                for (let Q of $Z) {
                                    Q['HP'] += Math['min'](I == 0x0 ? 0x0 : I * 0x64 + 0x32, 0x258);
                                }
                            } else {
                                if (Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0xa)
                                    for (let R of $Z) {
                                        R['HP'] += Math['min'](I == 0x0 ? 0x0 : I * 0x46 + 0x1e, 0x190);
                                    }
                            }
                            ++I;
                        }
                    }
                })))['observe'](EDPZ, { 'childList': !![] });
            }, { 'once': !![] });
            let e = a;
            a = function () {
                b = ![], oEffects['fadeOut'](d, 0x1, I => {
                    ClearChild(d);
                }), oMiniGames['DarkRain'](0x2, 0x2, 0x3), e();
            };
        },
        'HaveFog': {
            'leftBorder': 0x3,
            'type': 'strongFog'
        },
        'DKind': 0x0,
        'SunNum': 0x12c,
        'StartGame'() {
            oMiniGames['ProtectPlants']({ 'oKiwibeastStrong': 0x1 }), oSym['addTask'](0x640, function () {
                PlaceZombie(oStrollZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x190, function () {
                    for (let a = 0x1; a < 0x6; a += 0x2) {
                        a != 0x3 && PlaceZombie(oZombie, a, 0xb, 0x0);
                    }
                });
            }), oSym['addTask'](0xc8, function a() {
                if (KIWIBEAST && KIWIBEAST['HP'] <= 0xc8 && KIWIBEAST['HP'] > 0x0)
                    KIWIBEAST['HP'] += 0x190;
                else
                    KIWIBEAST && oSym['addTask'](0xc8, a);
            });
        }
    }, {
        'AZ': [
            [
                oSculptorZombie,
                0x1,
                0xe
            ],
            [
                oMakeRifterZombie,
                0x1,
                0xa
            ],
            [
                oMembraneZombie_NO37,
                0x1,
                0x7
            ],
            [
                oStrollZombie,
                0x1,
                0xa
            ],
            [
                oZombie,
                0x1,
                0x1
            ],
            [
                oConeheadZombie,
                0x1,
                0x2
            ],
            [
                oPushIceImp,
                0x1,
                0xe
            ],
            [
                oZomboni,
                0x1,
                0xe
            ],
            [
                oThiefZombie,
                0x1,
                0x3e8
            ],
            [
                oBeetleCarZombie,
                0x1,
                0xb
            ],
            [
                oGargantuar,
                0x1,
                0xe
            ]
        ],
        'FlagNum': 0xd,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x6,
                0x7,
                0x8,
                0x9,
                0xa,
                0xc,
                0xd
            ],
            'a2': [
                0x0,
                0x0,
                0x4,
                0xf,
                0x10,
                0x13,
                0x14,
                0x1e,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x6; c += 0x4) {
                            PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                        }
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['random']() * 0x258, c => {
                            PlaceZombie(oStrollZombie, b, 0xb, 0x0);
                        });
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        oSym['addTask'](Math['random']() * 0x258 + 0x258, d => {
                            c == 0x3 && oSym['addTask'](0xc8, e => {
                                PlaceZombie(oZombie, c, 0xb, 0x0);
                            }), PlaceZombie(oConeheadZombie, c, 0xb, 0x0), PlaceZombie(oStrollZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                }],
            0x2: [a => {
                    oSym['addTask'](0x64, b => {
                        for (let c = 0x1; c < 0x6; c += 0x4) {
                            PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                        }
                    }), Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0xa && oSym['addTask'](0x12c, b => {
                        for (let c = 0x2; c < 0x6; c += 0x2) {
                            PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                        }
                    }), oSym['addTask'](0x384, b => {
                        for (let c = 0x0; c < 0x5; c++) {
                            oSym['addTask'](c * 0x12c, d => {
                                PlaceZombie(oMakeRifterZombie, 0x1, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, 0x5, 0xb, 0x0), oSym['addTask'](0x96, e => {
                                    PlaceZombie(oMakeRifterZombie, 0x2, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, 0x4, 0xb, 0x0);
                                });
                            });
                        }
                    });
                }],
            0x3: [a => {
                    oSym['addTask'](0x64, b => {
                        PlaceZombie(oThiefZombie, 0x3, 0x4, 0x0);
                        for (let c = 0x2; c < 0x5; c += 0x2) {
                            PlaceZombie(oThiefZombie, c, 0x1, 0x0);
                        }
                    }), oSym['addTask'](0x12c, b => {
                        for (let c = 0x0; c < 0x3; c++) {
                            oSym['addTask'](c * 0x2bc, d => {
                                PlaceZombie(oPushIceImp, 0x1, 0xb, 0x0), PlaceZombie(oPushIceImp, 0x5, 0xb, 0x0), oSym['addTask'](0x15e, e => {
                                    PlaceZombie(oPushIceImp, 0x2, 0xb, 0x0), PlaceZombie(oPushIceImp, 0x4, 0xb, 0x0);
                                });
                            });
                        }
                    });
                    for (let b = 0x0; b < 0xf; b++) {
                        oSym['addTask'](Math['random']() * 0x640, c => {
                            PlaceZombie(oZombie, [
                                0x1,
                                0x2,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](Math['random']() * 0x320, c => {
                        PlaceZombie(oZombie, 0x3, 0xb, 0x0);
                    });
                }],
            0x4: [a => {
                    oSym['addTask'](0x384, b => {
                        PlaceZombie(oSculptorZombie, 0x3, 0xc, 0x0);
                    }), oSym['addTask'](0x1f4, b => {
                        for (let c = 0x1; c < 0x6; c += 0x2) {
                            oSym['addTask'](Math['random']() * 0xc8, d => {
                                PlaceZombie(oThiefZombie, c, [
                                    0x1,
                                    0x2,
                                    0x3
                                ]['random'](), 0x0);
                            });
                        }
                    });
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie_NO37, b, 0xb, 0x0);
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        oSym['addTask'](Math['random']() * 0x190 + 0x190, d => {
                            PlaceZombie(oZomboni, c, 0xc, 0x0);
                        });
                    }
                }],
            0x6: [a => {
                    Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0x6 && oSym['addTask'](0x12c, b => {
                        PlaceZombie(oThiefZombie, 0x3, 0x5, 0x0);
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie_NO37, b, 0xb, 0x0);
                    }
                }],
            0x7: [a => {
                    oSym['addTask'](0x384, c => {
                        PlaceZombie(oSculptorZombie, 0x3, 0xc, 0x0);
                    }), oSym['addTask'](0x12c, c => {
                        for (let d = 0x1; d < 0x6; d += 0x1) {
                            d != 0x3 && PlaceZombie(oSculptorZombie, d, 0xc, 0x0);
                        }
                    });
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oMembraneZombie_NO37, c, 0xb, 0x0);
                    }
                    oSym['addTask'](0x1f4, d => {
                        for (let e = 0x2; e < 0x6; e += 0x2) {
                            oSym['addTask'](Math['random']() * 0xc8, f => {
                                PlaceZombie(oThiefZombie, e, [
                                    0x1,
                                    0x2,
                                    0x3
                                ]['random'](), 0x0);
                            });
                        }
                    });
                    let b = 0x1;
                    Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) > 0x3 && (b = 0x2);
                    for (let d = b; d < 0x6; d += b) {
                        oSym['addTask'](Math['random']() * 0x190 + 0x190, e => {
                            PlaceZombie(oZomboni, d, 0xc, 0x0);
                        }), oSym['addTask'](Math['random']() * 0x190, e => {
                            PlaceZombie(oBeetleCarZombie, d, 0xc, 0x0);
                        });
                    }
                }],
            0x8: [a => {
                    oSym['addTask'](0x1f4, b => {
                        let c = 0x1;
                        Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) > 0x2 && (c = 0x2);
                        for (let d = 0x1; d < 0x6; d += c) {
                            oSym['addTask'](Math['random']() * 0xc8, e => {
                                PlaceZombie(oThiefZombie, d, [
                                    0x1,
                                    0x2,
                                    0x3
                                ]['random'](), 0x0)['HP'] -= 0xc8;
                            });
                        }
                    });
                    for (let b = 0x1; b < 0x6; b += 0x4) {
                        PlaceZombie(oGargantuar, b, 0xc, 0x0)['HP'] -= 0x4b0;
                    }
                }],
            0x9: [a => {
                    if (Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0x3)
                        for (let b = 0x1; b < 0x6; b++) {
                            b != 0x3 && (PlaceZombie(oGargantuar, b, 0xc, 0x0)['HP'] -= 0x258);
                        }
                    oSym['addTask'](0x12c, c => {
                        for (let d = 0x0; d < 0x3; d++) {
                            oSym['addTask'](d * 0x2bc, e => {
                                PlaceZombie(oPushIceImp, 0x1, 0xb, 0x0)['HP'] += 0x64, PlaceZombie(oPushIceImp, 0x5, 0xb, 0x0)['HP'] += 0x64, oSym['addTask'](0x15e, f => {
                                    PlaceZombie(oPushIceImp, 0x2, 0xb, 0x0)['HP'] += 0x64, PlaceZombie(oPushIceImp, 0x4, 0xb, 0x0)['HP'] += 0x64;
                                });
                            });
                        }
                    });
                }],
            0xa: [a => {
                    for (let b = 0x1; b < 0x7; b++) {
                        oSym['addTask'](Math['random']() * 0x5dc, c => {
                            PlaceZombie(oZombie, [
                                0x1,
                                0x2,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0)['HP'] -= 0xc8;
                        });
                    }
                }],
            0xb: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['random']() * 0x190 + 0x190, c => {
                            PlaceZombie(oZomboni, b, 0xc, 0x0)['HP'] -= 0xc8 * Math['min'](Math['max'](Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']), 0x1), 0x4);
                        });
                    }
                    Number['parseInt'](localStorage['JNG_TR_Industry21DieCount']) <= 0x6 && oSym['addTask'](Math['random']() * 0x258, c => {
                        PlaceZombie(oThiefZombie, 0x3, 0x6, 0x0);
                    });
                }],
            0xc: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        if (b == 0x3)
                            continue;
                        oSym['addTask']((0x3 - Math['abs'](b - 0x3)) * 0x190, c => {
                            let d = PlaceZombie(oGargantuar, b, 0xc, 0x0);
                            b == 0x3 && (d['HP'] -= 0x258);
                        });
                    }
                }]
        },
        'FlagToEnd': function () {
            var a;
            oS['DefaultFlagToEnd']();
            let b = JSON['parse']((a = localStorage['JNG_TR_OPTIONS_INDUSTRYPART3']) !== null && a !== void 0x0 ? a : '{}');
            b['fail21'] = Number(localStorage['JNG_TR_Industry21DieCount']) - 0x1, localStorage['JNG_TR_OPTIONS_INDUSTRYPART3'] = JSON['stringify'](b), delete localStorage['JNG_TR_Industry21DieCount'];
        }
    });
}