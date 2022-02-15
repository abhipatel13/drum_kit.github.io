function drum(){
    if(document.activeElement.id=="a")
    {
        var audio = new Audio("mysound/sounds_crash.mp3");
        audio.play();

    }
    else if(document.activeElement.id=="b")
    {
        var audio = new Audio("mysound/sounds_kick-bass.mp3");
        audio.play();

    }
    else if(document.activeElement.id=="c")
    {
        var audio = new Audio("mysound/sounds_tom-1.mp3");
        audio.play();

    }
    else if(document.activeElement.id=="d")
    {
        var audio = new Audio("mysound/sounds_tom-2.mp3");
        audio.play();

    }
    else if(document.activeElement.id=="e")
    {
        var audio = new Audio("mysound/sounds_tom-3.mp3");
        audio.play();

    }
    else if(document.activeElement.id=="f")
    {
        var audio = new Audio("mysound/sounds_tom-4.mp3");
        audio.play();

    }
}


document.addEventListener("keypress",function(event){
    if(event.key=="a")
    {
        var audio = new Audio("mysound/sounds_crash.mp3");
        audio.play();
    }
    else if(event.key=="b")
    {
        var audio = new Audio("mysound/sounds_kick-bass.mp3");
        audio.play();

    }
    else if(event.key=="c")
    {
        var audio = new Audio("mysound/sounds_tom-1.mp3");
        audio.play();

    }

    else if(event.key=="d")
    {
        var audio = new Audio("mysound/sounds_tom-2.mp3");
        audio.play();
    }

    else if(event.key=="e")
    {
        var audio = new Audio("mysound/sounds_tom-3.mp3");
        audio.play();
    }

    else if(event.key=="f")
    {
        var audio = new Audio("mysound/sounds_tom-4.mp3");
        audio.play();
    }
})