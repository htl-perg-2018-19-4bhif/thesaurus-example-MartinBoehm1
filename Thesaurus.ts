
const arguments = process.argv;

//console.log(arguments[0]);
//console.log(arguments[2]);
//for(var i=2;i<arguments.length;i++){
let ar:string[] = new Array();
let bAr:boolean[] = new Array();
for (let i = 2; i < arguments.length; i++) {
    ar.push(arguments[i]);
    bAr.push(false);
}
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./OpenThesaurus-Textversion/openthesaurus.txt')
});
lineReader.on('line', function (line) {
    for (let i = 0; i < ar.length; i++){
        if (line.includes(ar[i])) {
            bAr[i] = true;
            console.log(line);
        }
    }
});
lineReader.on('close', function () {
    for (let i  = 0; i < ar.length; i++){
        if (bAr[i] === false) {
            console.log('No matches found');
        }
    }
});

//}
if (arguments.length === 2) {
    console.log('Please specify words');
}

//const fs = require('fs');

/*fs.open('./OpenThesaurus-Textversion/openthesaurus.txt', 'r', (err, fd) => {
    if (err) throw err;


    const readable = fs.createReadStream();
    readable.on('readable', function() {
  // there is some data to read now
    let data;
    while (data = this.read()) {
        console.log(data);
    }
    });
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });*/
  //var s;
  //fs.readFile('./OpenThesaurus-Textversion/openthesaurus.txt', s);

//console.log(s);