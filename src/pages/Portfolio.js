import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/layout/Slider';
import Adventages from '../components/layout/Adventages';
import PortfolioPreview from "../components/layout/PortfolioPreview";
import classes from './Portfolio.module.scss';
import img from '../assets/img/img1.jpg';

function Portfolio() {
  const [showGallery, setShowGallery] = useState(false);

  function showGalleryHandler() {
    setShowGallery(!showGallery);
  }
  return (
    <div>
      <div className={classes.topMargin}></div>
      <div className={`${classes.projectSection} ${classes.bg1}`}>
        <div className={classes.info}>
          <h1>Kuchnia 2021</h1>
          <p>Zrealizowana na zlecenie w Rzeszowie.</p>
        </div>
        <button onClick={showGalleryHandler}>
          <span class="material-icons" style={{fontSize: "60px", color: "#fff"}}>arrow_right_alt</span>
        </button>
      </div>
      <div className={`${classes.projectSection} ${classes.bg2}`}>
        <div className={classes.info}>
          <h1>Kuchnia 2021</h1>
          <p>Zrealizowana na zlecenie w Rzeszowie.</p>
        </div>
        <button onClick={showGalleryHandler}>
          <span class="material-icons" style={{fontSize: "60px", color: "#fff"}}>arrow_right_alt</span>
        </button>
      </div>
      {/* <Link to='/'>Home</Link> */}
    </div>
  )
}

export default Portfolio;