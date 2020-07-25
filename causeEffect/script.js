let contEsquerda = document.querySelectorAll(".contEsquerda")
let contDireita = document.querySelector(".contDireita")
let pessoa = [
    {nome: "Elisangela Maria", city: "Marceió", id:1},
    {nome: "Anderson Gostoso", city: "Palmeira", id:2},
    {nome: "Carla Issoaí", city: "Recife", id:3}
]

for(let i of contEsquerda){
    i.addEventListener("click", function(){
        let pessoaA = pessoa.find(function(p){
            let pessoaId = Number(i.getAttribute("pessoaId"));
            return p.id == pessoaId
        })
        contDireita.innerHTML = `<p>Nome: ${pessoaA.nome}</p><p>City: ${pessoaA.city}</p>`;
    })

}

