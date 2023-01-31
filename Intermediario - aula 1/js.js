const listArray = ["Sem cadastro","Leite","Ovo","Farinha","Milho","Café"]


while(true){
    
    let user_input = prompt("Digite o Codigo")
    
    if(user_input === null) break;

    if (isNaN(+user_input) || +user_input <= 0) {
        alert("Favor digitar um valor Numerico maior que 0")
    } else {
        if(user_input < listArray.length){
            alert(listArray[user_input])
        }else{
            if(confirm("Produto não cadastrado, gostaria de adicionar?")){
                let novoValor = prompt("Insira novo valor:")
                listArray.push(novoValor)
                alert(`Produto incluído com sucesso: ${listArray.length - 1} - ${novoValor}`)
            }
        }
    }
}


/* 
Crie um arquivo chamado arrays1_js.html, e vamos fazer um algoritmo:
a. Crie um array para armazenar a seguinte lista:
0 - Sem cadastro
1 - Leite
2 - Ovo
3 - Farinha
4 - Milho
5 – Café

b. Através da função adequada, receba o “Código do produto” do usuário,
busque o código na posição correspondente do array que você criou, e exiba o nome do produto.
Ex: Usuário digitou 1, “Leite”.

c. Caso o usuário digite um código que não esteja contido, exiba o valor da posição 0 do seu vetor,
e pergunte se deseja adicionar o produto.

d. Se o usuário optar por adicionar o produto, receba o valor utilizando a função adequada no JS,
inclua esse valor em seu vetor e conclua com uma mensagem de sucesso,
com o código e nome do produto. Ex: “Produto incluído com sucesso: 6 - Óleo”.

Obs.: Não deixe de encaminhar os arquivos e publicar seu código em seu repositório no git.  
*/