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
   
