import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/mypic.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%"}}
    >
    
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
    <div>
      <p>I' m</p>
      <p>Muhammad</p>
      <p>Nouman</p>
      </div>  
    </div>  
    </div>
    </div>
  )
}

export default Hero
