function mudaFoto(foto){

    document.getElementById("icone").src = foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('cQtd').value)
    tot = qtd * 1050
    document.getElementById('cTot').value = tot
}