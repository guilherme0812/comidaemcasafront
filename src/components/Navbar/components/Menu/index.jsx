import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Menu = ({visibleMobile, setVisibleMobile}) => {

  const handleClick = () => {
    visibleMobile ? setVisibleMobile(false) : setVisibleMobile(true)
  }

  return (
    <>
      <div className='md:hidden' onClick={handleClick}><IoMenu size={30} className="text-indigo-500" /></div>
    </>
  )
}

export default Menu