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
    const optbtn = document.querySelector("#optionArea");
    if(OptBtnSwc == 0){
        optbtn.style.visibility = 'hidden';
        OptBtnSwc = 1;
    }
    else {
        optbtn.removeAttribute('style');
        OptBtnSwc = 0;
    }
}