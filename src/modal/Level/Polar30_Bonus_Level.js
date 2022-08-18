/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let doms = [], old_dMenuClick, MenuClick = {};
    oS['Init']({
        'PName': [
            oPeashooter,
            oSnowPea,
            oCherryBomb,
            oRepeater,
            oScaredyShroom,
            oFumeShroom,
            oSporeShroom,
            oBambooUncle,
            oDoomShroom,
            oJalapeno,
            oPepper,
            oIceAloe,
            oSpikeweed
        ],
        'ZName': [oZomboni],
        'LevelName': $__language_Array__['7db675640fba0dc3608b21bf799192e6'],
        'AudioArr': ['Bgm_Polar30_Bonus_Level'],
        'CanSelectCard': 0x0,
        'DKind': 0x0,
        'SunNum': 0x32,
        'LoadMusic': '',
        'StartGameMusic': 'Bgm_Polar_Noise',
        get 'backgroundImage'() {
            return 'images/interface/Polar' + (oS['DKind'] ? '' : '2') + '.webp';
        },
        'LoadAccess': function (b) {
            RewriteGlobalVariables({
                'IsGaming'() {
                    return ![];
                }
            }), old_dMenuClick = $('dMenu')['onclick'], doms = Array['from']($('dMenu')['childNodes']);
            for (let c in doms) {
                MenuClick[c] = doms[c]['onclick'], doms[c]['onclick'] = null;
            }
            NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround'))), oSym['addTask'](0x1e, b);
        },
        'StartGame': function () {
            $('Zimu')['style']['cssText'] = 'font-size:\x201.3em;line-height:60px;';
            let a = $('dCardList'), b = 0x1;
            a['onmousedown'] = a['onmouseup'] = null, a['onclick'] = function (d) {
                b < 0x14 && PlaySubtitle();
                switch (b++) {
                case 0x1:
                    PlaySubtitle($__language_Array__['244384b3d85eb68ac2e23a15a2a37fda']);
                    break;
                case 0x2:
                    PlaySubtitle($__language_Array__['dfd4665f2fa6a66d969b3046f0aba322']), oSym['addTask'](0x12c, () => {
                        b == 0x2 && PlaySubtitle($__language_Array__['d257394f73094655084d20a7c82099f8']);
                    });
                    break;
                case 0x3: {
                        PlaySubtitle($__language_Array__['98be8008feaad4395f6a1953e43bd910']);
                        let f = a['onclick'];
                        a['onclick'] = null, oSym['addTask'](0xc8, function () {
                            PlaySubtitle($__language_Array__['d1b852b11ae238c39e8d1821d8981000']);
                        }), oSym['addTask'](0x12c, function () {
                            PlaySubtitle($__language_Array__['40d770784b5f8ef3dee1c34fb44d4fd0']), a['onclick'] = f, PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar30_Bonus_Level');
                        });
                    }
                    ;
                    break;
                case 0x4:
                    PlaySubtitle($__language_Array__['15f9a7bcae78e002f24fd711faf08547']);
                    break;
                case 0x14:
                    PlaySubtitle($__language_Array__['9be082d54c79da9bf62f467594da7468']), DataManager['SetAchievement']('The_Stanley_Parable', '1'), oSym['addTask'](0x1f4, g => {
                        PlaySubtitle();
                    });
                    break;
                default:
                    b < 0x14 && PlaySubtitle([
                        $__language_Array__['b5e1f538bc225744b76608d5aae4f42d'],
                        $__language_Array__['6281bf7bda768f0030ab97356ee548a0'],
                        $__language_Array__['9a9dd15195652f5df29aa2a1964de17a']
                    ]['random']());
                }
                d['preventDefault']();
            };
            let c = NewEle('testArea', 'div', null, 0x0, $('tGround'));
            c['onclick'] = function () {
                PlaySubtitle($__language_Array__['ffdfdd94c0e88bc35e76961ebb718578']);
            }, CSpeed(0x1), SetStyle($('testArea'), {
                'height': '500px',
                'width': '800px',
                'position': 'absolute',
                'top': '100px',
                'left': '200px',
                'zIndex': '21'
            }), $('dSunNum')['onclick'] = function () {
                $('dSunNum')['onclick'] = null, PlaySubtitle($__language_Array__['e36403d8a0f8d4c8e513650a12001260']), oSym['addTask'](0x96, function () {
                    PlaySubtitle($__language_Array__['d108164c374867f0248acf79780a76f2']), $('dSunNum')['onclick'] = function () {
                    };
                });
            }, $('imgShovel')['onmousedown'] = function (d) {
                PlaySubtitle($__language_Array__['72a51fcc5d3b21007783e4f3416dcd42']), $('imgShovel')['onmousedown'] = null, oSym['addTask'](0x12c, function () {
                    $('imgShovel')['style']['display'] = 'none', PlaySubtitle($__language_Array__['da128afdf6c705c394e103990844ab83']);
                });
            }, $('imgShovel')['onclick'] = null, PlaySubtitle($__language_Array__['76c90e802e86fa65051b21d0fda7ae18']), oSym['addTask'](0x12c, function () {
                b < 0x1 && PlaySubtitle($__language_Array__['8826f00532dbdcfe369c596e3fc5e2db']);
            }), oSym['addTask'](0xbb8, function () {
                PlaceZombie(oZomboni, 0x3, 0xb, 0x0), c['onclick'] = function () {
                    PlaySubtitle($__language_Array__['b145f6b1e58ba41fb41fb9d1a188d60a']);
                }, oSym['addTask'](0xbb8, function () {
                    for (let e in $Z) {
                        $Z[e]['NormalDie']();
                    }
                    for (let f in doms) {
                        doms[f]['onclick'] = MenuClick[f];
                    }
                    $('dMenu')['onclick'] = old_dMenuClick, toWin();
                });
            }), $('dMenu')['onclick'] = function () {
                PlaySubtitle($__language_Array__['ca48d10d7f327e56872261d3552f2959']);
            }, StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), PrepareGrowPlants(function () {
                oP['Monitor'](oS['Monitor']), BeginCool(), oS['DKind'] && AutoProduceSun(0x32);
            });
        }
    }, {
        'AZ': [],
        'FlagNum': 0x1,
        'FlagToMonitor': {},
        'FlagToSumNum': {
            'a1': [0x1],
            'a2': [0x0]
        },
        'FlagToEnd': function () {
            ShowWinItem(NewImg('imgSF', 'images/interface/Clearance_reward.png', 'left:535px;top:200px;width:116px;height:119px;', EDAll, {
                'onclick': function () {
                    GetWin(this, NextLevel());
                }
            }));
        }
    });
}