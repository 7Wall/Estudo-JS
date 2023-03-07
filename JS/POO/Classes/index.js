class Spaceship {
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }

    hitch(){
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
        chosenOption = prompt(  "Oque deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do progama")
    }
    return chosenOption
}

function creatSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave:")
    let crewQuantity = prompt("Informe a quantidade de tripulantes:")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " `${spaceship.name} (${spaceship.crewQuantity} tripulantes)\n`
    })
    alert(spaceshipList)
}

let htichedSpaceships = []

let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = creatSpaceship()
            spaceshipToAdd.hitch()
            htichedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(htichedSpaceships)
            break
    }
}