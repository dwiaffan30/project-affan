import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Makanan from './components/Makanan'
import Minuman from './components/Minuman'
import Halaman from './pages/Halaman'




export default function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Halaman/>} />
        <Route path='/Food' element={<Makanan/>} />
        <Route path='/Drinks' element={<Minuman/>} />
      </Routes>
    </Router>
    
    
    
    </>
  )
}