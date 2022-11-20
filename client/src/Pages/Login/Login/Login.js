import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import fb from '../../../Assets/brand/icons/fb.png'
import google from '../../../Assets/brand/icons/google.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';






const Login = () => {
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();
   const { emailLogin, user, popUpLogin, setUser, forgotPassword } = useAuth();
   const [userEmail, setUserEmail] = useState()
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   // emailLogin
   const handlerLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      emailLogin(email, password)
         .then(result => {
            const user = result.user;
            // console.log(user);
            form.reset()
            navigate(from, { replace: true })
         })
         .catch(e => {
            const eTxt = e.message;
            // console.log(eTxt);
            notifyToast(eTxt);
         })
   };

   // Google Login 
   const handlerGoogle = () => {
      handlerPopup(googleProvider)
   };


   // Github Login 
   const handlerGithub = () => {
      handlerPopup(githubProvider)
   }

   // Popup 
   const handlerPopup = (provider) => {
      popUpLogin(provider)
         .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
            // console.log(currentUser);
            navigate(from, { replace: true })
         })
         .catch(e => notifyToast(e.message))
   }


   // email for reset 
   const bluerEmail = (event) => {
      const email = event.target.value;
      setUserEmail(email);
   }


   // reset password
   const handlerForgetPass = () => {
      // console.log(userEmail);
      if (!userEmail) {
         return alert('Enter your email !')
      } else {
         verifyToast();
         forgotPassword(userEmail);
      }

   }



   // Success testify
   const verifyToast = () => {
      toast.success(("Recovery code is send. Check Your mail !"), {
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

   // Error Text
   const notifyToast = (eTxt) => {
      toast.error(eTxt,
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



   return (
      <div className='w-75 mx-auto'>

         <div className='border border-2 p-4 rounded'>

            <h1 className=' font-monospace fw-bolder text-info text-center mb-3 '>{user || user?.uid ? "You are already logged" : "Login"}</h1>
            <Form onSubmit={handlerLogin} className=" my-3 p-2">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onBlur={bluerEmail} name='email' required type="email" placeholder="Enter email" />

               </Form.Group>

               <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password' required type="password" placeholder="Password" />
               </Form.Group>

               <div className='d-flex justify-content-between align-items-center fw-bold'>

                  <Form.Group className="my-3 font-monospace" controlId="formBasicCheckbox">
                     <input type="checkbox" id="formBasicCheckbox" />
                     <label htmlFor="formBasicCheckbox" className=' ms-2'> Remember Me</label>
                  </Form.Group>

                  <Link onClick={handlerForgetPass} className='text-info text-decoration-none'>Forgot Password</Link>

               </div>

               <Button className=' w-100 my-3 w-25 mx-auto text-white fw-bold' variant="info" type="submit" >
                  Login
               </Button>
               <ToastContainer />
               <p>Don't have an account ?
                  <Link to='/register' className='fw-bold font-monospace text-info'> Create an account ?</Link></p>
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

            <Button className='btn w-100 border border-2 mb-3 rounded-5 bg-light text-dark'>
               <div onClick={handlerGithub} className='px-3 signin-with'>
                  <img src={fb} alt="" />
                  <p className='pt-3 fw-bold mx-auto'>Continue with Github</p>
               </div>
            </Button>
         </div>
      </div>
   )
};

export default Login;

