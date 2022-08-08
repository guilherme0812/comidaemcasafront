import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../screens/Home'
import Institutions from '../screens/Instituitions'
import Register from '../screens/Register'

const RoutesComidaEmCasa = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/instituicoes" element={<Institutions/>}></Route>
          <Route path="/cadastro" element={<Register/>}></Route>
        </Routes>
      </Router>
  )
}
export default RoutesComidaEmCasa