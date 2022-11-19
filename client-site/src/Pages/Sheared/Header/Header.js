import { FaGraduationCap } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import "./Header.css";
import moon from "../../../Assets/them-icon/moon.png"
import sun from "../../../Assets/them-icon/sun.png"
import useAuth from "../../../Hooks/UseAuth";






const Header = () => {
   const { user, logOut, them, setThem } = useAuth();
   const location = useLocation();

   const handlerLogout = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error))
   }



   return (
      <div className=" text-white mb-5">
         <Navbar expand="lg" variant="dark" className={`py-3 ${location.pathname === '/' || location.pathname === '/blog' ? undefined : 'bg-info'}`}>

            <Container>
               <Link to="/" className="d-flex justify-content-between align-items-center gap-2 text-decoration-none text-white header-hover">
                  <FaGraduationCap className="site-logo" /><p className="site-name" >Codder</p>
               </Link>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav" >

                  <Nav className="my-2 my-lg-0 header-style" >

                     {/* them toggle button  */}
                     <div className={`d-flex justify-content-between px-1 pb-1 gap-1 them-btn ${!them ? 'light' : "dark"}`}>
                        <div className={`${!them ? 'show' : 'hide'}`}>
                           <img onClick={() => setThem(!them)} src={sun} alt="" className="them-logo bg-dark" />
                        </div>
                        <div className={`${!them ? 'hide' : 'show'}`}>
                           <img onClick={() => setThem(!them)} src={moon} alt="" className="them-logo bg-light" />
                        </div>
                     </div>


                     <NavLink to="/courses" className="li">
                        Courses
                     </NavLink>
                     <NavLink to="/blog" className="li">
                        Blog
                     </NavLink>
                     <NavLink to="/faq" className="li">
                        FAQ
                     </NavLink>

                     <>{
                        user?.uid ?
                           <>
                              <NavLink to="/profile" className='pt-1' data-tip={`${user?.displayName ? user?.displayName : 'Go for login..!'}`}>
                                 < img className='rounded-circle ' style={{ height: '30px', width: '30px' }} src={user?.photoURL ? user?.photoURL : <FaUserAlt className=' fw-bolder fs-5' />} alt="" /></NavLink>
                              <ReactTooltip place="top" type="success" effect="float" />
                              <NavLink to="/login" onClick={handlerLogout} className="li">
                                 Logout
                              </NavLink>
                           </>
                           :
                           <NavLink to="/login" className="li">
                              Login
                           </NavLink>
                     }</>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div >
   );
};

export default Header;

