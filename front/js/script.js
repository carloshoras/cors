function getCharacterInfo () {
    const characterNameInput = document.getElementById("characterName")
    const characterInfo = document.getElementById("characterInfo")

    const characterName = characterNameInput.value.toLocaleLowerCase()
    fetch(`http://localhost:3000/characters/${characterName}`).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data.results)
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
        // const {name, sprites: {front_default}, height, weight} = data
        // characterInfo.innerHTML = `
        // <h2>${name}</h2>
        // <img src="${front_default}" alt="${name}" />
        // <p>${height}</p>
        // <p>${weight}</p>
        // `
//         Name
// Status
// Species
// gender
// origin
// image
    }).catch(function(error) {
        return characterInfo.innerHTML = `<p>Imposible acceder al character</p>`
    })
}

