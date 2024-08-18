import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import ImgCard from './ImgCard';

const SliderImg = [
  {
    img: '/img/jacket_white.png',
    number: "1"
  },
  {
    img: 'https://noona-hnm.netlify.app/ankle-jeans.jpeg',
    number: "2"
  },
  {
    img: 'https://noona-hnm.netlify.app/regular-wide-jeans.jpeg',
    number: "3"
  },
  {
    img: 'https://noona-hnm.netlify.app/single-jacket.jpeg',
    number: "4"
  },
  {
    img: 'https://noona-hnm.netlify.app/sweat-shirt.jpeg',
    number: "5"
  },
  {
    img: 'https://noona-hnm.netlify.app/track-jacket.jpeg',
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
      <div className='flex justify-center items-center'>
      <h className="outfit-shop text-3xl my-4">인기 상품 순위🔥</h>
      </div>
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
