import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20220819/y5ID/62ff7d15f997dd394c076c1d/-1117Wx1400H-461394698-green-MODEL3.jpg',
      name: 'Green Shirt',
      category: 'Shirt',
      seller: 'Suresh Textiles',
      price: 500
    },
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20220819/BsAy/62ff7cf4f997dd394c0767e0/-473Wx593H-461398366-white-MODEL.jpg',
      name: 'White Shirt',
      category: 'Shirt',
      seller: 'Ramesh Textiles',
      price: 600
    },
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20220819/qNWz/62ff7cfaaeb2691761888134/-473Wx593H-461398366-brown-MODEL.jpg',
      name: 'Brown Shirt',
      category: 'Shirt',
      seller: 'Saoji Textiles',
      price: 500
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;