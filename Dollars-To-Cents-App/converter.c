#include <stdio.h>
#include <string.h>
#include <complex.h> 
#include <fenv.h>
#include <float.h> 
#include <limits.h> //(_MIN, _MAX).
#include <math.h> //Funções matemáticas comuns em computação.
#include <stdarg.h> //argumentos como parametro 

float main(){
    float dadoInput = 0;

    printf("Insira um valor em dólar:\n");
    scanf("%f", &dadoInput);

    float conversaoInput(float dadoInput);

    int inputConvertido = conversaoInput(dadoInput);

    int convertereEmMoedas(int inputConvertido);

    int saldoTotal = convertereEmMoedas(inputConvertido);

    // printf("%i\n", saldoTotal);

}

float conversaoInput(float dadoInput){
    float conversao;

    conversao = (dadoInput * 100.0) / 10;

    return conversao;
}

int convertereEmMoedas(int inputConvertido){
    int penny, nickel, dime, quarter, saldo;

    quarter = floor(inputConvertido / 25);
    saldo = inputConvertido % 25;
    dime = floor(saldo / 10);
    saldo = saldo % 10;
    nickel = floor(saldo / 5);
    saldo = saldo % 5;
    penny = floor(saldo / 1);


    return printf("Quaters: %i Dimes: %i Nickel: %i Penny: %i\n", quarter, dime, nickel, penny);
}
