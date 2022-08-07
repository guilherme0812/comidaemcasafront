import * as  React from 'react';
import { AboutUs, HeaderHome } from './components';
import Navbar from '../../components/Navbar';
import { isAuthenticated } from '../../services/auth';

const Home: React.FC = () => {
  console.log(isAuthenticated())

  return (
    <div>
      <Navbar to="/" />
      <HeaderHome />
      <AboutUs />
    </div>
  )
}
export default Home