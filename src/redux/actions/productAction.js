
//미들웨어 함수들을 이곳에 저장! 
//미들웨어 -> 함수를 리턴함  
//getState :  현재 스테이트의 정보 받아오기

function getProducts(searchQuery){
    return async(dispatch , getState)=>{
        let url = `https://my-json-server.typicode.com/kimsohee12/hnm/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload : {data}})
    }
}

//getProducts 를 가지고있는 객체를 반환
export const productActin = {getProducts};