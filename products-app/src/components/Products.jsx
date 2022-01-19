import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dropdown, DropdownButton, Card, Container, Row, Col } from "react-bootstrap";
const _ = require("lodash");

export default function Products() {
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState(products);

  const sortedAZ = _.sortBy(foundProducts, "name");
  const sortedZA = _.orderBy(foundProducts, ["name"], ["desc"])
  const sortedLowHigh = _.orderBy(foundProducts, ["price"], ["asc"])
  const sortedHighLow = _.orderBy(foundProducts, ["price"], ["desc"])
  const [sortParam, setSortParam] = useState(foundProducts);
  

  //filter function for search results
  const filter = (e) => {
    const search = e.target.value;
    console.log(search);
    const results = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    });
    setFoundProducts(results);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const api = "https://products-api-01.herokuapp.com/api/products";
      axios.get(api)
        .then(data => {
          setProducts(data.data);
          setFoundProducts(data.data);
          setSortParam(data.data);
        })
    }
    fetchProducts();
  }, []);


  return (
    <div>
      <div>
        <input
          icon="search"
          type="search"
          placeholder="Search..."
          onChange={filter}/>
      </div>

      <Dropdown>
        <DropdownButton id="dropcown-btn" title="SORT BY:">
          <Dropdown.Item onClick={()=>{setSortParam(sortedAZ)}}>Alphabetically, A-Z</Dropdown.Item>
          <Dropdown.Item onClick={()=>{setSortParam(sortedZA)}}>Alphabetically, Z-A</Dropdown.Item>
          <Dropdown.Item onClick={()=>{setSortParam(sortedLowHigh)}}>Price, low to high</Dropdown.Item>
          <Dropdown.Item onClick={()=>{setSortParam(sortedHighLow)}}>Price, high to low</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
  
      <Container className="grid">
        <Row>
          {sortParam.map((item) => {
            return (
              <Col xs="12" sm="6" lg="4" xl="3" key={item._id}>
                <Link to={`/products/${item._id}`} style={{ textDecoration: 'none', color: "black"}}>
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
