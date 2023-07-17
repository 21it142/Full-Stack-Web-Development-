const fs=require('fs')  
let counter=0;
let count=0;
fs.readFile("task-4.txt",'utf-8', function(err, data){
    let lines=data.split('\n');
   for(let i=0;i<lines.length;i++){
   // console.log(lines[i]);
    count++;
}
//console.log(count);
fs.readFile("task-6.txt",'utf-8',function(err,file){
    let lines=file.split('\n');
    for(let i=0;i<lines.length;i++){
    // console.log(lines[i]);
     counter++;
    }
    ////console.log(counter);
    if(count>counter){
        console.log("Task-4.txt is larger then other file")
    }
    else{
        console.log("Task-6.txt is larger then other file")
    }
    const lines1 = fs.readFileSync('student-data.txt', 'utf8').split('\n');

    // Read the contents of the second file
    const lines2 = fs.readFileSync('task-6.txt', 'utf8').split('\n');
  
    // Compare the sizes of the files
    const file1Size = lines1.length;
    const file2Size = lines2.length;
    const differingLines = [];
    for (let i = 0; i < Math.min(file1Size, file2Size); i++) {
      if (lines1[i] !== lines2[i]) {
        differingLines.push(i + 1); // Add 1 to convert from zero-based index to line number
      }
    }
  
    if (differingLines.length > 0) {
        console.log('The following lines are different:');
        differingLines.forEach(line => {
          console.log(`Line ${line}`);
        });
});
});
