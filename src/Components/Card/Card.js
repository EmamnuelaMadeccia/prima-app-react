import './style.css';
import Button from '../Button/Button';
import imgCaffe from '../Card/caffe.jpg';

function Card({ color, dati, senzaBottone }) {
  return (
    // <div className= {`card${ props.tema}`}> //questo metodo crea una classe nuova formata dall'unione di card e la props inviata
    <div className={'card ' + color}>
      {/*metodo 2*/}
      <div className="card-body">
        {/* metodo 1*/}
        <img src={dati.cover.src} alt={dati.cover.alt} />
        {/* CONSIGLIATO PER IMMAGINI CONTENUTE IN COMPONENTS*/}
        {/* metodo 2*/}
        {/* <img src="./assets/caffepublic.jpg" alt="caffe" /> */}
        {/* CONSIGLIATO PER IMMAGINI CHE VANNO CARICATE AL LANCIO DELL APPM, ES LOGO DELLA NAV*/}
        <div>
          <h1>{dati.title}</h1>
          <p>{dati.price}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="labels">
          {/*se etichetta esiste allora fammi la map dell array etichette*/}
          {dati.labels && dati.labels.map((labels, index) => <span key={index}> {labels}</span>)}
        </div>
        {dati.senzaBottone ? null : <Button>{dati.buttonTitle}</Button>}
      </div>
    </div>
  );
}

export default Card;
