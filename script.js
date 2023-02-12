const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const seg = document.querySelector('#seg');

setInterval(() => {
    
    let date = new Date;    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    seg.innerHTML = `${formatTime(seconds)}`;

}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
    
}