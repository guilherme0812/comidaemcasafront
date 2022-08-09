import React from 'react';
import { useNavigate } from 'react-router-dom';


interface IDefaultButton {
  value: string,
  to: string,
  light?: boolean,
  className?: string
}
const DefaultButton: React.FC<IDefaultButton> = ({ value, to, light, className }) => {
  const styleButton = `${className} font-dm px-4 py-2 rouded rounded ${!light ? 'bg-indigo-500 text-white' : 'bg-white border-indigo-500 text-indigo-500 '} border-2 border-indigo-500 text-white hover:scale-105 ease-out duration-300`
  const navigate = useNavigate();

  const handleClick = (target: string): void => {
    if (to) {
      navigate(target);
    }
  }

  return (
    <div>
      <button className={styleButton} onClick={() => handleClick(to)}> {value} </button>
    </div>

  )
}
export default DefaultButton