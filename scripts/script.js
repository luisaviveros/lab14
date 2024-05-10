const container = document.getElementById("main-container");

async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        var characters = data.results.map(character => parseJsonToCharacter(character));
        renderAllCharacters(characters);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

function parseJsonToCharacter(element) {
    return new Character(element.name, element.image, element.status, element.species, element.location.name);
}

function renderAllCharacters(characters) {
    container.innerHTML = '';  // recuerda que esto es para limpiar el cosito de los personajes
    characters.forEach(character => {
        container.innerHTML += character.toHtml();
    });
}

getCharacters();
