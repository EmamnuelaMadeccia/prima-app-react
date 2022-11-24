import Card from '../Card/Card';
import datiCard from '../Card/dati.json';

function Main(props) {
  // let array = [1, 2, 3, 4];
  return (
    <main>
      <h2>{props.title}</h2>
      {datiCard.cards.map(
        (
          elements //non è consigliabile usare l' index
        ) => (
          <Card key={elements.id} colore={props.theme} dati={elements} />
        )
      )}
    </main>
  );
}

export default Main;
