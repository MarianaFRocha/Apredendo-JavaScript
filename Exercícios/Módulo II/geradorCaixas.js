
//gerador de cores aleatórias 
function getRandomColor() {

    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var btn = document.querySelector('button.Botao');
var divPrincipal = document.querySelector('#app');
 

//Ao clicar no botão um novo quadrado é criado
btn.onclick = function(){
    var quadrado = document.createElement('div');
    quadrado.style.background = '#F00';
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.display = 'inline-block';

    //Ao passar o mouse pelo quadrado muda a cor do quadrado de forma aleatoria
    quadrado.onmouseover = function() { 
        quadrado.style.background = getRandomColor();        
    }

    divPrincipal.appendChild(quadrado);
};


console.log(btn);

