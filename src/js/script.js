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
} else if (safra >= 1996) {
    alert("Esse vinho é considerado jovem.")
}
else if (safra >= 2019) {
    alert("Esse vinho é considerado novo.")
}
else if (safra <= 1995) {
    alert("Esse vinho é considerado velho.")
}

if (quantidade=="") {
    alert("Selecione a quantidade de vinhos.");
    var quantidade = prompt("Insira a quantidade de vinhos: ");
} else if (quantidade >= 6) {
    alert("Não é possível selecionar mais de 6 vinhos dessa unidade.")
    var quantidade = prompt("Selecione até 6 vinhos.")
}

else {
    alert("As informações foram concluídas! Confira no console.")
}
console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo do vinho: " + tipoVinho);
console.log("Safra(ano) do vinho: " + safra);
console.log("Quantidade de vinho(s): " + quantidade);
