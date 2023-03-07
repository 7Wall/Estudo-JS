let spaceship = prompt ("Digite o nome da nave")
let oldChar = prompt ("Qual letra você deseja substituir?")
let newChar = prompt ("Por qual letra você deseja adicionar?")
let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] == oldChar){
        newSpaceship += newChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é: " + newSpaceship)
