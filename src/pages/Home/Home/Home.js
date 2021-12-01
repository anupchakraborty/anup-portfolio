import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Mainmenu from '../../Shared/Mainmenu/Mainmenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Mainmenu/>
            <Banner/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Home;