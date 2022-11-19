import Container from 'react-bootstrap/Container';
import "./Home.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import TypeWriterSec from "../Sheared/TypeWriter/TyperWriter";
import useAuth from "../../Hooks/UseAuth";




const Home = () => {
   const { them } = useAuth();


   return (
      <main className={them ? "home-bg" : "home-dark-bg"}>
         <Container className=" text-white pt-5 mt-5 ">

            <div>
               <h1 className="home-header my-5 px-lg-3 text-lg-center">Free online courses to achieve your goals</h1>
               <h4 className="d-flex align-items-center gap-3 font mb-5 px-lg-5 m">
                  <p className="mb-0 text-danger">Learn</p> <TypeWriterSec />

               </h4>
               <div className="w-75 mx-auto ">
                  <p className=" fw-bold fs-4 font-monospace my-5 px-md-5">Looking to add new skills? Is there a hobby you’ve wanted to try? We’re Udemy, a leading destination for learning and teaching online. <br /><br />
                     If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).
                  </p>
               </div>


               <div className="mx-md-auto text-lg-center"><Link to='/courses' className=" text-white fw-bolder fs-4 text-decoration-none px-4 py-2 rounded hover-btn my-5" >Get Start <BsArrowRightCircleFill /></Link></div>
            </div>
         </Container>
      </main >
   );
};

export default Home;
