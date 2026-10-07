import { Link } from 'react-router-dom';
import ProjetoCard from '../ajustes/cardProjeto';
import imgProjetos1 from '../assets/img-projetos/img-projetos1.png';
import imgProjetos2 from '../assets/img-projetos/img-projetos2.png';
import imgProjetos3 from '../assets/img-projetos/img-projetos3.png';
import imgProjetos4 from '../assets/img-projetos/img-projetos4.png';

const projeto = [
  { id: 1, 
    nome: 'Burj Khalifa', 
    descricao: 'O prédio mais alto do mundo, com 828 metros de altura.', 
    criador: 'Adrian Smith', 
    imagem: imgProjetos1 
},

  { id: 2, 
    nome: 'Sydney Opera House', 
    descricao: 'Famoso por seus tetos em formato de conchas sobre a água.', 
    criador: 'Jørn Utzon', 
    imagem: imgProjetos2 
},

  { id: 3, 
    nome: 'Museu Guggenheim', 
    descricao: 'Obra de Frank Gehry revestida de titânio que transformou a economia local.', 
    criador: 'Frank Gehry', 
    imagem: imgProjetos3 
},

  { id: 4, 
    nome: 'Sagrada Família', 
    descricao: 'A monumental basílica projetada por Antoni Gaudí, em construção desde 1882.', criador: 'Antoni Gaudí', 
    imagem: imgProjetos4 
}
];

function Projetos() {
  return (
    <>
      <section>
        <div className="hero">
          <p className="eyebrow">PROJECT <strong>LORUM</strong></p>
          <div className="hero-image">
            <img src={imgProjetos1} />
            <p>
              <Link to="/contato" className="btn">Comece um projeto com a Digital Project</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Nossos Projetos</h2>
        <div className="projeto-grid">
          {projeto.map((projeto) => (
            <ProjetoCard key={projeto.id} {...projeto} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projetos;