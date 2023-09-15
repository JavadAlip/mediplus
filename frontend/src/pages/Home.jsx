import React from 'react'

const Home = () => {
  return <>
  {/* hero section */}
  <>
  <section className='hero__section pt-[60px]2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        {/* hero content */}
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-primaryColor font-[800] md:text-[60px] md:leading-[70px]'>Your Healthy life is Our First Priority.</h1>
            <p className='text_para font-[500] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className='btn'>Request an Appoinment</button>
          </div>
        </div>

        </div> 
    </div>
  </section>
  </>

  </>
    
  
}

export default Home