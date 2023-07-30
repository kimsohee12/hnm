import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const PreparingPage = () => {
    const nav = useNavigate()
    const homClick=()=>{
        nav('/')
    }
  return (
    <div className='readyBox'>
        <img src='https://www.mobifren.com/resource/img/common/ready.gif' className='readyImg'></img>
        <br/>
    </div>
  )
}

export default PreparingPage