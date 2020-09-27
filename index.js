var len = document.querySelectorAll(".fart").length;
var audio = new Audio('sounds/fart-01.mp3');
var audio2 = new Audio('sounds/fart-02.mp3');
var audio3 = new Audio('sounds/fart-03.mp3');
var audio4 = new Audio('sounds/fart-04.mp3');
var audio5 = new Audio('sounds/fart-05.mp3');
var audio6 = new Audio('sounds/fart-06.mp3');
var audio7 = new Audio('sounds/fart-07.mp3');

//detects mosue click button
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".fart")[i].addEventListener("click", function(){
//this.innerHTML will shows which button was pressed
    CheckChar(this.innerHTML);
    animate(this.innerHTML);

  })
}
document.querySelector("h1").classList.add();

//Detects key press
document.addEventListener("keydown", function(event){
//key provides which key was pressed in the keyboard
     CheckChar(event.key);
     animate(event.key);
})

function CheckChar(wordChar){
  {
    switch (wordChar) {
      case "w":
        audio.play()
        break;
      case "a":
        audio2.play()
        break;
      case "s":
        audio3.play()
        break;
      case "d":
        audio4.play()
        break;
      case "j":
        audio5.play()
        break;
      case "k":
        audio6.play()
        break;
      case "l":
        audio7.play()
        break;
      default: console.log(this.innerHTML);
    }
  }
}

function animate(button){
  document.querySelector("."+button).classList.add("pressed");

  setTimeout(function(){
     document.querySelector("."+button).classList.remove("pressed")
    }, 100);


}
