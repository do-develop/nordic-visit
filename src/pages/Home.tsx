import React, { useEffect, useRef , useState } from 'react';
import Panorama1 from '../img/panorama/panorama1.jpg';
import Panorama2 from '../img/panorama/panorama2.jpg';
import Panorama3 from '../img/panorama/panorama3.jpg';
import Panorama4 from '../img/panorama/panorama4.jpg';
import Panorama5 from '../img/panorama/panorama5.jpg';
import Panorama6 from '../img/panorama/panorama6.jpg';
import SliderImage from '../components/SliderImage';

const Home = () => {

    const panorama_pics = [Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6].map((pic, idx) => 
        (
            <div className='slider-pic'>
                <img src={pic} alt=''/>
            </div>
        )
    );


    return (
        <>
        <div className="banner">
            {/* Image Slide */}
            <SliderImage />
    
            {/* Introduction of the travel agency */}
            <section>
    
            </section>
    
    
            {/* Footer */}
            <footer>
    
            </footer>
        </div>

        </>
    );

};

export default Home;
