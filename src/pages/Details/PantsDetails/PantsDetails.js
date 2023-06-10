import React, { useState } from "react";
import "./PantsDetails.css"
import {Link, useParams} from 'react-router-dom';
import pants from "../../../datas/pants/pantsdata";

const PantsDetails = () => {
  const {id} = useParams();
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
        <img src={pants[id-1].image} alt="666"></img>
      </div>
      <div className="details">
        <h2>{pants[id-1].name}</h2>
        <p>Description</p>
        <p>Price: 80 euros</p>
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

export default PantsDetails;
