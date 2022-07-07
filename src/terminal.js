function getJSON(uri) {
    const json = fetch(uri).then((data) => {
        return data.json();
    }).catch(console.error)
    return json;
}

async function typingEffect(element, text, speed, delay, callback){
    setTimeout(() => {
        var textLine = "";
        var i=0;
        const timer = setInterval(() => {
            if (i < text.length) {
                textLine += text.charAt(i)
                element.innerText = textLine
                i++;
            } else {
                clearInterval(timer);
                if (callback) {
                    callback();
                }
            }
        }, speed)
        return timer;
    }, delay);
}

async function createTerminal(lineDelay=500, typeSpeed=10, callback=null) {
    const data = await getJSON("data/terminal-message.json");
    const container = document.getElementById("terminal-container");
    var delay = 0;
    for (let idx = 0; idx < data.lines.length; idx++) {
        var textLine = data.lines[idx];
        textLine += "\n"
        const newLine = document.createElement("ul");
        container.appendChild(newLine);
        typingEffect(
            newLine, 
            textLine, 
            typeSpeed, 
            delay, 
            (idx == data.lines.length - 1) ? callback : null
        )
        delay += lineDelay;
    }
}
