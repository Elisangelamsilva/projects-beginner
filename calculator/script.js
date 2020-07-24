function calcular(){
    let recebe01 = Number(document.getElementById("recebe01").value);
    let recebe02 = Number(document.getElementById("recebe02").value);
    let res = document.querySelector("#res");
    let selecionar = document.querySelector("#selecionar").value;

    let soma = 0
    let subtrair = 0
    let multiplicar = 0
    let dividir = 0

    if(selecionar == "somar"){
        soma = recebe01 + recebe02;
        res.innerHTML += `<p>${recebe01} x ${recebe02}= ${soma}</p>`
    }if (selecionar == "subtrair"){
        subtrair = recebe01 - recebe02;
        res.innerHTML += `<p>${recebe01} - ${recebe02}= ${subtrair}</p>`
    }if(selecionar == "multiplicar"){
        multiplicar = recebe01 * recebe02;
    res.innerHTML += `<p>${recebe01} * ${recebe02}= ${multiplicar}</p>`
    }if(selecionar == "dividir"){
        dividir = recebe01 / recebe02;
        res.innerHTML += `<p>${recebe01} / ${recebe02}= ${dividir}</p>`
    }


}