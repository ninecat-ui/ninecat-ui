const fs = require('fs');
const path = require('path');

const args = process.argv.splice(2);
const componentName = args[0];

let root = '../packages/';
let template = fs.readFileSync(path.join(__dirname, './component-template/template.vue'), 'utf8');
let className = 'n-' + componentName.toLowerCase();
let targetDirPathName = 'n' + componentName;
let content = template.replace(/n-ComponentName/g, className);
content = content.replace(/ComponentName/g, componentName);

let targetDirPath = path.join(__dirname, root, targetDirPathName);
let targetFilePath = path.join(__dirname, root, targetDirPathName, 'index.vue');

if (!fs.existsSync(targetDirPath)) {
  fs.mkdirSync(targetDirPath);
  console.log('The ' + targetDirPath + ' folder has been created!');
}

if (!fs.existsSync(targetFilePath)) {
  fs.writeFile(targetFilePath, content, (err) => {
    if (err) throw err;
    console.log('The ' + targetFilePath + ' folder has been created!');
  });
} else {
  console.error('error!\n' + targetFilePath + ' has already been existed!');
}
