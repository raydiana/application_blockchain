import React, { useContext, useState } from "react";
import './ShirtsDetails.css'
import {Link, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import shirts from "../../datas/shirts/shirtsdata";

const ShirtsDetails = () => {
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {

    setSearchParams({
      price: "19.99",
      quantity: "1"
    });

  };


  return (
    <div className="container1">
      <div className="product1image">
        <img src={shirts[id-1].image} alt="666" width='450px' height='450px'></img>
      </div>
      <div className="details">
        <h2>{shirts[id-1].name}</h2>
        <p>{shirts[id-1].description}</p>
        <p>Price: {shirts[id-1].price} euros</p>
        <div className="quantity">
          <button className="btn" onClick={decreaseQuantity}>-</button>
          <input type="number" value={quantity} min="1" readOnly />
          <button className="btn" onClick={increaseQuantity}>+</button>
        </div>
        <Link to="/ShoppingCart" onClick={handleAddToCart}>
          <button className="btn">Confirm</button>
        </Link>
      </div>
    </div>
  );
};

export default ShirtsDetails;
