const hover = document.getElementById("hover")
const audio = new Audio('javaPics/lafuey.mp3')

hover.onmouseover = function(){
    audio.play();
}

hover.onmouseout = function(){
    audio.pause();
}
