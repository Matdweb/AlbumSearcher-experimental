import './input.css'
import AlbumSearcher from './AlbumSearcher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AlbumSearcher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
