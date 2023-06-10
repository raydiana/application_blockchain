import React from 'react';
import './Shorts.css'
import { Link } from 'react-router-dom'

const shorts = [
  {
    id: 1,
    name: 'Sportswear Sport',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7bdc801a-a30b-44ec-b6c4-f32ffbf700e1/short-flow-tisse-double-sportswear-sport-essentials-pour-8wqlBS.png',
    price: 39.99,
  },
  {
    id: 2,
    name: 'Sportswear Club',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/laxuxh44sphcnakuejfb/short-imprime-sportswear-club-pour-ttLX21.png',
    price: 44.99,
  },
  {
    id: 3,
    name: 'Stride',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97c4645f-023c-4961-a282-8a6b27658d35/short-de-running-avec-sous-short-integre-18-cm-dri-fit-stride-pour-NdlKMP.png',
    price: 49.99,
  },
  {
    id: 4,
    name: 'Jordan Flight MVP',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b837cf8b-e1a5-416f-9452-cb85cd39c91e/short-en-tissu-fleece-jordan-flight-mvp-pour-WJBhqv.png',
    price: 64.99,
  }
];

const Shorts = () => {
  return (
    <div className="shorts">
      {shorts.map((short) => (
        <div key={short.id} className="short">
          <Link to="/shoesdetail">
            <img src={short.image} alt={short.name}/>
          </Link>
          <h3>{short.name}</h3>
          <p>Prix : {short.price} euros</p>
        </div>
      ))}
    </div>
  );
};
export default Shorts;