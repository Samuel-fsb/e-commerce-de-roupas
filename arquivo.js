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
    const PrecoProduto = Carrinho.querySelector('h4').innerText;
    const PrecoCerto = Number(PrecoProduto.replace("R$", ""));
    const Imagem = Carrinho.querySelector('img');
    const ImagemProduto = Imagem.src;

    //Criando objeto para guardar as informações.
    const InfoProdutos = {
        Nome: NomeProduto,
        Produto: PrecoCerto,
        ImagemInfo: ImagemProduto,
    };


    //Verificando e adicionado novos itens a lista de arrays.
    localStorage.getItem('carrinho');

    ListaProdutos = JSON.parse(localStorage.getItem('carrinho')) || [];

    ListaProdutos.push(InfoProdutos);

    localStorage.setItem('carrinho', JSON.stringify(ListaProdutos));


    //Removendo itens de exemplo.
    const TabelaBody = document.querySelector('tbody');

    JSON.parse(localStorage.getItem('carrinho', ListaProdutos));

    let SomaTotal = 0
    
    ListaProdutos.forEach(produto => {
        TabelaBody.innerHTML += `
        <tr>
            <td><a href="#"><i class="fa-regular fa-circle-xmark"></td>
            <td><img src="${produto.imagemInfo}" alt=""></td>
            <td>${produto.Nome}</td>
            <td>${produto.Produto}</td>
            <td><input type="number" value="1"></td>
            <td>${produto.Produto}</td>
        </tr>
        `
        SomaTotal += produto.Produto;
    });


    //Função para somar os valores.

    let ValorTotal = document.querySelector('table');
    
    const AtualizarValor = () => {
        ValorTotal.innerHTML += `
        <tr>
                    <td>Subtotal</td>
                    <td>${SomaTotal}</td>
                </tr>
                <tr>
                    <td>Frete</td>
                    <td>Desconto</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${SomaTotal}</strong></td>
                </tr>
        `
    };

    AtualizarValor();







    });
});


