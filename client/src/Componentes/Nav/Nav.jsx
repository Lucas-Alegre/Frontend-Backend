import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../Nav/Nav.css';

export default function Nav() {
    return (
        <div className='nav'>
            <h1 className='letra'>Soy un Nav y m renderiso en todos!</h1>
            <Link to='/home' className='letra'>
                Voy hacia Landing PAGE que es "/honme"
            </Link>
        </div>
    )
}