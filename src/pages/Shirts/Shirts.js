import React from 'react'
import './Shirts.css'
import { Link } from 'react-router-dom'
import shirts from '../../datas/shirts/shirtsdata'

const Shirts = () => {
  return (
    <div className="shirts">
      {shirts.map((shirt) => (
        <div key={shirt.id} className="shirt">
          <Link to={`/shirtsdetails/${shirt.id}`}>
            <img src={shirt.image} alt={shirt.name}/>
          </Link>
          <h3>{shirt.name}</h3>
          <p>Prix : {shirt.price} euros</p>
        </div>
      ))}
    </div>
  );
};
export default Shirts;