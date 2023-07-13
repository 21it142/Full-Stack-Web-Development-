 var fs = require("fs");
fs.readFile("task-4.txt",'utf-8', function(err, data) {
   // console.log(data);
    let lines=data.split('\n');
   
    for(let i=0;i<lines.length;i++){
        //console.log(lines[i])
       let x=lines[i];
            let data1=x.split(',');
            const name = data1[0];
            const cgpa = parseFloat(data1[1]);
       // console.log(cgpa)
          
       
            if (name.includes('ma') && cgpa > 7) {
              console.log(name);
            }
        
       // console.log(name)
    }

  });

