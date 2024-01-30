//React Imports
import React from "react"
import '../style/components/navbar.css'

function Navbar () {
    return(
        <nav className="main-nav">
    <ul>
        <li className="first-nav-li"><a href="#" id="p1-link">Nos produits</a>
            <ul class="sub-menu">
                <li><a href="#">Fruits et légumes</a></li>
                <li><a href="#">Épicerie sucrée</a></li>
                <li><a href="#">Épicerie salée</a></li>
                <li><a href="#">Produits frais</a></li>
                <li><a href="#">Boissons</a></li>
                <li><a href="#">Hygiène et beauté</a></li>
                <li><a href="#">Nouveautés</a></li>
            </ul>
        </li>
        <li className="first-nav-li">
            <a href="#">Nos producteurs</a>
        </li>
        <li className="first-nav-li">
            <a href="#">Nos magasins</a>
        </li>
        <li className="first-nav-li">
            <a href="#">A propos de nous</a>
        </li>
    </ul>
        </nav>
    )
}

export default Navbar