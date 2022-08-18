/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let ids = [];
    oS['Init']({
        'PicArr': [
            'Industry.webp',
            'IndustryClue1_1.webp',
            'IndustryClue1_2.webp',
            'IndustryClue1_3.webp'
        ]['map'](a => 'images/interface/' + a),
        'PName': [
            oSnowPea,
            oIceAloe,
            oShiitake,
            oPlantern,
            oBlover,
            oSpikeweed
        ],
        'ZName': [
            oSadakoZombie,
            oConeheadZombie,
            oCigarZombie,
            oSculptorZombie,
            oStrollZombie,
            oNewspaperZombie,
            oCaskZombie,
            oFootballZombie,
            oBucketheadZombie,
            oBeetleCarZombie,
            oSculpture
        ],
        'LevelName': $__language_Array__['a90cc6f7fa2279690cec95a6c45c0b2c'],
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_1',
        'CanSelectCard': 0x0,
        'StaticCard': 0x0,
        'HaveFog': {
            'leftBorder': 0x3,
            'type': 'strongFog'
        },
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f <= 0x5; f += 0x2) {
                ids['push'](CustomSpecial(oShiitake, f, 0x5)['id']), NewEle(0x0, 'div', 'left:570px;top:' + (0x50 + (f - 0x1) * 0x64) + 'px;', { 'className': 'sos' }, $('tGround'));
            }
            CustomSpecial(oZombieComeOnObs, 0x2, 0x6), CustomSpecial(oZombieComeOnObs, 0x4, 0x6);
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll), e = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
            (function g() {
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Zomboss.png', oEffects['fadeIn'](e, 'slow', () => c['onclick'] = g), PlayAudio('Zomboss1'), innerText(c, $__language_Array__['59011d971856101ab4595cbd58e11377']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['aaffab37081d0ae55fc55b432fcf53c8']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['470e73d46e0efaf4c7786897c33c4fee']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['d33968c7b116d45769b859e1a91188e1']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['2ebc65ddfc2a630695e12f571e778931']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['c11e1b4db6396500cc33551414ed458a']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['10ee24b5d44dc2e1e8633ddda04067fb']), b++;
                    break;
                case 0x7:
                    ClearChild(c, d), oEffects['fadeOut'](e, 'slow', h => {
                        ClearChild(h), a();
                    });
                }
            }());
        },
        'StartGame'() {
            let a = 'oShiitake', b = 0x3, c = new Set([
                    '1_5',
                    '3_5',
                    '5_5'
                ]);
            addEventListenerRecord('jng-event-startgame', () => {
                (function d() {
                    let e = 0x0;
                    for (let f of $P)
                        f['EName'] === a && c['has'](f['R'] + '_' + f['C']) && f['id'] === ids[e] && ++e;
                    if (e !== b)
                        return console['log']($P, c, ids), toOver(0x2);
                    oSym['addTask'](0xc8, d);
                }());
            }, { 'once': !![] }), oMiniGames['ConveyorBelt'](void 0x0, 0x1c2, 0x4, [
                oBlover,
                oShiitake
            ]);
        }
    }, {
        'AZ': [
            [
                oSadakoZombie,
                0x1,
                0x1,
                [
                    0x1,
                    0x2,
                    0x3
                ]
            ],
            [
                oConeheadZombie,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oCigarZombie,
                0x1,
                0x1,
                [
                    0x5,
                    0xa,
                    0x14,
                    0x15,
                    0x16,
                    0x17,
                    0x18,
                    0x19
                ]
            ],
            [
                oSculptorZombie,
                0x2,
                0x2,
                [
                    0x2,
                    0x3,
                    0xa,
                    0x14,
                    0x15,
                    0x16,
                    0x17,
                    0x18,
                    0x19
                ]
            ],
            [
                oStrollZombie,
                0x1,
                0xa
            ],
            [
                oNewspaperZombie,
                0x1,
                0xa
            ],
            [
                oCaskZombie,
                0x1,
                0xa
            ],
            [
                oFootballZombie,
                0x3,
                0xa,
                [
                    0xa,
                    0x14,
                    0x15,
                    0x16,
                    0x17,
                    0x18,
                    0x19
                ]
            ],
            [
                oBucketheadZombie,
                0x3,
                0xa,
                [
                    0xa,
                    0x14,
                    0x15,
                    0x16,
                    0x17,
                    0x18,
                    0x19
                ]
            ],
            [
                oBeetleCarZombie,
                0x2,
                0x14,
                [
                    0x14,
                    0x15,
                    0x16,
                    0x17,
                    0x18,
                    0x19
                ]
            ]
        ],
        'FlagNum': 0x19,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x3,
                0x5,
                0x8,
                0x9,
                0xa,
                0xd,
                0xf,
                0x11,
                0x13,
                0x16,
                0x18,
                0x19
            ],
            'a2': [
                0x6,
                0x3,
                0x8,
                0xc,
                0x12,
                0x14,
                0x18,
                0x1c,
                0x1e,
                0x23,
                0x1b,
                0x20,
                0x40
            ]
        },
        async 'FlagToEnd'() {
            const a = ({
                ele: f,
                properties: g,
                duration: h,
                ease: i,
                delay: j
            }) => new Promise(k => oEffects['Animate'](f, g, h, i, k, j));
            await a({
                'ele': NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;left:115px;', 0x0, EDAll),
                'properties': { 'opacity': '1' }
            });
            const b = NewEle('picture', 'div', 'position:absolute;background:\x20url(images/interface/IndustryClue1_1.webp)no-repeat;z-index:258;opacity:0;transform:scale(0.95);width:\x20900px;height:600px;left:180px;top:120px', 0x0, EDAll);
            await a({
                'ele': b,
                'properties': {
                    'opacity': 0x1,
                    'top': '100px'
                },
                'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
            });
            const c = NewEle('textbox', 'p', 'z-index:\x20259;position:\x20absolute;background:\x20linear-gradient(to\x20right,rgb(0,\x200,\x200,\x200)\x206%,\x20#000\x2030%,\x20rgb(0,\x200,\x200,\x200)\x20100%);width:\x20362px;height:\x20162px;left:\x20600px;top:\x20375px;color:\x20rgb(255\x20255\x20255);opacity:\x200;padding:\x2010px\x2030px;font-size:\x2026px;cursor:\x20pointer;', { 'innerText': $__language_Array__['8212b1a1ea045daa4ba02e0a1b0bdfa1'] }, EDAll);
            await a({
                'ele': c,
                'properties': {
                    'opacity': 0x1,
                    'top': '360px'
                },
                'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
            });
            const d = [
                    { 'text': $__language_Array__['c87e1e47aac9cdda0dadf8834d816025'] },
                    {
                        'pic': 'IndustryClue1_2',
                        'text': $__language_Array__['4b9a5140cc6709938d5622fbec35b6ac']
                    },
                    { 'text': 'This\x20kind\x20of\x20ordinary\x20thing\x20seems\x20to\x20be\x20the\x20easiest\x20to\x20achieve……' },
                    {
                        'pic': 'IndustryClue1_3',
                        'text': $__language_Array__['be8e75174fa9bf12f9755d75e94baf04']
                    }
                ][Symbol['iterator']](), e = GetPlantCardDom(oShiitake, EDAll, 'left:667px;top:300px;opacity:0;z-index:261;cursor:\x20pointer;');
            c['onclick'] = async () => {
                let {
                    value: f,
                    done: g
                } = d['next']();
                if (g)
                    c['onclick'] = null, c['style']['cursor'] = 'auto', await a({
                        'ele': c,
                        'properties': {
                            'top': '360px',
                            'opacity': '0'
                        },
                        'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                        'delay': 0.3
                    }), await a({
                        'ele': b,
                        'properties': {
                            'top': '40px',
                            'opacity': '0'
                        },
                        'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)',
                        'delay': 0.5
                    }), await a({
                        'ele': e,
                        'properties': {
                            'top': '330px',
                            'opacity': '1'
                        },
                        'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)',
                        'delay': 0.5
                    }), $('DivA')['style']['z-index'] = 0x104;
                else {
                    let {
                        text: h,
                        pic: i
                    } = f;
                    c['innerText'] = h, i && (b['style']['background'] = 'url(images/interface/' + i + '.webp)\x20no-repeat');
                }
            };
        }
    });
}