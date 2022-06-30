import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/icons/home.png'
import { Menu, List } from './components';

const Container = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Navbar = ({ to }) => {
  const [visibleMobile, setVisibleMobile] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <Container className="w-full fixed px-6 py-3 md:py-5 bg-slate-50 shadow-lg">
        <div className='m-auto w-11/12'>
          <div className='flex justify-between'>
            <span className='flex cursor-pointer' onClick={() => to && navigate(to)}>
              <div>
                <img className='w-10/12' src={Home} alt="" srcset="" />
              </div>
              <span className='font-dm text-lg ml-3 indigo-700 text-indigo-500'>Comida em casa</span>
            </span>
            <div className='hidden md:block'>
              <List />
            </div>
            <Menu {...{ visibleMobile, setVisibleMobile }} />
          </div>
          <div className='block md:hidden'>
            {visibleMobile && <List {...{ visibleMobile }} />}
          </div>
        </div>
      </Container>
    </>
  )
}
export default Navbar