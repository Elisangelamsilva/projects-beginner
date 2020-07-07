function btnConverter(){
let binario = Number(document.querySelector(".inputBinario").value)
let resposta = document.querySelector(".resposta")


if(binario.toString().length > 8) alert("Insira até 8 dígitos."); 
//if(binario !== 1 && binario !== 0) alert("É aceito apenas 0 e 1.")

let decimal = parseInt(binario, 2);

 
resposta.innerHTML = `O binário ${binario} convertido para decimal é ${decimal}.`


}