import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from "react-router-dom";
function ProductFilter() {
    const [productList, setProductList] = useState(null);
  const [query,setQuery] = useSearchParams();
  const getProducts = async () => {
    let tabQuery = query.get('search')||"";
    let url = `https://my-json-server.typicode.com/dgKim1/boxshopMall/products?&`;
    (tabQuery === "Man")||(tabQuery==="Women") ? url+=`gender=${tabQuery}`:url+=`category=${tabQuery}`;
    console.log(url);
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
  )
}

export default ProductFilter
