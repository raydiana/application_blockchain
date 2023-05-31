import React, { useState } from "react";
import './ShoesDetail.css'
import {Link} from 'react-router-dom'

const ShoesDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    // 将商品信息和数量添加到购物车

    // 跳转到购物车页面
    // window.location.href = "购物车页面的URL";
  };

  return (
    <div className="container">
      <div className="product">
        <img src='https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2021/05/31/reebok_268771_FAB_GW8357_TPDT_20210615T073244_01.jpg' alt="666"></img>
      </div>
      <div className="details">
        <h2>Price</h2>
        <p>80 euros</p>
        <div className="quantity">
          <button className="btn" onClick={decreaseQuantity}>-</button>
          <input type="number" value={quantity} min="1" readOnly />
          <button className="btn" onClick={increaseQuantity}>+</button>
        </div>
        <Link to={{
          pathname: "/ShoppingCart",
          state: {
            cartItems: [{
              id: 1,
              name: "chaussure",
              price: 19.99,
              quantity: quantity
            }]
          }
        }}>
          <button className="btn">Confirm</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoesDetail;
