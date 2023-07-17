const fs=require('fs');

function Filebackup(filePath,backUpFilePath){
    fs.copyFile(filePath,backUpFilePath,(err)=>{
if(err){
    console.error(`Error while creating the file backup:${err}`);
}else {
    console.log(`File Backup has been SuccessFully Created :${backUpFilePath}`);
}
    });
}


function restoreFileBackup(backUpFilePath,filePath){
fs.copyFile(backUpFilePath,filePath,(err)=>{
if(err){
    console.error(`Error will restoring the file backup: ${err}`);
}else {
    console.log(`File Backup is been SuccessFully restored:${filePath}`);
}
});
}

function userInput(){
    if(process.argv[2]==='create'){
        const filePath=process.argv[3];
        const backUpFilePath=process.argv[4];
        Filebackup(filePath,backUpFilePath);
    } else if(process.argv[2]==='restore'){
        const filePath=process.argv[4];
        const backUpFilePath=process.argv[3];
        restoreFileBackup(backUpFilePath,filePath);

    }else{
        console.log('Invalid File Operation!!');
    }
}
userInput();