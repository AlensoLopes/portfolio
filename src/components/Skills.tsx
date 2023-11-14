import * as React from 'react';

export const Skills = () => {
  return (
    // <section className="flex flex-col w-full
    //    px-16 flex-wrap">
    //   {/* <div className='flex justify-start'>
    //     <div className='flex-col
    //       w-60 h-44 rounded-2xl bg-white p-2'>
    //       <h1 className='text-background-100 text-2xl w-60 h-10 bg-green-500'>
    //         Languages
    //       </h1>
    //       <div className='flex flex-col px-8 py-4 gap-16'>
    //         <ul className='text-background-100'>
    //           <li>Java</li>
    //           <li>TypeScript</li>
    //           <li>C</li>
    //           <li>PHP</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div> */}
    //   {/* <div className='flex justify-end'>
    //     <div className='flex-col
    //       w-60 h-44 max-w-md rounded-2xl bg-white p-2
    //       flex justify-end'>
    //       <h1 className='text-background-100 text-2xl'>Framework</h1>
    //       <div className='flex flex-col px-8 py-4 gap-16'>
    //         <ul className='text-background-100'>
    //           <li>React</li>
    //           <li>Express</li>
    //           <li>Tailwindcss</li>
    //           <li>NodeJS</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='flex justify-start'>
    //     <div className='flex-col
    //       w-60 h-44 max-w-md rounded-2xl bg-white p-2
    //       flex'>
    //       <h1 className='text-background-100 text-2xl'>
    //         Tools
    //       </h1>
    //       <div className='flex justify-start py-4 px-8 gap-16'>
    //         <ul className='text-background-100'>
    //           <li>Git</li>
    //           <li>Postman</li>
    //           <li>Linux</li>
    //           <li>SQL</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div> */}
    // </section>
    // <div className='relative
    //   w-52 h-36 rounded-xl bg-white p-2 shadow-lg'>
    //   <div className='absolute -right-16 -top-4
    //   w-40 h-10 bg-green-100 shadow-xl rounded-md'>
    //     <h1 className='text-background-100 text-2xl justify-center flex'>
    //       Languages
    //     </h1>
    //   </div>
    //   <div className='flex flex-wrap flew-row py-6 items-center'>
    //     <ul className='text-background-100'>
    //       <li><img src={Picture} alt='' className='h-12 w-12'/></li>
    //       <li><img src='../assets/pictures/logo-placeholder.jpg' alt=''
    //         className='h-12 w-12'/></li>
    //       <li>C</li>
    //       <li>PHP</li>
    //     </ul>
    //   </div>
    // </div>
    <section className='flex flex-col flex-wrap'>
      <div className='flex py-8 justify-center'>
        <h1 className='text-white text-2xl'>Skills</h1>
      </div>
      <div className='flex flex-col md:flex-row md:justify-evenly'>
        <div className='md:w-28'>
          <h2 className='text-white text-xl'>
            Languages
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>Java(FX)</li>
              <li className=''>TypeScript</li>
              <li className=''>C</li>
              <li className=''>PHP</li>
              <li className=''>SQL</li>
            </ul>
          </div>
        </div>
        <div className='md:w-28'>
          <h2 className='text-white text-xl'>
            Frameworks
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>React</li>
              <li className=''>Tailwindcss</li>
              <li className=''>Laravel</li>
              <li className=''>ExpressJS</li>
            </ul>
          </div>
        </div>
        <div className='md:w-28'>
          <h2 className='text-white text-xl'>
            Tools
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>SceneBuilder</li>
              <li className=''>Postman</li>
              <li className=''>Git</li>
              <li className=''>API Rest</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
};
