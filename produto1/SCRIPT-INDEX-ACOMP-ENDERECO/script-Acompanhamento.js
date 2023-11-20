//CODIGO DA PAGINA INDEX PRODUTOS
function selecionarProduto() {
    // Obtém o produto selecionado
    var produtoSelecionado = document.querySelector('input[name="produtos"]:checked');

    // Verifica se um produto foi selecionado
    if (produtoSelecionado) {
        // Obtem os valores
        let dataText = produtoSelecionado.getAttribute('data-text'); // Obtém o valor de data-text
        let valorProduto = parseFloat(produtoSelecionado.value); // Obtém o valor do produto

        // Armazena os dados no sessionStorage
        sessionStorage.setItem('dataText', dataText);
        sessionStorage.setItem('valorProduto', valorProduto);

        // Cria condições para cada ID existente
        if (produtoSelecionado.id === "produto01") {
            window.location.href = "../produto1/ACOMPANHAMENTO/pagina-Acompanhamento.html";
        }
        else if (produtoSelecionado.id === "produto02") {
            window.location.href = ""; // Insira o caminho da página desejada
        }
        else if (produtoSelecionado.id === "produto03") {
            window.location.href = ""; // Insira o caminho da página desejada
        }
        else if (produtoSelecionado.id === "produto04") {
            window.location.href = ""; // Insira o caminho da página desejada
        }
        else if (produtoSelecionado.id === "produto05") {
            window.location.href = ""; // Insira o caminho da página desejada
        }
        else {
            alert("ID do produto não reconhecido");
        }
    } else {
        // Caso nenhum produto tenha sido selecionado, exiba uma mensagem ou faça algo apropriado
        alert("Por favor, selecione um produto.");
    }
}

//CODIGO DA PAGINA ACOMPANHAMENTOS
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];
let escolhaExtras = [];

function concluirPedido() {
    const cobertura = document.getElementsByName('cobertura');
    escolhaCobertura = [];
    for (let i = 0; i < cobertura.length; i++) {
        if (cobertura[i].checked) {
            const escolha = {
                texto: cobertura[i].getAttribute('data-text'),
                valor: cobertura[i].value
            };
            escolhaCobertura.push(escolha);
        }
    }

    const frutas = document.getElementsByName('frutas');
    escolhaFrutas = [];
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].checked) {
            const escolha = {
                texto: frutas[i].getAttribute('data-text'),
                valor: frutas[i].value
            };
            escolhaFrutas.push(escolha);
        }
    }

    const complementos = document.getElementsByName('complementos');
    escolhaComplementos = [];
    for (let i = 0; i < complementos.length; i++) {
        if (complementos[i].checked) {
            const escolha = {
                texto: complementos[i].getAttribute('data-text'),
                valor: complementos[i].value
            };
            escolhaComplementos.push(escolha);
        }
    }

    const extras = document.getElementsByName('extras');
    escolhaExtras = [];
    for (let i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            const escolha = {
                texto: extras[i].getAttribute('data-text'),
                valor: extras[i].value
            };
            escolhaExtras.push(escolha);
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

    // Armazenar no sessionStorage
    sessionStorage.setItem('escolhaCobertura', JSON.stringify(escolhaCobertura));
    sessionStorage.setItem('escolhaFrutas', JSON.stringify(escolhaFrutas));
    sessionStorage.setItem('escolhaComplementos', JSON.stringify(escolhaComplementos));
    sessionStorage.setItem('escolhaExtras', JSON.stringify(escolhaExtras));

    // Redirecionar para a próxima página
    window.location.href = '../ENDERECO/pagina-Endereco.html';
}

//---------------------------------------------------------------------------------------------------------------------------

//ENDEREÇO PARA ENTREGA
const FormEnd = () => {
    let nomeRua = document.getElementById('nomeRua').value;
    let numeroCasa = document.getElementById('numeroCasa').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;

    if (nomeRua && numeroCasa && cep && cidade && bairro) {
        let endereco = {
            nomeRua: nomeRua,
            numeroCasa: numeroCasa,
            cep: cep,
            cidade: cidade,
            bairro: bairro,
        };

        sessionStorage.setItem('endereco', JSON.stringify(endereco));

        window.location.href = '../RESUMO/pagina-Resumo.html';
    } else {
        alert('Por favor, preencha todos os campos do Endereço para Entrega.');
        return false; // Impede o envio do formulário se a validação falhar
    }
}

