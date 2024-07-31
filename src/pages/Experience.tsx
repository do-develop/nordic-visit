import React, { } from 'react';
import Whattobuy from '../img/experience/whattobuy.jpg';
import Whattodo from '../img/experience/whattodo.jpg';
import Whattoeat from '../img/experience/whattoeat.jpg';

interface CardProps {
    title: string;
    content: string;
    img: string;
}

const Experience = () => {

    const Card: React.FC<CardProps> = ({title, content, img}) => {
        return (
            <div className='mx-5 mt-16 shadow-md rounded-lg border-2 border-color-grey '>
                <div className='p-5'>
                    <img src={img} alt={title} className='rounded-md w-full h-80 object-cover'/>
                </div>
                <div className='px-5 pb-3'>
                    <h1 className='text-2xl text-center text-color-purple pb-2'>{title}</h1>
                    <hr className='w-full bg-color-skyblue h-0.5' />
                    <p className='pt-3'>{content}</p>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className='h-full'>
            <div className='flex h-full text-center justify-center mb-8'>
                <div className='container mx-auto text-center text-wave'>Life is more fun with various experiences!</div>
                <div className='container mx-auto text-center text-wave'>Life is more fun with various experiences!</div>
            </div>
            <div className='container mx-auto justify-center flex'>
                <div className='grid grid-cols-3 pb-40 place-items-center w-5/6'>
                    <Card title="What to do" content="Glide across the snowy trails and make some frosty memories with cross-country skiing!" img={Whattodo}/>
                    <Card title="What to eat" content="Sink your teeth into a juicy burger and wash it down with a creamy milkshake - pure bliss!" img={Whattoeat}/>
                    <Card title="What to buy" content="Feeling fancy? Treat yourself to some stylish new threads and strut your stuff!" img={Whattobuy}/>
                </div>
            </div>
            
        </div>
        </>
    );

};

export default Experience;