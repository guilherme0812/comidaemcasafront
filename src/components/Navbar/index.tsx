import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/icons/home.png'
import { Menu, List } from './components';

interface Props {
  children: any,
  className: string,
}

interface INavbar {
  to?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Navbar: React.FC<INavbar> = ({ to }) => {
  const [visibleMobile, setVisibleMobile] = useState(true)

  const navigate = useNavigate()

  return (
    <>
      <Container className="w-full fixed px-6 py-3 md:py-5 bg-slate-50 shadow-lg">
        <div className='grid grid-cols-3'>
            <span className='flex cursor-pointer' onClick={() => to && navigate(to)}>
              <div>
                <img className='w-10/12' src={Home} alt="" />
              </div>
              <span className='font-dm text-lg ml-3 indigo-700 text-indigo-500'>Comida em casa</span>
            </span>
            <Menu {...{ visibleMobile, setVisibleMobile }} />
            {visibleMobile && <List {...{ visibleMobile }} />}
        </div>
      </Container>
    </>
  )
}
export default Navbar