const prompt = require('prompt-sync')();

const pinCorrecto="2225";
let intento=prompt("Ingrese su pin: ");    

while(pinCorrecto!=intento){
    console.log("Pin incorrecto, intente nuevamente");
    intento=prompt("Ingrese su pin nuevamente: "); 
}

console.log("Bienvenido a Nequi")