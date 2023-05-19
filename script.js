function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var sumir = document.getElementById('sumir')
    if (fano.value.length <= 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-h-bebe.jpg')
            }else if (idade <21) { 
                //jovem
                img.setAttribute('src', 'foto-h-jovem.jpg')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto-h-adulta.jpg')
            }else if (idade >50) {
                //idoso
                img.setAttribute('src', 'foto-h-idosa.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-f-bebe.jpg')
            }else if (idade <21) { 
                //jovem
                img.setAttribute('src', 'foto-f-jovem.jpg')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto-f-adulto.jpg')
            }else if (idade >50) {
                //idoso
                img.setAttribute('src', 'foto-f-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        img.style.padding = '5px'
        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        res.appendChild(img)
        sumir.style.display = 'none'
    }
}