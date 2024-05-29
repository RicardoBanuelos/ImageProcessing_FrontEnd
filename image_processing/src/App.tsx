import Home from './pages/Home'
import Resize from './pages/Resize'

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
          </Routes>
        </Router>
    </>
  )
}

export default App
