import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface Product {
  id: number;
  product: string;
  created_at?: string;
  updated_at?: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');

  const url = 'http://localhost:3000/products';

  const getProduct = async () => {
    await axios
      .get(url)
      .then((res) => {
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

  // const updateProduct = (id: string, product: Product) => {
  //   axios.patch(`${url}/${id}`, { product: product })
  //     .then((res) => {
  //       const productIndex = products.findIndex(x => x.id === id)
  //       const products = update(products, { [productIndex]: { $set: res.data } })
  //       this.setState({ products: products })
  //     })
  //     .catch((data) => {
  //       console.log(data)
  //     })
  // }

  const findItem = (id: number) => {
    const item = products.find((product) => product.id === id);
    if (item) {
      setValue(item.product);
    }
  };

  const editProduct = (id: number, value: string) => {
    const newProducts: any = products.map((product) =>
      product.id === id ? { id, product: value } : products
    );
    axios
      .patch(`${url}/${id}`, { product: value })
      .then((res) => console.log(res.data));
  };

  // const editProduct = (id: number, value: string) => {
  //   const newProducts: any = products.map(product => product.id === id ? { id,  product: value } : products)
  //   setProducts(newProducts)
  // }

  // useEffect(() => {
  //   if (editValue !== '') {
  //     setValue(editValue)
  //     console.log(editValue)
  //   } else {
  //     setValue('')
  //   }
  // }, [editValue])

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
        <button type="button" onClick={() => editProduct(10, value)}>
          動物を編集
        </button>
      </form>

      <div>
        {products.map((product: Product) => (
          <ul key={product.id}>
            <p>種類: {product.product}</p>
            <p>誕生日: {product.created_at}</p>
            <button onClick={() => deleteProduct(product.id)}>XX</button>
            <input
              type="text"
              value={product.product}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => findItem(product.id)}>edit</button>
            {/* <button onClick={() => editProduct(product.id, editValue)}>動物を編集</button> */}
          </ul>
        ))}
      </div>
      {products[0] ? (
        <div>
          <h1>{editValue}</h1>
          <input
            type="text"
            value={editValue}
            onChange={(e: any) => setEditValue(e.target.value)}
          />
          {/* <button onClick={} >edit</button> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
