import React from "react"
import '../Card/Card.css'

export default function Card({ name, continents }) {
    return (
        <div className='card'>
            <h1>{name}</h1>
            <p>Created to: Lucas Alegre</p>
            <h1>{continents}</h1>
        </div>
    )
}