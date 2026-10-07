import imgGaleria1 from '../assets/img-galeria/img-galeria1.png';
import imgGaleria2 from '../assets/img-galeria/img-galeria2.png';
import imgGaleria3 from '../assets/img-galeria/img-galeria3.png';
import imgGaleria4 from '../assets/img-galeria/img-galeria4.png';
import imgGaleria5 from '../assets/img-galeria/img-galeria5.png';
import imgGaleria6 from '../assets/img-galeria/img-galeria6.png';
import imgGaleria7 from '../assets/img-galeria/img-galeria7.png';

function galeria() {
    return (
        <section className="gallery">
            <div className="gallery-item">
               <img src={imgGaleria1} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria2} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria3} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria4} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria5} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria6} />
            </div>
            <div className="gallery-item">
               <img src={imgGaleria7} />
            </div>
        </section>
    );
}

export default galeria;