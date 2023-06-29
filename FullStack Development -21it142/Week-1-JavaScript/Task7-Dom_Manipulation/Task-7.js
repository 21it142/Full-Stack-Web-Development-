const buttonCalled = document.getElementById("buttonCalled");


function clickedtext() {
 
  buttonCalled.textContent = "You have clicked me !!!";
}


buttonCalled.addEventListener("click", clickedtext);