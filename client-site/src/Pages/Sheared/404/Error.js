import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
   return (
      <div className=' mx-auto text-center'>

         <Card className=' mx-auto my-5' border="danger" style={{ width: '18rem', fontFamily: 'cursive' }}>
            <Card.Header className=' py-2 fw-bolder text-danger'><h1>404</h1></Card.Header>
            <Card.Body>
               <Card.Title className='d-flex align-items-center justify-content-center text-info fw-bolder '><span style={{ fontSize: '50px' }}>&#128542;</span> <span>OOPS !</span></Card.Title>
               <Card.Text>
                  We don't found your page. <Link to='/' className='py-1 px-3 w-50 float-end my-3 rounded d-block text-decoration-none bg-info text-white fw-bolder font-monospace fs-6'><small>Home <FaRegArrowAltCircleRight className=' fs-5' /></small></Link>
               </Card.Text>
            </Card.Body>
         </Card>

      </div>
   );
}

export default Error;