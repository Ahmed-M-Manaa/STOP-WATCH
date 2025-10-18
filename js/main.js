let time = document.querySelector('.time');


let second = 0
let minute = 0
let hour = 0
let timer = null;
 
function stopwatch (){
    second++
    if(second > 60){
        minute++
        second=0
        if(minute > 60){
            hour++
            minute=0
        }     
    } 
let s =  `${second}>10`?`0${second}`:`${second}`
let m =  `${minute}>10`?`0${minute}`:`${minute}`
let h =   `${hour}>10`?`0${hour}`:`${hour}` 

    time.innerHTML = `${h}:${m}: ${s}`
}

function start(){

    if (timer !== null) {
        clearInterval(timer)
    }

    timer = setInterval(stopwatch,1000);
}
function stop() {
    if (timer !== null) {
        clearInterval(timer)
    }
}
function reset() {
    if (timer !== null) {
        clearInterval(timer)
    }
second = 0
minute = 0
hour = 0
time.innerHTML = `00:00:00`

}