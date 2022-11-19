import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';








const UserProfile = () => {

   const { user, userProfileSet } = useAuth();
   const [checkbox, setCheckbox] = useState(false);
   const [name, setName] = useState(user?.displayName);
   const photoURLRef = useRef(user?.photoURL)



   const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(photoURLRef.current.value, 'photoURLRef');
      // console.log('name', name);
      const photoURL = photoURLRef.current.value;
      const form = event.target;
      form.reset();


      handlerProfile(name, photoURL);
   }

   const handlerProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      userProfileSet(profile)
         .then(() => { })
         .catch((e) => console.log(e))
   }

   const handlerName = event => {
      setName(event.target.value)
   }


   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name='email' required type="email" defaultValue={user?.email} readOnly />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
               <Form.Label>Name</Form.Label>
               <Form.Control defaultValue={name} onChange={handlerName} name='name' type="text" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
               <Form.Label>Image</Form.Label>
               <Form.Control ref={photoURLRef} name='photoURL' type="text" defaultValue={user?.photoURL} />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="my-3 font-monospace fw-semibold" controlId="formBasicCheckbox">
               <input onClick={() => setCheckbox(!checkbox)} type="checkbox" id="formBasicCheckbox" />
               <label htmlFor="formBasicCheckbox" className=' ms-2'>Accept <Link>Trams & Condition</Link> .</label>
            </Form.Group>

            <Button className=' w-100 mt-3 w-25 mx-auto' variant="primary" type="submit" disabled={!checkbox}>
               Save
            </Button>
         </Form>
      </div >
   );
};


export default UserProfile;