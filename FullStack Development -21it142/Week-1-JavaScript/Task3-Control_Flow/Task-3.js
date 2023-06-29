function ageLocator(age){
    if(age<18){
        return "You are minor"
    }
    else if(age>=18&&age<65){
        return "you are an Adult";
    }
    else 
    return "You are a Senior Citizen"
}

let userAge=parseInt(prompt("enter your Age:"));
function ageResult(){
    let finalAge= ageLocator(userAge);
    document.getElementById("age").innerHTML=finalAge;
}
