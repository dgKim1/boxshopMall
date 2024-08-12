import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState(null);
  const [query,setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q')||"";
    let url = `https://my-json-server.typicode.com/dgKim1/boxshopMall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container id='products-list'>
        <Row>
            {
            productList&&productList.map((product)=>(
              <Col lg={3}>
              <ProductCard item={product}/>
              </Col>
            ))
            }
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
