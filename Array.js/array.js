// let frutas = ["Uvaverde " , "Goiaba" , "Morango" , "Melancia" , "Pera "];  //array/lista vazia 
//   //posição 0 da uvaverde  // Goiaba posição01   //Morango posição02   //melancoia posição03    // Pera posição04

// console.log("A lista de frutas tem" + frutas.length + "itens.");

// console.log("A primeira fruta é a : " + frutas [0]); 

// //acesse o item 4 da lista e lista e exiba-o no console 

// console.log(" o item 4 da minha lista é :" + frutas [3]);

// console.log(frutas);

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])

// }

//Crie uma lista de tarefas , contendo no maximo 10 itens 
// e exiba cada tarefa 

// Crie uma lista de tarefas com no máximo 10 itens
let tarefas = [
  "Estudar JavaScript",
  "Ler 20 páginas de um livro",
  "Fazer exercícios físicos",
  "Arrumar o quarto",
  "Revisar anotações da aula",
  "Praticar lógica de programação",
  "Responder e-mails",
  "Regar as plantas",
  "Organizar arquivos do computador",
  "Planejar a semana"
];

// Exiba quantas tarefas existem
console.log("A lista de tarefas tem " + tarefas.length + " itens.");

// Exiba a primeira tarefa
console.log("A primeira tarefa é: " + tarefas[0]);

// Acesse o item 4 (posição 3)
console.log("O item 4 da minha lista é: " + tarefas[3]);

// Exiba a lista completa
console.log(tarefas);

// Exiba cada tarefa usando um loop
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}
