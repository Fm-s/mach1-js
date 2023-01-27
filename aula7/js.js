

const pilotos = prompt("Digite a ordem de chegada dos pilotos dividida por virgulas").split(",");

let podium = 1;
let podiumStr = "";

for(piloto of pilotos){
    piloto = piloto.trim()
    if(piloto.length > 0){
        if(podium < 4){
            podiumStr = podiumStr + `Pódio - ${podium++} - ${piloto}\n`;
        }else{
            podiumStr = podiumStr + `${podium++} - ${piloto}\n`;
        }
    }
}

if(podiumStr != ""){
    alert(podiumStr);
}else {
    alert("Nenhum Piloto Válido");
}


/*

Crie um arquivo chamado repeticao2_js.html, e vamos fazer um algoritmo para resolver um problema de negócio:

Uma pista de Kart chamada ‘Corrida MACH1’, deseja desenvolver um sistema para exibir a posição dos ganhadores de cada bateria.
Para isso, eles deverão digitar os nomes dos pilotos separados por vírgula (piloto1,piloto2 ...) de acordo com a ordem de chegada.

Devemos desenvolver um algoritmo que receba essa lista, e vamos devolver para o usuário a posição e o nome do piloto,
sendo que para os 3 primeiros exibiremos também a palavra pódio, assim como o modelo abaixo:
Pódio – 1 – Renzo
Pódio – 2 – Kenzo
Pódio – 3 – Zenzo
4 – Lenzo
5 – Enzo

Dicas importantes:
● Preste atenção nas palavras destacadas no texto do problema;
● Utilize prompt para receber o valor do usuário;
● Não esqueça de converter o valor recebido para o tipo adequado, utilize a função que acabamos de aprender (split);
● Valide se existe conteúdo preenchido;
● Utilize estrutura de repetição adequada para percorrer os valores recebidos e concatenar o conteúdo de acordo com a regra;
● Utilize alert para exibir a resposta.
● Não deixe o usuário sem uma resposta adequada;

Obs.: Não deixe de encaminhar os arquivos e publicar seu código em seu repositório no git.

*/