let listaNumeros = [];

const renderLista = (numberArray) => {
    containterResultados = document.getElementById('container-resultados');
    containterResultados.innerHTML = ""

    for(let el in numberArray){
        if( +el === 0){
            containterResultados.innerHTML = numberArray[el];
        } else {
            containterResultados.innerHTML += `, ${numberArray[el]}`;
        }
        
    }    
}

const pageLoad = () => {
    const mainForm = document.getElementById('main-form');
    

    mainForm.addEventListener('submit',e=>{
        e.preventDefault();
        const inputNumber = mainForm.querySelector('input[name="number"]');
        if(!isNaN(inputNumber.value)){
            listaNumeros.push(+inputNumber.value);
            renderLista(listaNumeros.map(el=>el*3));
            inputNumber.value = '';
        }
    })

    mainForm.querySelector("button[type='button']") .addEventListener('click',()=>{
        listaNumeros = [];
        mainForm.querySelector('input[name="number"]').value = "";
        renderLista([]);
    })
}

window.addEventListener('load',pageLoad);