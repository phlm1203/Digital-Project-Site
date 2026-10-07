import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Galeria from './pages/Galeria'

function App() {  

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App