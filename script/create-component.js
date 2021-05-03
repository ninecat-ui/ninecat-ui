const fs = require('fs');
const path = require('path');

const args = process.argv.splice(2);
const componentName = args[0];

main();

function main () {
  createComponentDir();
  createDocDir();
};

function createComponentDir () {
  const componentrRoot = '../packages/';
  const targetDirPathName = 'n' + componentName;
  const targetDirPath = path.join(__dirname, componentrRoot, targetDirPathName);
  const subRoot = `../packages/${targetDirPathName}`;
  const subDirPath = path.join(__dirname, subRoot, 'src');
  createFileDir(targetDirPath);
  createFileDir(subDirPath);
  createVueFile(subRoot);
  createJsFile(subRoot);
}

function createDocDir () {
  const docRoot = '../doc/markdown';
  const docTargetDirPathName = 'n' + componentName;
  const docTargetDirPath = path.join(__dirname, docRoot, docTargetDirPathName);
  createFileDir(docTargetDirPath);
  const enSubDirPath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}`, 'en-US');
  createFileDir(enSubDirPath);
  const zhSubDirPath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}`, 'zh-CN');
  createFileDir(zhSubDirPath);
  createEnDocFile(docTargetDirPathName);
  createZhDocFile(docTargetDirPathName);
}

function createVueFile (subRoot) {
  const vueTemplate = fs.readFileSync(path.join(__dirname, './component-template/template.vue'), 'utf8');
  const className = 'n-' + componentName.toLowerCase();
  let vueContent = vueTemplate.replace(/n-ComponentName/g, className);
  vueContent = vueContent.replace(/ComponentName/g, componentName);
  const vueTargetFilePath = path.join(__dirname, subRoot, 'src', 'index.vue');
  createFile(vueTargetFilePath, vueContent);
}

function createJsFile (subRoot) {
  const jsTemplate = fs.readFileSync(path.join(__dirname, './component-template/template.js'), 'utf8');
  const jsContent = jsTemplate.replace(/nComponentName/g, 'n' + componentName);
  const jsTargetFilePath = path.join(__dirname, subRoot, 'index.js');
  createFile(jsTargetFilePath, jsContent);
}

function createEnDocFile (docTargetDirPathName) {
  const enDocTemplate = fs.readFileSync(path.join(__dirname, './component-template/en-doc-template.md'), 'utf8');
  const enDocContent = enDocTemplate.replace(/componentName/g, componentName.toLowerCase());
  const enDocFilePath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}/en-US`, 'index.md');
  createFile(enDocFilePath, enDocContent);
}

function createZhDocFile (docTargetDirPathName) {
  const zhDocTemplate = fs.readFileSync(path.join(__dirname, './component-template/en-doc-template.md'), 'utf8');
  const zhDocContent = zhDocTemplate.replace(/componentName/g, componentName.toLowerCase());
  const zhDocFilePath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}/zh-CN`, 'index.md');
  createFile(zhDocFilePath, zhDocContent);
}

function createFile (targetFilePath, content) {
  if (!fs.existsSync(targetFilePath)) {
    fs.writeFile(targetFilePath, content, (err) => {
      if (err) throw err;
      console.log('The ' + targetFilePath + ' file has been created!');
    });
  } else {
    console.error('error!\n' + targetFilePath + ' has already been existed!');
  }
}

function createFileDir (dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('The ' + dirPath + ' folder has been created!');
  }
}
