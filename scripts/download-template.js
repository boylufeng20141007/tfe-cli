// var download = require('download-git-repo');

// download('boylufeng20141007/mini-scaffold', __dirname + '/template', { clone: true},  function(err) {
//      if(err) console.log(err);
// });

const path = require('path');
const inquirer = require('inquirer');
const { exec } = require('child_process');

inquirer.prompt({
  type: 'input',
  name: 'project',
  message: '请输入项目名称'
}).then(name => {
  if( name ) {
    let tmp = path.resolve(__dirname, '../', name.project);
    download(tmp);
  }
});



function download(name) {
  exec(`git clone https://github.com/boylufeng20141007/mini-scaffold.git ${name}`, function(err){
    if( err ) console.log(err);
  });
}


