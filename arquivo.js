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

    const ElementoPai = botao.parentElement;    

   
    });
});


