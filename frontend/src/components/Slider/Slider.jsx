import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function CarouselSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-img1">
      <img src='https://c8.alamy.com/comp/2HTNFR0/friends-drink-coffee-and-talk-in-cafe-vector-flat-illustration-of-restaurant-or-cafeteria-interior-with-table-plants-waitress-and-group-of-happy-multiracial-people-sitting-together-2HTNFR0.jpg'/>
      </div>     
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Welcome to Friend Quest</h3>
          <p className='carousel-p'>Empowering Your cordial : find companions for various social 
                activities!</p>
        </Carousel.Caption>
   
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
          <img src="https://img.freepik.com/free-vector/group-friends-together-illustration_52683-31749.jpg"/>
      </div>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Our Vision and Mission</h3>
          <p className='carousel-p'>Our mission is to connect like-minded people, making it easy for users to arrange 
                meetups for shopping trips, movie nights, or social gatherings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
        <img src="https://thumbs.dreamstime.com/z/diverse-international-group-standing-women-girl-holding-hands-sisterhood-friends-union-feminists-flat-vector-137314434.jpg?ct=jpeg"/>
      </div>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Fostering connections</h3>
          <p className='carousel-p'>
          we aim to enhance social interactions, reduce loneliness, and build a community
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
// 
// 
//
// 
// 
// 

// 
// 
// 
export default CarouselSlide;

// all girls 