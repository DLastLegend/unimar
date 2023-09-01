function agendar() {

    var horario = document.getElementById("horarioDia").value
    horario = horario.replace("T", " ")

    var select = document.getElementById("opcao");
    var opcaoValor = select.options[select.selectedIndex].value;

    var name = document.getElementById("name-input")

    Number(cpf = document.getElementById("cpfinput"))

    alert(`Nome: ${name.value}` + `\nCPF: ${cpf.value}` + `\nLugar: ${opcaoValor}` + `\nDia e Horário: ${horario}`)
}
