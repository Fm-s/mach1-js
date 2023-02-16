const reload = () => {
    for(const element of document.querySelectorAll("span")){
        element.classList.add("highLight")
        element.onclick = function(){showInnerHtml(this)}
    }
    document.getElementById("controlHeader").querySelector("img").remove()
}

const showInnerHtml = (element) => {
    element.classList.remove("highLight")
    element.onclick = ""
    const newP = document.createElement("p")
    newP.classList.add("description")
    switch(element.innerHTML){
        case "linguagem de programação":
            newP.innerHTML = "Uma linguagem de programação é uma linguagem que os programadores usam para escrever instruções que os computadores podem entender e executar. Essas linguagens são usadas para desenvolver programas, aplicativos e sistemas que automatizam tarefas e resolvem problemas específicos. As linguagens de programação possuem uma sintaxe específica e estruturas que permitem aos programadores criar algoritmos e programas que resolvam problemas de forma eficiente e eficaz."
        break
        case "alto nível":
            newP.innerHTML = "Uma linguagem de programação de alto nível é uma linguagem mais próxima da linguagem humana do que da linguagem de máquina, permitindo que os programadores escrevam código mais facilmente e com mais eficiência. Essas linguagens são mais abstratas e distantes das instruções de baixo nível que os computadores executam diretamente, o que torna a escrita do código mais acessível e menos propensa a erros."
        break
        case "interpretada":
            newP.innerHTML = "Uma linguagem de programação interpretada é aquela cujo código fonte é executado diretamente por um interpretador, sem necessidade de compilação prévia para gerar um arquivo executável. Isso significa que o código é executado linha por linha, em tempo real, durante a execução do programa. Linguagens interpretadas geralmente têm um ciclo de desenvolvimento mais rápido do que as linguagens compiladas, uma vez que o programador pode testar o código imediatamente após escrevê-lo, sem precisar esperar pela compilação."
        break
        case "dinâmica":
            newP.innerHTML = "Uma linguagem de programação dinâmica é aquela que permite que o tipo de dados das variáveis seja inferido em tempo de execução, em vez de ser definido estaticamente durante a compilação ou escrita do código. Isso significa que o tipo de dados pode ser determinado em tempo de execução, permitindo maior flexibilidade na escrita do código e tornando a linguagem mais fácil de usar."
            break
        default:
            newP.innerHTML = ". . ."
    }

    const ctrlHeader = document.getElementById("controlHeader")
    if(!ctrlHeader.querySelector("img")){
        const newImg = document.createElement("img")
        newImg.src = "assets/imgs/reload.png"
        newImg.onclick = reload
        ctrlHeader.appendChild(newImg)
    }
    
    document.getElementById("outlet").innerHTML = ""
    document.getElementById("outlet").appendChild(newP)
}