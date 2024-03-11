import React from 'react';
import './Portfolio.css';

const Carousel = () => {
  return (
    <div className='portfolio-section'>
      <div className="images">
        <div className="image-slide">
          <a href="/"><img src="./images/home/pro2.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro3.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro4.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro2.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro3.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro4.jpg" alt="" /></a>
          
          
        </div>
        <div className="image-slide">
          <a href="/"><img src="./images/home/pro2.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro3.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro4.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro2.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro3.jpg" alt="" /></a>
          <a href="/"><img src="./images/home/pro4.jpg" alt="" /></a>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
