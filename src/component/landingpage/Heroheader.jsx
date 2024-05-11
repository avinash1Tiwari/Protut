import React from 'react';

const Heroheader = () => {
  return (
    <div className='h-screen  w-full '>
       <section className="pt-12 h-[35rem] bg-gray-50 sm:pt-16 flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="px-4 max-w-2xl text-center lg:w-1/2">
              <h1 className="text-lg text-gray-600 font-inter">For Aspiring Developers, By Developers, To Developers</h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Lorem ipsum , Lorem Ipsumum
                  <span className="relative inline-flex sm:inline">
                      <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                      <span className="relative"> & Lorem Ipsumum</span>
                  </span>
              </p>

              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                  
              <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto  rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                      "
                      role="button"
                  >
                      Lorem as ipsum
                  </a>

                  <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                      role="button"
                  >
                      lorem as ipsum
                  </a>
              </div>

              <p className="mt-8 text-base text-gray-500 font-inter">Let's start the journey of real knowledge</p>
          </div>
        </div>
    </section>
    </div>
  );
};

export default Heroheader;
