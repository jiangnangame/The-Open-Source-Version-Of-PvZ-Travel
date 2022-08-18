/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS.Init({
  PicArr: function () {
    let a = "images/interface/";
    return [a + "Marsh.webp", a + "MarshClue1.webp"];
  }(),
  LoadMusic: "Industry_Story_Front",
  StartGameMusic: "Bgm_Marsh_Ready",
  LevelEName: 1,
  LoadAccess: function (callback) {
    let effect = NewEle("effect" + Math.random(), "div", "position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:1;", 0, EDAll);
    let count = 0,
        DivTeach = NewEle("DivTeach", "div", 0, 0, EDAll),
        dDave = NewImg("dDave", "", "left:0;top:81px", EDAll);

    (function fun() {
      DivTeach.onclick = fun;

      switch (count) {
        case 0:
          dDave.src = 'images/interface/Dave.png';
          PlayAudio('crazydavelong3');
          innerText(DivTeach, '……');
          count++;
          break;

        case 1:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, $__language_Array__["d67bf7d54014d3e8ca9c7d8cf40aa236"]);
          count++;
          break;

        case 2:
          PlayAudio('crazydavelong3');
          innerText(DivTeach, $__language_Array__["b1a66e4b4db3883719cbd539ca8b4216"]);
          count++;
          break;

        case 3:
          PlayAudio('crazydavelong2');
          innerText(DivTeach, '……');
          count++;
          break;

        case 4:
          dDave.src = 'images/interface/Black_Dave.png';
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, '……');
          count++;
          break;

        case 5:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["187d7df1988cd4842de15dc539bb20d1"]);
          count++;
          break;

        case 6:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["b4f1b3b83df61d8364f0ab955bb6172e"]);
          count++;
          break;

        case 7:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["525b73f59ea718cdc488efed322c301a"]);
          count++;
          break;

        case 8:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e1d146eadf30456f55c0f62d571024be"]);
          count++;
          break;

        case 9:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["e5f12002dab4248e216de4ba3d5ae564"]);
          count++;
          break;

        case 10:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["3a04f6f0187b301708e96e8865368072"]);
          count++;
          break;

        case 11:
          PlayAudio(`realdaveextralong${Math.floor(Math.random() * 4 + 1)}`);
          innerText(DivTeach, $__language_Array__["9401ddf77633d17e263e3e2920dbfc88"]);
          DivTeach.onclick = null;
          oSym.addTask(30, fun);
          count++;
          break;

        case 12:
          dDave.src = 'images/interface/Zomboss.png';
          PlayAudio('Zomboss3');
          innerText(DivTeach, $__language_Array__["d1bf446b9dbb2d290ba7d9a4fc679915"]);
          count++;
          break;

        case 13:
          PlayAudio('Zomboss2');
          innerText(DivTeach, $__language_Array__["b7020cfa95a505ca464cf25001980f0b"]);
          count++;
          break;

        case 14:
          ClearChild(DivTeach, dDave);
          oSym.addTask(100, callback);
      }
    })();

    function callback() {
      SelectModal("Marsh25");
    }
  }
});