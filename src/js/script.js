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
    
} else if (safra=="") {
    alert("Safra(ano) do vinho obrigatório.");
    var safra = prompt("Insira o ano do vinho: ");

} else if (safra >= 2020) {
    alert("Esse vinho é considerado jovem.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO JOVEM)");
}
else if (safra >= 2015) {
    alert("Esse vinho é considerado amadurecido.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO AMADURECIDO)");
}
else if (safra <= 2015) {
    alert("Esse vinho é considerado antigo.")
    console.log("Safra(ano) do vinho: " + safra + " (VINHO ANTIGO)");
}

if (quantidade=="") {
    alert("Selecione a quantidade de vinhos.");
    var quantidade = prompt("Insira a quantidade de vinhos: ");
}

else {
    alert("As informações foram coletadas! Confira no console.")
}
if (quantidade <= 5) {
    console.log("Quantidade de vinho(s): " + quantidade  +  " (ESTOQUE BAIXO)" );
}
else {
    console.log("Quantidade de vinho(s): " + quantidade);
}

console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo do vinho: " + tipoVinho);
