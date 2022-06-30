import React, { useState, useEffect, useRef } from 'react';
import PeploStudying from '../../../assets/images/piople-studying.png'
import DefaultButton from '../../../components/DefaultButton';

const HeaderInstituitions = () => {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [ref]);

  return (
    <div className='px-6' ref={ref}>
      <div className='flex h-screen m-auto w-11/12 md:justify-center items-center'>

        <div>
          <div className='px-1'>
            <h1 className='text-5xl text-bold text-cente text-center font-forum'>Uma doação tranforma <br />diversas vidas</h1>
          </div>
          <img className='m-auto w-8/12' src={PeploStudying} alt="" srcset="" />
          <div className='flex justify-center mt-5'>
            <DefaultButton value="ONGs parceiras" to="/" />
          </div>
        </div>

      </div>
    </div>
  )
}
export default HeaderInstituitions