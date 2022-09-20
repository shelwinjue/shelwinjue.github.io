const { execSync } = require('child_process');
const dir = 'docs/.vuepress/dist';
execSync('npm run build', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git init', { cwd: dir }, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git add -A', { cwd: dir }, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync('git commit -m "deploy"', { cwd: dir }, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
});

execSync(
  'git push -f git@github.com:shelwinjue/shelwinjue.github.io.git master',
  { cwd: dir },
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
