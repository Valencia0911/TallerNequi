let movimientos = [50000,0,48000,-20000,-36000,-20000];
let posicionEncontrada;

for(let i = 0; i < movimientos.length; i++) {
    if(movimientos[i]== 0){
        continue
    }else if(movimientos[i]==-20000 ){
        posicionEncontrada=i
        console.log("Pago encontrado", posicionEncontrada)
        break;
    }

}