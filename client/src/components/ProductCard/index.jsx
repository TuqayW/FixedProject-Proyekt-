import React from 'react'
import "./style.scss";
import {useNavigate} from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const clickHandle = async() => {
    const x = await localStorage.setItem('productId', item.id)
    navigate('/productPage')
  }

  return (
    <div className="card" onClick={clickHandle}>
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