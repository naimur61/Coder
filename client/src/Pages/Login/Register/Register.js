import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import fb from '../../../Assets/brand/icons/fb.png'
import google from '../../../Assets/brand/icons/google.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useAuth from '../../../Hooks/UseAuth';




const Register = () => {
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();
   const [checkbox, setCheckbox] = useState(false);
   const { user, setUser, createUser, verifyEmail, userProfileSet, popUpLogin } = useAuth();

   const navigate = useNavigate();


   // Register handle 
   const handlerRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);

      createUser(email, password)
         .then(result => {
            const user = result.user;
            verifyToast('Verify your email address!');
            form.reset();
            // console.log(user);

            handlerProfile(name, photoURL)
            handlerVerify();
            navigate('/');
         })
         .catch(e => notifyToast(e.message))
   }

   //Email Verification 
   const handlerVerify = () => {
      verifyEmail()
         .then(() => { })
         .catch((e) => console.log(e))
   }


   // Profile updater 
   const handlerProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      userProfileSet(profile)
         .then(() => { })
         .catch((e) => console.log(e))
   }


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
            navigate('/')
         })
         .catch(e => notifyToast(e.message))
   }





   const verifyToast = (a) => {
      toast.success((a), {
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
      <div className='w-75 mx-auto'>

         <div className='border border-2 rounded p-5'>
            <h1 className=' font-monospace fw-bolder text-info text-center mb-3 '> Register </h1>
            <Form onSubmit={handlerRegister}>
               <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Image</Form.Label>
                  <Form.Control name='photoURL' type="text" />
               </Form.Group>
               <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name='name' type="text" placeholder="Name" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name='email' required type="email" placeholder="Enter email" />

               </Form.Group>

               <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password' required type="password" placeholder="Password" />
               </Form.Group>


               <Form.Group className="mt-3 font-monospace fw-semibold" controlId="formBasicCheckbox">
                  <input onClick={() => setCheckbox(!checkbox)} type="checkbox" id="formBasicCheckbox" />
                  <label htmlFor="formBasicCheckbox" className=' ms-2'>Accept <Link>Trams & Condition</Link> .</label>
               </Form.Group>

               <Button className='w-100 my-3' variant="primary" type="submit" disabled={!checkbox}>
                  Register
               </Button>
               <ToastContainer />

               <p className='text-center font-monospace fw-semibold mt-3'>
                  Already have an account ?
                  <Link to='/login'>
                     <small className='text-info'> Login </small>
                  </Link>
               </p>

            </Form>
         </div>

         <div className='login-hr my-5 w-75 mx-auto font-monospace'>
            <h6><span>or</span></h6>
         </div>


         <div className='signin-logo w-75 mx-auto m-5'>
            <Button className='btn w-100 border border-2 mb-3 rounded-5 bg-light text-dark' disabled={user}>
               <div onClick={handlerGoogle} className='px-3 signin-with'>
                  <img src={google} alt="" />
                  <p className='pt-3 fw-bold mx-auto'>Continue with Google</p>
               </div>
            </Button>

            <Button className='btn w-100 border border-2 mb-3 rounded-5 bg-light text-dark' disabled={user}>
               <div onClick={handlerGithub} className='px-3 signin-with'>
                  <img src={fb} alt="" />
                  <p className='pt-3 fw-bold mx-auto'>Continue with Github</p>
               </div>
            </Button>
         </div>

      </div>
   );
};

export default Register;