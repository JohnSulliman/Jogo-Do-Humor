const button = document.getElementById("button");
const image = document.getElementById("image");
const pokemon = document.getElementById("name")
const info = document.getElementById("info")
const reset = document.getElementById("reset")
let evolution = 1;

button.addEventListener("click", function () {
    console.log(evolution)

    if (evolution == 1) {
        pokemon.innerHTML = "Ivysaur"
        image.src="./img/002.png"
        info.innerHTML = "Parabéns! Seu pokémon evoluiu para Ivysaur."
        evolution++
    }
    else if (evolution == 2) {
        pokemon.innerHTML = "Venusaur"
        image.src="./img/003.png"
        info.innerHTML = "Parabéns! Seu pokémon evoluiu para Venusaur."
        button.id="button1"
        reset.innerHTML = "Resetar!"
        evolution++
        
    }
    else if (button.id=="button1") {
        var x
        var text = confirm("Deseja resetar as evoluções?");
        if (text==true) {
            x="você pressionou Ok!"
            pokemon.innerHTML = "Bulbasaur"
            image.src="./img/001.png"
            info.innerHTML = "Seu pokémon está na evolução inicial"
            button.id="button"
            reset.innerHTML = "Evoluir!"
            evolution = 1

        }
        else
        {
            x="Você pressionou Cancelar!";
    
        }
        
    }
});