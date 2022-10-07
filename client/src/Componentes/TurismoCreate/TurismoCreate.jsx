import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//import { postTuristas, getTuristas } from '../../Redux/Actions/index';
import { useDispatch, useSelector } from "react-redux";

const TurismoCreate = () => {
    //const dispatch = useDispatch();
    //const turistas = useSelector((state) => state.turistas)
    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: 0
    })


    /*useEffect(() => {
        dispatch(getTuristas())

    }, []);*/
    function handleInputcHANGE(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Link to='/home'> <button>Volver</button></Link>
            <h1>Crea tu propio personaje</h1>
            <form action="">
                <div>
                    <label>Nombre: </label>
                    <input type="text"
                        placeholder="Escribe nombre"
                        name='name'
                        onChange={handleInputcHANGE} />
                </div>
                <div>
                    <label>Dificulty</label>
                    <input type="text"
                        placeholder="Escribe dificultad"
                        name='dificulty'
                        onChange={handleInputcHANGE} />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="text"
                        placeholder="Escribe duracion"
                        name='duration'
                        onChange={handleInputcHANGE}
                    />
                </div>
                <div>
                    <button ></button>
                </div>
            </form>
        </div>
    )

}
export default TurismoCreate;