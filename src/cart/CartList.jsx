import React from 'react';
import Cart from './Cart';

const CartList = ({cart,authenticate}) => {
  return (
    <div className='cartListBox'>
      
      {cart.length === 0? 
        <div className='cartBoxTxt'>
        <h2>장바구니에 담긴 상품이 없습니다.</h2>
        <p>원하는 상품을 장바구니에 담아보세요 !</p>
      </div>
      :
      (cart.map((cart, index)=>{
        return <Cart key={index} cart = {cart}/>
      }))
    }
        
        <br/><br/>
    </div>
  )
}

export default CartList