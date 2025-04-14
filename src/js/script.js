var nome = prompt("Insira seu nome: ");
var sobrenome = prompt("Insira seu sobrenome: ");

if (nome =="") {
    alert("Nome obrigatório");
    var nome = prompt("Insira seu nome: ");
}
else if (sobrenome=="") {
    alert("Sobrenome obrigatório");
    var sobrenome = prompt("Insira seu sobrenome: ");
} else{
    alert("Cadasto realizado! Veja os detalhes no console");
}
console.log("Nome do usuário: " + nome);
console.log("Sobrenome do usuário: " + sobrenome);

var nomeVinho = prompt(" Digite o nome do vinho: ");
var tipoVinho = prompt(" Digite o tipo de vinho: ");
var safra = prompt(" Digite a qual a safra(ano): ");
var quantidade = prompt("Digite a quantidade: ");

if (nomeVinho =="") {
    alert("Nome do vinho obrigatório");
    var nomeVinho= prompt("Insira o nome do vinho: ");
} else if (tipoVinho=="") {
    alert("Tipo de vinho obrigatório");
    var sobrenome = prompt("Insira o tipo de vinho: ");
