import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import premium from '../../../Assets/brand/icons/premimum.png'
import { AiFillStar } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import pdfLogo from "../../../Assets/brand/icons/pdf-removebg-preview.png";
import './CourseDetails.css'
import Pdf from "react-to-pdf";







const CourseDetails = () => {
   const course = useLoaderData();
   const { id, img, name, instructor, course_title, price, student, Language, Last_updated, rating, course_overview } = course;

   const ref = React.createRef();

   return (
      <div className='courseD-bg' ref={ref}>
         <Container>
            <Row className='gap-5 gap-xl-0'>
               <Col xl={7} className='mt-5 mt-lg-0'>

                  <h1 className='details-header-fs'>{name}</h1>
                  <h4 className='mb-4'>{course_title}</h4>
                  <div className='d-flex gap-3 align-items-center small-font'>
                     <h6>
                        <div className='text-warning'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />  ({rating}) </div>
                     </h6>
                     <h6 className='fw-bold'><span className='text-success'>{student}</span> Student</h6>
                  </div>
                  <p className='small-font mb-0'>Created by <Link>{instructor}</Link></p>
                  <p className='small-font mb-0'>Last updated {Last_updated}</p>
                  <div className='small-font d-flex gap-2'>
                     <p><GrLanguage /></p>
                     <p className='mb-0'> {Language}</p>
                  </div>
                  <div className='details-header-fs d-flex justify-content-between align-items-center me-3'><p className='mb-0'>${price}</p>
                     <div className='pdf' >
                        <Pdf targetRef={ref} filename="code-example.pdf">
                           {({ toPdf }) => <img onClick={toPdf} src={pdfLogo} alt="pdf download button" />}
                        </Pdf>

                     </div>
                  </div>


                  <div className='fw-bold mt-5 me-5'>
                     {course_overview}
                  </div>
               </Col>

               <Col xs={{ order: 'first' }} xl={{ order: 'last' }} >

                  <Card className='mx-auto details-card w-100 border-0'>
                     <Card.Img className=' cardImg' variant="top" src={img} />


                     <div className=' d-flex align-items-center mt-3 justify-content-end premium-div'><p className='premium-font mb-0 '>Get Premium</p>
                        <div>
                           <Link to={`/checkOut/${id}`}>
                              <img className='premium-logo' src={premium} alt="" />
                           </Link>
                        </div>
                     </div>
                  </Card>

               </Col>
            </Row>
         </Container>
      </div >
   );
};



export default CourseDetails; 
