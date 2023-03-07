let shoppingCart = [
    {
        product: "Leite - Barnabé",
        measure: "Litro",
        qty: 5,
        price: 7.8,
    },
    {
        product: "Alcatra - Fribov",
        measure: "kg",
        qty: 1.896,
        price: 40,
    },
    {
        product: "Refrigerante - Toca Polar",
        measure: "Pet - 2 Litros",
        qty: 3,
        price: 8.99,
    },
    {
        product: "Arroz - Tio Chicão",
        measure: "Pacote - 1kg",
        qty: 4,
        price: 5.99, product: "Peito de Frango - Hot Chicken",
        measure: "kg",
        qty: 5,
        price: 16.99,
    }
]


const pageLoad = () => {
    chartTotal = shoppingCart.reduce((total,product)=>{
        return total + product.price * product.qty
    },0);
    console.log(chartTotal);
}

window.addEventListener('load',pageLoad);



/*
Utilizando a atividade que você criou anteriormente vamos adicionar um filtro para ela criando um campo de formulário para filtrar os dados da tela conforme imagem e gif’s abaixo:

a. Crie uma função reduce() para a variável shoppingCart afim encontrar o total da compra.

Dicas:

● Usem o que vocês aprenderam até aqui de forma inteligente.

● Usar o reduce() se possível usando arrow function, para reforçar seu conhecimento.

● O valor da saída do código é algo próximo a 250.

Obs.: Não deixe de encaminhar os arquivos e publicar seu código em seu repositório no git  

*/