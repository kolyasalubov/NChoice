import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import './Product-details.css';
// import Button from '@material-ui/core/Button';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ProductListPosts from '../product-list-posts';
import withStoreService from '../hoc';
import {
  productLoaded,
  productsLoaded,
  productsRequested,
  catalogLoaded,
  sizesLoaded,
} from '../../actions';

const ProductDetails = ({
  id,
  product,
  productLoaded,
  productsLoaded,
  productsRequested,
  storeService,
  products,
}) => {
  const [getSizes, setSizes] = useState([]);
  useEffect(() => {
    productsRequested();
    storeService.getProductById(id).then((res) => productLoaded(res));
  }, [productsRequested, storeService, id, productLoaded]);

  useEffect(() => {
    storeService.getProductProperties(id).then((res) => setSizes(res));
  }, [id, storeService]);

  useEffect(() => {
    productsRequested();
    storeService.getAllProducts().then((res) => productsLoaded(res));
  }, [productsLoaded, productsRequested, storeService]);

  const newProducts = products.slice(-3);

  const sizeItem = getSizes
    .reduce((accum, { size }) => [...accum, ...size], [])
    .map((item) => (
      <div key={item} className="sizeItem">
        <span>{item}</span>
      </div>
    ));
  return (
    <Card className="wrapper">
      <Card.Body className="cardBody">
        <Row className="justify-content-md-center">
          <Col className="images">
            <Col className="zoom">
              <Image
                src={`/images/products/${product.images}`}
                className="img"
                rounded
              />
            </Col>
            <Col className="zoom">
              <Image
                src={`/images/products/${product.images}`}
                className="img"
                rounded
              />
            </Col>
            <Col className="zoom">
              <Image
                src={`/images/products/${product.images}`}
                className="img"
                rounded
              />
            </Col>
          </Col>
          <Col className="mainImgWrapper">
            <Image
              src={`/images/products/${product.images}`}
              className="mainImg"
              rounded
            />
          </Col>
        </Row>
        <Col className="text">
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="productDescription">
            {product.description}
          </Card.Text>
          <Card.Text
            style={{ backgroundColor: product.color }}
            className="color"
          ></Card.Text>
          <Col className="size">{sizeItem}</Col>
          <Card.Body className="buttons">
            <FontAwesomeIcon icon={faHeart} className="heart button" />
            <Button variant="dark" className="button">Add to card</Button>
            <Button variant="dark" className="button">By now</Button>
            {/* <Button>Add to card</Button>
            <Button>By now</Button> */}
          </Card.Body>
        </Col>
      </Card.Body>
      <hr />
      <div className="similarItems">Similar items</div>
      <hr />
      <ProductListPosts products={newProducts} className="routingImg" />
    </Card>
  );
};

const mapStateToProps = ({
  productsList: { product, products, loading, propetries },
}) => ({
  products,
  product,
  loading,
  propetries,
});
const mapDispatchToProps = {
  productLoaded,
  productsLoaded,
  productsRequested,
  catalogLoaded,
  sizesLoaded,
};

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
