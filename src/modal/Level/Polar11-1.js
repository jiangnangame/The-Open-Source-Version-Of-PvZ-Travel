/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/', c = [];
        for (let d = 0x1; d <= 0x6; d++) {
            c['push'](b + 'PolarSelection' + d + '.webp');
        }
        return c['concat']([b + 'Polar.webp']);
    }()),
    'LoadMusic': 'Bgm_Polar_Noise',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'AudioArr': ['Bgm_Polar_11_NPC_3'],
    'backgroundImage': 'images/interface/Polar.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let c = 'images/interface/PolarSelection', d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;opacity:1;left:115px;', 0x0, EDAll);
        for (let q = 0x1; q <= 0x6; q++) {
            NewEle('', 'div', 'position:absolute;width:900px;height:600px;left:' + (q - 0x1) * 0x384 + 'px;top:0;background:url(' + (c + q) + '.webp);', 0x0, d);
        }
        let e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0.5;left:115px;', 0x0, EDAll), f = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;left:115px;', 0x0, EDAll), g = 0x0, h = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), j = NewImg('dDave', '', 'left:115px;top:81px', EDAll), k = ![], l = 0x73;
        function m() {
            k = !![], function r() {
                d['style']['left'] = l + 'px', l -= 0x1;
                if (l < 0x73 - 0x5 * 0x384) {
                    k = ![], oEffects['fadeIn'](e, 0x3);
                    return;
                }
                k && oSym['addTask'](0x2, r);
            }();
        }
        (function r() {
            h['onclick'] = r;
            switch (g) {
            case 0x0:
                j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['c58882ea9a2458ee763c39c28fd9d514']), g++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['161d03bb9a0444cf3196ad6f815c2e2c']), g++;
                break;
            case 0x2:
                j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, '……'), g++;
                break;
            case 0x3:
                j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['d527bceeb7923c4cb55d7e7a2a1943d0']), g++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['da059a8001b4acab45e7f2cd74925e64']), g++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['4bf9714d59ed68ddd548ead71e0dc62b']), g++;
                break;
            case 0x6:
                j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['6a3e97fdcec518190b57002ced5323f6']), g++;
                break;
            case 0x7:
                PlayAudio('Zomboss2'), innerText(h, $__language_Array__['061cc86ccf268be9423dba7dc2df1385']), g++;
                break;
            case 0x8:
                j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['152fd14b09be14021b19c1e06313ee18']), g++;
                break;
            case 0x9:
                j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_11_NPC_3'), innerText(h, $__language_Array__['98d6500f4d1a1a23c2571c411764acd7']), g++;
                break;
            case 0xa:
                localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '1') || !localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '4') && localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '8') ? o() : p();
            }
        }());
        function n() {
            NewEle('DivA', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:00;left:115px;', 0x0, EDAll), ShowWinItem(GetPlantCardDom(oMonotropa, EDAll, null, {
                'onclick': function () {
                    GetNewCard(this, oMonotropa, 'Polar12');
                }
            }));
        }
        function o() {
            g = 0x0, function s() {
                h['onclick'] = s;
                switch (g) {
                case 0x0:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['39e0f129780c8dde2d904e800460c789']), g++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['8bf3f04293cfe5a5aded4b4597b803e8']), g++;
                    break;
                case 0x2:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['6e3364e1798b7d1abf521c504faeec1b']), g++;
                    break;
                case 0x3:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['426792eb5d66b4dc5ac4bf11670328a5']), g++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['b6ab8938d48414d6163746ab5da006b0']), g++;
                    break;
                case 0x5:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['3dac61b4e5531442d667f838e33dd1aa']), g++;
                    break;
                case 0x6:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['1710ecb6ef0160eff5ebe56fcef12630']), g++;
                    break;
                case 0x7:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['691158ab856eb48c894dc9ed98864de9']), g++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss2'), innerText(h, $__language_Array__['583920068f91f6934127683cef15152b']), g++;
                    break;
                case 0x9:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, '……'), g++;
                    break;
                case 0xa:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['62eacff9ddf041f87b402bd47b1f7062']), g++;
                    break;
                case 0xb:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['2bdcfe3c82f255f003961705c36a622f']), g++;
                    break;
                case 0xc:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(h, $__language_Array__['057a65e605c0a62a7fbe97cd375aee3d']), g++;
                    break;
                case 0xd:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['889230aced4c5fa89676c549656fb776']), g++;
                    break;
                case 0xe:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['054782fb71b182074559edd1a179b913']), g++;
                    break;
                case 0xf:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['8489791c0ee014fb43f1488266af02fa']), g++;
                    break;
                case 0x10:
                    ClearChild(h, j), oEffects['fadeOut'](f, 'slow', t => {
                        ClearChild(t), n();
                    });
                }
            }();
        }
        function p() {
            g = 0x0, function s() {
                h['onclick'] = s;
                switch (g) {
                case 0x0:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(h, $__language_Array__['9088c80482c9d2812b0d47f556ce7619']), g++;
                    break;
                case 0x1:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['479e64f626fdd0f52d6596fec9f272e7']), g++;
                    break;
                case 0x2:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(h, $__language_Array__['a531cb342ec94852766317ebe2c1bd7a']), g++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss2'), h['onclick'] = null, oEffects['fadeOut'](f, 'slow', () => {
                        h['onclick'] = s;
                    }), m(), innerText(h, $__language_Array__['5a0bc6f0e78cf792bcbebfbc4c3da5c8']), g++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['bd56fb4b612496a80413e9d689d4d4ad']), g++;
                    break;
                case 0x5:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['e8dbe2b555e34ac40fb96e3f7e55b06a']), g++;
                    break;
                case 0x6:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['a2e34c2207a75cfa93bb51d889f463db']), g++;
                    break;
                case 0x7:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['12819af23dabdbb126797a178cb91b59']), g++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['2392a2494e40955c68f7d511906c2e10']), g++;
                    break;
                case 0x9:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['f4dd3a77061791ec00f5133c8c86b371']), g++;
                    break;
                case 0xa:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['d40cd663d5842f980315b2c8cf8090e6']), g++;
                    break;
                case 0xb:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['2015764bbc31b611e32993becee2c68d']), g++;
                    break;
                case 0xc:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['14542c0c40bedefd5ab0ae04bea34697']), g++;
                    break;
                case 0xd:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['88e2d65496feb5494215354d9f1cd7c1']), g++;
                    break;
                case 0xe:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['f60a8104ce5d042a8d70fcb2614cdf17']), g++;
                    break;
                case 0xf:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['6558ba6ca3cd720b98e0d4e47d1345f3']), g++;
                    break;
                case 0x10:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['7761f5a73c604160b5d51c822ccd3ac2']), g++;
                    break;
                case 0x11:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['6b05750c07a6f0b862ad01bede960b27']), g++;
                    break;
                case 0x12:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['c2c1867bacf843220c1a03e096824422']), g++;
                    break;
                case 0x13:
                    PlayAudio('Zomboss2'), innerText(h, $__language_Array__['80498a3182b0e9f8b4926c9bdc58523b']), g++;
                    break;
                case 0x14:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['f02141ec6ae62031bafe0e0bc0d61645']), g++;
                    break;
                case 0x15:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(h, $__language_Array__['cd4a812d8420a54eca1fc4beb8873c28']), g++;
                    break;
                case 0x16:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['b75a2f9b9211b2d3fc2e3532e180cdee']), g++;
                    break;
                case 0x17:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['6c438c21867c990c0592e6ea50b010b9']), g++;
                    break;
                case 0x18:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['934019f046063e7b5022286257d1fc32']), g++;
                    break;
                case 0x19:
                    PlayAudio('Zomboss2'), innerText(h, $__language_Array__['44ad6a21eb43acc61df31c4dfbc549d2']), g++;
                    break;
                case 0x1a:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['3dad8cf28a87fd0ebd2abe245c6d1fd9']), g++;
                    break;
                case 0x1b:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['67e48aee56d3b03c64f965c9709ed8d9']), g++;
                    break;
                case 0x1c:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['a67212d574ca2d19a0b9a9bcb38e53f6']), g++;
                    break;
                case 0x1d:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['a3f7791ebd75084acd889b38bdd6820d']), g++;
                    break;
                case 0x1e:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['26d05ead40c0f76ef7ecaaba3d8c24a8']), g++;
                    break;
                case 0x1f:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['8489791c0ee014fb43f1488266af02fa']), g++;
                    break;
                case 0x20:
                    ClearChild(h, j), k = ![], ClearChild(f), n();
                }
            }();
        }
    }
});