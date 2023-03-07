let pilotName = prompt ("Olá. Por favor insira seu nome...")
let velocity = 0

let newVelocity = prompt ("Agora, " + pilotName + " a qual velocidade você deseja viajar")

let confirmVelocity = confirm("A nave esta indo para " + newVelocity + " km/s")

if(confirmVelocity){
    velocity = newVelocity
}

if(velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40){
    alert("Você está devagar, podemos aumentar mais")
} else if(velocity>= 40 && velocity <= 80){
    alert("Parece uma boa velociade para manter")
} else if(velocity > 80 && velocity < 100){
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + " km/s")