import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const colors = [
  "black",
  "white",
  "right brown"
]

const ProductDetail = () => {
  let { id } = useParams();
  const size = ["S", "M", "L"];
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://my-json-server.typicode.com/dgKim1/boxshopMall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className='pb-16 pt-5'>
      <Row>
        <Col className="flex justify-center">
          <img src={product?.img} width={500} />
        </Col>
        <Col className='info-area'>
          <h2>{product?.title}</h2><br/>
          <p>
          24년도 FW시즌이 시작되었습니다 , 매년가을이면 {product?.title}이
          </p>
          <p>         
          많이 나오긴하지만 올해는 더욱더 유행이라 많이 나오네요,ㅎㅎ
          </p>
          <p>
          약간 감성있는 색감으로 이쁘게나와 바로 찍었습니다,^^
          </p> 
          <p>
          사이즈는 S,M,L 중에 선택할 수 있습니다ㅎㅎ
          <br/>
          <br/>
          <span className='text-red-500'>
            Model
            <br/>
          </span>
          </p>
          <p>-165cm / 65kg S사이즈</p>
          <p>-화이트 컬러 착용</p>
          <br></br>
          <p>키작남들을 위한 쇼핑몰 <span className='outfit-shop'>Yoko</span></p>
          <div className='heading-area'></div>
          <div>
            <table>
              <tr>
                <th>Price</th>&nbsp;&nbsp;
                <td>{product?.price}</td>
              </tr>
              <tr>
                <th>Comment</th>&nbsp;&nbsp;
                <td>올해 대유행할 제품입니다. 추천추천🤗</td>
              </tr>
              <tr>
                <th>Review</th>&nbsp;&nbsp;
                <td>0</td>
              </tr>
                <tr>
                  <th>Size</th>&nbsp;&nbsp;
                  <td>
                    <select className='outline-color'>
                      <option>
                        {`-[필수] 옵션을 선택해주세요- `}
                      </option>
                      <option>
                        ------------------
                      </option>
                      {
                        product?.size.map((size)=>
                        (<option>{size}</option>)
                        )
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>Color</th>&nbsp;&nbsp;
                  <td>                   
                    <select className='outline-color'>
                    <option>
                        {`-[필수] 옵션을 선택해주세요- `}
                      </option>
                      <option>
                        ------------------
                      </option>
                      {
                        colors.map((color)=>
                        (<option>{color}</option>)
                        )
                      }
                    </select>
                  </td>
                </tr>

            </table>
            <div id='total-price'>
              <strong>총 상품금액</strong><span>{`(수량):`}</span>&nbsp;
              <strong className='text-xl'>0</strong><span>{`(0개)`}</span>
              </div>
              <div className='mt-4 flex items-end'>
                <a href='#none' className='bg-black no-underline px-3 py-2 rounded-md'><span className='text-white font-bold'>바로 구매하기</span></a>&nbsp;
                <a href='#none' className='bg-white no-underline px-3 py-2 rounded-md outline-color'><span className='text-black text-center font-bold'>장바구니</span></a>&nbsp;
                <a href='#none' className='bg-white no-underline px-4 py-2 rounded-md outline-color'><FaHeart className='inline-block' color='black'/></a>
              </div>
          </div>
  

          

        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
