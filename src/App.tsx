import { lazy } from 'react';
const TravelHeader = lazy(() => import('./components/travelHeader/TravelHeader'))
const TravelFooter = lazy(() => import('./components/travelFooter/TravelFooter'))
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import './layout/main.scss'

function App() {

  return (
    <Router>
      <TravelHeader />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <TravelFooter />
    </Router>
  )
}

export default App
