let usuarios = [
    {
        nombre: "Cristian",
        movimientos: [50000, -20000, 30000]
    },
    {
        nombre: "Maria",
        movimientos: [10000, -5000, 20000]
    },
    {
        nombre: "Isabel",
        movimientos: [40000, -10000, -5000]
    }
];

for(let usuario of usuarios) {
    let totalUsuario = 0;
    for(let movimiento of usuario.movimientos) {
        totalUsuario = totalUsuario + movimiento;
    }
    console.log("Usuario:", usuario.nombre);
    console.log("Total gastado:", totalUsuario);
}