import { useMemo } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const useAuth = () => {
   const auth = useContext(AuthContext);

   return useMemo(() => ({ ...auth }), [auth]);
};

export default useAuth;