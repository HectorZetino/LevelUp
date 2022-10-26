const content_pokemon = document.getElementById('Content_pokemon');
const counter_pokemon = 150;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const fetchPoke = async () =>{
    for(let i = 0; i < 6; i++){
        const rPoke = getRandomInt(counter_pokemon);
        await getPoke(rPoke);
    }
}
const getPoke = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokeCard(pokemon);
}

const createPokeCard = (pokemon) => {
    const elementPoke = document.createElement('div');
    elementPoke.classList.add('pokemon');
    const { id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
    <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}"/>
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Tipo: <span>${type}</span></small>
    </div>
    `;
    elementPoke.innerHTML = pokeInnerHTML;
    container_pokemon.appendChild(elementPoke);
}
fetchPoke();