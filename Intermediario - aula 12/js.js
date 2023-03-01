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
]

const listarUsuarios = () => {
    let trTds = '';
    let resultado = document.getElementById('resultado');
    listaUsuarios.forEach((usuario)=>{
        trTds += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.sexo}</td>
                <td>${usuario.idade}</td>
                <td>${usuario.email}</td>
            </tr>
          `
    })
    resultado.innerHTML = trTds
}

window.addEventListener('load',listarUsuarios);