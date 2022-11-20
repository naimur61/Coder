import React from 'react';
import {
   MDBFooter,
   MDBContainer,
   MDBInput,
   MDBCol,
   MDBRow,
   MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaHtml5, FaJsSquare, FaReact, FaNodeJs, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../Hooks/UseAuth';




const Footer = () => {
   const { them } = useAuth();
   return (
      <footer>


         <MDBFooter className={`text-center ${them ? 'footer-light' : 'footer-dark'}`}>
            <MDBContainer className='p-4'>
               <section className='mb-4'>
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <FaFacebook />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <FaTwitter />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     < FcGoogle />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <FaInstagramSquare />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <FaLinkedin />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <FaGithubSquare />
                  </MDBBtn>
               </section>

               <section className=''>
                  <form action=''>
                     <MDBRow className='d-flex justify-content-center'>
                        <MDBCol size="auto">
                           <p className='pt-2'>
                              <strong>Sign up for our newsletter</strong>
                           </p>
                        </MDBCol>

                        <MDBCol md='5' start='12'>
                           <MDBInput contrast type='email' label='Email address' className='mb-4' />
                        </MDBCol>

                        <MDBCol size="auto">
                           <MDBBtn outline color='light' className='mb-4'>
                              <Link to='/register' className='footer-Subscribe'>Subscribe</Link>
                           </MDBBtn>
                        </MDBCol>
                     </MDBRow>
                  </form>
               </section>

               <section className='mb-4'>
                  <p className='font'>
                     You Should Learn Basic Coding Skills .
                  </p>
               </section>

               <section className=''>
                  <MDBRow>
                     <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Html5</h5>

                        <ul className='list-unstyled mb-0'>
                           <li>
                              <Link to='/category/1'><FaHtml5 /></Link>
                           </li>
                        </ul>
                     </MDBCol>
                     <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Node.Js</h5>

                        <ul className='list-unstyled mb-0'>
                           <li>
                              <Link to='/category/5'><FaNodeJs /></Link>
                           </li>
                        </ul>
                     </MDBCol>

                     <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>JavaScript</h5>

                        <ul className='list-unstyled mb-0'>
                           <li>
                              <Link to='/category/3'><FaJsSquare /></Link>
                           </li>
                        </ul>
                     </MDBCol>

                     <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>React JS</h5>

                        <ul className='list-unstyled mb-0'>
                           <li>
                              <Link to='/category/4'><FaReact /></Link>
                           </li>
                        </ul>
                     </MDBCol>
                  </MDBRow>
               </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
               © 2020 Copyright :
               <Link className='text-white' target='_blank' to='/'>
                  Codder.com
               </Link>
            </div>
         </MDBFooter>
      </footer>
   );
};

export default Footer;