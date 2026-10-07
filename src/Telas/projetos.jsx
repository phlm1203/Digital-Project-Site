import { Link } from 'react-router-dom';
import ProjetoCard from '../components/ProjetoCard';
import image from '../assets/projetosImg/image.png';
import image1 from '../assets/projetosImg/image1.png';
import image2 from '../assets/projetosImg/image2.png';
import image3 from '../assets/projetosImg/image3.png';
import image4 from '../assets/projetosImg/image4.png';

const projeto = [
  { id: 1, 
    nome: 'Burj Khalifa', 
    descricao: 'O prédio mais alto do mundo, com 828 metros de altura.', 
    criador: 'Adrian Smith', 
    imagem: image1 
},
  { id: 2, 
    nome: 'Sydney Opera House', 
    descricao: 'Famoso por seus tetos em formato de conchas sobre a água.', 
    criador: 'Jørn Utzon', 
    imagem: image2 
},
  { id: 3, 
    nome: 'Museu Guggenheim', 
    descricao: 'Obra de Frank Gehry revestida de titânio que transformou a economia local.', 
    criador: 'Frank Gehry', 
    imagem: image3 
},
  { id: 4, 
    nome: 'Sagrada Família', 
    descricao: 'A monumental basílica projetada por Antoni Gaudí, em construção desde 1882.', 
    criador: 'Antoni Gaudí', 
    imagem: image4 
}
];

function Projetos() {
  return (
      <section className="projects-page">
        <h1>Nossos Projetos</h1>
        <p>Escolha um projeto para conhecer nosso trabalho.</p>
        <div className="project-list">
          <div className="projeto-grid">
            {projeto.map((projeto) => (
              <ProjetoCard key={projeto.id} {...projeto} />
            ))}
          </div>
        </div>
      </section>
  );
}

export default Projetos;