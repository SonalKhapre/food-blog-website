import React from 'react'
import './MidComponent.css';
import pic from '../assets/Mask Group@2x.png';

const MidComponent = () => {
  return (
    <>
    <div className='midContainer'>
     <div className='pic'>
        <img src={pic} alt='pic'/>
     </div>
     <div className='content'>
        <h3>About Us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        
        <button>Read More</button>
        
     </div>
    </div>
    </>
  )
}

export default MidComponent