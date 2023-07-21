import React from 'react'
import Button from 'react-bootstrap/Button';


const Cart = ({cart}) => {
  return (
    <div className='cartListBox'>
        <div className='cartList'>
            <img width={'170px'}src={cart.image}/>
            <div className='cartTxtBtn'>
              
              <div className='cartTxt'>
                <p>{cart.title}</p>
                <p>사이즈 : {cart.size}</p>
                <p>{cart.price}원</p>
                <p>무료배송</p>
              </div>
              <Button className='cartbtn' variant="danger">주문하기</Button>
            
            </div>
              
        </div>
    </div>
  )
}

export default Cart