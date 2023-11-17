let escolhaProduto = '';
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];
let escolhaExtras = [];

// Adicione este trecho para obter a escolha do produto do localStorage
document.addEventListener('DOMContentLoaded', function () {
    // Recupera as escolhas do localStorage
    const escolhasSalvas = localStorage.getItem('escolhas');
    if (escolhasSalvas) {
        // O conteúdo do localStorage é uma string JSON, então você precisa analisá-lo
        const escolhas = JSON.parse(escolhasSalvas);
        // A primeira escolha do produto é armazenada na variável escolhaProduto
        escolhaProduto = escolhas[0];
    }
});

function selecionarProduto() {
    var produtos = document.querySelectorAll('input[name="produtos"]:checked');
    var escolhas = [];

    produtos.forEach(function (produto) {
        escolhas.push(produto.value);
    });

    // Verificar se pelo menos um produto foi selecionado
    if (escolhas.length === 0) {
        alert('Por favor, selecione pelo menos um produto antes de prosseguir.');
        return; // Impede o redirecionamento se nenhum produto for selecionado
    }

    // Armazena as escolhas no localStorage
    localStorage.setItem('escolhas', JSON.stringify(escolhas));

    // Redirecionar para a segunda página após a escolha do produto
    window.location.href = 'pagina-acompanhamento.html'; // Substitua 'pagina-acompanhamento.html' pelo nome real do seu arquivo HTML da segunda página
}

function selecionarProduto() {
    var produtos = document.querySelectorAll('input[name="produtos"]:checked');
    var escolhas = [];

    produtos.forEach(function (produto) {
        escolhas.push(produto.value);
    });

    // Verificar se pelo menos um produto foi selecionado
    if (escolhas.length === 0) {
        alert('Por favor, selecione pelo menos um produto antes de prosseguir.');
        return; // Impede o redirecionamento se nenhum produto for selecionado
    }

    // Armazena as escolhas no localStorage
    localStorage.setItem('escolhas', JSON.stringify(escolhas));

    // Redirecionar para a segunda página após a escolha do produto
    window.location.href = 'pagina-acompanhamento.html'; // Substitua 'pagina-acompanhamento.html' pelo nome real do seu arquivo HTML da segunda página
}

function validarSelecoes() {
    // Restante do seu código...

    const cobertura = document.getElementsByName('cobertura');
    escolhaCobertura = [];
    for (let i = 0; i < cobertura.length; i++) {
        if (cobertura[i].checked) {
            escolhaCobertura.push(cobertura[i].value);
        }
    }

    const frutas = document.getElementsByName('frutas');
    escolhaFrutas = [];
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].checked) {
            escolhaFrutas.push(frutas[i].value);
        }
    }

    const complementos = document.getElementsByName('complementos');
    escolhaComplementos = [];
    for (let i = 0; i < complementos.length; i++) {
        if (complementos[i].checked) {
            escolhaComplementos.push(complementos[i].value);
        }
    }

    const extras = document.getElementsByName('extras');
    escolhaExtras = [];
    for (let i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            escolhaExtras.push(extras[i].value);
        }
    }

    // Verifica se as condições de seleção são atendidas
    if (
        escolhaCobertura.length > 1 ||
        escolhaFrutas.length > 2 ||
        escolhaComplementos.length > 5
    ) {
        alert("Por favor, escolha apenas a quantidade de OPÇÕES permitida.");
        return false; // interrompe a execução da função sem redirecionar
    }

    // Verifica se pelo menos um item foi escolhido em cada categoria
    if (
        escolhaCobertura.length === 0 ||
        escolhaFrutas.length === 0 ||
        escolhaComplementos.length === 0
    ) {
        alert("Por favor, escolha ao menos uma seleção em cada categoria -> COBERTURA/FRUTAS/COMPLEMENTO.");
        return false; // interrompe a execução da função sem redirecionar
    }

    const textoParaEnviar =
    `Olá , Gostaria de Realizar Meu Pedido:
    \nTamanho
    Produto: ${escolhaProduto}
    \nAcompanhamentos
    Cobertura: ${escolhaCobertura.join(', ')}
    Frutas: ${escolhaFrutas.join(', ')}
    Complementos: ${escolhaComplementos.join(', ')}
    Extras: ${escolhaExtras.join(', ')}`;

    const codigoPais = '55';  // Substitua pelo código do país desejado
    const numeroTelefone = '87991614277';  // Substitua pelo número do seu telefone com o código do país
    const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;

    window.location.href = linkWhatsApp;

    return false;
}
