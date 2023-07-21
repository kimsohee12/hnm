import React from 'react'
import { Navigate } from 'react-router-dom'
import CartList from '../cart/CartList'

const PrivateCart = ({authenticate,cart}) => {
  //로그인 o ->  디테일 페이지로 이동 로그인x -> 로그인 페이지로 이동
  return authenticate == true? <CartList cart={cart}/> : <Navigate to = "/login"/>
}

export default PrivateCart