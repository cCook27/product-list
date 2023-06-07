import React from 'react';
import ProductView from './components/product-view';
import RequestMaker from './components/request-maker';
import InfoBar from './components/info-bar';
function App() {

  

  return (
    <div>
      <h1>Welcome to My App</h1>
      <InfoBar />
      <RequestMaker />
      <ProductView />
    </div>
  );
}

export default App;

