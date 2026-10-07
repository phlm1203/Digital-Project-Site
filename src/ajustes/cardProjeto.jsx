import { Link } from 'react-router-dom';

function ProjetoCard({ id, nome, descricao, criador, imagem }) {
  return (
    <article className="project-item-content">
      <img src={imagem} alt={nome} className="project-item-image"/>
      <div className="project-item">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>{criador}</strong>
        <Link to={`/projeto/${id}`} className="btn btn-small">Ver detalhes</Link>
      </div>
    </article>
  );
}

export default ProjetoCard;