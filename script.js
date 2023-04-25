const buttons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace']

const app = document.createElement('section');
app.className = 'app';
document.body.appendChild(app);

const textarea = document.createElement('textarea');
textarea.className = 'screen';
app.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
app.appendChild(keyboard);

for (let i = 0; i <= 64; i++) {
    let el = document.createElement('button');
    el.className = 'key';
    el.id = `key${i}`
    el.innerHTML = buttons[i];
    keyboard.appendChild(el);
}
