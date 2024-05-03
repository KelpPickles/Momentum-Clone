const timeV = document.getElementById("time");
const secondV = document.getElementById("second");
const minuteV = document.getElementById("minute");
let secSwc = 0;

function loadTime() {
    let day = new Date();
    let h = String(day.getHours()).padStart(2, "0");
    let m = String(day.getMinutes()).padStart(2, "0");
    if (secSwc == 1) {
        timeV.textContent = h;
        minuteV.textContent = m;
        secondV.style.visibility = 'hidden';
        secSwc = 0;
    }
    else {
        timeV.textContent = h;
        minuteV.textContent = m;
        secondV.removeAttribute('style');
        secSwc = 1;
    }
}
loadTime();
setInterval(loadTime, 1000);