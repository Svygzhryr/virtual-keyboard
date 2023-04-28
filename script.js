const buttons = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del", "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "enter", "shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "shift", "ctrl", "win", "alt", "space", "alt", "ctrl", "◄" ,"▼", "►"];

const app = document.createElement("section");
app.className = "app";
document.body.appendChild(app);

const textarea = document.createElement("textarea");
textarea.className = "screen";
app.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
app.appendChild(keyboard);

(function createKeys() {
    let row;

    for (let j = 1; j <= 5; j++) {
        row = document.createElement("div");
        row.className = `keyboard-row row${j}`;
        keyboard.appendChild(row);
    }
    
    for (let i = 0; i <= 13; i++) {
        let el = document.createElement("button");
        let defineClass = "";
        buttons[i].length > 1 ? defineClass = buttons[i] : null ;
        el.className = `key ${defineClass}`;
        el.id = `key${i}`
        el.innerHTML = buttons[i];
        document.querySelector(`.row1`).appendChild(el);
    }

    for (let i = 14; i <= 28; i++) {
        let el = document.createElement("button");
        let defineClass = "";
        buttons[i].length > 1 ? defineClass = buttons[i] : null ;
        el.className = `key ${defineClass}`;
        el.id = `key${i}`
        el.innerHTML = buttons[i];
        document.querySelector(`.row2`).appendChild(el);
    }

    for (let i = 29; i <= 41; i++) {
        let el = document.createElement("button");
        let defineClass = "";
        buttons[i].length > 1 ? defineClass = buttons[i] : null ;
        el.className = `key ${defineClass}`;
        el.id = `key${i}`
        el.innerHTML = buttons[i];
        document.querySelector(`.row3`).appendChild(el);
    }

    for (let i = 42; i <= 55; i++) {
        let el = document.createElement("button");
        let defineClass = "";
        buttons[i].length > 1 ? defineClass = buttons[i] : null ;
        el.className = `key ${defineClass}`;
        el.id = `key${i}`
        el.innerHTML = buttons[i];
        document.querySelector(`.row4`).appendChild(el);
    }

    for (let i = 56; i <= 64; i++) {
        let el = document.createElement("button");
        let defineClass = "";
        buttons[i].length > 1 ? defineClass = buttons[i] : null ;
        el.className = `key ${defineClass}`;
        el.id = `key${i}`
        el.innerHTML = buttons[i];
        document.querySelector(`.row5`).appendChild(el);
    }
})();

const keys = document.querySelectorAll(".key");

let handleKeyMouseDown = function(e) {
        e.target.classList.add("key_active")
}

let handleKeyMouseUp = function(e) {
    if (!e.target.classList.contains("key_active")) {
        e.target.classList.add("key_active")
    } e.target.classList.remove("key_active")
}

let handleKeyMouseLeave = function(e) {
    if (!e.target.classList.contains("key_active")) {
        e.target.classList.add("key_active")
    } e.target.classList.remove("key_active")
}

let handleKeyDown = function(e) {
    let key = e.keyCode;
    console.log(key)
}

let handleKeyUp = function(e) {
    let key = e.keyCode;
}

keys.forEach(e => {
    e.addEventListener("mousedown", handleKeyMouseDown);
    e.addEventListener("mouseup", handleKeyMouseUp);
    e.addEventListener("mouseleave", handleKeyMouseLeave);
})

document.body.addEventListener('mouseup', function(){
    mouseDown = false;
});

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);