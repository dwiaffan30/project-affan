import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Index from './pages'
import Makanan from './components/Makanan'
import Minuman from './components/Minuman'



export default function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/Food' element={<Makanan/>} />
        <Route path='/Drinks' element={<Minuman/>} />
      </Routes>
    </Router>
    
    
    
    </>
  )
}