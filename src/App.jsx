
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './pages/Navigation';
import AnimateRoute from './components/AnimateRoute';

function App() {


  return (
    <Router>
      <div className='bg-white py-[1%]'>
        <Navigation />
        <AnimateRoute />
      </div>
    </Router >
  )
}

export default App
