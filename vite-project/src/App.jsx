import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hola from './components/hola';
import Landing from './components/landing';
import Breakfast from './components/breakfast';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de presentación */}
        <Route path="/" element={<Hola />} />

        {/* Página de inicio de sesión */}
        <Route path="/login" element={<Landing />} />

        {/* Otras rutas si es necesario */}
        <Route path="/breakfast" element={<Breakfast />} />

      </Routes>
    </BrowserRouter>
  )
}



export default App;
