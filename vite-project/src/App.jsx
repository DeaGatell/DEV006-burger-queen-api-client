import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Breakfast from './components/breakfast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/breakfast" element={<Breakfast/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
