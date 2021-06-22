import classes from './PortfolioPreview.module.scss';
import { Link } from 'react-router-dom';

function PortfolioPreview() {
  return (
    <div className={classes.container}>
      <div className={classes.seeMoreBox}>
        <h1 className={classes.title}>NASZE REALIZACJE</h1>
        <Link to='/'>Home</Link>
        <button className={classes.seeMoreBtn}>
          <Link to='/portfolio' className={classes.iconBox}>
            <span class="material-icons" style={{fontSize: '90px'}}>double_arrow</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PortfolioPreview;