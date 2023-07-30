import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import{Container, Row,Col} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import {productActin} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
//combineReducer 를 사용 하면 state=>state.productList 가 아닌
//state=>state.product.productList 이렇게 써줘야함
const productList = useSelector((state)=>state.product.productList)
  //const [productList,setProductList]=useState([]);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  //전체 상품 가져오기
  const getProducts=()=>{
    let searchQuery = query.get('q')||""
    console.log('쿼리',searchQuery); 
    //dispatch에서 바로 store로 가는게 아닌 함수 이용 ! 
    //미들웨어 함수로 만들어논 getProducts를 거쳐서 감 
    //getProducts에 searchQuery 값을 매개변수로 넘겨주기 
    dispatch(productActin.getProducts(searchQuery))
  
}

  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      
      <Container>
        <Row>
          {productList.map((menu,index)=>(
          <Col lg={3} key={index}>
            <ProductCard item={menu}/>
          </Col>
          ))}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll