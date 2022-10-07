import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Connect } from "react-redux";
import { getAllCountry, filterByContinents, OrderByName } from "../../Redux/Actions";
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import '../Home/Home.css'
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
    const dispatch = useDispatch();
    const allCountry = useSelector((state) => state.countries);
    const [estadoParaSort, setEstadoParaSort] = useState('');
    //Un estado con la pagina actual y set para cambiarlo
    const [currentPage, setCurrenPage] = useState(1);
    //Country por paginas, aqui se agregaran el conjunto 9 por pagina
    const [countryForPage, setCountryForPage] = useState(9);
    //Aca multimplicamos la pagina actual x cantidad De paginado y ese es el ultimo indice
    const indexUltimoCountry = currentPage * countryForPage;
    //aca restamos el ultimo indice - cantidad de paginado para que sea el primer indice
    const indexPrimerCountry = indexUltimoCountry - countryForPage;
    //Aca voy a contener el grupo de country actuales, trayendo el array de DB;
    const currentCountry = allCountry.slice(indexPrimerCountry, indexUltimoCountry);

    const paginado = (pageNumber) => {
        setCurrenPage(pageNumber);
    }


    //Aplica una action al reducer para quecargue el state
    useEffect(() => {
        dispatch(getAllCountry())
    }, [dispatch])


    function HandleClick(e) {
        e.preventDefault();
        dispatch(getAllCountry());
    }
    function HandleFilterContinents(e) {
        dispatch(filterByContinents(e.target.value))
        // 
    }
    function HandleOrderByName(e) {
        dispatch(OrderByName(e.target.value))
        setCurrenPage(1);
        setEstadoParaSort(`ordenado ${e.target.value}`);
    }
    return (
        <div >
            <Paginado countryForPage={countryForPage} allCountry={allCountry.length}
                paginado={paginado} />
            <SearchBar />
            <select onChange={e => HandleOrderByName(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>

            <select onChange={e => HandleFilterContinents(e)}>
                <option value="America">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Africa">África</option>
                <option value="Antártida">Antártida</option>
                <option value="Oceanía">Oceanía</option>
                <option value="South America">South America</option>
            </select>
            <select>
                <option value="Actividad Tiristica1">Actividad Tiristica1</option>
                <option value="Actividad Tiristica2">Actividad Tiristica2</option>
            </select>

            <Link to='/country'>
                Crear country</Link>
            <h1>Soy Todas las  ciudades</h1>
            <button onClick={e => { HandleClick(e) }}>
                Volver a cargar las ciudades</button>
            {console.log(allCountry)}
            <div className="container centrado">
                <div className="TodasLasCartas centrado">
                    {//Logica para imprimira las cartas json

                        currentCountry.map((e) => {
                            return (
                                <Card name={e.name} continents={e.continents} />
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
    { /*
   
   
         
*/ }

}


