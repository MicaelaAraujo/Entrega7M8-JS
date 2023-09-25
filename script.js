document.addEventListener("DOMContentLoaded", function() {

    const filas = document.querySelectorAll("table tr:not(:first-child)");
  
    let saldoTotal = 0;
  
    filas.forEach((fila) => {
      const ingreso = parseFloat(fila.cells[1].textContent);
      const egreso = parseFloat(fila.cells[2].textContent);
  
      saldoTotal += ingreso - egreso;
    });
  
    const resultadoElement = document.getElementById("resultado");
  
    if (saldoTotal > 0) {
      resultadoElement.textContent = `El flujo de caja genera ganancias por un monto de $${saldoTotal.toFixed(2)}.`;
    } else if (saldoTotal < 0) {
      resultadoElement.textContent = `El flujo de caja genera pérdidas por un monto de $${Math.abs(saldoTotal).toFixed(2)}.`;
    } else {
      resultadoElement.textContent = "El flujo de caja se mantiene equilibrado, sin ganancias ni pérdidas.";
    }
  });
  