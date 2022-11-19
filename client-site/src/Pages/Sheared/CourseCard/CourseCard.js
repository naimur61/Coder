import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CourseCard.css'



const CourseCard = ({ course }) => {
   // console.log(course);

   const { id, img, name, instructor } = course;


   return (
      <div>
         <Card className='card mb-5 mx-auto'>
            <Card.Img variant="top" src={img} className='card-img' />
            <Card.Body>
               <Card.Title className='fw-semibold'>{name.length > 30 ? name.slice(0, 30) + '...' : name}</Card.Title>
               <Card.Text>
                  <span className='mb-0 text-muted fw-semibold font-monospace d-block'>{instructor}</span>
                  <span className='text-warning'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
               </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-end'><Link to={`/course/${id}`} className="border border-3 border-warning px-2 py-1 rounded text-decoration-none me-3 mb-3 fw-bolder details-btn">Details <BsArrowRightShort className='fw-bolder fs-4' /></Link></div>
         </Card>
      </div>
   );
};

export default CourseCard;