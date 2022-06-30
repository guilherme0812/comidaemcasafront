import React from 'react';
import Navbar from '../../components/Navbar';
import HeaderInstituitions from './components/HeaderInstituitions'
import Instituitions from './components/Instituitions'

const Institutions = () => {

  return (
    <div>
      <Navbar to="/" />
      <HeaderInstituitions/>
      <Instituitions />
    </div>
  )
}
export default Institutions