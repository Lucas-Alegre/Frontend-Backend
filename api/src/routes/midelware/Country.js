const { Router, response } = require('express');
const { Country, Turistas } = require('../../db')
const route = Router();
const axios = require('axios');



//Trae info de la api
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3.1/all');
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.name.common,
            flags: e.flags.png,
            continents: e.continents,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
        }
    })
    return apiInfo;
}

//Trae info de la DataBase
const getDbInfo = async () => {
    return await Country.findAll(
        {
            include: {
                model: Turistas,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        })
}

//Trae la union de la api + la DataBase.
const getAllCountry = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);

    return infoTotal;
}

//Trae toda la api
route.get('/api', async (req, res) => {
    const countri = await getApiInfo();
    res.status(201).send(countri);
});

//Trae tod la DataBases
route.get('/dataBase', async (req, res) => {
    const countri = await Country.findAll();
    res.status(201).send(countri);
});



//Si se pasa name por Query se lo busca en DataBase y lo retorno.
//Sino, Guardo toda la Api en la DataBase, y retorno un listado con los nombres.
//http://localhost:3001/countries?name=GuateMAla  || http://localhost:3001/countries
route.get('/', async (req, res) => {
    const { name } = req.query;
    const coun = await getApiInfo();
    try {
        if (name) {
            const EstaCargada = await Country.findAll();
            //Si DataBase esta vacia, cargo la Api en ella, sino solo busco el name.
            if (!EstaCargada.length) {
                for (var i = 0; i < coun.length; i++) {
                    await Country.create(coun[i]);
                }
            }
            //Busco el Name en la DataBase
            const ListadoName = await Country.findAll({
                attributes: ["name"]
            });
            const NameEncontrated = await ListadoName.filter(e => e.name.toLowerCase().includes(name.toLocaleLowerCase()));
            if (NameEncontrated.length) {
                return res.status(201).send(NameEncontrated);
            }
            return res.status(404).send('No se econtro esa ciudad en la DataBase');
        }

        //Si no hay query solo cargo la Database
        for (var i = 0; i < coun.length; i++) {
            await Country.create(coun[i]);
        }
        const listadoName = await Country.findAll({
            attributes: ["name"]
        });

        res.status(201).send(listadoName);
    } catch (error) {
        res.status(404).send(error)
    }
})

route.get('/:idPais', async (req, res) => {
    const { idPais } = req.params;
    const info = await getApiInfo();
    try {
        if (idPais) {
            const Cargada = await Country.findAll();
            //Si DataBase esta vacia, cargo la Api en ella, sino solo busco el name.
            if (!Cargada.length) {
                for (var i = 0; i < info.length; i++) {
                    await Country.create(info[i]);
                }
            }
            const idEncontrated = await Country.findByPk(idPais);
            res.status(201).send(idEncontrated);
        }
    } catch (error) {
        res.status(404).send(error);
    }
});



module.exports = route;