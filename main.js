'use strict';

function mostrarResultado () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    const imc = peso / (altura * altura)

    let texto;
    if (imc < 18.5) {
        texto = 'e você está abaixo do peso';
    } else if (imc < 25) {
        texto = 'e você está com o peso ideal. Parabéns!';
    } else if (imc < 30) {
        texto = 'e você está levemente acima do peso.';
    } else if (imc < 35) {
        texto = 'e você está com obesidade grau I.';
    } else if (imc < 40) {
        texto = 'e você está com obesidade grau II.';
    } else {
        texto = 'e você está  com obesidade grau III. Cuidado!';
    }

    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} ${texto}`; /* Essa linha também poderia ser criada por = nome + ", seu imc é: " + imc; */
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);  

