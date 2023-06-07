import React from 'react';
import { useState } from 'react';
import ProductView from './components/product-view';
import RequestMaker from './components/request-maker';
import InfoBar from './components/info-bar';
function App() {
  const [queryObject, setqueryObject] = useState({
    keyword: '', 
    category: '',
    price: '',
  });

  const handleQueryObject = (data) => {
    setqueryObject(data);
  }


  return (
    <div>
      <h1>Welcome to My App</h1>
      <InfoBar handleQueryObject={handleQueryObject} />
      <RequestMaker queryObject={queryObject} />
      <ProductView />
    </div>
  );
}

export default App;

