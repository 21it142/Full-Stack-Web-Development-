function getResult(a1,b1,c1){
    switch(c1){
        case 1:
           return a1+b1;
            break;
            case 2:
                return a1-b1;
                break;
            case 3:
                return a1*b1;
                break;
            case 4:
               return a1/b1;
               break;
           default:
               return "enter a valid value";
                  break;

    }
}
let a=parseInt(prompt("please enter your first value"));
let b=parseInt(prompt("please enter your Second value"));
let choice=parseInt(prompt("please enter your choice between 1 to 4:"));
function getFinalResult(){
let finalResult=getResult(a,b,choice);
document.getElementById("result").innerHTML=finalResult;
}