
var inputElement = document.querySelector('input[name = nome]');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function (){
    var text = inputElement.value;
    alert(text);
} 

var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://google.com')

var textElement = document.createTextNode('Acessar Google')

linkElement.appendChild(textElement);

var divElement = document.querySelector('#app');

divElement.appendChild(document.createElement('br'));
divElement.appendChild(linkElement);
