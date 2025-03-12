function calcularInteresMensual(saldo, tasaInteresAnual) {
  // Convierte la tasa de interés anual a una mensual
  const tasaInteresMensual = tasaInteresAnual / 12;

  // Calcula el interés mensual
  const interesMensual = saldo * (tasaInteresMensual / 100);

  return interesMensual;
}

// Ejemplo de uso
const saldo = 1000; // Saldo inicial en dólares
const tasaInteresAnual = 12; // Tasa de interés anual en porcentaje

const interes = calcularInteresMensual(saldo, tasaInteresAnual);
console.log(`El interés mensual sobre un saldo de $${saldo} es $${interes.toFixed(2)}`);
