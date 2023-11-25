import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/image1.png'
import img2 from  '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.png'
import '../components/Slides.css'

const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <div className='mainContainer'>
    <h3>Latest Articles</h3>
    <Slider {...settings}>
    {data.map((d) => (
        <div key={d.id} className='flexdiv'>
    <div  className='cards'>
    <div className='imgdiv'>
        <img src={d.img} alt={d.name} />
    </div>
    <div className="article">
              <p className="name">{d.name}</p>
              <p className="review">{d.review}</p>
              <button className='bttn'>Read More</button>
            </div>
   </div>
   </div>
    ))}
    
    </Slider>
    
    </div>
  )
}

const data = [
    {
        id: 1,
      name: `Grilled Tomatoes at Home`,
      img: img1,
      review: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`
    },
    {
        id: 2,
      name: `Snacks for Travel`,
      img: img2,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        id: 3,
      name: `Post-workout Recipes`,
      img: img3,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        id: 4,
      name: `How To Grill Corn`,
      img: img4,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        id: 5,
      name: `Crunchwrap Supreme`,
      img: img5,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        id: 6,
      name: `Broccoli Cheese Soup`,
      img: img6,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
    
  ];
  
  
  
export default Slides