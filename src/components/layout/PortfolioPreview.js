import classes from './PortfolioPreview.module.scss';
import { Link } from 'react-router-dom';

function PortfolioPreview() {
  return (
    <div className={classes.container}>
      <div className={classes.bgMask}>
        <div className={classes.seeMoreBox}>
          <h1 className={classes.title}>Nasze realizacje</h1>
          <button className={classes.seeMoreBtn}>
            <Link to='/portfolio' className={classes.iconBox}>
              <span className={classes.materialIcons} style={{fontSize: '7vw'}}>double_arrow</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPreview;