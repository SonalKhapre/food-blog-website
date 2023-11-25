import React from 'react'
import logo from '../assets/logo.png';
import vector from '../assets/Vector 1.png';
import pizza from '../assets/Group 289.png';
import './TopComponent.css';

const TopComponent = () => {
  return (
    <>
    <div className='container'>
    <div className='leftDiv'>
    <div className='logo'>
        <img  alt='logo' src={logo} />
    </div>
    <div className='title'>
        <h2 style={{font: 'source-sans-pro'}}>Discover The <span style={{color:'#E23744'}}>Best</span> Food And Drinks</h2>
    </div>
    <div className='desc'>
    <p style={{font:'open-sans'}}>Naturally made Healthcare Products for the better care & support of your body.</p>
    </div>
    <button>Explore Now!</button>
    </div>
    <div className='rightDiv'>
        <img alt='vector' src={vector} style={{ height:'893px', width:'752px'}}/>
        <div className='pizzaDiv'>
        <img alt='pizza' src={pizza} style={{ height:'804px', width:'735px'}}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default TopComponent