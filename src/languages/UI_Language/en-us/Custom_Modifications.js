/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 "use strict";

{
  let FilePath = "./languages/UI_Language/en-us/";
  loadRes({
    "js": [],
    "css": [],
    "img": [FilePath + "uis/main.webp", FilePath + "uis/map.webp", FilePath + "uis/Fuben1.webp", FilePath + "uis/Introduction.webp", FilePath + "uis/panel.webp", FilePath + "uis/Almanac.webp", FilePath + "uis/GameOver.png"],
    "au": []
  });
  jngTemplate.template.Writer = `<div id="wrap"><img src="${FilePath}uis/writers.webp"></div>`;
  jngTemplate.template.Diary = `<iframe id='DiaryIframe' class="NoBar" width="900" height="600" frameBorder='0' scrolling='auto' src='frame/Diary.html?folder=../${FilePath}/uis/diary/'></iframe>`;
  jngTemplate.template.labMap = `
        <div id="lab0" class="WindowFrame" data-jng-bg="${FilePath}uis/lab1.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 222px;top: 150px;" onclick="SelectModal('Lab1')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:650px;top:185px;" onclick="SelectModal('Lab2')"></button>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab1" class="WindowFrame noneLab" data-jng-bg="${FilePath}uis/lab2.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left:102px;top:180px;" onclick="SelectModal('Lab3')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:530px;top:38px;" onclick="SelectModal('Lab4')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab2" class="WindowFrame noneLab" data-jng-bg="${FilePath}uis/lab3.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 180px;top: 50px;" onclick="SelectModal('Lab5')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:550px;top:185px;" onclick="SelectModal('Lab6')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
        </div>
        `;
  /*{
      let shakeText = oEffects.TextEffects.ShakeText;
      oEffects.TextEffects.ShakeText = function(json){
          if(!json.customSize){
              json.customSize = function(i){
                  let size = -1;
                  let sizes = [1025,938,1050,1025,900,910,1125,900,750,790,1012,1100,1225,1125,1100,1050,1100,920,900,1000,1050,1370,1350,1070,1037,900];
                  let sizes_lower = [985,930,965,1005,950,800,1040,830,700,800,750,1020,1250,1025,1090,1000,1000,800,800,880,1010,1050,1130,970,950,887];
                  let arrNum = [1050,880,965,980,960,970,920,980,1050,1030];
                  if(i>="0"&&i<="9"){
                      size = arrNum[i.charCodeAt()-48]/2000;
                  }
                  if(i>='A'&&i<='Z'){
                      size = sizes[i.charCodeAt()-65]/2000;
                  }
                  if(i>="a"&&i<='z'){
                      size = sizes_lower[i.charCodeAt()-97]/2000;
                  }
                  return size;
              };
          }
          return shakeText.bind(oEffects.TextEffects)(json);
      };
      console.log(oEffects.TextEffects.ShakeText);
  }*/
}
;