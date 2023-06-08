import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import '../component-css/product-view.css'

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
          <Card className="card" key={product._id}>
            <Card.Text className='price'>
              ${product.price}
            </Card.Text>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.category}
              </Card.Text>
            </Card.Body>
          </Card>
        
        
      );
    });
  }

  return (
    <div>
      <div className='loading'>{loading}</div>
      <div className='error'>{error}</div>
      <div className='card-container'>{cardCreator}</div>
    </div>
  );
}

export default ProductView;
