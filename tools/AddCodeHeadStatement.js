const fs = require("fs");
const path = require("path");

const root = 'C:/Users/Administrator/Desktop/pvztr';

const readDirSync = (path) => {
	let pa = fs.readdirSync(path);
	pa.forEach((name) => {
		let info = fs.statSync(path + "/" + name);	
		if (info.isDirectory()) {
			readDirSync(path + "/" + name);
		} else if(/.js|.css/.test(name)) {
            writeInfo(path + "/" + name);
		}	
	})
};

const writeInfo = (path) => {
    let code = fs.readFileSync(path, 'utf-8');
    code = 
    `/*! 
 * Copyright ${new Date().getFullYear()} JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 ` + code;
    fs.writeFileSync(path, code);
    console.log('Finish: ' + path);
};

readDirSync(root);