import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({item,setIsSlide}) => {
  const navigate = useNavigate();
  const [isOn,setisOn] = useState(false);
  const showDetail = ()=>{
    navigate(`/product/${item.id}`);
    setIsSlide(false);
  }


  return (
    <Card className='card-box' onClick={showDetail}>
        <Card.Img src={item.img} width={250}/>
        <button className='heart-bttn'
        ><FaRegHeart size={30} /></button>
        <Card.Body>
        {item.choice?<Card.Subtitle className='mb-2'>Consious choice</Card.Subtitle>:null}
        <Card.Title >{item.title=="슬림핏 맘 하이웨이스트 앵클 진"?"슬림핏 ... 앵클진" : item.title}</Card.Title>
        <Card.Text className='mb-1'>${item.price}</Card.Text>
        <Card.Text className='mb-1'>{item.new===true?"신제품":""}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProductCard
