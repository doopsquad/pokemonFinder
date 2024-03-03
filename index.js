let fetchPokemon = document.getElementById('fetchPoke');

async function getPokemon() {
    try {
        let selectedPokemon = document.getElementById('pokemon').value.toLowerCase();
        let pokemonIndex = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        console.log(pokemonIndex);
        let pokemonSprite = document.getElementById('pokemonPic');
        let parsed = await pokemonIndex.json();
        pokemonSprite.src = parsed.sprites.front_default;
        pokemonSprite.style.visibility = "visible";
    }
    catch(error) {
        window.alert("That's not a valid pokemon.");
        console.log(error);
    }
}

fetchPokemon.addEventListener('click', getPokemon);