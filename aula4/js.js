while(1){
let value = prompt("Digite uma letra do alfabeto:").toLowerCase();

if(+value){
    alert("Deve digitar uma letra para obeter o resultado");
}else if(value.length > 1){
    alert("Só uma letra deve ser digitada")
}else if(value === "a" || value === "e" 
|| value === "i" || value === "o" || value === "u") {
    alert("Letra digitada é vogal");
}else {
    alert("Letra digitada é consoante");
}
}
