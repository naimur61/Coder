import React from 'react';
import './Blog.css'









const Blog = () => {


   return (
      <div className='blog-bg text-white mt-5'>
         <div className='mt-5 px-5'>

            <h2 className='question'>What is CORS?</h2>
            <br />
            <p className='answer'>
               CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
            </p>
            <br /><br />

            <h2 className='question'>Why are you using firebase ?</h2>
            <br />
            <p className='answer'>
               Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Trusted by +200,000 Devs. Build Fast For Any Device. 15+ Products & Solutions.</p>
            <br /><br />

            <h2 className='question'>What other options do you have to implement authentication?</h2>
            <br />
            <p className='answer'>
               Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <br /><br />

            <h2 className='question'>How does the private route work?</h2>
            <br />
            <p className='answer'>
               The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
            <br /><br />
            <h2 className='question'>What is Node?</h2>
            <br />
            <p className='answer'>
               Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser
            </p>
            <br /><br />

            <h2 className='question'>How does Node work?</h2>
            <br />
            <p className='answer'>
               Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
            </p>

         </div>
      </div>
   );
};

export default Blog;