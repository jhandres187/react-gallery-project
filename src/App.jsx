import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Gallery } from './components/Gallery';

function App() {
  // Definir las imágenes que vas a mostrar en la galería
  const images = [
    { path: '/gallery/1', src: 'https://via.placeholder.com/150', alt: 'Imagen 1' },
    { path: '/gallery/2', src: 'https://via.placeholder.com/150', alt: 'Imagen 2' },
    { path: '/gallery/3', src: 'https://via.placeholder.com/150', alt: 'Imagen 3' },
    // Agrega más imágenes aquí
  ];

  return (
    <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Gallery Project</h1>
      </div>
      <div className='container d-flex justify-content-center'>
        <Routes>
          <Route path="/" element={<Navigation images={images} />} />
          <Route path="gallery/:id" element={<Gallery images={images} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
