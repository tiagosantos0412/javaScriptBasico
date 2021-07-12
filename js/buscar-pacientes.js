var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //xhr.open("GET", "https://api-pacientes.herokuapp.com/paci1111entes");

    xhr.addEventListener("load", function(){
        var errAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            errAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
        }else{
            errAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });

    xhr.send();
});