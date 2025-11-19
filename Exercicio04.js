// let n1 = parseInt(prompt("Digite sua primeira nota "))

// let n2 = parseInt(prompt("Digite sua segunda nota "))

// let n3 = parseInt(prompt("Digite sua terceira nota "))

// let n4 = parseInt(prompt("Digite sua quarta nota "))

// // Calculando a média

// let soma = (n1 + n2 + n3 + n4) / 4;

// console.log(soma)

// if (soma >= 7.0) {
//     console.log("APROVADO");

// } else if (soma >= 5.0) {
//     console.log("RECUPERAÇÃO");
// } else {
//     console.log("REPROVADO");
// } 


alert("Informe ás notas de 0 á 10 ")
let nota1 = parseFloat(prompt("Digite a primeira nota : "))
let nota2 = parseFloat(prompt("Digite a segunda nota : "))
let nota3 = parseFloat(prompt("Digite a terceira nota : "))
let nota4 = parseFloat(prompt("Digite a quarta nota : "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log ("A média do aluno é: " + média)

if(media >= 7){
    console.log ( "Aprovado")
}
else if ( media < 7 && media>= 5){
    console.log ( "Recuperação")
} 
else{ 
    console.log( "Reprovado ;-;")
}
