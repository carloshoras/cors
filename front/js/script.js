function getCharacterInfo () {
    const characterNameInput = document.getElementById("characterName")
    const characterInfo = document.getElementById("characterInfo")

    const characterName = characterNameInput.value.toLocaleLowerCase()
    fetch(`http://localhost:3000/characters/${characterName}`).then(function (response) {
        return response.json()
    }).then(function (data) {
        for(let character of data.results) {
            characterInfo.innerHTML += `
            <div>
            <h2>Name: ${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
            <p>Origin: ${character.origin.name}</p>
            <img src="${character.image}" alt="${character.name}"/>
            </div>

            `
        }
    }).catch(function(error) {
        return characterInfo.innerHTML = `<p>Imposible acceder al character</p>`
    })
}

