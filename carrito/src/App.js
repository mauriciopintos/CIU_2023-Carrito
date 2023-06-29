import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import React, {Fragment, useState, useEffect} from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrito from './components/Carrito';

function App() {
  return (
    <div>
      <Header titulo="Carrito"/>
      
      <Main/>

      <Carrito
        // carrito={carrito}
      />
      <Footer/>
    </div>
  );
}

export default App;
