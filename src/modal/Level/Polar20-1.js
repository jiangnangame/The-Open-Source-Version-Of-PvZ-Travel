/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'LoadMusic': 'Bgm_Polar_Ready_2',
    'DKind': 0x0,
    'LoadAccess'() {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewEle(0x0, 'div', 'transform:\x20scale(0.9);width:\x20563px;height:\x20616px;position:\x20absolute;left:\x2012%;background:url(images/interface/PolarClue2.webp);', 0x0, $('tGround')), NewEle('jngButton' + Math['random'](), 'a', 'left:780px;top:540px;z-index:258;position:absolute;', {
            'className': 'voidButton\x20oneLineVoidButton\x20jngButton',
            'onclick': e => SelectModal(NextLevel()),
            'innerText': oButtons['GetName']('continue')
        }, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick'() {
                SelectModal($__language_Array__['9066d61978f4299e3cfb008698bf2436']);
            }
        }, EDAll);
        let a = 0x0, b = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), c = NewImg('dDave', 'images/interface/Zomboss.png', 'left:0;top:81px', EDAll);
        (function e() {
            switch (a) {
            case 0x0:
                b['onclick'] = e, PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['25c1f96eb7f55f0b45906e800a8e566e']), a++;
                break;
            case 0x1:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['d2db503dd0de6aea19f698188f0b5922']), a++;
                break;
            case 0x2:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['4bdd73b86e388377f37e3bf64cea2ffb']), a++;
                break;
            case 0x3:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['2eba836a66d2cae876dae4e14eadf8d8']), a++;
                break;
            case 0x4:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['302776c1e95ad3bd9366e87be20a4a5f']), a++;
                break;
            case 0x5:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['6ee6e4a7d40e16818ae70df11bdc0bf4']), a++;
                break;
            case 0x6:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['417fc05de98a6f30905542f26d6536cf']), a++;
                break;
            case 0x7:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['03304918b165e8e23afc7576f40538de']), a++;
                break;
            case 0x8:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['5a3815129fbc353d77f94afa6eaa965f']), a++;
                break;
            case 0x9:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['320f234ceb7feddb99bc833d205bd70d']), a++;
                break;
            case 0xa:
                ClearChild(b, c);
            }
        }());
    }
});