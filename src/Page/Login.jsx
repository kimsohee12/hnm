import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'


const Login = () => {
  const[id,setId] = useState('');
  const[password,setPassword] = useState('');
  
  const nav = useNavigate()
  const dispatch = useDispatch();

  const loginUser=(event)=>{
    event.preventDefault()
    dispatch(authenticateAction.login(id,password))
    nav('/')
  }

  return (
    <div className='loginBox'>
      <h2>로그인</h2>
      <div>
        <form className='login' onSubmit={(event)=>loginUser(event)}>
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" onChange={(event)=>setId(event.target.value)}/>
            <div className="form-label">Email address</div>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form2Example2"className="form-control" onChange={(event)=>setPassword(event.target.value)} />
            <div className="form-label">Password</div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login