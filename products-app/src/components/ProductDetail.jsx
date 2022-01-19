import { useState, useEffect} from "react";
import {Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const api = "https://products-api-01.herokuapp.com/api/products";
      const res = await axios.get(`${api}/${id}`);
      console.log(res.data);
      setProduct(res.data);
    }
    fetchProduct();
  }, [id]);

  console.log(product);

  return(
    <div>
      <Container className="grid">
        <Row>
        <Col>
              <Card.Img src={product.imgURL} alt={product.name} />
          </Col>
          <Col>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>$ {product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
          </Col>
          
          </Row>
        </Container>
    </div>
  )
}
