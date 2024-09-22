import React, { useEffect } from 'react'

const images = {
  sample1: require('.././asset/sample_1.png'),
  sample2: require('.././asset/sample_2.png'),
  sample3: require('.././asset/sample_3.png')
};
function ServicesinPage() {


  return (
    
    <div className='services-section-inpage'>
        <div className='title'>
        <a className='heading-clone'>Services</a>
        <a className='sub-heading'><p>Explore our services</p></a>
        </div>
    <span></span>
    <div className='item'>
      <a><img src={images.sample1} alt='' /></a>
      <a><img src={images.sample2} alt='' /></a>
      <a><img src={images.sample3} alt='' /></a>
    </div>
  </div>

  )
}
export default ServicesinPage
