let anos;

console.log(anos);

while(isNaN(anos) || anos <= 0){
    if(anos){
        alert("Digitar apenas números positivos para receber o dado correto.");
    }
    anos = prompt("Digite a quantos anos de vinculo?");
}

if(anos < 2){
    alert("Vc não tem o tempo mínimo para uma recilcagem");
}else {
    let reciclagens = 0;
    while(anos > 1){
        anos -= 2;
        reciclagens++;
    }
    alert(`Vc participou de ${reciclagens} reciclagens`)
}