import React, { useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io'; 
import { IoIosArrowForward } from 'react-icons/io'; 

import '../assets/styles/components/Carousel.scss';

const Carousel = (images) => {
    const img1 =  images[0]
    const img2 = images[1]
    const img3 = 'https://images.unsplash.com/photo-1600717707657-53775bc58050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    const img4 = 'https://images.unsplash.com/photo-1600376744018-28a6a2ea1d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    const img5 = 'https://images.unsplash.com/photo-1554539234-6ec2b92df375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    const img6 = 'https://images.unsplash.com/photo-1600447766334-36a93f35a21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    const img7 = 'https://images.unsplash.com/photo-1600376763902-91b03e70eb85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    const img8 = 'https://images.unsplash.com/photo-1600612294445-5e1153e3e4a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    
    const imgStyles = {
        // width: 70 + '%',
        width: 100 + '%',
        heigth: 'auto',
    }
    
    let carouselArr = [
                       <img src={img1} style={imgStyles}/>,
                       <img src={img2} style={imgStyles}/>,
                       <img src={img3} style={imgStyles}/>,
                       <img src={img4} style={imgStyles}/>,
                       <img src={img5} style={imgStyles}/>,
                       <img src={img6} style={imgStyles}/>,
                       <img src={img7} style={imgStyles}/>,
                       <img src={img8} style={imgStyles}/> 
                      ];

    const [x, setX] = useState(0);

    const goLeft = () => {
        console.log(x)
        // x !== 0 ? setX(x + 100) : undefined;

        x !== 0 ? setX(x + 100) : setX(-100 * (carouselArr.length - 1));

    };
    const goRigth = () => {
        console.log(x)
        // x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
        x !== -100 * (carouselArr.length - 1) ? setX(x - 100) : setX(0);



        // x != -400 ? setX(x - 100) : setX(0);
    };

    return(
        <div className='Carousel'>
            {
                carouselArr.map((item, index) => {
                    return(
                        <div key={index} className='Carousel__photo' style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }
            <button id='goLeft' onClick={goLeft}><IoIosArrowBack size={20} /></button>
            <button id='goRigth' onClick={goRigth}><IoIosArrowForward size={20} /></button>
        </div>
    );
};

export default Carousel;
