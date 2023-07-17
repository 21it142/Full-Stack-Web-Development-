const fs=require('fs');


function createFileStructure(rootPath,structure){
    for(let item of structure){
        const itemPath=`${rootPath}/${item.name}`;

        if(item.type=='file'){
            fs.writeFile(itemPath,item.content,(err)=>{
                if(err){
                    console.error(`Error creating reading file:${err}`);
                }else{
                    console.log(`file created:${itemPath}`);
                }
            });
          
        }  else if(item.type=='folder'){
            fs.mkdir(itemPath,{recursive:true},(err)=>{
if(err){
    console.log(`Error while creating a folder:${err}`);

}else {
    console.log(`Folder created :${itemPath}`);
    if(item.children && item.children.length>0){
        createFileStructure(itemPath,item.children);
    }
}
            });

        }
    }
}

const structureFilePath='file_structure.json';
const rootPath='./output';
fs.readFile(structureFilePath,'utf8',(err,data)=>{
    if(err){
        console.error(`Error while reading file:${err}`);
        return;
    }
    const structure=JSON.parse(data);
    createFileStructure(rootPath,structure);
})

