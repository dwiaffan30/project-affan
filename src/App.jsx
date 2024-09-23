import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Makanan from './components/Makanan'
import Minuman from './components/Minuman'
import Index from './pages/Halaman'



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