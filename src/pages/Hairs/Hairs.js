import React from 'react';
import './Hairs.css'
import { Link } from 'react-router-dom'

const hairs = [
  {
    id: 1,
    name: '30pcs Wedding Hairpins',
    image: 'https://m.media-amazon.com/images/I/71CWjSOPVVL.__AC_SX300_SY300_QL70_ML2_.jpg',
    price: 7.99,
  },
  {
    id: 2,
    name: 'Mehayi Set of 4 Large Hair Clips',
    image: 'https://m.media-amazon.com/images/I/71jTF6fzaLL.__AC_SX300_SY300_QL70_ML2_.jpg',
    price: 11.99,
  },
  {
    id: 3,
    name: 'Wedding Hair Accessories',
    image: 'https://m.media-amazon.com/images/I/61kH8+o4+IL._AC_SX300_SY300_.jpg',
    price: 9.99,
  },
  {
    id: 4,
    name: 'TseenYi Barrette Wedding Flower',
    image: 'https://m.media-amazon.com/images/I/41dP5oCeuqL.__AC_SX300_SY300_QL70_ML2_.jpg',
    price: 7.99,
  }
];

const Hairs = () => {
  return (
    <div className="hairs">
      {hairs.map((hair) => (
        <div key={hair.id} className="hair">
          <Link to="/shoesdetail">
            <img src={hair.image} alt={hair.name}/>
          </Link>
          <h3>{hair.name}</h3>
          <p>Prix : {hair.price} euros</p>
        </div>
      ))}
    </div>
  );
};
export default Hairs;