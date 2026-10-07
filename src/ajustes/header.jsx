import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo Digital Project" />
      </Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
      <Link to="/galeria" className="btn btn-small">Ver Galeria</Link>
    </header>
  );
}

export default Header;