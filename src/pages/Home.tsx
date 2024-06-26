import React, { useEffect, useRef } from 'react';
import Panorama1 from '../img/panorama/panorama1.jpg';
import Panorama2 from '../img/panorama/panorama2.jpg';
import Panorama3 from '../img/panorama/panorama3.jpg';
import Panorama4 from '../img/panorama/panorama4.jpg';
import Panorama5 from '../img/panorama/panorama5.jpg';
import Panorama6 from '../img/panorama/panorama6.jpg';

const Home = () => {

    const panorama_pics = [Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6].map((pic, idx) => 
        (
            <div className='slider-pic'>
                <img src={pic} alt=''/>
            </div>
        )
    );

    const imgBoxRef = useRef<HTMLDivElement>(null);
    
    class GridAnimation {
        element: HTMLElement;
        row: number;
        col: number;

        constructor(el: HTMLElement, row = 15, col = 15) {
            this.element = el;
            this.row = row;
            this.col = col;

            this.element.style.setProperty('--row', this.row.toString());
            this.element.style.setProperty('--col', this.col.toString());
        }

        randomIntBetween(min: number, max: number): number{
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        animate() {}
    }

    useEffect(() => {
        const imgBox = imgBoxRef.current;
        if (imgBox) {
            new GridAnimation(imgBox).animate();
        }
    }, []);

    return (
        <div className="banner">
            {/* Image Slide */}
            <div className='flex item-center justify-center'>
                <div className="img-box" ref={imgBoxRef}></div>
            </div>
            {/* <div className='slider-frame'>
                {panorama_pics}
            </div> */}
    
            {/* Introduction of the travel agency */}
            <section>
    
            </section>
    
    
            {/* Footer */}
            <footer>
    
            </footer>
        </div>
    );

};

export default Home;
