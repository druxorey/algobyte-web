function validate() {
    var score = 0;
    var form = document.getElementById('quiz');

    for (var i = 1; i <= 5; i++) {
        var radios = form['q' + i];
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "true" && radio.checked) {
                score++;
            }
        }
    }

    if (score >= 6) {
        result.style.display = 'block';
        inputButton.style.display = 'none';
        wrongMessage.style.display = 'none';
    } else {
        var message = document.querySelector('#wrongMessage .error-message');
        message.textContent = '¡Error! Tu puntaje es: ' + score;
        wrongMessage.style.display = 'flex';
    }
}
