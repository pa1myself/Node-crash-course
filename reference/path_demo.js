 const path = require('path');

console.log(__filename);

console.log(path.dirname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname, 'test', 'hello.html'));