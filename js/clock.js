const clock = document.querySelector("h2#clock");

let count = 0;

const sayHello = () => {
    const date = new Date();
    let hour = String(date.getHours());
    let min = String(date.getMinutes());
    let sec = String(date.getSeconds());

    clock.innerText = `${hour.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
}

sayHello();
const helloInterval = setInterval(sayHello, 1000);