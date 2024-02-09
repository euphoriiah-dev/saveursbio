//React Imports
import React from "react"
//Style
import '../style/components/banner.css'
//IMG Import
import MarketIMG from '../assets/img/bio-market.jpg'
//FONTAWESOME IMPORTS

function News () {
    return(
        <section className="banner-container">
             <img src={MarketIMG} alt="magasin bio"/>
             <section className="title-and-socials">
                <h1>En Bio, c'est mieux !</h1>
                    
             </section>
        </section>
    )
}

export default News