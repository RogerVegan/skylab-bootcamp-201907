var fs = require('fs');
const arg = process.argv[2]

fs.readFile(arg, 'utf8', function(error,content){
if(!error) console.log(content.split("\n").length-1)
})
;
