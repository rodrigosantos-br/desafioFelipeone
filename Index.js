let nome = prompt("Digite o seu nome: ")
let XP = number(prompt("Digite a sua experiência: "))

    console.log("Bem vindo Aventureiro, " + nome)

    if(XP <= 1000){
        console.log("Ferro")
    }else if(XP > 1000 && XP <= 2000){
        console.log("Bronze")
    }else if(XP > 2000 && XP <= 5000){
        console.log("Prata Ouro")
    }else if(XP > 5000 && XP <= 8000){
        console.log("Platina Diamante")
    }else if(XP > 8000 && XP <= 9000){
        console.log("Ascendente")
    }else if(XP >9000 && XP <= 10000){
        console.log("Imortal")
    }else if(XP > 10000){
        console.log("Radiante")
    }else{
        console.log("XP Invalida")
    };

