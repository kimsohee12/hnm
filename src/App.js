import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Page/ProductAll';
import Login from './Page/Login';
import PrivateCart from './route/PrivateCart';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRouter from './route/PrivateRouter';
import PreparingPage from './Page/PreparingPage';
import Main from './Page/Main';
import Footer from './Page/Footer';

function App() {

//전체 상품 페이지, 로그인 , 상품페이지
//전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//로그인 버튼을 누르면 로그인 페이지가 나온다.
//상품 디테일을 눌렀으나 로그인이 안되어있을 경우에는 로그인 페이지가 나온다
//로그인 되어 있으면 상품 디테일 페이지를 볼 수 있다.
//로그아웃 버튼을 클릭하면 로그아웃이 된다
//로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. /다시 로그인 하면 페이지가 보인다
//로그인 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//상품을 검색 할 수 있다.
//상품 디테일에서 추가 버튼을 누르면 장바구니에 상품이 추가되고 장바구니 옆 숫자가 1증가된다.
//장바구니에 들어가면 내가 담은 아이템들을 확인할 수 있다.

//로그인 확인 (로그인o : ture , 로그인x : false)
const [authenticate,setAuthenticate] = useState(false);
const [cart,setCart] =useState([]);

useEffect(()=>{
  console.log('aaa',authenticate);
},[authenticate])

  return (
    <div>
      <NavBar cart={cart} setCart ={setCart}/>
      <br/><br/>
      <Routes>
        
        <Route path='/' element={<Main/>}/>
        <Route path='/woman' element={<ProductAll/>}/>
        <Route path='/cart' element={<PrivateCart cart={cart}/>}/>
        <Route path='/preparing' element={<PreparingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<PrivateRouter cart={cart} setCart ={setCart}/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
