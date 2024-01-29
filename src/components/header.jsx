//React Import
import React from "react"
import "../style/components/header.css"
import { Link } from "react-router-dom"
import Logo from '../assets/img/saveursbio_logo.png'
import SearchBar from '../components/SearchBar'

function Header () {
    // Fonction de recherche
    const handleSearch = (searchTerm) => {
        // Effectuez ici les actions de recherche avec le terme de recherche
        console.log('Recherche de produits avec le terme :', searchTerm);
    };

    return (
        <div className="header-container">
            <div className="logo">
               <Link to='/'>
                    <img src={Logo} alt="logo magasin bio" id="logo1black" />
               </Link>  
            </div>
            <div className="search-and-buttons">
                <section className="search-bar">
                    <SearchBar onSearch={handleSearch} />
                </section>
                <section className="buttons-1">

                </section>

            </div>
        </div>
    )
}

export default Header