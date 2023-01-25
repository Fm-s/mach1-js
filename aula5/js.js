switch("oi"){
    default:
        console.log("default");
        break;
    case "oi":
        console.log("Helo world!");
    case "oioi":
        console.log("oioi");
}


let pessoa = prompt("Digite seu nome:");
let animal = prompt("Digite seu animal").toLowerCase();

let stringOutput = `Olá ${pessoa}, para o seu ${animal} oferecemos as melhores rações do mercado alem de`

switch(animal){
    case "cachorro":
    case "gato":
    case "coelho":
        stringOutput += " banho e tosa com nossos especialistas!";
    break;

    case "cavalo":
    case "cabra":
    case "jumento":
        stringOutput += " encarminhamos para os melhores veterinarios especialsitas do mercado!"
    break;

    case "rato":
        stringOutput += " gaiolas especias!"
    break;

    case "passarinho":
        stringOutput += " implates rastreaveis por GPS, os mais modernos do mercado!"
    break;

    default:
        stringOutput = `Olá ${pessoa}, para o seu ${animal} infelizmente não temos nenhum serviço ou produto`

}

alert(stringOutput);