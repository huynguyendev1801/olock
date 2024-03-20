const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
function updateClock() {
    const curentDate = new Date();
    const hour = curentDate.getHours();
    const minute = curentDate.getMinutes();
    const second = curentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);