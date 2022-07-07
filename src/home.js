
function fadeElementIn(element, speed) {
    var opacity = 0;
    const timer = setInterval(() => {
        if (opacity < 1) {
            opacity += .01;
            element.style.opacity = opacity;
        } else {
            clearInterval(timer);
        }
    }, speed)
}

var opacity = 0;
var speed = 10;
const streamingEmbeds = document.getElementById('streaming-embeds');
streamingEmbeds.style.opacity = 0;


createTerminal(500, 10, ()=> {
    fadeElementIn(streamingEmbeds, speed);
});



