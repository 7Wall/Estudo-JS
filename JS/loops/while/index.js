let shipName = prompt("Digite o nome da nave:")
let warpCount = 0
let chosenOption = ""

chosenOption = prompt("Deseja entrar em drobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n 2- Não")
}

alert("Nave: " + shipName + "\nQuantidade de dobras: " + warpCount)