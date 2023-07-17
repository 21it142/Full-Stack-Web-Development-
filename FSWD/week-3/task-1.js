const os=require('os');
function outputUserInfo(){
    const username=os.userInfo.username;
    const homeDirectory=os.homedir;
    const platform=os.platform;

    console.log('Username:',username);
    console.log('Home Directory:',homeDirectory);
    console.log('Platform:',platform);
}

outputUserInfo();