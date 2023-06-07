function validarFormulario(event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido! Enviando...");
        document.forms[5].submit();
    } else {
        alert("Formulário inválido! O número B deve ser maior que o número A.");
    }
}