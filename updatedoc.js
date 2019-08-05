const cloneUrl = 'https://github.com/ninecat-ui/ninecat-ui.github.io.git'
const shell = require('shelljs')
shell.rm('-rf', 'ninecat-ui.github.io')
if (shell.exec(`git clone ${cloneUrl}`).code !== 0) {
  shell.echo('Error: Git commit failed')
  shell.exit(1)
}
shell.cp('-R', 'doc/.', 'ninecat-ui.github.io/')
if (shell.exec('git add -A').code !== 0) {
  shell.echo('Error: Git commit failed')
  shell.exit(1)
}
if (shell.exec('git commit -m "feat:update doc"').code !== 0) {
  shell.echo('Error: Git commit failed')
  shell.exit(1)
}
if (shell.exec('git push origin master').code !== 0) {
  shell.echo('Error: Git commit failed')
  shell.exit(1)
}
