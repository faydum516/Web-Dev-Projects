function load(file) {
    fetch(file)
        .then(myObject => myObject.text())
        .then(myText => {
            document.getElementById("advice-number").innerHTML += ` #${JSON.parse(myText).slip.id}`;
            document.getElementById("quote").innerHTML = `"${JSON.parse(myText).slip.advice.replace(/â€˜/g, '\'').replace(/Ã¤/g, 'ä').replace(/dont/g, 'don\'t')}"`;
        });
}

function reload(file) {
    fetch(file)
        .then(myObject => myObject.text())
        .then(myText => {
            document.getElementById("advice-number").innerHTML = `ADVICE #${JSON.parse(myText).slip.id}`;
            document.getElementById("quote").innerHTML = `"${JSON.parse(myText).slip.advice.replace(/â€˜/g, '\'').replace(/Ã¤/g, 'ä').replace(/dont/g, 'don\'t')}"`;  
        });
}

window.addEventListener("keypress", function(event) {
    if (event.code === "Space") {
        fetch("https://api.adviceslip.com/advice")
            .then(myObject => myObject.text())
            .then(myText => {
                document.getElementById("advice-number").innerHTML = `ADVICE #${JSON.parse(myText).slip.id}`;
                document.getElementById("quote").innerHTML = `"${JSON.parse(myText).slip.advice.replace(/â€˜/g, '\'').replace(/Ã¤/g, 'ä').replace(/dont/g, 'don\'t')}"`;
            });
    }
});