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
const botoesCompra = document.querySelectorAll('.cart');

botoesCompra.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        const cardProduto = botao.closest('.pro');

        
        const infoProduto = {
            id: Date.now(), 
            nome: cardProduto.querySelector('h5').innerText,
    
            preco: Number(cardProduto.querySelector('h4').innerText.replace("R$", "").replace(",", ".")),
            imagem: cardProduto.querySelector('img').src
        };


        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        
        carrinho.push(infoProduto);
        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        alert(`${infoProduto.nome} foi adicionado ao carrinho!`);
    });
});


const corpoTabela = document.querySelector('#cart tbody');
const subtotalTexto = document.querySelector('#subtotal table tr:nth-child(1) td:last-child');
const totalTexto = document.querySelector('#subtotal table tr:last-child td:last-child strong');

function carregarCarrinho() {
  
    const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    corpoTabela.innerHTML = "";
    
    let somaTotal = 0;

    itensCarrinho.forEach((item, index) => {
        somaTotal += item.preco;

        const linha = `
            <tr>
                <td><a href="#" onclick="removerItem(${index})"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src="${item.imagem}" alt="${item.nome}"></td>
                <td>${item.nome}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td><input type="number" value="1" readonly></td>
                <td>R$ ${item.preco.toFixed(2)}</td>
            </tr>
        `;
        corpoTabela.innerHTML += linha;
    });

    subtotalTexto.innerText = `R$ ${somaTotal.toFixed(2)}`;
    totalTexto.innerText = `R$ ${somaTotal.toFixed(2)}`;
}

function removerItem(index) {
    let itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    itensCarrinho.splice(index, 1);
    
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
    
    
    carregarCarrinho();
}

carregarCarrinho();