const path =require('path');
const readline = require('readline');
const fs=require('fs');
const rl=readline.createInterface({
input:process.stdin,
output:process.stdout
});
rl.question('Enter your path 1:',(inputPath1)=>{
rl.question('Enter your path 2:',(inputpath2)=>{
// const path1name=path.normalize(inputPath1);
// const path2name=path.normalize(inputpath2);
const stats1=fs.statSync(inputPath1);
const stats2=fs.statSync(inputpath2);
      
const isSameFile = stats1.dev === stats2.dev && stats1.ino === stats2.ino ;
    if (isSameFile) {
        console.log('\nThe two file paths refer to the same file.');
    } else {
        console.log('\nThe two file paths do NOT refer to the same file.');
      }
    rl.close();
});
});