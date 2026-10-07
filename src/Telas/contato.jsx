import Mapa from '../components/Mapa';

function Contato() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h1 className="contact-block">Contato</h1>
        <div className="contact-label">
          <p><strong>Endereço:</strong> Avenida das Inovações, 742, Jardim Paulista, São Paulo – SP, CEP: 01415-000</p>
        </div>
        <div className="contact-label">
          <p><strong>Telefone:</strong> (11) 4002-8922</p>
        </div>
        <div className="contact-label">
          <p><strong>Horário:</strong> Seg. a Sex. 9h às 19h</p>
        </div>
        <div className="contact-label">
          <p><strong>Redes sociais:</strong> @architecture_digital_project</p>
        </div>
      </div>
      <div className="map-placeholder">
        <Mapa/>
      </div>
    </section>
  );
}

export default Contato;