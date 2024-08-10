import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = ()=>{
    navigate(`/product/${item.id}`);
  }
  return (
    <Card className='card-box' onClick={showDetail}>
        <Card.Img src={item.img} width={250}/>
        <Card.Body>
        {item.choice?<Card.Subtitle className='mb-2'>Consious choice</Card.Subtitle>:null}
        <Card.Title >{item.title}</Card.Title>
        <Card.Text className='mb-1'>${item.price}</Card.Text>
        <Card.Text className='mb-1'>{item.new===true?"신제품":""}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProductCard
