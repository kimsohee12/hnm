import React from 'react'
import { Navigate } from 'react-router-dom'
import CartList from '../cart/CartList'
import { useSelector } from 'react-redux';

const PrivateCart = ({cart}) => {
  const authenticate = useSelector((state=>state.auth.authenticate))
  //로그인 o ->  디테일 페이지로 이동 로그인x -> 로그인 페이지로 이동
  return authenticate == true? <CartList cart={cart}/> : <Navigate to = "/login"/>
}

export default PrivateCart