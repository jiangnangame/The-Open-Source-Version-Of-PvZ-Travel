/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [
            b + 'lab1.webp',
            b + 'lab2.webp',
            b + 'lab3.webp'
        ];
    }()),
    'LoadMusic': 'diary',
    'backgroundImage': 'images/interface/lab1.webp',
    'LoadAccess'() {
        loadRes({
            'img': [
                'images/interface/background1.webp',
                'images/interface/Introduction.webp'
            ]
        }), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:\x20absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick': labMap['close']
        }, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'left:80px;top:1px;z-index:258;position:\x20absolute;', {
            'className': 'jngButton\x20Describe',
            'onclick': function () {
                ClickRules('sy');
            }
        }, EDAll), labMap['init'](), labMap['open']();
    }
});