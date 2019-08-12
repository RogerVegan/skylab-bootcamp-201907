var fs = require('fs');
const a = fs.readFileSync(process.argv[2]);
const b = a.toString()
const c = b.split("\n")
console.log(c.length-1)