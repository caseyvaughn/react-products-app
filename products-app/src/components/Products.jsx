import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      const api = "https://products-api-01.herokuapp.com/api/products";
      axios.get(api)
        .then(data => {
          // console.log(data.data);
          setProducts(data.data);
        })
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <Container className="grid">
        <Row>
          {products.map((item) => {
            return (
              <Col xs="12" sm="6" lg="4" xl="3" key={item._id}>
                <Link to={`/products/${item._id}`}>
                  <Card>
                  <Card.Img src={item.imgURL} alt={item.name}></Card.Img>
                  <Card.Body>
                    <Card.Text>{item.name}</Card.Text>
                    <Card.Text>$ {item.price}</Card.Text>
                  </Card.Body>
                  </Card>
                  </Link>
              </Col>
            )
          })}
        </Row>
    </Container>
    </div>
  )
}
