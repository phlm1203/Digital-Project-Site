import about from '../assets/about.png';

function Sobre() {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h2>Sobre</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
        </div>
        <div className="about-image">
          <img src={about} />
        </div>
      </section>

      <section className="mission">
        <div className="mission-inner">
          <h2>Principal Foco</h2>
          <p mission-text>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          <p mission-text>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p> 
        </div>
      </section>

      <section className="section">
        <h2>Certificados</h2>
      </section>
    </>
  );
}

export default Sobre;