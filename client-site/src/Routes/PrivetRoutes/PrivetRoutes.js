import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const PrivetRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();


   if (loading) {
      return <Spinner animation="border" variant="info" />;
   }

   if (!user?.uid) {
      return <Navigate to='/logIn' state={{ from: location }} replace></Navigate>
   }

   return (
      <div>
         {children}
      </div>
   );
};

export default PrivetRoutes;