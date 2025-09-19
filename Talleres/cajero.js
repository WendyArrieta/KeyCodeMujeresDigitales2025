//instancias
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Cuenta
let cuenta = {
  numero: "1001",
  propietario: "Wendy Arrieta",
  pin: "1234",
  saldo: 50000000,  
};

/**
 * TO DO
 * 1. Multi sesiones
  */

/**
 * 1. Consultar saldo
 * 2. Depositar dinero
 * 3. Retirar dinero
 * 4. Salir
 */

const preguntar = (preguntar) => {
    console.log(BIENVENIDO AL CAJERO AUTOMÁTICO=======);

