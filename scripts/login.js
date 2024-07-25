document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isLogged = false;

    let nameList = ['administrador', 'Pablo Pérez', 'Juan García', 'Ana López', 'María Martínez', 'Pedro Rodríguez'];
    let passwordList = ['contraseña', 'tikeke', '12345', 'abcde', 'qwerty', 'zxcvb'];

    for (let i = 0; i < nameList.length; i++) {
        if (username === nameList[i] && password === passwordList[i]) {
            window.location.href = 'structure/welcome.html';
            isLogged = true;
        }
    }
    if (!isLogged) {
        errorDisplay.style.display = 'block';
    }
});
