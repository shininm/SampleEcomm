import React from 'react'
import './Shop.css'
import {PRODUCTS} from '../../product'
import Product from './Product'
function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>My Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) =>(
          <Product data={product}></Product>
        ))}
      </div>
    </div>
  )
}

export default Shop