import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../Pages/Sheared/Header/Header';
import Footer from '../Pages/Sheared/Footer/Footer';




const Main = () => {
   return (
      <div>
         <Header />

         <Container>
            <Outlet></Outlet>
         </Container>

         <Footer />
      </div>
   );
};

export default Main;