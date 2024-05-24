import Home from './pages/Home'
import Resize from './pages/Resize'

import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  	return (
    <>
      <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resize" element={<Resize/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
