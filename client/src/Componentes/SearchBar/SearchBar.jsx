import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchinByNamen } from "../../Redux/Actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function HandleInputChange(e) {
        e.preventDefault()
        setName(e.target.value);
    }
    function SearchName(e) {
        e.preventDefault()
        dispatch(getSearchinByNamen(name))
        setName('');
    }
    return (
        <div>
            <input type="text" placeholder="Nombre ?"
                onChange={(e) => HandleInputChange(e)} />
            <button type="submit" onClick={(e) => SearchName(e)}>Buscar</button>
        </div>
    )
}