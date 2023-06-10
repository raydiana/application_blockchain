import React from 'react';
import './Shoes.css';
import { Link } from 'react-router-dom'
import shoes from '../../datas/shoes/shoesdata';


const Shoes = () => {
  return (
    <div className="shoes">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe">
          <Link to={`/shoesdetail/${shoe.id}`}>
            <img src={shoe.image} alt={shoe.name}/>
          </Link>
          <h3>{shoe.name}</h3>
          <p>Prix : {shoe.price} euros</p>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
