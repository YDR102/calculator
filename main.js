const display = document.getElementById("display");
const calculate = document.querySelector(".cal");
const clear = document.querySelector(".clear");
const btns = document.querySelectorAll(".btn");
const errorTime = 2000;

// Añadir event listeners a cada botón
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Añadir el valor del botón al display
    display.value += e.target.textContent;
  });
});

// Función para limpiar el display
clear.addEventListener("click", function () {
  display.value = "";
});

// Función para calcular el resultado
calculate.addEventListener("click", function () {
  if (display.value.trim() === "") {
    // Si el display está vacío
    displayError();
    return;
  }

  try {
    const result = eval(display.value); // Evalúa la expresión en el display

    // Verifica si el resultado es NaN o Infinity
    if (isNaN(result) ) {
      displayError("Error");
    } else if (!isFinite(result)){
        displayError("∞");
    } else {
         display.value = result;
    }
  } catch (error) {
    // Captura cualquier error y muestra "Error"
    displayError();
  }
});

// Función para mostrar "Error" por 1.5 segundos
function displayError(error) {
  display.value = error;
  setTimeout(function () {
    display.value = ""; // Borra el mensaje de error después de lo marcado en errorTime
  }, errorTime);
}
