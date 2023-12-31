import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = ({cart, setCart}) => {
  let {id} = useParams();
  const [product,setProduct] = useState(null);
  const [selected,setSelected] = useState('');

  //클릭한 제품
  const getProductDetail=()=>{
    let url = `https://my-json-server.typicode.com/kimsohee12/hnm/products/${id}`
    axios.get(url).then((res)=>setProduct(res.data));
}
  
  useEffect(()=>{
    getProductDetail()
  },[]);
  const handleChangeOption =(e)=>{
    setSelected(e.target.value)

  }


  //장바구니에 물건 담기
  const handleCart =()=>{
    if(selected===""){
      alert('사이즈를 선택 해주세요 ')
    }else{
      alert('장바구니로 이동 완료')
      const cartItem ={
        id : product.id,
        image : product.img,
        title : product.title,
        price : product.price,
        size : selected
      }
      setCart([...cart, cartItem]);
      console.log(cart);
    }
  
  }



  return (
    getProductDetail&&(

      <div className='detailBox'>
        <img className='cardDetailImg' src={product?.img}/>
        <div className='txtDetail'>
          <div className="new-productDetail">{product?.new==true?"신제품":""}</div>
          <div className='titleDetail'>{product?.title}</div>
          <div className='priceDetail'> ￦{product?.price}</div>
          <div  className="choiceDetail">{product?.choice==true?"Conscious choice":""}</div>
          <select onChange={handleChangeOption} value={selected}>
            <option>사이즈 선택</option>
            
              <option>{product?.size[0]}</option>
              <option>{product?.size[1]}</option>
              <option>{product?.size[2]}</option>
              
          </select>
          <br/>
          <button type="button" className="btn btn-dark" onClick={()=>handleCart()}>추가</button>
        </div>

      </div>
    )
  )
}

export default ProductDetail