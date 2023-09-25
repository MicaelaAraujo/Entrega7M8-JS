document.addEventListener("DOMContentLoaded", function() {
  const filas = document.querySelectorAll("table tr:not(:first-child)");
  const saldoTotal = calcularFlujoDeCaja(filas);
  const resultadoElement = document.getElementById("resultado");
  const evaluacion = evaluarFlujoDeCaja(saldoTotal);

  switch (evaluacion) {
      case 1:
          resultadoElement.textContent = `El flujo de caja genera ganancias por un monto de $${saldoTotal.toFixed(2)}.`;
          break;
      case -1:
          resultadoElement.textContent = `El flujo de caja genera pérdidas por un monto de $${Math.abs(saldoTotal).toFixed(2)}.`;
          break;
      default:
          resultadoElement.textContent = "El flujo de caja se mantiene equilibrado, sin ganancias ni pérdidas.";
  }
});

function calcularFlujoDeCaja(filas) {
  let saldoTotal = 0;
  filas.forEach((fila) => {
      const ingreso = parseFloat(fila.cells[1].textContent);
      const egreso = parseFloat(fila.cells[2].textContent);
      saldoTotal += ingreso - egreso;
  });
  return saldoTotal;
}

function evaluarFlujoDeCaja(saldoTotal) {
  if (saldoTotal > 0) {
      return 1; 
  } else if (saldoTotal < 0) {
      return -1; 
  } else {
      return 0; 
  }
}

  