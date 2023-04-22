import React from 'react'
import { useNavigate } from 'react-router-dom';

function Text({cls,text}) {
    const nav =useNavigate();
    const gotofirstPage=()=>{
        nav("/")
    }
  return (
    <div className="text-container">
        <div className='text-h1'>
        <h1 className={cls}>{text}</h1>
        </div>
        <div className='text-button'>
        <button className='text-but' onClick={gotofirstPage}>Logout</button>
        </div>
    </div>
  )
}   

export default Text;