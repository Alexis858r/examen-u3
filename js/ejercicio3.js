//     Ejercicio 3:  
//     Realiza un script que cuente el número de vocales de un texto. 

function contarVocales(texto) {
    return [...texto].filter(c => 'aeiouAEIOU'.includes(c)).length;
}

let texto = prompt("Por favor ingresa un texto");
console.log(texto?.trim() ? `El número de vocales es: ${contarVocales(texto)}` : "Texto inválido.");
