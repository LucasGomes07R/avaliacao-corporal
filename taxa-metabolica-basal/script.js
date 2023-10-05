
function txbasal(){
    var peso = parseFloat(document.getElementById("txtp").value)
    var altura = parseFloat(document.getElementById("txta").value)
    var idade = parseInt(document.getElementById("txti").value)
    var sexo = document.querySelector('input[name="radsex"]:checked').id
    if(isNaN(peso) || isNaN(altura) || isNaN(idade)){
        document.getElementById('res').innerHTML = "Preencha todos os campos corretamente com numeros"
        return
    }
    if(sexo === "mas"){
        var tmb =  66 + (13.75 * peso) + (5 * altura) - (6.75 * idade)
    } else {
        var tmb = 655 + (9.56 * peso) + (1.85 * altura) - (4.68 * idade)
    }
    document.getElementById("res").innerHTML = "Sua taxa metabólica basal é: " + tmb.toFixed(2) + " calorias por dia."
}