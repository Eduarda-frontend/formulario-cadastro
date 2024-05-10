
$(document).ready(function(){

    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(__) _____-____'
    });

    $('#cep').mask('00000-0000',{
        placeholder:'00000-000'
    });

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            cep:{
                required:true
            },
        },
        messages:{
            nome:'<h3 class="validate"> Por favor, insira seu nome!</h3>',
            email: '<h3 class="validate"> Por favor, insira seu e-mail!</h3>',
            telefone: '<h3 class="validate"> Por favor, insira seu telefone!</h3>',
            cpf:'<h3 class="validate"> Por favor, insira seu CPF!</h3>',
            cep: '<h3 class="validate"> Por favor, insira seu CEP!</h3>'
        },

        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();

            let somaCampos = camposIncorretos > 1 ?'campos':'campo';

            if(camposIncorretos){
                alert(`Há ${camposIncorretos} ${somaCampos} sem preencher!`)
            }
        }
    })
}); 


