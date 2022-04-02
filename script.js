function getAddress() {
  const cep = $("#input").val();

  //RegEx para validar se o cep possui apenas dígitos
  const cepCheck = /^[0-9]{8}$/;

  if (cepCheck.test(cep)) {
    $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function (dados){

      if (dados.erro) {
        alert("CEP Inválido");
        $('.bottom').empty();
        $('#input').val('').focus();
      }
      
      else {
        if($('.bottom').text().length > 0) {
          $('.bottom').empty();
        }

        $('.bottom').append(dados.logradouro + " - " + dados.bairro + ", " + dados.localidade + " - " + dados.uf + ", " + dados.cep);
      }

    });
  }

  else {
    alert("CEP Inválido");
    $('.bottom').empty();
    $('#input').val('').focus();
  }
  
};




