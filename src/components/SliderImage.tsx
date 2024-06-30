import React, { useEffect, useRef , useState } from 'react';

const SliderImage = () => {
    const fragments = [];
    const [row, setRow] = useState(15);
    const [col, setCol] = useState(20);
    const images = ['panorama1.jpg', 'panorama2.jpg', 'panorama3.jpg', 'panorama4.jpg', 'panorama5.jpg', 'panorama6.jpg']; 
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const animation_duration = 3000;

    const buildFragment = (row: number, col: number) => {
        const is_odd = (row + col) % 2 === 0;
        const rotate_x = is_odd ? '-90deg' : '0';
        const rotate_y = is_odd ? '0' : '-90deg';

        const frag_style = {"--x": `${col}`, 
                            "--y": `${row}`, 
                            "--delay": `${(row + col) * 70}ms`, 
                            "--duration": `${animation_duration}ms`,
                            "--rotateX": `rotateX(${rotate_x})`,
                            "--rotateY": `rotateY(${rotate_y})`} as React.CSSProperties

        
        return <div 
                    className="fragment" style={frag_style}>
                </div>;

    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            fragments.push(buildFragment(r, c));
        }
    }

    const img_addr = `/img/panorama/${images[currentImgIdx]}`;
    const  img_box_style = {"--row": row, 
                            "--col": col,
                            "--img-url": `url(${process.env.PUBLIC_URL + img_addr})`} as React.CSSProperties

    setTimeout(() => {
        setCurrentImgIdx((currentImgIdx + 1) % images.length);
    }, animation_duration + 1000);

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className="img-box object-cover" 
                     style={img_box_style}
                     key={currentImgIdx}> {/* unique key for each image rendering so that React treats it as a new element, triggering animation each time*/}
                        {fragments}
                </div>
            </div>
        </>
    )
}

export default SliderImage;