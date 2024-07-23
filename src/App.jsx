import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {/* <Route path='/about' element={<About />}/> */}

            {/* <Route path='/blog' element={<Blog />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
