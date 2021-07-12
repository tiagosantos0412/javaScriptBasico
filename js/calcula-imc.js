var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/**
 * Declaração das variáveis
 */
var peso = 0;
var altura = 0;
var imc = 0;
var paciente = "";


/**Array que irá iterar todos os pacientes com a classe paciente */
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];
    
    /*
        Realização do calculo do imc de cada paciente IMC = peso / altura x altura;
    */

    var tdPeso = paciente.querySelector(".info-peso");
    peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    /**
     * Validação do peso do paciente
     */
     if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "ERRO!! Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    /**
     * Validação da altura do paciente
     */

    if(!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "ERRO!! Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}