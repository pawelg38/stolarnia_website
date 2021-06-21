import classes from './Adventages.module.scss';
import Card from './Card';
import Box from '@material-ui/core/Box';

function Adventages() {
  return (
    // <Box boxShadow={5}>
      <div className={classes.container}>
        <h1>Dbamy o zadowolenie naszych klientów!</h1>
        <div className={classes.cards}>
          <Card title="Dbałość o szczegóły" icon="square_foot"/>
          <Card title="Wieloletnie doświadczenie" icon="handyman"/>
          <Card title="Szybka realizacja" icon="timer"/>
        </div>
      </div>
    // </Box>
  )
}

export default Adventages;