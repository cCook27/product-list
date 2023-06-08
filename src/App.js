import React from 'react';
import ProductView from './components/product-view';
import RequestMaker from './components/request-maker';
import InfoBar from './components/info-bar';
import Paginator from './components/paginator'
import 'bootstrap/dist/css/bootstrap.css';

function App() {



  return (
    <div>
      <h1>Welcome to the Product Store, where we sell products.</h1>
      <InfoBar />
      <RequestMaker />
      <ProductView />
      <Paginator />
    </div>
  );
}

export default App;

