import React from 'react';
import { Typewriter } from 'react-simple-typewriter'



const TypeWriterSec = () => {
   return (
      <div>
         <Typewriter
            words={["HTML & HTML5", "CSS & CSS3", "JavaScript", "React JS", "Node.Js", "Web Design"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={3000}
         />
      </div>
   );
};

export default TypeWriterSec;