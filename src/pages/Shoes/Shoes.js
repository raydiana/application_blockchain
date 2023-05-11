import React from 'react';
import './Shoes.css';
import { Link } from 'react-router-dom'

const shoes = [
  {
    id: 1,
    name: 'Chaussure 1',
    image: 'https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2021/05/31/reebok_268771_FAB_GW8357_TPDT_20210615T073244_01.jpg',
    price: 80,
  },
  {
    id: 2,
    name: 'Chaussure 2',
    image: 'https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2022/09/20/nike_340217_DH3160_101_20220929T163744_01.jpg',
    price: 50,
  },
  {
    id: 3,
    name: 'Chaussure 3',
    image: 'https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2021/10/26/nike_290190_687977_020_20211118T151357_01.jpg',
    price: 95,
  },
  {
    id: 4,
    name: 'Chaussure 4',
    image: 'https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2023/03/29/puma_368211_389862_02_20230509T152940_01.jpg',
    price: 102,
  },
];


const Shoes = () => {
  return (
    <div className="shoes">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe">
          <Link to="/shoesdetail">
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
