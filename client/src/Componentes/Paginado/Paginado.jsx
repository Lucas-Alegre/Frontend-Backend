import React from "react";
import '../Paginado/Paginado.css'

export default function Paginado({ countryForPage, allCountry, paginado }) {
    const pageNumber = [];
    //esto me va atraer la cantidad de paginas a crear
    for (let i = 0; i <= Math.ceil(allCountry / countryForPage); i++) {
        pageNumber.push(i + 1);
    }

    return (
        <nav>
            <ul className="paginado">
                {/*Aca pregunta si hay array */
                    pageNumber &&
                    pageNumber.map((number) => (
                        <li className="number" >
                            <a onClick={() => paginado(number)}> {number} </a>
                        </li>

                    ))
                }
                <li></li>
            </ul>
        </nav>
    )
}