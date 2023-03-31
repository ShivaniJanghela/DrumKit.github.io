// drum kit sound
let btn = document.querySelectorAll(`.drum`);

for(let i =0; i<btn.length;i++)
{
    btn[i].addEventListener(`click`, function()
    {
      let text = btn[i].innerText;
      sound(text);
      animation(text);
    });
}
function sound(text){
    switch (text)
    {
        case "w" : let sound1 = new Audio("sounds/tom-1.mp3");
        sound1.play();
        break;

        case "a" : let sound2 = new Audio("sounds/tom-2.mp3");
        sound2.play();
        break;

        case "s" : let sound3 = new Audio("sounds/tom-3.mp3");
        sound3.play();
        break;

        case "d": let sound4 = new Audio("sounds/tom-4.mp3");
        sound4.play();
        break;

        case "j" : let sound5 = new Audio("sounds/snare.mp3 ");
        sound5.play();
        break;

        case "k" : let sound6 = new Audio("sounds/crash.mp3");
        sound6.play();
        break;

        case "l" : let sound7 = new Audio("sounds/kick-bass.mp3");
        sound7.play();
        break;
    }
}


document.addEventListener("keydown", function(e) {
    sound(e.key);
    animation(e.key);
  });

 

function animation(currentKey){

let activebtn = document.querySelector("." + currentKey);
activebtn.classList.add("pressed"); 

setTimeout(function(){
    activebtn.classList.remove("pressed");
},100);
}