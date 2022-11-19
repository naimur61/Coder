import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import FeatureCarousel from '../FeatureCarousel/FeatureCarousel';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './RightSideNav.module.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const RightSideNav = () => {
   const { user, setUser, popUpLogin } = useContext(AuthContext);
   const [categories, setCatagories] = useState([]);
   const { categoryLink, active } = styles;
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();




   // Load data 
   useEffect(() => {
      fetch('https://server-site-two.vercel.app/course-categories')
         .then(res => res.json())
         .then(data => setCatagories(data))
   }, [])




   // Google Login 
   const handlerGoogle = () => {
      handlerPopup(googleProvider)
   };



   // Github Login 
   const handlerGithub = () => {
      handlerPopup(githubProvider)
   }

   const handlerPopup = (provider) => {
      popUpLogin(provider)
         .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
            // console.log(currentUser);
            // navigate('/')
         })
         .catch(e => notifyToast(e.message))
   }


   const notifyToast = (eTxt) => {
      toast.error(eTxt, {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };




   return (
      <div>
         <div className='mb-5 text-center '>
            <ButtonGroup vertical>
               <Button onClick={handlerGoogle} className=' mb-3' variant="outline-primary" disabled={user}> <FcGoogle /> Sign In with Google</Button>

               <Button onClick={handlerGithub} className=' mb-3' variant="outline-dark" disabled={user}> <FaGithub /> Sign In with Github </Button>
            </ButtonGroup>
         </div>

         {/* Category Details  */}
         <div className='mt-5 mx-auto text-center'>
            {
               categories.map(category => <NavLink to={`/category/${category.id}`}
                  className={`${categoryLink} my-3 w-75 text-center mx-auto py-1 ${({ isActive }) => isActive ? active : undefined}`} key={category.id}>
                  {category.name}
               </NavLink>)
            }
         </div>

         <div className='mt-5'>
            <FeatureCarousel />
         </div>
         <ToastContainer />
      </div>
   );
};

export default RightSideNav;