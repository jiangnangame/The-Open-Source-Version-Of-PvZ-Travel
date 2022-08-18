/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PicArr': ['images/interface/writer.webp'],
    'LoadMusic': 'writer' + (0x1 + Math['round'](Math['random']())),
    'backgroundImage': 'images/interface/writer.webp',
    'LoadAccess'() {
        jngTemplate['require']('Writer'), SetVisible($('Writer')), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:\x20absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick'() {
                SelectModal('index', 'Service'), SetHidden($('Writer'));
            }
        }, EDAll);
    }
});