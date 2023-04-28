const buttons = [
"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", 
"Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "Enter", 
"Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift", 
"Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "◄" ,"▼", "►"];

const keyCodes = [
"192", "49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "8",
"9", "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221", "220", "46",
"20", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "13",
"16", "220", "90", "88", "67", "86", "66", "78", "77", "188", "190", "191", "38", "16",
"17", "91", "18", "32", "18", "17", "37", "40", "39"
]

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
        let key = e.target.innerText;
        switch (key) {
            default :
                textarea.value += key;
                break
            case 'Backspace':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Tab':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Del':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Caps':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Enter':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Shift':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Ctrl':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Alt':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'Win':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'ArrowUp':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'ArrowLeft':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'ArrowDown':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
            case 'ArrowRight':
                textarea.value = textarea.value.substring(1, textarea.value.length)
                break;
        }

        console.log(e.target.innerHTML)
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
    let key = e.key;
    textarea.value += key;
    console.log(key)
}

let handleKeyUp = function(e) {
    let key = e.keyCode;
}

keys.forEach((e, i) => {
    e.setAttribute('data-code', keyCodes[i])
    e.addEventListener("mousedown", handleKeyMouseDown);
    e.addEventListener("mouseup", handleKeyMouseUp);
    e.addEventListener("mouseleave", handleKeyMouseLeave);

})

document.body.addEventListener('mouseup', function(){
    mouseDown = false;
});

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);