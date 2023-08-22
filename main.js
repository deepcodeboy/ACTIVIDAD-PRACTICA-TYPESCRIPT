function calculadora() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion")
        .value;
    var resultado;
    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Por favor, ingrese números válidos.";
    }
    else {
        switch (operacion) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "division":
                if (numero2 === 0) {
                    resultado = "No se puede dividir por cero.";
                }
                else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                resultado = "Operación no válida.";
        }
    }
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Numero par e impar
document.addEventListener("DOMContentLoaded", function () {
    var numeroForm = document.getElementById("numeroForm");
    var paresSpan = document.getElementById("pares");
    var imparesSpan = document.getElementById("impares");
    numeroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var inicio = parseInt(document.getElementById("inicio").value);
        var fin = parseInt(document.getElementById("fin").value);
        if (isNaN(inicio) || isNaN(fin)) {
            alert("Por favor, ingrese números válidos en ambos campos.");
            return;
        }
        var pares = 0;
        var impares = 0;
        for (var num = inicio; num <= fin; num++) {
            if (num % 2 === 0) {
                pares++;
            }
            else {
                impares++;
            }
        }
        paresSpan.textContent = pares.toString();
        imparesSpan.textContent = impares.toString();
    });
});
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Tabla de multiplicar
document.addEventListener("DOMContentLoaded", function () {
    var mostrarTablaButton = document.getElementById("mostrarTabla");
    var tablaResultado = document.getElementById("tablaResultado");
    mostrarTablaButton.addEventListener("click", function () {
        var typeNum = document.getElementById("numero");
        var typeLimit = document.getElementById("limite");
        var numero = parseInt(typeNum.value);
        var limite = parseInt(typeLimit.value);
        if (isNaN(numero) || isNaN(limite)) {
            alert("Por favor, ingrese números válidos en ambos campos.");
            return;
        }
        tablaResultado.innerHTML = ''; // Limpiar resultados anteriores
        for (var i = 1; i <= limite; i++) {
            var resultado = numero * i;
            var listItem = document.createElement("li");
            listItem.textContent = "".concat(numero, " x ").concat(i, " = ").concat(resultado);
            tablaResultado.appendChild(listItem);
        }
    });
});
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Secuencia de Fibonacci
document.addEventListener("DOMContentLoaded", function () {
    var generarButton = document.getElementById("generar");
    var resultado = document.getElementById("resultado");
    generarButton.addEventListener("click", function () {
        var numero = parseInt(document.getElementById("numero").value);
        if (isNaN(numero) || numero < 1) {
            alert("Por favor, ingrese un número válido mayor o igual a 1. No le pude hacer andar :(");
            return;
        }
        var fibonacci = generateFibonacci(numero);
        resultado.textContent = "Secuencia de Fibonacci: " + fibonacci.join(", ");
    });
    function generateFibonacci(n) {
        var fibonacci = [0, 1];
        while (fibonacci.length < n) {
            var nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            fibonacci.push(nextNumber);
        }
        return fibonacci;
    }
});
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Convertidor de temperatura
document.addEventListener("DOMContentLoaded", function () {
    var convertirButton = document.getElementById("convertir");
    var fahrenheitSpan = document.getElementById("fahrenheit");
    convertirButton.addEventListener("click", function () {
        var celsius = parseFloat(document.getElementById("celsius").value);
        if (isNaN(celsius)) {
            alert("Por favor, ingrese una temperatura válida en grados Celsius.");
            return;
        }
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitSpan.textContent = fahrenheit.toFixed(2); // Mostrar con dos decimales
    });
});
//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Contador de Palabras
document.addEventListener("DOMContentLoaded", function () {
    var contarPalabrasButton = document.getElementById("contarPalabras");
    var cantidadPalabrasSpan = document.getElementById("cantidadPalabras");
    contarPalabrasButton.addEventListener("click", function () {
        var oracion = document.getElementById("oracion").value.trim();
        if (oracion === "") {
            alert("Por favor, ingrese una oración.");
            return;
        }
        var palabras = oracion.split(/\s+/); // Dividir la oración en palabras usando espacios en blanco como separadores
        var cantidadPalabras = palabras.length;
        cantidadPalabrasSpan.textContent = cantidadPalabras.toString();
    });
});
