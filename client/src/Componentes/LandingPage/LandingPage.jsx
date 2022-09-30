import React from "react";
import { Link } from 'react-router-dom';
import '../LandingPage/LandingPage.css';

export default function LandingPage() {
    return (
        <div>
            <h1>Soy un Landing Page</h1>
            <Link to='/Otrohome'>
                <button>Voy a "Otrohome" Que renderisan CARDS</button>
            </Link>
        </div>
    )
}
