import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kid from '../../Assets/FAQ/kid_coding.jpeg'
import js from '../../Assets/FAQ/js.png'
import Accordion from 'react-bootstrap/Accordion';



const FAQ = () => {
   return (
      <Container className='mt-5'>
         <Row className=' my-5 gap-3 gap-md-0'>
            <Col md={6}>
               <h1>
                  Start coding now!
               </h1>
               <p>
                  DC Coding Association is a non-profit organization located in British Columbia that offers FREE high-quality coding and related courses for students. We have experienced volunteer instructors teaching our courses, which includes coding, math, science, and some special topics. Students will have the opportunity to have a free, valuable coding education.
               </p>
               <span>
                  <Link to='/courses'>
                     START LEARNING NOW!
                  </Link>
               </span>
            </Col>
            <Col md={6}>
               <img className='w-100' src={kid} alt="" />
            </Col>
         </Row>


         <Row className=' my-5 gap-3 gap-md-0'>
            <Col md={6}>
               <img className='w-100' src={js} alt="" />
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} >
               <h1>
                  Register for our courses!
               </h1>
               <p>
                  We offer a variety of free high-quality courses including coding, math, science, and some special topics. All of our courses are run by our passionate volunteer instructors. We have a variety of coding courses including HTML & CSS, Scratch and C++. In several courses, you will get a certificate upon successful completion of the final exam and assignments.
               </p>
               <Link to='/login' className='btn btn-outline-primary'>Register Now</Link>
            </Col>
         </Row>

         {/* FAQ  */}

         <Accordion className=' my-5'>
            <Accordion.Item eventKey="0">
               <Accordion.Header>Is there a difference between a coder and a programmer?
               </Accordion.Header>
               <Accordion.Body>
                  Although the main activity for both coders and programmers is coding, programmers typically have a more complex set of tasks they need to perform. Coders usually solely write application code in the programming language they are instructed to, whereas programmers also need to create software functions, develop automation logic and solve various problems.
                  <div className='mt-3'>
                     <span className=' text-muted'>
                        Was this answer helpful?
                     </span>
                     <Link className=' text-decoration-none fw-bold fs-5'> Yes </Link> | <Link className=' text-decoration-none fw-bold fs-5'> No</Link>
                  </div>
               </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
               <Accordion.Header>What skills do programmers need?
               </Accordion.Header>
               <Accordion.Body>
                  <ul>
                     The most important skills for a programmer are:

                     <li>Mathematical skills: A basic understanding of both arithmetic and algebra is essential for programming.</li>
                     <li>Problem-solving: A significant amount of a programmer's time is spent on solving various issues with the software.
                     </li>
                     <li>Communication: Most software development jobs are team efforts, so programmers need to be able to successfully communicate with other team members.
                     </li>
                     <li>Computer skills: Most programmers have computer knowledge beyond the programming languages they routinely use.
                     </li>
                  </ul>

                  <div className='mt-3'>
                     <span className=' text-muted'>
                        Was this answer helpful?
                     </span>
                     <Link className=' text-decoration-none fw-bold fs-5'> Yes </Link> | <Link className=' text-decoration-none fw-bold fs-5'> No</Link>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
               <Accordion.Header>What is the job outlook for programmers?
               </Accordion.Header>
               <Accordion.Body>
                  According to the Bureau of Labor Statistics, the job outlook for programmers is likely to decline by 7% from 2018 to 2028. Since computer programming can be performed from anywhere in the world, many companies hire programmers in places where compensation is lower, which may limit job growth for programmers in the United States.



                  <div className='mt-3'>
                     <span className=' text-muted'>
                        Was this answer helpful?
                     </span>
                     <Link className=' text-decoration-none fw-bold fs-5'> Yes </Link> | <Link className=' text-decoration-none fw-bold fs-5'> No</Link>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
               <Accordion.Header>What are the most popular programming sub-specialties?
               </Accordion.Header>
               <Accordion.Body>
                  <ul>
                     The most widely-used programming types are:

                     <li>Web developers: They write the code for a website's looks and functionality.
                     </li>
                     <li>Software programmers: They are responsible for creating and enhancing software.
                     </li>
                     <li>Data scientists: They typically work in academia and analyze large amounts of data.
                     </li>
                     <li>Mobile app developers: They are responsible for creating mobile software.
                     </li>
                  </ul>

                  <div className='mt-3'>
                     <span className=' text-muted'>
                        Was this answer helpful?
                     </span>
                     <Link className=' text-decoration-none fw-bold fs-5'> Yes </Link> | <Link className=' text-decoration-none fw-bold fs-5'> No</Link>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
               <Accordion.Header>Why do programmers charge by the hour?
               </Accordion.Header>
               <Accordion.Body>

                  Programmers usually charge by the hour because a programming job implies many variables, and therefore it is very difficult to accurately estimate the time needed to write and review all the code.


                  <div className='mt-3'>
                     <span className=' text-muted'>
                        Was this answer helpful?
                     </span>
                     <Link className=' text-decoration-none fw-bold fs-5'> Yes </Link> | <Link className=' text-decoration-none fw-bold fs-5'> No</Link>
                  </div>
               </Accordion.Body>
            </Accordion.Item>


         </Accordion>


      </Container>
   );
};

export default FAQ;