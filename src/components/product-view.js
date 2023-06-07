import React from 'react';
import { useSelector } from 'react-redux';

function ProductView() {

  const productData = useSelector((state) => state.data);

  let cardCreator = productData.map((product) => {
    
  })

  return (
    <div>
      Hello
    </div>
  );
}

export default ProductView;
