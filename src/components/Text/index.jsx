import React from 'react';

const Text = ({children, chassName, ...props}) => {
  return (
    <>
      <p className={`text-xl text-slate-500 font-dm ${chassName}`} {...props}>{children}</p>
    </>
  )
} 
export default Text