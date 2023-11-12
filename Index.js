let nome = "Kratos"
let XP = 9050
let contador = 0

while (contador < 1) {
  contador++
 
if (XP > 0 && XP <=1000) {
  console.log("Ferro")
} else if (XP > 1000 && XP <= 2000){
  console.log("Bronze")
} else if (XP > 2000 && XP <= 5000){
  console.log("Prata")
} else if (XP > 5000 && XP <= 7000){
    console.log("Ouro")
} else if (XP > 7000 && XP <= 8000){
  console.log("Platina")
} else if (XP > 8000 && XP <= 9000){
  console.log("Ascendente")
} else if (XP > 9000 && XP <= 10000){
  console.log("Imortal")
} else if (XP >= 10000){
  console.log("Radiante")
}
}
