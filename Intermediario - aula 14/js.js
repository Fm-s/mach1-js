const listaUsuarios = [
    {
        id: 1,
        nome: "Thiago Pereira",
        sexo: "Masculino",
        idade: 20,
        email: "fulanodetal@termail.com"
    },
    {
        id: 2,
        nome: "Thaís Lins",
        sexo: "Feminino",
        idade: 19,
        email: "thaisdetal@gtemail.com"
    },
    {
        id: 3,
        nome: "Mariana Ferreira",
        sexo: "Feminino",
        idade: 25,
        email: "marianaferreira@tailme.com"
    },
    {
        id: 4,
        nome: "Pedro Ivo Silva",
        sexo: "Feminino",
        idade: 28,
        email: "manuelatrait@gteprmal.com"
    }
];

const filtroUsuario = (usuario) => {
    const valorProcurado = document.getElementById('texto-filtro').value;
    for(let key in usuario){
        if(usuario[key].toString().includes(valorProcurado)) return true;
    }
}

const listarUsuarios = (filtroUsuarioFunc) => {
    let trTds = '';
    let resultado = document.getElementById('resultado');
    listaUsuarios.filter(filtroUsuarioFunc).forEach((usuario)=>{
        trTds += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.sexo}</td>
                <td>${usuario.idade}</td>
                <td>${usuario.email}</td>
            </tr>
          `;
    })
    resultado.innerHTML = trTds
}

const pageLoad = () => {
    listarUsuarios(()=>true);
    document.getElementById('aplicar-filtro').addEventListener('click',()=>{
        listarUsuarios(filtroUsuario)
    });
    document.getElementById('limpar-filtro').addEventListener('click',()=>{
        document.getElementById('texto-filtro').value = '';
        listarUsuarios(()=>true);
    })
}



window.addEventListener('load',pageLoad);