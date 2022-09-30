import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Connect } from "react-redux";
import { getAllCountry } from "../../Redux/Actions";
import { Link } from 'react-router-dom';
import Card from '../Card/Card'

export default function Home() {
    const dispatch = useDispatch();
    const allCountry = useSelector((state) => state.countries);


    //Trae info del stado
    useEffect(() => {
        dispatch(getAllCountry())
    }, [dispatch])


    function HandleClick(e) {
        e.preventDefault();
        dispatch(getAllCountry());
    }
    return (
        <div>
            <h1>Soy un OtherHOME</h1>

            <Link to='/country'>
                Crear country</Link>
            <h1>Soy Todas las  ciudades</h1>
            {console.log(allCountry)}
            {//Logica para imprimira las cartas json
                allCountry && allCountry.map((e) => {
                    return (
                        <Card name={e.name} />
                    )
                })
            }



        </div>
    )
    { /*
   
    <button onClick={e => { HandleClick(e) }}>
        Volver a cargar las ciudades</button>
         
*/ }

}


