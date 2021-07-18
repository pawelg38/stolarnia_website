import classes from './EntryView.module.scss'
import slide1 from '../../assets/img/slide5.jpg';
import logo from '../../assets/logo/logo.png';

function EntryView() {
  return (
    <div className={classes.container}>
      <img src={slide1} alt="background"/>
      <div className={classes.textBox}>
        <div className={classes.boxMask}>
          <img className={classes.logo} src={logo} alt="logo"/>
        </div>
        <div className={classes.text}>
          Zaplanuj z nami
          wnętrze swojego domu!
        </div>
      </div>
    </div>
  )
}

export default EntryView;