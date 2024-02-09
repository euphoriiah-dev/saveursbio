//React Imports
import React from "react"
//Style
import '../style/components/banner.css'
//IMG Import
import MarketIMG from '../assets/img/bio-market.jpg'
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram,faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';


function News () {
    return(
        <section className="banner-container">
             <img src={MarketIMG} alt="magasin bio"/>
             <section className="title-and-socials">
                <h1>En Bio, c'est mieux !</h1>
                <div className="banner-icons">
                    <a href="#"> 
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </a>
                </div>
                <h2>

                </h2>
             </section>
        </section>
    )
}

export default News