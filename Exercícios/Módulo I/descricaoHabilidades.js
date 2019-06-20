

function exibeHabilidade(use) {
    for (let value of use) {
        console.log( "O " + value.nome + "  possui as habilidades: " + value.habilidades.join());
    }
    
}


var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

exibeHabilidade(usuarios);


