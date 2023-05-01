const buttons = [
"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", 
"Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "Enter", 
"Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift", 
"Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "◄" ,"▼", "►"];

const rubuttons = [
"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", 
"Caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", 'э', "Enter", 
"Shift", "\\", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift", 
"Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "◄" ,"▼", "►"];

let keyCodes = [
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
textarea.setAttribute("placeholder", "Клавиатура Windows\nСмена языка - Ctrl + Alt (в таком порядке)")
app.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
app.appendChild(keyboard);

let createKeys = function(buttons) {
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

    let keys = document.querySelectorAll(".key");

    keys.forEach((e, i) => {
        e.setAttribute('data-code', keyCodes[i])
        e.addEventListener("mousedown", handleKeyMouseDown);
        e.addEventListener("mouseup", handleKeyMouseUp);
        e.addEventListener("mouseleave", handleKeyMouseLeave);
    
    })
};

createKeys(buttons);


let keys = document.querySelectorAll(".key");
let eng = true;
let caps = false;
let alt = false;
let ctrl = false;

let focus = false;

let switchLanguage = function() {
    document.querySelectorAll('.keyboard-row').forEach(e => {e.remove()})
    if (eng) {
        eng = !eng;
        createKeys(rubuttons);
        keys = document.querySelectorAll(".key");
    } else {
        eng = !eng;
        createKeys(buttons);
        keys = document.querySelectorAll(".key");
    }
    
}

function handleKeyMouseDown(e) {
        e.target.classList.add("key_active")
        let key = e.target.innerText;
        switch (key) {
            default :
                textarea.value += key;
                break
            case 'Backspace':
                let text = textarea.value;
                textarea.value = text.substring(0, text.length - 1);
                break;
            case 'Tab':
                textarea.value += "    ";
                break;
            case 'Del':
                break;
            case 'Caps':
                if (!caps) {
                    keys.forEach(e => {
                        if (e.innerHTML.length < 2) {
                            e.innerHTML = e.innerHTML.toUpperCase();
                        }
                    })
                } else {
                    keys.forEach(e => {
                        if (e.innerHTML.length < 2) {
                            e.innerHTML = e.innerHTML.toLowerCase();
                        }
                    })
                }
                caps = !caps
                break;
            case 'Enter':
                textarea.value += '\n';
                break;
            case 'Shift':
                break;
            case 'Ctrl':
                break;
            case 'Alt':
                break;
            case 'Win':
                break;
            case 'Space':
                textarea.value += " "
                break;
        }

        console.log(e.target.innerHTML)
}

function handleKeyMouseUp(e) {
    if (!e.target.classList.contains("key_active")) {
        e.target.classList.add("key_active")
    } e.target.classList.remove("key_active")
}

function handleKeyMouseLeave(e) {
    if (!e.target.classList.contains("key_active")) {
        e.target.classList.add("key_active")
    } e.target.classList.remove("key_active")
}

function handleKeyDown(e) {
    let key = e.key;
    let button = document.querySelector(`[data-code="${e.keyCode}"]`);
    let dkey = button.innerText;
    keyCodes = keyCodes.map(e => {
       return e = +e;
    })
    switch (key) {
        default :
            if (!keyCodes.includes(e.keyCode)) {
                return null
            } else
            if (!focus) {
                textarea.value += dkey;
            }
            break
        case 'Backspace':
            break;
        case 'Tab':
            e.preventDefault();
            textarea.value += "    ";
            break;
        case 'Delete':
            break;
        case 'CapsLock':
            if (!caps) {
                keys.forEach(e => {
                    if (e.innerHTML.length < 2) {
                        e.innerHTML = e.innerHTML.toUpperCase();
                    }
                })
            } else {
                keys.forEach(e => {
                    if (e.innerHTML.length < 2) {
                        e.innerHTML = e.innerHTML.toLowerCase();
                    }
                })
            }
            caps = !caps
            break;
        case 'Enter':
            if (!focus) {
                textarea.value += '\n';
            }

            break;
        case 'Shift':
            keys.forEach(e => {
                if (e.innerHTML.length < 2) {
                    e.innerHTML = e.innerHTML.toUpperCase();
                }
            })
            break;
        case 'Control':
            ctrl = true;
            break;
        case 'Alt':
            alt = !alt;
            e.preventDefault();
            if (ctrl) {
                switchLanguage();
            }
            break;
        case 'Meta':
            break;
        case 'Space':
            textarea.value += " ";
            break;
        case 'ArrowUp':
            textarea.value += "▲"
            break;
        case 'ArrowLeft':
            textarea.value += "◄"
            break;
        case 'ArrowDown':
            textarea.value += "▼"
            break;
        case 'ArrowRight':
            textarea.value += "►"
            break;
    }
    let btn = document.querySelector(`[data-code="${e.keyCode}"]`)
    btn.classList.add("key_active");
}

let handleKeyUp = function(e) {
    let key = e.key;

    let btn = document.querySelector(`[data-code="${e.keyCode}"]`)
    btn ? btn.classList.remove("key_active") : null;

    switch (key) {
        case 'Shift':
            keys.forEach(e => {
                if (e.innerHTML.length < 2) {
                    e.innerHTML = e.innerHTML.toLowerCase();
                }
            })
        break
        case 'Control':
            ctrl = false;
            break;
    }
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
textarea.addEventListener("focusin", function(e) {
    e.preventDefault();
    focus = true;
})
textarea.addEventListener("focusout", function(e) {
    focus = false;
})
