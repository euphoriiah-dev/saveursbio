// React Imports
import React from 'react';
import Navbar from '../components/Navbar'
import '../style/home.css'
import Banner from '../components/Banner'
import Spotlight from '../components/Spotlight';


function Home () {
    return (
        <div className='home-container'>
            <Navbar />
            <section className='main-container'>
                <div className='main-promotion'>
                    <Banner/>
                    <Spotlight />
                </div>
            </section>
        </div>
    )
}

export default Home