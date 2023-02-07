
const validaCpf = (cpf) => {

    if(isNaN(cpf)){
        alert("Digite somente numeros!")
        return false
    }
    
    if(cpf.length != 11){
        alert("Tamanho do CPF inválido")
        return false
    } 
  
    return true
}

const main = () => {
    let cpf
    do{
        cpf = prompt("Digite um CPF (Somente Numeros")
    } while(cpf !== null && !validaCpf(cpf))
    
    if(cpf !== null){
        cpf = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
        alert(cpf)
    } else {
        alert("Operação Cancelada!")
    }
}


main()

