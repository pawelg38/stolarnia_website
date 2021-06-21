import classes from "./MainNavigation.module.scss";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function MainNavigation() {
  return (
    <Box boxShadow={3}>
      <div className={classes.mainNav}>
        <div className={classes.logo}>{"<Logo>"}</div>
        <Button className={classes.customMdBtn} variant="contained" >Portfolio</Button>
        <Button className={classes.customMdBtn} variant="contained" >O firmie</Button>
        <Button className={classes.customMdBtn} variant="contained" >Kontakt</Button>
      </div>
    </Box>
  )
}

export default MainNavigation;