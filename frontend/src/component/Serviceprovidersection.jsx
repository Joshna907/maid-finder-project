import React from 'react';
import "./serviceprovidersection.css";

const Serviceprovidersection = () => {
  return (
    <div className='service-container'>
      <h1>OUR SERVICES</h1>
      <div className='service-card'>

        {/* baby care card */}
        <div className='card'>
          <img src='/images/babycare.PNG' alt='babycare' />
          <h2 className='service-name'>Baby Care</h2>
          <p className='service-info'>Booking for a caring individual to take care of children and assist with activities. Great opportunity for those who love working with kids.</p>
        </div>

        {/* senior care card */}
        <div className='card'>
          <img src='/images/seniorcare.jpeg' alt='Senior care' />
          <h2 className='service-name'>Senior Care</h2>
          <p className='service-info'>Compassionate senior care professional needed to assist with daily activities and provide companionship to the elderly.</p>
        </div>

        {/* housekeeping card */}
        <div className='card'>
          <img src='/images/housekeeping.jpeg' alt='housekeeping' />
          <h2 className='service-name'>Housekeeping</h2>
          <p className='service-info'>Join our team to maintain clean and organized homes. Perfect for those who take pride in their work.</p>
        </div>

        {/* cooking card */}
        <div className='card'>
          <img src='/images/cooking.jpg' alt='cooking' />
          <h2 className='service-name'>Cooking</h2>
          <p className='service-info'>Seeking a passionate cook to prepare delicious meals. Ideal for those with a love for food and creativity.</p>
        </div>
      </div>
    </div>
  )
}

export default Serviceprovidersection;
