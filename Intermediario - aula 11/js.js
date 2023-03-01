const dataArray = [];

const saveForm = (form) => {
    
    const nameInput = form.querySelector('input[name="nome"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="telefone"]');

    if(nameInput.value.length === 0) return alert('Campo de nome não pode estar vazio!');
    if(emailInput.value.length === 0) return alert('Campo de email não pode estar vazio!');
    if(phoneInput.value.length === 0) return alert('Campo de telefone não pode estar vazio!');

    dataArray.push({
        nome: nameInput.value,
        email: emailInput.value,
        telefone: phoneInput.value
    })

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

}

const createTagWithClass = (tag,className) => {
    const newDiv = document.createElement(tag)
    newDiv.classList.add(className);
    return newDiv;
}

const createTagWithClassnValue = (tag,className, value) => {
    const newDiv = createTagWithClass(tag,className);
    newDiv.innerHTML = value;
    return newDiv;
}

const nextPage = (form) =>{
    form.hidden = true;
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div')
    dataArray.forEach((el,index)=>{
        const entryDiv = createTagWithClass('div','content-div__client');
        entryDiv.appendChild(createTagWithClassnValue('h1','content-div__client__title',`Cliente ${index+1}`));
        const uList = createTagWithClass('ul','content-div__client__data');
        for(let key in el){
            uList.appendChild(createTagWithClassnValue('li','content-div__client__data__entry',`${key.toUpperCase()}: ${el[key]}`));
        }
        entryDiv.appendChild(uList);
        contentDiv.appendChild(entryDiv);
    })
    const backBtn = createTagWithClassnValue('button','content-div__btn','Novo Cadastro');
    backBtn.addEventListener('click',()=>{
        contentDiv.remove()
        form.hidden = false;
    })
    contentDiv.appendChild(backBtn);
    document.body.appendChild(contentDiv);
}


const onLoad = () => {
    const mainForm = document.getElementById('main-form')
    mainForm.addEventListener('submit',(e)=>{
        e.preventDefault();
    })
    mainForm.querySelector('.main-form__btn').addEventListener('click',()=>{
        nextPage(mainForm);
    })
    mainForm.querySelector('button.main-form__submit__btn').addEventListener('click',()=>{
        saveForm(mainForm);
    })
}


window.addEventListener('load',onLoad);