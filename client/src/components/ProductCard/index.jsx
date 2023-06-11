import React from 'react'
import "./style.scss";

const ProductCard = ({item}) => {
  return (
    <div className="card">
      <img src={item.img1} />
      <img id='hoverImg' src={item.img2} />
      <div className="txt">
        <h2>{item.name}</h2>
        <h2>${item.price}</h2>
      </div>
      <button>{item.category}</button>
    </div>
  );
}

export default ProductCard