//IMPORT REACT
import React from "react"
//IMPORT CSS
import '../style/components/spotlight.css'

function Spotlight () {
    return (
        <section className="spotlight-container">
            <div className="title-line">
                <h2>En attendant le retour du printemps, découvrez notre sélection
                    de thés d'exception ! 
                </h2>
            </div>
            <div className="promo-container">
                <div className=" articles article-left">
                    <div className="promo-description">
                        <div className="hearts" id="heart-1">

                        </div>
                        <h3></h3>
                    </div>
                    <div className="promo-img-container">
                        <div className="first-set">

                        </div>
                        <div className="second-set">

                        </div>
                    </div>

                </div>
                <div className=" articles article-right">

                </div>
            </div>
        </section>
    )
    }

    export default Spotlight