const timerel = document.querySelector(".timer");
const startel = document.querySelector(".start");
const stopel = document.querySelector(".stop");
const resetel = document.querySelector(".reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;


const startTimer = () => {
    startTime = Date.now() - elapsedTime;``
    timeInterval = setInterval(()=>{
       elapsedTime = Date.now() - startTime;
       timerel.innerHTML = formateTime(elapsedTime);
    },10);
    startel.disabled = true;
    stopel.disabled = false;
}

const formateTime = (elapsedTime) => {
     let milliSec = Math.floor((elapsedTime % 1000)/10);
     let second = Math.floor((elapsedTime % (1000*60))/1000);
     let minutes = Math.floor((elapsedTime % (1000*60*60))/(1000*60));
     let hour = Math.floor(elapsedTime / (1000*60*60));

     hour = hour < 10 ? "0"+hour : hour;
     minutes = minutes  < 10 ? "0"+minutes : minutes;
     second = second  < 10 ? "0"+second : second;
     milliSec = milliSec < 10 ? "0"+milliSec : milliSec;
     return hour+" : "+minutes+" : "+second+"."+milliSec;
}

const stopTimer = () => {
clearInterval(timeInterval)
startel.disabled = false;
    stopel.disabled = true;
}

const resetTimer = () => {
    clearInterval(timeInterval)
    elapsedTime = 0;
    timerel.innerHTML = "00 : 00 : 00";
    startel.disabled = false;
        stopel.disabled = true;
}
startel.onclick = () => {
     startTimer()
}

stopel.onclick = () => {
    stopTimer()
}

resetel.onclick = () => {
    resetTimer()
}