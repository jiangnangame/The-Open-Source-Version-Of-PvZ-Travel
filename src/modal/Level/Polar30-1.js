/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [b + 'Polar2.webp'];
    }()),
    'LoadMusic': 'Bgm_Marsh_Plot',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LoadAccess': function (b) {
        let c = Math['random']() * 0x64;
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#fff;opacity:1;left:115px;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(255,255,255,0);opacity:1;left:115px;', 0x0, EDAll), f = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:black;text-align:center;line-height:600px;z-index:257;width:900px;left:115px;height:600px;opacity:0;', 0x0, EDAll);
        oEffects['Animate'](e, { 'background': 'rgba(255,255,255,1)' }, 'slow', 'linear', () => {
            f['innerText'] = $__language_Array__['3e3fba9180099248993dda11e235365a'], oEffects['fadeIn'](f, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['Animate'](e, { 'background': 'rgba(255,255,255,0)' }, 0x2), oEffects['fadeOut'](f, 0x2, () => {
                        f['style']['display'] = e['style']['display'] = 'none', g();
                    });
                });
            });
        });
        function g() {
            let i = 0x0, j = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), k = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function l() {
                j['onclick'] = l;
                switch (i) {
                case 0x0:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), j['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['fbf6f6182f35b7b38f43e2a66070c60d'],
                        'font_size': 0x12
                    })[0x0] + '</p>', i++;
                    break;
                case 0x1:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), j['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['9d11509d9b7cca9372ea1ebd13018040'],
                        'font_size': 0x12
                    })[0x0] + '</p>', i++;
                    break;
                case 0x2:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), j['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['9a2769ac076369c0a65d2a58160482b3'],
                        'font_size': 0x12
                    })[0x0] + '</p>', i++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['0702369861cf6e9e2d8973fffda868ef']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, '……'), i++;
                    break;
                case 0x5:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['5835c498ec9ef9771c80f5432cca1d43']), i++;
                    break;
                case 0x6:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['717e998777922ac0d79d1aca49eb2303']), i++;
                    break;
                case 0x7:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['d8b3efa8ca50c701f99e25ade23f9f04']), i++;
                    break;
                case 0x8:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['c97d10bac5f63addfc323d01ee271495']), i++;
                    break;
                case 0x9:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['154bd0946f2ce8678f6edecb08556021']), i++;
                    break;
                case 0xa:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['e156c39727cb1dad76667c4f610a2a91']), i++;
                    break;
                case 0xb:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['6884b57078b6df931956fa4db49d1dc3']), i++;
                    break;
                case 0xc:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), j['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['263d9985874e6de89adc585b58566197'],
                        'font_size': 0x12
                    })[0x0] + '</p>', i++;
                    break;
                case 0xd:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['aae0a26dcc7b87e11760a44b580b289a']), i++;
                    break;
                case 0xe:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, '……'), i++;
                    break;
                case 0xf:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['10d3b23cfd02c432dd39f8ed8de85675']), i++;
                    break;
                case 0x10:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['c8094d61be731b925aaf48e7dcfa0003']), i++;
                    break;
                case 0x11:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['94f773f2bb5af463e24aea9c7d288618']), i++;
                    break;
                case 0x12:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['01bfd362aa43ec1d15790327f4d1038a']), i++;
                    break;
                case 0x13:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['b7c3db96fecd7116ba91b220e1ac533a']), i++;
                    break;
                case 0x14:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['89966c1343d00c595d877c7863b0b580']), i++;
                    break;
                case 0x15:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['4b7fc565775bbfe9f6b636f86e72de61']), i++;
                    break;
                case 0x16:
                    j['onclick'] = null, PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['a26a6557e6e80d9fcc1eb52c5d06761c']), oEffects['fadeOut'](d, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x17:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['f4439708e9f8e2f298543ab5b17d26c3']), i++;
                    break;
                case 0x18:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['6cf0e4d751aa8152f2dd2719f361513a']), i++;
                    break;
                case 0x19:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['39e9d0995defb0ffea9709fa793959cc']), i++;
                    break;
                case 0x1a:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['deccf984f75da43729ccff07603723ee']), i++;
                    break;
                case 0x1b:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['b6150ff6ea1fdf47e4b6c05e9ae37efb']);
                    c >= 0x1e ? i = 0x1f : i++;
                    break;
                case 0x1c:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['fb373ba52357e7531436114c656663ec']), i++;
                    break;
                case 0x1d:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['0d8312e1879efd10d4e79e31147a71ff']), i++;
                    break;
                case 0x1e:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(j, $__language_Array__['2a0396722339629d658a472feba5a7ba']), i++;
                    break;
                case 0x1f:
                    ClearChild(j, k), ClearChild(d), oSym['addTask'](0x1e, h);
                }
            }());
        }
        function h() {
            NewEle('DivA', 'div', 'position:absolute;width:900px;height:600px;background:#FFF;opacity:0;z-index:257;left:115px;', 0x0, EDAll), c < 0x50 ? ShowWinItem(NewImg('imgSF', 'images/interface/Clearance_reward.png', 'left:400px;top:233px;width:116px;height:119px;', EDAll, {
                'onclick': function () {
                    c >= 0x1e ? GetWin(this, NextLevel()) : GetWin(this, 'Polar30_Bonus_Level');
                }
            })) : ShowWinItem(NewImg('imgSF', 'images/Props/Clues/DontTouchButton.webp', 'left:400px;top:233px;width:178px;height:119px;', EDAll, {
                'onclick': function (i) {
                    c < 0x5a ? GetNewProp(i['target'], 'images/Props/Clues/Coffee.webp', $__language_Array__['a8ee2acd2e4b51af9b9a63e28b3c8c94'], $__language_Array__['22d72e1192d5a8a867cf63a765554bcb'], 'Polar_SelectionMap_6', '30%', '40%') : GetNewProp(i['target'], 'images/Props/Clues/RedandBlue.webp', $__language_Array__['7335db1b28d52f57ff36f7b38dc0e366'], $__language_Array__['57d30127af0ef4ac3403b263d7d5b5d0'], 'Polar_SelectionMap_6', '30%', '40%');
                }
            }));
        }
    }
});