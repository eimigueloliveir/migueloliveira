function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 200 * i);
     }
    }
function typeWritertexto(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 50 * i);
     }
    }
    const titulo = document.querySelector('.titulo');
    const texto = document.querySelector('.texto')
    typeWriter(titulo);
    typeWritertexto(texto);
  