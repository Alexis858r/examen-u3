//    Ejercicio 4: 
//    Haz un script que simule el juego de Piedra, Papel o Tijera contra el PC. 

function jugarPiedraPapelTijera(opcionUsuario) {
    const opciones = ["piedra", "papel", "tijera"]; //opciones que podemos usar tanto nosotros como la computadora

    if (!opciones.includes(opcionUsuario)) {
        return "Opción inválida, por favor selecciona entre:'piedra', 'papel', 'tijera'." ;
    }

    //Opciones que la computadora escoge de manera aleatoria.
    const opcionPC = opciones[Math.floor(Math.random() * 3)];
    
    
    if (opcionUsuario === opcionPC) {
        return `Empate! Ambos eligieron ${opcionPC}.`;
    } 
    if (
        (opcionUsuario === "piedra" && opcionPC === "tijera") ||   // EL "|| es un operador logico, ¿funcion? evaluar 2 expresiones boleanas y devuelve "true" o "false".
        (opcionUsuario === "papel" && opcionPC === "piedra") ||
        (opcionUsuario === "tijera" && opcionPC === "papel")
    ) {
        return `¡Ganaste! La PC eligió ${opcionPC}.`;
    } 
    return `¡Perdiste! La PC eligió ${opcionPC}.`;
}

// Pide ingresar un valor valido al usuario.
let opcionUsuario = prompt("Por favor selecciona entre 'piedra', 'papel' o 'tijera'").toLowerCase();

// Ejecuta el juego y muestra el resultado.
console.log(jugarPiedraPapelTijera(opcionUsuario));