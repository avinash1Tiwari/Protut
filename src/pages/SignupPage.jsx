import React from 'react';
import Navbar from '../component/landingpage/Navbar';
import Signup from '../component/authentication/Signup';
import Footer from '../component/landingpage/Footer';
import DemoNav from '../component/landingpage/DemoNav';


const SignupPage = () => {
  return (
    <>
    
   <div className='m'>
   <DemoNav/>
    </div>
   <div className="-mt-10">
     <Signup/>
   </div>
   <hr />
   <div className="">

    <Footer/>
   </div>
    </>
  );
};

export default SignupPage;
