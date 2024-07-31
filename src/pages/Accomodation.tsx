import React, { useState } from 'react';
import { AccomodationData } from '../data/AccomodationData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaMapMarker } from 'react-icons/fa';
import MapComponent from '../components/MapComponent';

export interface AccomodationProps {
    title: string;
    address: string;
    description: string;
    img: string;
    coordinates?: number[];
}


const AccomodationItem: React.FC<AccomodationProps> = ({title, address, description, img}) => {
    
    return (
        <>
        <div className='slide-wrapper'>
            <div className='w-96 px-6 text-center'>
                <img src={img} className='w-96 h-56 object-cover rounded-md'/>
                <div className="text-lg foont-bold mt-2">{title}</div>
                <div className='text-xs py-2 flex justify-center items-align'> 
                    <FaMapMarker className='text-lg text-red-600 mr-2'/> 
                    <p className='pt-1'>{address}</p> 
                </div>
                <p className="text-sm text-justify">{description}</p>
            </div>
        </div>
        </>
    );
}


const Accomodation = () => {
    const [current, setCurrent] = useState(0);
    const length = AccomodationData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0  : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1: current - 1);
    }


    //const mapComponent = MapComponent({curr_accomodation: AccomodationData[current]});

    return (

        <>
        <div className="flex items-center justify-center text-xl font-semibold mb-8 text-center text-color-purple mt-12">
            Explore the charm of Scandinavian accommodations, the location is shown on the map to your right. <br/>
            The unique features and scenic beauty of these locations will captivate you.
        </div>
        <div className='flex justify-between h-screen items-center mt-12'>
            <section className="accomm w-1/2">
                
                <div className='slider relative'>
                    <FaArrowAltCircleLeft className='left-arrow fill-color-grey' onClick={prevSlide}/>
                    <FaArrowAltCircleRight className='right-arrow fill-color-grey' onClick={nextSlide}/>
                    {AccomodationData.map((slide, index)=> {
                        return (
                        <div 
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            <AccomodationItem title={slide.title} address={slide.address} description={slide.description} img={slide.img} coordinates={slide.coordinates}/>
                        </div>    
                        )  
                    })}
                </div>

         
            </section>

            <div className="map-container w-1/2 h-full ">
            <MapComponent curr_address={AccomodationData[current].address} curr_coordinates={AccomodationData[current].coordinates} />
            </div>

        </div>
        
        </>
    );

};

export default Accomodation;