const prompt = require('prompt-sync')();
let opcion;

do {
    console.log("MENU");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");
    let mensaje=prompt("Escoja una opción ");
    opcion = parseInt(mensaje);
    
    if(opcion===1){
        console.log("Su saldo es: ");
    }
    else if(opcion===2){
        console.log("Cuanto dinero deseas enviar: ")        
    }
    else if(opcion===3){
        console.log("Cuanto vas a recargar?: ")
    }
    else if(opcion===4){
        console.log("Gracias por usar nequi")
    }
    else{
        console.log("Ingrese un numero valido")
    }

}
while(opcion!=4);
