const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/characters", async function (req, res) {
    const url = "https://rickandmortyapi.com/api/character"
    try {
        const response = await axios.get(url)
        const {results} = response.data
        res.json({results})
    } catch (ERROR) {
        res.status(404).json({error: 'pokemon no encontrado'})
    }
})

app.get("/characters/:name", async function (req, res) {
    const name = req.params.name
     const url = `https://rickandmortyapi.com/api/character/?name=${name}`
    try {
        const response = await axios.get(url)
        const {results} = response.data
        res.json({results})
    } catch (ERROR) {
        res.status(404).json({error: 'personaje no encontrado'})
    }
})

app.listen(3000, () => {
    console.log('Express está escuchando en el puerto http//localhost:3000')
})