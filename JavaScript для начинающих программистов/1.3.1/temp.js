
document.addEventListener('DOMContentLoaded', main);

const button = document.querySelector('.button'),
    textInput = document.querySelector('.text-field'),
    container = document.querySelector('.container'),
    paragrafLimit = 5;


function main() {
    console.log('loaded')
    console.log(textInput);
    textInput.addEventListener('input', inputChange);
    textInput.addEventListener('keypress', (event) => {if (event.key ==='Enter') {
        buttonClick()
    }})
    button.addEventListener('click', buttonClick);
}

function inputChange(e){
    if (e.target.value.length > 0) {
        button.hidden = "";
    } else {
        button.hidden = "hidden";
    }
    console.log(e.target.value);
}

function buttonClick() {
    if (textInput.value.length === 0) {return}
    removeParagraf(paragrafLimit);
    addParagraf();
    textInput.value = "";
    button.hidden = 'hidden';
    textInput.focus()
}

function removeParagraf(limit=5) {
    const paragrafs = container.querySelectorAll('p');
    if (paragrafs.length === limit) {
        paragrafs[0].remove();
    }
}

function addParagraf() {
    element = document.createElement('p');
    element.textContent = textInput.value;
    container.append(element);
}