import React from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultButton = ({ value, to }) => {
  const styleButton = "font-dm px-4 py-2 rouded rounded bg-indigo-500 text-white hover:scale-105 ease-out duration-300"
  const navigate = useNavigate();

  const handleClick = (target) => {
    console.log(target)
    navigate(target);
  }

  return (
    <div>
      <button className={styleButton} onClick={() => handleClick(to)}> {value} </button>
    </div>

  )
}
export default DefaultButton