import classes from './PortfolioPreview.module.scss';

function PortfolioPreview() {
  return (
    <div className={classes.container}>
      <div className={classes.seeMoreBox}>
        <h1 className={classes.title}>NASZE REALIZACJE</h1>
        <button className={classes.seeMoreBtn}>
          <div className={classes.iconBox}>
            <span class="material-icons" style={{fontSize: '90px'}}>double_arrow</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default PortfolioPreview;