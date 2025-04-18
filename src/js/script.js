var nome = prompt("Insira seu nome: ");
var sobrenome = prompt("Insira seu sobrenome: ");

if (nome =="") {
    alert("Nome obrigatório");
    var nome = prompt("Insira seu nome: ");
}
if (sobrenome=="") {
    alert("Sobrenome obrigatório");
    var sobrenome = prompt("Insira seu sobrenome: "); 
}
alert("Cadasto realizado! Veja os detalhes no console");

console.log("Nome do usuário: " + nome);
console.log("Sobrenome do usuário: " + sobrenome);

var nomeVinho = prompt(" Digite o nome do vinho: ");
if (nomeVinho =="") {
    alert("Nome do vinho obrigatório"); 
    var nomeVinho= prompt("Insira o nome do vinho: "); }
console.log("Nome do vinho: " + nomeVinho);

var tipoVinho = prompt(" Digite o tipo de vinho: ");
if (tipoVinho=="") {
    alert("Tipo de vinho obrigatório");
    var tipoVinho = prompt("Insira o tipo de vinho: "); }
console.log("Tipo do vinho: " + tipoVinho);

var safra = parseInt(prompt(" Digite a qual a safra(ano): "));
if (safra=="") {
    alert("Safra(ano) do vinho obrigatório.");
    var safra = prompt("Insira o ano do vinho: "); }

var quantidade = prompt("Digite a quantidade: ");
if (quantidade=="") {
    alert("Selecione a quantidade de vinhos.");
    var quantidade = prompt("Insira a quantidade de vinhos: "); }


if (safra > 2025) {
    alert('Ano inválido!')
    var safra = parseInt(prompt("Instira o ano do vinho!")); }

if (safra >= 2020) {
    alert("Esse vinho é considerado jovem.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO JOVEM)");
}
else if (safra >= 2015) {
    alert("Esse vinho é considerado amadurecido.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO AMADURECIDO)");
}
else if (safra < 2015) {
    alert("Esse vinho é considerado antigo.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO ANTIGO)");
}
    
alert("As informações foram coletadas! Confira no console.")

if (quantidade <= 5) {
    console.log("Quantidade de vinho(s): " + quantidade  +  " (ESTOQUE BAIXO)" );
}
else {
    console.log("Quantidade de vinho(s): " + quantidade);
}
