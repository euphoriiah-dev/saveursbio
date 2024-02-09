// React Imports
import React from 'react';
import Navbar from '../components/Navbar'
import '../style/home.css'
import Banner from '../components/Banner'


function Home () {
    return (
        <div className='home-container'>
            <Navbar />
            <section className='main-container'>
                <div className='main-promotion'>
                    <Banner/>
                </div>
            </section>
        </div>
    )
}

export default Home