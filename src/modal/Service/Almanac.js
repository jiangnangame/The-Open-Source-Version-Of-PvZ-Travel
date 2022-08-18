/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
!sessionStorage['PVZTR_Almanac_Page'] ? oS['Init']({
    'LoadMusic': 'diary',
    'backgroundImage': 'images/interface/Almanac_Select_Background.webp',
    'LoadAccess': function () {
        let a = NewImg('', 'images/Plants/SunFlower/idle.webp', 'position:absolute;top:300px;left:200px;', EDAll), b = NewImg('', 'images/Zombies/Zombie/1.webp', 'position:absolute;top:220px;left:550px;', EDAll);
        NewEle('', 'span', 'position:absolute;left:\x2075px;text-align:center;width:330px;top:\x20170px;font-size:30px;line-height:30px;color:white;', { 'innerText': $__language_Array__['ab189857516b3064986a1f3e3143f5a2'] }, EDAll), NewEle('', 'span', 'position:absolute;right:\x2075px;text-align:center;width:330px;top:\x20170px;font-size:30px;line-height:30px;color:white;', { 'innerText': $__language_Array__['b42840a21e03a770e61e1c384411ec0d'] }, EDAll), NewEle('', 'div', 'position:absolute;left:75px;top:150px;width:330px;height:300px;cursor:pointer;', {
            'onmouseenter'() {
                a['style']['filter'] = 'brightness(110%)';
            },
            'onmouseleave'() {
                a['style']['filter'] = '';
            },
            'onclick'() {
                sessionStorage['PVZTR_Almanac_Page'] = 'Plant', SelectModal(oS['Lvl'], 'Service');
            }
        }, EDAll), NewEle('', 'div', 'position:absolute;right:75px;top:150px;width:330px;height:300px;cursor:pointer;', {
            'onmouseenter'() {
                b['style']['filter'] = 'brightness(110%)';
            },
            'onmouseleave'() {
                b['style']['filter'] = '';
            },
            'onclick'() {
                sessionStorage['PVZTR_Almanac_Page'] = 'Zombie', SelectModal(oS['Lvl'], 'Service');
            }
        }, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'right:1px;top:1px;z-index:258;position:absolute;', {
            'className': 'jngButton\x20Homepage',
            'onclick'() {
                delete sessionStorage['PVZTR_Almanac_Page'], SelectModal('index', 'Service');
            }
        }, EDAll);
    }
}) : oS['Init']({
    'LoadMusic': 'diary',
    'ZName': [oSculptorZombie],
    'backgroundImage': 'images/interface/Almanac_Box.webp',
    'LoadAccess': function () {
        function a(j) {
            if (j >= oGargantuar['prototype']['HP'])
                return $__language_Array__['aeae171183895fe7ae5a0bc0926b20ec'];
            else {
                if (j >= oBucketheadZombie['prototype']['HP'] + oBucketheadZombie['prototype']['OrnHP'])
                    return $__language_Array__['3405f2ff186476839537048606e34a36'];
                else {
                    if (j >= oConeheadZombie['prototype']['HP'] + oConeheadZombie['prototype']['OrnHP'])
                        return $__language_Array__['415b5fda854907d4f561e5448369dacd'];
                    else
                        return j >= 0x10e ? $__language_Array__['30af3c819abc33f89c3702b86711a56b'] : $__language_Array__['3c39d9a196dbe95f8c3d5329bc73ae07'];
                }
            }
        }
        let b = [
                oPeashooter,
                oSunFlower,
                oPotatoMine,
                oWallNut,
                oStoneFlower,
                oRadish,
                oSnowPea,
                oRepeater,
                oCherryBomb,
                oTallNut,
                oSunShroom,
                oPuffShroom,
                oScaredyShroom,
                oFumeShroom,
                oSporeShroom,
                oBambooUncle,
                oDoomShroom,
                oBegonia,
                oIceAloe,
                oPepper,
                oImitater,
                oMonotropa,
                oSpikeweed,
                oTorchwood,
                oKiwibeast,
                oCabbage,
                oKernelPult,
                oPlantern,
                oBlover,
                oShiitake,
                oElecTurnip,
                oCranberry,
                oMelonPult,
                oAbutilonHybriden,
                oPumpkinHead,
                oMiracleImitater,
                oJalapeno,
                oXshooter,
                oMacintosh,
                oFlowerPot
            ], c = [
                oZombie,
                oConeheadZombie,
                oBucketheadZombie,
                oNewspaperZombie,
                oBalloonZombie,
                oStrollZombie,
                oFootballZombie,
                oCigarZombie,
                oCaskZombie,
                oSadakoZombie,
                oImp,
                oBossA,
                oMembraneZombie,
                oMakeRifterZombie,
                oSkatingZombie,
                oPushIceImp,
                oZomboni,
                oBossB,
                oSculptorZombie,
                oBeetleCarZombie,
                oThiefZombie,
                oGargantuar,
                oZomboss_Industry
            ], d = NewEle('', 'div', 'left:20px;top:20px;overflow-y:auto;position:absolute;height:560px;width:530px;', { 'className': 'NoBar' }, EDAll), e = NewEle('', 'div', '', {
                'innerText': $__language_Array__['edc1fdb3572dceb3fa172f31d17739de'],
                'className': 'Almanac_Name'
            }, EDAll), f = NewEle('Almanac_ImageBox', 'div', 'overflow:hidden;pointer-events:none;left:535px;bottom:300px;position:absolute;height:500px;width:341px;', null, EDAll), g = NewEle('', 'div', 'padding:15px;left:560px;top:320px;overflow-y:auto;position:absolute;height:220px;width:290px;', { 'className': 'NoBar' }, EDAll);
        function h() {
            let j;
            d['innerHTML'] = '', f['innerHTML'] = '', g['innerHTML'] = '';
            let k = ![];
            for (let m of c) {
                let n = m['prototype'], o = NewEle('', 'div', 'cursor:pointer;position:relative;display:inline-block;padding:0px;margin:-3px;margin-left:3px;margin-right:0;width:100px;height:74.11px;background:url(' + n['GetCardImg']() + ');background-size:100%\x20100%;', {
                        'onclick'() {
                            if (this['style']['filter'])
                                return;
                            j && (j['style']['filter'] = ''), this['style']['filter'] = 'brightness(70%)', j = this, l(m, n);
                        }
                    }, d);
                !k && (o['click'](), k = !![]);
            }
            function l(q, r) {
                const s = new q();
                s['Init'](GetX(0x8), r, oGd['$ZF'], oS['R'] + 0x1), e['innerText'] = s['CName'], f['innerHTML'] = s['Almanac']['Dom'], g['innerText'] = '' + s['Almanac']['Tip'] + $__language_Array__['74a05eb7c5f3c2627b68d97d64613caf'][0x0] + a(r['HP'] + r['OrnHP']) + $__language_Array__['74a05eb7c5f3c2627b68d97d64613caf'][0x1] + s['Almanac']['Speed'] + $__language_Array__['74a05eb7c5f3c2627b68d97d64613caf'][0x2] + s['Almanac']['Weakness'] + $__language_Array__['74a05eb7c5f3c2627b68d97d64613caf'][0x3] + s['Almanac']['Story'];
            }
        }
        function i() {
            let j;
            d['innerHTML'] = '', f['innerHTML'] = '', g['innerHTML'] = '';
            let k = {}, l = ![];
            for (let n of b) {
                let o = n['prototype'];
                k[o['EName']] = NewEle('ACard_' + o['EName'], 'div', 'cursor:pointer;position:relative;display:inline-block;padding:0px;margin:-3px;margin-left:3px;margin-top:1px;margin-right:0;width:100px;height:60px;clip:(auto,auto,60px,auto);background:url(' + o['PicArr'][o['CardGif']] + ');background-size:100%\x20200%;', {
                    'onclick'() {
                        if (this['style']['filter'])
                            return;
                        this['style']['filter'] = 'brightness(70%)', m(n, o);
                    }
                }, d), k[o['EName']]['innerHTML'] = '<span\x20class=\x22cardSunNum2\x22>' + o['SunNum'] + '</span>', !l && (l = !![], k[o['EName']]['click']());
            }
            function m(q, r) {
                var s;
                j && (k[j['EName']]['style']['filter'] = '', j && j['Die']('JNG_TICKET_SuperPower'));
                f['innerHTML'] = '', e['innerText'] = r['CName'], EDPZ['style']['top'] = '90px', EDPZ['style']['left'] = '20px';
                let t = CustomSpecial(q, 0x1, 0x6);
                j = t;
                if (j['Immediately'])
                    $(j['id'])['childNodes'][0x1]['src'] = j['PicArr'][j['StaticGif']];
                else {
                    var u;
                    $(j['id'])['childNodes'][0x1]['src'] = j['PicArr'][(u = j['AlmanacGif']) !== null && u !== void 0x0 ? u : j['NormalGif']];
                }
                g['innerText'] = '' + $__language_Array__['1053e54496b6f2d5e97bf1bddef8ce51'][0x0] + r['SunNum'] + $__language_Array__['1053e54496b6f2d5e97bf1bddef8ce51'][0x1] + r['coolTime'] + $__language_Array__['1053e54496b6f2d5e97bf1bddef8ce51'][0x2], g['innerHTML'] += '' + $__language_Array__['471a9a069f8db35a5ab6a5c3d0eeec73'][0x0] + r['Tooltip'], g['innerText'] += '' + $__language_Array__['b9a3a80807b6551a56091433d9da9253'][0x0] + ((s = r['Story']) !== null && s !== void 0x0 ? s : $__language_Array__['ef1730a0047f98ccd96842bbbae04d6b']) + '\x0a';
            }
        }
        if (sessionStorage['PVZTR_Almanac_Page'] === 'Plant')
            i();
        else
            sessionStorage['PVZTR_Almanac_Page'] === 'Zombie' && h();
        NewEle('', 'a', 'left:1px;bottom:1px;height:24px;text-align:center;color:white;line-height:23px;font-size:14px;width:96px;z-index:258;position:\x20absolute;background:url(images/interface/Almanac_Button.webp);background-size:cover;', {
            'className': 'jngButton',
            'innerText': $__language_Array__['5dfd65322ae1dbab19c22cd5ce1b1825'],
            'onclick'() {
                delete sessionStorage['PVZTR_Almanac_Page'], SelectModal(oS['Lvl'], 'Service');
            }
        }, EDAll);
    }
});