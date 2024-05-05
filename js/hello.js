const textBox = document.getElementById('Greet');
const inputBox = document.getElementById('name');

function findName(){
    const Name = window.localStorage.getItem('name')
    if(Name != null) {
        textBox.textContent = `Good Day, ${Name}.`
        inputBox.style.visibility = 'hidden';
    }
}

function enterKey() {
    if(window.event.keyCode == 13) {
        getName();
    }
}

function getName() {
    const optbtn = document.getElementById("optionBtn");
    const Name = inputBox.value;
    textBox.textContent = `Good Day, ${Name}.`
    inputBox.style.visibility = 'hidden';
    optbtn.removeAttribute('style');
    window.localStorage.setItem('name', Name);
}

findName();