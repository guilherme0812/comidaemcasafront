import * as React from 'react';

interface IInput extends React.PropsWithChildren{
  className?: string
  placeholder?: string
  size?: string
}

const Input:React.FC<IInput> = ({children, className, placeholder, size}) => { 
  return(
    <div>
      <input type="text" placeholder={placeholder} className={`block w-full px-3 py-1 rounded-lg border-2 block mb-2 border-indigo-400 ${className}`} />
    </div>
  )
}
export default Input