/*
a. Márcia ganhou 7 pacotes com 30 adesivos em cada pacote.
15 adesivos eram repetidos e não puderam ser colados no álbum.
Quantos adesivos Márcia colou no álbum?
b. Numa caixa de refrigerantes cabem duas dúzias de latas. Quantas latas poderão ser guardadas em 4 caixas?
c. Utilizando decremento escreva no console todos os números ímpar no intervalo de 10 até 0.
*/

console.log("a:",7*30 - 15);
console.log("b:",4*2*12);

let i = 10;
console.log("c:");
while( i > 0 ){
    if(i % 2 == 0){
        console.log(i);
    }
    i--;
}


