import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'
import './Shop.css'
function Product(props) {
  const {id,productName,price,productImage}=props.data;
  const {addToCart,cartItems}=useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage}>
        </img>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p><b><text>{'\u20B9'}</text></b>{price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
        Add To Cart {cartItemCount>0 && <>({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Product