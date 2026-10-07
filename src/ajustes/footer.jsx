import { Link } from 'react-router-dom';
import Logo from '../assets/logo-oficial.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <img src={Logo} alt="logo Digital Project" />
        </div>
        <div className="footer-column">
          <Link to="/contato" >Contato</Link>
          <Link to="/" >Home</Link>
          <Link to="/projetos" >Projetos</Link>
          <Link to="/sobre" >Sobre</Link>
        </div>
        <div className="footer-column">
          <h1 className="footer-title">Contato</h1>
          <p> Avenida das Inovações, 742, Jardim Paulista, São Paulo – SP, CEP: 01415-000</p>
          <p> Telefone: (11) 4002-8922</p>
          <p> Seg. a Sex. 9h às 19h</p>
          <p> @architecture_digital_project</p>
        </div>
      </div>
      <span className="footer-title">© 2026 Digital Project Architecture — Todos os direitos reservados.</span>
    </footer>
  );
}

export default Footer;