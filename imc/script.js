function calcularimc(){
    let peso = parseFloat(document.getElementById("idpeso").value)
    let altura = parseFloat(document.getElementById("idaltura").value)
    let imc = peso / (altura*altura) 
    document.getElementById('res').innerHTML = 'O seu IMC é ' + imc.toFixed(2)
}