/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'LoadMusic': 'Bgm_Polar_Ready_2',
    'DKind': 0x0,
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewEle(0x0, 'div', 'width:\x20671px;height:\x20597px;position:\x20absolute;left:\x2010%;background:url(images/interface/PolarClue1.webp)', 0x0, $('tGround')), NewEle('jngButton' + Math['random'](), 'a', 'left:780px;top:540px;z-index:258;position:absolute;', {
            'className': 'voidButton\x20oneLineVoidButton\x20jngButton',
            'onclick'() {
                SelectModal(NextLevel());
            },
            'innerText': oButtons['GetName']('continue')
        }, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick': () => Exitlevel()
        }, EDAll);
        let c = 0x0, e = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), f = NewImg('dDave', 'images/interface/Dave.png', 'left:0;top:81px', EDAll);
        (function g() {
            switch (c) {
            case 0x0:
                e['onclick'] = g, PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['819ffcb30515bdec12a073d89da2d059']), c++;
                break;
            case 0x1:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['0196ac61d61c535a4493f900d6fcfee6']), c++;
                break;
            case 0x2:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['fa1334b3a1a24c25a0b071d58ebe190d']), c++;
                break;
            case 0x3:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['c6a816f7236a57b71c9b2f475820ff97']), c++;
                break;
            case 0x4:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['247101f16808767d9682b24fb7fbc21c']), c++;
                break;
            case 0x5:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['247ab62f2500aba612bb1e85cf596632']), c++;
                break;
            case 0x6:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['db9f18c08e0a41543ac4d3c69a5147a7']), c++;
                break;
            case 0x7:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['09924c09e52139d66294cd5cd3e3101a']), c++;
                break;
            case 0x8:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(e, $__language_Array__['fcf3da7b675a983f5e19ce940621d722']), c++;
                break;
            case 0x9:
                ClearChild(e, f);
            }
        }());
    }
});