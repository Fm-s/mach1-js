const showModal = (title,text)=>{
    const modal = document.createElement('div');
    modal.classList.add('modal__container');
    
    const backdrop = document.createElement('div');
    backdrop.classList.add('modal__backdrop');
    backdrop.appendChild(modal);

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '5 X';

    const countDown = setInterval(()=>{
        closeBtn.innerHTML = (+closeBtn.innerHTML.split(' ')[0] - 1) + " X";
    },700)

    const autoClose = setTimeout(()=>{
        clearInterval(countDown);
        backdrop.remove()
    },4000)

    const terminateModal = () => {
        clearTimeout(autoClose);
        clearInterval(countDown);
        backdrop.remove();
    }

    modal.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
    
    closeBtn.addEventListener('click',()=>{
        terminateModal()
    })

    backdrop.addEventListener('click',()=>{
        terminateModal()
    })

    const topModalBar = document.createElement('div');
    topModalBar.classList.add('modal_top-bar');

    const titulo = document.createElement('h1');
    titulo.classList.add('modal__title');
    titulo.innerHTML = title;

    topModalBar.appendChild(titulo);
    topModalBar.appendChild(closeBtn);
    modal.appendChild(topModalBar);

    
    const content = document.createElement('p');
    content.classList.add('modal_content');
    content.innerHTML = text;
    modal.appendChild(content);

    document.body.appendChild(backdrop);
}

document.getElementById('main-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const formEl = document.getElementById('main-form');
    let valid
    valid = formEl.querySelector('input[name="nome"]').value.length > 0;
    if(!valid){
        return showModal('Erro: Nome em branco',"Para prosseguir no cadastro todos os campos devem ser preenchidos")
    }
    valid = valid && formEl.querySelector('input[name="sobrenome"]').value.length > 0;
    if(!valid){
        return showModal("Erro:","Para prosseguir no cadastro todos os campos devem ser preenchidos")
    }
    valid = valid && formEl.querySelector('input[name="cpf"]').value.length === 11;
    if(!valid){
        return showModal("Erro:","Para prosseguir no cadastro é necessário um CPF válido")
    }
    
    showModal("Sucesso","Dados Enviados com sucesso!")  
})