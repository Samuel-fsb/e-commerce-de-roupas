const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
};

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
};


// FUNCIONALIDADE DE SOMA DENTRO DO CARRINHO.

// Capturando os elementos via DOM.
const PrecoRoupas = document.querySelectorAll('.cart');

PrecoRoupas.forEach(botao => {
botao.addEventListener('click', (event) =>{
    event.preventDefault();

    //Secionando o nome e preço do produto.
    const Carrinho = botao.parentElement.closest('.pro');  

    const Nome = Carrinho.querySelector('h5').innerText;
    const Preco = Carrinho.querySelector('h4').inneText;

    const PrecoCerto = Number(Preco.replace("R$", ""))

    });
});


