import React from 'react';
import { Link } from 'react-router-dom';
import './ShoesDetail.css';

const shoes = [
  {
    id: 1,
    name: 'Chaussure 1',
    image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2021/05/31/reebok_268771_FAB_GW8357_TPDT_20210615T073244_01.jpg',
    price: 80,
  },

];


const Shoes = () => {
  return (
    <div className="shoes1">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe">
          <img src={shoe.image} alt={shoe.name}>
          </img>
          <h3>{shoe.name}</h3>
          <p>Prix : {shoe.price} euros</p>
          <button> + </button>
          &nbsp;&nbsp;
          <span> 1 </span>
          &nbsp;&nbsp;
          <button> - </button>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
