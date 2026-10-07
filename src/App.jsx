import { Routes, Route } from 'react-router-dom';
import Header from './ajustes/header';
import Footer from './ajustes/footer';
import Home from './Telas/home';
import Projetos from './Telas/projetos';
import Contato from './Telas/contato';
import Sobre from './Telas/sobre';
import Galeria from './Telas/galeria'

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