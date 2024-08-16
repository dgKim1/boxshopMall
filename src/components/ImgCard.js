import React from 'react'
import styles from './ImgCard.css';

const ImgCard = ({img,num}) => {
  return (
    <div className='flex justify-center'>
        <img src={img} width={200}/>
            <div className='number-box'>
                {num}
            </div>
    </div>
  )
}

export default ImgCard
