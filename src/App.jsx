import './App.css'
import BooksPage from './pages/BooksPage.jsx'
import MainPage from './pages/MainPage.jsx'
import Intro from './pages/Intro.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Intro />}></Route>
      <Route path='/books' element={<MainPage />}></Route>
      <Route path='/books/:bookId' element={<BooksPage />}></Route>
    </Routes>
  )
}

export default App
