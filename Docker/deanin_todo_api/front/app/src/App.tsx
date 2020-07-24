import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface Product {
  id: number;
  product: string;
  created_at: string;
  updated_at: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [value, setValue] = useState('');

  const url = 'http://localhost:3000/products';

  const getProduct = async () => {
    await axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addProduct = async (value: string) => {
    await axios
      .post(url, {
        product: value,
      })
      .then((res) => {
        setProducts([...products, res.data]);
      });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    addProduct(value);
    setValue('');
  };

  const deleteProduct = async (id: number) => {
    await axios
      .delete(`${url}/${id}`)
      .then((res) =>
        setProducts([...products.filter((product) => product.id !== id)])
      );
  };

  console.log(products);

  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onSubmit}>動物を追加</button>
      </form>

      <div>
        {products.map((product: Product) => (
          <ul key={product.id}>
            <p>種類: {product.product}</p>
            <p>誕生日: {product.created_at}</p>
            <button onClick={() => deleteProduct(product.id)}>XX</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
