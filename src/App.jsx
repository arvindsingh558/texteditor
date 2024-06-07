import {BrowserRouter, Routes ,Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Textform/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
