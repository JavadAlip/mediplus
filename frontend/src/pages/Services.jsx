import React from 'react'
import { services } from '../assets/data/service'
import ServiceCard from '../components/Services/SercviceCard'

const Services = () => {
  return <section className='pt-[160px]'>
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
        {services.map((item, index) => (
          <ServiceCard item={item} index={index} key={index} />))}
      </div>
    </div>
  </section>


}

export default Services