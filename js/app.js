function entrar() {
    var user = document.getElementById("cxuser").value;

    var senha = document.getElementById("cxsenha").value;
    
    // == é igualdade, && Concatena
    if (user == "ADM" && senha == "123") {
        alert("Acesso permitido");
    }
    else {
        alert("Acesso negado");
    }
}

function parimpar(){
    var n1 = document.getElementById("cx1").value;

        //Converte a string para número
        n1 = parseInt(n1);

        //Verifica se o resto da divisão por 2 é igual a zero
        if (n1 % 2 === 0) {
            alert("Numero par!");
        }
        else {
            alert("Numero impar!");
        }

}
