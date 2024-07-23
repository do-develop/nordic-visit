import React, { } from 'react';
import Destination1 from '../img/destination/norway.jpg';
import Destination2 from '../img/destination/sweden.jpg';
import Destination3 from '../img/destination/finland.jpg';

interface CardProps {
    title: string;
    address: string;
    content: string;
    img: string;
}


const Destination = () => {

    const Card: React.FC<CardProps> = ({title, address, content, img}) => {
        return (
            <div className='border-r border-gray-300 mx-3 lg:pl-20 mt-16'>
                <div>
                    <img src={img} alt={title} className='w-full h-56 object-cover'/>
                </div>
                <div>
                    <a href={address}><h1 className='text-2xl text-color-indigo hover:text-color-blue'>{title}</h1></a>
                    <p>{content}</p>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className='h-full mt-12'>

            <div className='container mx-auto lg:px-20'>
                <div className='grid grid-cols-3 h-full pb-40'>
                    <Card title="Visit Norway" address="https://www.visitnorway.com/" content="Norway is awesome for its breathtaking fjords, high quality of life, and rich cultural heritage." img={Destination1}/>
                    <Card title="Visit Sweden" address="https://visitsweden.com/" content="Sweden is awesome for its stunning natural landscapes, innovative design, and progressive social policies." img={Destination2}/>
                    <Card title="Visit Finland" address="https://www.visitfinland.com/en/" content="Finland is awesome for its pristine wilderness, world-class education system, and vibrant sauna culture." img={Destination3}/>
                </div>
            </div>
            
        </div>

        </>
    );

};

export default Destination;