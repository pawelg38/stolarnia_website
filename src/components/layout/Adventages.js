import classes from './Adventages.module.scss';
import Card from './Card';

function Adventages() {
  return (
    <div className={classes.container}>
      <h1>Dbamy o zadowolenie naszych klientów!</h1>
      <div className={classes.cards}>
        <Card title="Dbałość o szczegóły" icon="square_foot"/>
        <Card title="Wieloletnie doświadczenie" icon="handyman"/>
        <Card title="Szybka realizacja" icon="timer"/>
      </div>
    </div>
  )
}

export default Adventages;