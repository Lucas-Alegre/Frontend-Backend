const { Router, response } = require('express');
const { Country, Turistas } = require('../../db')
const route = Router();
//Get de prueba
route.get('/', async (req, res) => {
    res.status(201).send('Funciono como Actividad');
})


route.post('/', async (req, res) => {
    //Supongo que me va a llegar un json con la actividadTuristica y el id de la ciudad 
    //De esa forma relaciono la ciudad con la actividadTuristica;
    const { name, difficulty, duration, temporada } = req.body.actividad;
    const { id } = req.body;
    try {
        if (!name || !difficulty || !duration || !temporada || !id) {
            return res.status(404).send('Faltan los datos por Body')
        }
        const actividadCreate = await Turistas.create(req.body.actividad);
        console.log(actividadCreate.__proto__);
        const CiudadEncontrada = await Country.findByPk(id);
        await actividadCreate.addCountry(CiudadEncontrada);
        res.status(201).send('Relacion hecha correctamente');

    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = route;