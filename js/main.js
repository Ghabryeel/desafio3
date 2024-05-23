document.addEventListener("DOMContentLoaded", function() {
var texto = "Acesse minhas redes:";
var atraso = 200;
var textoElemento = document.querySelector(".sub_titulo");

var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
});