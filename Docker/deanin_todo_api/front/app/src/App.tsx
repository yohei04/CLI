import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])

  const url = 'http://localhost:3000/products';

  useEffect(() => {
    axios.get(url).then((result) => {
      console.log(result)
      setProducts(result.data);
    })
    .catch(err => console.log(err)) ;
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {products.map((product: any) => (
          <ul key={product.id}>
            <p>種類: {product.product}</p>
            <p>誕生日: {product.created_at}</p>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
