import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import React, {Fragment, useState, useEffect} from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header titulo="Carrito"/>
      
      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
