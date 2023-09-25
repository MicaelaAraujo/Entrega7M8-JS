document.addEventListener("DOMContentLoaded", function () {
  const planesDeCredito = [
    { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 15 },
    { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 10 },
    { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 23 }
  ];

  function calcularInteres(plan) {
    return (plan.capital * plan.plazo * plan.tasa) / 100;
  }

  let sumaTotalIntereses = 0;

  for (const plan of planesDeCredito) {
    const interes = calcularInteres(plan);
    sumaTotalIntereses += interes;
  }

  const resultadoDiv = document.createElement("div");
  resultadoDiv.textContent = `La suma total de intereses es: ${sumaTotalIntereses}`;
  resultadoDiv.classList.add("resultado");
  document.body.appendChild(resultadoDiv);
});
