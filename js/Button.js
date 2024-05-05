// Todo

let TodoBtnSwc = 1;

function TodoBtn() {
    const todobtn = document.querySelector(".TodoHidden");
    if(TodoBtnSwc == 0) {
        todobtn.style.visibility = 'hidden';
        TodoBtnSwc = 1;
    }
    else {
        todobtn.removeAttribute('style');
        TodoBtnSwc = 0;
    }
    console.log(TodoBtnSwc);
}

// Option

let OptBtnSwc = 1;

function OptBtn() {
    const optArea = document.querySelector("#optionArea");
    if(OptBtnSwc == 0){
        optArea.style.visibility = 'hidden';
        OptBtnSwc = 1;
    }
    else {
        optArea.removeAttribute('style');
        OptBtnSwc = 0;
    }
}

let userBoxSwc = 1;

function userMore() {
    const userBox = document.getElementById('userBox');
    if(userBoxSwc == 0) {
        userBox.style.visibility = 'hidden';
        userBoxSwc = 1;
    }
    else{
        userBox.removeAttribute('style');
        userBoxSwc = 0;
    }
}

function LogOut() {
    const textBox = document.getElementById('Greet');
    const inputBox = document.getElementById('name');
    const userBox = document.getElementById('userBox');
    const optbtn = document.getElementById("optionBtn");
    window.localStorage.removeItem('name');
    textBox.textContent = 'What is your name?';
    inputBox.value = '';
    inputBox.removeAttribute('style');
    optbtn.style.visibility = 'hidden';
    userBox.style.visibility = 'hidden';
    userBoxSwc = 1;
    OptBtn();
}

// 첫 로딩 시 옵션버튼 존재 유무
const Name = window.localStorage.getItem('name')
    if(Name != null) {
        const optbtn = document.getElementById("optionBtn");
        optbtn.removeAttribute('style');
    }