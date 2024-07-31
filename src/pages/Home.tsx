import React, { useEffect, useRef , useState } from 'react';
import { Scissors, PeopleFill, TreeFill, EmojiSunglasses, BalloonHeartFill, Luggage, Bicycle, CloudSun } from 'react-bootstrap-icons';
import { IntroComponent } from '../components/IntroComponent';
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
                <div className="intro">
                    <h1 className="text-primary">Achieve your holiday dream in Nordic countries <EmojiSunglasses /></h1>
                    <h3 className="text-primary"><BalloonHeartFill />Authentic, original and independent tour guidelines </h3>

                    <IntroComponent 
                        icon={<Luggage size={70}/>}
                        title="We offer custom-tailored itinerary"
                        logo={<Scissors size={28}/>}
                        content="Nordic visit staffs are a team of much motivated, enthusiastic and highly experienced travel specialists
                                who understand the Scandinavia region inside and out to provide
                                unforgettable experience to its customers"
                    />

                    <IntroComponent 
                        icon={<CloudSun size={70}/>}
                        title="Travel consultant will be designated to each customer"
                        logo={<PeopleFill size={28}/>}
                        content="The consultant will serve as the point of contact from before the customer book their holiday to after their journey has ended."
                    />

                    <IntroComponent 
                        icon={<Bicycle size={70}/>}
                        title="Sustainable tourism"
                        logo={<TreeFill size={28}/>}
                        content="Keep untouched pristine nature clean by choosing eco-friendly options in modes of transportation."
                    />

                </div>
            </section>
    
    
            {/* Footer */}
            <footer>
                <div className='address'>
                    Nordic Visit department&nbsp;
                    P.O. Box 111&nbsp;
                    N-0000 Oslo, Norway&nbsp;
                    Phone: +47 00 00 00 00
                </div>
            </footer>
        </div>

        </>
    );

};

export default Home;
