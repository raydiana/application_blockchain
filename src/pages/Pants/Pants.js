import React from 'react'
import './Pants.css'
import { Link } from 'react-router-dom'
import pants from '../../datas/pants/pantsdata'

const Pants = () => {
  return (
    <div className="pants">
      {pants.map((pant) => (
        <div key={pant.id} className="pant">
          <Link to={`/pantsdetails/${pant.id}`}>
            <img src={pant.image} alt={pant.name}/>
          </Link>
          <h3>{pant.name}</h3>
          <p>Prix : {pant.price} euros</p>
        </div>
      ))}
    </div>
  );
};
export default Pants;