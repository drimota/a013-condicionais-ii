const numero = Number(prompt("Digite um número"))

// Ifs Aninhados

// if(numero % 2===0){
//     console.log("é divisivel por 2")
//     if(numero % 3===0){
//         console.log("É divisível por 3")
//     } else {
//         console.log("Não é divisível por 3")
//     } 
// } else {
//     console.log("não divisivel por 2")
// }

// IF com operador lógico

if(numero % 2===0 || numero % 3===0) {
    console.log("é divisivel")
} else {
    console.log("não é divisivel")
}


