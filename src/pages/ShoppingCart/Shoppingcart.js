import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./Shoppingcart.css"

const cartItems = [{
    id: 1,
    name: "Chaussure 1",
    price: 19.99,
    quantity: 1
}];
const ShoppingCart = () => {
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price")
  const quantity = searchParams.get("quantity");
  console.log(price);
    const removeFromCart = (item) => {
        cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      };
    
      const calculateTotal = () => {
        let total = 0;
        for (const item of cartItems) {
          total += item.price * item.quantity;
        }
        return total.toFixed(2);
      };
    
      const checkout = () => {
        // 执行付款逻辑
    
        // 跳转到付款成功页面或其他操作
      };

  return (
    <div>
      <h2>Panier</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>ShoppingCart is empty!</p>
      ) : (
        <div class="mainc">
          {cartItems && cartItems.map((item) => (
            <div key={item.id}>
                <img class="imgc" src="https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2021/05/31/reebok_268771_FAB_GW8357_TPDT_20210615T073244_01.jpg"></img>
              <h3>{item.name}</h3>
              <p>Price：{item.price}</p>
              <p>Number：{item.quantity}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <h4>Sum：{calculateTotal()}</h4>
          <button onClick={checkout}>Pay</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
