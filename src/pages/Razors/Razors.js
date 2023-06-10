import React from 'react';
import './Razors.css'
import { Link } from 'react-router-dom'

const razors = [
  {
    id: 1,
    name: 'Skull Shaver Pitbull',
    image: 'https://m.media-amazon.com/images/I/61quaj0bKIL._AC_SX679_.jpg',
    price: 119.99,
  },
  {
    id: 2,
    name: 'Skull Shaver Pitbull Platinum Pro',
    image: 'https://m.media-amazon.com/images/I/610zS56zZdL._AC_SX679_.jpg',
    price: 258.99,
  },
  {
    id: 3,
    name: 'Skull Shaver Pitbull Silver PRO',
    image: 'https://m.media-amazon.com/images/I/61F8mbJGlVL._AC_SX679_.jpg',
    price: 184.99,
  },
  {
    id: 4,
    name: 'Butterfly Kiss PRO',
    image: 'https://m.media-amazon.com/images/I/31ViXNt4wLL._AC_.jpg',
    price: 239.99,
  }
];

const Razors = () => {
  return (
    <div className="razors">
      {razors.map((razor) => (
        <div key={razor.id} className="razor">
          <Link to="/shoesdetail">
            <img src={razor.image} alt={razor.name}/>
          </Link>
          <h3>{razor.name}</h3>
          <p>Prix : {razor.price} euros</p>
        </div>
      ))}
    </div>
  );
};
export default Razors;