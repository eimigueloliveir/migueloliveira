const inputEle = document.getElementById('enter');
    const consoleEle = document.getElementById('console-text');
    inputEle.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { 
      var texto = inputEle.value;
      texto = texto.trim();
      texto = texto.toLowerCase();
      if(texto == "dotnet"){
      consoleEle.innerHTML += '<br><span id="console-tex">' + "<br>Options:<br>Usage: dotnet run<br>Usage: dotnet --version" + '</span><br>';
      }
      else if(texto == "dotnet run"){
      consoleEle.innerHTML += '<span id="console-tex">' + "I'm Miguel Oliveira, I'm 16 years old, I like programming, games, movies, among other things..." + '</span><br>';
      const text = document.getElementById('console-tex');
      typeWriter(text);
      }
      else if(texto == "dotnet --version"){
      consoleEle.innerHTML += '<br><span id="console-tex">' + "6.0.300" + '</span><br>';
      const text = document.getElementById('console-tex');
      typeWriter(text);
      }
      else if(texto == "")
      {

      }
      else{
          consoleEle.innerHTML += '<br><span id="console-tex"> ' + inputEle.value + " não é reconhecido como um comando interno</span><br>"+
          "<span id='console-tex'> ou externo, um programa operável ou um arquivo em lotes.</span><br>";
      }
      
    }
  });

  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
     }
    }
  