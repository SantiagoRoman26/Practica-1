function setCookie(nombre, valor, expiracion){
    var d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 100);
    var expirar = "expires" + d.toUTCString
    document.cookie = nombre + "=" + valor + ";" + expirar + ";path=/";
}

function getCookie(nombre) {
    var nom = nombre + "=";
    var array = document.cookie.split(";");
    for (var i = 0; i < array.length; i++) {
        var c = array[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

var verCookies = function () {
    alert("Las cookies actuales son:\n" + document.cookie);
}
var verCookies = function () {
    alert("Las cookies actuales son:\n" + document.cookie);
}
var eliminar = function () {
    var nombre = prompt("ingrese el nombre de la cookie para eliminar");
    setCookie(nombre)
}
var botonMC = document.getElementById("modificar");
botonMC.onclick = function () {
    crear();
};

var botonEC = document.getElementById("eliminar");
botonEC.onclick = function () {
    eliminar();
};

var buscar = function(){
    var nombre = prompt("Ingrese el nombre de la cookie para buscarla");
    var resultado = getCookie(nombre);
    alert(resultado);
}

window.onload = function () {
    var botonVC = document.getElementById("verTodas");
    botonVC.onclick = function () {
        verCookies();
    }
};

window.onload = function () {
    var botonVC = document.getElementById("verTodas");
    botonVC.onclick = function () {
        verCookies();
    }
};
window.onload = function () {k
    var botonVC = document.getElementById("verTodas");
    botonVC.onclick = function () {
        verCookies();
    };

    var botonCC = document.getElementById("crear");
    botonCC.onclick = function () {
        crear();
    }
};