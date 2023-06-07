import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

function ProductView() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const productData = useSelector((state) => state.data);
  const errorData = useSelector((state) => state.error);
  const loadingData = useSelector((state) => state.loading);

  let cardCreator;

  useEffect(() => {
    if (errorData) {
      setError(errorData);
    } else {
      setError(null);
    }

    if (loadingData) {
      setLoading('Loading...');
    } else {
      setTimeout(() => {
        setLoading(null);
      }, 1000);
    }
  }, [errorData, loadingData, productData]);

  if(!loading) {
    cardCreator = productData.map((product) => {
      return (
        <Card style={{ width: '18rem' }} key={product._id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.category}, {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }

  return (
    <div>
      <div className='error'>{error}</div>
      <div className='loading'>{loading}</div>
      <div className='cards'>{cardCreator}</div>
    </div>
  );
}

export default ProductView;
