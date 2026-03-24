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

    const NomeProduto = Carrinho.querySelector('h5').innerText;
    const PrecoProduto = Carrinho.querySelector('h4').inneText;
    const PrecoCerto = Number(PrecoProduto.replace("R$", ""));
    const Imagem = Carrinho.querySelector('img');
    const ImagemProduto = Imagem.src;

    //Criando obejeto para guardar as informações.
    const InfoProdutos = {
        Nome: NomeProduto,
        Produto: PrecoCerto,
        ImagemInfo: ImagemProduto,
    };

    const ProdutosStrig = JSON.stringify(InfoProdutos);
    localStorage.setItem(ProdutosStrig);




    });
});


