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

execSync(
  'git push -f git@github.com:shelwinjue/shelwinjue.github.io.git master',
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
