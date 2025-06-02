function incrementar(contador) {
  // Obtenemos el valor actual del contador
  let valor = document.getElementById('contador-' + contador).textContent;
  // Convertimos el valor a un número entero
  valor = parseInt(valor);
  // Incrementamos el valor
  valor++;
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador-' + contador).textContent = valor;
}
function decrementar(contador) {
  // Obtenemos el valor actual del contador
  let valor = document.getElementById('contador-' + contador).textContent;
  // Convertimos el valor a un número entero
  valor = parseInt(valor);
  // Incrementamos el valor
  if (valor > 0) {
    valor--;
  }
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador-' + contador).textContent = valor;
}
function reiniciar(contador) {
  // Actualizamos el contenido del elemento con el nuevo valor
  document.getElementById('contador-' + contador).textContent = '0';
}
