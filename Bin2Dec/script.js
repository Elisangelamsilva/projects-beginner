function btnConverter(){
let binario = document.querySelector(".inputBinario").value
let resposta = document.querySelector(".resposta")

if(binario > 8) alert("Insira até 8 dígitos."); 
//if(binario !== 1 && binario !== 0) alert("É aceito apenas 0 e 1.")

// for(let i = 0; i < 7; i++){
//     if(i === 0){
//         binario.charAt(i)
//     }
//     if(binario === 1){
//     }
// }

let decimal = parseInt(binario, 2);

 
resposta.innerHTML = `O binário ${binario} convertido para decimal é ${decimal}.`


}