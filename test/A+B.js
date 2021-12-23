const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let information = [];
let inputData = [];
rl.on('line', function (line) {
  console.log('새로운 line 입력:', line);
}).on('close', function () {
  console.log('bye');

  process.exit();
});
