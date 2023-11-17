/*let escolhaProduto = '';
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];
let escolhaExtras = [];


//TRECHO PARA CAPTURAR OS DADOS DA PRIMEIRA PÁGINA

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

//TRECHO PARA CAPTURAR OS DADOS DA SEGUNDA PÁGINA
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

    //TRECHO PARA MANDAR A MENSAGEM VIA ZAP
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

 document.addEventListener("DOMContentLoaded", function () {
    // Função para calcular a soma dos valores selecionados
    function calcularSoma() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        var total = 0;

        checkboxes.forEach(function (checkbox) {
            var valorTexto = checkbox.value.trim();
            var valor = extrairValor(valorTexto);

            if (!isNaN(valor)) {
                total += valor;
            }
        });

        alert('Total: R$ ' + total.toFixed(2));
    }

    // Função auxiliar para extrair o valor numérico de uma string
    function extrairValor(texto) {
    var valor = parseFloat(texto.replace(",", ".").replace(/[^\d.-]/g, ''));

    return isNaN(valor) ? 0 : valor;
}

    // Adiciona um ouvinte de evento ao botão para chamar a função de calcularSoma
    var botoesCalcular = document.querySelectorAll('.botaoAcomp');
    if (botoesCalcular.length > 0) {
        botoesCalcular.forEach(function (botao) {
            botao.addEventListener('click', calcularSoma);
        });
    }
});

 */


let escolhaProduto = '';
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];
let escolhaExtras = [];

function calcularSoma() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var total = 0;

    checkboxes.forEach(function (checkbox) {
        var valorTexto = checkbox.value.trim();
        var valor = extrairValor(valorTexto);

        if (!isNaN(valor)) {
            total += valor;
        }
    });

    return total.toFixed(2);
}

function extrairValor(texto) {
    var valor = parseFloat(texto.replace(",", ".").replace(/[^\d.-]/g, ''));

    return isNaN(valor) ? 0 : valor;
}

function selecionarProduto() {
    var produtos = document.querySelectorAll('input[name="produtos"]:checked');
    var escolhas = [];

    produtos.forEach(function (produto) {
        escolhas.push(produto.value);
    });

    if (escolhas.length === 0) {
        alert('Por favor, selecione pelo menos um produto antes de prosseguir.');
        return;
    }

    localStorage.setItem('escolhas', JSON.stringify(escolhas));

    window.location.href = 'pagina-acompanhamento.html';
}

document.addEventListener('DOMContentLoaded', function () {

    const escolhasSalvas = localStorage.getItem('escolhas');
    if (escolhasSalvas) {

        const escolhas = JSON.parse(escolhasSalvas);

        escolhaProduto = escolhas[0];
    }
});

function validarSelecoes() {
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

    if (
        escolhaCobertura.length > 1 ||
        escolhaFrutas.length > 2 ||
        escolhaComplementos.length > 5
    ) {
        alert("Por favor, escolha apenas a quantidade de OPÇÕES permitida.");
        return false; 
    }

    if (
        escolhaCobertura.length === 0 ||
        escolhaFrutas.length === 0 ||
        escolhaComplementos.length === 0
    ) {
        alert("Por favor, escolha ao menos uma seleção em cada categoria -> COBERTURA/FRUTAS/COMPLEMENTO.");
        return false;
    }

    const totalSoma = calcularSoma();
    const textoParaEnviar =
        `Olá, Gostaria de Realizar Meu Pedido:
        \n*Tamanho*
        Produto: ${escolhaProduto}
        \n*Acompanhamentos*
        *Cobertura:* \n${escolhaCobertura.join('\n')}
        *Frutas:* \n${escolhaFrutas.join('\n')}
        *Complementos:* \n${escolhaComplementos.join('\n')}
        *Extras:* \n${escolhaExtras.join('\n')}
        \n*Total:* R$ ${totalSoma}`;

    const codigoPais = '55';  
    const numeroTelefone = '87991614277';
    const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;

    window.location.href = linkWhatsApp;

    return false;
}
