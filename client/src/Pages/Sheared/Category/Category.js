import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import RightSideNav from '../RightSideNav/RightSideNav';





const Category = () => {
   const courses = useLoaderData();

   return (
      <div className='p-xl-5'>
         <Container>
            <Row className='gap-5 gap-xl-0'>
               <Col xl={8} className='mt-5 mt-lg-0'>
                  <Row xs={1} md={2} className='mx-auto'>
                     {
                        courses.map(course => <CourseCard
                           key={course.id}
                           course={course}
                        />)
                     }
                  </Row>
               </Col>
               <Col xs={{ order: 'first' }} xl={{ order: 'last' }} >
                  <div className='w-75 mx-auto ms-lg-auto'>
                     <RightSideNav />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Category;