import React from 'react'

function Header() {
  return (
    <>
    <div className='bg-[#FEF5E7] flex flex-col md:flex-row md:p-11'>
        <div className="hero-text p-5 md:flex flex-col justify-center  flex-auto md:w-64 ">
            <p className='font-custom text-center md:text-start  my-2 text-4xl md:text-7xl md:my-3'>Not feeling like yourself lately? You’re not alone.</p>
            <p className='md:text-xl md:text-start  text-center my-2'>It’s something most people experience at some point. And there are simple things you can do that can help.</p>
        </div>
        <div className="hero-img flex-auto md:w-36 md:p-5">
            <img src="https://www.headtohealth.gov.au/sites/default/files/h2h/2022-03/group-walking-2x.png" alt=""/>
        </div>
    </div>
    </>
  )
}

export default Header