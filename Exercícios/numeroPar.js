
//intervalo de numeros pares
function pares(numero1, numero2) {
    
    var aux;

    if(numero1%2 == 0){
        aux = numero1;
    }else{
        aux = numero1+1;
    }

    while(aux<=numero2){
        console.log(aux+"\n");
        aux+=2;
    }

}

pares(5,19);