let escolhaProduto = '';
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];
let escolhaExtras = [];

function recuperarValorProduto() {
    // Recuperar o valor armazenado na localStorage
    var valorProdutoSelecionado = localStorage.getItem('valorProdutoSelecionado');

    // Verificar se o valor é válido antes de adicionar ao total
    if (!isNaN(parseFloat(valorProdutoSelecionado))) {
        return parseFloat(valorProdutoSelecionado);
    } else {
        return 0;
    }
}

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

    // Adicionar o valor do produto ao total
    total += recuperarValorProduto();

    // Recuperar o valor armazenado na sessionStorage
    var valorNumericoSelecionado = parseFloat(sessionStorage.getItem('valorNumericoSelecionado')) || 0;

    // Verificar se o valor é válido antes de adicionar ao total
    if (!isNaN(valorNumericoSelecionado)) {
        total += valorNumericoSelecionado;
    }

    return total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    // Recuperar o valor do produto ao carregar a página
    escolhaProduto = localStorage.getItem('produtoSelecionado') || '';
    const escolhasSalvas = localStorage.getItem('escolhas');

    if (escolhasSalvas) {
        const escolhas = JSON.parse(escolhasSalvas);
        escolhaProduto = escolhas[0];
    }
});

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

//DADOS SELEÇÃO PAGINA 2
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
    //MENSAGEM ZAP
    const nomeRua = document.getElementById('nomeRua').value;
    const numeroCasa = document.getElementById('numeroCasa').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;

    // Obtenha a forma de pagamento selecionada
    const formaPagamento = document.querySelector('input[name="pagamento"]:checked');

    // Verifique se os campos obrigatórios estão preenchidos e se a forma de pagamento foi selecionada
    if (!nomeRua || !numeroCasa || !cep || !cidade || !bairro || !formaPagamento) {
        alert("Por favor, preencha todos os campos obrigatórios e selecione uma forma de pagamento.");
        return false; // Impede o envio do formulário
    }
    const totalSoma = calcularSoma();
    const textoParaEnviar =
        `Olá, Gostaria de Realizar Meu Pedido:
        \n*Tamanho*
        \n*Produto:* \n*${escolhaProduto}
        \n*Acompanhamentos*
        \n*Cobertura:* \n${escolhaCobertura.join('\n')}
        \n*Frutas:* \n${escolhaFrutas.join('\n')}
        \n*Complementos:* \n${escolhaComplementos.join('\n')}
        \n*Extras:* \n${escolhaExtras.join('\n')}
        \n*Endereço*
        *Rua:* ${nomeRua}
        *Número:* ${numeroCasa}
        *CEP:* ${cep}
        *Cidade:* ${cidade}
        *Bairro:* ${bairro}
        \n*Forma de Pagamento:* ${formaPagamento.value}
        \n*TOTAL GERAL: *`;

    const codigoPais = '55';
    const numeroTelefone = '87991614277';
    const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;

    window.location.href = linkWhatsApp;

    return false;
}

