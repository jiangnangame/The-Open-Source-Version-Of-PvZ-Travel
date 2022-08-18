/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oNutBowling,
        oBoomNutBowling,
        oBigWallNut
    ],
    'ZName': [
        oSculpture,
        oSculptorZombie,
        oStrollZombie,
        oCaskZombie,
        oSadakoZombie,
        oPushIceImp,
        oBeetleCarZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['56a2fb49824b9e95bf70fe5751e3cccf'],
    'HaveFog': {
        'leftBorder': 0x4,
        'type': 'Fog'
    },
    'StartGameMusic': 'Bgm_Industry_Fight_Challenge_2',
    'StaticCard': 0x0,
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll), NewEle(0x0, 'div', 'left:' + (0x179 - 0x50) + 'px;', { 'className': 'FlowerBed' }, FightingScene);
        for (let f = 0x4; f < 0x6; f++) {
            for (let g = 0x1; g < 0x6; g++)
                PlaceZombie(oSculpture, g, f);
        }
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function h() {
            d['onclick'] = h;
            switch (c) {
            case 0x0:
                d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['3b38af59a7c79aa199c65f75d36a7a2b']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = h), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['6bdff828f8522e136a80e28f234db442']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['9bbb273dfdc3bae349135ee40710031f']), c++;
                break;
            case 0x3:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['9393b8e672c3a53fc1da1cdbf20802ab']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['9eb3b0946c1912fcb9f14c42b8489d32']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['b42bafadce2bd8243f3638b1d7a8c8d6']), c++;
                break;
            case 0x6:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['0aabe8870cbf575248e66b3ce39af763']), c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['e197cbdc08d6eb43dc1c1de2fde0d16c']), c++;
                break;
            case 0x8:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['a9bef2b23ebf42b10dae73e795347b33']), c++;
                break;
            case 0x9:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, '......'), c++;
                break;
            case 0xa:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['a1d593d8a48a60b38998e62041e53732']), c++;
                break;
            case 0xb:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['dea3f27d8b0d46a0acb055535c7d37cb']), c++;
                break;
            case 0xc:
                d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['e67cd6178df2d047eee4c0a3dee1806c']), oEffects['fadeOut'](b, 'slow', () => d['onclick'] = h), c++;
                break;
            case 0xd:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['784ea669ad66d0f191eff8e51c899c93']), c++;
                break;
            case 0xe:
                ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'StartGame': a => {
        oMiniGames['RainWithSeeds'](void 0x0, 0x190, 0x4, [
            oNutBowling,
            oBoomNutBowling
        ]);
    }
}, {
    'AZ': [
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oSadakoZombie,
            0x1,
            0x5
        ],
        [
            oCaskZombie,
            0x1,
            0x1
        ],
        [
            oSculptorZombie,
            0x1,
            0x1
        ],
        [
            oPushIceImp,
            0x1,
            0x5
        ],
        [
            oBeetleCarZombie,
            0x1,
            0x7
        ],
        [
            oZomboni,
            0x1,
            0x7
        ]
    ],
    'FlagNum': 0xc,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x5,
            0x7,
            0xa
        ],
        'a2': [
            0x3,
            0xf,
            0x3b,
            0x46,
            0x80
        ]
    }
}, {
    'GrowPlant'(a, b, c, d, e) {
        const f = () => {
            let k = ArCard['length'];
            while (k--) {
                if (ArCard[k] === oS['ChoseCardObj'])
                    return k;
            }
        };
        if (e >= 0x3)
            return PlaySubtitle($__language_Array__['ab6ca2c596155952786bff661291cf23']), CancelPlant(), ![];
        let g = oS['ChoseCardObj'], h = g['PName'], i = h['prototype'], j = g['DID'];
        i['CanGrow'](a, d, e) && (PlayAudio('plant' + Math['floor'](0x1 + Math['random']() * 0x2)), new h()['Birth'](b, c, d, e, a), oSym['addTask'](0x14, SetHidden, [SetStyle($('imgGrowSoil'), {
                'left': b - 0x1e + 'px',
                'top': c - 0x1e + 'px',
                'zIndex': 0x3 * d + 0x1,
                'visibility': 'visible'
            })]), ArCard['splice'](f(), 0x1), delete oS['ChoseCardObj'], oS['Chose'] = 0x0, GroundOnmousemove = () => {
        }, ClearChild($('MovePlant'), $('MovePlantAlpha'), g['Ele']), !Mobile && CancelPlant()), Mobile && CancelPlant();
    }
});