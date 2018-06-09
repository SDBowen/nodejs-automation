const PythonShell = require('python-shell');

function appIsOpenCheck() {
  const startPythonScript = new PythonShell('./src/test.py');

  // Get python script output
  startPythonScript.on('message', message => {
    console.log(message);
  });
  // end the input stream and allow the process to exit
  startPythonScript.end((err, code, signal) => {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });
}

module.exports = appIsOpenCheck;
