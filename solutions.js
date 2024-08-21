// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number') {  //Pongo typeof para decirle q cualquier dato que sea diferente a un numero sea negado.
    console.log("Los datos de entrada no son adecuados"); //Mensaje pro
    return;
  }
  return a + b; // Si pasa el fintro pum respuesta 
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n !== 'number' || n < 0) { // Aplicamos la no pasas mi rey
    console.log("Los datos de entrada no son adecuados"); //Mensaje pro
    return;  
  }
  if (n === 0 || n === 1) { //Si el numerito es 0 o 1 pues tin tambien es 1 
    return 1;
  }
  let result = 1; // Inicializamos en 1
  for (let i = 2; i <= n; i++) { //El for para operar
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  for (let i = 0; i < arr.length; i++) {  
    if (typeof arr[i] !== 'number') { // Le aplicamos el tatequieto
      console.log("Los datos de entrada no son adecuados"); // mensajito 
      return; // Detenemos la función si algún elemento no es un número
    }
  }
  return Math.max(...arr); // Devuelve el mayor número en el arreglo
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') { // Le aplicamos el tatequieto
    console.log("Los datos de entrada no son adecuados"); // mensajito de bye bye 
    return;
  }
  
  const vowels = 'aeiouAEIOU'; // Vocales en minúsculas y mayúsculas
  let count = 0; // Cuenta desde 0 
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {  // Verificacion mela para ver si 'n' es un número, mayor que 1 y un entero
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) { // Verificar si 'n' tiene divisores distintos de 1 y él mismo
    if (n % i === 0) { // Si 'n' es divisible por 'i', no es primo
      return false;
    }
  }
  
  return true;  // si es primito pasa la prueba 
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
