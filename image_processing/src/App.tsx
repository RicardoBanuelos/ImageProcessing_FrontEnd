import Home from './pages/Home'
import Resize from './pages/Resize'
import Blur from './pages/Blur'
import Grayscale from './pages/Grayscale'

import NavBar from './components/NavBar'

import GlobalStyle from './styles/GlobalStyles'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  	return (
    <>
        <GlobalStyle/>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resize" element={<Resize/>}/>
            <Route path="/blur" element={<Blur/>}/>
            <Route path="/grayscale" element={<Grayscale/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
