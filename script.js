const starEl = document.getElementById("start");
// console.log(starEl);
const stopEl = document.getElementById("stop");
// console.log(stopEl);
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let interval;
let timeLeft = 1800;

function updateTimer(){
     let minutes = Math.floor(timeLeft /60);
    
     let seconds  = timeLeft % 60;
     let formattedTime = `${minutes.toString().padStart(2,  "0") }: ${seconds.toString().padStart(2, "0")}`


     timerEl.innerHTML = formattedTime;

   
}


function startTimer() {
   interval = setInterval (() => {
        timeLeft --;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1800;
            updateTimer();
        }
   }, 1000);
  }


  function stopTimer(){

    clearInterval(interval);


}

function resetTimer(){
    clearInterval (interval);
    timeLeft = 1800;
    updateTimer();
}


starEl.addEventListener("click",startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
    
