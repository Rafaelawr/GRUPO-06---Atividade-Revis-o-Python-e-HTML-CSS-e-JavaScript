document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const resultadoDiv = document.getElementById("resultado");
    const limpar = document.getElementById("limpar");

     calcularButton.addEventListener("click", function () {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        const imc = calcularIMC(peso, altura);
        const situacao = avaliarSituacao(imc);
        resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)}. ${situacao}`;
    
    });

    limpar.addEventListener("click", function(){
        pesoInput.value = " ";
        alturaInput.value= " ";
        resultadoDiv.textContent = " "
    })

     function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function avaliarSituacao(imc) {
        if (imc < 18.5) {
            return "Classificado como magreza.";
        } 
        else if (imc < 24.9) {
            return "Classificado como regular.";
        } 
        else if (imc < 29.9) {
            return "Classificado como sobrepeso.";
        } 
        else if (imc < 39.9) {
            return "Classificado como obesidade.";
        } 
        else {
            return "Classificado como obesidade grave.";
        }
    }

})
