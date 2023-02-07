const formatCpf = (cpf) => {
    return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
}

const validaCpf = (cpf) => {
    if(isNaN(cpf)){
        return false
    }
    
    if(cpf.length != 11){
        return false
    } 
  
    return true
}

const processaListaCpf = (...cpfArray) => {
    const proCpfs = []
    for(let cpf of cpfArray){
        proCpfs.push({cpf: cpf, formartedCpf: formatCpf(cpf), validCpf: validaCpf(cpf)})
    }
    return proCpfs
}

(()=>{
    const listaCpfs = []
    let counter = 0
    let cpf
    do{
        cpf = prompt("Digite um CPF (Somente Numeros")
        listaCpfs.push(cpf)
        counter++
    }while(counter < 5)

    for(let cpfObj of processaListaCpf(...listaCpfs)){
        alert(`CPF: ${cpfObj.formartedCpf}, Status: ${cpfObj.validCpf}`)
    }

})()