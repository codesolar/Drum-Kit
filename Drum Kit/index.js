function handleClick1(){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
}
function handleClick2(){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
}
function handleClick3(){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
}
function handleClick4(){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
}
function handleClick5(){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
}
function handleClick6(){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
}
function handleClick7(){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
}



document.querySelector(".w").addEventListener("click",handleClick1);
document.querySelector(".a").addEventListener("click",handleClick2);
document.querySelector(".s").addEventListener("click",handleClick3);
document.querySelector(".d").addEventListener("click",handleClick4);
document.querySelector(".j").addEventListener("click",handleClick5);
document.querySelector(".k").addEventListener("click",handleClick6);
document.querySelector(".l").addEventListener("click",handleClick7);




document.addEventListener("keydown",function(event){
    const keyName=event.key;
    switch(keyName)
    {
        case "w":
            handleClick1();
            break;
        case "a":
            handleClick2();
            break;
        case "s":
            handleClick3();
            break;
        case "d":
            handleClick4();
            break;
        case "j":
            handleClick5();
            break;
        case "k":
            handleClick6();
            break;
        case "l":
            handleClick7();
            break;
    }

});

