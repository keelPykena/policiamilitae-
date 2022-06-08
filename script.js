let nome =  window.document.getElementById('nome')
let email = document.querySelector( '#email')
let assunto = document.querySelector('#assunto')
/*

function validarNome() {
if(nome.value.length < 3) {
 alert('nome invalido!digite um nome com mais de 3 letras')
  }
}


    function validarEmail() {
  let txtEmail= document.querySelector('#txtEmail')
 if (email.value.indexOf('@') == -1)  {
alert('email invalido! digite um email com @')
 }
    
}*/


    function validarNome()   {
      let txtNome =  document.querySelector("#txtNome")
      if(nome.value.length  < 3)  {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
      } else{
        txtNome.innerHTML ='Nome valido'
        txtNome.style.color = 'blue'
      }

    }


    function validarEmail()  {
    let txtEmail = document.querySelector("#txtEmail")  
    if(email.value.indexOf('@') == -1|| email.value.indexOf('.') == -1){ 
     txtEmail.innerHTML =  'Email invalido'
     txtEmail.style.color = 'red' 
    
    } else {
     txtEmail.innerHTML = 'Email valido'
     txtEmail.style.color = 'blue' 
    }
    }



    function validarAssunto(){
      let txtAssunto = document.querySelector('#txtAssunto')
      if(assunto.value.length  < 15) {
        txtAssunto.innerHTML = 'Texto grande, no maximo 100 caractere'
        txtAssunto.style.color = 'red'
      } else{
       txtAssunto.innerHTML = 'mensagem valida'
       txtAssunto.style.color = 'blue' 
      }
    }