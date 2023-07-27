function login(id,password){
    return (dispatch,getstate)=>{

        dispatch({type : "LOGIN_SUCCESS", payload : {id,password}})
    }
}
function logout() {
    return (dispatch,getstate)=>{
        dispatch({type:"LOGOUT", payload : ""})
    }
}

export const authenticateAction = {login,logout};