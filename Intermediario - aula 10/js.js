
const saveForm = (form) => {
    for(let i = 1; i <= 3; i++){
        console.log(form.querySelector(`input[name='nome${i}']`).value.length);
        if(form.querySelector(`input[name='nome${i}']`).value.length === 0){
            alert(`O campo nome${i} está em branco!`);
           return;
        };
    }

    const cotentDiv = document.getElementById('content-div');
    
    for(let i = 1; i <= 3; i++){
        console.log(cotentDiv.querySelector(`.content-div__list li:nth-child(${i}) span`));
        cotentDiv.querySelector(`.content-div__list li:nth-child(${i}) span`).innerHTML = form.querySelector(`input[name='nome${i}']`).value
    }
}

const onLoad = () => {
    mainForm = document.getElementById('main-form');
    mainForm.addEventListener('submit',(e)=>{
        e.preventDefault()
    });

    mainForm.querySelector('button[type="submit"]').addEventListener('click',()=>{
        saveForm(mainForm);
    })
}

window.addEventListener('load',onLoad);