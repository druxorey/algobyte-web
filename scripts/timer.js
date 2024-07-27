function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer <= 0) {
            timer = duration;
        }
        timer--;
    }, 1000);
    setTimeout(function(){
        clearInterval(countdown);
        quiz.style.display = 'none';
        timeOut.style.display = 'block';
    }, (duration + 2) * 1000);
}

window.onload = function () {
    var timerDuration = 60 * 20,
        display = document.querySelector('#timer');
    startTimer(timerDuration, display);
};
