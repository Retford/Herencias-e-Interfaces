/*Importación de clases*/
import { Cliente } from './Cliente.js';
import { Cuenta } from './Cuenta.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { cuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const CuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '004', 0);

const cuentaNominaLeonardo = new cuentaNomina(cliente, '9898', '003', 100);
console.log(cuentaNominaLeonardo);

cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());
