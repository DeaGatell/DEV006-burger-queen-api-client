import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hola from './components/hola';
import Landing from './components/landing';
import Breakfast from './components/breakfast';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hola/>} />
        <Route path="/login" element={<Landing/>} />
        <Route path="/breakfast" element={<Breakfast/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
