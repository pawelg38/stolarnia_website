import classes from './Slider.module.scss'
import slide from '../../assets/img/slide4.jpg';
import slide1 from '../../assets/img/slide5.jpg';

function Slider() {
  return (
    <div className={classes.sliderContainer}>
      <img src={slide1} />
      <div className={classes.slideText}>
        Buduj z nami swój dom!<br/>
        Lorem ipsum<br/>
        Lorem ipsum Lorem ipsum<br/>
      </div>
    </div>
  )
}

export default Slider;