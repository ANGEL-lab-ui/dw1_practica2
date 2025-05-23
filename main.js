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
}