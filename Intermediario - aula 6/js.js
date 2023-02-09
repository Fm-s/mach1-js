const verificaAlicota = (salario) => {
    let alicota;
    if(salario <= 1903.98){
        alicota = {taxa: 0, reducao: 0}
    } else if(salario <= 2826.65){
        alicota = {taxa: 7.5, reducao: 142.80}
    } else if(salario <= 3751.05) {
        alicota = {taxa: 15, reducao: 354.80}
    } else if(salario <= 4664,68){
        alicota = {taxa: 22.5, reducao: 636.13}
    } else{
        alicota = {taxa: 27.5, reducao: 869.36}
    }
    return alicota
}

const promptSalario = () => {
    let promptStr;
    while(true){
        promptStr = prompt("Digite o valor do Salario: ")
        promptStr = promptStr.replace("R$","")
        promptStr = promptStr.replace(".","")
        promptStr = promptStr.replace(",",".")
        promptStr = promptStr.trim()
        if(isNaN(promptStr)){
            alert("Digite um valor válido! (formato: R$ 1.000,00")
        } else return +promptStr
    }
}

const mostrarDados = (output) => {
    output = Math.round(output*100)/100
    alert(`Valor de IR a se pagar: R$ ${output.toLocaleString('pt-BR',{minimumFractionDigits: 2})}`)
}

const main = (getSalario, getAlicota, sendValue) => {
    const salario = getSalario()
    const aliObj = getAlicota(salario)
    sendValue((salario*aliObj.taxa/100)-aliObj.reducao)
}

main(promptSalario,verificaAlicota,mostrarDados)