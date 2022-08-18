/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    var _JSON$parse, _localStorage$JNG_TR_;
    let won_level = ((_JSON$parse = JSON['parse']((_localStorage$JNG_TR_ = localStorage['JNG_TR_WON']) !== null && _localStorage$JNG_TR_ !== void 0x0 ? _localStorage$JNG_TR_ : '{}')) === null || _JSON$parse === void 0x0 ? void 0x0 : _JSON$parse['Industry25']) === 0x1, isHard = !![];
    typeof option__isCheatEngineStart !== 'undefined' && (localStorage['JNG_TR_CHEATINDUSTRYPART3__'] = !![]), oS['Init']({
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
            oCranberry,
            oMelonPult
        ],
        'ZName': [
            oZomboss_Industry,
            oZombossVase,
            oSculpture,
            oZombie,
            oConeheadZombie,
            oMembraneZombie,
            oBucketheadZombie,
            oBalloonZombie,
            oGargantuar,
            oFootballZombie,
            oNewspaperZombie,
            oSculptorZombie,
            oMakeRifterZombie,
            oCaskZombie,
            oSadakoZombie,
            oThiefZombie,
            oPushIceImp,
            oZomboni,
            oImp,
            oCigarZombie,
            oBeetleCarZombie,
            oStrollZombie
        ],
        'LevelName': $__language_Array__['afbde02b65e29e87e030d620f2223778'],
        'DynamicDifficulty': ![],
        'AllowUserCard': ![],
        'InitLawnMover': function () {
        },
        'CanSelectCard': 0x0,
        'StaticCard': 0x0,
        'DKind': 0x0,
        'isScroll': ![],
        'ControlFlagmeter': 0x0,
        'FixedProps': 'disabled',
        'LoadMusic': 'Bgm_Industry25_Ready',
        'StartGameMusic': 'Bgm_Industry_Boss',
        'LoadAccess'(a) {
            let b = new Date(), c = oP['MonPrgs'];
            oP['MonPrgs'] = x => {
            }, NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            let e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:256;width:1400px;height:600px;background:#000;opacity:1;', 0x0, EDAll), f = !![];
            oSym['addTask'](0xa, function x() {
                if (!f)
                    return;
                oZ['traversalOf'](), oSym['addTask'](0xa, x);
            });
            function g() {
                if (won_level)
                    return;
                new Date() - b < 0x1f4 && (j['onclick'] = null, oSym['addTask'](0x1f4, y => {
                    j['onclick'] = l;
                })), b = new Date();
            }
            let h = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), i = 0x0, j = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), k = NewImg('dDave', '', 'left:0;top:81px', EDAll), l = n, m = [];
            function n() {
                var y;
                j['onclick'] = l;
                switch (i) {
                case 0x0:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['17c566910233520b81cb9c5564ce35c6']), i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['81e30960b731f0c2c3e7479064e832b4']), i++;
                    break;
                case 0x2:
                    let z = JSON['parse']((y = localStorage['JNG_TR_OPTIONS_INDUSTRYPART3']) !== null && y !== void 0x0 ? y : '{}');
                    isHard = !![];
                    let A = !!localStorage['JNG_TR_CHEATINDUSTRYPART3__'];
                    for (let B = 0x15; B < 0x19; B++) {
                        if ((z['fail' + B] >= 0x9 || !z['fail' + B]) && z['fail' + B] !== 0x0) {
                            console['log'](B), isHard = ![];
                            break;
                        }
                    }
                    if (isHard && !A)
                        l = q, q();
                    else
                        A ? (l = s, s()) : (l = u, u());
                }
            }
            function o() {
                for (let E = 0x1; E < 0x6; E++) {
                    for (let F = 0x1; F < 0xa; F++) {
                        m['push'](CustomSpecial(oRifter, E, F));
                    }
                }
                let y = [], z = j['onclick'];
                j['onclick'] = null;
                let A = !![];
                oEffects['Animate'](e, { 'opacity': 0.7 }, 0x1);
                let B = 0x5;
                function C() {
                    j['onclick'] = z, z(), A = ![], oEffects['Animate'](e, { 'opacity': 0x1 }, 0x1);
                }
                let D = [];
                for (let G = 0x1; G < 0x6; G++) {
                    let H = CustomSpecial(oLawnCleaner, G, -0x1);
                    D['push'](H), H['_____TMP_____DIE_____'] = H['PrivateDie'], H['PrivateDie'] = function (I) {
                        H['_____TMP_____DIE_____'](I), B--, B == 0x0 && C();
                    };
                }
                for (let I = 0x1; I <= 0x32; I++) {
                    oSym['addTask'](0x3e8 * Math['random'](), J => {
                        let K = [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random']();
                        A && oGd['$'][K + '_-1_1'] && y['push'](PlaceZombie([
                            oFootballZombie,
                            oNewspaperZombie,
                            oCaskZombie,
                            oImp,
                            oGargantuar
                        ]['random'](), K, 0xc));
                    });
                }
                won_level && (j['onclick'] = function () {
                    C();
                    for (let J = 0x0; J < y['length']; J++) {
                        $Z[y[J]['id']] && $Z[y[J]['id']]['DisappearDie']();
                    }
                    for (let K of D) {
                        $P[K['id']] && K['Die']();
                    }
                });
            }
            function p(y) {
                oEffects['Animate'](e, { 'opacity': 0.93 }, 0.5);
                let A = PlaceZombie(oSadakoZombie, 0x3, 0xc, 0x0);
                oSym['addTask'](0x5, function B() {
                    if (i > y) {
                        A['NormalDie'](), oEffects['Animate'](e, { 'opacity': 0x1 }, 0.5);
                        return;
                    }
                    if (A['X'] < 0x0) {
                        ClearChild(j, k), PlayAudio('chompsoft'), oEffects['Animate'](e, { 'opacity': 0x1 }, 0.5, ![], C => {
                            EDAll['scrollLeft'] = 0x73, toOver(0x1);
                        });
                        return;
                    }
                    oSym['addTask'](0x5, B);
                });
            }
            function q() {
                switch (i) {
                case 0x2:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['378199ef052609b2b992267b032047c1']), i++;
                    break;
                case 0x3:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['e87b3d1ec40c508e734ec6c0629d3434']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['b732175e1e61a82c2e0f411b7183a860']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['adbc17d31d9884d0ccdf2eb194dad3a7']), i++;
                    break;
                case 0x6:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['536359cd3ec4a1e00e4520ac92c25046']), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['d36e80c3e62b4994957e99c9dfbc0252']), i++;
                    break;
                case 0x8:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['bb2ee2851c41d93a9685f77c4f494050']), i++, o();
                    break;
                case 0x9:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['a636fa285b2d382d36b217527b37b3de']), i++;
                    break;
                case 0xa:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['b4697d19a4aab083ddd74d99eed9cbd1']), p(0x16), g(), i++;
                    break;
                case 0xb:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['8b286653f2cd79e3b115f25b796757eb']), g(), i++;
                    break;
                case 0xc:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['649946cb154083dac2dcb368e2e64077']), g(), i++;
                    break;
                case 0xd:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['022c0167e8938904157b2f63d9fabc3f']), g(), i++;
                    break;
                case 0xe:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['c3032203fa177e073ac639d30f74a1d9']), g(), i++;
                    break;
                case 0xf:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['41f062007018f204fc9ada720d647465']), g(), i++;
                    break;
                case 0x10:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['4dc8f6b1cfe6dcf53f8705a9f5f02d62']), g(), i++;
                    break;
                case 0x11:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['ef44fb94b87e335544a83d533ff3c3a7']), g(), i++;
                    break;
                case 0x12:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['390350c42f697c5936f05dcd8711ec84']), g(), i++;
                    break;
                case 0x13:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['1e020ac775aa75be3ee31c40854bafa7']), g(), i++;
                    break;
                case 0x14:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['915a71e92371c8954fd5d9dc378ecd83']), g(), i++;
                    break;
                case 0x15:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['334923e63d304c1149ad309cfb746ed3']), g(), i++;
                    break;
                case 0x16:
                    l = r, r();
                }
            }
            function r() {
                switch (i - 0x16) {
                case 0x0:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['22c3e6f912229911c16145933df8b281']), oEffects['fadeIn'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['013b5a084218b3870c3db29332eb6926']), i++;
                    break;
                case 0x2:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['aeff847273530b55ae8a2bdc8fb52e88']), i++;
                    break;
                case 0x3:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['c8d16394dc571f069e28a09fd91470f4']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['f018fec9215ceafc163982350a81face']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['b35cfde3a5ef9c3dd826fbd79ec7ea02']), i++;
                    break;
                case 0x6:
                    j['onclick'] = null, k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['e82b088aef76ef6c1f3609f75de608de']), oEffects['fadeOut'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['58dbebca70e066f2491eddd42393923b']), i++;
                    break;
                case 0x8:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['0e547c04b54290d8b4c4cd38c1da114f']), i++;
                    break;
                case 0x9:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['b2617eeb818836494c4dade4b8107bf9']), i++;
                    break;
                case 0xa:
                    w();
                }
            }
            function s() {
                j['onclick'] = l;
                switch (i - 0x2) {
                case 0x0:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['378199ef052609b2b992267b032047c1']), i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['7bb2df20b7fea93bb835a712ee9803ce']), i++;
                    break;
                case 0x2:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['7dcec1ea8c4217fae0dd3c10b1b82fa3']), i++;
                    break;
                case 0x3:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['536359cd3ec4a1e00e4520ac92c25046']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['d36e80c3e62b4994957e99c9dfbc0252']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['bb2ee2851c41d93a9685f77c4f494050']), o(), i++;
                    break;
                case 0x6:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['a636fa285b2d382d36b217527b37b3de']), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['b4697d19a4aab083ddd74d99eed9cbd1']), p(0x18), g(), i++;
                    break;
                case 0x8:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['8b286653f2cd79e3b115f25b796757eb']), g(), i++;
                    break;
                case 0x9:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['649946cb154083dac2dcb368e2e64077']), g(), i++;
                    break;
                case 0xa:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['a4ead47ef81ec2ca358afdf00c47ce0f']), g(), i++;
                    break;
                case 0xb:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['21edacebd43b88952f6a2dacf4003e03']), g(), i++;
                    break;
                case 0xc:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['ba46c64598ac7f6c0331bd913467183c']), g(), i++;
                    break;
                case 0xd:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['cf546189d9ac679c91a412014fdd9127']), g(), i++;
                    break;
                case 0xe:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['5540665b780abeab5a19ba8a1d120f7a']), g(), i++;
                    break;
                case 0xf:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['a6ca57d4769f737da4c4ce1f39a69b01']), g(), i++;
                    break;
                case 0x10:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['8074999e0e7b9a0959ec992b8f93a20e']), g(), i++;
                    break;
                case 0x11:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['9055f63b9faf9b11524661d25c2495be']), g(), i++;
                    break;
                case 0x12:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['4e1df659ab927e4a2430f890683baa2c']), g(), i++;
                    break;
                case 0x13:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['180c4bfb04475b58819240feb634981c']), g(), i++;
                    break;
                case 0x14:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['4f398232d6ecf4d64b86222d8cbb1861']), g(), i++;
                    break;
                case 0x15:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['97def6d4cd8816c778043d89fa54a0ff']), g(), i++;
                    break;
                case 0x16:
                    l = t, t();
                }
            }
            function t() {
                switch (i - 0x18) {
                case 0x0:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['22c3e6f912229911c16145933df8b281']), oEffects['fadeIn'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['bf87cc5dfb25be9ea98545f921aa5385']), ClearChild($('___CHEAT_ENGINE___')), i++;
                    break;
                case 0x2:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['b935b03ff514856ec2c0869a6ab2b46f']), i++;
                    break;
                case 0x3:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['df7b1369f6810cb66f26d0b02c1b3bdb']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['dc55a308eed186fcd12e689e5dc84b1a']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['aeff847273530b55ae8a2bdc8fb52e88']), i++;
                    break;
                case 0x6:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['2a310c973618aa089b7d610b0e8623e3']), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['4d800cc1d788bcfe37ec15be494e78af']), i++;
                    break;
                case 0x8:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['f018fec9215ceafc163982350a81face']), i++;
                    break;
                case 0x9:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['b35cfde3a5ef9c3dd826fbd79ec7ea02']), i++;
                    break;
                case 0xa:
                    j['onclick'] = null, k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['e82b088aef76ef6c1f3609f75de608de']), oEffects['fadeOut'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0xb:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['58dbebca70e066f2491eddd42393923b']), i++;
                    break;
                case 0xc:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['bfb07c7b347afc0a7e70f4f04533f410']), i++;
                    break;
                case 0xd:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['b2617eeb818836494c4dade4b8107bf9']), i++;
                    break;
                case 0xe:
                    w();
                }
            }
            function u() {
                switch (i - 0x2) {
                case 0x0:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['6eee326e9f1cdeb582e60d545419f1e8']), i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['7cd915775c0cb725742b13e06bc12bac']), i++;
                    break;
                case 0x2:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['815c67cd63578c8b34aa13a32cec2802']), i++;
                    break;
                case 0x3:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['ed6a567715fbbfe7a1fd835c6955cc40']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['e4388c57167f94dbfe95de14328944b1']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['bb2ee2851c41d93a9685f77c4f494050']), p(0xe), g(), i++;
                    break;
                case 0x6:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['6f41c1bfed435e1ef194cf6868b48d19']), g(), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['68d607d1ef5479beb15f7cd704cec519']), g(), i++;
                    break;
                case 0x8:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['978400b292a66f0921ffe545fb0e4657']), g(), i++;
                    break;
                case 0x9:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['75d6d0cfe2f314971a0ad4deab6a13e7']), g(), i++;
                    break;
                case 0xa:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['0ed9c99f1fff0af3da7bf075fe4fc89f']), g(), i++;
                    break;
                case 0xb:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['b9d68e342c663c60a4f0a047bfa7745c']), g(), i++;
                    break;
                case 0xc:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['aad7081e5f49dbeef36f38951070c06a']), g(), i++;
                    break;
                case 0xd:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['22c3e6f912229911c16145933df8b281']), oEffects['fadeIn'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0xe:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['c9311a6d3a24fe4132830aaa3edddaba']), i++;
                    break;
                case 0xf:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['fa5670c20f46f3d819e7fea06b1865e8']), i++;
                    break;
                case 0x10:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['c456b4f65c91856b671de56e596493c0']), i++;
                    break;
                case 0x11:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['243d6ee90e67cdb640b958f34f147f91']), i++;
                    break;
                case 0x12:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['fe838e254bc14826bd857e07c947dcee']), i++;
                    break;
                case 0x13:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['df17bbb65a53b0a6f1258aefb121a2cc']), i++;
                    break;
                case 0x14:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['cfe87b562e02122a2be205b38128b4de']), i++;
                    break;
                case 0x15:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(j, $__language_Array__['51198b03260e0d9f027dcede653d5707']), i++;
                    break;
                case 0x16:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['8e0a655f0c3d9999f1c01d710c4f3dc7']), i++;
                    break;
                case 0x17:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, $__language_Array__['c56d3870d36af955c70859039001b8e4']), i++;
                    break;
                case 0x18:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['5f212bc1b31174244985670eaec5a378']), oEffects['fadeOut'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x19:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['35a739249b796a784cb52bfc591382f9']), i++;
                    break;
                case 0x1a:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['5cbd92e362ad492ef0786426717c0db1']), i++;
                    break;
                case 0x1b:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['eb458d01769628f398f42e45d48fd7c5']), i++;
                    break;
                case 0x1c:
                    w(0x1);
                }
            }
            l();
            function v(y) {
                let z = y['which'] || y['keyCode'];
                ClearChild($('___CHEAT_ENGINE___'));
                switch (z) {
                case 0x54:
                    isHard = !![], w();
                    break;
                case 0x43:
                    isHard = ![], w();
                    break;
                case 0x4e:
                    isHard = ![], w(0x1);
                    break;
                default:
                    break;
                }
            }
            EBody['addEventListener']('keydown', v);
            function w(y = 0x0) {
                EBody['removeEventListener']('keydown', v);
                y && (oS['InitLawnMover'] = function () {
                    for (let z = 0x1; z < 0x6; z++)
                        oSym['addTask'](z * 0xa, CustomSpecial, [
                            oLawnCleaner,
                            z,
                            -0x1
                        ]);
                });
                for (let z of m) {
                    z['_Die']();
                }
                if (Number(h['style']['opacity']) > 0x0) {
                    oEffects['fadeOut'](h, 'slow', w);
                    return;
                }
                oP['MonPrgs'] = c, ClearChild(h), ClearChild(j, k), oEffects['fadeOut'](e, 0x1, ClearChild), f = ![], PlaceZombie(oZomboss_Industry, 0x3, 0x9, 0x0, 0x1)['isHard'] = isHard, EDAll['scrollLeft'] = 0x73, oSym['addTask'](0x5a, a);
            }
        },
        'StartGame': function () {
            oMiniGames['ConveyorBelt']([oCherryBomb], 0x1194 + (isHard ? 0xe74 : 0x0), 0x2, [], 0x3 - (isHard ? 0x1 : 0x0));
            for (let a = 0x1; a < 0x6; a++) {
                for (let b = 0x6; b < 0xa; b++) {
                    oGd['$GdType'][a][b] = 0x0;
                }
            }
        }
    }, {
        'AZ': [],
        'FlagNum': 0x1,
        'FlagToSumNum': {
            'a1': [0x1],
            'a2': [0x0]
        },
        'FlagToEnd': function () {
            let a = Array['from'](EDAll['getElementsByTagName']('img'));
            for (let c in a) {
                /BonusCard/['test'](a[c]['id']) && oEffects['Animate'](a[c], { 'transform': 'scale(0)' }, 0.2, 'linear');
            }
            let b = 'images/interface/Clearance_reward.png';
            isHard && (b = 'images/Props/Industry25/plan_note.png'), ShowWinItem(NewImg('imgSF', b, 'left:535px;top:200px;' + (isHard ? 'width:135px;height:88px;' : 'width:116px;height:119px;'), EDAll, {
                'onclick'(d) {
                    GetWin(this, isHard ? 'Industry25-2' : 'Industry25-1');
                }
            }));
        }
    });
}