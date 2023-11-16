function agregarALaPantalla(value) {
  document.getElementById("pantalla").value += value;
}
// function calcular() {
//   const valorPantalla = document.getElementById("pantalla").value;
//   const result = eval(valorPantalla);
//   document.getElementById("pantalla").value = result;
// }
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;

  // Validar que la expresión contiene solo números y operadores matemáticos
  const expresionValida = /^[0-9+\-*/. ]+$/.test(valorPantalla);

  if (expresionValida) {
    try {
      const result = eval(valorPantalla);
      document.getElementById("pantalla").value = result;
      console.log("ok");
    } catch (error) {
      document.getElementById("pantalla").value = "error";
      console.log("Error en la evaluación:", error);
    }
   console.log("Error: La expresión contiene caracteres no permitidos");
  }
}

function limpiarPantalla() {
  document.getElementById("pantalla").value = "";
}