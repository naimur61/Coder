import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../../../Assets/Feature/a1.png'
import a2 from '../../../Assets/Feature/a2.jpg'
import a3 from '../../../Assets/Feature/a3.jpg'
import a4 from '../../../Assets/Feature/a4.jpg'
import a5 from '../../../Assets/Feature/a5.jpg'
import a6 from '../../../Assets/Feature/a6.png'
import a7 from '../../../Assets/Feature/a7.png'
import a8 from '../../../Assets/Feature/a8.jpg'
import a9 from '../../../Assets/Feature/a9.jpg'


const FeatureCarousel = () => {
   return (
      <div className='my-3'>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a1}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a2}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a3}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a4}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a5}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a6}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a7}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a8}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={a9}
                  alt="First slide"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>


         </Carousel>
      </div>
   );
};

export default FeatureCarousel;