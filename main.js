canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var canvasimg;

function add() {
	canvasbg = new Image(); //defining a variable with a new image
	canvasbg.onload = uploadimg; // setting a function, onloading this variable
	canvasbg.src = canvasimg;   // load image
}

function uploadimg() {
	ctx.drawImage(canvasbg, 100, 80, 300, 150);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if ((keyPressed >= 97 && keyPressed <= 122)|| (keyPressed >= 65 && keyPressed <= 90)) {
        console.log("Pushed an Alphabet Key");
        console.log(keyPressed);
        alphabet();
    }

    else if (keyPressed >= 48 && keyPressed <= 57) {
        console.log("Pushed a Number Key");
        console.log(keyPressed);
        numberkey();
    }

    else if (keyPressed >= 37 && keyPressed <= 40) {
        console.log("Pushed an Arrow Key");
        console.log(keyPressed);
        arrow();
    }

    else if ((keyPressed >= 17 && keyPressed <= 18)|| (keyPressed == 27)) {
        console.log("Pushed a Special Key");
        console.log(keyPressed);
        special();
    }
    else {
        console.log("Pushed an Other Key");
        console.log(keyPressed);
        other();
    }
}

function alphabet() {
    canvasimg = "Alphabet_Key.png";
    add();
}

function numberkey() {
    canvasimg = "Number_Key.png";
    add();
}

function arrow() {
    canvasimg = "Arrow_Key.png";
    add();
}

function special() {
    canvasimg = "Special_Key.png";
    add();
}

function other(){
    canvasimg = "Other_Key.png";
    add();
}