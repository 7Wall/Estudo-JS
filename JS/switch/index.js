let distanceInLY = prompt("Digite a distancia em anos-luz (LY)")

let chosenOption = prompt("Para qual unidade deseja converter\n1- Parsec(PC)\n2- Unidade Astronômica(AU)\n3- Quilometros(KM)\n\n(Digite o numero da opção desejada)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astrônomica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12) 
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        break
}

alert("Distancia em Anos-luz: " + distanceInLY + "\n" + chosenUnity +": " + convertedDistance)