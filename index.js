drumSize = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumSize; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var keyClick = this.innerHTML;
    //console.log(keyClick);
    playSound(keyClick);
    buttonAnimation(keyClick);
  })
}

// key down
document.addEventListener("keydown", function (event) {
  keyCode = event.code[3].toLowerCase();
  playSound(keyCode);
  buttonAnimation(keyCode);
})


function playSound(key){
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(key);
      break;

  }
}

function buttonAnimation(keyCode){
  curButton = document.querySelector("." + keyCode);
  curButton.classList.add("pressed");
  setTimeout(function(){
    curButton.classList.remove("pressed"), 300
  });
  //console.log(curButton);

}

function HouseKeeper(year, name) {
  this.year = year;
  this.name = name;
  this.clean = function() {
    console.log("cleanning");
  }
}
houseKeeper1 = new HouseKeeper(3, "bao");
