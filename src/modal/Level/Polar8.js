/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oPeashooter,
        oRepeater,
        oPuffShroom,
        oFumeShroom
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie
    ],
    'PicArr': [
        'images/interface/Polar.webp',
        'images/interface/Encirclement_and_annihilation1.webp',
        'images/interface/Encirclement_and_annihilation2.webp'
    ],
    'LevelName': $__language_Array__['7e3a661697829b402897708f065b1ac0'],
    'LoadMusic': 'Bgm_Polar_3_NPC',
    'AudioArr': ['Bgm_Polar_4_NPC'],
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'FixedProps': 'disabled',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'LF': [
        0x0,
        0x3,
        0x3,
        0x3,
        0x3,
        0x3
    ],
    'ZF': [
        0x0,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ],
    'InitLawnMover': () => {
    },
    'LoadAccess': function (a) {
        NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        let b = [
                'images/interface/Encirclement_and_annihilation1.webp',
                'images/interface/Encirclement_and_annihilation2.webp'
            ], c = NewEle(0x0, 'div', 'width:780px;height:535px;position:absolute;z-index:1;background:url(images/interface/Encirclement_and_annihilation2.webp);left:225px;top:65px;', 0x0, $('tGround'));
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1);
        let d = NewEle('', 'video', 'position:absolute;top:0;left:0px;z-index:258;height:600px;opacity:0;filter:invert(100%);', {
                'src': 'images/Props/Marsh12/ghost.webm',
                'autoplay': !![],
                'loop': !![],
                'muted': !![]
            }, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), f = 0x0, g = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), h = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function i() {
            g['onclick'] = i;
            switch (f) {
            case 0x0:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['3fc1eff33bf900cd96989b643f58b38c']), f++;
                break;
            case 0x1:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['30e8c3fb00e548d0458060f7c399e25a']), f++;
                break;
            case 0x2:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['b66057b3cf74a7573264c992b4bc51f7']), f++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['2ef22d07cb4aef53388917e4364fcfd8']), f++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['3736dcc1f31295bf4b927aba88ad5273']), f++;
                break;
            case 0x5:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['24c32fbc4a752659d67482988ad254ac']), f++;
                break;
            case 0x6:
                PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['612e7a1d90d5d70ab57f09ea9de2d9b0']), f++;
                break;
            case 0x7:
                PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['24dc0030b56fd358cb6c6eb3a5395d48']), f++;
                break;
            case 0x8:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['86cf84455365ece6c6e4118f21fdbc2d']), f++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['f5383679d01b8c2ac540a805e403ee74']), f++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['13e9d4d4620ff45b0474ab216392250d']), f++;
                break;
            case 0xb:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['28729d6ed93ad9868d9679dd9cbb35ff']), f++;
                break;
            case 0xc:
                PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['e583df759c5ac30856f536ce369db1b3']), f++;
                break;
            case 0xd:
                g['onclick'] = null, PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['2065fb02c6c2ab4132d06f22479e0468']), oEffects['Animate'](e, { 'background': 'black' }, 'slow', 'linear', () => g['onclick'] = i), f++;
                break;
            case 0xe:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['2b00fdb4770ca34007d287d3afab7805']), f++;
                break;
            case 0xf:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(g, '……'), f++;
                break;
            case 0x10:
                PlayAudio('crazydavelong1'), innerText(g, '……'), f++;
                break;
            case 0x11:
                g['onclick'] = null, PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['92598f10bd2aeaff27f43c2c602495cc']), oEffects['Animate'](e, {
                    'background': 'white',
                    'opacity': 0x0
                }, 'fast', 'linear', () => g['onclick'] = i), f++;
                break;
            case 0x12:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['0eca73fd2834e09d1deb8b81906fc917']), f++;
                break;
            case 0x13:
                h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['85fddc95cd3a1c029ee23353eb42baa6']), f++;
                break;
            case 0x14:
                g['onclick'] = null, PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['dcc5867398160096ea01e672bb7607f1']), oEffects['Animate'](e, {
                    'background': 'black',
                    'opacity': 0x1
                }, 'slow', 'linear', () => g['onclick'] = i), f++;
                break;
            case 0x15:
                PlayAudio('crazydavelong3'), innerText(g, '…'), c['style']['backgroundImage'] = 'url(' + b[0x0] + ')', f++;
                break;
            case 0x16:
                PlayAudio('crazydavelong3'), innerText(g, '……'), f++;
                break;
            case 0x17:
                PlayAudio('crazydavelong2'), innerText(g, $__language_Array__['cf4a2339cfd064d161426f37ae00757f']), g['onclick'] = null, oEffects['AudioFadeOut'](oAudio[oS['LoadMusic']], 0x0, 0x1, () => {
                    oEffects['AudioFadeIn'](oS['LoadMusic'] = 'Bgm_Polar_4_NPC', 0x1, 0.5, () => {
                        g['onclick'] = i;
                    });
                }), f++;
                break;
            case 0x18:
                PlayAudio('crazydavelong1'), g['onclick'] = null, oEffects['Animate'](d, { 'opacity': 0x1 }, 0x3, 'linear', () => g['onclick'] = i), innerText(g, $__language_Array__['a611d59abb97c352099129af0f19d216']);
                for (let j = 0x3e8; j <= 0xbb8; j += 0x5dc) {
                    setTimeout(i, j);
                }
                f++;
                break;
            case 0x19:
                PlayAudio('crazydavelong1'), innerText(g, $__language_Array__['035a5ebd10d3881a2e4d61e86f022629']), f++;
                break;
            case 0x1a:
                PlayAudio('crazydavelong3'), innerText(g, $__language_Array__['00e6bb0d3b1d7734ef170346d3bd0162']), f++;
                break;
            case 0x1b:
                PlayAudio('crazydavelong1'), function k(l = 'rgba(160,0,0,1)') {
                    if (f > 0x1e) {
                        oEffects['Animate'](e, { 'background': 'black' }, 0.3, 'linear', () => {
                        }), oEffects['Animate'](d, { 'opacity': 0x0 }, 0.3, 'linear', ClearChild);
                        return;
                    }
                    oEffects['Animate'](e, { 'background': l }, 0.3, 'linear', () => {
                        oSym['addTask'](0x1, k, [l == 'black' ? 'rgba(160,0,0,1)' : 'black']);
                    });
                }(), innerText(g, $__language_Array__['95a9b034cf82e1cbb87d1dd81d98f685']), f++;
                break;
            case 0x1c:
                h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['06d8bdf4c761ae1312291ed8e870e725']), f++;
                break;
            case 0x1d:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['ab560722f2c4bb9f69de9ae1f51e6e77']), f++;
                break;
            case 0x1e:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['f14f297aa83adb8ab22d499b5ca5af2e']), f++;
                break;
            case 0x1f:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['fd4509f92f485623e029bbc2a9a002d8']), f++;
                break;
            case 0x20:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['8b83b0bd5f88892a91dcb616415899b9']), f++;
                break;
            case 0x21:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, '…'), f++;
                break;
            case 0x22:
                ClearChild(g, h), oEffects['fadeOut'](e, 'slow', l => {
                    ClearChild(l), a();
                });
            }
        }());
    },
    'StartGame': function () {
        for (let a = 0x1; a < 0x3; a++) {
            for (let b = 0x2; b < 0x6; b++) {
                CustomSpecial(oInvisibleFlowerPot, b, a);
            }
        }
        for (let c = 0x2; c < 0x6; c++) {
            CustomSpecial(oInvisibleFlowerPot, c, 0x9);
        }
        CustomSpecial(oInvisibleFlowerPot, 0x1, 0x4), CustomSpecial(oInvisibleFlowerPot, 0x1, 0x5), CustomSpecial(oInvisibleFlowerPot, 0x4, 0x6), CustomSpecial(oInvisibleFlowerPot, 0x4, 0x7), CustomSpecial(oInvisibleFlowerPot, 0x5, 0x4), CustomSpecial(oInvisibleFlowerPot, 0x5, 0x3), CustomSpecial(oGoDown, 0x1, 0x6), CustomSpecial(oGoLeft, 0x2, 0x6), CustomSpecial(oGoDown, 0x2, 0x4), CustomSpecial(oGoRight, 0x3, 0x4), CustomSpecial(oGoUpFixed, 0x3, 0x7), CustomSpecial(oGoRightFixed, 0x2, 0x7), CustomSpecial(oGoDownFixed, 0x2, 0x8), CustomSpecial(oGoLeftFixed, 0x5, 0x8), CustomSpecial(oGoUp, 0x5, 0x5), CustomSpecial(oGoLeft, 0x4, 0x5), CustomSpecial(oGoUp, 0x4, 0x3), CustomSpecial(oGoLeft, 0x1, 0x3);
        for (let d = 0x1; d <= 0x5; d++) {
            for (let e = 0x1; e < 0xa; e++) {
                let f = !![];
                for (let g = 0x0; g <= PKindUpperLimit; g++) {
                    if (oGd['$'][d + '_' + e + '_' + g]) {
                        f = ![];
                        break;
                    }
                }
                f && CustomSpecial(oObstacle, d, e);
            }
        }
        oMiniGames['ConveyorBelt']([
            oPuffShroom,
            oPuffShroom,
            oPuffShroom,
            oPuffShroom,
            oPeashooter,
            oPeashooter,
            oRepeater,
            oRepeater,
            oFumeShroom
        ], 0x708, undefined, [oFumeShroom]);
    }
}, {
    'AZ': [
        [
            oZombie,
            0x4,
            0x1,
            [0x1]
        ],
        [
            oConeheadZombie,
            0x3,
            0x1,
            [0x1]
        ],
        [
            oBucketheadZombie,
            0x2,
            0x1
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
            0x2,
            0x4,
            0xa,
            0x10,
            0x12,
            0x14
        ]
    },
    'FlagToEnd'() {
        setTimeout(function () {
            SelectModal('Polar8-1');
        }, 0x3e8);
    }
});