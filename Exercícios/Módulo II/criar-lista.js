
var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.createElement('ul');

for (let index = 0; index < nomes.length; index++) {

    var elementoLista = document.createElement('li');
    elementoLista.textContent = nomes[index]; 

    lista.appendChild(elementoLista);
    
}

var divPrincipal = document.querySelector('#app');

divPrincipal.appendChild(lista);

