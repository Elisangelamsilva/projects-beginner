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

    printf("%i\n", inputConvertido);

}

float conversaoInput(float dadoInput){
    float conversao;

    conversao = (dadoInput * 100.0) / 10;

    return conversao;
}

int convertereEmMoedas(int inputConvertido){
    
}
