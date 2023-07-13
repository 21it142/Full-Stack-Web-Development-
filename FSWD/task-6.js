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
});
});
