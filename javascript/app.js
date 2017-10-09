function cipher (string){
var cipherWord ="";

//Validación para que el usuario escriba un texto.
if(string.length === 0){
  document.write("Escriba un texto para cifrar porfavor");
}

for (var i = 0 ; i < string.length ; i++){

//Condicional para que actúe en mayúsculas según código ASCII.
//Las letras mayúsculas en código ASCII  -> A = 65
    if(string.charAt(i).charCodeAt(0) < 97){
      var positionAlphabet = string.charAt(i).charCodeAt(0) - 65;
      //Aplicando el cifrado cesar
      var newPosition = ((positionAlphabet + 33) % 26) + 65;
      cipherWord += (String.fromCharCode(newPosition));
      cipherWord;
    }

//Condicional para que actúe en minúsculas según código ASCII.
//Las letras minúsculas en código ASCII  -> a = 97
    else if(string.charAt(i).charCodeAt(0) >= 97){
      positionAlphabet = string.charAt(i).charCodeAt(0) - 97;
//Aplicando el cifrado cesar
      newPosition = ((positionAlphabet + 33) % 26) + 97;
      cipherWord += String.fromCharCode(newPosition);
      cipherWord;
    }
  }

document.write("Tu texto cifrado es : " + cipherWord);
}

var string = prompt("Ingrese texto para cifrar");
cipher(string);


// function para descifrar.
function decipher (string){

var decipherWord ="";

//Validación para que el usuario escriba un texto.
if(string.length === 0){
  document.write("Escriba un texto para descifrar porfavor");
}

for (var i = 0 ; i < string.length ; i++){
//Condicional para que actúe en mayúsculas según código ASCII.
    if(string.charAt(i).charCodeAt(0) < 97){
      var positionAlphabet= string.charAt(i).charCodeAt(0) + 65 ;
        //Aplicando la fórmula para descifrar
      var newPosition = ((positionAlphabet - 33) % 26) + 65;
      decipherWord += (String.fromCharCode(newPosition))

    }

//Condicional para que actúe en minúsculas según código ASCII.
    else if (string.charAt(i).charCodeAt(0) >= 97){
      positionAlphabet= string.charAt(i).charCodeAt(0) - 45 ;
      //Aplicando la fórmula para descifrar
      newPosition = ((positionAlphabet - 33) % 26) + 97 ;
      decipherWord += String.fromCharCode(newPosition);
      decipherWord;
    }
}
document.write("Tu texto descifrado es : " + decipherWord);
}

var string = prompt("Ingrese texto para descifrar");
decipher(string)
