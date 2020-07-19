function calcular() {


    var armazenarMultiplicacoes = [0,0,0,0,0]
    var somaDosPesos = 0 
    var somaDasMedias = 0
    var media = 0

    let notas = [document.getElementById("nota-linguagem").value, 
                 document.getElementById("nota-matematica").value,
                 document.getElementById("nota-ciencias").value, 
                 document.getElementById("nota-humanas").value, 
                 document.getElementById("nota-redacao").value]

    let pesos = [document.getElementById("peso-linguagem").value, 
                 document.getElementById("peso-matematica").value,
                 document.getElementById("peso-ciencias").value, 
                 document.getElementById("peso-humanas").value, 
                 document.getElementById("peso-redacao").value]

    let notaCorte = document.getElementById("nota-corte").value


    for (let index = 0; index < notas.length; index++) {
        armazenarMultiplicacoes[index] =  notas[index] * pesos[index]
    }

    for (let index = 0; index < armazenarMultiplicacoes.length; index++) {
      somaDasMedias += armazenarMultiplicacoes[index]
    }

    for (let index = 0; index < pesos.length; index++) {
      somaDosPesos += pesos[index] * 1
    }
    
    media = somaDasMedias / somaDosPesos

    if (notaCorte > media) {
        document.getElementById("resultado").innerText = `Você obteve uma média de ${media}, que não é o suficiente para uma aprovação`
    }
    else{
        document.getElementById("resultado").innerText = `Você obteve uma média de ${media}, que é o suficiente para uma aprovação` 
    }

  }