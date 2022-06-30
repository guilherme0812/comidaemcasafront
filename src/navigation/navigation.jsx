import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../screens/Home'
import Institutions from '../screens/Instituitions'

const RoutesComidaEmCasa = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/instituicoes" element={<Institutions/>}></Route>
        </Routes>
      </Router>
  )
}
export default RoutesComidaEmCasa