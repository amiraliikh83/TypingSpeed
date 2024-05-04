const theTimer = document.querySelector(".timer");
const testArea = document.querySelector('#test-area');
var timer = [0, 0, 0, 0];

var timerrunning = false;

function ledingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
function runtime() {
    let currentime = ledingZero(timer[0]) + ":" + ledingZero(timer[1]) + ":" + ledingZero(timer[2]);
    theTimer.innerHTML = currentime;



    timer[3]++;


    timer[0] = Math.floor
        ((timer[3] / 100) / 60);


    timer[1] = Math.floor(timer[3] / 100)
        - (timer[0] * 60);


    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))


}






function start() {
    let textEnteredlenght = testArea.value.length

    if (textEnteredlenght == 0 && !timerrunning) {
        timerrunning = true
        setInterval(runtime, 10)
    }

}

testArea.addEventListener("keypress", start);

