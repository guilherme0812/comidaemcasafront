import { AboutUs, HeaderHome } from './components';
import Navbar from '../../components/Navbar';
import { isAuthenticated } from '../../services/auth';

const Home = () => {
  console.log(isAuthenticated())

  return (
    <div>
      <Navbar />
      <HeaderHome />
      <AboutUs />
    </div>
  )
}
export default Home