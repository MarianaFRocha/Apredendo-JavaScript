var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function exibeEndereco(end){
    return 'O usuário mora em ' +  end.cidade + '/' + end.uf + ', no bairro ' + end.bairro + ', na rua ' 
        + end.rua + ' com nº' + end.numero +'.';

}

console.log(exibeEndereco(endereco));