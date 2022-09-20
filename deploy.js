// # 确保脚本抛出遇到的错误
// set -e

// # 打包生成静态文件
// npm run build

// # 进入打包好的文件夹
// cd docs/.vuepress/dist

// # 创建git的本地仓库，提交修改
// git init
// git add -A
// git commit -m 'deploy'

// # 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
// # 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
// git push -f git@github.com:shelwinjue/shelwinjue.github.io.git master

const { execSync } = require('child_process');

execSync('npm run build', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('cd docs/.vuepress/dist', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git init', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git add -A', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git commit -m "deploy"', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git push -f origin master', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});
