class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp (acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave")
        }
    }
}

class battleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha.")
    }
}

class discoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamento de coleta e parando nave de descoberta.")
    }
}

let darwin = new discoverySpaceship("Darwin", 10, 200)
let marte = new battleSpaceship("Marte", 8, 240)

console.log(darwin)
console.log(marte)

darwin.speedUp(210)
marte.speedUp(230)

darwin.stop()
marte.stop()