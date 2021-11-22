function decodeMorse(morseCode) {
    var ref = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
  }

  function Encriptar (){
  var palabra = document.getElementById("TextoNormal").value;
  palabra_codificada = btoa(palabra);
  document.getElementById("TextoEncriptado").innerHTML = palabra_codificada;
  }
  function Desencriptar () {
    var palabra = document.getElementById("TextoNormal").value;
    palabra_decodificada = atob (palabra);
    document.getElementById("TextoEncriptado").innerHTML = palabra_decodificada;
  }

  

 
  
  
  


 