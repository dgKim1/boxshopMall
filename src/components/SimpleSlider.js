import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import ImgCard from './ImgCard';

const SliderImg = [
  {
    img: '/img/img_white_1.png',
    number: "1"
  },
  {
    img: '/img/img_white_2.png',
    number: "2"
  },
  {
    img: '/img/img_white_3.png',
    number: "3"
  },
  {
    img: '/img/img_white_4.png',
    number: "4"
  },
  {
    img: '/img/img_white_5.png',
    number: "5"
  },
  {
    img: '/img/img_white_6.png',
    number: "6"
  },
  
]

const SimpleSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        cssEase: "linear"
      };
  return (
    <Container className='my-12' id="lank-slider">
    <Slider {...settings}>
      {
        SliderImg.map((item)=>
          (<ImgCard img={item.img} num={item.number}/>)
        )
      }
    </Slider>
    </Container>
  )
}

export default SimpleSlider
