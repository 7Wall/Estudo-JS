let spaceship = prompt ("Digite o nome da nave:")

let spaceshipInverted = ""

for(let i = spaceship.length - 1; i>= 0; i--){
    if(spaceship[i] == "e") {
        break
    }
    spaceshipInverted += spaceship[i]
}

alert("Nome original da nave: " + spaceship + "\nNome após ocultação: " + spaceshipInverted)