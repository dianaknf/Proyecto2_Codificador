

 

 function Encriptar (){
   var palabra = document.getElementById("TextoNormal").value;
   palabra_codificada = btoa(palabra);
   document.getElementById("TextoEncriptado").innerHTML = palabra_codificada;
      }

 function Desencriptar () {
  var palabra = document.getElementById("TextoEncriptado").value;
   palabra_decodificada = atob (palabra);
   document.getElementById("TextoNormal").innerHTML = palabra_decodificada;
  }


  function mostrarContrasena(){
      var tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

