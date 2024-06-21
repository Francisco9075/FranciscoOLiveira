// Selecionar todos os botões de tamanho
function redirecionarParaPagina(url) {

    window.location.href = url;
}
function habilitarCompra(elemento) {
    const buyButton = document.querySelector('.buy-button');
    const sizes = document.querySelectorAll('.size');


    sizes.forEach(size => size.classList.remove('selected'));


    elemento.classList.add('selected');


    const algumSelecionado = [...sizes].some(size => size.classList.contains('selected'));
    buyButton.disabled = !algumSelecionado;
}
function valida() {
    var mensagem = "";

    //nome
    if (document.registo.nome.value.length == 0) {

        mensagem = mensagem + "Nome é de preenchimento obrigatório!\n";
    }

    //email
    if (document.registo.email.value.length == 0) {

        mensagem = mensagem + "Email é de preenchimento obrigatório!\n";
    }
    //telemovel

    if (document.registo.tele.value.length < 9) {

        mensagem = mensagem + "Número de telefone inválido\n";

    }
    //telemovel
    if (document.registo.tele.value.length > 9) {

        mensagem = mensagem + "Número de telefone inválido\n";

    }
    //morada
    if (document.registo.morada.value.length == 0) {

        mensagem = mensagem + "Morada é de preenchimento obrigatorio!\n";
    }
    //cidade
    if (document.registo.cidade.value.length == 0) {

        mensagem = mensagem + "Cidade é de preenchimento obrigatorio!\n";
    }

    //Codigo postal

    if (document.registo.postal.value.length < 8) {

        mensagem = mensagem + "Código postal inválido\n";

    }
    //Codigo postal
    if (document.registo.postal.value.length > 8) {

        mensagem = mensagem + "Código postal inválido\n";

    }
    if (mensagem.length > 0) {
        alert(mensagem);
        return false;

    }
    else{
        alert("Seu pedido foi confirmado e está sendo processado\nPara qualquer dúvida ou assistência, entre em contato conosco:\nCom email: suporte@footlab.com\nTelefone: 934223476");
        
       
    }
}


