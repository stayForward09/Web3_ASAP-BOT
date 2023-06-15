import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';

const App = () => {
  const location = useLocation()
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
export default App