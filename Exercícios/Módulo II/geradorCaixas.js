

var btn = document.querySelector('button.Botao');
var divPrincipal = document.querySelector('#app');


btn.onclick = function(){
    var quadrado = document.createElement('div');
    quadrado.style.background = '#F00';
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.display = 'inline-block';

    divPrincipal.appendChild(quadrado);
};

console.log(btn);

