let movimientos = [50000,150000,48000,-20000,-36000,-20000];

let total= 0;
let cantidadRetiros =0;

for (let movimiento of movimientos){
    total=total+movimiento;
    if(movimiento < 0){
        cantidadRetiros++;
    }else{
        continue;
    }
}
console.log(cantidadRetiros);

const prompt = require('prompt-sync')();
