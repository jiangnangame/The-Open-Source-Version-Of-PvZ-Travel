/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let firstTimePlay = !localStorage['getJsonItem']('JNG_TR_WON', 'Polar2');
    oS['Init']({
        'PName': [
            oPeashooter,
            oSnowPea,
            oBegonia
        ],
        'ZName': [
            oStrollZombie,
            oSkatingZombie
        ],
        'PicArr': (function () {
            let c = oBegonia['prototype'], d = c['PicArr'];
            return [
                d[c['CardGif']],
                d[c['StaticGif']]
            ];
        }()),
        'LevelName': $__language_Array__['ae06dd464aaa01a493e089096c800241'],
        'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
        'CanSelectCard': 0x0,
        'DynamicDifficulty': ![],
        'StaticCard': 0x0,
        'FixedProps': 'disabled',
        'LoadAccess': function (a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
            for (let f = 0x1; f < 0xa; f++) {
                for (let g = 0x1; g < 0x6; g++) {
                    CustomSpecial(oRifter, g, f);
                }
            }
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            !firstTimePlay && (c = 5.5), function h() {
                d['onclick'] = h;
                switch (c) {
                case 0x0:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['6e94099340c74ffd5efce147f320c16b']), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['eb2aa648dbe56c7012a9d365ca7db835']), c++;
                    break;
                case 0x2:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['d49ff9caa743839f872d0473f9a3e244']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['1acffb3de3bf20f76bfc42d6dcdc7cc1']), c++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss3'), innerText(d, $__language_Array__['103dea8d46a528aad3403b041b4a9a4a']), c++;
                    break;
                case 0x5:
                    d['onclick'] = null, oEffects['fadeOut'](b, 'slow', () => {
                        d['onclick'] = h, h();
                    }), c += 0.5;
                    break;
                case 5.5:
                    b['style']['opacity'] = 0x0, e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['a322d34bdb4db790473e060be25871c3']), c += 0.5;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, '……'), c++;
                    break;
                case 0x7:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['135a9eddd9b351822cd5a9df9c3f3ca5']), c++;
                    break;
                case 0x8:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, '……'), c++;
                    break;
                case 0x9:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['ab689ce47cf1aa016f9bb503593ebce8']), c++;
                    break;
                case 0xa:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['7145ad96faa53a96d252b5bde65bfe81']), c++;
                    break;
                case 0xb:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['12473b520e9be53a32d6fcbafd25ad53']), c++;
                    break;
                case 0xc:
                    PlayAudio('Zomboss2'), innerText(d, $__language_Array__['7d08903ac72999c8041627fcf5150dca']), c++;
                    break;
                case 0xd:
                    PlayAudio('Zomboss2'), innerText(d, $__language_Array__['ca73a6a7d4f8b2fc25c96d1d9e08f166']), c++;
                    break;
                case 0xe:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, '……'), c++;
                    break;
                case 0xf:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['eab74d698ac117a330eaa8dd58c4cfdf']), c++;
                    break;
                case 0x10:
                    PlayAudio('Zomboss2'), innerText(d, $__language_Array__['a1545ec0b100a324791f9547de1d9730']), c++;
                    break;
                case 0x11:
                    PlayAudio('Zomboss3'), innerText(d, $__language_Array__['c4b07450d250e6f232f8a34a857eedf2']), c++;
                    break;
                case 0x12:
                    PlayAudio('Zomboss1'), innerText(d, $__language_Array__['9bab26d5fd937353de2b2adc64c152bc']), c++;
                    break;
                case 0x13:
                    PlayAudio('Zomboss2'), innerText(d, $__language_Array__['e961f932e1d85619a62b813791092466']), c++;
                    break;
                case 0x14:
                    PlayAudio('Zomboss3'), innerText(d, $__language_Array__['89dac5754a613618c461cb0c5b29a49b']), c++;
                    break;
                case 0x15:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['712751232fede16bdf0b36c3dcdccc59']), c++;
                    break;
                case 0x16:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['4cb91c1c8c0785a00c510c619293b280']), c++;
                    break;
                case 0x17:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['db00fb5765db7563ea3086179f7cf626']), c++;
                    break;
                case 0x18:
                    PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['38dcefa24488e28eed339e663b80ab2d']), c++;
                    break;
                case 0x19:
                    ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
                }
            }();
        },
        'StartGame': a => oMiniGames['ConveyorBelt']([
            oPeashooter,
            oSnowPea,
            oBegonia,
            oBegonia
        ], 0x208, 0x2, [
            oBegonia,
            oBegonia,
            oSnowPea,
            oPeashooter,
            oPeashooter,
            oBegonia,
            oBegonia,
            oSnowPea
        ]['shuffle']())
    }, {
        'AZ': [
            [
                oStrollZombie,
                0x3,
                0x1
            ],
            [
                oSkatingZombie,
                0x2,
                0x8,
                [0x8]
            ]
        ],
        'FlagNum': 0xd,
        'FlagToSumNum': {
            'a1': [
                0x4,
                0x5,
                0x7,
                0x9,
                0xc
            ],
            'a2': [
                0x1,
                0x2,
                0x5,
                0x8,
                0xa,
                0x14
            ]
        },
        'FlagToEnd': function () {
            firstTimePlay ? SelectModal('Polar2-1') : ShowWinItem(GetPlantCardDom(oBegonia));
        }
    });
}