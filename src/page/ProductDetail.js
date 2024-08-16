import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";

const ProductDetail = () => {
  let { id } = useParams();
  const size = ["S", "M", "L"];
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://my-json-server.typicode.com/dgKim1/boxshopMall/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="flex justify-end">
          <img src={product?.img} width={300} />
        </Col>
        <Col>
        <Card border="dark" className='w-80'>
        <Card.Header>{product?.title}</Card.Header>
        <Card.Body>
          <Card.Title><h>{product?.price}</h></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {size.map((size) => (
                  <Dropdown.Item>{size}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
        <Card.Footer>
        <div className="button-container">
            <Button variant="dark">추가</Button>
            <div className='flex'>
              <button className='text-xs ml-4 mr-1'><IoMdHeartEmpty className='h-6 w-6'/>62</button>
              <button className='text-xs'><CiShare2 className='h-6 w-6'/>공유</button>
            </div>
          </div>
        </Card.Footer>
      </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
