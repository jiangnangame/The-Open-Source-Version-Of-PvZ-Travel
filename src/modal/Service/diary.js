/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PicArr': (b => [
        b + 'Diary1.webp',
        b + 'Diary2.webp',
        b + 'Diary3.webp',
        b + 'back.webp',
        b + 'first.webp',
        b + 'front.webp',
        b + 'left.webp',
        b + 'right.webp'
    ])('frame/pages/'),
    'LoadMusic': 'diary',
    'backgroundImage': 'images/interface/PolarSelection1.webp',
    'LoadAccess': function () {
        jngTemplate['require']('Diary'), SetVisible($('Diary')), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:\x20absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick'() {
                SelectModal('index', 'Service'), SetHidden($('Diary'));
            }
        }, EDAll);
        let b = '../frame/pages/';
        loadRes({
            'img': ((() => {
                let c = [];
                for (let d = 0x4; d <= 0x15; d++) {
                    c['push']('frame/pages/Diary' + d + '.webp');
                }
                return c;
            })())
        });
    }
});