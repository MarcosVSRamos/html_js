document.getElementById("form-comparacao").addEventListener ("submit", function(e){
    e.preventDefault();

    const numberA = parseFloat(document.getElementById("number-a").value);
    const numberB = parseFloat(document.getElementById("number-b").value);

    const mensagemValida = `Vejo que ${numberB} é maior que ${numberA}, era isso que eu desejava!`
    const mensagemInvalida = `Vejo que ${numberB} não é maior que ${numberA}, que pena!`

    if (numberB > numberA) {
        const containerMensagemValida = document.getElementById('sucess-message');
        containerMensagemValida.innerHTML = mensagemValida;
        containerMensagemValida.style.display = 'block';

    } else {
        const containerMensagemInvalida = document.getElementById('sucess-message');
        containerMensagemInvalida.innerHTML = mensagemInvalida;
        containerMensagemInvalida.style.display = 'block';
    
    }


});