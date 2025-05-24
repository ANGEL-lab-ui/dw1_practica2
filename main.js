function incrementar() {
  // Obtenemos el valor actual del contador
  let valor = document.getElementById('contador').textContent;
  // Convertimos el valor a un número entero
  valor = parseInt(valor);
  // Incrementamos el valor
  valor++;
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador').textContent = valor;
}
function decrementar() {
  // Obtenemos el valor actual del contador
  let valor = document.getElementById('contador').textContent;
  // Convertimos el valor a un número entero
  valor = parseInt(valor);
  // Decrementamos el valor
  valor--;
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador').textContent = valor;
  if (valor < 0) {
    alert("El contador no puede ser menor que 0");
    document.getElementById('contador').textContent = 0;
  }
}
function reiniciar() {
  // Reiniciamos el contador a 0
  document.getElementById('contador').textContent = 0;
} 