import classes from './Slider.module.scss'
import slide from '../../assets/img/slide4.jpg';
import slide1 from '../../assets/img/slide5.jpg';
import logo from '../../assets/logo/logo.png';

function Slider() {
  return (
    <div className={classes.sliderContainer}>
      <img src={slide1} />
      <div className={classes.textBox}>
        <div className={classes.boxMask}>
          <img className={classes.logo} src={logo} />
        </div>
        <div className={classes.text}>
          Zaplanuj z nami
          wnętrze swojego domu!
        </div>
      </div>
    </div>
  )
}

export default Slider;