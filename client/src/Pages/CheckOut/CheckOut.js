import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import './CheckOut.css'
import bkash from '../../Assets/brand/bkash.png'
import nagod from "../../Assets/brand/nagod.png";
import Ibbl from "../../Assets/brand/Ibbl.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../Hooks/UseAuth';





const CheckOut = () => {
   const { user } = useAuth();
   const course = useLoaderData();
   const { id, name, price, student } = course;


   // Payment notify
   const notifyToast = () => {
      toast.success(('Your payment is successful !'),
         {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
   };


   // console.log(course);
   return (
      <div>
         <div className='text-center my-5'>
            <BsShieldFillCheck className='check' />
            <p className='congrats'>Congratulation !</p>
         </div>
         <div className='mt-5' >
            <Row className='mx-3 mx-lg-0'>
               <Col lg={8} className=" px-lg-5 px-3">
                  <div>
                     <Link to='/profile' className='fw-bolder'>{user?.displayName}</Link> you are enroll <strong>{name}</strong> course. Already <strong>{student}</strong> joined here. You are the <strong>{student + 1}</strong>th student on our course.
                  </div>

                  <div className='mt-5 fw-semibold'>
                     <h1 className='fw-bold'> Student Information</h1>
                     <div className='student-info'>
                        <img src={user?.photoURL} className='sm-dp d-lg-none' alt="" />
                        <p>Name : {user?.displayName}</p>
                        <p>Email : {user?.email}</p>
                        <p>Student Id : {id}</p>
                        <h4 className='fw-bold mt-5'>You have to payment : <span className='text-warning'>${price}</span></h4>
                     </div>
                  </div>
               </Col>
               <Col lg={4} className="d-none d-lg-inline">
                  <img className=' cardImg' src={user?.photoURL ? user?.photoURL : <FaUserCircle />} alt='' />
               </Col>
            </Row>
         </div>

         <div className='payment-div mt-5 w-75 mx-auto'>
            <fieldset>
               <legend>Select Your Payment Methods</legend>
               <div className='p-3 d-lg-flex justify-content-between text-center align-items-center gap-5 gap-lg-2 mx-5'>
                  <div onClick={notifyToast}> <img src={Ibbl} alt="" /></div>
                  <div onClick={notifyToast}> <img src={bkash} alt="" /></div>
                  <div onClick={notifyToast}> <img src={nagod} alt="" /></div>
               </div>
               <ToastContainer />
            </fieldset>
         </div>
      </div>
   );
};

export default CheckOut;