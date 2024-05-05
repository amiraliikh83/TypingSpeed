const theTimer = document.querySelector(".timer");
const testArea = document.querySelector('#test-area');
const originText = document.querySelector("#origin-text p").innerHTML;
const testwrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset")


var timer = [0, 0, 0, 0];
var timerrunning = false;

var interval


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


function spellCheck() {
    let textEnterad = testArea.value;
    let originTextmatch = originText.substring(0, textEnterad.length);

    if (textEnterad == originText) {
        testwrapper.style.borderColor = "green"
        clearInterval(interval);
    } else {
        if (textEnterad == originTextmatch) {
            testwrapper.style.borderColor = "yellow"

        } else {
            testwrapper.style.borderColor = "red"
        }
    }

}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerrunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testwrapper.style.borderColor = "grey";
}

function start() {
    let textEnteredlenght = testArea.value.length

    if (textEnteredlenght == 0 && !timerrunning) {
        timerrunning = true
        interval = setInterval(runtime, 10)
    }

}

testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset)