const content_pokemon = document.getElementById('Content_pokemon');
const counter_pokemon = 150;

const getPoke = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
}
getPoke(1);