function calculadora() {
  const numero1 = parseFloat(
    (document.getElementById("numero1") as HTMLInputElement).value
  );
  const numero2 = parseFloat(
    (document.getElementById("numero2") as HTMLInputElement).value
  );
  const operacion = (document.getElementById("operacion") as HTMLSelectElement)
    .value;
  let resultado: string | number;

  if (isNaN(numero1) || isNaN(numero2)) {
    resultado = "Por favor, ingrese números válidos.";
  } else {
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
        } else {
          resultado = numero1 / numero2;
        }
        break;
      default:
        resultado = "Operación no válida.";
    }
  }

  document.getElementById("resultado")!.textContent = "Resultado: " + resultado;
}

//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Numero par e impar
document.addEventListener("DOMContentLoaded", () => {
  const numeroForm = document.getElementById("numeroForm") as HTMLFormElement;
  const paresSpan = document.getElementById("pares") as HTMLSpanElement;
  const imparesSpan = document.getElementById("impares") as HTMLSpanElement;

  numeroForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const inicio = parseInt(
      (document.getElementById("inicio") as HTMLInputElement).value
    );
    const fin = parseInt(
      (document.getElementById("fin") as HTMLInputElement).value
    );

    if (isNaN(inicio) || isNaN(fin)) {
      alert("Por favor, ingrese números válidos en ambos campos.");
      return;
    }

    let pares = 0;
    let impares = 0;

    for (let num = inicio; num <= fin; num++) {
      if (num % 2 === 0) {
        pares++;
      } else {
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
document.addEventListener("DOMContentLoaded", () => {
    const mostrarTablaButton = document.getElementById("mostrarTabla");
    const tablaResultado = document.getElementById("tablaResultado");

    mostrarTablaButton.addEventListener("click", () => {
        const typeNum = (document.getElementById("numero") as HTMLInputElement);
        const typeLimit = (document.getElementById("limite") as HTMLInputElement);
        const numero = parseInt(typeNum.value);
        const limite = parseInt(typeLimit.value);

        if (isNaN(numero) || isNaN(limite)) {
            alert("Por favor, ingrese números válidos en ambos campos.");
            return;
        }

        tablaResultado.innerHTML = ''; // Limpiar resultados anteriores

        for (let i = 1; i <= limite; i++) {
            const resultado = numero * i;
            const listItem = document.createElement("li");
            listItem.textContent = `${numero} x ${i} = ${resultado}`;
            tablaResultado.appendChild(listItem);
        }
    });
});

//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Secuencia de Fibonacci
document.addEventListener("DOMContentLoaded", () => {
    const generarButton = document.getElementById("generar");
    const resultado = document.getElementById("resultado");

    generarButton.addEventListener("click", () => {
        const numero = parseInt((document.getElementById("numero") as HTMLInputElement).value);

        if (isNaN(numero) || numero < 1) {
            alert("Por favor, ingrese un número válido mayor o igual a 1. No le pude hacer andar :(");
            return;
        }

        const fibonacci = generateFibonacci(numero);

        resultado.textContent = "Secuencia de Fibonacci: " + fibonacci.join(", ");
    });

    function generateFibonacci(n: number): number[] {
        const fibonacci: number[] = [0, 1];

        while (fibonacci.length < n) {
            const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            fibonacci.push(nextNumber);
        }

        return fibonacci;
    }
});

//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Convertidor de temperatura
document.addEventListener("DOMContentLoaded", () => {
    const convertirButton = document.getElementById("convertir");
    const fahrenheitSpan = document.getElementById("fahrenheit");

    convertirButton.addEventListener("click", () => {
        const celsius = parseFloat((document.getElementById("celsius") as HTMLInputElement).value);

        if (isNaN(celsius)) {
            alert("Por favor, ingrese una temperatura válida en grados Celsius.");
            return;
        }

        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitSpan.textContent = fahrenheit.toFixed(2); // Mostrar con dos decimales
    });
});

//-----------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
//Contador de Palabras
document.addEventListener("DOMContentLoaded", () => {
    const contarPalabrasButton = document.getElementById("contarPalabras");
    const cantidadPalabrasSpan = document.getElementById("cantidadPalabras");

    contarPalabrasButton.addEventListener("click", () => {
        const oracion = (document.getElementById("oracion") as HTMLInputElement).value.trim();

        if (oracion === "") {
            alert("Por favor, ingrese una oración.");
            return;
        }

        const palabras = oracion.split(/\s+/); // Dividir la oración en palabras usando espacios en blanco como separadores
        const cantidadPalabras = palabras.length;
        
        cantidadPalabrasSpan.textContent = cantidadPalabras.toString();
    });
});
